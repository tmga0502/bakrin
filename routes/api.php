<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\FavoriteItemsController;
use App\Http\Controllers\FavoriteProducersController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\ProducersController;
use App\Http\Controllers\UnitsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);

Route::group(['middleware'=> 'auth:sanctum'], function() {
    //アイテム関連
    Route::group(['prefix' => 'items'], function () {
        Route::get('/getNewArrival', [ItemsController::class, 'getNewArrival']);//新着アイテムリスト
        Route::get('/getWantItems', [ItemsController::class, 'getWantItems']);//欲しいアイテムリスト
        Route::get('/getSeasonItems', [ItemsController::class, 'getSeasonItems']);//旬のアイテムリスト
        Route::get('/getFavoriteItems', [ItemsController::class, 'getFavoriteItems']);//お気に入り登録済みアイテムリスト
        Route::get('/getItem/{itemUuid}', [ItemsController::class, 'getItem']);//アイテム詳細
        Route::get('/getMyItems', [ItemsController::class, 'getMyItems']);//自分のアイテム一覧

        Route::patch('/update', [ItemsController::class, 'update']);//更新
		Route::post('/searchPlan', [ItemsController::class, 'searchPlan']);//プランから検索
		Route::post('/searchCategory', [ItemsController::class, 'searchCategory']);//カテゴリーから検索
    });

    //カテゴリー関連
    Route::group(['prefix' => 'categories'], function () {
        Route::get('/getCategories', [CategoriesController::class, 'getAllCategories']);//全カテゴリー取得
    });

    //単位関連
    Route::group(['prefix' => 'units'], function () {
        Route::get('/getUnits', [UnitsController::class, 'getAllUnits']);//全カテゴリー取得
    });

    //プラン関連
    Route::group(['prefix' => 'plans'], function () {
        Route::get('/getPlans', [PlansController::class, 'getAllPlans']);//全カテゴリー取得
    });

    //生産者関連
    Route::group(['prefix' => 'producers'], function () {
        Route::get('getProducer', [ProducersController::class, 'getOwn']);
        Route::get('getProducer/{producerUuid}', [ProducersController::class, 'getProducer']);
        Route::get('/getPopularProducers', [ProducersController::class, 'getPopularProducers']);//人気の生産者
        Route::get('/getFavoriteProducers', [ProducersController::class, 'getFavoriteProducers']);//お気に入り登録済みの生産者

        Route::post('/searchProducer', [ProducersController::class, 'searchProducer']);//生産者検索
    });

    //お気に入り【アイテム】
    Route::group(['prefix' => 'favoriteItem'], function () {
        Route::get('/getState/{itemUuid}', [FavoriteItemsController::class, 'getState']);
        Route::post('/register', [FavoriteItemsController::class, 'register']);
        Route::post('/deregister', [FavoriteItemsController::class, 'deregister']);
    });
	//お気に入り【ユーザー】
	Route::group(['prefix' => 'favoriteProducer'], function () {
		Route::post('/register', [FavoriteProducersController::class, 'register']);
		Route::post('/deregister', [FavoriteProducersController::class, 'deregister']);
	});

	//メッセージ
	Route::group(['prefix' => 'message'], function () {
		Route::get('/getMessageList', [MessageController::class, 'getMessageList']);
		Route::get('/getMessages', [MessageController::class, 'getMessages']);
	});

    //ログインユーザー情報
    Route::get('/getUser', [AuthController::class, 'getUser']);
    Route::post('user/changePassword', [UserController::class, 'changePassword']);

});
