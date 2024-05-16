<?php

namespace App\Http\Controllers;

use App\Models\FavoriteItem;
use App\Models\Producer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoriteItemsController extends Controller
{
    public function getState(Request $req, $itemUuid): JsonResponse
    {
        $auth = Producer::where('loginToken', $req->auth_token)->first();
        $status = FavoriteItem::where('itemUuid', $itemUuid)->where('myUuid', $auth->uuid)->exists();
        return response()->json($status);
    }

    public function register(Request $req): JsonResponse
    {
        $auth = Producer::where('loginToken', $req->auth_token)->first();
        $favoriteItem = new FavoriteItem([
           'itemUuid' => $req->itemUuid,
           'myUuid' => $auth->uuid,
        ]);
        $favoriteItem->save();
        return response()->json([], status:200);
    }

    public function deregister(Request $req): JsonResponse
    {
        $auth = Producer::where('loginToken', $req->auth_token)->first();
        $favoriteItem = FavoriteItem::where('itemUuid',  $req->itemUuid)->where('myUuid', $auth->uuid)->first();
        $favoriteItem->delete();
        return response()->json([], status:200);
    }

}
