<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemImage;
use App\Service\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ItemImageController extends Controller
{
    public function create(Request $req): JsonResponse
	{
		$item = Item::find($req->itemId);
		if(isset($req->img[0])){
			$imageService = new ImageService($req->img[0], 'items');
			$pathName = $imageService->save();
			$insertArray = [
				'item_id' => $req->itemId,
				'image_path'=>$pathName,
			];

			$itemImage = new ItemImage($insertArray);
			$itemImage->save();
		}
		return response()->json($item, 200);
	}

	public function delete(Request $req): JsonResponse
	{
		$itemImage = ItemImage::find($req->imageId);
		$item = Item::find($itemImage->itemId);

		DB::transaction(function () use ($itemImage) {
			//ファイル削除
			$pathName = str_replace('storage/', '', $itemImage->path);
			Storage::disk('public')->delete($pathName);

			//データ削除
			$itemImage->delete();
		});

		return response()->json($item, 200);
	}
}
