<?php

namespace App\Http\Controllers;

use App\Mail\AgentRegistered;
use App\Mail\UserRegistered;
use App\Models\Agent;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthAgentController extends Controller
{
	public function authCheck(): JsonResponse
	{
		if(Auth::guard('agents')->user()){
			return response()->json(Auth::guard('agents')->user());
		}
		return response()->json(false);
	}

	public function register(Request $req)
	{
		DB::transaction(static function() use($req) {
			//紹介コードの重複チェック
			do {
				$referral_code = 'a' . Str::random(5);
				$check = Agent::where('referral_code', $referral_code)->exists();
			} while ($check);

			$agent = new Agent([
				'uuid' => Str::uuid(),
				'referral_code' => $referral_code,
				'name' => $req->name,
				'email' => $req->email,
				'password' => Hash::make($req->password),
				'status' => 0,
			]);
			$agent->save();

			//メール送信
			Mail::to(['email' => $agent->email])->send(new AgentRegistered);
		});

		return response()->json(true);
	}

	public function completeRegister($agent_uuid)
	{
		$agent = Agent::where('uuid', $agent_uuid)->firstOrFail();
		if($agent === null){
			return response()->json([], 404);
		}
		if($agent->status === 1){
			return response()->json(false, 200);
		}
		$agent->fill(['status' => 1])->save();
		return response()->json(true, 200);
	}

	public function login(Request $req): JsonResponse
	{
		if(Auth::guard('agents')->attempt(['email' => $req->email, 'password' => $req->password])) {
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
