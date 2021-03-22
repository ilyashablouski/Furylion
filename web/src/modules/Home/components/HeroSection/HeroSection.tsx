import React from 'react';
import styled from 'styled-components';

import PlainPicture from '@/components/Picture';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { HeroSectionType } from '@/typings/model';

function HeroSection() {
  const page = useCurrentPage<HeroSectionType>();
  const pageFields = page?.templateFields;
  const image = pageFields?.heroImage;
  const imageMobile = pageFields?.heroMobileImage;
  const title = pageFields?.heroTitle;
  const text = pageFields?.heroText;

  return (
    <WrapperSection>
      <BackgroundPicture
        tabletLarge={{
          src: image?.url,
          src2x: image?.url_2x,
          webp: image?.url_webp,
          webp2x: image?.url_webp_2x,
        }}
        mobileSmall={{
          src: imageMobile?.url,
          src2x: imageMobile?.url_2x,
          webp: imageMobile?.url_webp,
          webp2x: imageMobile?.url_webp_2x,
        }}
      />
      <ContentContainer>
        <Inner>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Inner>
      </ContentContainer>
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  position: relative;
`;

const BackgroundPicture = styled(PlainPicture)`
  position: static;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    top: 0;
    left: 0;
    background: #3e3e3e;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const Title = styled.span`
  margin: 0 auto;
  display: block;
  max-width: 642px;
  font-weight: 900;
  font-size: 72px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin: 30px auto 0;
  max-width: 660px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
`;

const Inner = styled.div`
  position: relative;
  padding: 313px 0 212px;
  text-align: center;
  color: ${colors.white};
`;

export default HeroSection;
