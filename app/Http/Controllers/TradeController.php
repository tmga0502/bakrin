<?php

namespace App\Http\Controllers;

use App\Mail\RequestTrade;
use App\Mail\TradePermission;
use App\Models\Item;
use App\Models\Trade;
use App\Models\TradeProducer;
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
		$trades = Trade::with(['tradeProducers.item', 'tradeProducers.producer'])
			->where('status', 0)
			->whereHas('tradeProducers', function ($q) use ($user) {
				$q->where('type', 'recipient')->where('producerUuid', $user->uuid);
			})
			->get();
		return response()->json($trades, 200);
	}


	public function getTrade($tradeUuid): JsonResponse
	{
		$trade = Trade::with(['tradeProducers.item.plan', 'tradeProducers.producer'])->where('uuid', $tradeUuid)->first();
		return response()->json($trade, 200);
	}

	//申請中の取引
	public function getPendingTrades(): JsonResponse
	{
		$trades = $this->getQueryTradeByStatus(0);
		return response()->json($trades, 200);
	}

	//進行中の取引
	public function getOngoingTrades(): JsonResponse
	{
		$trades = $this->getQueryTradeByStatus(1);
		return response()->json($trades, 200);
	}

	//取引完了した取引
	public function getCompletedTrades(): JsonResponse
	{
		$trades = $this->getQueryTradeByStatus(2);
		return response()->json($trades, 200);
	}


	public function requestTrade(request $req): JsonResponse
	{
		DB::transaction(function() use($req) {
			$authProducer = Auth()->user();
			$senderItem = Item::find($req->senderItemId);
			$recipientItem = Item::with('producer')->find($req->recipientItemId);
			$recipientProducer = $recipientItem->producer;
			//tradesModel作成
			$trade = new Trade([
				'uuid' => Str::uuid(),
				'status' => 0,
				'senderUuid' => $authProducer->uuid
			]);
			$trade->save();

			//trade_producer Modelの作成(sender)
			$trade_producer_sender = new TradeProducer([
				'tradeUuid' => $trade->uuid,
				'type' => 'sender',
				'producerUuid' => $authProducer->uuid,
				'itemUuid' => $senderItem->uuid,
			]);
			$trade_producer_sender->save();

			//trade_producer Modelの作成(recipient)
			$trade_producer_recipient = new TradeProducer([
				'tradeUuid' => $trade->uuid,
				'type' => 'recipient',
				'producerUuid' => $recipientProducer->uuid,
				'itemUuid' => $recipientItem->uuid,
			]);
			$trade_producer_recipient->save();

			//相手へメール送信
			Mail::to(['email' => $recipientProducer->email])->send(new RequestTrade);

		});
		return response()->json(true);
	}


	public function requestPermission(Request $req): JsonResponse
	{
		$trade = DB::transaction(function() use($req) {
			$trade = Trade::with(['senderProducer'])->find($req->tradeId);
			$trade->fill(['status' => 1])->save();

			//申請者にメール送信
			$sender = $trade->senderProducer;
			Mail::to(['email' => $sender->email])->send(new TradePermission($sender));

			return $trade;
		});
		return response()->json($trade, 200);
	}

	public function requestReject(Request $req): JsonResponse
	{
		dd($req->all());
	}



	protected function getQueryTradeByStatus($status)
	{
		$user = Auth()->user();
		return Trade::with(['tradeProducers.item', 'tradeProducers.producer'])
			->where('status', $status)
			->whereHas('tradeProducers', function ($q) use ($user) {
				$q->where('type', 'sender')->where('producerUuid', $user->uuid);
			})
			->orderBy('updated_at', 'DESC')->get();
	}
}
