<?php

namespace App\Http\Controllers;

use App\Models\FavoriteItem;
use App\Models\Item;
use App\Models\Producer;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ItemsController extends Controller
{

    public function getMyItems(Request $req): JsonResponse
    {
        $token = $req->auth_token;
        $user = Producer::where('loginToken', $token)->first();
        $items = Item::where('producerUuid', $user->uuid)->get();
        return response()->json($items);
    }

    public function getNewArrival(): JsonResponse
    {
        $items = Item::orderBy('created_at', 'DESC')->take(50)->get();
        return response()->json($items);
    }

    public function getWantItems(Request $req): JsonResponse
    {
        $user = Producer::where('loginToken', $req->auth_token)->first();
        $userUuid = $user->uuid;
        $items = Item::with('wantItems')->whereHas('wantItems', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        })->get();
        return response()->json($items);
    }

    public function getSeasonItems(): JsonResponse
    {
        $nowMonth = (int)Carbon::now()->format('n');
        $items =Item::where(function ($query) use ($nowMonth) {
                $query->where('shippingStart', '<=', $nowMonth)
                    ->where('shippingEnd', '>=', $nowMonth)
                    ->orWhere(function ($query) use ($nowMonth) {
                        $query->where('shippingStart', '>', 'shippingEnd')->where(function ($query) use ($nowMonth) {
                                $query->where('shippingStart', '<=', $nowMonth)->orWhere('shippingEnd', '>=', $nowMonth);
                        });
                    });
                })->get();
        return response()->json($items);
    }

    public function getFavoriteItems(Request $req): JsonResponse
    {
        $user = Producer::where('loginToken', $req->auth_token)->first();
        $userUuid = $user->uuid;
        $itemQuery = Item::with('favoriteItems')->whereHas('favoriteItems', function($q) use($userUuid){
            $q->where('producerUuid', $userUuid);
        });
        if($itemQuery->exists()){
            $items = $itemQuery->get();
        }else{
            $items = [];
        }
        return response()->json($items);
    }


    public function getItem($itemUuid): JsonResponse
    {
        $item = Item::with(['producer', 'category', 'variety', 'unit', 'guideUnit', 'images'])->where('uuid', $itemUuid)->first();
        return response()->json($item);
    }
}
