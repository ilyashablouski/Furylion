import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '@/assets/svg/close-button.svg';
import { colors } from '@/constants/theme';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function CloseButton(props: Props) {
  return (
    <StyledButton {...props}>
      <CloseIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: #a3a3a1;
  transition: all 150ms ease-in-out;

  &:hover {
    color: ${colors.white};
  }
`;
export default CloseButton;
