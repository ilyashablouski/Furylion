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
        FileScenario::HeadImage => [
            'storage' => ConfigHelper::fileStorage('head'),
            'validator' => ConfigHelper::imageValidator(),
        ],
        FileScenario::VacancyImage => [
            'storage' => ConfigHelper::fileStorage('vacancies'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(293)
        ],
        FileScenario::HomeHeroImage => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ],
        FileScenario::HomeHeroImageMobile => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ],
        FileScenario::HomeWorksItems => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(1230, 689, ConfigHelper::MODE_CROP)
        ],
        FileScenario::HomeServicesItems => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(1270)
        ],
        FileScenario::HomeTechnologiesGallery => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 70)
        ],
        FileScenario::HomeTechnologiesImage => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 750)
        ],
        FileScenario::HomeTechnologiesImageMobile => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 750)
        ],
        FileScenario::HomeTeamImage => [
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(380, 380, ConfigHelper::MODE_CROP)
        ],
        FileScenario::ServicesArtImages => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 750)
        ],
        FileScenario::ServicesProductionMedia => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 411)
        ],
        FileScenario::ServicesPorting => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(633)
        ],
        FileScenario::ServicesDevelopment => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(398, 219, ConfigHelper::MODE_CROP)
        ],
        FileScenario::ServicesDevelopmentLogos => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ],
        FileScenario::ServicesCoDevelopmentLogos => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ],
        FileScenario::ServicesAds => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(248)
        ],
    ]
];
