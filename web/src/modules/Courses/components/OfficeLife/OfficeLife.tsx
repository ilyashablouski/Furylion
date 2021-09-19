import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import Picture from '@/components/Picture';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { StyledButtonLink } from '@/components/Button/Button';
import { media } from '@/utils/mixin';
import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { ReactComponent as TiktokIcon } from '@/assets/svg/social/tiktok.svg';

import Vector1 from '../../../../assets/svg/vector-black.svg';
import Vector2 from '../../../../assets/svg/vector-dashed.svg';

function OfficeLife() {
  const {
    officeLifeId,
    officeLifeTitle,
    officeLifeImage,
    officeLifeButtonFirstLabel,
    officeLifeButtonFirstUrl,
    officeLifeButtonFirstIsNewTab,
    officeLifeButtonSecondLabel,
    officeLifeButtonSecondUrl,
    officeLifeButtonSecondIsNewTab,
  } = useCoursesData();

  return (
    <Component id={officeLifeId ?? ''}>
      <FirstVector src={Vector1} />
      <SecondVector src={Vector2} />
      <Content>
        <ContentContainer>
          <Wrapper>
            <Header>
              <Title>{officeLifeTitle}</Title>
            </Header>
            <Phone
              src={officeLifeImage.url}
              src2x={officeLifeImage.url_2x}
              srcWebp={officeLifeImage.url_webp}
              srcWebp2x={officeLifeImage.url_webp_2x}
            />
          </Wrapper>
        </ContentContainer>
      </Content>
      <Bottom>
        <ContentContainer>
          <Buttons>
            <StyledButton>
              <ButtonLink
                href={officeLifeButtonFirstUrl ?? '#'}
                variants={['cut-bottom', 'darkRed', 'w100']}
                target={officeLifeButtonFirstIsNewTab ? '_blank' : undefined}
              >
                {officeLifeButtonFirstLabel}
                <IconWrapper>
                  <TiktokIcon />
                </IconWrapper>
              </ButtonLink>
            </StyledButton>

            <StyledButton right>
              <ButtonLink
                href={officeLifeButtonSecondUrl ?? '#'}
                variants={['cut-top', 'redDark', 'w100']}
                target={officeLifeButtonSecondIsNewTab ? '_blank' : undefined}
              >
                {officeLifeButtonSecondLabel}
                <IconWrapper>
                  <InstagramIcon />
                </IconWrapper>
              </ButtonLink>
            </StyledButton>
          </Buttons>
        </ContentContainer>
      </Bottom>
    </Component>
  );
}

export default OfficeLife;

const Component = styled.section`
  position: relative;
  padding-bottom: 80px;
  background: ${colors.red};
  overflow: hidden;
`;

const FirstVector = styled(Picture)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;

  img {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
`;

const SecondVector = styled(FirstVector)`
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 527px;

  ${media.tablet(css`
    margin-top: 0;
  `)}
`;

const Bottom = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px 0;
  margin-top: -20px;
  background: ${colors.white};
  transform: rotate(-3deg);

  ${media.tablet(css`
    padding: 15px 0;
    margin-top: 30px;
  `)}
`;

const Buttons = styled.div`
  display: flex;

  ${media.tablet(css`
    align-items: center;
    justify-content: center;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  flex: 0 0 265px;
  max-width: 265px;
  margin-left: ${(props) => (props.right ? '5px' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};

  ${media.tabletSmallOnly(css`
    flex: 0 0 186px;
    max-width: 186px;
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

const IconWrapper = styled.i`
  margin-left: 12px;
  margin-top: -2px;
  display: inline-flex;

  ${media.tablet(css`
    display: none;
  `)}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const Header = styled.div`
  max-width: 813px;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 88px;
  line-height: 120%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
    line-height: 130%;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Phone = styled(Picture)`
  margin-left: 78px;

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 32px;
  `)}
`;
