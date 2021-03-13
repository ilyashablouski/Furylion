<?php

namespace App\Web\Vacancies\Features;

use App\Web\Vacancies\Jobs\getVacancyByAliasJob;
use OZiTAG\Tager\Backend\Core\Features\Feature;

class ViewVacancyFeature extends Feature
{
    protected string $alias;

    public function __construct(string $alias)
    {
        $this->alias = $alias;
    }

    public function handle()
    {
        return $this->run(getVacancyByAliasJob::class, [
            'alias' => $this->alias
        ]);
    }
}
