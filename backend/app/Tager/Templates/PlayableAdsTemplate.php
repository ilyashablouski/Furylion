<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Fields\FileField;
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
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;

class PlayableAdsTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Playable Ads', [
            new GroupField('Head', [
                'headAdsId' => new StringField('id'),
                'headAdsText' => new StringField('Text'),
                'headAdsItemsTop' => new RepeaterField('Slider Items Top', [
                    'image' => new ImageField('Image', FileScenario::PlayableAdsHead),
                    'file' => new FileField('File', FileScenario::PlayableGame),
                    'titleGame' => new StringField('Title Game'),
                    'descriptionGame' => new StringField('Description Game'),
                ]),
                'headAdsItemsBottom' => new RepeaterField('Slider Items Bottom', [
                    'image' => new ImageField('Image', FileScenario::PlayableAdsHead),
                    'file' => new FileField('File', FileScenario::PlayableGame),
                    'titleGame' => new StringField('Title Game'),
                    'descriptionGame' => new StringField('Description Game'),
                ]),
            ]),

            new GroupField('Advantages', [
                'advantagesId' => new StringField('id'),
                'advantagesTitle' => new StringField('Title'),
                'advantagesText1' => new TextField('Text - 1'),
                'advantagesText2' => new TextField('Text - 2'),
                'advantagesText3' => new TextField('Text - 3'),
                'advantagesList' => new HtmlField('Advantages List'),
            ]),

            new GroupField('Click-through rate', [
                'rateMainId' => new StringField('id'),
                'rateMainTitle' => new StringField('Main Title'),
                'rateText' => new TextField('Text'),
                'rateLeftTitle' => new StringField('Left Title'),
                'rateLeftText' => new TextField('Left Text'),
                'rateRightTitle' => new StringField('Right Title'),
                'rateRightText' => new TextField('Right Text'),
                'rateButtonLabel' => new StringField('Button - Text'),
                'rateButtonUrl' => new StringField('Button - URL'),
                'rateButtonIsNewTab' => new TrueFalseField('Button - is new tab?'),
            ]),

            new GroupField('CPI', [
                'cpiId' => new StringField('id'),
                'cpiTitle' => new StringField('Title'),
                'cpiImage' => new ImageField('Image'),
                'cpiButtonLabel' => new StringField('Button - Text'),
                'cpiButtonUrl' => new StringField('Button - URL'),
                'cpiButtonIsNewTab' => new TrueFalseField('Button - is new tab?'),
            ]),

            new GroupField('Reengagement', [
                'reengagementId' => new StringField('id'),
                'reengagementTitle' => new StringField('Title'),
                'reengagementText1' => new TextField('Text - 1'),
                'reengagementText2' => new TextField('Text - 2'),
                'reengagementText3' => new TextField('Text - 3'),
                'reengagementButtonLabel' => new StringField('Button - Text'),
                'reengagementButtonUrl' => new StringField('Button - URL'),
                'reengagementButtonIsNewTab' => new TrueFalseField('Button - is new tab?'),
            ]),

            new GroupField('Framework', [
                'frameworkId' => new StringField('id'),
                'frameworkTitle' => new StringField('Title'),
                'frameworkText' => new TextField('Text'),
                'frameworkItems' => new RepeaterField('Items', [
                    'title' => new StringField('Title'),
                    'topText' => new StringField('Top text'),
                    'bottomText' => new StringField('Bottom text'),
                ]),
                'frameworkButtonLabel' => new StringField('Button - Text'),
                'frameworkButtonUrl' => new StringField('Button - URL'),
                'frameworkButtonIsNewTab' => new TrueFalseField('Button - is new tab?'),
            ]),

            new GroupField('Networks', [
                'networksId' => new StringField('id'),
                'networksTitle' => new StringField('Title'),
                'networksFirstGallery' => new GalleryField('Gallery 1'),
                'networksSecondGallery' => new GalleryField('Gallery 2'),
            ]),

            new GroupField('Editor', [
                'editorId' => new StringField('id'),
                'editorTitle' => new StringField('Title'),
                'editorText' => new TextField('Text'),
                'editorImage' => new ImageField('Image'),
                'editorButtonLabel' => new StringField('Button - Text'),
                'editorButtonUrl' => new StringField('Button - URL'),
                'editorButtonIsNewTab' => new TrueFalseField('Button - is new tab?'),
            ]),

            new GroupField('Do you want', [
                'doYouWantId' => new StringField('id'),
                'doYouWantTitle' => new StringField('Title'),
                'doYouWantFirstGallery' => new RepeaterField('Gallery 1', [
                    'image' => new ImageField('Image', FileScenario::PlayableDoYoWantCard),
                    'action' => new SelectField('Action', [
                        'scroll' => 'Scroll',
                        'openPage' => 'Open page'
                    ]),
                    'link' => new UrlField('Target'),
                ]),
                'doYouWantSecondGallery' => new RepeaterField('Gallery 2', [
                    'image' => new ImageField('Image', FileScenario::PlayableDoYoWantCard),
                    'action' => new SelectField('Action', [
                        'scroll' => 'Scroll',
                        'openPage' => 'Open page'
                    ]),
                    'link' => new UrlField('Target'),
                ]),
                'doYouWantThirdGallery' => new RepeaterField('Gallery 3', [
                    'image' => new ImageField('Image', FileScenario::PlayableDoYoWantCard),
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
                'formProfileImage' => new ImageField('Profile Image', FileScenario::FeedbackPhoto),
                'formProfileLabel' => new StringField('Profile Label'),
                'formProfileEmail' => new StringField('Profile Email'),
                'formProfilePosition' => new StringField('Profile Position'),
            ]),
        ]);
    }
}
