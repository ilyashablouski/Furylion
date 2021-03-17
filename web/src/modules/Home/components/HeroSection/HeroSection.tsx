import React from 'react';
import styled from 'styled-components';

import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { HeroSectionType } from '@/typings/model';

function HeroSection() {
  const page = useCurrentPage<HeroSectionType>();
  const pageFields = page?.templateFields;
  const imageUrl = pageFields?.heroImage.url;
  const title = pageFields?.heroTitle;
  const text = pageFields?.heroText;

  return (
    <WrapperSection>
      <BackgroundSection>
        <Picture
          tabletLarge={{
            src: imageUrl ?? '',
            // src2x: '',
            // webp: '',
            // webp2x: '',
          }}
          className="section-background"
        />
      </BackgroundSection>
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

const BackgroundSection = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;

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

  .section-background {
    position: static;
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

const Inner = styled.div`
  position: relative;
  padding: 313px 0 212px;
  text-align: center;
  color: ${colors.white};
`;

export default HeroSection;
