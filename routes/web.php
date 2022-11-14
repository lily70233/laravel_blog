<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users/{id}','App\Http\Controllers\hellocontroller@hello');
Route::get('/posts/{post}/comments/{comment}','App\Http\Controllers\postcontroller@poster');
Route::post('/users/{user?}',function ($user=1){
    return "user".$user;});
Route::get('admin','App\Http\Controllers\postcontroller@posterer');

Route::get('photos','App\Http\Controllers\postcontroller@photo');

Route::get('photophotos',function(){return view('photographs2');});