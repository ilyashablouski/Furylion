import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';

import RecentEventsForm from './Form';

function RecentEvents() {
  const { recentEventsId, recentEventsTitle } = useCoursesData();
  return (
    <Component id={recentEventsId ?? ''}>
      <ContentContainer>
        <Inner>
          <Left>
            <Title>{recentEventsTitle}</Title>
          </Left>
          <Right>
            <RecentEventsForm />
          </Right>
        </Inner>
      </ContentContainer>
    </Component>
  );
}

export default RecentEvents;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const Left = styled.div`
  flex: 1 1 49%;
  max-width: 49%;

  ${media.tablet(css`
    flex: auto;
    max-width: 100%;
  `)}
`;

const Title = styled.p`
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

const Right = styled.div`
  flex: 1 1 50%;
  max-width: 50%;
  margin-left: 20px;
  margin-top: 81px;

  ${media.tablet(css`
    margin-top: 24px;
    margin-left: 0;
    flex: auto;
    max-width: 100%;
  `)}
`;
