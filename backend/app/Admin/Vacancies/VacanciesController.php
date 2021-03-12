<?php

namespace App\Admin\Vacancies;

use App\Admin\Vacancies\Operations\UpdateVacancyOperation;
use App\Admin\Vacancies\Requests\CreateVacancyRequest;
use App\Admin\Vacancies\Requests\UpdateVacancyRequest;
use App\Repositories\VacancyRepository;
use OZiTAG\Tager\Backend\Crud\Actions\StoreOrUpdateAction;
use OZiTAG\Tager\Backend\Crud\Controllers\AdminCrudController;

class VacanciesController extends AdminCrudController
{
    protected bool $hasCountAction = true;
    protected bool $hasMoveAction = true;

    public function __construct(VacancyRepository $repository)
    {
        parent::__construct($repository);

        $this->setStoreAction(new StoreOrUpdateAction(CreateVacancyRequest::class, null, [
            'repository' => $repository,
            'fields' => [
                'title',
                'excerpt',
                'body',
                'location_id' => 'locationId',
            ],
            'urlAliasGenerator' => [
                'field' => 'url_alias',
                'nameField' => 'title'
            ],
        ]));

        $this->setUpdateAction(new StoreOrUpdateAction(
            UpdateVacancyRequest::class, UpdateVacancyOperation::class
        ));

        $this->setResourceFields([
            'id',
            'url',
            'title',
            'location' => [
                'relation' => 'location',
                'as' => 'name',
            ],
            'excerpt',
        ]);

        $this->setFullResourceFields([
            'id',
            'title',
            'excerpt',
            'urlAlias' => 'url_alias:string',
            'introduction',
            'body',
            'type',
            'level',
            'technologies',
            'duties',
            'requirements',
            'conditions',
            'conditions',
            'location' => [
                'relation' => 'location',
                'as' => ['id', 'name', 'url_alias']
            ],
            'image:file:model',
            'pageTitle' => 'page_title:string',
            'pageDescription' => 'page_description:string',
            'openGraphImage:file:model',
        ]);

        $this->setCacheNamespace('vacancies');
    }
}
