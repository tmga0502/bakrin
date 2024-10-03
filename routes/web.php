<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::any('{all}', fn () => view('mainApp'))
//    ->where(['all' => '.*']);

// Admin routes
Route::get('/admin', function () {
	return view('adminApp');
});
Route::get('/admin/{any}', function () {
	return view('adminApp');
})->where('any', '.*');

// Producer routes
Route::get('/{any}', function () {
	return view('mainApp');
})->where('any', '^(?!admin).*$');

// Fallback route for other paths
Route::fallback(function () {
	return view('mainApp');
});
