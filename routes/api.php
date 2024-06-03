<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\FavoriteItemsController;
use App\Http\Controllers\ItemsController;
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
        Route::get('getProducer', [ProducersController::class, 'getProducer']);
        Route::get('/getPopularProducers', [ProducersController::class, 'getPopularProducers'])->name('getPopularProducers');//人気の生産者
        Route::get('/getFavoriteProducers', [ProducersController::class, 'getFavoriteProducers'])->name('getFavoriteProducers');//お気に入り登録済みの生産者
    });

    //お気に入り【アイテム】
    Route::group(['prefix' => 'favoriteItem'], function () {
        Route::get('/getState/{itemUuid}', [FavoriteItemsController::class, 'getState']);
        Route::post('/register', [FavoriteItemsController::class, 'register']);
        Route::post('/deregister', [FavoriteItemsController::class, 'deregister']);
    });

    //ログインユーザー情報
    Route::get('/getUser', [AuthController::class, 'getUser']);
    Route::post('user/changePassword', [UserController::class, 'changePassword']);

});
