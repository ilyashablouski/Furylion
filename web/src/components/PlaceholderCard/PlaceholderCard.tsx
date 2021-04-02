import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  height?: number;
  color?: string;
};
//TODO: REfactoring for universal use
function PlaceholderCard({ height, color }: Props) {
  return (
    <Wrapper>
      <Content height={height} color={color}>
        <LoaderWrapper>
          <LoaderComponent>
            <div />
            <div />
          </LoaderComponent>
        </LoaderWrapper>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1230px;
`;

const Content = styled.div<{
  height?: number;
  color?: string;
}>`
  position: relative;

  padding-top: 56.01%;
  display: flex;
  transition: 0.3s;

  min-height: 75px;
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  width: 100%;
  background: ${(props) => (props.color ? props.color : colors.white)};

  ${media.tabletSmallOnly(css`
    padding-top: 71.09%;
  `)}

  ${media.mobile(css`
    padding-top: 151.66%;
  `)}
`;

const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const LoaderComponent = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    border: 4px solid ${colors.red};
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    opacity: 1;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

export default PlaceholderCard;
