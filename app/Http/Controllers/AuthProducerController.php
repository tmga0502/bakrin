<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthProducerController extends Controller
{

    public function authCheck(Request $req): JsonResponse
    {
		if(Auth::guard('producers')->user()){
			return response()->json(Auth::guard('producers')->user()->load(['items.plan', 'items.unit']));
		}
		return response()->json(false);
    }

    public function login(Request $req): JsonResponse
    {
        if(Auth::attempt(['email' => $req->email, 'password' => $req->password])) {
            $req->session()->regenerate();
            return response()->json(Auth::user());
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
