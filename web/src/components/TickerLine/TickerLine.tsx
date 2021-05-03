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
};

function TickerLine({
  backgroundTicket,
  colorTicket,
  labelTicket,
  linkTicket,
  rotateTicket,
  sizeTicket,
  logosArray,
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
    >
      {linkTicket ? <ComponentLink href={linkTicket} /> : null}
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
}>`
  margin: 0 -20px;
  display: flex;
  align-items: center;
  height: 150px;

  background: ${(props) =>
    props.backgroundTicket ? `${props.backgroundTicket}` : `${colors.white}`};

  transform: rotate(
    ${(props) => (props.rotateTicket ? `${props.rotateTicket}deg` : '0deg')}
  );

  ${media.tabletSmall(css`
    margin-top: 30px;
  `)}

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'large'
      ? css`
          height: 150px;

          ${ScrollerItem} {
            font-weight: bold;
            font-size: 110px;
            line-height: 80px;
          }

          ${media.laptop(css`
            height: 120px;
            ${ScrollerItem} {
              font-weight: bold;
              font-size: 80px;
              line-height: 80px;
            }
          `)}
        `
      : props.sizeTicket === 'middle'
      ? css`
          height: 140px;

          ${ScrollerItem} {
            font-weight: bold;
            font-size: 100px;
            line-height: 100px;
          }

          ${media.laptop(css`
            height: 120px;
            ${ScrollerItem} {
              font-weight: bold;
              font-size: 80px;
              line-height: 80px;
            }
          `)}
        `
      : ''}
`;

const ComponentLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
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

  ${(props) =>
    props.sizeTicket === 'large'
      ? css`
          height: 150px;

          ${media.laptop(css`
            height: 120px;
          `)}
        `
      : props.sizeTicket === 'middle'
      ? css`
          height: 140px;

          ${media.laptop(css`
            height: 120px;
          `)}
        `
      : ''}
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
