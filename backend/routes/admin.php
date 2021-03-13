<?php

use App\Admin\Vacancies\VacanciesController;
use App\Admin\VacancyLocations\VacancyLocationsController;
use App\Enums\UsersScope;
use Illuminate\Support\Facades\Route;
use OZiTAG\Tager\Backend\Rbac\Facades\AccessControlMiddleware;

Route::group(['middleware' => [AccessControlMiddleware::scopes(UsersScope::VacanciesView)]], function () {
    Route::get('/vacancies/count', [VacanciesController::class, 'count']);
    Route::get('/vacancies', [VacanciesController::class, 'index']);
    Route::get('/vacancies/{id}', [VacanciesController::class, 'view']);

    Route::post('/vacancies', [VacanciesController::class, 'store'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesCreate)
    ]);

    Route::put('/vacancies/{id}', [VacanciesController::class, 'update'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesEdit)
    ]);

    Route::delete('/vacancies/{id}', [VacanciesController::class, 'delete'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesDelete)
    ]);

    Route::post('/vacancies/{id}/move/{direction}', [VacanciesController::class, 'move'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesEdit)
    ]);


    Route::get('/vacancy-locations/count', [VacancyLocationsController::class, 'count']);
    Route::get('/vacancy-locations', [VacancyLocationsController::class, 'index']);
    Route::get('/vacancy-locations/{id}', [VacancyLocationsController::class, 'view']);

    Route::post('/vacancy-locations', [VacancyLocationsController::class, 'store'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesCreate)
    ]);

    Route::put('/vacancy-locations/{id}', [VacancyLocationsController::class, 'update'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesEdit)
    ]);

    Route::delete('/vacancy-locations/{id}', [VacancyLocationsController::class, 'delete'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesDelete)
    ]);

    Route::post('/vacancy-locations/{id}/move/{direction}', [VacancyLocationsController::class, 'move'])->middleware([
        AccessControlMiddleware::scopes(UsersScope::VacanciesEdit)
    ]);
});
