import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ClockIcon } from '@/assets/svg/vacancy/clock.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { VacancyCardFullType } from '@/typings/model';
import Link from '@/components/Link';
import Button from '@/components/Button';
import { media } from '@/utils/mixin';

interface Props {
  card: VacancyCardFullType;
  className?: string;
  isHeroCard?: boolean;
  onClick?: () => void;
}
function JobCard({ card, isHeroCard = false, className, onClick }: Props) {
  const { title, image, urlAlias, excerpt, level, typeOfWork } = card;

  return (
    <Container className={className} onClick={onClick} isHeroCard={isHeroCard}>
      {!isHeroCard && <JobLink to={`careers/${urlAlias}`} />}
      <Title heroCard={isHeroCard}>{title}</Title>
      <ImageContainer heroCard={isHeroCard}>
        <Picture
          mobileSmall={{
            src: image?.url,
            src2x: image?.url_2x,
            webp: image?.url_webp,
            webp2x: image?.url_webp_2x,
          }}
          className={'vacancy-image-block'}
        />
      </ImageContainer>
      <ExcerptText>{excerpt}</ExcerptText>

      <Bottom>
        <Labels>
          {!isHeroCard && (
            <LabelLeft>
              <LabelIcon>
                <ClockIcon />
              </LabelIcon>
              {typeOfWork}
            </LabelLeft>
          )}

          <LabelRight>{level}</LabelRight>
        </Labels>

        <ButtonContainer>
          {!isHeroCard ? (
            <CardButton variants={['dark', 'w100']}>Apply</CardButton>
          ) : (
            <CardButton variants={['dashed', 'w100']}>Apply</CardButton>
          )}
        </ButtonContainer>
      </Bottom>
    </Container>
  );
}

const ImageContainer = styled.div<{ heroCard: boolean }>`
  position: relative;
  margin-top: 19px;
  min-height: 419px;
  max-height: 419px;
  filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.25));

  ${media.tabletSmall(css`
    margin-top: 15px;
  `)}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 150ms all ease-in-out;
    ${(props) =>
      props.heroCard
        ? css`
            border: 15px dashed ${colors.dark};
          `
        : css`
            border: 15px solid ${colors.dark};
          `};
  }

  .vacancy-image-block {
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      ${(props) =>
        props.heroCard
          ? css`
              background: transparent;
            `
          : css`
              background: ${colors.white};
            `};
    }
  }
`;

const Labels = styled.div`
  margin-top: 17px;
  min-height: 20px;
  display: flex;
  justify-content: space-between;
  transition: 150ms all ease-in-out;

  ${media.tabletSmall(css`
    margin-top: 25px;
  `)}
`;

const LabelLeft = styled.span`
  display: inline-flex;
  align-items: center;
`;

const LabelRight = styled.span`
  display: inline-flex;
  align-items: center;
  text-decoration-line: underline;
`;

const CardButton = styled(Button)`
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
`;

const Container = styled.div<{ isHeroCard?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  &:hover {
    ${ImageContainer} {
      &:before {
        border: 15px solid ${colors.white};
      }
    }

    ${(props) =>
      props.isHeroCard
        ? css`
            ${ImageContainer} {
              &:before {
                border: 15px dashed ${colors.white};
              }
            }
          `
        : ''}

    ${Labels} {
      color: ${colors.white};
    }

    ${CardButton} {
      background: ${colors.white};
      color: ${colors.dark};
    }
  }
`;

const JobLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Title = styled.span<{ heroCard: boolean }>`
  ${(props) =>
    !props.heroCard
      ? css`
          color: ${colors.white};
        `
      : css`
          font-family: 'Inter', sans-serif;
          color: transparent;
          text-stroke: 1px ${colors.white};
        -webkit-text-stroke: 1px ${colors.white};
      }
        `}
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;

  ${media.tabletSmall(css`
    font-size: 20px;
  `)}
`;

const ExcerptText = styled.p`
  margin-top: 25px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tabletSmall(css`
    margin-top: 15px;
  `)}
`;

const LabelIcon = styled.i`
  margin-right: 10px;
  display: inline-flex;
`;

const Bottom = styled.div`
  margin-top: auto;
`;

export default JobCard;
