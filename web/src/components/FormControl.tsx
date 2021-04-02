import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  className?: string;
  error?: string;
  children: React.ReactNode;
};

function FormControl({ className, error, children }: Props) {
  return (
    <div className={className}>
      {children}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}

const ErrorMessage = styled.span`
  position: absolute;
  top: auto;
  left: auto;
  display: block;
  font-size: 11px;
  line-height: 15px;
  color: ${colors.red};
  margin-top: 8px;

  ${media.mobile(css`
    margin-top: 4px;
  `)}
`;

export default FormControl;
