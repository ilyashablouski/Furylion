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
import AdsSwiper from '@/modules/PlayableAds/components/AdsSwiper';

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

      <Inner>
        <AdsSwiper adsImages={pageFields.adsImages} />
      </Inner>

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
  margin: 52px auto 0;
  padding-bottom: 80px;
  max-width: 1920px;

  ${media.tabletSmallOnly(css`
    margin-top: 150px;
    padding-bottom: 70px;
  `)}

  ${media.mobile(css`
    margin-top: 146px;
    padding-bottom: 70px;
  `)}
`;

const Inner = styled.div`
  margin-top: 110px;

  ${media.tabletSmallOnly(css`
    margin-top: 50px;
  `)}

  ${media.mobile(css`
    margin-top: 40px;
  `)}
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    text-align: left;
    font-size: 32px;
  `)}
`;

const TextContainer = styled.div`
  margin: 35px -10px 0;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
    flex-wrap: wrap;
  `)}

  ${media.mobile(css`
    margin: 30px 0 0;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 10px;
  flex: 1 1 33.33%;
  max-width: 33.33%;

  ${media.tabletSmall(css`
    &:first-child {
      margin-top: 0;
      flex: 1 1 100%;
      max-width: 100%;
    }
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 20px;
    flex: 1 1 50%;
    max-width: 50%;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
    padding: 0;
    display: block;
    max-width: none;
  `)}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const StyledButton = styled.div`
  margin-top: 116px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 370px;

  ${media.tabletSmallOnly(css`
    margin-top: 122px;
  `)}

  ${media.mobile(css`
    margin-top: 68px;
    margin-left: auto;
    margin-right: auto;
    position: static;
    transform: translate(0, 0);
    max-width: 302px;
  `)}
`;

export default AdsSection;
