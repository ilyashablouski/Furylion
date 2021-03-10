<?php

namespace App\Tager;

use Illuminate\Support\ServiceProvider;

class TagerServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // TagerPanel::registerRouteHandler('/catalog/(.+?)$', ProductRouteHandler::class);

        // TagerSeo::registerSitemapHandler(ProductSitemapHandler::class);

        /* TagerScopes::registerGroup('App', [
            UsersScope::Base => 'App Base Scope',
        ]); */
    }
}
