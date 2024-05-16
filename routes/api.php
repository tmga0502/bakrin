<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FavoriteItemsController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\ProducersController;
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

Route::group(['middleware'=> 'auth.api'], function() {
    //アイテム関連
    Route::group(['prefix' => 'items'], function () {
        Route::get('/getNewArrival', [ItemsController::class, 'getNewArrival'])->name('getNewArrival');//新着アイテムリスト
        Route::get('/getWantItems', [ItemsController::class, 'getWantItems'])->name('getWantItems');//欲しいアイテムリスト
        Route::get('/getSeasonItems', [ItemsController::class, 'getSeasonItems'])->name('getSeasonItems');//旬のアイテムリスト
        Route::get('/getFavoriteItems', [ItemsController::class, 'getFavoriteItems'])->name('getFavoriteItems');//お気に入り登録済みアイテムリスト
        Route::get('/getItem/{itemUuid}', [ItemsController::class, 'getItem'])->name('getItem');//アイテム詳細
    });

    //生産者関連
    Route::group(['prefix' => 'producers'], function () {
        Route::get('/getPopularProducers', [ProducersController::class, 'getPopularProducers'])->name('getPopularProducers');//人気の生産者
    });

    //お気に入り【アイテム】
    Route::group(['prefix' => 'favoriteItem'], function () {
        Route::get('/getState/{itemUuid}', [FavoriteItemsController::class, 'getState']);
        Route::post('/register', [FavoriteItemsController::class, 'register']);
        Route::post('/deregister', [FavoriteItemsController::class, 'deregister']);
    });

});
