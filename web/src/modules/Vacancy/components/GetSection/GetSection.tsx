import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';
import checkMarkFillUrl from '@/assets/svg/vacancy/check-mark-fill.svg';

function GetSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  const conditionsList = vacancyData?.conditions;

  return (
    <Wrapper>
      <ContentContainer>
        <Title>You will get:</Title>
        <Lists dangerouslySetInnerHTML={{ __html: conditionsList ?? '' }} />
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

const Lists = styled.div`
  margin-top: 50px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;

  ul {
    margin-top: -25px;
    padding: 10px;
    flex: 1 1 33.33%;
    max-width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    position: relative;
    margin-top: 25px;
    padding-left: 52px;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: ${colors.white};
    &:before {
      content: url(${checkMarkFillUrl});
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  p {
    display: none;
  }
`;

export default GetSection;
