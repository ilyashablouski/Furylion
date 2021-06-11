<?php

namespace App\Admin\VacancyLocations\Jobs;

use App\Models\VacancyLocation;
use OZiTAG\Tager\Backend\Core\Jobs\Job;

class CanVacancyLocationDeleteJob extends Job
{
    private VacancyLocation $model;

    public function __construct(VacancyLocation $model)
    {
        $this->model = $model;
    }
    public function handle(): bool
    {
        return $this->model->vacancies->isEmpty();
    }
}
