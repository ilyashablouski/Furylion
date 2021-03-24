import React from 'react';
import styled from 'styled-components';

import { Nullable } from '@tager/web-core';

import Button, { ButtonLink } from '@/components/Button';

type Props = {
  icon?: string;
  children?: Nullable<string>;
  href?: Nullable<string>;
};

function SkewButton({ href, icon, children }: Props) {
  return href ? (
    <StyledButtonLink href={href ?? '#'} variants={['skew', 'w100']}>
      <Label>{children}</Label>
    </StyledButtonLink>
  ) : (
    <StyledButton variants={['skew', 'w100']}>
      <Label>{children}</Label>
    </StyledButton>
  );
}

const StyledButton = styled(Button)``;
const StyledButtonLink = styled(ButtonLink)``;

const Label = styled.span`
  display: inline-flex;
  transform: skew(15deg);
`;

export default SkewButton;
