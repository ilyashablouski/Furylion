import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

export const Component = styled.section`
  position: relative;
  background: ${colors.dark};
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 1920px;
  text-align: center;
  transform: translateX(-50%);
`;

export const Title = styled.span`
  width: 100%;
  font-weight: 900;
  font-size: 368px;
  line-height: 75%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.desktop1366(
    css`
      font-size: 27.1vw;
    `
  )}
`;

export const Cards = styled.div`
  position: relative;
  margin-top: 65px;

  & > div:nth-child(3) > div:first-child {
    &:after {
      background: rgba(25, 24, 20, 0.6);
      backdrop-filter: blur(7px);
    }
  }
`;
