import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';

import PopularQuestionsCard from './Card';

function PopularQuestions() {
  const { questionsId, questionsTitle, questionsItems } = useCoursesData();

  return (
    <Component id={questionsId ?? ''}>
      <ContentContainer>
        <Title>{questionsTitle}</Title>

        <Cards>
          {questionsItems &&
            questionsItems.map(({ question, answer }, index: number) => (
              <PopularQuestionsCard
                question={question}
                answer={answer}
                key={index}
              />
            ))}
        </Cards>
      </ContentContainer>
    </Component>
  );
}

export default PopularQuestions;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};

  ${media.tablet(css`
    padding: 70px 0 40px 0;
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 120%;
  text-align: left;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
    line-height: 130%;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
`;
