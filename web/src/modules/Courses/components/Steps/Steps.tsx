import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import SkewButton from '@/components/SkewButton';
import Link from '@/components/Link';
import { SingleCourseProps } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';

import StepsCard from './Card';

function Steps({ singleCourse }: SingleCourseProps) {
  const {
    stepsId,
    stepsTitle,
    stepsItems,
    chooseCourseLabel,
    chooseCourseLinkUrl,
  } = useCoursesData();

  const stepsItemsLength = stepsItems?.length;

  return (
    <Component id={stepsId ?? ''}>
      <ContentContainer>
        <Title>{stepsTitle}</Title>
        <Cards singleCourse={singleCourse} stepsItemsLength={stepsItemsLength}>
          {stepsItems &&
            stepsItems.map(
              ({ image, title, position, description }, index: number) => (
                <StepsCard
                  image={image}
                  title={title}
                  position={position}
                  description={description}
                  key={index}
                />
              )
            )}

          {singleCourse ? (
            ''
          ) : (
            <Course>
              <CourseLink to={chooseCourseLinkUrl}>
                {chooseCourseLabel}
              </CourseLink>

              <StyledSkewButton href={chooseCourseLinkUrl} color="white-black">
                {chooseCourseLabel}
              </StyledSkewButton>
            </Course>
          )}
        </Cards>
      </ContentContainer>
    </Component>
  );
}

export default Steps;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.red};
`;

const Title = styled.p`
  display: block;
  max-width: 1022px;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-align: left;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Cards = styled.div<{
  singleCourse: SingleCourseProps['singleCourse'];
  stepsItemsLength: number;
}>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 54px;

  ${media.tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${media.mobile(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
  
  ${({ singleCourse, stepsItemsLength }) =>
    singleCourse &&
    css`
      grid-template-columns: repeat(3, 1fr);

      ${media.tablet(css`
        ${stepsItemsLength % 2 === 1 &&
        css`
          & > div:last-child {
            transform: translateX(calc(50% + 10px));
          }
        `};
      `)}

      ${media.mobile(css`
        & > div:last-child {
          transform: translateX(0);
        }
      `)}
    `};
`;

const StyledSkewButton = styled(SkewButton)``;

const Course = styled.div`
  border: 15px dashed ${colors.black};
  transition: 0.3s;

  ${StyledSkewButton} {
    display: none;

    ${media.mobile(css`
      display: block;
    `)}
  }

  &:hover {
    background: ${colors.black};

    ${media.mobile(css`
      background: none;
    `)}
  }

  ${media.mobile(css`
    border: none;
  `)}
`;

const CourseLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    display: none;
  `)}
`;
