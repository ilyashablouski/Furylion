import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { media } from '@/utils/mixin';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import ArtSwiper2 from '@/modules/Services/components/ArtSwiper2';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';

function AboutUs() {
  const {
    aboutUsId,
    aboutUsTitle,
    aboutUsDescription,
    aboutUsImages,
  } = useCoursesData();

  const vectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tw: gsap.core.Tween;
    const delayedCall = gsap.delayedCall(0, () => {
      if (!vectorRef.current) return null;

      let left: gsap.TweenValue | undefined;

      ScrollTrigger.matchMedia({
        '(min-width: 1260px)': function () {
          left = '62%';
        },
      });

      tw = gsap.to(vectorRef.current, {
        left: left,
        scrollTrigger: {
          start: 'center 100%',
          end: '70% 70%',
          trigger: vectorRef.current,
          scrub: true,
        },
      });
    });

    return () => {
      delayedCall.kill();
      tw?.kill();
    };
  }, []);

  return (
    <Wrapper id={aboutUsId ?? ''} className="anchor-section">
      <Left>
        <Vector ref={vectorRef} />
        <ArtSwiper2 images={aboutUsImages} isRightSide={false} />
      </Left>
      <Right>
        <ContentContainer>
          <Title>{aboutUsTitle}</Title>
          <TextContainer>
            <Text>{aboutUsDescription}</Text>
          </TextContainer>
        </ContentContainer>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-height: 750px;
  display: flex;
  background: ${colors.red};
  overflow: hidden;

  ${media.tablet(css`
    flex-direction: column-reverse;
    padding-bottom: 70px;
  `)}
`;

const Vector = styled.span`
  visibility: visible;
  position: absolute;
  width: 140%;
  height: 100%;
  right: 0;
  bottom: 0;
  background: ${colors.red};
  z-index: 2;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 27% 100%);

  ${media.tablet(css`
    visibility: hidden;
  `)}
`;

const Left = styled.div`
  position: relative;
  flex: 0 0 673px;
  max-width: 673px;
  overflow: hidden;

  ${media.tablet(css`
    max-width: none;
  `)}
`;

const Right = styled.div`
  margin-top: 163px;
  padding-bottom: 100px;

  ${media.tablet(css`
    margin-top: 0;
    padding: 70px 0 32px 0;
  `)}
  ${ContentContainer} {
    padding-left: 0;

    ${media.tablet(css`
      padding-left: 68px;
    `)}

    ${media.tabletSmallOnly(css`
      padding-left: 40px;
    `)}

    ${media.mobile(css`
      padding-left: 20px;
    `)}
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
  position: relative;
  max-width: 800px;

  ${media.tablet(css`
    margin-left: 0;
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;
const TextContainer = styled.div`
  margin-top: 24px;
  position: relative;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 14px;
  `)}
`;

export default AboutUs;
