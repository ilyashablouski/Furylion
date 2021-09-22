import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';

import FactsCard from './Card';

function Facts() {
  const { factsId, factsTitle, factsItems, factsText } = useCoursesData();
  return (
    <Component id={factsId ?? ''}>
      <ContentContainer>
        <Title>{factsTitle}</Title>
        <Cards>
          {factsItems &&
            factsItems.map(
              ({ title, subtitle, description }, index: number) => (
                <FactsCard
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  key={index}
                />
              )
            )}
        </Cards>
        <Text>{factsText}</Text>
      </ContentContainer>
    </Component>
  );
}

export default Facts;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};
  z-index: 1;
`;

const Title = styled.span`
  margin: 0 auto;
  display: block;
  max-width: 790px;
  font-weight: 900;
  font-size: 64px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    text-align: left;
  `)}
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 54px;

  ${media.tabletSmallOnly(css`
    grid-template-columns: repeat(2, 1fr);

    & > div :last-child {
      grid-column: 1 / span 2;
    }
  `)}

  ${media.mobile(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`;

const Text = styled(Title)`
  font-size: 32px !important;
  line-height: 130% !important;
  text-transform: initial !important;
  margin-top: 54px !important;

  ${media.tabletSmallOnly(css`
    line-height: 160% !important;
  `)}

  ${media.mobile(css`
    font-size: 24px !important;
    line-height: 130% !important;
    text-align: center;
  `)}
`;
