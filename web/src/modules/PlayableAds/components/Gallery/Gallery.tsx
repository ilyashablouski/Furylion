import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import gsap from 'gsap';

import { convertThumbnailToPictureImage } from '@tager/web-modules';
import { useModal } from '@tager/web-components';
import { useMedia } from '@tager/web-core';

import { AdsHeadItemType } from '@/typings/model';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';
import Game from '@/modules/PlayableAds/components/Game';
import { breakpoints, colors } from '@/constants/theme';

interface Props {
  isRevert?: boolean;
  itemList: Array<AdsHeadItemType>;
}

SwiperCore.use([Navigation]);

function Gallery({ isRevert = false, itemList }: Props) {
  const innerWrapperRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const firstCardRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  const isMobile = useMedia(`(max-width: ${breakpoints.mobileLarge}px)`);

  useEffect(() => {
    const wrapper = innerWrapperRef.current;
    const component = componentRef.current;
    const firstElement = firstCardRef.current;
    const lastElement = lastCardRef.current;
    let tl: gsap.core.Timeline;

    if (!wrapper || !component || !firstElement || !lastElement) return;

    let leftScroll: number = 0;
    let rightScroll: number = 0;
    const duration = isMobile ? 15 : 10;

    const widthComponent = component.getBoundingClientRect().width;

    const coordinateFirstElement = firstElement.getBoundingClientRect();
    const leftPositionFirstElement = coordinateFirstElement.left;

    const coordinateLastElement = lastElement.getBoundingClientRect();
    const leftPositionLastElement = coordinateLastElement.left;
    const widthLastElement = coordinateLastElement.width;

    leftScroll =
      leftPositionLastElement - (widthComponent - widthLastElement) + 100;
    rightScroll = leftPositionFirstElement - 100;

    const resultRightScroll =
      Math.sign(rightScroll) === -1 ? -rightScroll : rightScroll;

    tl = gsap.timeline({
      defaults: {
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        duration: duration,
      },
    });

    if (isRevert) {
      tl.to(wrapper, {
        ease: 'linear',
        x: `${-leftScroll}px`,
      });

      tl.to(wrapper, {
        ease: 'linear',
        x: `${resultRightScroll}px`,
      });
    } else {
      tl.to(wrapper, {
        ease: 'linear',
        x: `${resultRightScroll}px`,
      });
      tl.to(wrapper, {
        ease: 'linear',
        x: `${-leftScroll}px`,
      });
    }

    return () => {
      tl?.kill();
    };
  }, []);

  const openModal = useModal();

  function onClick(gameDescription: string, gameTitle: string, url: string) {
    openModal(Game, { gameDescription, gameTitle, url });
  }

  return (
    <Component ref={componentRef}>
      <Wrapper isRevert={isRevert}>
        <WrapperInner ref={innerWrapperRef} isRevert={isRevert}>
          {itemList.map((item, index) => {
            const ref =
              index === 0
                ? firstCardRef
                : index !== itemList.length - 1
                ? null
                : lastCardRef;
            return (
              <Card
                ref={ref}
                onClick={() =>
                  onClick(
                    item.gameDescription ?? '',
                    item.gameTitle ?? '',
                    item.linkUrl ?? ''
                  )
                }
              >
                <Picture
                  useSpinner
                  {...convertThumbnailToPictureImage(item.image)}
                />
              </Card>
            );
          })}
        </WrapperInner>
      </Wrapper>
    </Component>
  );
}

const Component = styled.div`
  position: relative;
  padding: 15px 0;
`;

// const AnimationIsNotRevert = keyframes`
//   0% {
//     transform: translateX(-10%);
//   }
//   50% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-10%);
//   }
// `;
//
// const AnimationIsRevert = keyframes`
//   0% {
//     transform: translateX(10%);
//   }
//   50% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(10%);
//   }
// `;

const WrapperInner = styled.div<{ isRevert: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ${(props) =>
//   props.isRevert
//     ? css`
//         animation-name: ${AnimationIsRevert};
// animation-duration: 40s;
// animation-iteration-count: infinite;
// `
//       : css`
// animation-name: ${AnimationIsNotRevert};
// animation-duration: 40s;
// animation-iteration-count: infinite;
// `}

const Wrapper = styled.div<{ isRevert: boolean }>`
  margin-left: ${({ isRevert }) => (isRevert ? '-5%' : 'initial')};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isRevert
      ? css`
          margin-left: -5%;
          ${media.tabletSmall(css`
            transform: translateX(30%);
          `)}
        `
      : css`
          margin-left: initial;
          ${media.tabletSmall(css`
            transform: translateX(15%);
          `)}
        `}
  ${media.mobileMedium(css`
    transform: translateX(13%);
    margin-left: 0 !important;
  `)}
  .swiper-slide {
    width: 468px !important;

    ${media.mobile(css`
      width: 294px !important;
    `)}
  }

  .swiper-container {
    position: initial;
    overflow: initial;
  }
`;

const NavButton = styled.button<{
  position: 'left' | 'right';
}>`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: ${colors.red};
  border-radius: 50%;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 3%;

          svg {
            margin-left: -5px;
          }
        `
      : css`
          right: 3%;
          transform: translateY(-50%) rotate(180deg);

          svg {
            margin-left: -5px;
          }
        `}
  ${media.tabletSmall(css`
    display: none;
  `)}
  svg path {
    fill: #ccc;
    transition: fill 0.3s linear;
  }

  &:hover {
    svg path {
      fill: ${colors.red};
    }
  }
`;

const Card = styled.div`
  max-width: 468px;
  flex: 1 1 100%;
  width: 100%;
  margin-right: 20px;

  transition: all 0.2s linear;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.05);
  }

  img {
    object-fit: cover;
    cursor: pointer;
    max-width: initial;
    border-radius: 22px;
    box-shadow: 0px 0px 20px 2px rgb(0 0 0 / 50%);

    ${media.mobile(css`
      max-width: 294px;
      height: 165px;
    `)}
    ${media.mobileMedium(css`
      width: 288px;
      height: 160px;
    `)}
  }
`;

export default Gallery;
