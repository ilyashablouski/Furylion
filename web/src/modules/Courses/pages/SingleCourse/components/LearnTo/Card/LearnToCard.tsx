import React from 'react';
import styled, { css } from 'styled-components';

import { LearnItem } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';
import { colors } from '@/constants/theme';

function LearnToCard({
  title,
  description,
  isActive,
  cardRef,
  image,
  ...rest
}: LearnItem) {
  return (
    <Component {...rest} ref={cardRef} isActive={isActive}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Component>
  );
}

export default LearnToCard;

const Component = styled.div<{ isActive: LearnItem['isActive'] }>`
  display: flex;
  flex-direction: column;
  opacity: 0.2;
  cursor: pointer;
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

const Title = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.white};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 160%;
  margin-top: 16px;
  color: ${colors.white};
`;
