<?php

namespace App\Http\Controllers;

use App\Models\ItemVariety;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VarietiesController extends Controller
{
    public function getAllVarieties(): JsonResponse
	{
		$result = ItemVariety::with('category')->get();
		return response()->json($result, 200);
	}
}
