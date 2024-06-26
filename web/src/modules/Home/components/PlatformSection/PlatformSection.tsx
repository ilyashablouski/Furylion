import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { PlatformSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import PlatformRight from '@/modules/Home/components/PlatformSection/components/PlatfromRight';
import { media } from '@/utils/mixin';

import PlatformLeft from './components/PlatformLeft';

function PlatformSection() {
  const page = useCurrentPage<PlatformSectionType>();

  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper id={pageFields?.platformId ?? ''}>
      <ContentContainer>
        <InnerWrapper>
          <PlatformLeft
            title={pageFields.platformTitle}
            text={pageFields.platformText}
            logos={pageFields.platformLogos}
            addText={pageFields.platformAdditional}
            btnFirstLabel={pageFields.platformButtonFirstLabel}
            btnFirstIsNewTab={pageFields.platformButtonFirstIsNewTab}
            btnSecondIsNewTab={pageFields.platformButtonSecondIsNewTab}
            btnFirstUrl={pageFields.platformButtonFirstUrl}
            btnSecondLabel={pageFields.platformButtonSecondLabel}
            btnSecondUrl={pageFields.platformButtonSecondUrl}
          />
          <PlatformRight />
        </InnerWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: ${colors.red};

  ${media.mobile(css`
    margin-top: 60px;
  `)}
  ${ContentContainer} {
    max-width: 1920px;
  }
`;

const InnerWrapper = styled.div`
  margin: 0 -68px;
  padding-top: 100px;
  padding-bottom: 147px;
  display: flex;
  justify-content: space-between;
  color: ${colors.white};

  ${media.tabletSmall(css`
    margin: 0;
    position: relative;
  `)}

  ${media.tabletSmallOnly(css`
    padding-bottom: 165px;
    padding-top: 142px;
  `)}

  ${media.mobile(css`
    padding-bottom: 163px;
    padding-top: 102px;
    display: block;
  `)}
`;

export default PlatformSection;
