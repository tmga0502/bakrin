<?php

namespace App\Http\Controllers;

use App\Models\FavoriteProducer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteProducersController extends Controller
{
	public function register(Request $req): JsonResponse
	{
//		dd($req->all());
		$favoriteItem = new FavoriteProducer([
			'producerUuid' => $req->producerUuid,
			'myUuid' => Auth::user()->uuid,
		]);
		$favoriteItem->save();
		return response()->json([], status:200);
	}

	public function deregister(Request $req): JsonResponse
	{
		$favoriteItem = FavoriteProducer::where('producerUuid',  $req->producerUuid)->where('myUuid', Auth::user()->uuid)->first();
		$favoriteItem->delete();
		return response()->json([], status:200);
	}
}
