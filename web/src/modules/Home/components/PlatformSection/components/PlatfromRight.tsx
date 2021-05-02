import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as AppleBlackIcon } from '@/assets/svg/apple-black.svg';
import { ReactComponent as AndroidBlackIcon } from '@/assets/svg/android-black.svg';
import { colors } from '@/constants/theme';
import { ReactComponent as DashedTopLine } from '@/assets/svg/dashed-top-line.svg';
import { ReactComponent as DashedRectangleLine } from '@/assets/svg/dashed-rectangle.svg';
import { media } from '@/utils/mixin';

import SchemeListItem from './SchemeListItem';

function PlatformRight() {
  const leftLabels = ['DOTween', '2D Toolkit', 'UniTask', 'Spine'];
  const rightLabels = ['FL UI Kit', 'GRPC', 'Protobuf', 'FMOD'];

  return (
    <Container>
      <Scheme>
        <Title>Platform specific C#</Title>

        <Inner>
          <DashedLine>
            <DashedTopLine />
          </DashedLine>

          <Blocks>
            <Block>
              <BlockInfo>
                <AppleBlackIcon />
                <BlockTitle>App</BlockTitle>
              </BlockInfo>

              <BlockLabel>NATIVE CODE</BlockLabel>
            </Block>

            <Block>
              <BlockInfo>
                <AndroidBlackIcon />
                <BlockTitle>App</BlockTitle>
              </BlockInfo>

              <BlockLabel>NATIVE CODE</BlockLabel>
            </Block>
          </Blocks>

          <DashedBlocks>
            <DashedBlock>
              <DashedBlockTitle>C# user interface</DashedBlockTitle>
              <DashedBlockLabel>SHARED CODE</DashedBlockLabel>
              <DashedRectangle>
                <DashedRectangleLine />
              </DashedRectangle>
            </DashedBlock>

            <DashedBlock>
              <DashedBlockTitle>C# logic</DashedBlockTitle>
              <DashedBlockLabel>SHARED CODE</DashedBlockLabel>
              <DashedRectangle>
                <DashedRectangleLine />
              </DashedRectangle>
            </DashedBlock>
          </DashedBlocks>

          <SchemeBottom>
            <SchemeListLeft>
              <SchemeListItem listItems={leftLabels} />
            </SchemeListLeft>

            <SchemeListRight>
              <SchemeListItem listItems={rightLabels} />
            </SchemeListRight>
          </SchemeBottom>
        </Inner>
      </Scheme>
    </Container>
  );
}

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

const Inner = styled.div`
  margin-top: 5px;

  ${media.tabletSmallOnly(css`
    margin-top: 8px;
  `)}

  ${media.mobile(css`
    margin-top: 10px;
  `)}
`;

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
