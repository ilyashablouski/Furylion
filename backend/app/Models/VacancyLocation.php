<?php

namespace App\Models;

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

    public function getUrlAttribute(): string
    {
        return '/careers/location/' . $this->url_alias;
    }

    public function getFullUrlAttribute(): string
    {
        return URL::to($this->url);
    }
}
