import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ClockIcon } from '@/assets/svg/vacancy/clock.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { JobCardType } from '@/typings/model';
import Link from '@/components/Link';
import Button, { ButtonLink } from '@/components/Button';

function JobCard({
  title,
  image,
  urlAlias,
  excerpt,
  level,
  typeOfWork,
}: JobCardType) {
  return (
    <Container>
      <JobLink to={`careers/${urlAlias}`} />
      <Title>{title}</Title>
      <ImageContainer>
        <Picture
          mobileSmall={{
            src: image?.url,
            src2x: image?.url_2x,
            webp: image?.url_webp,
            webp2x: image?.url_webp_2x,
          }}
          className={'vacancy-image'}
        />
      </ImageContainer>
      <ExcerptText>{excerpt}</ExcerptText>

      <Bottom>
        <Labels>
          <LabelLeft>
            <LabelIcon>
              <ClockIcon />
            </LabelIcon>
            {typeOfWork}
          </LabelLeft>
          <LabelRight>{level}</LabelRight>
        </Labels>

        <ButtonContainer>
          <CardButton variants={['dark', 'w100']}>Apply</CardButton>
        </ButtonContainer>
      </Bottom>
    </Container>
  );
}

const ImageContainer = styled.div`
  position: relative;
  margin-top: 19px;
  min-height: 419px;
  max-height: 419px;
  background: ${colors.white};
  border: 15px solid ${colors.dark};
  filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.25));
  transition: 150ms all ease-in-out;

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

  &:hover {
    ${ImageContainer} {
      border: 15px solid ${colors.white};
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
