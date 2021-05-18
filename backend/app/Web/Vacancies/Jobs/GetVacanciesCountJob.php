<?php

namespace App\Web\Vacancies\Jobs;

use App\Repositories\VacancyRepository;
use OZiTAG\Tager\Backend\Core\Jobs\Job;

class GetVacanciesCountJob extends Job
{
    public function handle(VacancyRepository $vacancyRepository)
    {
        return $vacancyRepository->count();
    }
}
