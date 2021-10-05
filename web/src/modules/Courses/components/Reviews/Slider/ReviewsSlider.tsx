import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import SwiperCore from 'swiper';

import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import Video from '@/modules/Courses/components/Reviews/Video';
import { breakpoints } from '@/constants/theme';

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
    </Component>
  );
}

export default ReviewsSlider;

const Component = styled.div`
  margin-top: 24px;
`;
