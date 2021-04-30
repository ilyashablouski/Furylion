<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Fields\ButtonField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class VacanciesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Вакансии', [
            'contactsMenuLink' => new RepeaterField('Contacts Menu Link', [
                'text' => new StringField('Text'),
                'action' => new SelectField('Action', [
                    'scroll' => 'Scroll',
                ]),
                'link' => new UrlField('Target'),
            ]),

            new GroupField('Head Image', [
                'headImage' => new ImageField('Изображение', FileScenario::HeadImage),
            ]),
            new GroupField('Team Life', [
                'teamLifeTitle' => new StringField('Название'),
                'teamLifeDescription' => new HtmlField('Описание'),
                'teamLifeButton' => new ButtonField('Кнопка'),
            ]),
            new GroupField('Form', [
                'formTitle' => new StringField('Title'),
            ]),
        ]);
    }
}
