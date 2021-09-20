import React from 'react';
import styled, { css } from 'styled-components';

import Picture from '@/components/Picture';
import { Step } from '@/modules/Courses/Courses.types';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function StepsCard({ image, title, description }: Step) {
  return (
    <Component>
      <Background
        src={image.mobile.url}
        src2x={image.mobile.url_2x}
        srcWebp={image.mobile.url_webp}
        srcWebp2x={image.mobile.url_webp_2x}
      />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Component>
  );
}

export default StepsCard;

const Component = styled.div`
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
`;

const Background = styled(Picture)`
  padding-top: 174.3%;

  picture {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
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
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 74.48%);
  }

  &:hover {
    &:before {
      border-color: ${colors.white};
    }
  }

  ${media.tablet(css`
    padding-top: 152.696%;
  `)}

  ${media.mobile(css`
    padding-top: 143.75%;
  `)}
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  padding: 34px;
`;

const Title = styled.span`
  position: relative;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
`;

const Description = styled.p`
  position: relative;
  margin-top: 8px;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;
