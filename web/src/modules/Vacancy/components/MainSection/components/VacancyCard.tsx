import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ClockIcon } from '@/assets/svg/vacancy/clock.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { VacancyCardType } from '@/typings/model';
import { media } from '@/utils/mixin';

function VacancyCard({ image, level, typeOfWork }: VacancyCardType) {
  return (
    <Container>
      <ImageContainer>
        {/*<Picture*/}
        {/*  mobileSmall={{*/}
        {/*    src: image?.url,*/}
        {/*    src2x: image?.url_2x,*/}
        {/*    webp: image?.url_webp,*/}
        {/*    webp2x: image?.url_webp_2x,*/}
        {/*  }}*/}
        {/*  className={'vacancy-image'}*/}
        {/*/>*/}

        <Picture
          mobileSmall={{
            src: image ?? '',
          }}
          className={'vacancy-image'}
        />
      </ImageContainer>

      <Labels>
        <LabelLeft>
          <LabelIcon>
            <ClockIcon />
          </LabelIcon>
          {typeOfWork}
        </LabelLeft>
        <LabelRight>{level}</LabelRight>
      </Labels>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;

  ${media.mobile(css`
    width: 320px;
  `)}
`;

const ImageContainer = styled.div`
  position: relative;
  width: 293px;
  height: 419px;
  background: ${colors.white};
  border: 15px solid ${colors.white};
  filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.25));

  ${media.mobile(css`
    width: 320px;
    height: 458px;
  `)}

  .vacancy-image {
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Labels = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  transition: 150ms all ease-in-out;
`;

const LabelLeft = styled.span`
  display: inline-flex;
  align-items: center;
`;

const LabelRight = styled.span`
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${colors.white};
`;

const LabelIcon = styled.i`
  margin-right: 6px;
  display: inline-flex;
`;

export default VacancyCard;
