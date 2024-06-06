<?php

namespace App\Http\Controllers;

use App\Models\FavoriteItem;
use App\Models\Producer;
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
        $favoriteItem = new FavoriteItem([
           'itemUuid' => $req->itemUuid,
           'myUuid' => Auth::user()->uuid,
        ]);
        $favoriteItem->save();
        return response()->json([], status:200);
    }

    public function deregister(Request $req): JsonResponse
    {
        $favoriteItem = FavoriteItem::where('itemUuid',  $req->itemUuid)->where('myUuid', Auth::user()->uuid)->first();
        $favoriteItem->delete();
        return response()->json([], status:200);
    }

}
