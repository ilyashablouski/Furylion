<?php

namespace App\Admin\Vacancies\Requests;

use App\Models\VacancyLocation;
use OZiTAG\Tager\Backend\Crud\Requests\CrudFormRequest;

/**
 * Class CreateVacancyRequest
 * @package App\Admin\Vacancies\Requests
 *
 * @property string $title
 * @property string $excerpt
 * @property string $body
 * @property string $locationId
 */
class CreateVacancyRequest extends CrudFormRequest
{
    public function rules()
    {
        return [
            'title' => 'required|string',
            'excerpt' => 'nullable|string',
            'body' => 'nullable|string',
            'locationId' => 'required|integer|exists:' . VacancyLocation::class .',id,id,!0,deleted_at,NULL',
        ];
    }
}
