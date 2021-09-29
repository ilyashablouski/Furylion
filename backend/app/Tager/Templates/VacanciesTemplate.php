<?php

namespace App\Tager\Templates;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Fields\Enums\RepeaterView;
use OZiTAG\Tager\Backend\Fields\Fields\ButtonField;
use OZiTAG\Tager\Backend\Fields\Fields\FileField;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\HtmlField;
use OZiTAG\Tager\Backend\Fields\Fields\ImageField;
use OZiTAG\Tager\Backend\Fields\Fields\RepeaterField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;
use OZiTAG\Tager\Backend\Fields\Fields\TextField;
use OZiTAG\Tager\Backend\Fields\Fields\TrueFalseField;
use OZiTAG\Tager\Backend\Pages\Structures\Template;

class VacanciesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Vacancies', [
            new GroupField('Head Image', [
                'headId' => new StringField('id'),
                'headImage' => new ImageField('Image', FileScenario::HeadImage),
            ]),
            new GroupField('Fl school', [
                'flSchoolIsActuallyBlock' => new TrueFalseField('Is actually block?'),
                'flSchoolId' => new StringField('id'),
                'flSchoolTitle' => new StringField('Title'),
                'flSchoolSubtitle'=> new HtmlField('Subtitle'),
                'flSchoolLabel' => new StringField('Button title'),
                'flSchoolLinkUrl' => new StringField('Button URL'),
                'flSchoolScrollTo' => new StringField('Scroll id Element'),
                'flSchoolIsNewTab' => new TrueFalseField('Is new tab?'),
                'flSchoolCoursesTitle' => new StringField('Courses title'),
                'flSchoolCourses' =>  new RepeaterField('Courses', [
                    'date' => new StringField('Date of recording'),
                    'title' => new StringField('Course name'),
                    'subtitle' => new StringField('Course subtitle'),
                    'description' => new StringField('Course description'),
                    'buttonLabel' => new StringField('Button title'),
                    'buttonLinkUrl' => new StringField('Button URL'),
                    'buttonScrollTo' => new StringField('Scroll id Element'),
                    'buttonIsNewTab' => new TrueFalseField('Is new tab?'),
                ],RepeaterView::Block),
                'sliderItems' =>  new RepeaterField('Slider items', [
                    'video' => new FileField('Video', FileScenario::VideoReview),
                    'text' => new TextField('Text'),
                    'author' => new StringField('Author name'),
                    'authorPosition' => new StringField('Author position'),
                    'videoPreviewImage' => new ImageField('Mobile video preview image', FileScenario::VideoPreviewImage),
                    'videoButtonText' => new StringField('Mobile video button text'),
                ],RepeaterView::Block),
            ]),
            new GroupField('Team Life', [
                'teamLifeId' => new StringField('id'),
                'teamLifeTitle' => new StringField('Title'),
                'teamLifeDescription' => new HtmlField('Text - Description'),
                'teamLifeButton' => new ButtonField('Button'),
            ]),
            new GroupField('Form', [
                'formTitle' => new StringField('Title'),
            ]),
            new GroupField('Job Card', [
                'buttonTitle' => new StringField('Button Title'),
            ]),
        ]);
    }
}
