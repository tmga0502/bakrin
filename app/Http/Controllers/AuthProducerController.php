<?php

namespace App\Http\Controllers;

use App\Mail\RequestTrade;
use App\Mail\UserRegistered;
use App\Models\Log;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthProducerController extends Controller
{

    public function authCheck(Request $req): JsonResponse
    {
		if(Auth::guard('users')->user()){
			return response()->json(Auth::guard('users')->user()->load(['items.plan', 'items.unit']));
		}
		return response()->json(false);
    }

	public function register(Request $req)
	{
		DB::transaction(static function() use($req) {
			//紹介コードの重複チェック
			do {
				$referral_code = 'u' . Str::random(5);
				$check = User::where('referral_code', $referral_code)->exists();
			} while ($check);

			$user = new User([
				'uuid' => Str::uuid(),
				'referral_code' => $referral_code,
				'introducer_code' => $req->referral_code,
				'status' => 0,
				'password' => Hash::make($req->password),
				'organization_name' => $req->organization_name,
				'president_name' => $req->president_name,
				'postal_code' => $req->postal_code,
				'address1' => $req->address1,
				'address2' => $req->address2,
				'address3' => $req->address3,
				'address4' => $req->address4,
				'phone_number' => $req->phone_number,
				'email' => $req->email,
				'payment_method' => 0,
			]);
			$user->save();

			//メール送信
			Mail::to(['email' => $user->email])->send(new UserRegistered);
		});

		return response()->json(true);
	}

	public function completeRegister($user_uuid)
	{
		$user = User::where('uuid', $user_uuid)->firstOrFail();
		if($user === null){
			return response()->json([], 404);
		}
		if($user->status === 1){
			return response()->json(false, 200);
		}
		$user->fill(['status' => 1])->save();
		return response()->json(true, 200);
	}

    public function login(Request $req): JsonResponse
    {
        if(Auth::attempt(['email' => $req->email, 'password' => $req->password, 'status' => 1])) {
            $req->session()->regenerate();
			//ログ
			$log = new Log([
				'user_id' => Auth()->user()->id,
				'action' => 'Login'
			]);
			$log->save();
            return response()->json(Auth::user()->load(['items.plan', 'items.unit']));
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
