import styled, { keyframes } from 'styled-components';

export const fadeOutCss = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const animationLogo = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }

`;

export const Inner = styled.div`
  position: relative;
  width: 180px;
  height: 44px;
  user-select: none;

  svg {
    position: absolute;
  }

  svg:nth-child(2) {
    z-index: 11;
  }
`;

export const WrapperIconLogo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation-name: ${animationLogo};
  animation-duration: 7s;
  animation-iteration-count: infinite;
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  opacity: 1;
  will-change: opacity;
  z-index: 1000;
  overflow: hidden;
`;
