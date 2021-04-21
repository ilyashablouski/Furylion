<?php

namespace App\Tager\Templates;

use OZiTAG\Tager\Backend\Pages\Structures\Template;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;

class PlayableAdsTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Игровые рекламы', [
            new GroupField('Head', [
                'headText' => new StringField('Text'),
                'headImages' => new GalleryField('Slider Images'),
            ]),

            new GroupField('Advantages', [
                'advantagesTitle' => new StringField('Title'),
                'advantagesText1' => new TextField('Text - 1'),
                'advantagesText2' => new TextField('Text - 2'),
                'advantagesText3' => new TextField('Text - 3'),
                'advantagesList' => new HtmlField('Additional List'),
            ]),
        ]);
    }
}
