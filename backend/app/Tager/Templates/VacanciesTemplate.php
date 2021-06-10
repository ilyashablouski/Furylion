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
        parent::__construct('Vacancies', [
            new GroupField('Head Image', [
                'headId' => new StringField('id'),
                'headImage' => new ImageField('Image', FileScenario::HeadImage),
            ]),
            new GroupField('Team Life', [
                'teamLifeId' => new StringField('id'),
                'teamLifeTitle' => new StringField('Title'),
                'teamLifeDescription' => new HtmlField('Text - Description'),
                'teamLifeButton' => new ButtonField('Button'),
            ]),
            new GroupField('Form', [
                'formTitle' => new StringField('Title'),
            ]),
            new GroupField('Job Card', [
                'buttonTitle' => new StringField('Button Title'),
            ]),
        ]);
    }
}
