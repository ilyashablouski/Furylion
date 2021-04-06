import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';
import checkMarkFillUrl from '@/assets/svg/vacancy/check-mark-fill.svg';
import { media } from '@/utils/mixin';

function GetSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  const conditionsList = vacancyData?.conditions;

  return (
    <Wrapper>
      <ContentContainer>
        <Title>You will get:</Title>
        <Inner>
          <Lists dangerouslySetInnerHTML={{ __html: conditionsList ?? '' }} />
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 83px;
  padding-bottom: 100px;
  background: ${colors.red};

  ${media.tabletSmall(css`
    padding-top: 70px;
    padding-bottom: 70px;
  `)}
`;
const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Inner = styled.div`
  margin-top: 50px;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Lists = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: -70px;
    flex-wrap: wrap;
    justify-content: center;
  `)}

  ${media.mobile(css`
    margin-top: -20px;
    margin-left: 0;
    margin-right: 0;
    display: block;
  `)}

  ul {
    padding: 0 10px;
    flex: 1 1 33.33%;
    max-width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.tabletSmallOnly(css`
      margin-top: 70px;
      flex: 1 1 50%;
      max-width: 50%;
    `)}

    ${media.mobile(css`
      margin-top: 0;
      padding: 0;
      max-width: none;
    `)}
  }

  li {
    position: relative;
    padding-left: 52px;
    display: flex;
    align-items: center;
    min-height: 44px;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: ${colors.white};
    ${media.mobile(css`
      margin-top: 20px;
    `)}

    &:not(:first-child) {
      margin-top: 25px;

      ${media.mobile(css`
        margin-top: 20px;
      `)}
    }

    &:before {
      content: url(${checkMarkFillUrl});
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  p {
    display: none;
  }
`;

export default GetSection;
