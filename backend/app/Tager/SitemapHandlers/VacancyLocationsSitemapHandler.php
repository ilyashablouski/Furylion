<?php

namespace App\Tager\SitemapHandlers;

use App\Repositories\VacancyLocationRepository;
use OZiTAG\Tager\Backend\Seo\Contracts\ISitemapHandler;
use OZiTAG\Tager\Backend\Seo\Structures\SitemapItem;

class VacancyLocationsSitemapHandler implements ISitemapHandler
{
    private VacancyLocationRepository $repository;

    public function __construct(VacancyLocationRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handle()
    {
        $locations = $this->repository->all();

        $result = [];
        foreach ($locations as $location) {
            $result[] = new SitemapItem($location->url);
        }

        return $result;
    }
}
