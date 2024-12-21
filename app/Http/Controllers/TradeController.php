<?php

namespace App\Http\Controllers;

use App\Mail\RequestTrade;
use App\Mail\ShippingComplete;
use App\Mail\TradePermission;
use App\Mail\TradeRejected;
use App\Models\InvoiceDetail;
use App\Models\Item;
use App\Models\Trade;
use App\Models\TradeMember;
use App\Service\ImageService;
use App\Service\InvoiceDetailService;
use App\Service\InvoiceService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TradeController extends Controller
{

	//申請を受けている取引
    public function getTradeRequests(): JsonResponse
	{
		$user = Auth()->user();
		$trades = Trade::with(['tradeMembers.item', 'tradeMembers.user'])
			->where('status', 0)
			->whereHas('tradeMembers', function ($q) use ($user) {
				$q->where('applicant_flag', false)->where('user_id', $user->id);
			})
			->get();
		return response()->json($trades, 200);
	}


	//取引詳細
	public function getTrade($tradeUuid): JsonResponse
	{
		$trade = Trade::with(['tradeMembers.item.plan', 'tradeMembers.shipping_info', 'tradeMembers.user.shipping_info', 'messages.sender'])->where('uuid', $tradeUuid)->first();
		return response()->json($trade, 200);
	}

	//申請中の取引
	public function getPendingTrades(): JsonResponse
	{
		$user = Auth()->user();
		$trades = Trade::with(['tradeMembers.item', 'tradeMembers.user'])
			->where('status', 0)
			->whereHas('tradeMembers', function ($q) use ($user) {
				$q->where('applicant_flag', true)->where('user_id', $user->id);
			})
			->orderBy('updated_at', 'DESC')->get();
		return response()->json($trades, 200);
	}

	//進行中の取引
	public function getOngoingTrades(): JsonResponse
	{
		$user = Auth()->user();
		$trades = Trade::with(['tradeMembers.item', 'tradeMembers.user', 'messages.sender'])
			->where('status', 1)
			->whereHas('tradeMembers', function ($q) use ($user) {
				$q->where('user_id', $user->id);
			})
			->orderBy('updated_at', 'DESC')->get();
		return response()->json($trades, 200);
	}

	//取引完了した取引
	public function getCompletedTrades(): JsonResponse
	{
		$user = Auth()->user();
		$trades = Trade::with(['tradeMembers.item', 'tradeMembers.user', 'messages.sender'])
			->where('status', 2)
			->whereHas('tradeMembers', function ($q) use ($user) {
				$q->where('user_id', $user->id);
			})
			->orderBy('updated_at', 'DESC')->get();
		return response()->json($trades, 200);
	}


	//取引申請
	public function requestTrade(request $req): JsonResponse
	{
		DB::transaction(function() use($req) {
			$auth_user = Auth()->user();
			$sender_item = Item::find($req->senderItemId);
			$recipient_item = Item::with('user')->find($req->recipientItemId);
			$recipient_user = $recipient_item->user;
			//tradesModel作成
			$trade = new Trade([
				'uuid' => Str::uuid(),
				'status' => 0,
			]);
			$trade->save();

			//trade_member Modelの作成(sender)
			$trade_member_sender = new TradeMember([
				'trade_id' => $trade->id,
				'applicant_flag' => true,
				'user_id' => $auth_user->id,
				'item_id' => $sender_item->id,
				'use_discount_ticket' => $req->use_discount_ticket,
			]);
			$trade_member_sender->save();

			//trade_producer Modelの作成(recipient)
			$trade_producer_recipient = new TradeMember([
				'trade_id' => $trade->id,
				'applicant_flag' => false,
				'user_id' => $recipient_user->id,
				'item_id' => $recipient_item->id,
			]);
			$trade_producer_recipient->save();

			//相手へメール送信
			Mail::to(['email' => $recipient_user->email])->send(new RequestTrade);

		});
		return response()->json(true);
	}


	public function requestPermission(Request $req): JsonResponse
	{
		$trade = DB::transaction(function() use($req) {
			$trade = Trade::with(['tradeMembers.user'])->find($req->tradeId);
			$trade->fill(['status' => 1])->save();

			foreach($trade->tradeMembers as $tradeMember){
				//申請許諾者（自分）が割引チケットを使用するならtradeMemberのuse_discount_ticketをtrueにする
				if($tradeMember->user->id === Auth()->user()->id){
					$tradeMember->fill(['use_discount_ticket' => $req->use_discount_ticket])->save();
				}
				//両trade_memberのuse_discount_ticketの状態を見て、trueであればuserのhave_discount_ticket_countを-1する
				if($tradeMember->use_discount_ticket){
					$tradeMember->user->fill(['have_discount_ticket_count' => $tradeMember->user->have_discount_ticket_count - 1])->save();
				}
				//invoiceを作成する
				$CREATE_INVOICE = new InvoiceService($tradeMember->user);
				//Invoiceに今月のデータがあるか確認
				$invoice_data = $CREATE_INVOICE->getInvoice();

				//$invoice_dataがなければ作成する
				if($invoice_data === null){
					$invoice_data = $CREATE_INVOICE->createInvoice();
				}
				//$invoice_detailを作成する
				$invoice_detail = new InvoiceDetailService($invoice_data, $trade, $tradeMember);
				$invoice_detail->createInvoiceDetail();
			}


			//申請者にメール送信
			$sender = null;
			foreach ($trade->tradeMembers as $tradMember) {
				if(!$tradMember->applicant_flag){
					$sender = $tradMember->user;
					break;
				}
			}
			if($sender !== null){
				Mail::to(['email' => $sender->email])->send(new TradePermission($sender));
			}

			return $trade;
		});
		return response()->json($trade, 200);
	}

	public function requestReject(Request $req): JsonResponse
	{
		DB::transaction(function() use($req) {
			$trade = Trade::with('tradeMembers.user')->find($req->trade_id);
			$trade->fill(['status' => 3, 'reason' => $req->reason])->save();

			//相手にメール
			//相手(申請者)の判定
			foreach($trade->tradeMembers as $member){
				$applicant_user = null;
				$recipient_user = null;
				if($member->applicant_flag === true){
					$applicant_user = $member->user;
				}else{
					$recipient_user = $member->user;
				}
				//メール送信
				if($applicant_user!==null && $recipient_user!==null){
					Mail::to(['email' => $applicant_user->email])->send(new TradeRejected($applicant_user, $recipient_user, $trade));
				}
			}
		});
		return response()->json(true);
	}

	public function updateShippingId(Request $req): JsonResponse
	{
		$trade_member = TradeMember::with('trade')->find($req->tradeMemberId);
		$trade_member->fill(['shipping_info_id' => $req->shipping_info_id])->save();

		return response()->json($trade_member->trade);
	}

	//発送完了処理
	public function shippingComplete(Request $req): JsonResponse
	{
		$me = TradeMember::with('trade')->find($req->my_user_id);
		DB::transaction(function() use($me, $req) {
			$partner = TradeMember::with(['trade', 'user'])->find($req->partner_user_id);

			$insertArray = [
				'shipping_date' => $req->shipping_date,
			];

			if(isset($req->shipping_slip[0])){
				$imageService = new ImageService($req->shipping_slip[0], 'shipping_slip');
				$insertArray['shipping_slip_path'] = $imageService->save();
			}else{
				$insertArray['shipping_slip_path'] = $me->shipping_slip_path;
			}

			$me->fill($insertArray)->save();

			//$partnerにメール送信
			Mail::to(['email' => $partner->user->email])->send(new ShippingComplete($me, $partner, $me->trade));

			//$meのshipping_dateと$partnerのshipping_dateが共に!nullならば、tradeのstatusを2にする
			if($me->shipping_date !== null && $partner->shipping_date !== null){
				$me->trade->fill(['status' => 2])->save();
			}
		});

		return response()->json($me->trade);
	}

	//荷物の受け取り完了処理
	public function receiptComplete(Request $req): JsonResponse
	{
		$trade_member = TradeMember::with('trade')->find($req->trade_member_id);
		$trade_member->fill(['receipt_check' => true])->save();

		return response()->json($trade_member->trade);
	}

}
