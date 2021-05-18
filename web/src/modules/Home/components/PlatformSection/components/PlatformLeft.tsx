import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { ThumbnailType } from '@tager/web-modules';

import Picture from '@/components/Picture';
import { StringFieldType } from '@/typings/common';
import { media } from '@/utils/mixin';
import { ButtonLink } from '@/components/Button';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: StringFieldType;
  text: StringFieldType;
  logos: Array<ThumbnailType>;
  addText: StringFieldType;
  btnFirstLabel: StringFieldType;
  btnFirstUrl: StringFieldType;
  btnSecondLabel: StringFieldType;
  btnSecondUrl: StringFieldType;
  btnFirstIsNewTab: boolean;
  btnSecondIsNewTab: boolean;
};

function PlatformLeft({
  title,
  text,
  logos,
  addText,
  btnFirstLabel,
  btnFirstUrl,
  btnSecondLabel,
  btnSecondUrl,
  btnFirstIsNewTab,
  btnSecondIsNewTab,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const additionalTitleRef = useRef<HTMLDivElement>(null);
  const additionTextRef = useRef<HTMLDivElement>(null);
  const buttonLeft = useRef<HTMLDivElement>(null);
  const buttonRight = useRef<HTMLDivElement>(null);
  const logoRefList = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    let timeline: gsap.core.Timeline;
    let delayedCall: gsap.core.Tween;

    delayedCall = gsap.delayedCall(0, () => {
      if (!containerRef.current) return null;

      timeline = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      timeline
        .from(
          titleRef.current,
          {
            stagger: 0.15,
            ease: 'customEaseInOut',
            transformOrigin: '50% 100%',
            yPercent: 100,
            duration: 0.5,
          },
          0
        )
        .from(
          subTitleRef.current,
          {
            ease: 'customEaseInOut',
            transformOrigin: '50% 100%',
            yPercent: 100,
            duration: 0.5,
          },
          0.5
        );

      logoRefList.forEach((ref, index) => {
        timeline.from(ref.current, {
          stagger: 0.15,
          ease: 'customEaseInOut',
          transformOrigin: '50% 100%',
          yPercent: 110,
          duration: 0.3,
        });
      });
    });

    delayedCall = gsap.delayedCall(0, () => {
      if (!additionalTitleRef.current) return null;

      timeline = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          trigger: additionalTitleRef.current,
          start: 'top 90%',
        },
      });

      timeline
        .from(
          additionalTitleRef.current,
          {
            ease: 'customEaseInOut',
            transformOrigin: '50% 100%',
            yPercent: 100,
            duration: 0.5,
          },
          1
        )
        .from(
          additionTextRef.current,
          {
            stagger: 0.15,
            ease: 'customEaseInOut',
            transformOrigin: '50% 100%',
            yPercent: 100,
            duration: 0.3,
          },
          2
        )
        .from(
          buttonLeft.current,
          {
            stagger: 0.15,
            ease: 'customEaseInOut',
            transformOrigin: '-100%',
            xPercent: -100,
            duration: 0.3,
          },
          2
        )
        .from(
          buttonRight.current,
          {
            stagger: 0.15,
            ease: 'customEaseInOut',
            transformOrigin: '100%',
            xPercent: 100,
            duration: 0.3,
          },
          2
        );
    });

    return () => {
      timeline?.kill();
      delayedCall?.kill();
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <WrapperText>
        <Title ref={titleRef}>{title}</Title>
      </WrapperText>
      <WrapperText>
        <Text ref={subTitleRef}>{text}</Text>
      </WrapperText>
      <Logos>
        {logos
          ? logos.map((logo, index) => (
              <Logo ref={logoRefList[index]} key={index}>
                <Picture
                  mobileSmall={{
                    src: logo?.url,
                    src2x: logo?.url_2x,
                    webp: logo?.url_webp,
                    webp2x: logo?.url_webp_2x,
                  }}
                />
              </Logo>
            ))
          : null}
      </Logos>
      <AdditionalBlock>
        <WrapperText>
          <AdditionalTitle ref={additionalTitleRef}>
            Additional:
          </AdditionalTitle>
        </WrapperText>

        {addText ? (
          <WrapperText>
            <AdditionalText
              ref={additionTextRef}
              dangerouslySetInnerHTML={{ __html: addText }}
            />
          </WrapperText>
        ) : null}
      </AdditionalBlock>

      <Buttons>
        <StyledButton ref={buttonLeft}>
          <ButtonLink
            href={btnFirstUrl ?? '#'}
            variants={['cut-bottom', 'white-dark', 'w100']}
            target={btnFirstIsNewTab ? '_blank' : '_self'}
          >
            {btnFirstLabel}
          </ButtonLink>
        </StyledButton>

        <StyledButton ref={buttonRight} right>
          <ButtonLink
            href={btnSecondUrl ?? '#'}
            variants={['cut-top', 'dark', 'w100']}
            target={btnSecondIsNewTab ? '_blank' : '_self'}
          >
            {btnSecondLabel}
          </ButtonLink>
        </StyledButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 68px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmall(css`
    padding: 0;
    max-width: 50%;
  `)}

  ${media.tabletSmallOnly(css`
    padding: 0;
    flex: 1 1 65%;
    max-width: 65%;
  `)}

  ${media.mobile(css`
    max-width: 100%;
  `)}
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;

  ${media.tabletSmall(css`
    position: absolute;
    top: 70px;
    left: auto;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const WrapperText = styled.div`
  overflow: hidden;
`;

const Text = styled.p`
  margin-top: 38px;
  max-width: 388px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  ${media.tabletSmall(css`
    font-size: 12px;
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 41px;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const Logos = styled.div`
  margin-top: 37px;
  display: flex;
  align-items: center;
  max-width: 700px;
  justify-content: space-between;
  overflow: hidden;

  ${media.tabletSmallOnly(css`
    margin-top: 43px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Logo = styled.div`
  &:not(:first-child) {
    margin-left: 30px;
  }

  img {
    max-height: 75px;

    ${media.tabletSmall(css`
      max-height: 59px;
    `)}
  }
`;

const AdditionalBlock = styled.div`
  margin-top: 40px;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const AdditionalTitle = styled.span`
  display: block;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;

  ${media.tabletSmall(css`
    font-size: 20px;
  `)}
`;

const AdditionalText = styled.div`
  margin-top: -3px;
  max-width: 631px;
  font-weight: 400;
  font-size: 14px;
  line-height: 187.5%;

  ${media.tabletSmall(css`
    font-size: 12px;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 10px;
  `)}

  ${media.mobile(css`
    margin-top: 5px;
  `)}
`;

const Buttons = styled.div`
  margin-top: 44px;
  display: inline-flex;
  overflow: hidden;

  ${media.tabletSmall(css`
    position: absolute;
    left: auto;
    margin-top: 0;
  `)}

  ${media.tabletSmallOnly(css`
    bottom: 75px;
  `)}

  ${media.mobile(css`
    left: -20px;
    right: -20px;
    bottom: 60px;
    width: auto;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  margin-left: ${(props) => (props.right ? '-3%' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};
  flex: 0 0 265px;
  max-width: 265px;

  ${media.tabletSmallOnly(css`
    flex: 0 0 186px;
    max-width: 186px;
  `)}

  ${media.mobile(css`
    flex: auto;
    max-width: none;
  `)}
`;

export default PlatformLeft;
