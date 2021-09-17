import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';
import Video from '@/modules/Courses/components/Reviews/Video';

function Reviews() {
  const { reviewsId, reviewsTitle, reviewsItems } = useCoursesData();

  return (
    <Component id={reviewsId ?? ''}>
      <ContentContainer>
        <Title>{reviewsTitle}</Title>

        <Gallery>
          {reviewsItems.map(({ video, avatar, name, position }, index) => (
            <Video
              key={index}
              video={video}
              avatar={avatar}
              name={name}
              position={position}
            />
          ))}
        </Gallery>
      </ContentContainer>
    </Component>
  );
}

export default Reviews;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};
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
`;
