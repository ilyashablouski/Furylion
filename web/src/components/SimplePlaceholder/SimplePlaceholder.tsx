import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  height?: number;
  color?: string;
};

function SimplePlaceholder({ height, color }: Props) {
  return (
    <Content height={height} color={color}>
      <LoaderWrapper>
        <LoaderComponent>
          <div />
          <div />
        </LoaderComponent>
      </LoaderWrapper>
    </Content>
  );
}

const Content = styled.div<{
  height?: number;
  color?: string;
}>`
  position: relative;
  display: flex;
  transition: 0.3s;

  min-height: 75px;
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  width: 100%;
  background: ${(props) => (props.color ? props.color : colors.white)};
`;

const LoaderWrapper = styled.div`
  position: absolute;
  left: 50.3%;
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

export default SimplePlaceholder;
