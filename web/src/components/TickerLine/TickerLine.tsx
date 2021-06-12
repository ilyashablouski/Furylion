import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import { StringFieldType } from '@/typings/common';

import {
  Container,
  ScrollerInner,
  LogosWrapper,
  Logo,
  ScrollerItem,
} from './TikcerLine.styles';

interface Props {
  backgroundTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
  logosArray?: Array<ThumbnailType>;
  isReversed?: boolean;
  isAbove?: boolean;
  isLabelTicket?: boolean;
  children?: React.ReactNode | string;
}

function TickerLine({
  backgroundTicket,
  rotateTicket,
  sizeTicket,
  logosArray,
  isReversed,
  isAbove,
  isLabelTicket,
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstTickerLine = useRef<HTMLDivElement>(null);

  function getTickerOffset(tickerRef: React.RefObject<HTMLDivElement>) {
    const tickerElem = tickerRef.current;
    const containerElem = containerRef.current;
    if (!tickerElem || !containerElem) return 0;

    return containerElem.clientWidth - tickerElem.offsetWidth;
  }

  useEffect(() => {
    let tl: gsap.core.Timeline;

    const delayCall = gsap.delayedCall(0, () => {
      if (!containerRef.current) return;

      tl = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          start: 'top 70%',
          invalidateOnRefresh: true,
          trigger: containerRef.current,
          scrub: true,
        },
      });
      tl.to(
        firstTickerLine.current,
        {
          x: () =>
            isReversed
              ? getTickerOffset(firstTickerLine)
              : -getTickerOffset(firstTickerLine),
          ease: 'linear',
        },
        0
      );
    });

    return () => {
      delayCall.kill();
      tl?.kill();
    };
  }, []);

  return (
    <Container
      backgroundTicket={backgroundTicket}
      rotateTicket={rotateTicket}
      sizeTicket={sizeTicket}
      isReversed={isReversed}
      isAbove={isAbove}
      isLabelTicket={isLabelTicket}
      ref={containerRef}
    >
      <ScrollerInner ref={firstTickerLine}>
        <LogosWrapper sizeTicket={sizeTicket} isLabelTicket={isLabelTicket}>
          {logosArray
            ? logosArray.map((logo, index) => (
                <Logo
                  loading={'lazy'}
                  key={index}
                  mobileSmall={convertThumbnailToPictureImage(logo)}
                  className="ticker"
                />
              ))
            : null}
          {logosArray
            ? logosArray.map((logo, index) => (
                <Logo
                  loading={'lazy'}
                  key={index}
                  mobileSmall={convertThumbnailToPictureImage(logo)}
                  className="ticker"
                />
              ))
            : null}
          {children && (
            <ScrollerItem isLabelTicket={isLabelTicket} className="ticker">
              {children}
            </ScrollerItem>
          )}
        </LogosWrapper>
      </ScrollerInner>
    </Container>
  );
}

export default TickerLine;
