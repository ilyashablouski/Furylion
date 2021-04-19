import React from 'react';
import styled from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import coDevelopmentBgUrl from '@/assets/images/co-development/co-development-bg.png';
import coDevelopmentBgUrl2x from '@/assets/images/co-development/co-development-bg@2x.png';
import coDevelopmentBgUrlWebp from '@/assets/images/co-development/co-development-bg.webp';
import coDevelopmentBgUrlWebp2x from '@/assets/images/co-development/co-development-bg@2x.webp';
import chartsBgUrl from '@/assets/images/co-development/charts.png';
import chartsBgUrl2x from '@/assets/images/co-development/charts@2x.png';
import chartsBgUrlWebp from '@/assets/images/co-development/charts.webp';
import chartsBgUrlWebp2x from '@/assets/images/co-development/charts@2x.webp';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { CoDevelopmentSectionType } from '@/typings/model';

function CoDevelopmentSection() {
  const page = useCurrentPage<CoDevelopmentSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
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
            src: chartsBgUrl,
            src2x: chartsBgUrl2x,
            webp: chartsBgUrlWebp,
            webp2x: chartsBgUrlWebp2x,
          }}
          className="second-background-image"
        />
      </ImagesContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 100px;
  background: ${colors.white};
  overflow: hidden;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.dark};
`;

const TextContainer = styled.div`
  margin-top: 35px;
  margin-left: -14px;
  margin-right: -14px;
  display: flex;
`;

const TextItem = styled.div`
  padding: 0 14px;
  flex: 1 1 33.33%;
  max-width: 33.33%;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.dark};
`;

const ImagesContainer = styled.div`
  position: relative;
  margin-top: 65px;
  padding-bottom: 180px;

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #191814;
    -webkit-clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
    clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
    z-index: 1;
    overflow: hidden;
  }
`;

const FirstBackgroundImage = styled(Picture)`
  margin: 0 auto;
  max-width: 790px;
`;

const SecondBackgroundImage = styled(Picture)`
  margin: 0 auto;
  max-width: 480px;
  &.second-background-image {
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LeftLogo = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  z-index: 1;
`;

const RightLogo = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;
  z-index: 1;
`;

export default CoDevelopmentSection;
