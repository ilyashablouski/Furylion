<?php

namespace App\Tager\Templates;

use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class HomeTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Главная страница', [
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
                    'tags' => new StringField('Tags')
                ])
            ]),
            new GroupField('Services Top', [
                'servicesTitle' => new StringField('Title'),
                'servicesItems' => new RepeaterField('Services', [
                    'image' => new ImageField('Image'),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Label'),
                    'linkUrl' => new StringField('Button URL'),
                ])
            ]),
            new GroupField('Services Bottom', [
                'servicesBottomTitle' => new StringField('Title'),
                'servicesBottomItems' => new RepeaterField('Services', [
                    'image' => new ImageField('Image'),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Label'),
                    'linkUrl' => new StringField('Button URL'),
                ])
            ]),
            new GroupField('Technologies', [
                'technologiesTitle' => new StringField('Title'),
                'technologiesText' => new TextField('Text'),
                'technologiesLogos' => new GalleryField('Gallery'),
                'technologiesTextAdditional' => new HtmlField('Text - Additional'),
                'technologiesButtonFirstLabel' => new StringField('Button 1 - Label'),
                'technologiesButtonSecondLabel' => new StringField('Button 2 - Label'),
            ]),
            new GroupField('Platform', [
                'platformTitle' => new StringField('Title'),
                'platformText' => new TextField('Text'),
                'platformLogos' => new GalleryField('Gallery'),
                'platformAdditional' => new HtmlField('Text - Additional'),
                'platformButtonFirstLabel' => new StringField('Button 1 - Label'),
                'platformButtonSecondLabel' => new StringField('Button 2 - Label'),
            ]),
            new GroupField('Team', [
                'teamGallery' => new GalleryField('Photos'),
                'teamMobileImage' => new ImageField('Mobile Image'),
                'teamButtonLabel' => new StringField('Button Label'),
                'teamButtonUrl' => new StringField('Button URL'),
            ]),
            new GroupField('Clients', [
                'clientsTitle' => new GalleryField('Title'),
                'clientsFirstGallery' => new ImageField('Gallery 1'),
                'clientsSecondGallery' => new StringField('Gallery 2'),
            ])
        ]);
    }
}
