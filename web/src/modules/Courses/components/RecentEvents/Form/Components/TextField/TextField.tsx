import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';

import { TextFieldProps } from './TextField.types';

function TextField({ errorMessage, ...props }: TextFieldProps) {
  return (
    <Component>
      <Input {...props} />
      {errorMessage && <Error>{errorMessage}</Error>}
    </Component>
  );
}

export default TextField;

const Component = styled.div`
  position: relative;
  margin-top: 19px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 70px;
  padding: 20px 20px;
  font-size: 24px;
  line-height: 130%;
  font-weight: 500;
  border: none;
  background: ${colors.white};

  &::placeholder {
    color: ${colors.black032};
  }
`;

const Error = styled.div`
  position: absolute;
  color: ${colors.red};
  font-size: 11px;
  line-height: 15px;
  top: -20px;
`;
