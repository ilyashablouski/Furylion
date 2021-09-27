import React from 'react';
import styled, { css } from 'styled-components';

import { ProgramStepsItem } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';
import { colors } from '@/constants/theme';
import { ReactComponent as ClockIcon } from '@/assets/svg/vacancy/clock.svg';
import { media } from '@/utils/mixin';

function ProgramStepCard({ title, time, list }: ProgramStepsItem) {
  return (
    <Component>
      <Left>
        <Title>{title}</Title>

        <Time>
          <Icon>
            <ClockIcon />
          </Icon>
          {time}
        </Time>
      </Left>

      <List dangerouslySetInnerHTML={{ __html: list ?? '' }} />
    </Component>
  );
}

export default ProgramStepCard;

const Component = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${colors.white01};

  &:not(:first-child) {
    margin-top: 24px;

    ${media.mobile(css`
      margin-top: 16px;
    `)}
  }

  ${media.tablet(css`
    flex-direction: column;
  `)}

  ${media.mobile(css`
    padding-top: 16px;
  `)}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
  `)}
`;

const Time = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 300;
  color: ${colors.white};

  ${media.tablet(css`
    margin-top: 12px;
  `)}
`;

const Icon = styled.i`
  margin-right: 16px;
  display: inline-flex;
`;

const List = styled.div`
  flex: 1 1 50%;
  margin-left: 20px;

  ul {
    li {
      font-size: 14px;
      line-height: 160%;
      font-weight: 300;
      color: ${colors.white};

      &:before {
        content: '—';
        margin-right: 5px;
      }

      ${media.mobile(css`
        font-size: 12px;
      `)}
    }
  }

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 24px;
  `)}

  ${media.mobile(css`
    margin-top: 12px;
  `)}
`;
