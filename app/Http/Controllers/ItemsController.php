<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ItemsController extends Controller
{

    public function getMyItems(): JsonResponse
    {
		$items = Item::with('plan')->where('producerUuid', Auth::user()->uuid)->orderBy('created_at', 'DESC')->get();
		return response()->json($items);
    }

    public function getNewArrival(): JsonResponse
    {
        $items = Item::with('plan')->whereNotIn('producerUuid', [Auth::user()->uuid])->where('status', 0)->orderBy('created_at', 'DESC')->take(50)->get();
        return response()->json($items);
    }


    public function getWantItems(): JsonResponse
    {
        $userUuid = Auth::user()->uuid;
        $items = Item::with(['wantItems', 'plan'])->whereHas('wantItems', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        })->whereNotIn('producerUuid', [Auth::user()->uuid])->where('status', 0)->get();
        return response()->json($items);
    }


	public function getSeasonItems(): JsonResponse
    {
        $nowMonth = (int)Carbon::now()->format('n');
        $items =Item::with('plan')->where(function ($query) use ($nowMonth) {
                $query->where('shippingStart', '<=', $nowMonth)
                    ->where('shippingEnd', '>=', $nowMonth)
                    ->orWhere(function ($query) use ($nowMonth) {
                        $query->where('shippingStart', '>', 'shippingEnd')->where(function ($query) use ($nowMonth) {
                                $query->where('shippingStart', '<=', $nowMonth)->orWhere('shippingEnd', '>=', $nowMonth);
                        });
                    });
                })->whereNotIn('producerUuid', [Auth::user()->uuid])->where('status', 0)->get();
        return response()->json($items);
    }

    public function getFavoriteItems(Request $req): JsonResponse
    {
        $userUuid = Auth::user()->uuid;
        $itemQuery = Item::with(['favoriteItems', 'plan'])->whereHas('favoriteItems', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        });
        if($itemQuery->exists()){
            $items = $itemQuery->whereNotIn('producerUuid', [Auth::user()->uuid])->where('status', 0)->get();
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

	public function getMyItem($itemUuid): JsonResponse
	{
		$authUser = Auth::user();
		$item = Item::with(['plan', 'producer', 'category', 'variety', 'unit', 'guideUnit', 'images', 'favoriteItems'])->where('uuid', $itemUuid)->first();
		if($item->producerUuid === $authUser->uuid){
			return response()->json($item);
		}

		return response()->json([], 401);
	}

	public function create(Request $req): JsonResponse
	{
		$result = DB::transaction(function () use ($req) {
			$insertArray = $req->all();
			$insertArray['producerUuid'] = Auth()->user()->uuid;
			$insertArray['uuid'] = (string) Str::uuid();

			if(isset($req->thumbnail[0])){
				$file = $req->thumbnail[0];
				$extension = $file->getClientOriginalExtension();
				$fileName = Carbon::now()->format('YmdHi') . '_' . Str::random(40) . '.' . $extension;
				//ファイル保存
				Storage::disk('public')->putFileAs('items', $file, $fileName);
				$insertArray['thumbnail'] = 'storage/items/' . $fileName;
			}
			$item = new Item($insertArray);
			$item->save();
			return $item;
		});

		return response()->json($result, 200);
	}

	public function update(Request $req): JsonResponse
	{
		$item = Item::find($req->id);
		$item->fill($req->all())->save();
		return response()->json($item, 200);
	}

	public function delete(Request $req): JsonResponse
	{
		$uuid = $req->itemUuid;
		$item = Item::where('uuid', $uuid)->first();
		if($item->producerUuid === Auth()->user()->uuid){
			$item->delete();
			return response()->json(true, 200);
		}

		return response()->json(false, 400);

	}

	public function searchPlan(Request $req): JsonResponse
	{
		if($req->plan !== false){
			$items = Item::with('plan')->whereIn('planId', $req->plan)->where('status', 0)->get();
		}else{
			$items = [];
		}
		return response()->json($items, 200);
	}

	public function searchCategory(Request $req): JsonResponse
	{
		$items = Item::with('plan')->where('categoryId', $req->categoryId)->where('status', 0)->get();
		return response()->json($items, 200);
	}
}
