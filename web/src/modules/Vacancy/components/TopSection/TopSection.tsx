import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';
import ContentContainer from '@/components/ContentContainer';
import { media } from '@/utils/mixin';

function TopSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  const title = vacancyData?.title ?? '';

  return (
    <Wrapper>
      <ContentContainer>
        <Title>{title}</Title>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 170px 0 72px;
  width: 100%;
  height: 100%;
  background: ${colors.red};

  ${media.tabletSmallOnly(css`
    padding: 126px 0 72px;
  `)}

  ${media.mobile(css`
    padding: 89px 0 33px;
  `)}
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 180.531px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 16vw;
  `)}
`;

export default TopSection;
