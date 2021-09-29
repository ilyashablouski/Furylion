import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';
import { media } from '@/utils/mixin';
import checkMarkFillUrl from '@/assets/svg/single-course/check-mark-fill.svg';
import checkMarkFillUrlTablet from '@/assets/svg/vacancy/check-mark-fill.svg';

function CourseAudience() {
  const {
    courseAudienceId,
    courseAudienceTitle,
    courseAudienceList,
  } = useSingleCourseData();

  return (
    <Component id={courseAudienceId ?? ''}>
      <ContentContainer>
        <Content>
          <Title>{courseAudienceTitle}</Title>
          <List
            dangerouslySetInnerHTML={{ __html: courseAudienceList ?? '' }}
          />
        </Content>
      </ContentContainer>
    </Component>
  );
}

export default CourseAudience;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.red};

  ${media.tablet(css`
    padding: 70px 0;
  `)}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

const Title = styled.span`
  display: block;
  max-width: 605px;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
    max-width: 368px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    max-width: none;
  `)}
`;

const List = styled.div`
  ul {
    ${media.tablet(css`
      margin-left: 32px;
    `)}

    ${media.mobile(css`
      margin-left: 0;
      margin-top: 30px;
    `)}

    li {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 900;
      font-size: 24px;
      line-height: 130%;
      max-width: 535px;
      padding-left: 65px;
      min-height: 54px;
      color: ${colors.white};

      &:not(:first-child) {
        margin-top: 37px;
      }

      &:before {
        content: url(${checkMarkFillUrl});
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;

        ${media.tablet(css`
          content: url(${checkMarkFillUrlTablet});
        `)}
      }

      ${media.tablet(css`
        font-size: 18px;
        max-width: 400px;
        padding-left: 49px;
      `)}

      ${media.mobile(css`
        max-width: none;
      `)}
    }
  }
`;
