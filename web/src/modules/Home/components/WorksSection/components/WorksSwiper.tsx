import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';

import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { WorksItemType } from '@/typings/model';
import { media } from '@/utils/mixin';
import { breakpoints, colors } from '@/constants/theme';
import PlaceholderCard from '@/components/PlaceholderCard';

import WorksItem from './WorksItem';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow]);

type Props = {
  worksItems: Array<WorksItemType>;
};

function WorksSwiper({ worksItems }: Props) {
  const sliderPagination = useRef<HTMLInputElement>(null);
  const [isMountedSwiper, setIsMountedSwiper] = useState<boolean>(false);

  useEffect(() => {
    setIsMountedSwiper(true);
  }, []);

  return (
    <WorksSwiperContainer>
      {isMountedSwiper ? (
        <>
          <Swiper
            slidesPerView="auto"
            loop={true}
            centeredSlides={true}
            allowTouchMove={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              prevEl: `.swiper-prev`,
              nextEl: `.swiper-next`,
            }}
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              [breakpoints.mobileSmall]: {
                spaceBetween: 0,
                allowTouchMove: true,
              },
              [breakpoints.tabletSmall]: {
                spaceBetween: 0,
                autoplay: false,
              },
              1230: {
                spaceBetween: 140,
                autoplay: false,
              },
            }}
          >
            {worksItems.map((worksItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <WorksItem
                    image={worksItem.image}
                    title={worksItem.title}
                    text={worksItem.text}
                    logos={worksItem.logos}
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
          <ItemsPagination
            className="swiper-pagination"
            ref={sliderPagination}
          />
        </>
      ) : (
        <PlaceholderCard color="#3e3e3e" />
      )}
    </WorksSwiperContainer>
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

const ItemsPagination = styled.div`
  position: absolute;
  bottom: 41px;
  left: 50%;
  transform: translateX(-50%);

  ${media.tabletSmallOnly(css`
    display: none;
  `)}
  ${media.mobile(css`
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateX(0);
  `)}
  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background: ${colors.black};
    border: 0.2px solid rgba(255, 255, 255, 0.78);
    border-radius: 50%;
    opacity: 1;
    box-sizing: content-box;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: white;
      opacity: 0.6;
    }

    &:not(:first-child) {
      margin-left: 15px;
    }

    ${media.mobile(css`
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
    `)}
  }

  .swiper-pagination-bullet-active {
    background: ${colors.white};
    border: 0.2px solid rgba(255, 255, 255, 1);
    ${media.mobile(css`
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
    `)}
  }
`;

const WorksSwiperContainer = styled.div`
  position: relative;
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
  color: ${colors.red};
  border-radius: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  transition: 150ms all ease-in-out;

  ${media.mobile(css`
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

export default WorksSwiper;
