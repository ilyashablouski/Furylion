<?php

namespace App\Jobs\Web;

use App\Repositories\VacancyRepository;
use OZiTAG\Tager\Backend\Core\Jobs\Job;
use OZiTAG\Tager\Backend\Pages\Models\TagerPageField;
use OZiTAG\Tager\Backend\Pages\Repositories\PageFieldFilesRepository;
use OZiTAG\Tager\Backend\Pages\Repositories\PagesRepository;

class GetCoursesCountJob extends Job
{
    public function handle(PagesRepository $pagesRepository, PageFieldFilesRepository $pageFieldFilesRepository)
    {
        $rootPage = $pagesRepository->findByTemplate('courses')->first();
        if (!$rootPage) {
            return 0;
        }

        /** @var TagerPageField $field */
        $field = $pageFieldFilesRepository->builder()->where('page_id', '=', $rootPage->id)
            ->where('field', '=', 'coursesItems')->first();
        if (!$field) {
            return 0;
        }

        $fieldValue = $field->value ? json_decode($field->value, true) : null;
        if (!$fieldValue) {
            return 0;
        }

        return count($fieldValue);
    }
}
