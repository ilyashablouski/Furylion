import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import CurveButton from '@/components/CurveButton';
import SkewButton from '@/components/SkewButton';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { CpiSectionType } from '@/typings/model';

function CpiSection() {
  const page = useCurrentPage<CpiSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.cpiTitle}</Title>

        <TextBlock>
          <Text>{pageFields.cpiText}</Text>
        </TextBlock>

        <ButtonWrapper>
          <SkewButton href={pageFields.cpiButtonUrl} color="dark">
            {pageFields.cpiButtonLabel}
          </SkewButton>
        </ButtonWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

export default CpiSection;

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.dark};
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

const TextBlock = styled.div`
  margin-top: 35px;
  max-width: 605px;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const ButtonWrapper = styled.div``;
