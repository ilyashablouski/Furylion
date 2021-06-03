import styled, { keyframes } from 'styled-components';

export const fadeOutCss = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  opacity: 1;
  will-change: opacity;
  z-index: 1000;
  overflow: hidden;

  &.fade-out {
    animation: ${fadeOutCss} 0.4s ease-in-out forwards;
  }

  & * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .ctn-preloader {
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    z-index: 900;
  }

  .ctn-preloader .animation-preloader {
    position: absolute;
    z-index: 100;
  }

  .txt-loading {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 4em !important;
    font-weight: bold !important;
    text-align: center;
    user-select: none;
  }

  .letters-loading:before {
    animation: letters-loading 4s infinite;
    color: white;
    content: attr(data-text-preloader);
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .letters-loading {
    color: rgb(45, 45, 45);
    position: relative;
    line-height: 1.15 !important;
  }

  .letters-loading:nth-child(2):before {
    animation-delay: 0.2s;
  }

  .letters-loading:nth-child(3):before {
    animation-delay: 0.4s;
  }

  .letters-loading:nth-child(4):before {
    animation-delay: 0.6s;
  }

  .letters-loading:nth-child(5):before {
    animation-delay: 0.8s;
    color: red;
  }

  .letters-loading:nth-child(6):before {
    animation-delay: 1s;
    color: red;
  }

  .letters-loading:nth-child(7):before {
    animation-delay: 1.2s;
    color: red;
  }

  .letters-loading:nth-child(8):before {
    animation-delay: 1.4s;
    color: red;
  }

  .loaded .animation-preloader {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  @keyframes letters-loading {
    0%,
    75%,
    100% {
      opacity: 0;
    }
    25%,
    50% {
      opacity: 1;
    }
  }
`;
