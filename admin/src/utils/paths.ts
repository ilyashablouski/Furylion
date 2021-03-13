import { compile } from 'path-to-regexp';
import { ROUTE_PATHS } from '@/constants/paths';

export function getVacancyListUrl() {
  return ROUTE_PATHS.VACANCY_LIST;
}

export function getVacancyLocationListUrl() {
  return ROUTE_PATHS.VACANCY_LOCATION_LIST;
}

export function getVacancyFormUrl(params: { vacancyId: string | number }) {
  return compile(ROUTE_PATHS.VACANCY_FORM)(params);
}

export function getVacancyLocationFormUrl(params: {
  locationId: string | number;
}) {
  return compile(ROUTE_PATHS.VACANCY_LOCATION_FORM)(params);
}
