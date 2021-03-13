<?php

namespace App\Enums;

use OZiTAG\Tager\Backend\Core\Enums\Enum;

final class UsersScope extends Enum
{
    const VacanciesView = 'vacancies.view';
    const VacanciesCreate = 'vacancies.create';
    const VacanciesEdit = 'vacancies.edit';
    const VacanciesDelete = 'vacancies.delete';
}
