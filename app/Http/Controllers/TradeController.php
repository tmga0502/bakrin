<?php

namespace App\Http\Controllers;

use App\Models\Trade;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TradeController extends Controller
{
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

	public function getTrades(): JsonResponse
	{
		$user = Auth()->user();
		$trades = Trade::with(['tradeProducers.item', 'tradeProducers.producer'])
			->whereIn('status', [1, 2])
			->whereHas('tradeProducers', function ($q) use ($user) {
				$q->where('type', 'recipient')->where('producerUuid', $user->uuid);
			})
			->get();
		return response()->json($trades, 200);
	}
}
