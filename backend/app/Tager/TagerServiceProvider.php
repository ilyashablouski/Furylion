<?php

namespace App\Tager;

use App\Web\Vacancies\Jobs\GetVacanciesCountJob;
use Illuminate\Support\ServiceProvider;
use OZiTAG\Tager\Backend\Core\Utils\TagerVariables;
use OZiTAG\Tager\Backend\Panel\TagerPanel;
use OZiTAG\Tager\Backend\Rbac\TagerScopes;
use OZiTAG\Tager\Backend\Seo\Structures\ParamsTemplate;
use OZiTAG\Tager\Backend\Seo\TagerSeo;
use OZiTAG\Tager\Backend\Menus\TagerMenus;
use App\Enums\SeoParamTemplate;
use App\Enums\UsersScope;
use App\Tager\PanelRouteHandlers\VacancyPanelRouteHandler;
use App\Tager\SitemapHandlers\VacanciesSitemapHandler;
use App\Tager\SitemapHandlers\VacancyLocationsSitemapHandler;

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
        TagerMenus::registerMenu('header', 'Header Menu', false);
        TagerMenus::registerMenu('footer', 'Footer Menu', false);

        TagerPanel::registerRouteHandler('/careers/(.+?)$', VacancyPanelRouteHandler::class);

        TagerVariables::register('vacancies_count', GetVacanciesCountJob::class, 0);

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
