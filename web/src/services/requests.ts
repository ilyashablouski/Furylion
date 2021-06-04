import { request, ResponseBody } from '@tager/web-core';

import { FileType, VacancyFullType, VacancyShortType } from '@/typings/model';

export type ContactsFormPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
  file: number | null;
};

export type CvFormPayload = {
  name: string;
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

export function sendCvForm(payload: any) {
  return request.post({
    path: '/leads/cv',
    body: payload,
  });
}

export function uploadFile(file: File): Promise<FileType> {
  const formData = new FormData();
  formData.append('file', file);

  return request.post({ path: '/upload/feedback', body: formData });
}

export function getCareersVacancyByAlias(
  alias: string
): Promise<ResponseBody<VacancyFullType>> {
  return request.get({ path: `/vacancies/${alias}` });
}

export function getCareersVacanciesList(): Promise<{
  data: ResponseBody<Array<VacancyShortType>>;
  meta: {
    page: {
      number: number;
      size: number;
      count: number;
    };
    total: number;
  };
}> {
  return request.get({ path: `/vacancies` });
}
