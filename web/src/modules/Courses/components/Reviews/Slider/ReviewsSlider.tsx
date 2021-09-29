import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import Video from '@/modules/Courses/components/Reviews/Video';
import { breakpoints } from '@/constants/theme';

function ReviewsSlider() {
  const { reviewsItems } = useCoursesData();

  return (
    <Component>
      <Swiper
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
