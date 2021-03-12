<?php

namespace App\Admin\VacancyLocations;

use App\Admin\VacancyLocations\Operations\UpdateVacancyLocationOperation;
use App\Admin\VacancyLocations\Requests\CreateVacancyLocationRequest;
use App\Admin\VacancyLocations\Requests\UpdateVacancyLocationRequest;
use App\Repositories\VacancyLocationRepository;
use OZiTAG\Tager\Backend\Crud\Actions\StoreOrUpdateAction;
use OZiTAG\Tager\Backend\Crud\Controllers\AdminCrudController;

class VacancyLocationsController extends AdminCrudController
{
    protected bool $hasCountAction = true;
    protected bool $hasMoveAction = true;

    public function __construct(VacancyLocationRepository $repository)
    {
        parent::__construct($repository);

        $this->setStoreAction(new StoreOrUpdateAction(CreateVacancyLocationRequest::class, null, [
            'repository' => $repository,
            'fields' => [
                'name',
            ],
            'urlAliasGenerator' => [
                'field' => 'url_alias',
                'nameField' => 'name',
            ],
        ]));

        $this->setUpdateAction(new StoreOrUpdateAction(
            UpdateVacancyLocationRequest::class, UpdateVacancyLocationOperation::class
        ));

        $this->setResourceFields([
            'id',
            'url',
            'name',
        ]);

        $this->setFullResourceFields([
            'id',
            'name',
            'urlAlias' => 'url_alias:string',
        ]);

        $this->setCacheNamespace('vacancies');
    }
}
