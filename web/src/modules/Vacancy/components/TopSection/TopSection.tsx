import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';
import ContentContainer from '@/components/ContentContainer';

function TopSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  const title = vacancyData?.title ?? '';
  console.log(vacancyFullData);

  return (
    <Wrapper>
      <ContentContainer>
        <Title>{title}</Title>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 170px 0;
  width: 100%;
  height: 100%;
  background: ${colors.red};
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 180.531px;
  line-height: 100%;
  color: ${colors.white};
`;

export default TopSection;
