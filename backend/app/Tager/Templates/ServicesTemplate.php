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


class ServicesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Услуги', [
            new GroupField('Head', [
                'headText' => new StringField('Text'),
            ]),

            new GroupField('Art 1', [
                'firstArtTitle' => new StringField('Title'),
                'firstArtText1' => new TextField('Text - 1'),
                'firstArtText2' => new TextField('Text - 2'),
                'firstArtText3' => new TextField('Text - 3'),
                'firstArtTextAdditional' => new HtmlField('Additional Text'),
                'firstArtButtonFirstLabel' => new StringField('Button 1 - Text'),
                'firstArtButtonFirstUrl' => new StringField('Button 1 - URL'),
                'firstArtButtonSecondLabel' => new StringField('Button 2 - Text'),
                'firstArtButtonSecondUrl' => new StringField('Button 2 - URL'),
                'firstArtImages' => new GalleryField('Slider Images'),
            ]),

            new GroupField('Art 2', [
                'secondArtTitle' => new StringField('Title'),
                'secondArtText1' => new TextField('Text - 1'),
                'secondArtText2' => new TextField('Text - 2'),
                'secondArtText3' => new TextField('Text - 3'),
                'secondArtTextAdditional' => new HtmlField('Additional Text'),
                'secondArtButtonFirstLabel' => new StringField('Button 1 - Text'),
                'secondArtButtonFirstUrl' => new StringField('Button 1 - URL'),
                'secondArtButtonSecondLabel' => new StringField('Button 2 - Text'),
                'secondArtButtonSecondUrl' => new StringField('Button 2 - URL'),
                'secondArtImages' => new GalleryField('Slider Images'),
            ]),

            new GroupField('Production', [
                'productionTitle' => new StringField('Title'),
                'productionText1' => new TextField('Text - 1'),
                'productionText2' => new TextField('Text - 2'),
                'productionMediaTop' => new RepeaterField('Production Media Top', [
                    'image' => new ImageField('Image'),
                    'videoId' => new StringField('Video - ID'),
                ]),
                'productionMediaBottom' => new RepeaterField('Production Media Bottom', [
                    'image' => new ImageField('Image'),
                    'videoId' => new StringField('Video - ID'),
                ]),
                'productionButtonFirstLabel' => new StringField('Button 1 - Text'),
                'productionButtonFirstUrl' => new StringField('Button 1 - URL'),
                'productionButtonSecondLabel' => new StringField('Button 2 - Text'),
                'productionButtonSecondUrl' => new StringField('Button 2 - URL'),
            ]),

            new GroupField('Porting', [
                'portingTitle' => new StringField('Title'),
                'portingText1' => new TextField('Text - 1'),
                'portingText2' => new TextField('Text - 2'),
                'portingText3' => new TextField('Text - 2'),
                'portingButtonFirstLabel' => new StringField('Button 1 - Text'),
                'portingButtonFirstUrl' => new StringField('Button 1 - URL'),
                'portingButtonSecondLabel' => new StringField('Button 2 - Text'),
                'portingButtonSecondUrl' => new StringField('Button 2 - URL'),
                'portingImage' => new ImageField('Image'),
            ]),

            new GroupField('Development', [
                'developmentTitle' => new StringField('Title'),
                'developmentItems' => new RepeaterField('Items', [
                    'image' => new ImageField('Image'),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'logos' => new RepeaterField('Logo Items', [
                        'image' =>new ImageField('Image'),
                        'linkUrl' => new StringField('URL'),
                    ]),
                ]),
            ]),


            new GroupField('OutStaffing', [
                'outStaffingTitle' => new StringField('Title'),
                'outStaffingText1' => new TextField('Text - 1'),
                'outStaffingText2' => new TextField('Text - 2'),
                'outStaffingItems' => new RepeaterField('Items', [
                    'title' => new StringField('Title'),
                    'tags' => new StringField('Tags'),
                ]),
            ]),

            new GroupField('Co-development', [
                'coDevelopmentTitle' => new StringField('Title'),
                'coDevelopmentText1' => new TextField('Text - 1'),
                'coDevelopmentText2' => new TextField('Text - 2'),
                'coDevelopmentText3' => new TextField('Text - 3'),
                'leftLogo' => new ImageField('Left logo'),
                'rightLogo' => new ImageField('Right logo'),
                'coDevelopmentButtonLabel' => new StringField('Button - Text'),
                'coDevelopmentButtonUrl' => new StringField('Button - URL'),
            ]),
            new GroupField('Ads', [
                'adsTitle' => new StringField('Title'),
                'adsText1' => new TextField('Text - 1'),
                'adsText2' => new TextField('Text - 2'),
                'adsText3' => new TextField('Text - 3'),
                'adsImages' => new GalleryField('Slider Images'),
                'adsButtonLabel' => new StringField('Button - Text'),
                'adsButtonUrl' => new StringField('Button - URL'),
            ]),
        ]);
    }
}
