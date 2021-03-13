<?php

namespace App\Repositories;

use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Builder;
use OZiTAG\Tager\Backend\Core\Repositories\EloquentRepository;
use OZiTAG\Tager\Backend\Core\Repositories\IFilterable;
use OZiTAG\Tager\Backend\Core\Repositories\ISearchable;
use OZiTAG\Tager\Backend\Crud\Contracts\IRepositoryWithPriorityMethods;
use OZiTAG\Tager\Backend\Crud\Traits\RepositoryPriorityMethodsTrait;

class VacancyRepository extends EloquentRepository implements IRepositoryWithPriorityMethods, ISearchable, IFilterable
{
    use RepositoryPriorityMethodsTrait;

    public function __construct(Vacancy $model)
    {
        parent::__construct($model);
    }

    public function searchByQuery(?string $query, Builder $builder = null): ?Builder
    {
        $builder = $builder ? $builder : $this->model->query();

        return $builder->where(function (Builder $q) use ($query) {
            return $q->orWhere('title', 'LIKE', "%$query%");
        });
    }

    public function findByUrlAlias(string $urlAlias): ?Vacancy
    {
        return $this->model::query()->where('url_alias', '=', $urlAlias)->first();
    }

    public function filterByKey(Builder $builder, string $key, mixed $value): Builder
    {
        switch ($key) {
            case 'location':
                return $builder->whereIn('location_id', explode(',', $value));
            default:
                return $builder;
        }
    }
}
