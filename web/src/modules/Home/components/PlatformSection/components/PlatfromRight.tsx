import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { ReactComponent as AppleBlackIcon } from '@/assets/svg/apple-black.svg';
import { ReactComponent as AndroidBlackIcon } from '@/assets/svg/android-black.svg';
import { colors } from '@/constants/theme';
import { ReactComponent as DashedTopLine } from '@/assets/svg/dashed-top-line.svg';
import { ReactComponent as DashedRectangleLine } from '@/assets/svg/dashed-rectangle.svg';
import { media } from '@/utils/mixin';

import SchemeListItem from './SchemeListItem';

gsap.registerPlugin(ScrollTrigger);

function PlatformRight() {
  const leftLabels = ['DOTween', '2D Toolkit', 'UniTask', 'Spine'];
  const rightLabels = ['FL UI Kit', 'GRPC', 'Protobuf', 'FMOD'];

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const osLeftItem = useRef<HTMLDivElement>(null);
  const osRightItem = useRef<HTMLDivElement>(null);

  const leftInfoItem = useRef<HTMLDivElement>(null);
  const rightInfoItem = useRef<HTMLDivElement>(null);

  const leftSchemeList = useRef<HTMLUListElement>(null);
  const rightSchemeList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let timeline: gsap.core.Timeline;

    gsap.delayedCall(0, () => {
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
            ease: Power3.easeOut,
            transformOrigin: '50% -100%',
            yPercent: -100,
            duration: 0.5,
            opacity: 0,
          },
          0
        )
        .from(
          osLeftItem.current,
          {
            ease: Power3.easeOut,
            transformOrigin: '-110%',
            xPercent: -110,
            duration: 0.5,
            opacity: 0,
          },
          0.5
        )
        .from(
          osRightItem.current,
          {
            ease: Power3.easeOut,
            transformOrigin: '110%',
            xPercent: 110,
            duration: 0.5,
            opacity: 0,
          },
          0.5
        )
        .from(
          leftInfoItem.current,
          {
            ease: Power3.easeOut,
            transformOrigin: '-110%',
            xPercent: -110,
            duration: 0.5,
            opacity: 0,
          },
          1
        )
        .from(
          rightInfoItem.current,
          {
            ease: Power3.easeOut,
            transformOrigin: '110%',
            xPercent: 110,
            duration: 0.5,
            opacity: 0,
          },
          1
        )
        .from(
          leftSchemeList.current,
          {
            ease: Power3.easeOut,
            transformOrigin: '-110%',
            xPercent: -110,
            duration: 0.5,
            opacity: 0,
          },
          1.5
        )
        .from(
          rightSchemeList.current,
          {
            ease: Power3.easeOut,
            transformOrigin: '110%',
            xPercent: 110,
            duration: 0.5,
            opacity: 0,
          },
          1.5
        );
    });

    return () => {
      timeline?.kill();
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Scheme>
        <WrapperItem ref={titleRef}>
          <Title>Platform specific C#</Title>
          <DashedLine>
            <DashedTopLine />
          </DashedLine>
        </WrapperItem>
        <Inner>
          <Blocks>
            <Block ref={osLeftItem}>
              <BlockInfo>
                <AppleBlackIcon />
                <BlockTitle>App</BlockTitle>
              </BlockInfo>

              <BlockLabel>NATIVE CODE</BlockLabel>
            </Block>

            <Block ref={osRightItem}>
              <BlockInfo>
                <AndroidBlackIcon />
                <BlockTitle>App</BlockTitle>
              </BlockInfo>

              <BlockLabel>NATIVE CODE</BlockLabel>
            </Block>
          </Blocks>

          <DashedBlocks>
            <DashedBlock ref={leftInfoItem}>
              <DashedBlockTitle>C# user interface</DashedBlockTitle>
              <DashedBlockLabel>SHARED CODE</DashedBlockLabel>
              <DashedRectangle>
                <DashedRectangleLine />
              </DashedRectangle>
            </DashedBlock>

            <DashedBlock ref={rightInfoItem}>
              <DashedBlockTitle>C# logic</DashedBlockTitle>
              <DashedBlockLabel>SHARED CODE</DashedBlockLabel>
              <DashedRectangle>
                <DashedRectangleLine />
              </DashedRectangle>
            </DashedBlock>
          </DashedBlocks>

          <SchemeBottom>
            <SchemeListLeft ref={leftSchemeList}>
              <SchemeListItem listItems={leftLabels} />
            </SchemeListLeft>

            <SchemeListRight ref={rightSchemeList}>
              <SchemeListItem listItems={rightLabels} />
            </SchemeListRight>
          </SchemeBottom>
        </Inner>
      </Scheme>
    </Container>
  );
}

