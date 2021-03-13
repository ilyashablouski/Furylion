<?php

namespace App\Admin\VacancyLocations\Requests;

use App\Models\VacancyLocation;
use OZiTAG\Tager\Backend\Crud\Requests\CrudFormRequest;

/**
 * Class UpdateVacancyLocationRequest
 * @package App\Admin\VacancyLocations\Requests
 *
 * @property string $name
 * @property string $urlAlias
 */
class UpdateVacancyLocationRequest extends CrudFormRequest
{
    public function rules()
    {
        $routeId = $this->route('id', 0);

        return [
            'name' => 'required|string|max:255',
            'urlAlias' => ['required', 'max:255', 'string', 'unique:' . VacancyLocation::class . ',url_alias,' . $routeId . ',id,deleted_at,NULL']
        ];
    }
}
