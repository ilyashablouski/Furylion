<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\URL;
use OZiTAG\Tager\Backend\Core\Models\TModel;

/**
 * Class Vacancy
 * @package App\Models
 *
 * @property int $id
 * @property int $priority
 * @property string $name
 * @property string $url_alias
 *
 * @property string $url
 * @property string $full_url
 *
 * @property Vacancy[]|Collection $vacancies
 */
class VacancyLocation extends TModel
{
    use SoftDeletes;

    static $defaultOrder = 'priority ASC';

    public $timestamps = false;

    protected $fillable = [
        'priority',
        'name',
        'url_alias',
    ];

    public function vacancies()
    {
        return $this->hasMany(Vacancy::class, 'location_id');
    }

    public function getUrlAttribute(): string
    {
        return '/careers/location/' . $this->url_alias;
    }

    public function getFullUrlAttribute(): string
    {
        return URL::to($this->url);
    }
}
