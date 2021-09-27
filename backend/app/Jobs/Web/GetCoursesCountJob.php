<?php

namespace App\Jobs\Web;

use App\Repositories\VacancyRepository;
use OZiTAG\Tager\Backend\Core\Jobs\Job;
use OZiTAG\Tager\Backend\Pages\Repositories\PagesRepository;

class GetCoursesCountJob extends Job
{
    public function handle(PagesRepository $pagesRepository)
    {
        $rootPage = $pagesRepository->findByTemplate('courses')->first();
        if(!$rootPage){
            return 0;
        }

        return $pagesRepository->builder()->where('parent_id', $rootPage->id)->count();
    }
}
