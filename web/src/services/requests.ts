import { request, ResponseBody } from '@tager/web-core';

import {
  FileType,
  VacancyFullListType,
  VacancyShortListType,
} from '@/typings/model';

export type ContactsFormPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
  file: number | null;
};

export function getExampleList() {
  return request.get({ path: '/tager/example' });
}

export function createExample() {
  return request.post({ path: '/tager/example', body: { name: 'example' } });
}

export function sendContactsForm(
  payload: ContactsFormPayload
): Promise<ContactsFormPayload> {
  return request.post({ path: '/leads/feedback', body: payload });
}

export function uploadFile(file: File): Promise<FileType> {
  const formData = new FormData();
  formData.append('file', file);

  return request.post({ path: '/upload/feedback', body: formData });
}

export function getCareersVacancyByAlias(
  alias: string
): Promise<ResponseBody<VacancyFullListType>> {
  return request.get({ path: `/vacancies/${alias}` });
}
//FIXME: fix for get meta & data
// export function getCareersVacanciesList(): Promise<{
//   data: ResponseBody<Array<VacancyShortListType>>;
//   meta: {
//     page: {
//       number: number;
//       size: number;
//       count: number;
//     };
//     total: number;
//   };
// }> {
//   return request.get({ path: `/vacancies` });
// }
export function getCareersVacanciesList(): Promise<
  ResponseBody<Array<VacancyShortListType>>
> {
  return request.get({ path: `/vacancies` });
}

//TODO: Refactor types
export function getVacancyCategories(
  value: number
): Promise<ResponseBody<Array<any>>> {
  return request.get({
    path: `/vacancies/?filter[location]=${value}`,
  });
}
