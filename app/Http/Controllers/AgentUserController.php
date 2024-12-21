<?php

namespace App\Http\Controllers;

use App\Models\Agent;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AgentUserController extends Controller
{
	public function getReferralUsers()
	{
		$agent = Auth::user();
		$referral_code = $agent->referral_code;
		$users = User::where('introducer_code', $referral_code)->get();
		return response()->json($users);
	}

	public function update(Request $req)
	{
		$auth_user = Auth()->user();
		$insert_array = $req->all();
		if($req->password !== ''){
			$insert_array['password'] = Hash::make($req->password);
		}
		$user_ojb = Agent::find($auth_user->id);
		$user_ojb->fill($insert_array)->save();

		return response()->json($user_ojb);
	}
}
