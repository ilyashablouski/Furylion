<?php

use App\Enums\SettingKey;
use \OZiTAG\Tager\Backend\Fields\Enums\FieldType;

return [
    'Открытая вакансия' => [
        SettingKey::OpenVacancyTitle => [
            'type' => FieldType::String,
            'label' => 'Название'
        ],
        SettingKey::OpenVacancyImage => [
            'type' => FieldType::Image,
            'label' => 'Изображение'
        ],
        SettingKey::OpenVacancyDescription => [
            'type' => FieldType::Text,
            'label' => 'Описание'
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
];
