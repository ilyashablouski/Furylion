import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import Picture from '@/components/Picture';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { StyledButtonLink } from '@/components/Button/Button';
import { media } from '@/utils/mixin';
import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { ReactComponent as TiktokIcon } from '@/assets/svg/social/tiktok.svg';

import Vector1 from '../../../../assets/svg/vector-black.svg';
import Vector2 from '../../../../assets/svg/vector-dashed.svg';

import Phone from './Phone';

function OfficeLife() {
  const {
    officeLifeId,
    officeLifeTitle,
    officeLifeImage,
    officeLifeVideo,
    officeLifePreview,
    officeLifeVideoAvatar,
    officeLifeAvatarTitle,
    officeLifeButtonFirstLabel,
    officeLifeButtonFirstUrl,
    officeLifeButtonFirstIsNewTab,
    officeLifeButtonSecondLabel,
    officeLifeButtonSecondUrl,
    officeLifeButtonSecondIsNewTab,
  } = useCoursesData();

  const componentRef = useRef<HTMLTableSectionElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const firstVectorRef = useRef<HTMLImageElement>(null);
  const secondVectorRef = useRef<HTMLImageElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tweenWrapper: gsap.core.Tween | undefined;
    let firstTweenImage: gsap.core.Tween | undefined;
    let secondTweenImage: gsap.core.Tween | undefined;
    let timeline: gsap.core.Timeline | undefined;

    const delayedCall = gsap.delayedCall(0, () => {
      if (
        !componentRef.current ||
        !wrapperRef.current ||
        !contentContainerRef.current ||
        !firstVectorRef.current ||
        !secondVectorRef.current ||
        !bottomRef.current
      ) {
        return;
      }

      function wrapperAnimation(start: string, end: string) {
        tweenWrapper?.kill();

        return gsap.to(wrapperRef.current, {
          scrollTrigger: {
            scroller: 'body',
            start,
            end: () => {
              if (!wrapperRef.current) {
                return end;
              }

              const { height } = wrapperRef.current.getBoundingClientRect();

              return `${end}-=${window.innerHeight - height}`;
            },
            trigger: contentContainerRef.current ?? undefined,
            pin: wrapperRef.current ?? undefined,
            pinSpacing: false,
          },
        });
      }

      ScrollTrigger.matchMedia({
        '(min-width: 1260px)': () => {
          tweenWrapper = wrapperAnimation('top top+=100', 'bottom bottom');
        },
      });

      let yPercent: gsap.TweenValue | undefined;
      let yPercentBottom: gsap.TweenValue | undefined;

      ScrollTrigger.matchMedia({
        '(min-width: 1260px)': function () {
          yPercent = '-2';
          yPercentBottom = '100';
        },
      });

      firstTweenImage = gsap.to(firstVectorRef.current, {
        yPercent: yPercent,
        scrollTrigger: {
          scroller: 'body',
          start: '70% 70%',
          end: '110% bottom',
          trigger: firstVectorRef.current,
          scrub: 2,
        },
      });

      secondTweenImage = gsap.to(secondVectorRef.current, {
        yPercent: yPercent,
        scrollTrigger: {
          scroller: 'body',
          start: '70% 70%',
          end: '110% bottom',
          trigger: secondVectorRef.current,
          scrub: 2,
        },
      });

      timeline = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          trigger: componentRef.current,
          start: 'top top',
          end: 'bottom 90%',
          scrub: 2,
        },
      });

      timeline = timeline.from(
        bottomRef.current,
        {
          ease: Power3.easeOut,
          yPercent: yPercentBottom,
          duration: 0.5,
        },
        0
      );
    });

    return () => {
      delayedCall.kill();
      tweenWrapper?.kill();
      firstTweenImage?.kill();
      secondTweenImage?.kill();
      timeline?.kill();
    };
  }, []);

  return (
    <Component id={officeLifeId ?? ''} ref={componentRef}>
      <FirstVector imageRef={firstVectorRef} src={Vector1} />
      <SecondVector imageRef={secondVectorRef} src={Vector2} />
      <Content>
        <ContentContainer ref={contentContainerRef}>
          <Wrapper ref={wrapperRef}>
            <Header>
              <Title>{officeLifeTitle}</Title>
            </Header>
            <Phone
              image={officeLifeImage}
              video={officeLifeVideo}
              preview={officeLifePreview}
              avatar={officeLifeVideoAvatar}
              title={officeLifeAvatarTitle}
            />
          </Wrapper>
        </ContentContainer>
      </Content>
      <Bottom ref={bottomRef}>
        <ContentContainer>
          <Buttons>
            <StyledButton>
              <ButtonLink
                href={officeLifeButtonFirstUrl ?? '#'}
                variants={['cut-bottom', 'darkRed', 'w100']}
                target={officeLifeButtonFirstIsNewTab ? '_blank' : undefined}
              >
                {officeLifeButtonFirstLabel}
                <IconWrapper>
                  <TiktokIcon />
                </IconWrapper>
              </ButtonLink>
            </StyledButton>

            <StyledButton right>
              <ButtonLink
                href={officeLifeButtonSecondUrl ?? '#'}
                variants={['cut-top', 'redDark', 'w100']}
                target={officeLifeButtonSecondIsNewTab ? '_blank' : undefined}
              >
                {officeLifeButtonSecondLabel}
                <IconWrapper>
                  <InstagramIcon />
                </IconWrapper>
              </ButtonLink>
            </StyledButton>
          </Buttons>
        </ContentContainer>
      </Bottom>
    </Component>
  );
}

