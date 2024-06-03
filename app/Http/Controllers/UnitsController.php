<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UnitsController extends Controller
{
    public function getAllUnits(): JsonResponse
    {
        $units = Unit::all();
        return response()->json($units);
    }
}
