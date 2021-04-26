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
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
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
            {adsHeadItems.map((adsHeadItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <AdsHeadItem>
                    <Picture
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
  .swiper-container-initialized {
    .swiper-slide {
    }
  }
`;

const AdsHeadItem = styled.div``;

const ItemLink = styled(Link)``;
