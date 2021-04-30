import React from 'react';
import styled from 'styled-components';

import { Nullable, Nullish } from '@tager/web-core';

import Button, { ButtonLink } from '@/components/Button';
import { ButtonVariant } from '@/components/Button/Button.types';

type Props = {
  label: Nullable<string>;
  href?: Nullish<string>;
  variants: Array<ButtonVariant>;
  isNewTab?: boolean;
};

function CurveButton({ href, label, variants, isNewTab }: Props) {
  return href ? (
    <ButtonLink
      href={href ?? '#'}
      variants={variants}
      target={isNewTab ? '_blank' : '_self'}
    >
      {label}
    </ButtonLink>
  ) : (
    <Button variants={variants}>{label}</Button>
  );
}

export default CurveButton;
