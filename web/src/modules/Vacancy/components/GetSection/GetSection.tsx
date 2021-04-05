import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';

function GetSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  return (
    <Wrapper>
      <ContentContainer>
        <Title>You will get:</Title>
        <Lists />
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 83px;
  padding-bottom: 100px;
  background: ${colors.red};
`;
const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;

const Lists = styled.div``;

export default GetSection;
