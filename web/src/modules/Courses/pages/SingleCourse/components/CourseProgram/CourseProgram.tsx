import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';

import AccordionCard from './AccordionCard';

function CourseProgram() {
  const {
    courseProgramId,
    courseProgramTitle,
    courseProgramDescription,
    courseProgramItems,
  } = useSingleCourseData();

  return (
    <Component id={courseProgramId ?? ''}>
      <ContentContainer>
        <Header>
          <Title>{courseProgramTitle}</Title>
          <Description>{courseProgramDescription}</Description>
        </Header>

        <Cards>
          {courseProgramItems &&
            courseProgramItems.map((courseProgram, index: number) =>
              index === 0 ? (
                <AccordionCard
                  key={index}
                  {...courseProgram}
                  initialOpenedValue
                />
              ) : (
                <AccordionCard
                  key={index}
                  {...courseProgram}
                  initialOpenedValue={false}
                />
              )
            )}
        </Cards>
      </ContentContainer>
    </Component>
  );
}

export default CourseProgram;

const Component = styled.section`
  background: ${colors.dark};
  padding-bottom: 80px;

  ${media.tablet(css`
    padding-bottom: 70px;
  `)}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Description = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  margin-top: 24px;
  color: ${colors.white};

  ${media.tablet(css`
    line-height: 130%;
  `)}
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 54px;

  ${media.tablet(css`
    margin-top: 24px;
  `)}
`;
