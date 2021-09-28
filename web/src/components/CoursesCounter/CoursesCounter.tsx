import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  isDark?: boolean;
};

function CoursesCounter({ isDark = false }: Props) {
  return (
    <Container isDark={isDark}>
      <Label isDark={isDark}>2</Label>
    </Container>
  );
}

const Container = styled.div<{ isDark?: boolean }>`
  position: relative;
  width: 18px;
  height: 18px;
  background: ${(props) =>
    props.isDark ? `${colors.dark}` : `${colors.white}`};
  border-radius: 100%;

  ${media.tabletSmall(css`
    background: ${colors.dark};
  `)}
`;

const Label = styled.span<{ isDark?: boolean }>`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 10px;
  color: ${(props) => (props.isDark ? `${colors.white}` : `${colors.dark}`)};

  ${media.tabletSmall(css`
    color: ${colors.white};
  `)}
`;

export default CoursesCounter;
