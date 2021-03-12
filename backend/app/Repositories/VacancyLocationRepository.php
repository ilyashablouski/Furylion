<?php

namespace App\Repositories;

use App\Models\VacancyLocation;
use Illuminate\Database\Eloquent\Builder;
use OZiTAG\Tager\Backend\Core\Repositories\EloquentRepository;
use OZiTAG\Tager\Backend\Core\Repositories\ISearchable;
use OZiTAG\Tager\Backend\Crud\Contracts\IRepositoryWithPriorityMethods;
use OZiTAG\Tager\Backend\Crud\Traits\RepositoryPriorityMethodsTrait;

class VacancyLocationRepository extends EloquentRepository implements IRepositoryWithPriorityMethods, ISearchable
{
    use RepositoryPriorityMethodsTrait;

    public function __construct(VacancyLocation $model)
    {
        parent::__construct($model);
    }

    public function searchByQuery(?string $query, Builder $builder = null): ?Builder
    {
        $builder = $builder ? $builder : $this->model->query();

        return $builder->where(function (Builder $q) use ($query) {
            return $q->orWhere('name', 'LIKE', "%$query%");
        });
    }

    public function findByUrlAlias(string $urlAlias): ?VacancyLocation
    {
        return $this->model::query()->where('url_alias', '=', $urlAlias)->first();
    }
}
