<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
	/**
	 * @param Request $req
	 * @return JsonResponse
	 */
	public function changePassword(Request $req): \Illuminate\Http\JsonResponse
	{
        $user = Auth::user();
        $password =  Hash::make($req->newPassword);
        $user->fill(['password'=>$password])->save();

        return response()->json([], 200);
    }
}
