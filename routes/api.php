<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OSController;
use App\Http\Controllers\ServerController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::controller(AuthController::class)->group(function () {
        Route::prefix('auth')->group(function () {
            Route::get('/me', 'user');
        });
        
        Route::get('logout', 'logout');
    });

    Route::controller(OSController::class)->prefix('os')->group(function () {
        Route::get('version', 'versionIndex');
    });
    
    Route::controller(UserController::class)->prefix('user')->group(function () {
        Route::get('servers', 'servers');
        Route::post('server', 'storeServer');
    });

    Route::controller(ServerController::class)->prefix('server')->group(function () {
        Route::get('boot/{server}', 'boot');
        Route::get('shutdown/{server}', 'shutdown');
        Route::get('{server}', 'show');
    });
});

