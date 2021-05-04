import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { gsap } from 'gsap';

import { generateNumberArray } from '@tager/web-core';
import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { StringFieldType } from '@/typings/common';
import PlainPicture from '@/components/Picture';

import { createIntersectionObserver } from './TickerLine.helpers';

interface Props {
  backgroundTicket?: StringFieldType;
  colorTicket?: StringFieldType;
  linkTicket?: StringFieldType;
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
  const scrollInnerRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    const scrollLineElem = scrollLineRef.current;
    const scrollInnerElem = scrollInnerRef.current;
    if (!containerElem || !scrollInnerElem || !scrollLineElem) return;

    const tickerElem = containerElem.querySelector('.ticker');
    if (!tickerElem) return;

    const fragment = new DocumentFragment();
    generateNumberArray(0).forEach(() => {
      fragment.append(tickerElem.cloneNode(true));
    });
    scrollLineElem.append(fragment);
    scrollInnerElem.append(scrollLineElem.cloneNode(true));

    const tween = gsap.to(scrollInnerElem, {
      duration: () => getScrollLineWidth() / 90,
      x: () => -getScrollLineWidth(),
      ease: 'none',
      repeat: -1,
      reversed: isReversed,
    });

    window.addEventListener('resize', onResize);

    const observer = createIntersectionObserver(tween);
    observer?.observe(containerElem);

    function getScrollLineWidth() {
      const scrollLineElem = scrollLineRef.current;
      if (scrollLineElem) {
        return scrollLineElem.clientWidth;
      }
      return 0;
    }

    function onResize() {
      tween.restart();
    }

    return () => {
      window.removeEventListener('resize', onResize);
      tween.kill();
      observer?.disconnect();
    };
  }, []);

  return (
    <Container
      backgroundTicket={backgroundTicket}
      rotateTicket={rotateTicket}
      sizeTicket={sizeTicket}
      ref={containerRef}
      isReversed={isReversed}
      isAbove={isAbove}
      isLabelTicket={isLabelTicket}
    >
      <ScrollerInner ref={scrollInnerRef}>
        <LogosWrapper ref={scrollLineRef} sizeTicket={sizeTicket}>
          {logosArray
            ? logosArray.map((logo, index) => (
                <Logo
                  key={index}
                  mobileSmall={convertThumbnailToPictureImage(logo)}
                  className="ticker"
                />
              ))
            : null}
          {logosArray
            ? logosArray.map((logo, index) => (
                <Logo
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

const ScrollerItem = styled.li<{ isLabelTicket?: boolean }>`
  ${(props) =>
    props.isLabelTicket &&
    css`
      display: flex;
    `}
`;

const Container = styled.div<{
  backgroundTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
  isReversed?: boolean;
  isAbove?: boolean;
  isLabelTicket?: boolean;
}>`
  margin: 0 -20px;
  display: flex;
  align-items: center;
  height: 150px;
  ${(props) =>
    props.isAbove &&
    css`
      position: relative;
      z-index: 2;
    `}

  ${(props) =>
    props.isLabelTicket &&
    css`
      height: auto !important;
      transform: none !important;
      ${LogosWrapper} {
        height: auto;
      }
    `}

  background: ${(props) =>
    props.backgroundTicket ? `${props.backgroundTicket}` : `${colors.white}`};

  transform: rotate(
    ${(props) => (props.rotateTicket ? `${props.rotateTicket}deg` : '0deg')}
  );

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'middle' &&
    css`
      ${media.tabletSmallOnly(css`
        height: 98px;
      `)}

      ${media.mobile(css`
        height: 65px;
      `)}
    `}
`;

const ScrollerInner = styled.div`
  position: relative;
  display: flex;
`;

const LogosWrapper = styled.div<{
  sizeTicket?: StringFieldType;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'middle' &&
    css`
      ${media.tabletSmallOnly(css`
        height: 98px;
      `)}

      ${media.mobile(css`
        height: 65px;
      `)}
    `}
`;

const Logo = styled(PlainPicture)`
  padding: 0 50px;

  ${media.tabletSmallOnly(css`
    padding: 0 35px;
  `)}

  ${media.mobile(css`
    padding: 0 15px;
  `)}

  img {
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    max-height: 90px;
    max-width: initial;

    ${media.tabletSmallOnly(css`
      max-height: 55px;
    `)}

    ${media.mobile(css`
      max-height: 25px;
    `)}
  }
`;

export default TickerLine;
