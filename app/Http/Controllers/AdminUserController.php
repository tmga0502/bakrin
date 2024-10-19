<?php

namespace App\Http\Controllers;

use App\Models\AdminUser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{

	public function getAllUser(): JsonResponse
	{
		$users = AdminUser::all();
		return response()->json($users, 200);
	}

	public function getUser($id): JsonResponse
	{
		$user = AdminUser::find($id);
		return response()->json($user, 200);
	}

	public function create(Request $req): JsonResponse
	{
		$insertArray = $req->all();
		$insertArray['password'] = Hash::make($req->password);

		$user = new AdminUser($insertArray);
		$user->save();

		return response()->json($user, 200);
	}

	public function update(Request $req): JsonResponse
	{
		$user = AdminUser::find($req->id);
		$user->fill($req->all())->save();

		return response()->json($user, 200);
	}
}
