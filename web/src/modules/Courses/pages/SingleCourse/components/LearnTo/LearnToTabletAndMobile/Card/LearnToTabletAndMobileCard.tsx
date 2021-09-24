import React from 'react';
import styled, { css } from 'styled-components';

import { LearnItem } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';
import { colors } from '@/constants/theme';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';

function LearnToTabletAndMobileCard({ title, description, image }: LearnItem) {
  return (
    <Component>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ImageContainer>
        <Image
          src={image?.url}
          src2x={image?.url_2x}
          srcWebp={image?.url_webp}
          srcWebp2x={image?.url_webp_2x}
        />
        <Filter />
      </ImageContainer>
    </Component>
  );
}

export default LearnToTabletAndMobileCard;

const Component = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 64px;
  }
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.mobile(css`
    line-height: 130%;
  `)}
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 160%;
  margin-top: 12px;
  color: ${colors.white};
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 40px;
`;

const Image = styled(Picture)`
  position: relative;
  margin: 0 auto;
  height: 239px;
  max-width: 284px;

  picture {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Filter = styled.div`
  position: absolute;
  width: 284px;
  height: 100px;
  top: 26%;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background: #413f3a;
  filter: blur(70px);
  transform: rotate(-38.85deg);
`;
