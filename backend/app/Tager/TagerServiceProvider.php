<?php

namespace App\Tager;

use App\Enums\SeoParamTemplate;
use App\Enums\UsersScope;
use App\Tager\PanelRouteHandlers\VacancyPanelRouteHandler;
use App\Tager\SitemapHandlers\VacanciesSitemapHandler;
use App\Tager\SitemapHandlers\VacancyLocationsSitemapHandler;
use Illuminate\Support\ServiceProvider;
use OZiTAG\Tager\Backend\Panel\TagerPanel;
use OZiTAG\Tager\Backend\Rbac\TagerScopes;
use OZiTAG\Tager\Backend\Seo\Structures\ParamsTemplate;
use OZiTAG\Tager\Backend\Seo\TagerSeo;

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
        TagerPanel::registerRouteHandler('/careers/(.+?)$', VacancyPanelRouteHandler::class);

        TagerScopes::registerGroup('Vacancies', [
            UsersScope::VacanciesView => 'View',
            UsersScope::VacanciesCreate => 'Create',
            UsersScope::VacanciesEdit => 'Edit',
            UsersScope::VacanciesDelete => 'Delete',
        ]);

        TagerSeo::registerSitemapHandler(VacanciesSitemapHandler::class);
        TagerSeo::registerSitemapHandler(VacancyLocationsSitemapHandler::class);

        TagerSeo::registerParamsTemplate(SeoParamTemplate::VacanciesSingle, new ParamsTemplate(
            'Vacancies - Vacancy Page', ['title' => 'Title', 'excerpt' => 'Excerpt'], false,
            'Vacancy - {{title}}', 'Vacancy - {{title}}. {{excerpt}}'
        ));
    }
}
