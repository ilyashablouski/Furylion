<?php

use Ozerich\FileStorage\Utils\ConfigHelper;
use OZiTAG\Tager\Backend\Files\Utils\TagerImageScenario;
use App\Enums\FileScenario;

return [
    'defaultStorage' => ConfigHelper::temporaryStorage(),
    'defaultValidator' => ConfigHelper::defaultValidator(),

    'scenarios' => [
        FileScenario::OpenGraph => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('content'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbOpenGraph()
        ]),
        FileScenario::Content => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('content'),
            'validator' => ConfigHelper::imageValidator(),
        ]),
        FileScenario::Feedback => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('feedback'),
            'validator' => ConfigHelper::defaultValidator(),
        ]),
        FileScenario::HeadImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('head'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbOpenGraph()
        ]),
    ]
];
