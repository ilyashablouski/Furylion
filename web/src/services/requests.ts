import { request } from '@tager/web-core';

import { FileType } from '@/typings/model';

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

export function getVacancies() {
  return request.get({ path: '/vacancies' });
}

//FIXME: Add correct path
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
