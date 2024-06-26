<?php

namespace App\Enums;

use OZiTAG\Tager\Backend\Core\Enums\Enum;

final class SettingKey extends Enum
{
    const OpenVacancyTitle = 'OPEN_VACANCY_TITLE';
    const OpenVacancyImage = 'OPEN_VACANCY_IMAGE';
    const OpenVacancyDescription = 'OPEN_VACANCY_DESCRIPTION';

    const FormTitle = 'FORM_TITLE';
    const FormVacanciesTitle = 'FORM_VACANCIES_TITLE';
    const FooterOffices = 'FOOTER_OFFICES';
    const InstagramUrl = 'INSTAGRAM_URL';
    const VkontakeUrl = 'VKONTAKTE_URL';
    const AppstoreUrl = 'APPSTORE_URL';
    const GoogleplayUrl = 'GOOGLEPLAY_URL';

    const Instagram = 'INSTAGRAM';

    const NotFoundText = 'NOT_FOUND_TEXT';
    const NotFoundButtonLabel = 'NOT_FOUND_BUTTON_LABEL';
    const NotFoundButtonUrl = 'NOT_FOUND_BUTTON_URL';

    const FirstHeaderTitle = 'FirstHeaderTitle';
    const SecondHeaderTitle = 'SecondHeaderTitle';
    const BenefitsTitle = 'BenefitsTitle';
}
