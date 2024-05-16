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

    public function getNewArrival(): JsonResponse
    {
        $items = Item::orderBy('created_at', 'DESC')->take(50)->get();
        return response()->json($items);
    }

    public function getWantItems(): JsonResponse
    {
        //TODO: ユーザーのIDはログイン処理を完成させてから設定すること。
        $user = Producer::inRandomOrder()->first();
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

    public function getFavoriteItems(): JsonResponse
    {
        //TODO: ユーザーのIDはログイン処理を完成させてから設定すること。
        $user = Producer::inRandomOrder()->first();
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
