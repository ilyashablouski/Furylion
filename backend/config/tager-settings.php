<?php

use App\Enums\SettingKey;
use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Enums\FieldType;
use OZiTAG\Tager\Backend\Fields\Enums\RepeaterView;
use OZiTAG\Tager\Backend\Fields\Fields\SelectField;

return [
    'Open vacancy' => [
        SettingKey::OpenVacancyTitle => [
            'type' => FieldType::String,
            'label' => 'Title'
        ],
        SettingKey::OpenVacancyImage => [
            'type' => FieldType::Image,
            'label' => 'Image',
            'meta' => [
                'scenario' => FileScenario::VacancyImage
            ]
        ],
        SettingKey::OpenVacancyDescription => [
            'type' => FieldType::Text,
            'label' => 'Description'
        ],
    ],
    'Single Vacancy' => [
        SettingKey::FirstHeaderTitle => [
            'type' => FieldType::String,
            'label' => 'First title'
        ],
        SettingKey::SecondHeaderTitle => [
            'type' => FieldType::String,
            'label' => 'Second title'
        ],
        SettingKey::BenefitsTitle => [
            'type' => FieldType::String,
            'label' => 'Benefits'
        ],
    ],
    'Footer' => [
        SettingKey::FormTitle => [
            'type' => FieldType::String,
            'label' => 'Form Title'
        ],
        SettingKey::FormVacanciesTitle => [
            'type' => FieldType::String,
            'label' => 'Form Vacancies Title'
        ],
        SettingKey::FooterOffices => [
            'type' => FieldType::Repeater,
            'label' => 'Offices',
            'fields' => [
                'title' => [
                    'label' => 'Title',
                    'type' => FieldType::String,
                ],
                'text' => [
                    'label' => 'Address',
                    'type' => FieldType::Text,
                ],
                'phone' => [
                    'label' => 'Phone',
                    'type' => FieldType::String,
                ],
                'email' => [
                    'label' => 'E-Mail',
                    'type' => FieldType::String,
                ],
            ],
        ],
        SettingKey::InstagramUrl => [
            'type' => FieldType::Url,
            'label' => 'Instagram URL',
            'value' => 'https://instagram.com'
        ],
        SettingKey::VkontakeUrl => [
            'type' => FieldType::Url,
            'label' => 'VKontakte URL',
            'value' => 'https://instagram.com'
        ],
        SettingKey::AppstoreUrl => [
            'type' => FieldType::Url,
            'label' => 'App Store URL',
            'value' => 'https://instagram.com'
        ],
        SettingKey::GoogleplayUrl => [
            'type' => FieldType::Url,
            'label' => 'Google Play URL',
            'value' => 'https://instagram.com'
        ],
    ],
    'Instagram' => [
        SettingKey::Instagram => [
            'type' => FieldType::Repeater,
            'label' => 'Previews',
            'viewMode' => RepeaterView::Table,
            'fields' => [
                'type' => new SelectField('Type', [
                    'VIDEO' => 'Video',
                    'IMAGE' => 'Image',
                    'CAROUSEL_ALBUM' => 'Carousel Album',
                ]),
                'preview' => [
                    'label' => 'Preview',
                    'type' => FieldType::Image,
                ],
                'url' => [
                    'label' => 'Url',
                    'type' => FieldType::Url,
                ],
            ],
        ],
    ],
    '404' => [
        SettingKey::NotFoundText => [
            'type' => FieldType::Text,
            'label' => 'Text'
        ],

        SettingKey::NotFoundButtonLabel => [
            'type' => FieldType::String,
            'label' => 'Button Label'
        ],

        SettingKey::NotFoundButtonUrl => [
            'type' => FieldType::String,
            'label' => 'Button URL'
        ],
    ],
];
