<?php

namespace App\Http\Controllers;

use App\Models\FavoriteProducer;
use App\Models\Log;
use App\Models\Producer;
use App\Service\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProducersController extends Controller
{
    public function getOwn(Request $req): JsonResponse
	{
        if(Auth::guard('producers')->user()){
			return response()->json(Auth::guard('producers')->user()->load(['items.plan', 'items.unit']));
        }
        return response()->json([]);
    }

	public function getProducer($producerUuid): JsonResponse
	{
		$producer = Producer::with(['favoriteProducers', 'items.plan'])->where('uuid', $producerUuid)->first();
		return response()->json($producer);
	}

    public function getPopularProducers(): JsonResponse
	{
		$own = Auth()->user();
        $producers = Producer::select('producers.*', DB::raw('COUNT(favorite_producers.id) as favorite_count'))
            ->leftJoin('favorite_producers', 'producers.id', '=', 'favorite_producers.producerUuid')
			->where('producers.id', '!=', $own->id)
            ->groupBy('producers.id')
            ->orderBy('favorite_count', 'desc')
            ->get()
            ->take(50);
        return response()->json($producers);
    }

    public function getFavoriteProducers(Request $req): JsonResponse
    {
        $user = Auth::user();
        $userUuid = $user->uuid;
        $producerQuery = Producer::with('favoriteProducers')->whereHas('favoriteProducers', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        });
        if($producerQuery->exists()){
            $producers = $producerQuery->get();
        }else{
            $producers = [];
        }
        return response()->json($producers);
    }

	public function searchProducer(Request $req): JsonResponse
	{
		$producer = $req->producer;
		$address = $req->address;
		$query = Producer::query();
		if (!is_null($producer)) {
			$query->where('organizationName', 'like', '%' . $producer . '%');
		}
		if (!is_null($address)) {
			$query->where('address1', $address);
		}
		$producers = $query->whereNotIn('id', [Auth()->user()->id])->get();
		return response()->json($producers);
	}


	public function changePassword(Request $req): \Illuminate\Http\JsonResponse
	{
		DB::transaction(function() use($req) {
			$user = Auth::user();
			$password =  Hash::make($req->newPassword);
			$user->fill(['password'=>$password])->save();

			//ログ
			$log = new Log([
				'producerUuid' => Auth()->user()->uuid,
				'action' => 'change password',
			]);
			$log->save();
		});

		return response()->json([], 200);
	}

	public function update(Request $req): JsonResponse
	{
		$producer = DB::transaction(function() use($req) {
			$producer = Producer::find(Auth()->user()->id);
			$insertArray = $req->all();

			if(isset($req->img[0])){
				//既存ファイル削除
				$pathName = str_replace('storage/', '', $producer->imgPath);
				Storage::disk('public')->delete($pathName);
				//新たに登録
				$imageService = new ImageService($req->img[0], 'producerImage');
				$insertArray['imgPath'] = $imageService->save();
			}else{
				$insertArray['imgPath'] = $producer->imgPath;
			}

			$producer->fill($insertArray)->save();

			//ログ
			$log = new Log([
				'producerUuid' => Auth()->user()->uuid,
				'action' => 'profile update'
			]);
			$log->save();

			return $producer;
		});

		return response()->json($producer, 200);
	}

}
