<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::controller(AuthController::class)->group(function () {
        Route::prefix('user')->group(function () {
            Route::get('/', 'user');
            });
            Route::get('user/servers', 'servers');

        Route::get('logout', 'logout');
    });

});

