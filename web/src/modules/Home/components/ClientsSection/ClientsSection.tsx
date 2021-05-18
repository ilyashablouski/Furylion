import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { ClientsSectionType } from '@/typings/model';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';
import PlainPicture from '@/components/Picture';
import DoubleTickerLine from '@/components/TickerLine/DoubleTickerLine';

function ClientsSection() {
  const page = useCurrentPage<ClientsSectionType>();
  const pageFields = page?.templateFields;

  return (
    <Wrapper>
      <Title>{pageFields?.clientsTitle}</Title>

      <Inner>
        <DoubleTickerLine
          firstTickerRotation={'-3'}
          secondTickerRotation={'3'}
          firstLogosArray={pageFields?.clientsFirstGallery}
          secondLogosArray={pageFields?.clientsSecondGallery}
          secondTickerBg={colors.red}
          firstTickerIsReserved={false}
          secondTickerIsReserved={true}
        />
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding-top: 106px;
  padding-bottom: 162px;
  overflow: hidden;
  background: ${colors.dark};
  z-index: 1;
  ${media.tabletSmall(
    css`
      padding-bottom: 0;
    `
  )}
`;

const Title = styled.span`
  display: block;
  text-align: center;
  line-height: 130%;
  color: #fff;
  font-size: 64px;
  font-weight: 900;
  text-transform: uppercase;

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Inner = styled.div`
  margin-top: 86px;
  padding-bottom: 2.7%;

  ${media.tabletSmallOnly(css`
    margin-top: 97px;
  `)}

  ${media.mobile(css`
    margin-top: 42px;
  `)}
`;

const Row = styled.div<{ isBottom?: boolean }>`
  ${(props) =>
    props.isBottom &&
    css`
      margin-top: -6%;

      @media (min-width: 1367px) {
        margin-top: -3%;
      }
      ${media.tabletSmall(css`
        margin-top: 4%;
      `)}
    `}
`;

/** Ticker*/

const ScrollerItem = styled.li<{ isLabelTicket?: boolean }>`
  ${(props) =>
    props.isLabelTicket &&
    css`
      display: flex;
    `}
`;

const Container = styled.div<{
  backgroundTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
  isReversed?: boolean;
  isAbove?: boolean;
  isLabelTicket?: boolean;
}>`
  margin: 0 -20px;
  display: flex;
  align-items: center;
  height: 150px;
  ${(props) =>
    props.isAbove &&
    css`
      position: relative;
      z-index: 2;
    `}

  ${(props) =>
    props.isLabelTicket &&
    css`
      height: auto !important;
      transform: none !important;

      ${LogosWrapper} {
        height: auto;
      }
    `}

  background: ${(props) =>
    props.backgroundTicket ? `${props.backgroundTicket}` : `${colors.white}`};

  transform: rotate(
    ${(props) => (props.rotateTicket ? `${props.rotateTicket}deg` : '0deg')}
  );

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'middle' &&
    css`
      ${media.tabletSmallOnly(css`
        height: 98px;
      `)}

      ${media.mobile(css`
        height: 65px;
      `)}
    `}
`;

const ScrollerInner = styled.div`
  position: relative;
  display: flex;
`;

const LogosWrapper = styled.div<{
  sizeTicket?: StringFieldType;
  isLabelTicket?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'middle' &&
    css`
      ${media.tabletSmallOnly(css`
        height: 98px;
      `)}

      ${media.mobile(css`
        height: 65px;
      `)}
    `}

  ${(props) =>
    props.isLabelTicket &&
    css`
      ${media.tabletSmall(css`
        display: none;

        &:first-child {
          display: flex;
        }
      `)}
    `}
`;

const Logo = styled(PlainPicture)`
  padding: 0 50px;

  ${media.tabletSmallOnly(css`
    padding: 0 35px;
  `)}
  ${media.mobile(css`
    padding: 0 15px;
  `)}
  img {
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    max-height: 90px;
    max-width: initial;

    ${media.tabletSmallOnly(css`
      max-height: 55px;
    `)}

    ${media.mobile(css`
      max-height: 25px;
    `)}
  }
`;

export default ClientsSection;
