<?php

namespace App\Tager\Templates;

use OZiTAG\Tager\Backend\Pages\Structures\Template;
use OZiTAG\Tager\Backend\Fields\Fields\GroupField;
use OZiTAG\Tager\Backend\Fields\Fields\StringField;

class ServicesTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Услуги', [
            new GroupField('Head', [
                'headText' => new StringField('Text'),
            ]),
        ]);
    }
}
