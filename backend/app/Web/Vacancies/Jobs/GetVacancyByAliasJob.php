<?php

namespace App\Web\Vacancies\Jobs;

use App\Repositories\VacancyRepository;
use App\Web\Vacancies\Resources\VacancyFullResource;
use OZiTAG\Tager\Backend\Core\Jobs\Job;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class GetVacancyByAliasJob extends Job
{
    protected string $alias;

    public function __construct(string $alias)
    {
        $this->alias = $alias;
    }

    public function handle(VacancyRepository $repository)
    {
        $model = $repository->findByUrlAlias($this->alias);

        if (!$model) {
            throw new NotFoundHttpException('Vacancy not found');
        }

        return new VacancyFullResource($model);
    }
}
