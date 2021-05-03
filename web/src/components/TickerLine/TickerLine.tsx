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

type Props = {
  backgroundTicket?: StringFieldType;
  colorTicket?: StringFieldType;
  labelTicket?: StringFieldType;
  linkTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
  logosArray?: Array<ThumbnailType>;
  isReversed?: boolean;
  isAbove?: boolean;
};

function TickerLine({
  backgroundTicket,
  colorTicket,
  labelTicket,
  linkTicket,
  rotateTicket,
  sizeTicket,
  logosArray,
  isReversed,
  isAbove,
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

    //FIXME: Fix correct condition for two tween instance
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
      if (scrollLineElem) return scrollLineElem.clientWidth;
      return 0;
    }

    function onResize() {
      tween.restart();
      tween.invalidate();
    }

    return () => {
      window.removeEventListener('resize', onResize);
      tween.kill(scrollInnerElem);
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
          {/*<ScrollerItem colorTicket={colorTicket} className="ticker">*/}
          {/*  {labelTicket}*/}
          {/*</ScrollerItem>*/}
        </LogosWrapper>
      </ScrollerInner>
    </Container>
  );
}

const ScrollerItem = styled.li<{ colorTicket?: StringFieldType }>`
  font-weight: 600;
  font-size: 30px;
  line-height: 26px;
  white-space: nowrap;
  text-transform: uppercase;
  padding-left: 10px;
  color: ${(props) =>
    props.colorTicket ? `${props.colorTicket}` : `${colors.black}`};

  &:first-child {
    padding-left: 0;
  }
  ${media.laptop(css`
    font-size: 20px;
  `)}
`;

const Container = styled.div<{
  backgroundTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
  isReversed?: boolean;
  isAbove?: boolean;
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
