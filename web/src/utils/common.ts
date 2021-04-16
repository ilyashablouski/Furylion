import React from 'react';

import { RequestError, useMedia } from '@tager/web-core';

import ErrorPage from '@/pages/_error';

export function convertSlugToPath(
  slug: Array<string> | string | undefined
): string {
  if (!slug) return '/';

  if (Array.isArray(slug)) {
    return slug.map(convertSlugToPath).join('');
  }

  return '/' + slug;
}

export function getParamAsString(
  param: Array<string> | string | undefined
): string {
  return Array.isArray(param) ? param[0] : param ?? '';
}

export function convertAliasToPath(
  alias: Array<string> | string | undefined
): string {
  if (!alias) return '';
  const convertString = convertSlugToPath(alias);

  return convertString.substring(convertString.indexOf('/') + 1);
}

export function convertErrorToProps(
  error: Error | RequestError
): React.ComponentProps<typeof ErrorPage> {
  if ('status' in error) {
    return { statusCode: error.status.code, title: error.status.text };
  }

  return { err: error, statusCode: 500 };
}

export function normalizePhoneNumber(phone: string | null): string | null {
  if (!phone) return null;
  return phone.replace(/[^+\d]/g, '');
}

export function scrollDown() {
  const section = document.querySelector('.anchor-section');
  if (!section) return;
  const headerHeight = window.innerWidth <= 1023 ? 56 : 100;

  if (section) {
    const y = section.getBoundingClientRect().top - headerHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
