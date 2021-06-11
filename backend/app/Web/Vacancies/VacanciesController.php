<?php

namespace App\Web\Vacancies;

use App\Repositories\VacancyRepository;
use App\Web\Vacancies\Features\ViewVacancyFeature;
use App\Web\Vacancies\Resources\VacancyResource;
use OZiTAG\Tager\Backend\Crud\Controllers\PublicCrudController;

class VacanciesController extends PublicCrudController
{
    public bool $hasViewAction = false;

    public function __construct(VacancyRepository $repository)
    {
        parent::__construct($repository);
        $this->setShortResourceClass(VacancyResource::class);
    }

    public function viewByAlias(string $alias)
    {
        return $this->serve(ViewVacancyFeature::class, [
            'alias' => $alias
        ]);
    }
}
