<?php

namespace App\Tager\Templates;

use OZiTAG\Tager\Backend\Fields\Fields\ButtonField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class VacanciesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Вакансии', [
            new GroupField('Team Life', [
                'teamLifeTitle' => new StringField('Название'),
                'teamLifeDescription' => new HtmlField('Описание'),
                'teamLifeButton' => new ButtonField('Кнопка'),
            ]),
        ]);
    }
}
