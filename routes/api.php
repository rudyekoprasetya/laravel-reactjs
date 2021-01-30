<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Routes untuk API Pengurus
Route::get('/pengurus', [App\Http\Controllers\PengurusController::class, 'index']);
Route::post('/pengurus', [App\Http\Controllers\PengurusController::class, 'store']);
Route::get('/pengurus/{id}', [App\Http\Controllers\PengurusController::class, 'show']);
Route::put('/pengurus/{id}', [App\Http\Controllers\PengurusController::class, 'update']);
Route::delete('/pengurus/{id}', [App\Http\Controllers\PengurusController::class, 'destroy']);
