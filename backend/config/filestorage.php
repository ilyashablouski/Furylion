<?php

use Ozerich\FileStorage\Utils\ConfigHelper;
use OZiTAG\Tager\Backend\Files\Utils\TagerImageScenario;
use App\Enums\FileScenario;

return [
    'defaultStorage' => ConfigHelper::temporaryStorage(),
    'defaultValidator' => [
        'maxSize' => 50 * 1024 * 1024,
        'checkExtensionByMimeType' => false,
        'extensions' => ['html', 'jpg', 'jpeg', 'png', 'zip', 'docx', 'pdf', 'doc', 'rar', 'xls', 'xlsx', 'pptx', 'ppt', 'gif', 'mp4', 'svg', 'fig', 'psd', 'txt', 'csv']
    ],

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
        FileScenario::UserFile => [
            'storage' => ConfigHelper::fileStorage('userfiles', 0),
            'validator' => ConfigHelper::defaultValidator(100),
            'saveOriginalFilename' => true
        ],
        FileScenario::Feedback => [
            'storage' => ConfigHelper::fileStorage('feedback'),
            'validator' => ConfigHelper::defaultValidator(),
        ],
        FileScenario::PlayableGame => [
            'storage' => ConfigHelper::fileStorage('playable'),
            'validator' => [
                'maxSize' => 50 * 1024 * 1024,
                'checkExtensionByMimeType' => true,
                'extensions' => ['html']
            ]
        ],
        FileScenario::Cv => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('cv'),
            'validator' => [
                'extensions' => ['csv', 'pdf', 'doc', 'txt', 'docx', 'xls', 'xlsx', 'png', 'jpeg', 'jpg']
            ]
        ]),
        FileScenario::HeadImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('head'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebp()
        ]),
        FileScenario::VacancyImage => TagerImageScenario::wrapWithList([
            'storage' => ConfigHelper::fileStorage('vacancies'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(293)
        ]),
        FileScenario::HomeHeroImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => ConfigHelper::backgroundThumbnails()
        ]),
        FileScenario::HomeHeroImageMobile => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => ConfigHelper::backgroundThumbnails()
        ]),
        FileScenario::HomeWorksItems => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => [
                'desktop' => ConfigHelper::thumbWithWebpAnd2x(1230, 689, ConfigHelper::MODE_CROP),
                'mobile' => ConfigHelper::thumbWithWebpAnd2x(420, null, ConfigHelper::MODE_AUTO),
            ]
        ]),
        FileScenario::HomeServicesItems => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => [
                'mobile' => ConfigHelper::thumbWithWebpAnd2x(420),
                'tablet' => ConfigHelper::thumbWithWebpAnd2x(1024),
                'laptop' => ConfigHelper::thumbWithWebpAnd2x(1260),
                'desktop' => ConfigHelper::thumbWithWebpAnd2x(1400),
            ]
        ]),
        FileScenario::HomeTechnologiesGallery => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 70)
        ]),
        FileScenario::HomeTechnologiesImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 750)
        ]),
        FileScenario::HomeTechnologiesImageMobile => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 750)
        ]),
        FileScenario::HomeTeamImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('home-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(380, 380, ConfigHelper::MODE_CROP)
        ]),
        FileScenario::ServicesArtImages => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 750)
        ]),
        FileScenario::ServicesFullStackDevelopment => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 219)
        ]),
        FileScenario::ServicesProductionMedia => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(null, 411)
        ]),
        FileScenario::ServicesPorting => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(633)
        ]),
        FileScenario::ServicesDevelopment => [
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(398, 219, ConfigHelper::MODE_CROP)
        ],
        FileScenario::ServicesDevelopmentLogos => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ]),
        FileScenario::ServicesCoDevelopmentLogos => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ]),
        FileScenario::ServicesAds => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('services-page'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => [
                'desktop' => ConfigHelper::thumbWithWebpAnd2x(248),
                'mobile' => ConfigHelper::thumbWithWebpAnd2x(188),
            ]
        ]),
        FileScenario::PlayableAdsHead => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('playable-page-head'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(468, 263)
        ]),
        FileScenario::Instagram => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('instagram'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(385, 385, ConfigHelper::MODE_CROP),
        ]),
        FileScenario::PlayableDoYoWantCard => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('playable-card'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(328, 219)
        ]),
        FileScenario::FeedbackPhoto => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('feedback'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(257, 257)
        ]),
        FileScenario::CoursesHeroImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('courses'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => [
                'desktop' => ConfigHelper::thumbWithWebpAnd2x(null, 720),
                'mobile' => ConfigHelper::thumbWithWebpAnd2x(420, null),
            ]
        ]),
        FileScenario::CoursesCardImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('courses'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => [
                'desktop' => ConfigHelper::thumbWithWebpAnd2x(null, 412),
                'mobile' => ConfigHelper::thumbWithWebpAnd2x(420, null),
            ]
        ]),
        FileScenario::StepsCardImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('courses'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnails' => [
                'desktop' => ConfigHelper::thumbWithWebpAnd2x(293),
                'mobile' => ConfigHelper::thumbWithWebpAnd2x(293),
            ]
        ]),
        FileScenario::AvatarImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('courses'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ]),
        FileScenario::OfficeLifeImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('courses'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(330, 670)
        ]),
        FileScenario::ProjectsImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('courses'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x(410, 65)
        ]),
        FileScenario::VideoReview => [
            'storage' => ConfigHelper::fileStorage('vacancies'),
            'validator' => [
                'maxSize' => 50 * 1024 * 1024,
                'checkExtensionByMimeType' => true,
                'extensions' => ['mp4']
            ]
        ],
        FileScenario::VideoPreviewImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('vacancies'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ]),
        FileScenario::WillLearnImage => TagerImageScenario::wrap([
            'storage' => ConfigHelper::fileStorage('single-course'),
            'validator' => ConfigHelper::imageValidator(),
            'thumbnail' => ConfigHelper::thumbWithWebpAnd2x()
        ]),
    ]
];
