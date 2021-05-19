<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;
use OZiTAG\Tager\Backend\Fields\Enums\RepeaterView;

class HomeTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Main page', [
            new GroupField('Hero Block', [
                'heroId' => new StringField('id'),
                'heroTitle' => new StringField('Title'),
                'heroText' => new TextField('Text'),
                'heroImage' => new ImageField('Image', FileScenario::HomeHeroImage),
                'heroMobileImage' => new ImageField('Mobile Image', FileScenario::HomeHeroImageMobile),
            ]),
            new GroupField('Works', [
                'worksId' => new StringField('id'),
                'worksTitle' => new StringField('Title'),
                'worksItems' => new RepeaterField('Items', [
                    'image' => new ImageField('Image', FileScenario::HomeWorksItems),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'logos' => new GalleryField('Gallery'),
                ])
            ]),
            new GroupField('Services Top', [
                'servicesId' => new StringField('id'),
                'servicesTitle' => new StringField('Title'),
                'servicesItems' => new RepeaterField('Services', [
                    'image' => new ImageField('Image', FileScenario::HomeServicesItems),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Text'),
                    'linkUrl' => new StringField('Button URL'),
                    'scrollTo' => new StringField('Scroll id Element'),
                    'isNewTab' => new TrueFalseField('Is new Tab?'),
                ], RepeaterView::Block)
            ]),
            new GroupField('Services Bottom', [
                'servicesBottomId' => new StringField('id'),
                'servicesBottomTitle' => new StringField('Title'),
                'servicesBottomItems' => new RepeaterField('Services', [
                    'image' => new ImageField('Image', FileScenario::HomeServicesItems),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Text'),
                    'linkUrl' => new StringField('Button URL'),
                    'scrollTo' => new StringField('Scroll id Element'),
                    'isNewTab' => new TrueFalseField('Is new tab??'),
                ], RepeaterView::Block)
            ]),
            new GroupField('Technologies', [
                'technologiesId' => new StringField('id'),
                'technologiesTitle' => new StringField('Title'),
                'technologiesText' => new TextField('Text'),
                'technologiesLogos' => new GalleryField('Gallery', FileScenario::HomeTechnologiesGallery),
                'technologiesImage' => new ImageField('Image', FileScenario::HomeTechnologiesImage),
                'technologiesMobileImage' => new ImageField('Mobile Image', FileScenario::HomeTechnologiesImageMobile),
                'technologiesTextAdditional' => new HtmlField('Text - Additional'),
                'technologiesButtonFirstLabel' => new StringField('Button 1 - Text'),
                'technologiesButtonFirstUrl' => new StringField('Button 1 - URL'),
                'technologiesButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'technologiesButtonSecondLabel' => new StringField('Button 2 - Text'),
                'technologiesButtonSecondUrl' => new StringField('Button 2 - URL'),
                'technologiesButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
            ]),
            new GroupField('Platform', [
                'platformId' => new StringField('id'),
                'platformTitle' => new StringField('Title'),
                'platformText' => new TextField('Text'),
                'platformLogos' => new GalleryField('Gallery'),
                'platformAdditional' => new HtmlField('Text - Additional'),
                'platformButtonFirstLabel' => new StringField('Button 1 - Text'),
                'platformButtonFirstUrl' => new StringField('Button 1 - URL'),
                'platformButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'platformButtonSecondLabel' => new StringField('Button 2 - Text'),
                'platformButtonSecondUrl' => new StringField('Button 2 - URL'),
                'platformButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
            ]),
            new GroupField('Team', [
                'teamId' => new StringField('id'),
                'teamItems' => new RepeaterField('Items', [
                    'image' => new ImageField('Image', FileScenario::HomeTeamImage),
                    'width' => new StringField('Image width'),
                    'leftX' => new StringField('Left Indent'),
                    'topY' => new StringField('Top indent'),
                ]),
                'teamButtonLabel' => new StringField('Button Text'),
                'teamButtonUrl' => new StringField('Button URL'),
                'teamButtonIsNewTab' => new TrueFalseField('Button - Is New Tab?'),
            ]),
            new GroupField('Clients', [
                'clientsId' => new StringField('id'),
                'clientsTitle' => new StringField('Title'),
                'clientsFirstGallery' => new GalleryField('Gallery 1'),
                'clientsSecondGallery' => new GalleryField('Gallery 2'),
            ]),
            new GroupField('Form', [
                'formTitle' => new StringField('Title'),
            ]),
        ]);
    }
}
