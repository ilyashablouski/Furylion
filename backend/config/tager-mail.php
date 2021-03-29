<?php

use App\Enums\EmailTemplate;

return [
    'debug' => env('TAGER_MAIL_DEBUG'),
    'templates' => [
        EmailTemplate::Contact => [
            'name' => 'Contact form',
            'templateParams' => [
                'name' => 'Name',
                'email' => 'E-Mail',
                'message' => 'Message'
            ],
            'subject' => 'New contact form request',
            'body' => '<p><b>Name:</b> {{name}}</p><p><b>E-mail:</b> {{email}}</p><p><b>Message:</b> {{message}}</p>',
            'recipients' => [
                'v.ozierski@ozitag.com'
            ],
        ],
        EmailTemplate::Feedback => [
            'name' => 'Home feedback form',
            'templateParams' => [
                'name' => 'Name',
                'company' => 'Company',
                'email' => 'E-Mail',
                'message' => 'Message',
            ],
            'subject' => 'New feedback',
            'body' => '<p><b>Name:</b> {{name}}</p><p><b>Company:</b> {{company}}</p><p><b>E-Mail</b> {{email}}</p><p><b>Message</b> {{message}}</p>',
            'recipients' => [
                'themyconant@yandex.ru'
            ],
        ],
    ]
];
