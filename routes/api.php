<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServerController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::controller(AuthController::class)->group(function () {
        Route::prefix('auth')->group(function () {
            Route::get('/me', 'user');
        });
        
        Route::get('logout', 'logout');
    });
    
    Route::controller(UserController::class)->group(function () {
        Route::prefix('user')->group(function () {
            Route::get('servers', 'servers');
        });
    });

    Route::controller(ServerController::class)->prefix('server')->group(function () {
        Route::get('boot/{server}', 'boot');
        Route::get('shutdown/{server}', 'shutdown');
    });
});

