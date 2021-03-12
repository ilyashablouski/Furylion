import { Nullable, request, ResponseBody } from '@tager/admin-services';
import { VacancyLocationType, VacancyType } from '@/typings/model';

export type CountData = { count: number };
type SuccessData = { success: boolean };

/** Vacancies */
export function getVacanciesCount(): Promise<ResponseBody<CountData>> {
  return request.get({ path: '/admin/vacancies/count' });
}

export function getVacanciesList(params?: {
  query?: string;
  pageNumber?: number;
  pageSize?: number;
}): Promise<ResponseBody<Array<VacancyType>>> {
  return request.get({ path: '/admin/vacancies', params });
}

export function getVacancy(
  vacancyId: string | number
): Promise<ResponseBody<VacancyType>> {
  return request.get({ path: `/admin/vacancies/${vacancyId}` });
}

export type VacancyCreatePayload = {
  title: string;
  locationId: Nullable<number>;
  excerpt: string;
  body: string;
};

export function createVacancy(
  payload: VacancyCreatePayload
): Promise<ResponseBody<VacancyType>> {
  return request.post({
    path: `/admin/vacancies`,
    body: payload,
  });
}

export type VacancyUpdatePayload = {
  title: string;
  urlAlias: string;
  locationId: Nullable<number>;
  excerpt: string;
  body: string;
  pageTitle: string;
  pageDescription: string;
  openGraphImage: Nullable<string>;
  introduction: string;
  type: string;
  level: string;
  technologies: string;
  duties: string;
  requirements: string;
  conditions: string;
  image: Nullable<string>;
};

export function updateVacancy(
  vacancyId: number | string,
  payload: VacancyUpdatePayload
): Promise<ResponseBody<VacancyType>> {
  return request.put({
    path: `/admin/vacancies/${vacancyId}`,
    body: payload,
  });
}

export function deleteVacancy(
  vacancyId: string | number
): Promise<SuccessData> {
  return request.delete({ path: `/admin/vacancies/${vacancyId}` });
}

export function moveVacancy(
  vacancyId: string | number,
  direction: string
): Promise<SuccessData> {
  return request.post({
    path: `/admin/vacancies/${vacancyId}/move/${direction}`,
  });
}

/** Vacancy Locations */
export function getVacancyLocationsCount(): Promise<ResponseBody<CountData>> {
  return request.get({ path: '/admin/vacancy-locations/count' });
}

export function getVacancyLocationsList(params?: {
  query?: string;
  pageNumber?: number;
  pageSize?: number;
}): Promise<ResponseBody<Array<VacancyLocationType>>> {
  return request.get({ path: '/admin/vacancy-locations', params });
}

export function getVacancyLocation(
  locationId: string | number
): Promise<ResponseBody<VacancyLocationType>> {
  return request.get({ path: `/admin/vacancy-locations/${locationId}` });
}

export type VacancyLocationCreatePayload = {
  name: string;
};

export function createVacancyLocation(
  payload: VacancyLocationCreatePayload
): Promise<ResponseBody<VacancyLocationType>> {
  return request.post({
    path: `/admin/vacancy-locations`,
    body: payload,
  });
}

export type VacancyLocationUpdatePayload = {
  name: string;
  urlAlias: string;
};

export function updateVacancyLocation(
  locationId: number | string,
  payload: VacancyLocationUpdatePayload
): Promise<ResponseBody<VacancyLocationType>> {
  return request.put({
    path: `/admin/vacancy-locations/${locationId}`,
    body: payload,
  });
}

export function deleteVacancyLocation(
  locationId: string | number
): Promise<SuccessData> {
  return request.delete({ path: `/admin/vacancy-locations/${locationId}` });
}

export function moveVacancyLocation(
  locationId: string | number,
  direction: string
): Promise<SuccessData> {
  return request.post({
    path: `/admin/vacancy-locations/${locationId}/move/${direction}`,
  });
}
