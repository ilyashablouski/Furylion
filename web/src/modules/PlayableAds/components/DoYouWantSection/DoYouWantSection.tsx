import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { DoYouWantSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';

import ImagesRow from './components/ImagesRow';

gsap.registerPlugin(ScrollTrigger);

function DoYouWantSection() {
  const page = useCurrentPage<DoYouWantSectionType>();
  const titleRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let tw: gsap.core.Tween;
    if (!titleRef.current) return;

    tw = gsap.to(titleRef.current, {
      xPercent: 100,
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: 1,
        start: '-520% 30%',
        end: 'bottom 10%',
      },
    });

    return () => {
      tw?.kill();
    };
  }, []);

  if (!page) return null;

  const pageFields = page.templateFields;
  const firstGalleryItems = page.templateFields.doYouWantFirstGallery;
  const secondGalleryItems = page.templateFields.doYouWantSecondGallery;
  const thirdGalleryItems = page.templateFields.doYouWantThirdGallery;

  return (
    <Wrapper id={pageFields?.doYouWantId ?? ''}>
      <Inner>
        <TitleBlock>
          <Title ref={titleRef}>{pageFields.doYouWantTitle}</Title>
        </TitleBlock>
        <ImagesContainer>
          <ImagesRow galleryItems={firstGalleryItems} />
          <ImagesRow galleryItems={secondGalleryItems} />
          <ImagesRow galleryItems={thirdGalleryItems} />
        </ImagesContainer>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background: ${colors.red};
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1920px;
  min-height: 966px;
`;

const TitleBlock = styled.div`
  display: flex;
`;

const Title = styled.span`
  display: inline-block;
  font-weight: 900;
  font-size: 178.605px;
  line-height: 72.5%;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};
  position: relative;
  transform: translateX(-100%);
  pointer-events: none;
  z-index: 1;

  ${media.tabletSmall(css`
    margin-top: 70px;
    padding-left: 0;
    display: block;
    text-align: left;
    animation: none;
    white-space: normal;
    line-height: 130%;
  `)}

  ${media.tabletSmallOnly(css`
    padding: 0 40px;
    font-size: 56px;
    max-width: 540px;
  `)}

  ${media.mobile(css`
    padding: 0 20px;
    font-size: 32px;
    max-width: 328px;
  `)}
`;

const ImagesContainer = styled.div`
  transform-origin: center center;
  transform: rotate(17deg);
`;

export default DoYouWantSection;
