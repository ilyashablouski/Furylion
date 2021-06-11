import React, { useEffect, useState } from 'react';

import { isBrowser, notFalsy, useUpdateEffect } from '@tager/web-core';

import { ReactComponent as BlackLogo } from '@/assets/svg/preloader/black-logo.svg';
import { ReactComponent as RedLogo } from '@/assets/svg/preloader/red-logo.svg';

import { isPreloaderEnabled } from './Preloder.helpers';
import * as S from './Preloader.styles';

declare global {
  interface Window {
    isPreloaderHidden: boolean | undefined;
  }
}

type PreloaderStatus = 'VISIBLE' | 'FADING_OUT' | 'HIDDEN';

type Props = {
  hidden?: boolean;
  className?: string;
  debug?: boolean;
};

function Preloader({ hidden: hiddenProp, className, debug }: Props) {
  const isControlled = hiddenProp !== undefined;

  function isInitiallyVisible(): boolean {
    const isVisible = isBrowser()
      ? isPreloaderEnabled() && !window.isPreloaderHidden
      : isPreloaderEnabled();

    return isControlled ? !hiddenProp : isVisible;
  }

  const [status, setStatus] = useState<PreloaderStatus>(
    isInitiallyVisible() ? 'VISIBLE' : 'HIDDEN'
  );

  useEffect(() => {
    if (!debug) return;
  }, [debug]);

  useEffect(() => {
    if (!debug) return;
  }, [debug, status]);

  function handleAnimationEnd(): void {
    setStatus('HIDDEN');
  }

  useUpdateEffect(() => {
    if (isControlled) {
      setStatus(hiddenProp ? 'FADING_OUT' : 'VISIBLE');
    }
  }, [hiddenProp, isControlled]);

  useEffect(() => {
    if (isControlled || status !== 'VISIBLE') return;

    function hidePreloader() {
      setStatus('FADING_OUT');
      window.isPreloaderHidden = true;
    }

    if (document.readyState !== 'loading') {
      hidePreloader();
      return;
    }

    document.addEventListener('DOMContentLoaded', hidePreloader);

    return () => {
      document.removeEventListener('DOMContentLoaded', hidePreloader);
    };
  }, [isControlled]);

  if (status === 'HIDDEN') {
    return null;
  }

  const containerClassName = [
    status === 'FADING_OUT' ? 'fade-out' : undefined,
    className,
  ]
    .filter(notFalsy)
    .join(' ');

  return (
    <S.Overlay
      className={containerClassName}
      onAnimationEnd={handleAnimationEnd}
      data-preloader-overlay
    >
      <S.Inner>
        <BlackLogo />
        <S.WrapperIconLogo>
          <RedLogo />
        </S.WrapperIconLogo>
      </S.Inner>
    </S.Overlay>
  );
}

export default Preloader;
