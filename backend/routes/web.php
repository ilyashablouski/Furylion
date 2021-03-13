<?php

use App\Web\Vacancies\VacanciesController;
use App\Web\VacancyLocations\VacancyLocationsController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api.cache'], function () {
    Route::get('/vacancies', [VacanciesController::class, 'index']);
    Route::get('/vacancies/{alias}', [VacanciesController::class, 'viewByAlias']);

    Route::get('/vacancies/locations/list', [VacancyLocationsController::class, 'index']);
    Route::get('/vacancies/locations/{alias}', [VacancyLocationsController::class, 'viewByAlias']);
});
