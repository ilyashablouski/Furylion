<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Enums\RepeaterView;
use OZiTAG\Tager\Backend\Fields\Fields\GalleryField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class SingleCourseTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Single course', [
            new GroupField('Target of the course', [
                'targetCourseId' => new StringField('id'),
                'targetCourseTitle' => new StringField('Title'),
                'targetCourseDescription' => new HtmlField('Description'),
                'targetCourseItems' =>  new RepeaterField('Cards', [
                    'title' => new StringField('Title'),
                    'content' => new StringField('Content'),
                ], RepeaterView::Table),
            ]),

            new GroupField('Who is the course for', [
                'courseAudienceId' => new StringField('id'),
                'courseAudienceTitle' => new StringField('Title'),
                'courseAudienceList' => new HtmlField('List'),
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

            new GroupField('Specialists', [
                'specialistsId' => new StringField('id'),
                'specialistsTitle' => new StringField('Title'),
                'specialistsItems' =>  new RepeaterField('Specialists cards', [
                    'title' => new StringField('Title'),
                    'position' => new StringField('Specialist position'),
                    'description' => new TextField('Description'),
                    'image' => new ImageField('Image', FileScenario::StepsCardImage),
                ], RepeaterView::Block),
            ]),

            new GroupField('Profession facts', [
                'professionFactsId' => new StringField('id'),
                'professionFactsTitle' => new StringField('Title'),
                'professionFactsItems' =>  new RepeaterField('Facts', [
                    'title' => new StringField('Title'),
                    'subtitle' => new StringField('Subtitle'),
                    'description' => new TextField('Description'),
                ], RepeaterView::Table),
                'professionFactsText' => new StringField('Text'),
            ]),

            new GroupField('Projects', [
                'projectsId' => new StringField('id'),
                'projectsTitle' => new TextField('Title'),
                'projectsImages' => new GalleryField('Images', FileScenario::ProjectsImage),
            ]),

            new GroupField('After completing course', [
                'afterCompleteId' => new StringField('id'),
                'afterCompleteTitle' => new StringField('Title'),
                'afterCompleteItems' =>  new RepeaterField('Skills', [
                    'skill' => new HtmlField('Skill'),
                ], RepeaterView::Block),
                'courseCostTitle' => new StringField('Course cost title'),
                'courseCost' => new StringField('Course cost'),
                'courseStartTitle' => new StringField('Start of the course title'),
                'courseStartDate' => new StringField('Start of the course date'),
                'coursePlacesTitle' => new StringField('Places left title'),
                'coursePlaces' => new StringField('Places left'),
                'singUpCourseButtonLabel' => new StringField('Button - Text'),
                'singUpCourseButtonUrl' => new StringField('Button - URL'),
                'singUpCourseButtonIsNewTab' => new TrueFalseField('Button - is new tab?'),
            ]),

            new GroupField('Popular questions', [
                'questionsId' => new StringField('id'),
                'questionsTitle' => new StringField('Title'),
                'questionsItems' =>  new RepeaterField('Questions', [
                    'question' => new StringField('Question'),
                    'answer' => new TextField('Answer'),
                ], RepeaterView::Table),
            ]),

            new GroupField('More courses', [
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
        ]);
    }
}
