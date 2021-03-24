import React from 'react';
import styled from 'styled-components';

import { Nullable } from '@tager/web-core';

import Button, { ButtonLink } from '@/components/Button';

type Props = {
  icon?: string;
  label: string;
  isLink: boolean;
  href?: Nullable<string>;
};

function SkewButton({ href, label, icon, isLink }: Props) {
  return isLink ? (
    <StyledButtonLink href={href ?? '#'} variant="skew">
      <Label>{label}</Label>
    </StyledButtonLink>
  ) : (
    <StyledButton variant="skew">
      <Label>{label}</Label>
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
