import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import PlainPicture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { TeamLifeSectionType } from '@/typings/model';

function HeaderSection() {
  const page = useCurrentPage<TeamLifeSectionType>();
  const pageFields = page?.templateFields;
  const image = pageFields?.headImage;
  return (
    <Wrapper>
      <Inner>
        <Title data-text="VACANCIES">Vacancies</Title>
        <ImageContainer>
          <PlainPicture mobileSmall={convertThumbnailToPictureImage(image)} />
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  padding-top: 226px;
  max-width: 1920px;
  text-align: center;

  ${media.tabletSmallOnly(css`
    padding-top: 193px;
  `)}

  ${media.mobile(css`
    padding-top: 201px;
  `)}
`;

const Inner = styled.div`
  position: relative;
  display: inline-block;
`;
const Title = styled.span`
  position: relative;
  z-index: 1;
  width: 100%;
  font-weight: 900;
  font-size: 223px;
  line-height: 100%;
  text-transform: uppercase;
  word-break: break-word;
  color: ${colors.white};

  ${media.desktop1366(css`
    font-size: 16.1vw;
  `)}

  ${media.mobile(css`
    font-size: 15.7vw;
  `)}

  &:before {
    content: attr(data-text);
    position: absolute;
    top: -14%;
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
  bottom: 13.5%;
  right: 2.2%;

  ${media.tabletSmallOnly(css`
    max-width: 262px;
    right: 0;
  `)}

  ${media.mobile(css`
    margin: auto;
    right: 0;
    left: 67px;
    max-width: 187px;
  `)}
`;

export default HeaderSection;
