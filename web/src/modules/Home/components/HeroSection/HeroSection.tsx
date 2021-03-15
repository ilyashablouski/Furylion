import React from 'react';
import styled from 'styled-components';

import Picture from '@/components/Picture';
import infoBgUrl from '@/assets/images/home/intro/intro-bg.jpg';
import infoBgUrl2x from '@/assets/images/home/intro/intro-bg@2x.jpg';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';

function HeroSection() {
  return (
    <WrapperSection>
      <BackgroundSection>
        <Picture
          tabletLarge={{
            src: infoBgUrl,
            src2x: infoBgUrl2x,
          }}
          className="section-background"
        />
      </BackgroundSection>
      <ContentContainer>
        <Inner>
          <Title>WORK MIRACLES WITH US</Title>
          <Text>
            A full-service digital agency with global capabilities across web
            design and development, marketing and branding. We create digital
            experiences that are human-centered and future proof.
          </Text>
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
