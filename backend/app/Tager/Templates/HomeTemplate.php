<?php

namespace App\Tager\Templates;

use OZiTAG\Tager\Backend\Pages\Structures\Template;

class HomeTemplate extends Template
{
    public function __construct()
    {
        parent::__construct('Главная страница', []);
    }
}
