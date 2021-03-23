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
  padding: 0 68px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.desktop1366(css`
    margin-left: 100px;
    padding-left: 0;
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
`;

const Inner = styled.div`
  margin-top: 5px;
`;

const DashedLine = styled.div`
  margin: 0 23%;
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
  display: flex;
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
`;

const BlockInfo = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

const BlockTitle = styled.span`
  margin-left: 19px;
  font-weight: 400;
  font-family: 'JetBrains Mono', sans-serif;
  font-size: 24px;
  line-height: 130%;
  color: ${colors.dark};
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
`;

const DashedBlocks = styled.div`
  margin-top: 20px;
`;

const DashedBlock = styled.div`
  position: relative;
  padding: 35px;
  text-align: center;

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
`;

const SchemeListLeft = styled.ul`
  padding-left: 16px;
  position: relative;

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
  }
`;

const SchemeListRight = styled.ul`
  padding-right: 16px;
  position: relative;

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
  }
`;

export default PlatformRight;
