import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import { AdsHeadItemType } from '@/typings/model';
import { media } from '@/utils/mixin';
import { breakpoints, colors } from '@/constants/theme';
import PlaceholderCard from '@/components/PlaceholderCard';
import Picture from '@/components/Picture';
import Link from '@/components/Link';
import SimplePlaceholder from '@/components/SimplePlaceholder';

SwiperCore.use([EffectCoverflow]);

type Props = {
  adsHeadItems: Array<AdsHeadItemType>;
};

function AdsHeadSwiper({ adsHeadItems }: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Container>
      {isMounted ? (
        <>
          <Swiper
            slidesPerView="auto"
            loop={true}
            centeredSlides={true}
            allowTouchMove={true}
            effect="coverflow"
            breakpoints={{
              [breakpoints.mobileSmall]: {
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 2,
                  slideShadows: false,
                },
              },
              [breakpoints.tabletSmall]: {
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 110,
                  modifier: 1,
                  slideShadows: false,
                },
              },

              1023: {
                spaceBetween: 80,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 110,
                  modifier: 1,
                  slideShadows: false,
                },
              },
            }}
          >
            {adsHeadItems.map((adsHeadItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <AdsHeadItem>
                    <AdsHeadPicture
                      mobileSmall={convertThumbnailToPictureImage(
                        adsHeadItem.image
                      )}
                    />
                    <ItemLink to={adsHeadItem.linkUrl ?? '#'} target="_blank" />
                  </AdsHeadItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        <SimplePlaceholder color="transparent" height={250} />
      )}
    </Container>
  );
}

export default AdsHeadSwiper;

const Container = styled.div`
  margin-top: 30px;
  min-height: 813px;
  ${media.tabletSmallOnly(css`
    margin-top: 70px;
    min-height: 676px;
  `)}

  ${media.mobile(css`
    margin-top: 46px;
    min-height: 485px;
  `)}

  .swiper-container-initialized {
    padding-bottom: 175px;

    .swiper-wrapper {
      will-change: transform;
    }

    .swiper-slide {
      width: 295px;
      height: 638px;
      border-radius: 30px;
      will-change: transform;

      ${media.tabletSmallOnly(css`
        width: 228px;
        height: 501px;
        border-radius: 22px;
      `)}

      ${media.mobile(css`
        width: 140px;
        height: 310px;
        border-radius: 11px;
      `)}
    }
  }
`;

const AdsHeadItem = styled.div`
  height: 100%;
  border-radius: 30px;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.21),
    0px 52.2782px 44.658px rgba(0, 0, 0, 0.150959),
    0px 33.0459px 33.3517px rgba(0, 0, 0, 0.125183),
    0px 21.118px 26.035px rgba(0, 0, 0, 0.105),
    0px 12.6549px 18.9822px rgba(0, 0, 0, 0.0848175),
    0px 5.97057px 10.6103px rgba(0, 0, 0, 0.0590406);
`;

const AdsHeadPicture = styled(Picture)`
  position: relative;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  background: #3e3e3e;

  ${media.tabletSmallOnly(css`
    border-radius: 22px;
  `)}
  ${media.mobile(css`
    border-radius: 11px;
  `)}

  picture {
    width: 100%;
    height: 100%;
  }

  img {
    border-radius: 30px;
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${media.tabletSmallOnly(css`
      border-radius: 22px;
    `)}

    ${media.mobile(css`
      border-radius: 11px;
    `)}
  }
`;

const ItemLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
