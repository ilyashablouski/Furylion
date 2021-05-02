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
        <TickerLine labelTicket="Инфо" rotateTicket={'-3'} />
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

export default ClientsSection;
