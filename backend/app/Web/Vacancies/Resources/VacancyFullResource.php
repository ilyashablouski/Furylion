<?php

namespace App\Web\Vacancies\Resources;

use App\Models\Vacancy;
use OZiTAG\Tager\Backend\Core\Resources\JsonResource;

class VacancyFullResource extends JsonResource
{
    public function getData()
    {
        /** @var Vacancy $model */
        $model = $this->resource;

        return [
            'id' => $model->id,
            'title' => $model->title,
            'excerpt' => $model->excerpt,
            'introduction' => $model->introduction,
            'location' => $model->location->name,
            'body' => $model->body,
            'type' => $model->type,
            'level' => $model->level,
            'technologies' => $model->technologies,
            'duties' => $model->duties,
            'requirements' => $model->requirements,
            'conditions' => $model->conditions,
            'image' => $model->image ? $model->image->getUrl() : null,
            'pageTitle' => $model->getPageTitle(),
            'pageDescription' => $model->getPageDescription(),
            'openGraphImage' => $model->openGraphImage ? $model->openGraphImage->getUrl() : null,
        ];
    }
}
