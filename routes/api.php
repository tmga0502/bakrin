<?php

use App\Http\Controllers\AuthProducerController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\FavoriteItemsController;
use App\Http\Controllers\FavoriteProducersController;
use App\Http\Controllers\ItemImageController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\ProducersController;
use App\Http\Controllers\TradeController;
use App\Http\Controllers\UnitsController;
use App\Http\Controllers\VarietiesController;
use App\Http\Controllers\WantItemsController;
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

Route::post('producerLogin', [AuthProducerController::class, 'login']);
Route::post('producerLogout', [AuthProducerController::class, 'logout']);
Route::get('authProducerCheck', [AuthProducerController::class, 'authCheck']);

Route::group(['middleware'=> 'auth:sanctum'], function() {
    //アイテム関連
    Route::group(['prefix' => 'items'], function () {
        Route::get('/getNewArrival', [ItemsController::class, 'getNewArrival']);//新着アイテムリスト
        Route::get('/getNewArrivalItemsForHome', [ItemsController::class, 'getNewArrivalItemsForHome']);//[TOP Page用]新着アイテムリスト
        Route::get('/getWantItems', [ItemsController::class, 'getWantItems']);//欲しいアイテムリスト
        Route::get('/getWantItemsForHome', [ItemsController::class, 'getWantItemsForHome']);//欲しいアイテムリスト
        Route::get('/getSeasonItems', [ItemsController::class, 'getSeasonItems']);//旬のアイテムリスト
        Route::get('/getFavoriteItems', [ItemsController::class, 'getFavoriteItems']);//お気に入り登録済みアイテムリスト
        Route::get('/getItem/{itemUuid}', [ItemsController::class, 'getItem']);//アイテム詳細
        Route::get('/getMyItems', [ItemsController::class, 'getMyItems']);//自分のアイテム一覧
		Route::get('/getMyItem/{itemUuid}', [ItemsController::class, 'getMyItem']);//自分のアイテム詳細

		Route::post('/create', [ItemsController::class, 'create']);//登録
        Route::post('/update', [ItemsController::class, 'update']);//更新
        Route::post('/delete', [ItemsController::class, 'delete']);//削除
		Route::post('/searchPlan', [ItemsController::class, 'searchPlan']);//プランから検索
		Route::post('/searchCategory', [ItemsController::class, 'searchCategory']);//カテゴリーから検索

		Route::post('/image/create', [ItemImageController::class, 'create']);//画像登録
		Route::post('/image/delete', [ItemImageController::class, 'delete']);//画像削除
    });

    //カテゴリー関連
    Route::group(['prefix' => 'categories'], function () {
        Route::get('/getCategories', [CategoriesController::class, 'getAllCategories']);//全カテゴリー取得
    });

	//アイテム種別関連
	Route::group(['prefix' => 'varieties'], function () {
		Route::get('/getVarieties', [VarietiesController::class, 'getAllVarieties']);//全カテゴリー取得
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
		Route::post('/sendMessage', [MessageController::class, 'sendMessage']);
		Route::post('/sendTradeMessage', [MessageController::class, 'sendTradeMessage']);
	});

	//取引
	Route::group(['prefix' => 'trade'], function () {
		Route::get('/getTradeRequests', [TradeController::class, 'getTradeRequests']);//取引申請リスト
		Route::get('/getPendingTrades', [TradeController::class, 'getPendingTrades']);//申請中の取引リスト
		Route::get('/getOngoingTrades', [TradeController::class, 'getOngoingTrades']);//取引中の取引リスト
		Route::get('/getCompletedTrades', [TradeController::class, 'getCompletedTrades']);//完了した取引リスト
		Route::get('/getTrade/{tradeUuid}', [TradeController::class, 'getTrade']);//取引中リスト
		Route::post('/requestTrade', [TradeController::class, 'requestTrade']);//取引申請
		Route::post('/requestPermission', [TradeController::class, 'requestPermission']);//取引申請を承認
		Route::post('/requestReject', [TradeController::class, 'requestReject']);//取引申請を拒否
	});

	//欲しいもの
	Route::group(['prefix' => 'wantItems'], function () {
		Route::get('/getAll', [WantItemsController::class, 'getAll']);
		Route::post('/create', [WantItemsController::class, 'create']);
		Route::post('/remove', [WantItemsController::class, 'remove']);
	});

    //ログインユーザー情報
    Route::get('/getUser', [AuthProducerController::class, 'getUser']);
    Route::post('user/changePassword', [ProducersController::class, 'changePassword']);
    Route::post('user/update', [ProducersController::class, 'update']);

});
