<?php

namespace App\Tager\Templates;

use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class HomeTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Main page', [
            new GroupField('Hero Block', [
                'heroTitle' => new StringField('Title'),
                'heroText' => new TextField('Text'),
                'heroImage' => new ImageField('Image'),
                'heroMobileImage' => new ImageField('Mobile Image'),
            ]),
            new GroupField('Works', [
                'worksTitle' => new StringField('Title'),
                'worksItems' => new RepeaterField('Items', [
                    'image' => new ImageField('Image'),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'logos' => new GalleryField('Gallery'),
                ])
            ]),
            new GroupField('Services Top', [
                'servicesTitle' => new StringField('Title'),
                'servicesItems' => new RepeaterField('Services', [
                    'image' => new ImageField('Image'),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Text'),
                    'linkUrl' => new StringField('Button URL'),
                ])
            ]),
            new GroupField('Services Bottom', [
                'servicesBottomTitle' => new StringField('Title'),
                'servicesBottomItems' => new RepeaterField('Services', [
                    'image' => new ImageField('Image'),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Text'),
                    'linkUrl' => new StringField('Button URL'),
                ])
            ]),
            new GroupField('Technologies', [
                'technologiesTitle' => new StringField('Title'),
                'technologiesText' => new TextField('Text'),
                'technologiesLogos' => new GalleryField('Gallery'),
                'technologiesImage' => new ImageField('Image'),
                'technologiesMobileImage' => new ImageField('Mobile Image'),
                'technologiesTextAdditional' => new HtmlField('Text - Additional'),
                'technologiesButtonFirstLabel' => new StringField('Button 1 - Text'),
                'technologiesButtonFirstUrl' => new StringField('Button 1 - URL'),
                'technologiesButtonSecondLabel' => new StringField('Button 2 - Text'),
                'technologiesButtonSecondUrl' => new StringField('Button 2 - URL'),
            ]),
            new GroupField('Platform', [
                'platformTitle' => new StringField('Title'),
                'platformText' => new TextField('Text'),
                'platformLogos' => new GalleryField('Gallery'),
                'platformAdditional' => new HtmlField('Text - Additional'),
                'platformButtonFirstLabel' => new StringField('Button 1 - Text'),
                'platformButtonFirstUrl' => new StringField('Button 1 - URL'),
                'platformButtonSecondLabel' => new StringField('Button 2 - Text'),
                'platformButtonSecondUrl' => new StringField('Button 2 - URL'),
            ]),
            new GroupField('Team', [
                'teamItems' => new RepeaterField('Items', [
                    'image' => new ImageField('Image'),
                    'width' => new StringField('Image width'),
                    'leftX' => new StringField('Left Indent'),
                    'topY' => new StringField('Top indent'),
                    'isShadow' => new TrueFalseField('Is shadow ?'),
                ]),
                'teamButtonLabel' => new StringField('Button Text'),
                'teamButtonUrl' => new StringField('Button URL'),
            ]),
            new GroupField('Clients', [
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
