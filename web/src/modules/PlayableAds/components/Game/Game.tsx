import React from 'react';
import styled, { css } from 'styled-components';

import { ModalProps } from '@tager/web-components';

import { media } from '@/utils/mixin';
import Frame from '@/modules/PlayableAds/components/Game/Frame';
import { colors } from '@/constants/theme';
import Button from '@/components/Button';
import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon-2.svg';
import { StringFieldType } from '@/typings/common';

type Props = ModalProps<{
  gameTitle: StringFieldType;
  gameDescription: StringFieldType;
}>;

function Game({
  closeModal,
  innerProps: { gameDescription, gameTitle },
}: Props) {
  return (
    <Component>
      <Panel>
        <Title>{gameTitle}</Title>
        <SubTitle>{gameDescription}</SubTitle>
        <StyledButton onClick={closeModal}>
          <CloseIcon />
        </StyledButton>
      </Panel>
      <Frame />
    </Component>
  );
}

const Component = styled.div`
  position: relative;
  min-width: 750px;
  min-height: 562px;
  color: ${colors.white};

  ${media.tabletSmall(css`
    min-width: 100vw;
    min-height: 100vh;
  `)}
`;

const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;

  ${media.mobile(css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 81px;
  `)}
`;

const StyledButton = styled(Button)`
  position: absolute;
  width: 65px;
  background-color: #c2191e;
  height: auto;
  top: 0;
  right: 0;
  bottom: 0;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #96131a;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-55%, -50%);
  }

  ${media.mobile(css`
    width: 94px;
  `)}
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  margin-right: 19px;

  ${media.mobile(css`
    font-size: 18px;
    margin-right: 0;
  `)}
`;
const SubTitle = styled.span`
  font-size: 14px;
  line-height: 160%;
  margin-bottom: -7px;

  ${media.mobile(css`
    margin: 0;
  `)}
`;

export default Game;
