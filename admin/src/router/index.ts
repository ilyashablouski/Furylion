import { createRouter, CustomRouteConfig } from '@tager/admin-layout';
import { PAGE_FORM_ROUTE, PAGE_LIST_ROUTE } from '@tager/admin-pages';
import {
  EMAIL_LOG_LIST_ROUTE,
  EMAIL_TEMPLATE_FORM_ROUTE,
  EMAIL_TEMPLATE_LIST_ROUTE,
} from '@tager/admin-mail';
import { SEO_SETTINGS_ROUTE, SEO_TEMPLATES_ROUTE } from '@tager/admin-seo';
import {
  SETTINGS_ITEM_FORM_ROUTE,
  SETTINGS_ITEM_LIST_ROUTE,
} from '@tager/admin-settings';
import {
  ADMIN_FORM_ROUTE,
  ADMIN_LIST_ROUTE,
  ROLE_FORM_ROUTE,
  ROLE_LIST_ROUTE,
} from '@tager/admin-administrators';

import Home from '@/views/Home.vue';
import { ROUTE_PATHS } from '@/constants/paths';
import VacancyList from '@/views/VacancyList';
import VacancyForm from '@/views/VacancyForm';
import { getLinks } from '@/constants/links';
import VacancyLocationList from '@/views/VacancyLocationList/VacancyLocationList.vue';
import VacancyLocationForm from '@/views/VacansyLocationForm/VacancyLocationForm.vue';

export const HOME_ROUTE: CustomRouteConfig = {
  path: '/',
  component: Home,
  name: 'Home',
  meta: {
    getBreadcrumbs: (route, t) => [{ url: '/', text: t('admin:home') }],
  },
};

export const VACANCIES_ROUTE: CustomRouteConfig = {
  path: ROUTE_PATHS.VACANCY_LIST,
  component: VacancyList,
  name: 'Vacancies',
  meta: {
    getBreadcrumbs: (route, t) => [
      getLinks(t).HOME,
      {
        url: route.path,
        text: 'Vacancies',
      },
    ],
  },
};

export const VACANCY_FORM_ROUTE: CustomRouteConfig = {
  path: ROUTE_PATHS.VACANCY_FORM,
  component: VacancyForm,
  name: 'Vacancy Form',
  meta: {
    getBreadcrumbs: (route, t) => [
      getLinks(t).HOME,
      getLinks(t).VACANCIES_LIST,
      {
        url: route.path,
        text: 'Vacancy Form',
      },
    ],
  },
};

export const VACANCY_LOCATIONS_ROUTE: CustomRouteConfig = {
  path: ROUTE_PATHS.VACANCY_LOCATION_LIST,
  component: VacancyLocationList,
  name: 'Locations',
  meta: {
    getBreadcrumbs: (route, t) => [
      getLinks(t).HOME,
      {
        url: route.path,
        text: getLinks(t).VACANCY_LOCATIONS.text,
      },
    ],
  },
};

export const VACANCY_LOCATION_FORM_ROUTE: CustomRouteConfig = {
  path: ROUTE_PATHS.VACANCY_LOCATION_FORM,
  component: VacancyLocationForm,
  name: 'Location Form',
  meta: {
    getBreadcrumbs: (route, t) => [
      getLinks(t).HOME,
      getLinks(t).VACANCY_LOCATIONS,
      {
        url: route.path,
        text: 'Location Form',
      },
    ],
  },
};

const router = createRouter({
  routes: [
    HOME_ROUTE,
    VACANCIES_ROUTE,
    VACANCY_FORM_ROUTE,
    VACANCY_LOCATIONS_ROUTE,
    VACANCY_LOCATION_FORM_ROUTE,
    PAGE_FORM_ROUTE,
    PAGE_LIST_ROUTE,
    EMAIL_LOG_LIST_ROUTE,
    EMAIL_TEMPLATE_FORM_ROUTE,
    EMAIL_TEMPLATE_LIST_ROUTE,
    SETTINGS_ITEM_FORM_ROUTE,
    SETTINGS_ITEM_LIST_ROUTE,
    SEO_SETTINGS_ROUTE,
    SEO_TEMPLATES_ROUTE,
    ADMIN_FORM_ROUTE,
    ADMIN_LIST_ROUTE,
    ROLE_FORM_ROUTE,
    ROLE_LIST_ROUTE,
  ],
});

export default router;
