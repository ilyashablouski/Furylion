<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Pages\Structures\Template;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;


class ServicesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Services', [
            new GroupField('Head', [
                'headId' => new StringField('id'),
                'headText' => new StringField('Text'),
            ]),

            new GroupField('Art 1', [
                'firstArtId' => new StringField('id'),
                'firstArtTitle' => new StringField('Title'),
                'firstArtTitle1' => new StringField('Title - 1'),
                'firstArtText1' => new TextField('Text - 1'),
                'firstArtTitle2' => new StringField('Title - 2'),
                'firstArtText2' => new TextField('Text - 2'),
                'firstArtTitle3' => new StringField('Title - 3'),
                'firstArtText3' => new TextField('Text - 3'),
                'firstArtTitleAdditional' => new StringField('Additional Title'),
                'firstArtTextAdditional' => new HtmlField('Additional Text'),
                'firstArtButtonFirstLabel' => new StringField('Button 1 - Text'),
                'firstArtButtonFirstUrl' => new StringField('Button 1 - URL'),
                'firstArtButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'firstArtButtonSecondLabel' => new StringField('Button 2 - Text'),
                'firstArtButtonSecondUrl' => new StringField('Button 2 - URL'),
                'firstArtButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
                'firstArtImages' =>  new RepeaterField('Slider Images', [
                 'desktop' => new ImageField('Desktop Image', FileScenario::ServicesArtImages),
                 'mobile' => new ImageField('Mobile Image', FileScenario::ServicesArtImages),
             ]),
            ]),

            new GroupField('Art 2', [
                'secondArtId' => new StringField('id'),
                'secondArtTitle' => new StringField('Title'),
                'secondArtTitle1' => new StringField('Title - 1'),
                'secondArtText1' => new TextField('Text - 1'),
                'secondArtTitle2' => new StringField('Title - 2'),
                'secondArtText2' => new TextField('Text - 2'),
                'secondArtTitle3' => new StringField('Title - 3'),
                'secondArtText3' => new TextField('Text - 3'),
                'secondArtTitleAdditional' => new StringField('Additional Title'),
                'secondArtTextAdditional' => new HtmlField('Additional Text'),
                'secondArtButtonFirstLabel' => new StringField('Button 1 - Text'),
                'secondArtButtonFirstUrl' => new StringField('Button 1 - URL'),
                'secondArtButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'secondArtButtonSecondLabel' => new StringField('Button 2 - Text'),
                'secondArtButtonSecondUrl' => new StringField('Button 2 - URL'),
                'secondArtButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
                'secondArtImages' =>  new RepeaterField('Slider Images', [
                     'desktop' => new ImageField('Desktop Image', FileScenario::ServicesArtImages),
                     'mobile' => new ImageField('Mobile Image', FileScenario::ServicesArtImages),
                 ]),
            ]),

            new GroupField('Production', [
                'productionId' => new StringField('id'),
                'productionTitle' => new StringField('Title'),
                'productionText1' => new TextField('Text - 1'),
                'productionText2' => new TextField('Text - 2'),
                'productionMediaTop' => new RepeaterField('Production Media Top', [
                    'image' => new ImageField('Image', FileScenario::ServicesProductionMedia),
                    'videoId' => new StringField('Video - ID'),
                ]),
                'productionMediaBottom' => new RepeaterField('Production Media Bottom', [
                    'image' => new ImageField('Image', FileScenario::ServicesProductionMedia),
                    'videoId' => new StringField('Video - ID'),
                ]),
                'productionButtonFirstLabel' => new StringField('Button 1 - Text'),
                'productionButtonFirstUrl' => new StringField('Button 1 - URL'),
                'productionButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'productionButtonSecondLabel' => new StringField('Button 2 - Text'),
                'productionButtonSecondUrl' => new StringField('Button 2 - URL'),
                'productionButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
            ]),

            new GroupField('Porting', [
                'portingId' => new StringField('id'),
                'portingTitle' => new StringField('Title'),
                'portingText1' => new TextField('Text - 1'),
                'portingText2' => new TextField('Text - 2'),
                'portingText3' => new TextField('Text - 2'),
                'portingButtonFirstLabel' => new StringField('Button 1 - Text'),
                'portingButtonFirstUrl' => new StringField('Button 1 - URL'),
                'portingButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'portingButtonSecondLabel' => new StringField('Button 2 - Text'),
                'portingButtonSecondUrl' => new StringField('Button 2 - URL'),
                'portingButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
                'portingImage' => new ImageField('Image', FileScenario::ServicesPorting),
            ]),

            new GroupField('Development', [
                'developmentId' => new StringField('id'),
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
                'outStaffingId' => new StringField('id'),
                'outStaffingTitle' => new StringField('Title'),
                'outStaffingText1' => new TextField('Text - 1'),
                'outStaffingText2' => new TextField('Text - 2'),
                'outStaffingItems' => new RepeaterField('Items', [
                    'title' => new StringField('Title'),
                    'tags' => new StringField('Tags'),
                ]),
            ]),

            new GroupField('Co-development', [
                'coDevelopmentId' => new StringField('id'),
                'coDevelopmentTitle' => new StringField('Title'),
                'coDevelopmentText1' => new TextField('Text - 1'),
                'coDevelopmentText2' => new TextField('Text - 2'),
                'coDevelopmentText3' => new TextField('Text - 3'),
                'leftLogo' => new ImageField('Left logo', FileScenario::ServicesCoDevelopmentLogos),
                'rightLogo' => new ImageField('Right logo', FileScenario::ServicesCoDevelopmentLogos),
                'coDevelopmentButtonLabel' => new StringField('Button - Text'),
                'coDevelopmentButtonUrl' => new StringField('Button - URL'),
                'coDevelopmentButtonIsNewTab' => new TrueFalseField('Button - Is new tab?'),
            ]),
            new GroupField('Ads', [
                'adsId' => new StringField('id'),
                'adsTitle' => new StringField('Title'),
                'adsText1' => new TextField('Text - 1'),
                'adsText2' => new TextField('Text - 2'),
                'adsText3' => new TextField('Text - 3'),
                'adsImages' => new GalleryField('Slider Images', FileScenario::ServicesAds),
                'adsButtonLabel' => new StringField('Button - Text'),
                'adsButtonUrl' => new StringField('Button - URL'),
                'adsButtonIsNewTab' => new TrueFalseField('Button - Is new tab?'),
            ]),
        ]);
    }
}
