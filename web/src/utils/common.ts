import React from 'react';

import { RequestError, useMedia } from '@tager/web-core';
import { createMediaQuery } from '@tager/web-components';

import ErrorPage from '@/pages/_error';
import { breakpoints } from '@/constants/theme';

export function convertSlugToPath(
  slug: Array<string> | string | undefined
): string {
  if (!slug) return '/';

  if (Array.isArray(slug)) {
    return slug.map(convertSlugToPath).join('');
  }

  return '/' + slug;
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
  const firstElement = document.querySelector('main > *:first-child');
  if (!firstElement) return;
  const isDesktop = createMediaQuery({ min: 1024 });
  let topOffset = 0;

  if (isDesktop) {
    topOffset = 100;
  } else {
    topOffset = 56;
  }
  window.scrollTo({
    behavior: 'smooth',
    top: firstElement.scrollHeight - topOffset,
  });
}
