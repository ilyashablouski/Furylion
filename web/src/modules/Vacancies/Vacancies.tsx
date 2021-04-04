import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import PlainPicture from '@/components/Picture';

function Vacancies() {
  const page = useCurrentPage();

  return (
    <HeaderSection>
      <Inner>
        <Title data-text="VACANCIES">Vacancies</Title>
        <ImageContainer>
          <PlainPicture />
        </ImageContainer>
      </Inner>
    </HeaderSection>
  );
}

const HeaderSection = styled.section`
  padding-top: 221px;
  position: relative;
  text-align: center;
`;

const Inner = styled.div`
  display: inline-block;
`;
const Title = styled.span`
  position: relative;
  z-index: 1;
  width: 100%;
  font-weight: 900;
  font-size: 225.58px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.desktop1366(css`
    font-size: 16.5vw;
  `)}

  &:before {
    content: attr(data-text);
    position: absolute;
    top: -13.1%;
    left: 0;
    transform-origin: bottom;
    transform: rotateX(180deg);
    line-height: 1em;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.26) -0.06%,
      rgba(155, 155, 155, 0) 37.65%
    );
    filter: blur(2px);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 13.7%;
  right: 7.7%;
`;

export default Vacancies;
