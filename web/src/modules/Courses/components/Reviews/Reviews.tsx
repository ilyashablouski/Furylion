import React from 'react';
import styled, { css } from 'styled-components';

import { useMedia } from '@tager/web-core';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';
import Video from '@/modules/Courses/components/Reviews/Video';
import ReviewsSlider from '@/modules/Courses/components/Reviews/Slider';

function Reviews() {
  const { reviewsId, reviewsTitle, reviewsItems } = useCoursesData();
  const tabletMedia = useMedia('(max-width: 1260px)');

  return (
    <Component id={reviewsId ?? ''}>
      <CustomContentContainer>
        <Title>{reviewsTitle}</Title>
        {tabletMedia ? (
          <ReviewsSlider />
        ) : (
          <Gallery>
            {reviewsItems &&
              reviewsItems.map(
                ({ video, avatar, name, position, preview }, index) => (
                  <Video
                    key={index}
                    video={video}
                    avatar={avatar}
                    name={name}
                    position={position}
                    preview={preview}
                  />
                )
              )}
          </Gallery>
        )}
      </CustomContentContainer>
    </Component>
  );
}

export default Reviews;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};

  ${media.tablet(css`
    padding: 30px 0 70px 0;
  `)}
`;

const CustomContentContainer = styled(ContentContainer)`
  ${media.tablet(css`
    padding: 0;
  `)}

  ${media.mobile(css`
    padding: 0 20px;
  `)}
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    text-align: left;
  `)}
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
  margin-top: 149px;

  & > div:nth-of-type(4n + 2) {
    transform: translateY(237px);
  }

  & > div:nth-of-type(4n + 3) {
    transform: translateY(-95px);
  }
`;
