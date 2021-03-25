import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as BurgerIcon } from '@/assets/svg/burger-btn.svg';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

function MobileMenuToggle({ isActive, onClick }: Props) {
  return (
    <BurgerButton isActive={isActive} onClick={onClick}>
      <BurgerIcon />
    </BurgerButton>
  );
}

const BurgerButton = styled.button<{ isActive: boolean }>`
  display: none;

  ${media.tabletSmall(css`
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    position: absolute;
    top: 0;
    right: 0;
    width: 65px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.red};
    z-index: 5;
  `)}

  svg {
    transform-origin: center;
    transform: ${({ isActive }) =>
      isActive ? ' rotate(90deg)' : ' rotate(0)'};
    transition: 150ms all ease-in-out;
  }
`;

export default MobileMenuToggle;
