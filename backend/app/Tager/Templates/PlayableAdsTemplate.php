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
                'advantagesList' => new HtmlField('Advantages List'),
            ]),

            new GroupField('Click-through rate', [
                'rateMainTitle' => new StringField('Main Title'),
                'rateText' => new TextField('Text'),
                'rateTitle1' => new TextField('Title - 1'),
                'advantagesText3' => new TextField('Text - 3'),
                'advantagesList' => new HtmlField('Advantages List'),
            ]),

            new GroupField('CPI', [
                'cpiTitle' => new StringField('Title'),
                'cpiText' => new TextField('Text'),
                'cpiButtonLabel' => new StringField('Button - Text'),
                'cpiButtonUrl' => new StringField('Button - URL'),
            ]),

            new GroupField('Reengagement', [
                'reengagementTitle' => new StringField('Title'),
                'reengagementText1' => new TextField('Text - 1'),
                'reengagementText2' => new TextField('Text - 2'),
                'reengagementText3' => new TextField('Text - 3'),
                'reengagementButtonLabel' => new StringField('Button - Text'),
                'reengagementButtonUrl' => new StringField('Button - URL'),
            ]),

            new GroupField('Framework', [
                'frameworkTitle' => new StringField('Title'),
                'frameworkText' => new TextField('Text'),
                'frameworkItems' => new RepeaterField('Items', [
                    'title' => new StringField('Title'),
                    'topText' => new StringField('Top text'),
                    'bottomText' => new StringField('Bottom text'),
                ]),
                'frameworkButtonLabel' => new StringField('Button - Text'),
                'frameworkButtonUrl' => new StringField('Button - URL'),
            ]),
        ]);
    }
}
