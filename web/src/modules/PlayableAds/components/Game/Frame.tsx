import React, { useRef } from 'react';
import styled from 'styled-components';

import { ReactComponent as BlackLogo } from '@/assets/svg/preloader/black-logo.svg';
import { ReactComponent as RedLogo } from '@/assets/svg/preloader/red-logo.svg';
import { StringFieldType } from '@/typings/common';
import { animationLogo } from '@/components/Preloader/Preloader.styles';

function Frame({ file }: { file: File }) {
  const loaderRef = useRef<HTMLDivElement>(null);

  function onLoad() {
    if (loaderRef.current) {
      loaderRef.current.style.display = 'none';
    }
  }

  return (
    <>
      <Loader ref={loaderRef}>
        <Inner>
          <BlackLogo />
          <WrapperIconLogo>
            <RedLogo />
          </WrapperIconLogo>
        </Inner>
      </Loader>
      <Iframe onLoad={onLoad} src={`file`} frameBorder="0" />
    </>
  );
}

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 1;
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 2;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 44px;
  user-select: none;

  svg {
    position: absolute;
  }
`;

export const WrapperIconLogo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation-name: ${animationLogo};
  animation-duration: 15s;
  animation-iteration-count: infinite;
`;

export default Frame;
