<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Enums\RepeaterView;
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
                'heroImage' => new ImageField('Image', FileScenario::CoursesHeroImage),
                'heroMobileImage' => new ImageField('Mobile Image', FileScenario::CoursesHeroImage),
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
                    'termRegistrationTitle' => new StringField('Term registration'),
                    'termRegistrationDate' => new StringField('Term registration date'),
                    'educationStartTitle' => new StringField('Start education title'),
                    'educationStartDate' => new StringField('Start education date'),
                    'placesLeftTitle' => new StringField('Places left title'),
                    'placesLeftCount' => new StringField('Places left count'),
                    'trainingPeriodTitle' => new StringField('Training period title'),
                    'trainingPeriodDate' => new StringField('Training period date'),
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
            new GroupField('Reviews', [
                'reviewsId' => new StringField('id'),
                'reviewsTitle' => new StringField('Title'),
                'reviewsItems' =>  new RepeaterField('Reviews', [
                    'avatar' => new ImageField('Avatar', FileScenario::AvatarImage),
                    'name' => new StringField('Name'),
                    'position' => new StringField('Position'),
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
