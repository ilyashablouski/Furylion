import React from 'react';
import styled, { css } from 'styled-components';

import { LearnItem } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';
import { colors } from '@/constants/theme';

function LearnToCard({
  title,
  description,
  isActive,
  onPointerDown,
}: LearnItem) {
  return (
    <Component onPointerEnter={onPointerDown} isActive={isActive}>
      <Title isActive={isActive}>{title}</Title>
      <Description>{description}</Description>
    </Component>
  );
}

export default LearnToCard;

const Component = styled.div<{ isActive: LearnItem['isActive'] }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0.2;
  transition: 0.3s;

  &:not(:first-child) {
    margin-top: 32px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `};
`;

const Title = styled.span<{ isActive: LearnItem['isActive'] }>`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.white};

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: ${colors.red} underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 4px;
    `};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 160%;
  margin-top: 16px;
  color: ${colors.white};
`;
