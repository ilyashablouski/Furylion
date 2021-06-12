import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimation, setAnimationStatus] = useState<boolean>(false);

  useEffect(() => {
    function onScroll() {
      if (hasAnimation) return;
      if (containerRef.current) {
        if (
          window.pageYOffset + window.innerHeight >
            containerRef.current.offsetTop ??
          0
        ) {
          setAnimationStatus(true);
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    let tw: gsap.core.Tween;

    const delayedCall = gsap.delayedCall(0, () => {
      if (hasAnimation) {
        if (!titleRef.current || !containerRef.current) return;

        let percent: gsap.TweenValue = 100;

        ScrollTrigger.matchMedia({
          '(min-width: 768px)': function () {
            percent = 110;
          },
          '(min-width: 1367px)': function () {
            percent = 100;
          },
        });

        tw = gsap.to(titleRef.current, {
          xPercent: percent,
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            start: '-30% 30%',
            end: '0% 15%',
            markers: true,
          },
        });
      }
    });

    return () => {
      delayedCall?.kill();
      tw?.kill();
    };
  }, [hasAnimation]);

  if (!page) return null;

  const pageFields = page.templateFields;
  const firstGalleryItems = page.templateFields.doYouWantFirstGallery;
  const secondGalleryItems = page.templateFields.doYouWantSecondGallery;
  const thirdGalleryItems = page.templateFields.doYouWantThirdGallery;

  return (
    <Wrapper ref={containerRef} id={pageFields?.doYouWantId ?? ''}>
      <Inner>
        <TitleBlock>
          <Title className="do-you-want-title" ref={titleRef}>
            {pageFields.doYouWantTitle}
          </Title>
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
  transform: translateX(-100%);
  position: relative;

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
    max-width: 365px;
  `)}
`;

const ImagesContainer = styled.div`
  transform-origin: center center;
  transform: rotate(17deg);
`;

export default DoYouWantSection;
