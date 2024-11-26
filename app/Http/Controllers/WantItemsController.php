<?php

namespace App\Http\Controllers;

use App\Models\WantItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WantItemsController extends Controller
{
    public function getAll(): JsonResponse
	{
		$authUser = Auth()->user();
		$wantItems = WantItem::with('itemVariety')->where('user_id', $authUser->id)->get();

		return response()->json($wantItems, 200);
	}

	public function create(Request $req): void
	{
		$authUser = Auth()->user();
		$wantItemCheck = WantItem::where('user_id', $authUser->id)->where('item_variety_id', $req->id)->exists();
		if(!$wantItemCheck){
			$wantItem = new WantItem([
				'user_id' => $authUser->id,
				'item_variety_id' => $req->id,
			]);
			$wantItem->save();
		}
	}

	public function remove(Request $req): void
	{
		$authUser = Auth()->user();
		$sql = WantItem::where('user_id', $authUser->id)->where('item_variety_id', $req->id);
		$wantItemCheck = $sql->exists();
		if($wantItemCheck){
			$wantItem = $sql->first();
			$wantItem->delete();
		}
	}
}
