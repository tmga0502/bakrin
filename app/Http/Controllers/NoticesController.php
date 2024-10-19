<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NoticesController extends Controller
{
    public function getAll(): JsonResponse
	{
		$allData = Notice::all();
		return response()->json($allData, 200);
	}

	public function getData($uuid): JsonResponse
	{
		$data = Notice::where('uuid', $uuid)->first();
		return response()->json($data, 200);
	}

	public function create(Request $req): JsonResponse
	{
		$insertArray = $req->all();
		$insertArray['uuid'] = Str::uuid();
		$data = new Notice($insertArray);
		$data->save();

		return response()->json($data, 200);
	}

	public function delete(Request $req): JsonResponse
	{
		$data = Notice::find($req->id);
		$data->delete();

		return response()->json(true, 200);
	}
}
