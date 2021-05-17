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
use OZiTAG\Tager\Backend\Fields\Fields\SelectField;
use OZiTAG\Tager\Backend\Fields\Fields\UrlField;

class PlayableAdsTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Playable Ads', [
            new GroupField('Head', [
                'headAdsText' => new StringField('Text'),
                'headAdsItemsTop' => new RepeaterField('Slider Items Top', [
                    'image' => new ImageField('Image'),
                    'linkUrl' => new StringField('URL'),
                ]),
                'headAdsItemsBottom' => new RepeaterField('Slider Items Bottom', [
                'image' => new ImageField('Image'),
                'linkUrl' => new StringField('URL'),
                ]),
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
                'rateLeftTitle' => new StringField('Left Title'),
                'rateLeftText' => new TextField('Left Text'),
                'rateRightTitle' => new StringField('Right Title'),
                'rateRightText' => new TextField('Right Text'),
                'rateButtonLabel' => new StringField('Button - Text'),
                'rateButtonUrl' => new StringField('Button - URL'),
            ]),

            new GroupField('CPI', [
                'cpiTitle' => new StringField('Title'),
                'cpiImage' => new ImageField('Image'),
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

            new GroupField('Networks', [
                'networksTitle' => new StringField('Title'),
                'networksFirstGallery' => new GalleryField('Gallery 1'),
                'networksSecondGallery' => new GalleryField('Gallery 2'),
            ]),

            new GroupField('Editor', [
                'editorTitle' => new StringField('Title'),
                'editorText' => new TextField('Text'),
                'editorImage' => new ImageField('Image'),
                'editorButtonLabel' => new StringField('Button - Text'),
                'editorButtonUrl' => new StringField('Button - URL')
            ]),

            new GroupField('Do you want', [
                'doYouWantTitle' => new StringField('Title'),
                'doYouWantFirstGallery' => new RepeaterField('Gallery 1', [
                    'image' => new ImageField('Image'),
                    'action' => new SelectField('Action', [
                        'scroll' => 'Scroll',
                        'openPage' => 'Open page'
                    ]),
                    'link' => new UrlField('Target'),
                ]),
                'doYouWantSecondGallery' => new RepeaterField('Gallery 2', [
                    'image' => new ImageField('Image'),
                    'action' => new SelectField('Action', [
                        'scroll' => 'Scroll',
                        'openPage' => 'Open page'
                    ]),
                    'link' => new UrlField('Target'),
                ]),
                'doYouWantThirdGallery' => new RepeaterField('Gallery 3', [
                    'image' => new ImageField('Image'),
                    'action' => new SelectField('Action', [
                        'scroll' => 'Scroll',
                        'openPage' => 'Open page'
                    ]),
                    'link' => new UrlField('Target'),
                ]),
            ]),

            new GroupField('Form', [
                'formTitle' => new StringField('Title'),
                'formProfileTitle' => new StringField('Profile Title'),
                'formProfileImage' => new ImageField('Profile Image'),
                'formProfileLabel' => new StringField('Profile Label'),
            ]),
        ]);
    }
}
