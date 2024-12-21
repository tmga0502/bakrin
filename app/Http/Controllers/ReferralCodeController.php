<?php

namespace App\Http\Controllers;

use App\Models\Agent;
use App\Models\User;
use Illuminate\Http\Request;

class ReferralCodeController extends Controller
{
    public function check($referral_code)
	{
		//$referral_codeの頭文字を取得
		$referral_code_prefix = substr($referral_code, 0, 1);
		$introducer = null;
		if($referral_code_prefix === 'u'){
			$introducer = User::where('referral_code', $referral_code)->first();
		}elseif ($referral_code_prefix === 'a'){
			$introducer = Agent::where('referral_code', $referral_code)->first();
		}
		 $almighty_code = config('referralCode.ALMIGHTY_CODE');

		 if($introducer !==null || $referral_code === $almighty_code){
			 return response()->json(true);
		 }

		 return response()->json(false);
	}
}
