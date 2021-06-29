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
                'v.ozierski@ozitag.com'
            ],
        ],
        EmailTemplate::Cv => [
            'name' => 'Cv form',
            'templateParams' => [
                'name' => 'Name',
                'phone' => 'Phone',
                'email' => 'E-Mail',
                'message' => 'Message',
                'vacancyName' => 'Vacancy Name',
                'vacancyUrl' => 'Vacancy Url'
            ],
            'subject' => 'New Cv',
            'body' => '<p><b>Name:</b> {{name}}</p><p><b>Phone:</b> {{phone}}</p><p><b>E-Mail:</b> {{email}}</p><p><b>Message:</b> {{message}}</p><p><b>Vacancy:</b><a href="{{vacancyUrl}}" target="_blank"> {{vacancyName}}</a></p>',
            'recipients' => [
                'v.ozierski@ozitag.com'
            ],
        ],
        EmailTemplate::CvWithoutVacancy => [
            'name' => 'Cv form without vacancy',
            'templateParams' => [
                'name' => 'Name',
                'phone' => 'Phone',
                'email' => 'E-Mail',
                'message' => 'Message',
            ],
            'subject' => 'New Cv without vacancy',
            'body' => '<p><b>Name:</b> {{name}}</p><p><b>Phone:</b> {{phone}}</p><p><b>E-Mail:</b> {{email}}</p><p><b>Message:</b> {{message}}</p>',
            'recipients' => [
                'v.ozierski@ozitag.com'
            ],
        ],
    ]
];
