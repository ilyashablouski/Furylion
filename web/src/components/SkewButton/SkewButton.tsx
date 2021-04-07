import React from 'react';
import styled from 'styled-components';

import Button, { ButtonLink } from '@/components/Button';
import { StringFieldType } from '@/typings/common';

type Props = {
  //FIXME: Fix any typing
  children?: any;
  href?: StringFieldType;
};

function SkewButton({ href, children }: Props) {
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
  align-items: center;
  transform: skew(15deg);
`;

export default SkewButton;
