import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import checkMarkUrl from '@/assets/svg/vacancy/check-mark.svg';

function AdvantagesSection() {
  // const page = useCurrentPage<>();
  // if (!page) return null;
  //
  // const pageFields = page.templateFields;
  return (
    <Wrapper>
      {/*<ContentContainer>*/}
      {/*  <Title></Title>*/}

      {/*  <TextContainer>*/}
      {/*    <TextItem>*/}
      {/*      <Text>{pageFields.}</Text>*/}
      {/*    </TextItem>*/}
      {/*    <TextItem>*/}
      {/*      <Text>{pageFields.}</Text>*/}
      {/*    </TextItem>*/}
      {/*    <TextItem>*/}
      {/*      <Text>{pageFields.}</Text>*/}
      {/*    </TextItem>*/}
      {/*  </TextContainer>*/}

      {/*  <Inner>*/}
      {/*    <Lists dangerouslySetInnerHTML={{ __html: conditionsList ?? '' }} />*/}
      {/*  </Inner>*/}
      {/*</ContentContainer>*/}
    </Wrapper>
  );
}

export default AdvantagesSection;

const Wrapper = styled.section`
  background: ${colors.red};
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
  margin: 35px -10px 0;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
    flex-wrap: wrap;
  `)}

  ${media.mobile(css`
    margin: 30px 0 0;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 10px;
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
    margin-top: 20px;
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
  color: ${colors.white};

  ${media.tabletSmallOnly(css``)}

  ${media.mobile(css``)}

  ul {
    padding: 0 10px;
    flex: 1 1 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.tabletSmallOnly(css``)}

    ${media.mobile(css`
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
