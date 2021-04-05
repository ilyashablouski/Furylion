<?php

use \OZiTAG\Tager\Backend\Fields\Enums\FieldType;

return [
    'Footer' => [
        'FORM_TITLE' => [
            'type' => FieldType::String,
            'label' => 'Form Title'
        ],
        'FORM_VACANCIES_TITLE' => [
            'type' => FieldType::String,
            'label' => 'Form Vacancies Title'
        ],
        'FOOTER_OFFICES' => [
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
        'INSTAGRAM_URL' => [
            'type' => FieldType::Url,
            'label' => 'Instagram URL',
            'value' => 'https://instagram.com'
        ],
        'VKONTAKTE_URL' => [
            'type' => FieldType::Url,
            'label' => 'VKontakte URL',
            'value' => 'https://instagram.com'
        ],
        'APPSTORE_URL' => [
            'type' => FieldType::Url,
            'label' => 'App Store URL',
            'value' => 'https://instagram.com'
        ],
        'GOOGLEPLAY_URL' => [
            'type' => FieldType::Url,
            'label' => 'Google Play URL',
            'value' => 'https://instagram.com'
        ],
    ],
];
