<?php

namespace App\Web\Vacancies\Features;

use App\Web\Vacancies\Jobs\GetVacancyByAliasJob;
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
        return $this->run(GetVacancyByAliasJob::class, [
            'alias' => $this->alias
        ]);
    }
}
