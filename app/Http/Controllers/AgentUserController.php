<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AgentUserController extends Controller
{
	public function getReferralUsers()
	{
		$agent = Auth::user();
		$referral_code = $agent->referral_code;
		$users = User::where('introducer_code', $referral_code)->get();
		return response()->json($users);
	}
}
