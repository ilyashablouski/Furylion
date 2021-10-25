import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import Vector from '@/assets/svg/vector-red.svg';
import Picture from '@/components/Picture';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import SkewButton from '@/components/SkewButton';

import StudentWorkTop from './components/StudentWorkTop';
import StudentWorkBottom from './components/StudentWorkBottom';

gsap.registerPlugin(ScrollTrigger);

function StudentWork() {
  const {
    studentsId,
    studentsTitle,
    studentsItems,
    studentsBottomItems,
    studentsBottomLabel,
    studentsBottomLinkUrl,
    studentsBottomText,
  } = useCoursesData();

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

      let topPositionForTitle: gsap.TweenValue | undefined;

      ScrollTrigger.matchMedia({
        '(min-width: 1556px)': () => {
          topPositionForTitle = '96%';
          endTitleAnimation = '700% 10%';
        },

        '(min-width: 768px) and (max-width: 1555.9px)': () => {
          topPositionForTitle = '90%';
          endTitleAnimation = '600% 20%';
        },
      });

      tweenImage = gsap.to(imageRef.current, {
        yPercent: 100,
        scrollTrigger: {
          start: '70% 70%',
          end: '160% 90%',
          trigger: imageRef.current,
          scrub: 2,
        },
      });

      tweenTitle = gsap.to(titleRef.current, {
        top: topPositionForTitle,
        scale: 0.7,
        scrollTrigger: {
          start: 'center 20%',
          end: endTitleAnimation,
          trigger: titleRef.current,
          scrub: 1,
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
    <Wrapper id={studentsId ?? ''}>
      <ServicesPreviewContent>
        <PreviewImageWrapper>
          <Picture imageRef={imageRef} src={Vector} />
        </PreviewImageWrapper>
        <Title ref={titleRef}>{studentsTitle}</Title>
      </ServicesPreviewContent>

      <ServicesWrapper>
        <StudentWorkTop studentWorksItems={studentsItems} />
        <StudentWorkBottom studentWorksBottomItems={studentsBottomItems} />
      </ServicesWrapper>

      <BottomContent>
        <Text>{studentsBottomText}</Text>

        <StyledSkewButton href={studentsBottomLinkUrl} color="redWhite">
          {studentsBottomLabel}
        </StyledSkewButton>
      </BottomContent>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding-bottom: 80px;

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
  ${media.mobile(css`
    display: none;
  `)}

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
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: block;
  font-weight: 900;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 90.885px;
  text-shadow: 0 51px 100px rgba(0, 0, 0, 0.25);
  min-width: 100%;

  ${media.tabletSmall(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    top: 97% !important;
    left: 50%;
    transform: translate(-50%, -100%) scale(1) !important;
    text-shadow: 0 51px 100px rgb(0 0 0 / 60%);
  `)}
`;

const BottomContent = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  text-align: center;
  margin-top: 56px;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 24px;
  `)}
`;

const StyledSkewButton = styled(SkewButton)`
  margin-top: 56px;
  max-width: 397px;
`;

export default StudentWork;
