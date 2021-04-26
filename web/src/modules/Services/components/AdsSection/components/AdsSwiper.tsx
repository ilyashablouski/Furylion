import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { media } from '@/utils/mixin';
import { breakpoints, colors } from '@/constants/theme';
import Picture from '@/components/Picture';

type Props = {
  adsImages: Array<ThumbnailType>;
};

function AdsSwiper({ adsImages }: Props) {
  if (adsImages.length === 0) return null;
  // const [isMounted, setIsMounted] = useState<boolean>(false);
  //
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  return (
    <Container>
      <Swiper
        slidesPerView="auto"
        loop={true}
        centeredSlides={true}
        allowTouchMove={true}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}

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
        {adsImages.map((adsImage, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperImage
                mobileSmall={convertThumbnailToPictureImage(adsImage)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  .swiper-container-initialized {
    .swiper-slide {
      max-width: 248px;

      ${media.tabletSmallOnly(css`
        max-width: 208px;
      `)};

      ${media.mobile(css`
        max-width: 140px;
      `)};
      //transform-origin: bottom;
      //&:nth-child(1) {
      //  transform: rotate(-45deg);
      //}
      //
      //&:nth-child(2) {
      //  transform: rotate(-30deg);
      //}
      //
      //&:nth-child(3) {
      //  transform: rotate(-15deg);
      //}
      //
      //&:nth-child(4) {
      //  transform: rotate(0);
      //}
      //
      //&:nth-child(5) {
      //  transform: rotate(15deg);
      //}
      //
      //&:nth-child(6) {
      //  transform: rotate(30deg);
      //}
      //
      //&:nth-child(7) {
      //  transform: rotate(45deg);
      //}
      //
      //&:nth-child(8) {
      //  transform: rotate(60deg);
      //}
      //
      //&:nth-child(9) {
      //  transform: rotate(75deg);
      //}
      //
      //&:nth-child(10) {
      //  transform: rotate(90deg);
      //}
      //
      //&:nth-child(11) {
      //  transform: rotate(105deg);
      //}
      //
      //&:nth-child(12) {
      //  transform: rotate(120deg);
      //}
      //
      //&:nth-child(13) {
      //  transform: rotate(135deg);
      //}
      //
      //&:nth-child(14) {
      //  transform: rotate(150deg);
      //}
    }
  }
`;

const SwiperImage = styled(Picture)`
  border-radius: 30px;
  overflow: hidden;

  img {
    border-radius: 30px;
  }
`;

export default AdsSwiper;
