<?php

namespace App\Http\Controllers;

use App\Mail\RequestTrade;
use App\Mail\TradePermission;
use App\Models\Item;
use App\Models\Trade;
use App\Models\TradeMember;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Throwable;

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
		$trade = Trade::with(['tradeMembers.item.plan', 'tradeMembers.user', 'messages.sender'])->where('uuid', $tradeUuid)->first();
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
		dd($req->all());
	}

}
