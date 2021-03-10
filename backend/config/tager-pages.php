<?php

return [
    'file_storage_scenarios' => [
        'cover' => null,
        'content' => \App\Enums\FileScenario::Content,
        'openGraph' => \App\Enums\FileScenario::OpenGraph
    ],

    'templates' => [
        'home' => \App\Tager\Templates\HomeTemplate::class,
        'vacancies' => \App\Tager\Templates\VacanciesTemplate::class,
        'services' => \App\Tager\Templates\ServicesTemplate::class,
        'playable-ads' => \App\Tager\Templates\PlayableAdsTemplate::class,
    ]
];
