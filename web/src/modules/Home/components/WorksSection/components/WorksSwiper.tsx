import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <WorksSwiperContainer>
      <NavButton className={`swiper-prev`} prev>
        <SlideArrowIcon />
      </NavButton>
      <NavButton className={`swiper-next`} next>
        <SlideArrowIcon />
      </NavButton>

      {isMounted && (
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          speed={700}
          spaceBetween={10}
          // loop={
          //   (isDesktop && products.length > 6) ||
          //   (isLaptop && products.length > 5) ||
          //   (isLaptopOnly && products.length > 4)
          // }
          watchOverflow
          navigation={{
            prevEl: `.swiper-prev`,
            nextEl: `.swiper-next`,
          }}
          breakpoints={{
            [breakpoints.desktop]: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            [breakpoints.laptop]: {
              slidesPerView: 5,
              slidesPerGroup: 5,
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
                  tags={worksItem.tags ?? ''}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </WorksSwiperContainer>
  );
}

const WorksSwiperContainer = styled.div`
  margin-top: 55px;

  ${media.tabletSmallOnly(css`
    margin-top: 38px;
  `)}

  ${media.mobile(css`
    margin-top: 16px;
  `)}
`;

// const SwiperSlide = styled.div``;

const NavButton = styled.button<{ prev?: boolean; next?: boolean }>``;

export default WorksSwiper;
