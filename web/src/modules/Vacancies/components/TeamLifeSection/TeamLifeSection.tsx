import React from 'react';
import styled, { css } from 'styled-components';

import teamLifeBgUrl from '@/assets/images/team-life/team-life-bg.png';
import teamLifeBgUrl2x from '@/assets/images/team-life/team-life-bg@2x.png';
import teamLifeBgUrlWebp from '@/assets/images/team-life/team-life-bg@2x.webp';
import teamLifeBgUrlWebp2x from '@/assets/images/team-life/team-life-bg@2x.webp';
import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';
import useCurrentPage from '@/hooks/useCurrentPage';
import ContentContainer from '@/components/ContentContainer';
import SkewButton from '@/components/SkewButton';
import { TeamLifeSectionType } from '@/typings/model';

import InstagramFeed from './components/InstagramFeed';

function TeamLifeSection() {
  const page = useCurrentPage<TeamLifeSectionType>();
  const pageFields = page?.templateFields;

  return (
    <Wrapper id={pageFields?.teamLifeId ?? ''}>
      <BackgroundPicture
        mobileSmall={{
          src: teamLifeBgUrl,
          src2x: teamLifeBgUrl2x,
          //webp: teamLifeBgUrlWebp,
          //webp2x: teamLifeBgUrlWebp2x,
        }}
        className="team-life-background"
      />
      <TitleBlock>
        <Title>Team Life</Title>
      </TitleBlock>

      <InstagramBlock>
        <ContentContainer>
          <InstagramBlockTitle>{pageFields?.teamLifeTitle}</InstagramBlockTitle>
          <InstagramBlockText
            dangerouslySetInnerHTML={{
              __html: pageFields?.teamLifeDescription ?? '',
            }}
          />
        </ContentContainer>

        <StyledButton>
          <SkewButton
            href={pageFields?.teamLifeButton.link}
            color="darkRed"
            isNewTab={true}
          >
            {pageFields?.teamLifeButton?.label}
            <IconWrapper>
              <InstagramIcon />
            </IconWrapper>
          </SkewButton>
        </StyledButton>

        <ContentContainer>
          <InstagramFeed />
        </ContentContainer>
      </InstagramBlock>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 78px;
  position: relative;
  background: ${colors.white};
  overflow: hidden;

  ${media.tabletSmallOnly(css`
    padding-bottom: 50px;
  `)}

  ${media.mobile(css`
    padding-bottom: 0;
  `)}
`;

const TitleBlock = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1920px;
  text-align: center;
  overflow: hidden;
  z-index: 1;
`;

const Title = styled.span`
  display: block;
  width: 100%;
  font-weight: 900;
  font-size: 263px;
  line-height: 72%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.red};

  ${media.desktop1366(
    css`
      font-size: 19.3vw;
    `
  )}

  ${media.mobile(
    css`
      font-size: 34.1vw;
      white-space: normal;
    `
  )}
`;

const InstagramBlock = styled.div`
  margin-top: 120px;
  position: relative;

  ${media.tabletSmallOnly(css`
    margin-top: 92px;
  `)}

  ${media.mobile(css`
    margin-top: 36px;
  `)}
`;

const InstagramBlockTitle = styled.span`
  margin: 0 auto;
  display: block;
  max-width: 1242px;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.dark};

  ${media.tabletSmall(css`
    font-size: 32px;
  `)}
`;

const InstagramBlockText = styled.div`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 972px;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  color: ${colors.dark};

  ${media.tabletSmall(css`
    margin-top: 20px;
    max-width: 554px;
    font-size: 14px;
  `)}

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const BackgroundPicture = styled(Picture)`
  &.team-life-background {
    position: absolute;
    top: 215px;
    left: 0;
    right: 0;
    display: block;

    ${media.tabletSmallOnly(css`
      top: 124px;
    `)}

    ${media.mobile(css`
      top: 163px;
    `)}
  }

  img {
    position: relative;
    margin: 0 auto;
    width: 144%;
    max-width: 1920px;

    ${media.desktop1366(css`
      left: -95px;
    `)}

    ${media.tabletSmallOnly(css`
      left: -105px;
      width: 148%;
    `)}

    ${media.mobile(css`
      left: -18px;
      max-width: none;
      width: 111%;
    `)}
  }
`;

const StyledButton = styled.div`
  margin: 45px auto 0;
  max-width: 369px;

  ${media.tabletSmall(css`
    margin: 20px auto 0;
  `)}

  ${media.mobile(css`
    margin: 30px auto 0;
    max-width: 300px;
  `)}
`;

const IconWrapper = styled.i`
  margin-top: -2px;
  margin-left: 12px;
  display: inline-flex;
`;

export default TeamLifeSection;
