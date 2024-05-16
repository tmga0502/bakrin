<?php

namespace App\Http\Controllers;

use App\Models\Producer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $req): JsonResponse
    {
        if(Auth::attempt(['email' => $req->email, 'password' => $req->password])) {
            $token = Auth::user()->createToken(Auth::user()->email . '_Token')->plainTextToken;
            //トークンをDBに保存
            Auth::user()->fill(['loginToken'=>$token])->save();
            //ログイン
            return response()->json([
                'organizationName' => Auth::user()->organizationName,
                'token' => $token
            ]);
        }

        return response()->json([], 401);
    }


    public function logout(Request $req): JsonResponse
    {
        $user = Producer::where('loginToken', $req->auth_token)->first();
        $user->fill(['loginToken' => null])->save();

        return response()->json(true);
    }
}
