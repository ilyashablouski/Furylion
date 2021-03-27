import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type OverlayProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Overlay({ className, children }: OverlayProps) {
  return <OverlayBlock className={className}>{children}</OverlayBlock>;
}

type SpinnerColor = 'white' | 'dark';

type Props = {
  className?: string;
  absolute?: boolean;
  text?: string;
  color?: SpinnerColor;
};

function Spinner({ className, absolute = true, text, color }: Props) {
  return (
    <Container className={className} absolute={absolute}>
      <Circle color={color ?? 'white'} />
      {text ? <StatusText>{text}</StatusText> : null}
    </Container>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`;

const colorMap: Record<SpinnerColor, string> = {
  white: colors.white,
  dark: colors.dark,
};

const Circle = styled.div<{ color: SpinnerColor }>`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border: 2px solid #f5f5f5;
  border-top: 3px solid ${(props) => colorMap[props.color]};
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
  ${media.tabletSmall(css`
    width: 20px;
    height: 20px;
  `)}
`;

const Container = styled.div<{ absolute?: boolean }>`
  position: relative;
  z-index: 5;

  ${(props) =>
    props.absolute
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : ''};
`;

const StatusText = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 10px;
`;

const OverlayBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 16px;
  z-index: 8;
`;

export default Spinner;
