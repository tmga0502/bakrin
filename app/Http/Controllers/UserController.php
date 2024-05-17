<?php

namespace App\Http\Controllers;

use App\Models\Producer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function changePassword(Request $req)
    {
        $user = Producer::where('loginToken', $req->auth_token)->first();
        $password =  Hash::make($req->newPassword);
        $user->fill(['password'=>$password])->save();

        return response()->json([], 200);
    }
}
