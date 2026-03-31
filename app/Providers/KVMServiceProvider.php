<?php

namespace App\Providers;

use App\Services\KVMService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class KVMServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(KVMService::class, function (Application $app) {
            return new KVMService(env('KVM_HOST'), env('KVM_CONNECTION_TYPE'), env('KVM_READONLY', false));
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
