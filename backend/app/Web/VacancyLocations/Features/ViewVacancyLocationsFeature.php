<?php

namespace App\Web\VacancyLocations\Features;

use App\Web\VacancyLocations\Jobs\getVacancyLocationByAliasJob;
use OZiTAG\Tager\Backend\Core\Features\Feature;

class ViewVacancyLocationsFeature extends Feature
{
    protected string $alias;

    public function __construct(string $alias)
    {
        $this->alias = $alias;
    }

    public function handle()
    {
        return $this->run(getVacancyLocationByAliasJob::class, [
            'alias' => $this->alias
        ]);
    }
}
