import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ServicesSectionType } from '@/typings/model';
import { media } from '@/utils/mixin';
import Vector from '@/assets/svg/vector.svg';
import Picture from '@/components/Picture';

import ServicesTop from './components/ServicesTop';
import ServicesBottom from './components/ServicesBottom';

gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
  const page = useCurrentPage<ServicesSectionType>();
  const pageFields = page?.templateFields;
  const sectionTitle = pageFields?.servicesTitle;
  const servicesItems = pageFields?.servicesItems ?? [];
  const servicesBottomItems = pageFields?.servicesBottomItems ?? [];
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let tweenImage: gsap.core.Tween;
    let tweenTitle: gsap.core.Tween;
    const delayedCall = gsap.delayedCall(0, () => {
      if (!imageRef.current || !titleRef.current) return null;

      let endTitleAnimation:
        | string
        | number
        | gsap.plugins.StartEndFunc
        | undefined;

      ScrollTrigger.matchMedia({
        '(min-width: 767px)': function () {
          endTitleAnimation = '260% 50%';
        },
        '(max-width: 767px)': function () {
          endTitleAnimation = '450% 20%';
        },
      });

      tweenImage = gsap.to(imageRef.current, {
        yPercent: 100,
        scrollTrigger: {
          start: '90% 90%',
          end: '160% 40%',
          trigger: imageRef.current,
          markers: true,
          scrub: true,
        },
      });

      tweenTitle = gsap.to(titleRef.current, {
        top: '100%',
        scale: 0.2,
        scrollTrigger: {
          start: 'center 50%',
          end: endTitleAnimation,
          trigger: titleRef.current,
          scrub: true,
        },
      });
    });

    return () => {
      delayedCall.kill();
      tweenImage?.kill();
      tweenTitle?.kill();
    };
  }, []);

  return (
    <Wrapper id={pageFields?.servicesId ?? ''}>
      <ServicesPreviewContent>
        <PreviewImageWrapper>
          <Picture imageRef={imageRef} src={Vector} />
        </PreviewImageWrapper>
        <Title ref={titleRef}>{sectionTitle}</Title>
      </ServicesPreviewContent>

      <ServicesWrapper>
        <ServicesTop servicesItems={servicesItems} />
        <ServicesBottom servicesBottomItems={servicesBottomItems} />
      </ServicesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1920px;
  overflow: hidden;

  ${media.tabletSmall(css`
    padding-top: 70px;
  `)}

  ${media.mobile(css`
    padding-top: 79px;
  `)}
`;

const ServicesPreviewContent = styled.div`
  position: relative;
`;

const PreviewImageWrapper = styled.div`
  img {
    transform: translateY(-100%);
  }
`;

const ServicesWrapper = styled.div`
  margin-top: 45px;

  ${media.tabletSmall(css`
    margin-top: 26px;
  `)}

  ${media.mobile(css`
    margin-top: 15px;
  `)}
`;

const Title = styled.span`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  font-weight: 900;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 268.885px;
  text-shadow: 0px 51px 100px rgba(0, 0, 0, 0.25);

  ${media.tabletSmall(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    transform: translate(-50%, -50%) scale(1) !important;
  `)}
`;

export default ServicesSection;
