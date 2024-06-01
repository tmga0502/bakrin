<?php

namespace App\Http\Controllers;

use App\Models\Producer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function getUser(Request $req): JsonResponse
    {
        $user = Producer::where('loginToken', $req->auth_token)->first();
        return response()->json($user);
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
