import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';
import { media } from '@/utils/mixin';
import Information from '@/modules/Courses/components/CoursesBlock/components/CourseCard/components/Information';

function TargetCourse() {
  const {
    targetCourseId,
    targetCourseTitle,
    targetCourseDescription,
    targetCourseItems,
  } = useSingleCourseData();
  return (
    <Component id={targetCourseId ?? ''}>
      <ContentContainer>
        <Content>
          <Left>
            <Title>{targetCourseTitle}</Title>
            <Description
              dangerouslySetInnerHTML={{
                __html: targetCourseDescription ?? '',
              }}
            />
          </Left>
          <Cards>
            {targetCourseItems &&
              targetCourseItems.map(({ title, content }, index) => (
                <Information
                  title={title}
                  content={content}
                  singleCourse
                  key={index}
                />
              ))}
          </Cards>
        </Content>
      </ContentContainer>
    </Component>
  );
}

export default TargetCourse;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};

  ${media.tablet(css`
    padding: 70px 0;
  `)}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 605px;

  ${media.tablet(css`
    flex: auto;
  `)}
`;

const Title = styled.span`
  display: block;
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

const Description = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  margin-top: 24px;
  color: ${colors.white};

  & > p > u {
    text-decoration-color: ${colors.red};
    text-underline-offset: 6px;

    ${media.tablet(css`
      text-underline-offset: 3px;
    `)}
  }

  ${media.tablet(css`
    line-height: 130%;
  `)}

  ${media.mobile(css`
    font-size: 18px;
    margin-top: 12px;
  `)}
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-left: 20px;

  & > div:nth-child(3) {
    grid-area: 2 / 1 / 3 / 3;
  }

  & > div:nth-child(4) {
    grid-area: 3 / 1 / 4 / 3;
  }

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 24px;
  `)}
`;
