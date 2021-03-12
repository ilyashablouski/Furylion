<?php

namespace App\Web\VacancyLocations;

use App\Repositories\VacancyLocationRepository;
use App\Web\VacancyLocations\Features\ViewVacancyLocationsFeature;
use App\Web\VacancyLocations\Resources\VacancyLocationResource;
use OZiTAG\Tager\Backend\Crud\Controllers\PublicCrudController;

class VacancyLocationsController extends PublicCrudController
{
    public bool $hasViewAction = false;

    public function __construct(VacancyLocationRepository $repository)
    {
        parent::__construct($repository);
        $this->setShortResourceClass(VacancyLocationResource::class);
    }

    public function viewByAlias(string $alias)
    {
        return $this->serve(ViewVacancyLocationsFeature::class, [
            'alias' => $alias
        ]);
    }
}
