<?php

namespace App\Admin\Vacancies\Operations;

use App\Admin\Vacancies\Requests\UpdateVacancyRequest;
use App\Models\Vacancy;
use App\Repositories\VacancyRepository;
use Ozerich\FileStorage\Storage;

class UpdateVacancyOperation
{
    protected UpdateVacancyRequest $request;
    protected Vacancy $model;

    public function __construct(UpdateVacancyRequest $request, Vacancy $model)
    {
        $this->request = $request;
        $this->model = $model;
    }

    public function handle(VacancyRepository $repository)
    {
        $repository->set($this->model);

        return $repository->fillAndSave([
            'title' => $this->request->title,
            'url_alias' => $this->request->urlAlias,
            'excerpt' => $this->request->excerpt,
            'introduction' => $this->request->introduction,
            'body' => $this->request->body,
            'type' => $this->request->type,
            'level' => $this->request->level,
            'technologies' => $this->request->technologies,
            'duties' => $this->request->duties,
            'requirements' => $this->request->requirements,
            'conditions' => $this->request->conditions,
            'location_id' => $this->request->locationId,
            'image_id' => Storage::fromUUIDtoId($this->request->image),
            'page_title' => $this->request->pageTitle,
            'page_description' => $this->request->pageDescription,
            'open_graph_image_id' => Storage::fromUUIDtoId($this->request->openGraphImage)
        ]);
    }
}
