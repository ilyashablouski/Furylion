import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { media } from '@/utils/mixin';
import { breakpoints, colors } from '@/constants/theme';
import PlaceholderCard from '@/components/PlaceholderCard';
import Picture from '@/components/Picture';

SwiperCore.use([Pagination, Navigation, Autoplay]);

type Props = {
  images: Array<ThumbnailType>;
  isRightSide: boolean;
};

function ArtSwiper({ images, isRightSide }: Props) {
  const sliderPagination = useRef<HTMLInputElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ArtSwiperContainer>
      {isMounted ? (
        <>
          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: `.swiper-prev`,
              nextEl: `.swiper-next`,
            }}
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
            // breakpoints={{
            //   [breakpoints.mobileSmall]: {
            //     spaceBetween: 0,
            //     allowTouchMove: true,
            //   },
            //   [breakpoints.tabletSmall]: {
            //     spaceBetween: 0,
            //     autoplay: false,
            //   },
            //   1230: {
            //     spaceBetween: 140,
            //     autoplay: false,
            //   },
            // }}
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Picture
                    mobileSmall={convertThumbnailToPictureImage(image)}
                    className="swiper-image-container"
                  />
                </SwiperSlide>
              );
            })}
            <NavButtons isRightSide={isRightSide}>
              <NavButton className={`swiper-prev`} prev>
                <SlideArrowIcon />
              </NavButton>
              <NavButton className={`swiper-next`} next>
                <SlideArrowIcon />
              </NavButton>
            </NavButtons>
          </Swiper>
          <ItemsPagination
            className="swiper-pagination"
            ref={sliderPagination}
          />
        </>
      ) : (
        <PlaceholderCard color="#3e3e3e" />
      )}
    </ArtSwiperContainer>
  );
}

const animation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ArtSwiperContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 750px;

  .swiper-container-initialized {
    .swiper-slide {
      display: flex;
      img {
        min-height: 750px;
        object-fit: cover;
      }
    }
  }
`;

const ItemsPagination = styled.div`
  position: absolute;
  bottom: 41px;
  left: 104px;
  width: 100%;
  max-width: 326px;

  .swiper-pagination-bullet {
    position: relative;
    max-width: 110px;
    width: 100%;
    height: 2px;
    border-radius: 0;
    background: #8c8b89;
    opacity: 1;
    border: none;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 0;
      content: '';
      background: #6b1a1a;
      opacity: 1;
    }
  }

  .swiper-pagination-bullet-active {
    position: relative;
    overflow: hidden;
    background: #8c8b89;
    border: none;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      will-change: transform;
      animation: ${animation} 4350ms linear;
    }
  }
`;

const NavButtons = styled.div<{ isRightSide?: boolean }>`
  display: flex;
  position: absolute;
  top: 50px;
  ${(props) =>
    props.isRightSide
      ? css`
          right: 50px;
        `
      : css`
          left: 50px;
        `}
`;

const NavButton = styled.button<{
  prev?: boolean;
  next?: boolean;
}>`
  ${(props) =>
    props.prev &&
    css`
      margin-right: 50px;
    `}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  transition: 150ms all ease-in-out;
  ${media.tabletSmall(css`
    display: none;
  `)}

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  svg {
    transform: ${(props) => (props.next ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  &.swiper-prev {
    svg {
      margin-right: 4px;
    }

    ${media.tablet(css`
      left: 40px;
    `)}
  }
  &.swiper-next {
    svg {
      margin-left: 4px;
    }

    ${media.tablet(css`
      right: 40px;
    `)}
  }
`;

export default ArtSwiper;
