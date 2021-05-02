import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { gsap } from 'gsap';

import { generateNumberArray } from '@tager/web-core';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { StringFieldType } from '@/typings/common';

import { createIntersectionObserver } from './TickerLine.helpers';

type Props = {
  backgroundTicket?: StringFieldType;
  colorTicket?: StringFieldType;
  labelTicket?: StringFieldType;
  linkTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
};

function TickerLine({
  backgroundTicket,
  colorTicket,
  labelTicket,
  linkTicket,
  rotateTicket,
  sizeTicket,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollInnerRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    const scrollLineElem = scrollLineRef.current;
    const scrollInnerElem = scrollInnerRef.current;
    if (!containerElem || !scrollInnerElem || !scrollLineElem) return;

    const tickerElem = containerElem.querySelector('.ticker');
    if (!tickerElem) return;

    const fragment = new DocumentFragment();
    generateNumberArray(2).forEach(() => {
      fragment.append(tickerElem.cloneNode(true));
    });
    scrollLineElem.append(fragment);
    scrollInnerElem.append(scrollLineElem.cloneNode(true));

    const tween = gsap.to(scrollInnerElem, {
      duration: () => getScrollLineWidth() / 150,
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
    <Component
      backgroundTicket={backgroundTicket}
      rotateTicket={rotateTicket}
      sizeTicket={sizeTicket}
      ref={containerRef}
    >
      {linkTicket ? <ComponentLink href={linkTicket} /> : null}
      <ScrollerInner ref={scrollInnerRef}>
        <ScrollLine ref={scrollLineRef}>
          <ScrollerItem colorTicket={colorTicket} className="ticker">
            {labelTicket}
          </ScrollerItem>
        </ScrollLine>
      </ScrollerInner>
    </Component>
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

const Component = styled.div<{
  backgroundTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
}>`
  width: calc(100% + 80px);
  position: relative;
  left: -40px;
  right: -30px;
  height: 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 3;

  background: ${(props) =>
    props.backgroundTicket ? `${props.backgroundTicket}` : `${colors.white}`};

  transform: rotate(
    ${(props) => (props.rotateTicket ? `${props.rotateTicket}deg` : '0deg')}
  );

  ${media.laptop(css`
    height: 58px;
    width: calc(100% + 60px);
    left: -30px;
    right: -30px;
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

const ScrollLine = styled.ul`
  display: flex;
`;

export default TickerLine;
