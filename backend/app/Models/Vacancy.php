<?php

namespace App\Models;

use App\Enums\SeoParamTemplate;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\URL;
use Ozerich\FileStorage\Models\File;
use OZiTAG\Tager\Backend\Core\Models\TModel;
use OZiTAG\Tager\Backend\Seo\TagerSeo;

/**
 * Class Vacancy
 * @package App\Models
 *
 * @property int $id
 * @property int $priority
 * @property string $title
 * @property string $url_alias
 * @property string $excerpt
 * @property string $introduction
 * @property string $body
 * @property string $type
 * @property string $level
 * @property string $technologies
 * @property string $duties
 * @property string $requirements
 * @property string $conditions
 * @property string $tags
 * @property int $location_id
 * @property int $image_id
 * @property string $page_title
 * @property string $page_description
 * @property int $open_graph_image_id
 *
 * @property VacancyLocation $location
 * @property File $image
 * @property File $openGraphImage
 * @property string $url
 * @property string $full_url
 */
class Vacancy extends TModel
{
    use SoftDeletes;

    static $defaultOrder = 'priority ASC';

    public $timestamps = false;

    protected $fillable = [
        'priority',
        'title',
        'url_alias',
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
        'location_id',
        'image_id',
        'page_title',
        'page_description',
        'open_graph_image_id',
    ];

    public function location()
    {
        return $this->belongsTo(VacancyLocation::class);
    }

    public function image()
    {
        return $this->belongsTo(File::class);
    }

    public function openGraphImage()
    {
        return $this->belongsTo(File::class);
    }

    public function getUrlAttribute(): string
    {
        return '/careers/' . $this->url_alias;
    }

    public function getFullUrlAttribute(): string
    {
        return URL::to($this->url);
    }

    public function getPageTitle(): ?string
    {
        return $this->page_title ?? TagerSeo::getPageTitle(SeoParamTemplate::VacanciesSingle, [
            'title' => $this->title
        ]);
    }

    public function getPageDescription(): ?string
    {
        return $this->page_description ?? TagerSeo::getPageDescription(SeoParamTemplate::VacanciesSingle, [
            'title' => $this->title,
            'excerpt' => $this->excerpt,
        ]);
    }
}
