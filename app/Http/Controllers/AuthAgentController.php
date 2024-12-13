<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthAgentController extends Controller
{
	public function authCheck(): JsonResponse
	{
		if(Auth::guard('agents')->user()){
			return response()->json(Auth::guard('agents')->user());
		}
		return response()->json(false);
	}

	public function login(Request $req): JsonResponse
	{
		if(Auth::guard('agents')->attempt(['login_id' => $req->login_id, 'password' => $req->password])) {
			$req->session()->regenerate();
			return response()->json(Auth::guard('agents')->user(), 200);
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
