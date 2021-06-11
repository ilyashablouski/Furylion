<?php

namespace App\Admin\VacancyLocations\Requests;

use OZiTAG\Tager\Backend\Crud\Requests\CrudFormRequest;

/**
 * Class CreateVacancyLocationRequest
 * @package App\Admin\VacancyLocations\Requests
 *
 * @property string $name
 */
class CreateVacancyLocationRequest extends CrudFormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
        ];
    }
}
