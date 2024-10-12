<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemImage;
use App\Service\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ItemImageController extends Controller
{
    public function create(Request $req): JsonResponse
	{
		$item = Item::find($req->itemId);
		if(isset($req->img[0])){
			$imageService = new ImageService($req->img[0], 'items');
			$pathName = $imageService->save();
			$insertArray = [
				'itemId' => $req->itemId,
				'path'=>$pathName,
			];

			$itemImage = new ItemImage($insertArray);
			$itemImage->save();
		}
		return response()->json($item, 200);
	}
}
