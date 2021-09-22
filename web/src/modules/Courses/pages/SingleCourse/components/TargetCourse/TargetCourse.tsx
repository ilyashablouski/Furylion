import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';
import { media } from '@/utils/mixin';

function TargetCourse() {
  const {
    targetCourseId,
    targetCourseTitle,
    targetCourseDescription,
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
        </Content>
      </ContentContainer>
    </Component>
  );
}

export default TargetCourse;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 605px;
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
    max-width: 368px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    max-width: none;
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
    text-underline-offset: 8px;
  }

  ${media.tablet(css`
    margin-top: 20px;
    font-size: 20px;
  `)}
`;
