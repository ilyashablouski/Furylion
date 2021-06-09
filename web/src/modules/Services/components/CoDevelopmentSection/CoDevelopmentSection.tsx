import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import coDevelopmentBgUrl from '@/assets/images/co-development/co-development-bg.png';
import coDevelopmentBgUrl2x from '@/assets/images/co-development/co-development-bg@2x.png';
import coDevelopmentBgUrlWebp from '@/assets/images/co-development/co-development-bg.webp';
import coDevelopmentBgUrlWebp2x from '@/assets/images/co-development/co-development-bg@2x.webp';
import chartsBgUrl2x from '@/assets/images/co-development/charts@2x.png';
import chartsBgUrlWebp from '@/assets/images/co-development/charts.webp';
import chartsBgUrlWebp2x from '@/assets/images/co-development/charts@2x.webp';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { CoDevelopmentSectionType } from '@/typings/model';
import { media } from '@/utils/mixin';
import SkewButton from '@/components/SkewButton';

function CoDevelopmentSection() {
  const page = useCurrentPage<CoDevelopmentSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper id={pageFields?.coDevelopmentId ?? ''}>
      <ContentContainer>
        <Title>{pageFields.coDevelopmentTitle}</Title>

        <TextContainer>
          <TextItem>
            <Text>{pageFields.coDevelopmentText1}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.coDevelopmentText2}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.coDevelopmentText3}</Text>
          </TextItem>
        </TextContainer>
      </ContentContainer>

      <ImagesContainer>
        <LeftLogo>
          <Picture
            mobileSmall={convertThumbnailToPictureImage(pageFields.leftLogo)}
          />
        </LeftLogo>
        <RightLogo>
          <Picture
            mobileSmall={convertThumbnailToPictureImage(pageFields.rightLogo)}
          />
        </RightLogo>
        <FirstBackgroundImage
          mobileSmall={{
            src: coDevelopmentBgUrl,
            src2x: coDevelopmentBgUrl2x,
            webp: coDevelopmentBgUrlWebp,
            webp2x: coDevelopmentBgUrlWebp2x,
          }}
        />
        <SecondBackgroundImage
          mobileSmall={{
            src: chartsBgUrl2x,
            src2x: chartsBgUrl2x,
            webp: chartsBgUrlWebp,
            webp2x: chartsBgUrlWebp2x,
          }}
          className="second-background-image"
        />
      </ImagesContainer>
      <StyledButton>
        <SkewButton
          href={pageFields.coDevelopmentButtonUrl}
          color="redTransparent"
          isNewTab={pageFields.coDevelopmentButtonIsNewTab}
        >
          {pageFields.coDevelopmentButtonLabel}
        </SkewButton>
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding-top: 100px;
  background: ${colors.white};
  overflow: hidden;

  ${media.tabletSmall(css`
    padding-top: 70px;
  `)}
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.dark};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const TextContainer = styled.div`
  margin-top: 35px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
    flex-wrap: wrap;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
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
  color: ${colors.dark};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const ImagesContainer = styled.div`
  position: relative;
  margin-top: 71px;
  padding-bottom: 149px;

  ${media.tabletSmallOnly(css`
    padding-bottom: 40px;
  `)}
  ${media.mobile(css`
    padding-bottom: 170px;
  `)}
  ${media.mobileLargeOnly(css`
    margin-top: 110px;
  `)}
  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 99%;
    background: #191814;
    -webkit-clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
    clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
    z-index: 1;
    overflow: hidden;

    ${media.tabletSmallOnly(css`
      height: 71%;
    `)}

    ${media.mobile(css`
      height: 49%;
    `)}
  }
`;

const FirstBackgroundImage = styled(Picture)`
  margin: 0 auto;
  max-width: 829px;

  ${media.tabletSmallOnly(css`
    padding-top: 110px;
    max-width: 618px;
  `)}
`;

const SecondBackgroundImage = styled(Picture)`
  margin: 0 auto;
  width: 100%;
  height: 100%;

  &.second-background-image {
    position: absolute;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);

    ${media.mobile(css`
      top: 101px;
      width: 120%;
    `)}
  }

  picture {
    display: flex;
    justify-content: center;
    height: 116%;
    width: 100%;

    ${media.tabletSmallOnly(css`
      height: 134%;
    `)}

    ${media.mobile(css`
      height: 144%;
    `)}
  }

  img {
    image-rendering: -webkit-optimize-contrast;
  }
`;

const LeftLogo = styled.div`
  position: absolute;
  top: 22.2%;
  left: 16.7%;
  z-index: 1;
  image-rendering: -webkit-optimize-contrast;

  ${media.tabletSmallOnly(css`
    top: -10px;
    left: 5.2%;
  `)}

  ${media.mobile(css`
    top: -9%;
    left: 5.6%;
    max-width: 120px;
  `)}
`;

const RightLogo = styled.div`
  position: absolute;
  top: 21.1%;
  right: 19%;
  z-index: 1;
  image-rendering: -webkit-optimize-contrast;

  ${media.tabletSmallOnly(css`
    top: -2.3%;
    right: 5.2%;
  `)}

  ${media.mobile(css`
    top: -10.5%;
    right: 6.5%;
    max-width: 120px;
  `)}
`;

const StyledButton = styled.div`
  width: 100%;
  max-width: 370px;
  top: 85.1%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;

  ${media.tabletSmallOnly(css`
    top: 83.2%;
  `)}

  ${media.mobile(css`
    max-width: 302px;
    top: auto;
    bottom: 0;
  `)}
`;
export default CoDevelopmentSection;
