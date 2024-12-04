<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ReferralCodeController extends Controller
{
    public function check($referral_code)
	{
		 $user = User::where('referral_code', $referral_code)->first();
		 $almighty_code = config('referralCode.ALMIGHTY_CODE');

		 if($user !==null || $referral_code === $almighty_code){
			 return response()->json(true);
		 }

		 return response()->json(false);
	}
}
