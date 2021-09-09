import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';
import CoursesCard from '@/modules/Courses/components/CoursesBlock/Card';

function CoursesBlock() {
  const { coursesId, coursesTitle, coursesItems } = useCoursesData();
  const coursesLen = coursesItems.length;
  return (
    <Component id={coursesId ?? ''}>
      <TitleBlock>
        <Title>{coursesTitle}</Title>
      </TitleBlock>
      <Cards>
        {coursesItems.map(
          (
            {
              image,
              title,
              subtitle,
              termRegistrationTitle,
              termRegistrationDate,
              educationStartTitle,
              educationStartDate,
              placesLeftTitle,
              placesLeftCount,
              trainingPeriodTitle,
              trainingPeriodDate,
              isComingSoon,
            },
            index: number
          ) => (
            <CoursesCard
              image={image}
              title={title}
              subtitle={subtitle}
              termRegistrationTitle={termRegistrationTitle}
              termRegistrationDate={termRegistrationDate}
              educationStartTitle={educationStartTitle}
              educationStartDate={educationStartDate}
              placesLeftTitle={placesLeftTitle}
              placesLeftCount={placesLeftCount}
              trainingPeriodTitle={trainingPeriodTitle}
              trainingPeriodDate={trainingPeriodDate}
              isComingSoon={coursesLen === index + 1}
              key={index}
            />
          )
        )}
      </Cards>
    </Component>
  );
}

export default CoursesBlock;

const Component = styled.section`
  position: relative;
  background: ${colors.dark};
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 1920px;
  text-align: center;
  transform: translateX(-50%);
`;

const Title = styled.span`
  width: 100%;
  font-weight: 900;
  font-size: 368px;
  line-height: 75%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.desktop1366(
    css`
      font-size: 27.1vw;
    `
  )}
`;

const Cards = styled.div`
  position: relative;
  margin-top: 164px;

  & > div:nth-child(3) > div:first-child {
    min-height: 260px;

    &:after {
      background: rgba(25, 24, 20, 0.6);
      backdrop-filter: blur(7px);
    }

    ${media.desktop1366(
      css`
        min-height: inherit;
        padding-top: 19.029%;
      `
    )}
  }
`;
