import React from 'react';
import styled from 'styled-components';

import Button, { ButtonLink } from '@/components/Button';
import { StringFieldType } from '@/typings/common';
import { ButtonVariant } from '@/components/Button/Button.types';

type Props = {
  //FIXME: Fix any typing
  children?: any;
  href?: StringFieldType;
  color: ButtonVariant;
  className?: string;
};

function SkewButton({ href, children, color, className }: Props) {
  return href ? (
    <ButtonLink
      href={href ?? '#'}
      variants={[color, 'skew', 'w100']}
      className={className}
    >
      <Label>{children}</Label>
    </ButtonLink>
  ) : (
    <Button variants={[color, 'skew', 'w100']} className={className}>
      <Label>{children}</Label>
    </Button>
  );
}

const Label = styled.span`
  display: inline-flex;
  align-items: center;
  transform: skew(15deg);
`;

export default SkewButton;
