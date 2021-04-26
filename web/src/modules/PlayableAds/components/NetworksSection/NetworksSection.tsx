import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { NetworksSectionType } from '@/typings/model';

import NetworksLogosLine from './components/NetworksLogosLine';

function NetworksSection() {
  const page = useCurrentPage<NetworksSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.networksTitle}</Title>
      </ContentContainer>

      <Inner>
        <NetworksLogosLine isTop logosArray={pageFields.networksFirstGallery} />
        <NetworksLogosLine logosArray={pageFields.networksSecondGallery} />
      </Inner>
    </Wrapper>
  );
}

export default NetworksSection;

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.red};
  overflow: hidden;
`;
const Title = styled.span`
  max-width: 490px;
  display: block;
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
  margin-top: 75px;
  padding-bottom: 2.7%;
`;
