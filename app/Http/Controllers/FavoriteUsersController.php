<?php

namespace App\Http\Controllers;

use App\Models\FavoriteUser;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteUsersController extends Controller
{
	public function register(Request $req): JsonResponse
	{
		$user = User::where('uuid', $req->userUuid)->first();
		$favoriteItem = new FavoriteUser([
			'favorite_user_id' => $user->id,
			'favorite_by_user_id' => Auth::user()->id,
		]);
		$favoriteItem->save();
		return response()->json([], status:200);
	}

	public function deregister(Request $req): JsonResponse
	{
		$user = User::where('uuid', $req->userUuid)->first();
		$favoriteItem = FavoriteUser::where('favorite_user_id',  $user->id)->where('favorite_by_user_id', Auth::user()->id)->first();
		$favoriteItem->delete();
		return response()->json([], status:200);
	}
}
