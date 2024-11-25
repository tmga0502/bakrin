<?php

namespace App\Http\Controllers;

use App\Models\FavoriteUser;
use App\Models\Log;
use App\Models\User;
use App\Service\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UsersController extends Controller
{
    public function getOwn(Request $req): JsonResponse
	{
        if(Auth::guard('producers')->user()){
			return response()->json(Auth::guard('producers')->user()->load(['items.plan', 'items.unit']));
        }
        return response()->json([]);
    }

	public function getUser($userId): JsonResponse
	{
		$user = User::with(['favorite_users', 'items.plan'])->find($userId);
		return response()->json($user);
	}

    public function getPopularUsers(): JsonResponse
	{
		$own = Auth()->user();
		$users = User::select('users.*', DB::raw('COUNT(favorite_users.id) as favorite_count'))
            ->leftJoin('favorite_users', 'users.id', '=', 'favorite_users.favorite_by_user_id')
			->where('users.id', '!=', $own->id)
            ->groupBy('users.id')
            ->orderBy('favorite_count', 'desc')
            ->get()
            ->take(50);
        return response()->json($users);
    }

    public function getFavoriteUsers(Request $req): JsonResponse
    {
        $user = Auth::user();
        $userUuid = $user->uuid;
        $producerQuery = User::with('favoriteUsers')->whereHas('favoriteUsers', function($q) use($userUuid){
            $q->where('myUuid', $userUuid);
        });
        if($producerQuery->exists()){
            $producers = $producerQuery->get();
        }else{
            $producers = [];
        }
        return response()->json($producers);
    }

	public function searchUser(Request $req): JsonResponse
	{
		$producer = $req->producer;
		$address = $req->address;
		$query = User::query();
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
			$producer = User::find(Auth()->user()->id);
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
