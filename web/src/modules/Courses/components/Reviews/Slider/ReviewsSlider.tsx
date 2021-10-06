import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { css } from 'styled-components';
import SwiperCore from 'swiper';

import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import Video from '@/modules/Courses/components/Reviews/Video';
import { breakpoints, colors } from '@/constants/theme';
import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';

function ReviewsSlider() {
  const { reviewsItems } = useCoursesData();
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <Component>
      <Swiper
        onSwiper={setSwiper}
        loop={true}
        centeredSlides={true}
        spaceBetween={15}
        speed={600}
        navigation={{
          prevEl: `.swiper-prev`,
          nextEl: `.swiper-next`,
        }}
        breakpoints={{
          [breakpoints.tabletSmall]: {
            slidesPerView: 3,
          },

          [breakpoints.mobileSmall]: {
            slidesPerView: 1,
          },
        }}
      >
        {reviewsItems.map(
          ({ video, avatar, name, position, preview }, index) => (
            <SwiperSlide key={index}>
              <Video
                key={index}
                video={video}
                avatar={avatar}
                name={name}
                position={position}
                preview={preview}
                swiper={swiper}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <NavButton className={`swiper-prev`} prev>
        <SlideArrowIcon />
      </NavButton>
      <NavButton className={`swiper-next`} next>
        <SlideArrowIcon />
      </NavButton>
    </Component>
  );
}

export default ReviewsSlider;

const Component = styled.div`
  position: relative;
  margin-top: 24px;
`;

const NavButton = styled.button<{
  prev?: boolean;
  next?: boolean;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: ${colors.white};
  transition: 150ms all ease-in-out;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto 15px auto auto;

  ${(props) =>
    props.prev &&
    css`
      margin: auto auto auto 15px;
    `}

  svg {
    transform: ${(props) => (props.next ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