const WrapperItem = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  margin-top: 14px;
  padding: 0 68px;
  flex: 1 1 46.6%;
  max-width: 46.6%;

  ${media.tabletSmall(css`
    padding: 0;
    flex: 1 1 50%;
    max-width: 50%;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 2px;
    margin-left: 103px;
    flex: 1 1 calc(35% + 103px);
    max-width: calc(35% + 103px);
  `)}

  ${media.mobile(css`
    margin-left: 0;
    margin-top: 50px;
    max-width: 100%;
  `)}
`;

const Scheme = styled.div`
  margin-left: auto;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-family: 'JetBrains Mono', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;

  ${media.tabletSmallOnly(css`
    font-size: 16px;
  `)}

  ${media.mobile(css`
    font-size: 20px;
  `)}
`;

const Inner = styled.div``;

const DashedLine = styled.div`
  margin: 0 21%;
  display: block;
`;

const DashedRectangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Blocks = styled.div`
  margin: 0 -10px;
  margin-top: -3px;
  display: flex;
  overflow: hidden;

  ${media.tabletSmall(css`
    margin: 0 -6px;
  `)}
`;

const Block = styled.div`
  position: relative;
  margin: 0 10px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%;
  max-width: 50%;
  background: ${colors.white};

  ${media.tabletSmall(css`
    margin: 0 6px;
    padding: 15px 22px 22px;
  `)}
`;

const BlockInfo = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  ${media.tabletSmallOnly(css`
    height: 32px;

    svg {
      max-height: 19px;
      max-width: 19px;
    }
  `)}

  ${media.mobile(css`
    height: 40px;

    svg {
      max-height: 22px;
      max-width: 22px;
    }
  `)}
`;

const BlockTitle = styled.span`
  margin-left: 19px;
  font-weight: 400;
  font-family: 'JetBrains Mono', sans-serif;
  font-size: 24px;
  line-height: 130%;
  color: ${colors.dark};

  ${media.tabletSmallOnly(css`
    margin-left: 7px;
    font-size: 13px;
  `)}

  ${media.mobile(css`
    margin-left: 12px;
    font-size: 16px;
  `)}
`;

const BlockLabel = styled.span`
  bottom: 5px;
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  color: ${colors.red};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  ${media.tabletSmallOnly(css`
    font-size: 8px;
  `)}

  ${media.mobile(css`
    font-size: 10px;
  `)}
`;

const DashedBlocks = styled.div`
  margin-top: 20px;
  overflow: hidden;

  ${media.tabletSmall(css`
    margin-top: 10px;
  `)}
`;

const DashedBlock = styled.div`
  position: relative;
  padding: 34px;
  text-align: center;

  ${media.tabletSmallOnly(css`
    padding: 11px 23px 23px;
  `)}
  ${media.mobile(css`
    padding: 13px 28px 28px;
  `)}
  &:first-child {
    svg {
      rect {
        height: 100%;
      }
    }
  }
`;

const DashedBlockTitle = styled.span`
  font-family: 'JetBrains Mono', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;

  ${media.tabletSmallOnly(css`
    font-size: 15px;
  `)}

  ${media.mobile(css`
    font-size: 18px;
  `)}
`;

const DashedBlockLabel = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;

  ${media.tabletSmallOnly(css`
    bottom: 7px;
    font-size: 8px;
  `)}

  ${media.mobile(css`
    bottom: 10px;
    font-size: 10px;
  `)}
`;

const SchemeBottom = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  overflow: hidden;
  ${media.tabletSmall(css`
    margin-top: 10px;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 15px;
  `)}

  ${media.mobile(css`
    font-size: 18px;
  `)}
`;

const SchemeListLeft = styled.ul`
  padding-left: 16px;
  position: relative;

  ${media.tabletSmallOnly(css`
    padding-left: 13px;
  `)}
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 6px;
    height: 93px;
    background: #fff;
    transform: translate(0, -50%);

    ${media.tabletSmallOnly(css`
      width: 5px;
      height: 70px;
    `)}

    ${media.mobile(css`
      width: 6px;
      height: 85px;
    `)}
  }
`;

const SchemeListRight = styled.ul`
  padding-right: 16px;
  position: relative;
  text-align: right;

  ${media.tabletSmallOnly(css`
    padding-right: 13px;
  `)}
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    width: 6px;
    height: 93px;
    background: #fff;
    transform: translate(0, -50%);

    ${media.tabletSmallOnly(css`
      width: 5px;
      height: 70px;
    `)}

    ${media.mobile(css`
      width: 6px;
      height: 85px;
    `)}
  }
`;

export default PlatformRight;
