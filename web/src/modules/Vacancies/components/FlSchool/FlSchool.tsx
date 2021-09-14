import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useFlSchoolData } from '@/modules/Vacancies/components/FlSchool/FlSchool.hooks';
import SkewButton from '@/components/SkewButton';
import { media } from '@/utils/mixin';

import CourseCard from './Card';

function FlSchool() {
  const {
    flSchoolId,
    flSchoolTitle,
    flSchoolSubtitle,
    flSchoolLinkUrl,
    flSchoolLabel,
    flSchoolIsNewTab,
    flSchoolCoursesTitle,
    flSchoolCourses,
  } = useFlSchoolData();
  return (
    <Component id={flSchoolId ?? ''}>
      <ContentContainer>
        <Top>
          <Left>
            <Title>{flSchoolTitle}</Title>
            <Subtitle
              dangerouslySetInnerHTML={{ __html: flSchoolSubtitle ?? '' }}
            />
            <StyledButton>
              <StyledSkewButton
                href={flSchoolLinkUrl}
                color="redTransparent"
                isNewTab={flSchoolIsNewTab}
              >
                {flSchoolLabel}
              </StyledSkewButton>
            </StyledButton>
          </Left>
          <Right>
            <CoursesTitle>{flSchoolCoursesTitle}</CoursesTitle>
            <Cards>
              {flSchoolCourses.map((course, index) => (
                <CourseCard {...course} key={index} />
              ))}
            </Cards>
          </Right>
        </Top>
      </ContentContainer>
    </Component>
  );
}

export default FlSchool;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tablet(css`
    flex: auto;
    max-width: none;
  `)}
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  max-width: 528px;
  color: ${colors.white};

  ${media.tablet(css`
    max-width: none;
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Subtitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  margin-top: 24px;
  color: ${colors.white};

  & > p > u {
    text-decoration-color: ${colors.red};
    text-underline-offset: 8px;
  }

  ${media.tablet(css`
    margin-top: 20px;
    font-size: 20px;
  `)}
`;

const StyledButton = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 370px;
  z-index: 2;

  ${media.tablet(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    max-width: 302px;
  `)}
`;

const StyledSkewButton = styled(SkewButton)`
  ${media.mobile(css`
    font-size: 22px;
  `)}
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 70px;
    flex: auto;
    max-width: none;
  `)}
`;

const CoursesTitle = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 20px;
  `)}
`;

const Cards = styled.div`
  margin-top: 24px;
`;
