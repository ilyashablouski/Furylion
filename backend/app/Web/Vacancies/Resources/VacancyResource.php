<?php

namespace App\Web\Vacancies\Resources;

use App\Models\Vacancy;
use OZiTAG\Tager\Backend\Core\Resources\JsonResource;

class VacancyResource extends JsonResource
{
    public function getData()
    {
        /** @var Vacancy $model */
        $model = $this->resource;

        return [
            'id' => $model->id,
            'title' => $model->title,
            'excerpt' => $model->excerpt,
            'urlAlias' => $model->url_alias,
            'location' => $model->location->name,
            'image' => $model->image ? $model->image->getFullJson() : null,
            'typeOfWork' => $model->type,
            'tags' => $model->tags,
            'level' => $model->level,
        ];
    }
}
