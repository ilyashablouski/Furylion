import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as BurgerIcon } from '@/assets/svg/burger-btn.svg';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

function MobileMenuToggle({ isOpen, onClick }: Props) {
  return (
    <BurgerButton isOpen={isOpen} onClick={onClick}>
      <BurgerIcon />
    </BurgerButton>
  );
}

const BurgerButton = styled.button<{ isOpen: boolean }>`
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
    z-index: 11;
  `)}

  svg {
    transform-origin: center;
    transform: ${({ isOpen }) => (isOpen ? ' rotate(90deg)' : ' rotate(0)')};
    transition: 150ms all ease-in-out;
  }
`;

export default MobileMenuToggle;
