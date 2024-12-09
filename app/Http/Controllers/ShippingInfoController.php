<?php

namespace App\Http\Controllers;

use App\Models\ShippingInfo;
use Illuminate\Http\Request;

class ShippingInfoController extends Controller
{
    public function create(Request $req)
	{
		$shipping_info = new ShippingInfo($req->all());
		$shipping_info->save();

		return response()->json(true);
	}

}
