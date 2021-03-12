<?php

namespace App\Tager\SitemapHandlers;

use App\Repositories\VacancyRepository;
use OZiTAG\Tager\Backend\Seo\Contracts\ISitemapHandler;
use OZiTAG\Tager\Backend\Seo\Structures\SitemapItem;

class VacanciesSitemapHandler implements ISitemapHandler
{
    private VacancyRepository $vacancyRepository;

    public function __construct(VacancyRepository $repository)
    {
        $this->vacancyRepository = $repository;
    }

    public function handle()
    {
        $vacancies = $this->vacancyRepository->all();

        $result = [];
        foreach ($vacancies as $vacancy) {
            $result[] = new SitemapItem($vacancy->url);
        }

        return $result;
    }
}
