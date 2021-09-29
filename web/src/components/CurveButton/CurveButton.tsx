import React from 'react';

import { Nullable, Nullish } from '@tager/web-core';

import Button, { ButtonLink } from '@/components/Button';
import { ButtonVariant } from '@/components/Button/Button.types';

type Props = {
  label: Nullable<string>;
  href?: Nullish<string>;
  variants: Array<ButtonVariant>;
  isNewTab?: boolean;
  onClick?: () => void;
};

function CurveButton({ href, label, variants, isNewTab, onClick }: Props) {
  return href ? (
    <ButtonLink
      href={href ?? '#'}
      variants={variants}
      target={isNewTab ? '_blank' : '_self'}
    >
      {label}
    </ButtonLink>
  ) : (
    <Button variants={variants} onClick={onClick}>
      {label}
    </Button>
  );
}

export default CurveButton;
