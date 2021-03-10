<?php

use OZiTAG\Tager\Backend\Fields\Enums\FieldType;

return [
    'file_storage_scenarios' => [
        'cover' => null,
        'content' => \App\Enums\FileScenario::Content,
        'openGraph' => \App\Enums\FileScenario::OpenGraph
    ],

    'templates' => [
        'home' => \App\Tager\Templates\HomeTemplate::class
    ]
];
