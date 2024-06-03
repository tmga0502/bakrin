<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlansController extends Controller
{
    public function getAllPlans(): JsonResponse
    {
        $plans = Plan::all();
        return response()->json($plans);
    }
}
