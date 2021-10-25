import React from 'react';
import styled, { css } from 'styled-components';

import Picture from '@/components/Picture';
import { Step } from '@/modules/Courses/Courses.types';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function StepsCard({ image, title, position, description }: Step) {
  return (
    <Component position={position}>
      <Background
        src={image.url}
        src2x={image.url_2x}
        srcWebp={image.url_webp}
        srcWebp2x={image.url_webp_2x}
        position={position}
      />
      <Content position={position}>
        <Title>{title}</Title>
        {position && <Position>{position}</Position>}
        <Description position={position}>{description}</Description>
      </Content>
    </Component>
  );
}

export default StepsCard;

const Component = styled.div<{ position: Step['position'] }>`
  position: relative;
  opacity: 0.5;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 1;
  }

  ${media.tablet(css`
    opacity: 1;
  `)}

  ${({ position }) =>
    position &&
    css`
      opacity: 1;
      cursor: initial;
    `};
`;

const Background = styled(Picture)<{ position: Step['position'] }>`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  picture,
  img {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    transition: 0.3s;
    border: 15px solid ${colors.black};

    ${media.tablet(css`
      border-color: ${colors.white};
    `)}

    ${({ position }) =>
      position &&
      css`
        border: 15px solid ${colors.white};

        ${media.mobile(css`
          border: 12px solid ${colors.white};
        `)}
      `};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      ${colors.black} 74.48%
    );

    ${({ position }) =>
      position &&
      css`
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 50%,
          ${colors.black} 95.9%
        );
      `};
  }

  &:hover {
    &:before {
      border-color: ${colors.white};
    }
  }
`;

const Content = styled.div<{ position: Step['position'] }>`
  position: relative;
  margin-top: 89.15%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  padding: 34px;

  ${({ position }) =>
    position &&
    css`
      margin-top: 85.978%;

      ${media.mobile(css`
        padding: 28px;
      `)}
    `};
`;

const Title = styled.span`
  position: relative;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
`;

const Position = styled.span`
  font-size: 14px;
  line-height: 160%;
  font-weight: bold;
  color: ${colors.white};
`;

const Description = styled.p<{ position: Step['position'] }>`
  position: relative;
  margin-top: 8px;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${({ position }) =>
    position &&
    css`
      margin-top: 0;
    `};
`;
