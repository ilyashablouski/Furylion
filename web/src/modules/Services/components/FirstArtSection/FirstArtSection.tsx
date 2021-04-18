import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ArtSectionType } from '@/typings/model';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import ArtSwiper from '@/modules/Services/components/ArtSwiper';

function FirstArtSection() {
  const page = useCurrentPage<ArtSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <Left>
        <ContentContainer>
          <Title>{pageFields.firstArtTitle}</Title>
          <TextContainer>
            <Text>{pageFields.firstArtText1}</Text>
            <TextInner>
              <TextItem>
                <Text>{pageFields.firstArtText2}</Text>
              </TextItem>
              <TextItem>
                <Text>{pageFields.firstArtText3}</Text>
              </TextItem>
            </TextInner>
          </TextContainer>

          <AdditionalBlock>
            <AdditionalTitle>Technology stack:</AdditionalTitle>
            <AdditionalText
              dangerouslySetInnerHTML={{
                __html: pageFields.firstArtTextAdditional ?? '',
              }}
            />
          </AdditionalBlock>
        </ContentContainer>
      </Left>
      <Right>
        <ArtSwiper images={pageFields.firstArtImages} isRightSide={true} />
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  min-height: 750px;
  display: flex;
`;

const Left = styled.div`
  margin-top: 100px;

  ${ContentContainer} {
    padding-right: 0;
  }
`;
const Right = styled.div`
  max-width: 673px;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;
const TextContainer = styled.div`
  margin-top: 35px;
  margin-right: -180px;
`;
const TextInner = styled.div`
  margin-top: 25px;
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
`;

const TextItem = styled.div`
  padding: 0 15px;
  flex: 1 1 50%;
  max-width: 50%;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const AdditionalBlock = styled.div`
  margin-top: 70px;
`;
const AdditionalTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
`;

const AdditionalText = styled.div`
  max-width: 631px;
  font-weight: normal;
  font-size: 14px;
  line-height: 187.5%;
  color: ${colors.white};
`;

export default FirstArtSection;
