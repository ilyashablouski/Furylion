<?php

namespace App\Web\VacancyLocations\Resources;

use App\Models\VacancyLocation;
use OZiTAG\Tager\Backend\Core\Resources\JsonResource;

class VacancyLocationResource extends JsonResource
{
    public function getData()
    {
        /** @var VacancyLocation $model */
        $model = $this->resource;

        return [
            'id' => $model->id,
            'urlAlias' => $model->url_alias,
            'name' => $model->name,
        ];
    }
}
