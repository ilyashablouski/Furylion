<?php

namespace App\Admin\Vacancies\Requests;

use App\Models\Vacancy;
use App\Models\VacancyLocation;
use Ozerich\FileStorage\Rules\FileRule;
use OZiTAG\Tager\Backend\Crud\Requests\CrudFormWithSeoRequest;

/**
 * Class CreateVacancyRequest
 * @package App\Admin\Vacancies\Requests
 *
 * @property string $title
 * @property string $urlAlias
 * @property string $excerpt
 * @property string $introduction
 * @property string $body
 * @property string $type
 * @property string $level
 * @property string $technologies
 * @property string $duties
 * @property string $requirements
 * @property string $conditions
 * @property string $locationId
 * @property string $image
 */
class UpdateVacancyRequest extends CrudFormWithSeoRequest
{
    public function rules()
    {
        $routeId = $this->route('id', 0);

        return array_merge(parent::rules(), [
            'title' => 'required|string',
            'urlAlias' => ['required', 'string', 'unique:' . Vacancy::class . ',url_alias,' . $routeId . ',id,deleted_at,NULL'],
            'excerpt' => 'nullable|string',
            'introduction' => 'nullable|string',
            'body' => 'nullable|string',
            'type' => 'nullable|string',
            'level' => 'nullable|string',
            'technologies' => 'nullable|string',
            'duties' => 'nullable|string',
            'requirements' => 'nullable|string',
            'conditions' => 'nullable|string',
            'locationId' => 'required|integer|exists:' . VacancyLocation::class .',id,id,!0,deleted_at,NULL',
            'image' => ['nullable', new FileRule()],
        ]);
    }
}
