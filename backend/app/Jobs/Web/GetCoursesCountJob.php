<?php

namespace App\Jobs\Web;

use App\Repositories\VacancyRepository;
use OZiTAG\Tager\Backend\Core\Jobs\Job;

class GetCoursesCountJob extends Job
{
    public function handle(VacancyRepository $vacancyRepository)
    {
        return $vacancyRepository->count();
    }
}
