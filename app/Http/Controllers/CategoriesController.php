<?php

namespace App\Http\Controllers;

use App\Models\ItemCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getAllCategories(): JsonResponse
    {
        $categories = ItemCategory::all();
        return response()->json($categories);
    }
}
