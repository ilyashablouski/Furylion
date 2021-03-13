<?php

namespace App\Web\VacancyLocations\Jobs;

use App\Repositories\VacancyLocationRepository;
use App\Web\VacancyLocations\Resources\VacancyLocationResource;
use OZiTAG\Tager\Backend\Core\Jobs\Job;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class getVacancyLocationByAliasJob extends Job
{
    protected string $alias;

    public function __construct(string $alias)
    {
        $this->alias = $alias;
    }

    public function handle(VacancyLocationRepository $repository)
    {
        $model = $repository->findByUrlAlias($this->alias);

        if (!$model) {
            throw new NotFoundHttpException('Location not found');
        }

        return new VacancyLocationResource($model);
    }
}
