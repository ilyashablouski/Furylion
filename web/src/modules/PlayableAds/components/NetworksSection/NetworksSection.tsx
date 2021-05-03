import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { NetworksSectionType } from '@/typings/model';
import TickerLine from '@/components/TickerLine';

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
        {/*<NetworksLogosLine isTop logosArray={pageFields.networksFirstGallery} />*/}
        {/*<NetworksLogosLine logosArray={pageFields.networksSecondGallery} />*/}

        <Row>
          <TickerLine
            isAbove={true}
            rotateTicket={'-4'}
            sizeTicket="middle"
            logosArray={pageFields?.networksFirstGallery}
          />
        </Row>

        <Row isBottom={true}>
          <TickerLine
            isReversed={true}
            rotateTicket={'4'}
            sizeTicket="middle"
            logosArray={pageFields?.networksSecondGallery}
            backgroundTicket={colors.dark}
          />
        </Row>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.red};
  overflow: hidden;

  ${media.tabletSmall(css`
    padding: 70px 0;
  `)}
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
    max-width: 487px;
    font-size: 56px;
  `)}

  ${media.mobile(css`
    max-width: 278px;
    font-size: 32px;
  `)}
`;

const Inner = styled.div`
  margin-top: 72px;
  padding-bottom: 54px;

  ${media.tabletSmallOnly(css`
    margin-top: 70px;
    padding-bottom: 33px;
  `)}

  ${media.mobile(css`
    margin-top: 55px;
    padding-bottom: 20px;
  `)}
`;

const Row = styled.div<{ isBottom?: boolean }>`
  ${(props) =>
    props.isBottom &&
    css`
      margin-top: 2%;

      @media (min-width: 1367px) {
        margin-top: -3%;
      }
      ${media.tabletSmall(css`
        margin-top: 3%;
      `)}
    `}
`;

export default NetworksSection;
