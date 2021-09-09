import React from 'react';
import styled, { css } from 'styled-components';

import Picture from '@/components/Picture';
import { Course } from '@/modules/Courses/Courses.types';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function CoursesCard(
  {
    image,
    title,
    subtitle,
    termRegistrationTitle,
    termRegistrationDate,
    educationStartTitle,
    educationStartDate,
    placesLeftTitle,
    placesLeftCount,
    trainingPeriodTitle,
    trainingPeriodDate,
  }: Course,
  isComingSoon: boolean
) {
  return (
    <Component>
      <Background
        src={image.desktop.url}
        src2x={image.desktop.url_2x}
        srcWebp={image.desktop.url_webp}
        srcWebp2x={image.desktop.url_webp_2x}
      />
      <Container>
        <Inner>
          <Left>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {isComingSoon ? (
              ''
            ) : (
              <Blocks>
                <Item>
                  <ItemTitle>{termRegistrationTitle}</ItemTitle>
                  <ItemDescription>{termRegistrationDate}</ItemDescription>
                </Item>
                <Item>
                  <ItemTitle>{educationStartTitle}</ItemTitle>
                  <ItemDescription>{educationStartDate}</ItemDescription>
                </Item>
                <Item>
                  <ItemTitle>{placesLeftTitle}</ItemTitle>
                  <ItemDescription>{placesLeftCount}</ItemDescription>
                </Item>
                <Item>
                  <ItemTitle>{trainingPeriodTitle}</ItemTitle>
                  <ItemDescription>{trainingPeriodDate}</ItemDescription>
                </Item>
              </Blocks>
            )}
          </Left>
          <Right>Кнопка</Right>
        </Inner>
      </Container>
    </Component>
  );
}

export default CoursesCard;

const Component = styled.div`
  position: relative;
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 68px;
  z-index: 3;
`;

const Inner = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0 80%;
  max-width: 80%;
`;

const Right = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 120%;
  color: ${colors.white};
  text-transform: uppercase;
`;

const Subtitle = styled.span`
  margin-top: 8px;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
  text-transform: uppercase;
`;

const Blocks = styled.div`
  display: flex;
  margin-top: 60px;
`;

const Item = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px dashed ${colors.white};

  &:not(:first-child) {
    margin-left: 24px;
  }
`;

const ItemTitle = styled.span`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const ItemDescription = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  margin-top: 8px;
  color: ${colors.white};
`;

const Background = styled(Picture)`
  min-height: 412px;

  ${media.desktop1366(
    css`
      min-height: inherit;
      padding-top: calc(100% * 412 / 1366.4);
    `
  )}

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

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(90deg, rgba(25, 24, 20, 0) 0%, #191814 100.6%);
  }
`;
