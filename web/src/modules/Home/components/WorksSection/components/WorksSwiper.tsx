import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';

import { createMediaQuery } from '@tager/web-components';
import { useMedia } from '@tager/web-core';

import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { WorksItemType } from '@/typings/model';
import { media } from '@/utils/mixin';
import { breakpoints } from '@/constants/theme';

import WorksItem from './WorksItem';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow]);

type Props = {
  worksItems: Array<WorksItemType>;
};

function WorksSwiper({ worksItems }: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  // const [isMountedLaptop, setIsMountedLaptop] = useState<boolean>(false);
  const isDesktop = useMedia(createMediaQuery({ min: breakpoints.laptop }));
  const isLaptop = useMedia(createMediaQuery({ max: 1259 }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (worksItems.length > 1 && isDesktop) {
    return (
      <WorksSwiperContainer>
        {isMounted && (
          <Swiper
            slidesPerView="auto"
            spaceBetween={140}
            loop={true}
            // loop={
            //   (isDesktop && products.length > 6) ||
            //   (isLaptop && products.length > 5) ||
            //   (isLaptopOnly && products.length > 4)
            // }
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            allowTouchMove={false}
            navigation={{
              prevEl: `.swiper-prev`,
              nextEl: `.swiper-next`,
            }}
            // breakpoints={{
            //   [breakpoints.desktop]: {
            //     slidesPerView: 6,
            //     slidesPerGroup: 6,
            //   },
            //   [breakpoints.laptop]: {
            //     slidesPerView: 5,
            //     slidesPerGroup: 5,
            //   },
            // }}
          >
            {worksItems.map((worksItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <WorksItem
                    image={worksItem.image}
                    title={worksItem.title}
                    text={worksItem.text}
                    tags={worksItem.tags ?? ''}
                  />
                </SwiperSlide>
              );
            })}

            <NavButton className={`swiper-prev`} prev>
              <SlideArrowIcon />
            </NavButton>
            <NavButton className={`swiper-next`} next>
              <SlideArrowIcon />
            </NavButton>
          </Swiper>
        )}
      </WorksSwiperContainer>
    );
  } else if (worksItems.length > 1 && isLaptop) {
    return (
      <WorksSwiperContainer>
        {isMounted && (
          <Swiper
            slidesPerView="auto"
            spaceBetween={140}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
          >
            {worksItems.map((worksItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <WorksItem
                    image={worksItem.image}
                    title={worksItem.title}
                    text={worksItem.text}
                    tags={worksItem.tags ?? ''}
                  />
                </SwiperSlide>
              );
            })}

            <NavButton className={`swiper-prev`} prev>
              <SlideArrowIcon />
            </NavButton>
            <NavButton className={`swiper-next`} next>
              <SlideArrowIcon />
            </NavButton>
          </Swiper>
        )}
      </WorksSwiperContainer>
    );
  } else {
    return (
      <WorksSwiperContainer>
        {worksItems.map((worksItem, index) => {
          return (
            <SwiperSlide key={index}>
              <WorksItem
                image={worksItem.image}
                title={worksItem.title}
                text={worksItem.text}
                tags={worksItem.tags ?? ''}
              />
            </SwiperSlide>
          );
        })}
      </WorksSwiperContainer>
    );
  }
}

const WorksSwiperContainer = styled.div`
  margin-top: 55px;

  ${media.tabletSmallOnly(css`
    margin-top: 38px;
  `)}
  ${media.mobile(css`
    margin-top: 16px;
  `)}
  
  .swiper-container-initialized {
    .swiper-slide {
      max-width: 1230px;
    }
  }
}
`;

const NavButton = styled.button<{ prev?: boolean; next?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.prev ? '7%' : 'auto')};
  right: ${(props) => (props.next ? '7%' : 'auto')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  transition: 150ms all ease-in-out;

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

export default WorksSwiper;
