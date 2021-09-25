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
            new GroupField('Hero Block', [
                'heroId' => new StringField('id'),
                'heroTitle' => new StringField('Title'),
                'heroSubtitle' => new StringField('Subtitle'),
                'heroDescription' => new StringField('Description'),
                'courseRegistrationTitle' => new StringField('Course registration title'),
                'courseRegistration' => new StringField('Course registration date'),
                'heroCoursePlacesTitle' => new StringField('Places left title'),
                'heroCoursePlaces' => new StringField('Places left'),
                'heroButtonFirstLabel' => new StringField('Button 1 - Text'),
                'heroButtonFirstUrl' => new StringField('Button 1 - URL'),
                'heroButtonFirstIsNewTab' => new TrueFalseField('Button 1 - Is new tab?'),
                'heroButtonSecondLabel' => new StringField('Button 2 - Text'),
                'heroButtonSecondUrl' => new StringField('Button 2 - URL'),
                'heroButtonSecondIsNewTab' => new TrueFalseField('Button 2 - Is new tab?'),
                'heroImage' => new ImageField('Background image', FileScenario::WillLearnImage),
            ]),

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

            new GroupField('You will learn', [
                'learnId' => new StringField('id'),
                'learnTitle' => new StringField('Title'),
                'learnItems' =>  new RepeaterField('Items', [
                    'title' => new StringField('Title'),
                    'description' => new TextField('Description'),
                    'image' => new ImageField('Image', FileScenario::WillLearnImage),
                ], RepeaterView::Table),
            ]),

            new GroupField('Course program', [
                'courseProgramId' => new StringField('id'),
                'courseProgramTitle' => new StringField('Title'),
                'courseProgramDescription' => new StringField('Description'),
                'courseProgramItems' =>  new RepeaterField('Items', [
                    'title' => new StringField('Title'),
                    'time' => new StringField('Time'),
                    'descriptionTitle' => new StringField('Description title'),
                    'description' => new TextField('Description'),
                    'stepsItems' =>  new RepeaterField('Steps items', [
                        'title' => new StringField('Title'),
                        'time' => new StringField('Time'),
                        'list' => new HtmlField('List'),
                    ], RepeaterView::Block),
                ], RepeaterView::Block),
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
                'stepsId' => new StringField('id'),
                'stepsTitle' => new StringField('Title'),
                'stepsItems' =>  new RepeaterField('Specialists cards', [
                    'title' => new StringField('Title'),
                    'position' => new StringField('Specialist position'),
                    'description' => new TextField('Description'),
                    'image' => new ImageField('Image', FileScenario::StepsCardImage),
                ], RepeaterView::Block),
            ]),

            new GroupField('Profession facts', [
                'factsId' => new StringField('id'),
                'factsTitle' => new StringField('Title'),
                'factsItems' =>  new RepeaterField('Facts', [
                    'title' => new StringField('Title'),
                    'subtitle' => new StringField('Subtitle'),
                    'description' => new TextField('Description'),
                ], RepeaterView::Table),
                'factsText' => new StringField('Text'),
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
