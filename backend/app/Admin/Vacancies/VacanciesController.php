<?php

namespace App\Admin\Vacancies;

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

        $this->setUpdateAction(new StoreOrUpdateAction(UpdateVacancyRequest::class, null, [
            'repository' => $repository,
            'fields' => [
                'title',
                'url_alias' => 'urlAlias',
                'excerpt',
                'introduction',
                'body',
                'type',
                'level',
                'technologies',
                'duties',
                'requirements',
                'conditions',
                'tags',
                'location_id' => 'locationId',
                'image_id' => 'image:file',
                'page_title' => 'pageTitle',
                'page_description' => 'pageDescription',
                'open_graph_image_id' => 'openGraphImage:file'
            ],
        ]));

        $this->setResourceFields([
            'id',
            'url',
            'title',
            'image:file:url',
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
            'tags',
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
