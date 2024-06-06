<?php

namespace App\Http\Controllers;

use App\Models\FavoriteProducer;
use App\Models\Producer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProducersController extends Controller
{
    public function getOwn(Request $req)
    {
        if(Auth::user()){
            return Auth::user();
        }
        return response()->json(false);
    }

	public function getProducer($producerUuid): JsonResponse
	{
		$producer = Producer::with('items')->where('uuid', $producerUuid)->first();
		return response()->json($producer);
	}

    public function getPopularProducers(): JsonResponse
	{
        $producers = Producer::select('producers.*', DB::raw('COUNT(favorite_producers.id) as favorite_count'))
            ->leftJoin('favorite_producers', 'producers.id', '=', 'favorite_producers.producerUuid')
            ->groupBy('producers.id')
            ->orderBy('favorite_count', 'desc')
            ->get()
            ->take(50);
        return response()->json($producers);
    }

    public function getFavoriteProducers(Request $req): JsonResponse
    {
        $user = Producer::where('loginToken', $req->auth_token)->first();
        $userUuid = $user->uuid;
        $producerQuery = Producer::with('favoriteProducers')->whereHas('favoriteProducers', function($q) use($userUuid){
            $q->where('producerUuid', $userUuid);
        });
        if($producerQuery->exists()){
            $producers = $producerQuery->get();
        }else{
            $producers = [];
        }
        return response()->json($producers);
    }

}
