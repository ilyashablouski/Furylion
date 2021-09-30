<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Enums\RepeaterView;
use OZiTAG\Tager\Backend\Fields\Fields\FileField;
use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class CoursesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Courses', [
            new GroupField('Hero Block', [
                'heroId' => new StringField('id'),
                'heroTitle' => new StringField('Title'),
                'heroText' => new StringField('Text'),
                'heroVideo' => new FileField('Hero video', FileScenario::VideoReview),
                'heroPreview' => new ImageField('Video preview', FileScenario::VideoPreviewImage),
            ]),
            new GroupField('About us', [
                'aboutUsId' => new StringField('id'),
                'aboutUsTitle' => new StringField('Title'),
                'aboutUsDescription' => new TextField('Description'),
                'aboutUsImages' =>  new RepeaterField('Slider Images', [
                    'desktop' => new ImageField('Desktop Image', FileScenario::ServicesArtImages),
                    'mobile' => new ImageField('Mobile Image', FileScenario::ServicesArtImages),
                ]),
            ]),
            new GroupField('Courses Block', [
                'coursesId' => new StringField('id'),
                'coursesTitle' => new StringField('Title'),
                'coursesItems' =>  new RepeaterField('Courses', [
                    'image' => new ImageField('Image', FileScenario::CoursesCardImage),
                    'title' => new StringField('Title'),
                    'subtitle' => new StringField('Subtitle'),
                    'information' =>  new RepeaterField('Bottom cards', [
                        'title' => new StringField('Title'),
                        'content' => new StringField('Content'),
                    ], RepeaterView::Table),
                    'linkLabel' => new StringField('Button text'),
                    'linkUrl' => new StringField('Button URL'),
                    'scrollTo' => new StringField('Scroll id Element'),
                    'isNewTab' => new TrueFalseField('Is new tab?'),
                ], RepeaterView::Block),
            ]),
            new GroupField('Facts', [
                'factsId' => new StringField('id'),
                'factsTitle' => new StringField('Title'),
                'factsItems' =>  new RepeaterField('Facts', [
                    'title' => new StringField('Title'),
                    'subtitle' => new StringField('Subtitle'),
                    'description' => new TextField('Description'),
                ], RepeaterView::Block),
                'factsText' => new StringField('Text'),
            ]),
            new GroupField('Steps', [
                'stepsId' => new StringField('id'),
                'stepsTitle' => new StringField('Title'),
                'stepsItems' =>  new RepeaterField('Steps', [
                    'title' => new StringField('Title'),
                    'description' => new TextField('Subtitle'),
                    'image' => new ImageField('Image', FileScenario::StepsCardImage),
                ], RepeaterView::Block),
                'chooseCourseLabel' => new StringField('Button title'),
                'chooseCourseLinkUrl' => new StringField('Button URL'),
                'chooseCourseScrollTo' => new StringField('Scroll id Element'),
                'chooseCourseIsNewTab' => new TrueFalseField('Is new tab?'),
            ]),
            new GroupField('Popular questions', [
                'questionsId' => new StringField('id'),
                'questionsTitle' => new StringField('Title'),
                'questionsItems' =>  new RepeaterField('Questions', [
                    'question' => new StringField('Question'),
                    'answer' => new TextField('Answer'),
                ], RepeaterView::Table),
            ]),
            new GroupField('Student work Top', [
                'studentsId' => new StringField('id'),
                'studentsTitle' => new StringField('Title'),
                'studentsItems' => new RepeaterField('Student work', [
                    'image' => new ImageField('Image', FileScenario::HomeServicesItems),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Text'),
                    'linkUrl' => new StringField('Button URL'),
                    'scrollTo' => new StringField('Scroll id Element'),
                    'isNewTab' => new TrueFalseField('Is new Tab?'),
                ], RepeaterView::Block)
            ]),
            new GroupField('Student work Bottom', [
                'studentsBottomId' => new StringField('id'),
                'studentsBottomTitle' => new StringField('Title'),
                'studentsBottomItems' => new RepeaterField('Student work', [
                    'image' => new ImageField('Image', FileScenario::HomeServicesItems),
                    'title' => new StringField('Title'),
                    'text' => new TextField('Text'),
                    'linkLabel' => new StringField('Button Text'),
                    'linkUrl' => new StringField('Button URL'),
                    'scrollTo' => new StringField('Scroll id Element'),
                    'isNewTab' => new TrueFalseField('Is new tab??'),
                ], RepeaterView::Block),
                'studentsBottomText' => new StringField('Bottom text'),
                'studentsBottomLabel' => new StringField('Button title'),
                'studentsBottomLinkUrl' => new StringField('Button URL'),
                'studentsBottomScrollTo' => new StringField('Scroll id Element'),
                'studentsBottomIsNewTab' => new TrueFalseField('Is new tab?'),
            ]),
            new GroupField('Office life', [
                'officeLifeId' => new StringField('id'),
                'officeLifeTitle' => new StringField('Title'),
                'officeLifeImage' => new ImageField('Image', FileScenario::OfficeLifeImage),
                'officeLifeButtonFirstLabel' => new StringField('Button 1 - Text'),
                'officeLifeButtonFirstUrl' => new StringField('Button 1 - URL'),
                'officeLifeButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'officeLifeButtonSecondLabel' => new StringField('Button 2 - Text'),
                'officeLifeButtonSecondUrl' => new StringField('Button 2 - URL'),
                'officeLifeButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
            ]),
            new GroupField('Reviews', [
                'reviewsId' => new StringField('id'),
                'reviewsTitle' => new StringField('Title'),
                'reviewsItems' =>  new RepeaterField('Reviews', [
                    'avatar' => new ImageField('Avatar', FileScenario::AvatarImage),
                    'name' => new StringField('Name'),
                    'position' => new StringField('Position'),
                    'video' => new FileField('Video', FileScenario::VideoReview),
                    'preview' => new ImageField('Video preview image', FileScenario::VideoPreviewImage),
                ], RepeaterView::Table),
            ]),
            new GroupField('Projects', [
                'projectsId' => new StringField('id'),
                'projectsTitle' => new TextField('Title'),
                'projectsImages' => new GalleryField('Images', FileScenario::ProjectsImage),
            ]),
            new GroupField('Recent events', [
                'recentEventsId' => new StringField('id'),
                'recentEventsTitle' => new TextField('Title'),
                'recentEventsLabel' => new StringField('Button title'),
                'recentEventsDescription' => new StringField('Form description'),
            ]),
        ]);
    }
}
