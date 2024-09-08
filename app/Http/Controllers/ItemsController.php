<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ItemsController extends Controller
{

    public function getMyItems(): JsonResponse
    {
		$items = Item::with('plan')->where('producerUuid', Auth::user()->uuid)->get();
        return response()->json($items);
    }

    public function getNewArrival(): JsonResponse
    {
        $items = Item::where('status', 0)->orderBy('created_at', 'DESC')->take(50)->get();
        return response()->json($items);
    }

    public function getWantItems(): JsonResponse
    {
        $userUuid = Auth::user()->uuid;
        $items = Item::with('wantItems')->whereHas('wantItems', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        })->where('status', 0)->get();
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
                })->where('status', 0)->get();
        return response()->json($items);
    }

    public function getFavoriteItems(Request $req): JsonResponse
    {
        $userUuid = Auth::user()->uuid;
        $itemQuery = Item::with('favoriteItems')->whereHas('favoriteItems', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        });
        if($itemQuery->exists()){
            $items = $itemQuery->where('status', 0)->get();
        }else{
            $items = [];
        }
        return response()->json($items, 200);
    }


    public function getItem($itemUuid): JsonResponse
    {
        $item = Item::with(['plan', 'producer', 'category', 'variety', 'unit', 'guideUnit', 'images', 'favoriteItems'])->where('uuid', $itemUuid)->first();
        return response()->json($item);
    }

	public function update(Request $req): JsonResponse
	{
		$item = Item::find($req->id);
		$item->fill($req->all())->save();
		return response()->json($item, 200);
	}

	public function searchPlan(Request $req): JsonResponse
	{
		if($req->plan !== false){
			$items = Item::whereIn('planId', $req->plan)->where('status', 0)->get();
		}else{
			$items = [];
		}
		return response()->json($items, 200);
	}

	public function searchCategory(Request $req): JsonResponse
	{
		$items = Item::where('categoryId', $req->categoryId)->where('status', 0)->get();
		return response()->json($items, 200);
	}
}
