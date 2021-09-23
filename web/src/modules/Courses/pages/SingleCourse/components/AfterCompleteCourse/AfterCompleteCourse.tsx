import React from 'react';
import styled, { css } from 'styled-components';

import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import { media } from '@/utils/mixin';
import CurveButton from '@/components/CurveButton';

import ListItem from './Card';

function AfterCompleteCourse() {
  const {
    afterCompleteId,
    afterCompleteTitle,
    afterCompleteItems,
    courseCostTitle,
    courseCost,
    courseStartTitle,
    courseStartDate,
    coursePlacesTitle,
    coursePlaces,
    singUpCourseButtonLabel,
    singUpCourseButtonIsNewTab,
  } = useSingleCourseData();

  return (
    <Component id={afterCompleteId ?? ''}>
      <ContentContainer>
        <Title>{afterCompleteTitle}</Title>

        <Items>
          {afterCompleteItems &&
            afterCompleteItems.map(({ skill }, index) => (
              <ListItem skill={skill} key={index} />
            ))}
        </Items>

        <Information>
          <Left>
            <PriceTitle>{courseCostTitle}</PriceTitle>
            <Price>{courseCost}</Price>
          </Left>

          <Right>
            <DateCard>
              <DateTitle>{courseStartTitle}</DateTitle>
              <Date>{courseStartDate}</Date>
            </DateCard>

            <PlacesCard>
              <PlacesTitle>{coursePlacesTitle}</PlacesTitle>
              <Places>{coursePlaces}</Places>
            </PlacesCard>
          </Right>
        </Information>

        <ButtonWrapper>
          <StyledCurveButton
            label={singUpCourseButtonLabel}
            variants={['curve', 'curve-dark', 'w100']}
            isNewTab={singUpCourseButtonIsNewTab}
          />
        </ButtonWrapper>
      </ContentContainer>
    </Component>
  );
}

export default AfterCompleteCourse;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.red};
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  max-width: 813px;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 27px;

  ${media.tablet(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 54px 54px 31px 54px;
  margin-top: 54px;
  background: ${colors.white};

  ${media.tablet(css`
    flex-direction: column;
    padding: 30px;
  `)}

  ${media.mobile(css`
    padding: 20px;
  `)}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceTitle = styled(Title)`
  font-size: 32px;
  text-transform: none;
  color: ${colors.dark};

  ${media.mobile(css`
    font-size: 18px;
    line-height: 160%;
  `)}
`;

const Price = styled(PriceTitle)`
  font-size: 113px;
  text-transform: uppercase;
  margin-top: 4px;

  ${media.tablet(css`
    font-size: 94px;
    margin-top: 12px;
    line-height: 100%;
  `)}

  ${media.mobile(css`
    font-size: 42px;
    margin-top: 4px;
    line-height: 130%;
  `)}
  
  ${media.mobileSmall(css`
    font-size: 35px;
  `)}
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  ${media.tablet(css`
    flex-direction: row;
    margin-left: 0;
    margin-top: 24px;
  `)}
`;

const DateCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateTitle = styled.span`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.dark};

  ${media.mobileSmall(css`
    font-size: 13px;
  `)}
`;

const Date = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  margin-top: 8px;
  color: ${colors.dark};

  ${media.mobile(css`
    font-size: 18px;
    margin-top: 4px;
    line-height: 130%;
  `)}

  ${media.mobileSmall(css`
    font-size: 16px;
  `)}
`;

const PlacesCard = styled(DateCard)`
  margin-top: 26px;

  ${media.tablet(css`
    margin-top: 0;
    margin-left: 40px;
  `)}

  ${media.mobile(css`
    margin-left: 30px;
  `)}
`;

const PlacesTitle = styled(DateTitle)``;

const Places = styled(Date)``;

const ButtonWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  justify-content: center;

  ${media.tablet(css`
    margin-top: 32px;
  `)}
`;

const StyledCurveButton = styled(CurveButton)`
  font-size: 24px !important;
`;
