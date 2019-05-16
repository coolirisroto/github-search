<?php

use Illuminate\Http\Request;
Use App\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//https://www.toptal.com/laravel/restful-laravel-api-tutorial

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('logs', 'LogController@index');
Route::get('logs/{id}', 'LogController@show');
Route::post('logs', 'LogController@store');
Route::put('logs/{id}', 'LogController@update');
Route::delete('logs/{id}', 'LogController@delete');

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

