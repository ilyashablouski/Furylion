import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { Question } from '@/modules/Courses/Courses.types';
import { media } from '@/utils/mixin';

function PopularQuestionsCard({ question, answer }: Question) {
  return (
    <Component>
      <QuestionText>{question}</QuestionText>
      <Answer>{answer}</Answer>
    </Component>
  );
}

export default PopularQuestionsCard;

const Component = styled.div`
  display: flex;
  align-items: center;
  padding: 19px 0;
  border-bottom: 2px solid ${colors.white01};

  &:last-child {
    border-bottom: none;
    align-items: flex-start;

    & > p:nth-child(2) {
      margin-top: 12px;
    }
  }

  ${media.tablet(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

const QuestionText = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
  text-transform: uppercase;
  text-align: left;
  flex: 0 0 606px;

  ${media.tablet(css`
    flex: auto;
  `)}

  ${media.mobile(css`
    font-size: 18px;
  `)}
`;

const Answer = styled.p`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white08};
  margin-left: 20px;

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 12px;
  `)}
`;
