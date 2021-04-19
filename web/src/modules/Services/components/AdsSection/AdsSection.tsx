import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { AdsSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import Picture from '@/components/Picture';
import SkewButton from '@/components/SkewButton';
import { media } from '@/utils/mixin';

function AdsSection() {
  const page = useCurrentPage<AdsSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.adsTitle}</Title>

        <TextContainer>
          <TextItem>
            <Text>{pageFields.adsText1}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.adsText2}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.adsText3}</Text>
          </TextItem>
        </TextContainer>
      </ContentContainer>

      <BackgroundImage
        mobileSmall={convertThumbnailToPictureImage(pageFields.adsImage)}
      />

      <StyledButton>
        <SkewButton href={pageFields.adsButtonUrl}>
          {pageFields.adsButtonLabel}
        </SkewButton>
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin: 70px auto 0;
  max-width: 1920px;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};
`;

const TextContainer = styled.div`
  margin: 38px -10px 0;
  display: flex;
`;

const TextItem = styled.div`
  padding: 0 10px;
  flex: 1 1 33.33%;
  max-width: 33.33%;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const BackgroundImage = styled(Picture)`
  margin-top: 85px;
  height: 892px;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  width: 100%;
  max-width: 370px;
  transform: translate(-50%, 0);
  z-index: 2;
`;

export default AdsSection;
