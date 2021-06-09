import React, { EventHandler, MouseEventHandler } from 'react';

import { Nullish, RequestError, useMedia } from '@tager/web-core';

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

export function handleLinkFeedbackClick(
  e: React.MouseEvent<HTMLAnchorElement>
) {
  e.preventDefault();

  const selector = 'contacts';
  const target = document.getElementById(selector);
  if (!target) return;

  const headerHeight = window.innerWidth <= 1023 ? 56 : 100;
  const pageOffsetTop = document.documentElement.scrollTop;
  const targetOffsetTop = target.getBoundingClientRect().top;

  window.scrollTo({
    top: pageOffsetTop + targetOffsetTop - headerHeight,
    behavior: 'smooth',
  });
}

export function getPathWithScrollParam(
  linkUrl: string | undefined,
  id: Nullish<string>
) {
  if (linkUrl && id) {
    return linkUrl + `?scroll=${id}`;
  }
  if (!id) {
    return linkUrl ?? '#';
  }
}

export function getBasePath({ href }: { href: string }) {
  const splitHref = href.split('');
  const indexAnchor = splitHref.indexOf('#');
  if (indexAnchor !== -1) {
    return (
      href.slice(0, indexAnchor) +
      '?scroll=' +
      splitHref.slice(indexAnchor + 1).join('')
    );
  } else {
    return href;
  }
}

export function getStringAsHtml(value: string, id?: string) {
  const splitValue = value.split('');
  let isCloseTag = false;
  let tagWithId = id ? `<span id="${id}">` : `<span>`;

  for (let i = 0; i < splitValue.length; i++) {
    if (splitValue[i] === '*') {
      if (!isCloseTag) {
        splitValue[i] = tagWithId;
        isCloseTag = !isCloseTag;
      } else {
        splitValue[i] = '</span>';
        isCloseTag = !isCloseTag;
      }
    }
  }

  return splitValue.join('');
}
