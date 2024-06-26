<?php

namespace App\Enums;

use OZiTAG\Tager\Backend\Core\Enums\Enum;

final class EmailTemplate extends Enum
{
    const Contact = 'Contact';
    const Feedback = 'Feedback';
    const Cv = 'Cv';
    const CvWithoutVacancy = 'CvWithoutVacancy';
    const Subscription = 'Subscription';
    const Course = 'Course';
}
