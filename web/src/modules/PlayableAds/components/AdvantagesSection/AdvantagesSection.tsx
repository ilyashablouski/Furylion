import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import checkMarkUrl from '@/assets/svg/vacancy/check-mark.svg';
import { AdvantagesSectionType } from '@/typings/model';

function AdvantagesSection() {
  const page = useCurrentPage<AdvantagesSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper id={pageFields?.advantagesId ?? ''}>
      <ContentContainer>
        <Title>{pageFields.advantagesTitle}</Title>

        <TextContainer>
          <TextItem>
            <Text>{pageFields.advantagesText1}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.advantagesText2}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.advantagesText3}</Text>
          </TextItem>
        </TextContainer>

        <Inner>
          <Lists
            dangerouslySetInnerHTML={{
              __html: pageFields.advantagesList ?? '',
            }}
          />
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: -642px;
  padding-top: 438px;
  padding-bottom: 100px;
  background: ${colors.red};

  ${ContentContainer} {
    position: relative;
    z-index: 1;
  }

  ${media.tabletSmallOnly(css`
    margin-top: -596px;
    padding-top: 400px;
    padding-bottom: 70px;
  `)}

  ${media.mobile(css`
    margin-top: -507px;
    padding-top: 233px;
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

const TextContainer = styled.div`
  margin: 35px -20px 0;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin: 30px -10px 0;
    flex-wrap: wrap;
  `)}

  ${media.mobile(css`
    margin: 30px 0 0;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 20px;
  flex: 1 1 33.33%;
  max-width: 33.33%;

  ${media.tabletSmall(css`
    &:first-child {
      margin-top: 0;
      flex: 1 1 100%;
      max-width: 100%;
    }
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 30px;
    padding: 0 10px;
    flex: 1 1 50%;
    max-width: 50%;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
    padding: 0;
    display: block;
    max-width: none;
  `)}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const Inner = styled.div`
  margin-top: 92px;

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
  color: ${colors.white};

  ${media.mobile(css`
    margin: 0;
    display: block;
  `)}
  ul {
    padding: 0 10px;
    flex: 1 1 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.mobile(css`
      padding: 0;
      max-width: none;

      &:not(:first-child) {
        margin-top: 10px;
      }
    `)}
  }

  li {
    position: relative;
    padding-left: 59px;
    display: flex;
    align-items: center;
    min-height: 44px;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 160%;
    color: ${colors.white};

    ${media.tabletSmall(css`
      font-size: 20px;
    `)}
    ${media.mobile(css`
      padding-left: 54px;
    `)}
    &:not(:first-child) {
      margin-top: 37px;

      ${media.tabletSmallOnly(css`
        margin-top: 34px;
      `)}

      ${media.mobile(css`
        margin-top: 10px;
      `)}
    }

    &:before {
      content: url(${checkMarkUrl});
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  p {
    display: none;
  }
`;

export default AdvantagesSection;
