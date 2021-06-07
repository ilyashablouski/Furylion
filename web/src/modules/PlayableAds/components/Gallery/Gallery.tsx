import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { convertThumbnailToPictureImage } from '@tager/web-modules';
import { useModal } from '@tager/web-components';

import { AdsHeadItemType } from '@/typings/model';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';
import Game from '@/modules/PlayableAds/components/Game';
import { ReactComponent as ArrowNavigation } from '@/assets/svg/slide-arrow.svg';
import { breakpoints, colors } from '@/constants/theme';

interface Props {
  isRevert?: boolean;
  itemList: Array<AdsHeadItemType>;
}

SwiperCore.use([Navigation]);

function Gallery({ isRevert = false, itemList }: Props) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = useModal();

  function onClick() {
    openModal(Game, {});
  }

  return (
    <Component>
      <Wrapper isRevert={isRevert}>
        {isMounted ? (
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={25}
            loop={true}
            allowTouchMove={true}
            navigation={{
              prevEl: `.swiper-prev`,
              nextEl: `.swiper-next`,
            }}
            breakpoints={{
              [breakpoints.mobileSmall]: {
                spaceBetween: 10,
              },
              [breakpoints.mobileLarge]: {
                spaceBetween: 25,
              },
            }}
          >
            {itemList.map((item, index) => {
              return (
                <SwiperSlide key={index} onClick={onClick}>
                  <Card>
                    <Picture
                      useSpinner
                      {...convertThumbnailToPictureImage(item.image)}
                    />
                  </Card>
                </SwiperSlide>
              );
            })}
            <NavButton position={'left'} className={'swiper-prev'}>
              <ArrowNavigation />
            </NavButton>
            <NavButton position={'right'} className={'swiper-next'}>
              <ArrowNavigation />
            </NavButton>
          </Swiper>
        ) : null}
      </Wrapper>
    </Component>
  );
}

const Component = styled.div`
  position: relative;
  padding: 15px 0;
`;

const Wrapper = styled.div<{ isRevert: boolean }>`
  margin-left: ${({ isRevert }) => (isRevert ? '-5%' : 'initial')};

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

  width: 100px;
  z-index: 10;
  top: 0;
  bottom: 0;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 3%;
        `
      : css`
          right: 3%;
          transform: rotate(180deg);
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
    -webkit-box-shadow: 0px 0px 50px 21px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 0px 50px 21px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 0px 50px 21px rgba(0, 0, 0, 0.21);

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
