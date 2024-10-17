<?php

namespace App\Http\Controllers;

use App\Models\WantItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WantItemsController extends Controller
{
    public function getAll(): JsonResponse
	{
		$authProducer = Auth()->user();
		$wantItems = WantItem::with('itemVariety')->where('myUuid', $authProducer->uuid)->get();

		return response()->json($wantItems, 200);
	}

	public function create(Request $req): void
	{
		$authProducer = Auth()->user();
		$wantItemCheck = WantItem::where('myUuid', $authProducer->uuid)->where('itemVarietyId', $req->aid)->exists();
		if(!$wantItemCheck){
			$wantItem = new WantItem([
				'myUuid' => $authProducer->uuid,
				'itemVarietyId' => $req->id,
			]);
			$wantItem->save();
		}
	}

	public function remove(Request $req): void
	{
		$authProducer = Auth()->user();
		$sql = WantItem::where('myUuid', $authProducer->uuid)->where('itemVarietyId', $req->id);
		$wantItemCheck = $sql->exists();
		if($wantItemCheck){
			$wantItem = $sql->first();
			$wantItem->delete();
		}
	}
}
