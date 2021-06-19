import React from 'react';
import styled from 'styled-components';

import Button, { ButtonLink } from '@/components/Button';
import { StringFieldType } from '@/typings/common';
import { ButtonVariant } from '@/components/Button/Button.types';
import { StyledButtonLink } from '@/components/Button/Button';

type Props = {
  children?: React.ReactNode;
  href?: StringFieldType;
  color: ButtonVariant;
  className?: string;
  isNewTab?: boolean;
};

function SkewButton({ href, children, color, className, isNewTab }: Props) {
  return href ? (
    <StyledButtonLink
      href={href ?? '#'}
      variants={[color, 'skew', 'w100']}
      className={className}
      target={isNewTab ? '_blank' : '_self'}
    >
      <Label>{children}</Label>
    </StyledButtonLink>
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
