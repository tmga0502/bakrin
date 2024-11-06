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
		$items = Item::with('plan')->where('producerUuid', Auth::user()->uuid)->orderBy('created_at', 'DESC')->get();
		return response()->json($items);
//		return $interactor->handle();
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
				$imageService = new ImageService($req->thumbnail[0], 'itemsThumbnail');
				$insertArray['thumbnail'] = $imageService->save();
			}
			$item = new Item($insertArray);
			$item->save();

			//ログ
			$log = new Log([
				'producerUuid' => Auth()->user()->uuid,
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
				$pathName = str_replace('storage/', '', $item->thumbnail);
				Storage::disk('public')->delete($pathName);
				//新たに登録
				$imageService = new ImageService($req->thumbnail[0], 'itemsThumbnail');
				$insertArray['thumbnail'] = $imageService->save();
			}else{
				$insertArray['thumbnail'] = $item->thumbnail;
			}
			$item->fill($insertArray)->save();

			//ログ
			$log = new Log([
				'producerUuid' => Auth()->user()->uuid,
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
