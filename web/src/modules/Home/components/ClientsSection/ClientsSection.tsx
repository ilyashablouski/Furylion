import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { ClientsSectionType } from '@/typings/model';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import TickerLine from '@/components/TickerLine';

import LogosLine from './components/LogosLine';

function ClientsSection() {
  const page = useCurrentPage<ClientsSectionType>();
  const pageFields = page?.templateFields;
  return (
    <Wrapper>
      <Title>{pageFields?.clientsTitle}</Title>

      <Inner>
        {/*TODO: combine into one component with networks line */}
        {/*<LogosLine isTop logosArray={pageFields?.clientsFirstGallery} />*/}
        {/*<LogosLine logosArray={pageFields?.clientsSecondGallery} />*/}
        <Row>
          <TickerLine
            isReversed={false}
            rotateTicket={'-3'}
            logosArray={pageFields?.clientsFirstGallery}
          />
        </Row>
        <Row isBottom={true}>
          <TickerLine
            isReversed={true}
            rotateTicket={'3'}
            logosArray={pageFields?.clientsSecondGallery}
            backgroundTicket={colors.red}
          />
        </Row>
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

export default ClientsSection;
