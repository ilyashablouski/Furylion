import React, { RefObject, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import {
  Container,
  Logo,
  LogosWrapper,
  ScrollerInner,
  Row,
} from './TikcerLine.styles';

interface DoubleTickerLineType {
  firstLogosArray?: Array<ThumbnailType>;
  secondLogosArray?: Array<ThumbnailType>;
  firstTickerIsReserved?: boolean;
  secondTickerIsReserved?: boolean;
  firstTickerRotation: string;
  secondTickerRotation: string;
  firstTickerBg?: string;
  secondTickerBg?: string;
  firstTickerSize?: string;
  secondTickerSize?: string;
  firstTickerIsAbove?: boolean;
  secondTickerIsAbove?: boolean;
}

function DoubleTickerLine({
  firstLogosArray,
  firstTickerBg,
  firstTickerIsReserved,
  firstTickerRotation,
  secondLogosArray,
  secondTickerBg,
  secondTickerIsReserved,
  secondTickerRotation,
  firstTickerSize,
  secondTickerSize,
  firstTickerIsAbove,
  secondTickerIsAbove,
}: DoubleTickerLineType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const refsTickerList = useRef<Array<RefObject<HTMLDivElement>>>(
    Array.from({ length: 2 }).map(() => React.createRef())
  );

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
        refsTickerList.current[0].current,
        {
          x: () => getTickerOffset(refsTickerList.current[0]),
          ease: 'linear',
        },
        0
      );
      tl.to(
        refsTickerList.current[1].current,
        {
          x: () => -getTickerOffset(refsTickerList.current[1]),
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

  const ticketLineList = [
    {
      isReserved: firstTickerIsReserved,
      rotateTicket: firstTickerRotation,
      logosArray: firstLogosArray,
      backgroundTicket: firstTickerBg,
      isAbove: firstTickerIsAbove,
      sizeTicket: firstTickerSize,
    },
    {
      isReserved: secondTickerIsReserved,
      rotateTicket: secondTickerRotation,
      logosArray: secondLogosArray,
      backgroundTicket: secondTickerBg,
      isAbove: secondTickerIsAbove,
      sizeTicket: secondTickerSize,
    },
  ];

  return (
    <Wrapper ref={containerRef}>
      {ticketLineList.map((ticker, index) => (
        <Row>
          <Container
            backgroundTicket={ticker.backgroundTicket}
            rotateTicket={ticker.rotateTicket}
            isReversed={ticker.isReserved}
            isAbove={ticker.isAbove}
            sizeTicket={ticker.sizeTicket}
            positionLeft={index === 1}
          >
            <ScrollerInner ref={refsTickerList.current[index]}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <LogosWrapper sizeTicket={ticker.sizeTicket}>
                  {ticker.logosArray
                    ? ticker.logosArray.map((logo, index) => (
                        <Logo
                          key={index}
                          mobileSmall={convertThumbnailToPictureImage(logo)}
                          className="ticker"
                        />
                      ))
                    : null}
                  {ticker.logosArray
                    ? ticker.logosArray.map((logo, index) => (
                        <Logo
                          key={index}
                          mobileSmall={convertThumbnailToPictureImage(logo)}
                          className="ticker"
                        />
                      ))
                    : null}
                </LogosWrapper>
              </div>
            </ScrollerInner>
          </Container>
        </Row>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default DoubleTickerLine;
