import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { PlatformSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';

import PlatformLeft from './components/PlatformLeft';

function PlatformSection() {
  const page = useCurrentPage<PlatformSectionType>();
  const pageFields = page?.templateFields;

  return (
    <Wrapper>
      <ContentContainer>
        <InnerWrapper>
          <PlatformLeft
            title={pageFields?.platformTitle}
            text={pageFields?.platformText}
            logos={pageFields?.platformLogos}
            addText={pageFields?.platformAdditional}
            btnFirstLabel={pageFields?.platformButtonFirstLabel}
            btnFirstUrl={pageFields?.platformButtonFirstUrl}
            btnSecondLabel={pageFields?.platformButtonSecondLabel}
            btnSecondUrl={pageFields?.platformButtonSecondUrl}
          />
          {/*<PlatformRight />*/}
        </InnerWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${colors.red};

  ${ContentContainer} {
    max-width: none;
  }
`;

const InnerWrapper = styled.div`
  margin: 0 -68px;
  padding-top: 100px;
  padding-bottom: 107px;
  display: flex;
  color: ${colors.white};
`;

export default PlatformSection;
