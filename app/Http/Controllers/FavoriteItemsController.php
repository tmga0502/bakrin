<?php

namespace App\Http\Controllers;

use App\Models\FavoriteItem;
use App\Models\Item;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteItemsController extends Controller
{
    public function getState(Request $req, $itemUuid): JsonResponse
    {
        $status = FavoriteItem::where('itemUuid', $itemUuid)->where('myUuid', Auth::user()->uuid)->exists();
        return response()->json($status);
    }

    public function register(Request $req): JsonResponse
    {
		$item = Item::where('uuid', $req->itemUuid)->first();
        $favoriteItem = new FavoriteItem([
           'item_id' => $item->id,
           'user_id' => Auth::user()->id,
        ]);
        $favoriteItem->save();
        return response()->json([], status:200);
    }

    public function deregister(Request $req): JsonResponse
    {
		$item = Item::where('uuid', $req->itemUuid)->first();
        $favoriteItem = FavoriteItem::where('item_id',  $item->id)->where('user_id', Auth::user()->id)->first();
        $favoriteItem->delete();
        return response()->json([], status:200);
    }

}
