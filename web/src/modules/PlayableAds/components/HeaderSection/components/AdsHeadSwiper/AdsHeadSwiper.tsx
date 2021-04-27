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
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 60,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              [breakpoints.mobileSmall]: {
                spaceBetween: 0,
              },
              [breakpoints.tabletSmall]: {
                spaceBetween: 70,
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
                    <ItemLink to={adsHeadItem.linkUrl ?? '#'} />
                  </AdsHeadItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : null}
    </Container>
  );
}

export default AdsHeadSwiper;

const Container = styled.div`
  margin-top: 35px;
  min-height: 813px;
  .swiper-container-initialized {
    padding-bottom: 175px;
    .swiper-slide {
      max-width: 295px;
      max-height: 638px;
      border-radius: 30px;
    }
  }
`;

const AdsHeadItem = styled.div`
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
  border-radius: 30px;
  overflow: hidden;

  img {
    border-radius: 30px;
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
