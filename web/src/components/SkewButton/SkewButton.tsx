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
    <ButtonLink href={href ?? '#'} variants={['skew', 'w100']}>
      <Label>{children}</Label>
    </ButtonLink>
  ) : (
    <Button variants={['skew', 'w100']}>
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
