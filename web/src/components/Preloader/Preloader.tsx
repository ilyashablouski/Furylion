import React, { useEffect, useState } from 'react';

import { isBrowser, notFalsy, useUpdateEffect } from '@tager/web-core';

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
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="txt-loading">
            <span data-text-preloader="F" className="letters-loading">
              F
            </span>

            <span data-text-preloader="u" className="letters-loading">
              u
            </span>

            <span data-text-preloader="r" className="letters-loading">
              r
            </span>

            <span data-text-preloader="y" className="letters-loading">
              y
            </span>

            <span data-text-preloader="L" className="letters-loading">
              L
            </span>

            <span data-text-preloader="i" className="letters-loading">
              i
            </span>

            <span data-text-preloader="o" className="letters-loading">
              o
            </span>
            <span data-text-preloader="n" className="letters-loading">
              n
            </span>
          </div>
        </div>
      </div>
    </S.Overlay>
  );
}

export default Preloader;