export default OfficeLife;

const Component = styled.section`
  position: relative;
  padding-bottom: 80px;
  background: ${colors.red};
  overflow: hidden;
`;

const FirstVector = styled(Picture)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;

  img {
    position: relative;
    margin: 0 auto;
    width: 100%;
    transform: translateY(-50%);

    ${media.tablet(css`
      transform: translateY(0);
    `)}
  }
`;

const SecondVector = styled(Picture)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 0;

  img {
    position: relative;
    margin: 0 auto;
    width: 100%;
    transform: translateY(-50%);

    ${media.tablet(css`
      transform: translateY(0);
    `)}
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;

  ${ContentContainer} {
    position: relative;
    min-height: 160vh;
  }

  ${media.tablet(css`
    min-height: auto;
  `)}
`;

const Bottom = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px 0;
  margin-top: -20px;
  background: ${colors.white};
  transform: rotate(-3deg);
  width: 102%;
  margin-left: -1%;

  ${media.tablet(css`
    padding: 15px 0;
    margin-top: 30px;
  `)}
`;

const Buttons = styled.div`
  display: flex;

  ${media.tablet(css`
    align-items: center;
    justify-content: center;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  flex: 0 0 265px;
  max-width: 265px;
  margin-left: ${(props) => (props.right ? '5px' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};

  ${media.tabletSmallOnly(css`
    flex: 0 0 186px;
    max-width: 186px;
  `)}

  ${media.mobile(css`
    flex: 0 0 195px;
    max-width: 195px;
  `)} 
  
  ${media.mobile576(css`
    flex: auto;
    max-width: none;
  `)}
`;

const ButtonLink = styled(StyledButtonLink)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile(css`
    font-size: 12px;
    line-height: 130%;
  `)}
`;

const IconWrapper = styled.i`
  margin-left: 12px;
  margin-top: -2px;
  display: inline-flex;

  ${media.tablet(css`
    display: none;
  `)}
`;

const Wrapper = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-direction: column;
    padding-top: 20px;
  `)}
`;

const Header = styled.div`
  max-width: 813px;

  ${media.tablet(css`
    max-width: none;
  `)}
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 88px;
  line-height: 120%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
    line-height: 130%;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;
