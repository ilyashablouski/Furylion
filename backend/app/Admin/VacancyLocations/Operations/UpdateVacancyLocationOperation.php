<?php

namespace App\Admin\VacancyLocations\Operations;

use App\Admin\VacancyLocations\Requests\UpdateVacancyLocationRequest;
use App\Models\VacancyLocation;
use App\Repositories\VacancyLocationRepository;

class UpdateVacancyLocationOperation
{
    protected UpdateVacancyLocationRequest $request;
    protected VacancyLocation $model;

    public function __construct(UpdateVacancyLocationRequest $request, VacancyLocation $model)
    {
        $this->request = $request;
        $this->model = $model;
    }

    public function handle(VacancyLocationRepository $repository)
    {
        $repository->set($this->model);

        return $repository->fillAndSave([
            'name' => $this->request->name,
            'url_alias' => $this->request->urlAlias,
        ]);
    }
}
