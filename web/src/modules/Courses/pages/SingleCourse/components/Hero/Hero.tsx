import React from 'react';
import styled, { css } from 'styled-components';

import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';
import Button, { StyledButtonLink } from '@/components/Button/Button';

function Hero() {
  const {
    heroId,
    heroTitle,
    heroSubtitle,
    heroDescription,
    courseRegistrationTitle,
    courseRegistration,
    heroCoursePlacesTitle,
    heroCoursePlaces,
    heroButtonFirstUrl,
    heroButtonFirstLabel,
    heroButtonFirstIsNewTab,
    heroButtonSecondLabel,
    heroImage,
  } = useSingleCourseData();
  return (
    <Component id={heroId ?? ''}>
      <BackgroundImage
        src={heroImage?.url}
        src2x={heroImage?.url_2x}
        srcWebp={heroImage?.url_webp}
        srcWebp2x={heroImage?.url_webp_2x}
      />
      <ContentContainer>
        <Top>
          <Header>
            <Title>{heroTitle}</Title>
          </Header>

          <Content>
            <Subtitle>{heroSubtitle}</Subtitle>
            <Description>{heroDescription}</Description>
          </Content>
        </Top>

        <Bottom>
          <Cards>
            <RegistrationCard>
              <RegistrationTitle>{courseRegistrationTitle}</RegistrationTitle>
              <Registration>{courseRegistration}</Registration>
            </RegistrationCard>

            <PlacesCard>
              <PlacesTitle>{heroCoursePlacesTitle}</PlacesTitle>
              <Places>{heroCoursePlaces}</Places>
            </PlacesCard>
          </Cards>

          <Buttons>
            <StyledButton>
              <ButtonLink
                href={heroButtonFirstUrl ?? '#'}
                variants={['cut-bottom', 'redWhite', 'w100']}
                target={heroButtonFirstIsNewTab ? '_blank' : undefined}
              >
                {heroButtonFirstLabel}
              </ButtonLink>
            </StyledButton>

            <StyledButton right>
              <CourseButton variants={['cut-top', 'red', 'w100']}>
                {heroButtonSecondLabel}
              </CourseButton>
            </StyledButton>
          </Buttons>
        </Bottom>
      </ContentContainer>
    </Component>
  );
}

export default Hero;

const Component = styled.section`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  background: ${colors.dark};

  ${ContentContainer} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(var(--vh, 1vh) * 100);

    ${media.tablet(css`
      align-items: flex-start;
    `)}
  }
`;

const BackgroundImage = styled(Picture)`
  position: initial;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    top: 0;
    left: 0;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: scale-down;

    ${media.tablet(css`
      object-fit: cover;
    `)}
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const Header = styled.div`
  flex: 1 1 813px;

  ${media.tablet(css`
    flex: auto;
  `)}
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 126px;
  line-height: 90%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 84px;
    line-height: 100%;
  `)}

  ${media.mobile(css`
    font-size: 51px;
    line-height: 90%;
  `)}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 40px;
  max-width: 397px;

  ${media.tablet(css`
    margin-left: 0;
  `)}
`;

const Subtitle = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 24px;
    margin-top: 32px;
  `)}

  ${media.mobile(css`
    font-size: 18px;
  `)}
`;

const Description = styled.span`
  font-size: 14px;
  line-height: 160%;
  margin-top: 16px;
  color: ${colors.white};

  ${media.tablet(css`
    margin-top: 24px;
  `)}

  ${media.mobile(css`
    font-size: 12px;
    line-height: 130%;
    margin-top: 12px;
  `)}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
  width: 100%;

  ${media.tablet(css`
    flex-direction: column;
    margin-top: 32px;
  `)}
`;

const Cards = styled.div`
  display: flex;
`;

const RegistrationCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegistrationTitle = styled.span`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const Registration = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  margin-top: 8px;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 18px;
    margin-top: 4px;
    line-height: 130%;
  `)}
`;

const PlacesCard = styled(RegistrationCard)`
  margin-left: 54px;

  ${media.tablet(css`
    margin-top: 0;
    margin-left: 40px;
  `)}

  ${media.mobile(css`
    margin-left: 30px;
  `)}
`;

const PlacesTitle = styled(RegistrationTitle)``;

const Places = styled(Registration)``;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;

  ${media.tablet(css`
    justify-content: flex-start;
    margin-left: 0;
    margin-top: 137px;
  `)}

  ${media.mobile(css`
    margin-top: 50px;
  `)}
  
  ${media.mobile576(css`
    position: absolute;

    width: 100%;
    right: 0;
    top: 70%;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  min-width: 386px;
  margin-left: ${(props) => (props.right ? '-25px' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};

  ${media.tablet(css`
    min-width: auto;

    flex: 0 0 358px;
    max-width: 358px;

    &:last-child {
      margin-left: -5px;
    }
  `)}

  ${media.mobile(css`
    flex: 0 0 195px;
    max-width: 195px;
  `)} 
  
  ${media.mobile576(css`
    flex: auto;
    max-width: none;
  `)}
`;

const ButtonLink = styled(StyledButtonLink)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile(css`
    font-size: 12px;
    line-height: 130%;
  `)}
`;

const CourseButton = styled(Button)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile(css`
    font-size: 12px;
    line-height: 130%;
  `)}
`;
