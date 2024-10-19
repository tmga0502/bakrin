<?php

namespace App\Http\Controllers;

use App\Models\AdminUser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthAdminController extends Controller
{
	public function authCheck(): JsonResponse
	{
		if(Auth::guard('admins')->user()){
			return response()->json(Auth::guard('admins')->user());
		}
		return response()->json(false);
	}

	public function login(Request $req): JsonResponse
	{
		if(Auth::guard('admins')->attempt(['loginId' => $req->loginId, 'password' => $req->password])) {
			$req->session()->regenerate();
			return response()->json(Auth::guard('admins')->user(), 200);
		}

		return response()->json([], 401);
	}


	public function logout(Request $req): JsonResponse
	{
		Auth::logout();
		$req->session()->invalidate();
		$req->session()->regenerateToken();

		return response()->json(true);
	}

}
