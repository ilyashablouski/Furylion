import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ClockIcon } from '@/assets/svg/vacancy/clock.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { JobCardType } from '@/typings/model';
import Link from '@/components/Link';
import Button from '@/components/Button';

interface Props extends JobCardType {
  className?: string;
  heroCard?: boolean;
  onClick?: () => void;
}
function JobCard({
  title,
  image,
  urlAlias,
  excerpt,
  level,
  typeOfWork,
  heroCard = false,
  className,
  onClick,
}: Props) {
  return (
    <Container className={className} onClick={onClick}>
      {!heroCard && <JobLink to={`careers/${urlAlias}`} />}
      <Title>{title}</Title>
      <ImageContainer heroCard={heroCard}>
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
          {!heroCard && (
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
          {!heroCard ? (
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
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  transition: 150ms all ease-in-out;
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

const Container = styled.div`
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

    &.hero-card {
      ${ImageContainer} {
        &:before {
          border: 15px dashed ${colors.white};
        }
      }
    }

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

const Title = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
`;

const ExcerptText = styled.p`
  margin-top: 25px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const LabelIcon = styled.i`
  margin-right: 10px;
  display: inline-flex;
`;

const Bottom = styled.div`
  margin-top: auto;
`;

export default JobCard;
