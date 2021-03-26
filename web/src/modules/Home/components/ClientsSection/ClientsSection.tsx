import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { ClientsSectionType } from '@/typings/model';
import { media } from '@/utils/mixin';

import LogosLine from './components/LogosLine';

function ClientsSection() {
  const page = useCurrentPage<ClientsSectionType>();
  const pageFields = page?.templateFields;
  return (
    <Wrapper>
      <Title>{pageFields?.clientsTitle}</Title>

      <Inner>
        <LogosLine top logosArray={pageFields?.clientsFirstGallery} />
        <LogosLine logosArray={pageFields?.clientsSecondGallery} />
      </Inner>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 77px;
  padding-bottom: 2.7%;
  overflow: hidden;

  ${media.tabletSmall(css`
    padding-top: 70px;
  `)}
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
  margin-top: 80px;

  ${media.tabletSmallOnly(css`
    margin-top: 97px;
  `)}

  ${media.mobile(css`
    margin-top: 42px;
  `)}
`;

export default ClientsSection;
