<?php

namespace App\Tager\PanelRouteHandlers;

use OZiTAG\Tager\Backend\Panel\Contracts\IRouteHandler;
use OZiTAG\Tager\Backend\Panel\Structures\TagerRouteHandlerResult;
use App\Repositories\VacancyRepository;

class VacancyPanelRouteHandler implements IRouteHandler
{
    private VacancyRepository $vacancyRepository;

    public function __construct(VacancyRepository $vacancyRepository)
    {
        $this->vacancyRepository = $vacancyRepository;
    }

    public function handle($route, $matches)
    {
        $vacancy = $this->vacancyRepository->findByUrlAlias($matches[0]);
        if (!$vacancy) {
            return null;
        }

        $result = new TagerRouteHandlerResult();

        $result->setModel('Vacancy', $vacancy->title);
        $result->addAction('Edit Vacancy', '/vacancies/' . $vacancy->id);

        return $result;
    }
}
