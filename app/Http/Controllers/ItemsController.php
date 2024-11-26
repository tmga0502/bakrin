<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Log;
use App\Service\ImageService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Package\Item\UseCase\GetMyItems\GetMyItemsUseCaseInterface;

class ItemsController extends Controller
{

    public function getMyItems(GetMyItemsUseCaseInterface $interactor): JsonResponse
    {
		$items = Item::with('plan')->where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC')->get();
		return response()->json($items);
    }

    public function getNewArrival(): JsonResponse
    {
        $items = Item::with('plan')->whereNotIn('user_id', [Auth::user()->uuid])->where('status', 0)->orderBy('created_at', 'DESC')->take(50)->get();
        return response()->json($items);
    }


    public function getWantItems(): JsonResponse
    {
        $userId = Auth::user()->id;
        $items = Item::with(['wantItems', 'plan'])->whereHas('wantItems', function($q) use($userId){
            $q->where('user_id', $userId);
        })->whereNotIn('user_id', [Auth::user()->id])->where('status', 0)->get();
        return response()->json($items);
    }


	public function getSeasonItems(): JsonResponse
    {
        $nowMonth = (int)Carbon::now()->format('n');
        $items =Item::with('plan')->where(function ($query) use ($nowMonth) {
                $query->where('shipping_start', '<=', $nowMonth)
                    ->where('shipping_end', '>=', $nowMonth)
                    ->orWhere(function ($query) use ($nowMonth) {
                        $query->where('shipping_start', '>', 'shipping_end')->where(function ($query) use ($nowMonth) {
                                $query->where('shipping_start', '<=', $nowMonth)->orWhere('shipping_end', '>=', $nowMonth);
                        });
                    });
                })->whereNotIn('user_id', [Auth::user()->id])->where('status', 0)->get();
        return response()->json($items);
    }

    public function getFavoriteItems(Request $req): JsonResponse
    {
        $userId = Auth::user()->id;
        $itemQuery = Item::with(['favoriteItems', 'plan'])->whereHas('favoriteItems', function($q) use($userId){
            $q->where('user_id', $userId);
        });
        if($itemQuery->exists()){
            $items = $itemQuery->whereNotIn('user_id', [Auth::user()->id])->where('status', 0)->get();
        }else{
            $items = [];
        }
        return response()->json($items, 200);
    }


    public function getItem($itemUuid): JsonResponse
    {
        $item = Item::with(['plan', 'user', 'category', 'variety', 'unit', 'guideUnit', 'images', 'favoriteItems'])->where('uuid', $itemUuid)->first();
		return response()->json($item);
	}

	public function getMyItem($itemUuid): JsonResponse
	{
		$authUser = Auth::user();
		$item = Item::with(['plan', 'user', 'category', 'variety', 'unit', 'guideUnit', 'images', 'favoriteItems'])->where('uuid', $itemUuid)->first();
		if($item->user_id === $authUser->id){
			return response()->json($item);
		}

		return response()->json([], 401);
	}

	public function create(Request $req): JsonResponse
	{
		$result = DB::transaction(function () use ($req) {
			$insertArray = $req->all();
			$insertArray['user_id'] = Auth()->user()->id;
			$insertArray['uuid'] = (string) Str::uuid();

			if(isset($req->thumbnail[0])){
				$imageService = new ImageService($req->thumbnail[0], 'itemsThumbnail');
				$insertArray['thumbnail_path'] = $imageService->save();
			}
			$item = new Item($insertArray);
			$item->save();

			//ログ
			$log = new Log([
				'user_id' => Auth()->user()->id,
				'action' => 'item create',
				'description' =>  'id:' . $item->id . ' create'
			]);
			$log->save();

			return $item;
		});

		return response()->json($result, 200);
	}

	public function update(Request $req): JsonResponse
	{
		$item = DB::transaction(function () use ($req) {
			$item = Item::find($req->id);
			$insertArray = $req->all();
			if(isset($req->thumbnail[0])){
				//既存ファイル削除
				$pathName = str_replace('storage/', '', $item->thumbnail_path);
				Storage::disk('public')->delete($pathName);
				//新たに登録
				$imageService = new ImageService($req->thumbnail[0], 'itemsThumbnail');
				$insertArray['thumbnail_path'] = $imageService->save();
			}else{
				$insertArray['thumbnail_path'] = $item->thumbnail_path;
			}
			$item->fill($insertArray)->save();

			//ログ
			$log = new Log([
				'user_id' => Auth()->user()->id,
				'action' => 'item update',
				'description' => 'id:' . $item->id . ' update'
			]);
			$log->save();

			return $item;
		});
		return response()->json($item, 200);
	}

	public function delete(Request $req): JsonResponse
	{
		$uuid = $req->itemUuid;
		$item = Item::where('uuid', $uuid)->first();
		if($item->user_id === Auth()->user()->id){
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
