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

function TeamLifeSection() {
  const page = useCurrentPage<TeamLifeSectionType>();
  const pageFields = page?.templateFields;
  return (
    <Wrapper>
      <BackgroundPicture
        mobileSmall={{
          src: teamLifeBgUrl,
          src2x: teamLifeBgUrl2x,
          webp: teamLifeBgUrlWebp,
          webp2x: teamLifeBgUrlWebp2x,
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
          <SkewButton href={pageFields?.teamLifeButton.link}>
            {pageFields?.teamLifeButton?.label}
            <IconWrapper>
              <InstagramIcon />
            </IconWrapper>
          </SkewButton>
        </StyledButton>
      </InstagramBlock>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 215px;
  padding-bottom: 78px;
  position: relative;
  background: ${colors.white};
  overflow: hidden;
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 1920px;
  text-align: center;
  transform: translateX(-50%);
`;

const Title = styled.span`
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
`;

const InstagramBlock = styled.div`
  margin-top: 98px;
  position: relative;
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
`;

const BackgroundPicture = styled(Picture)`
  &.team-life-background {
    position: absolute;
    left: 0;
    right: 0;
    display: block;
  }

  img {
    position: relative;
    margin: 0 auto;
    width: 144%;

    ${media.desktop1366(css`
      left: -95px;
      max-width: 1920px;
    `)}
  }
`;

const StyledButton = styled.div`
  margin: 45px auto 0;
  max-width: 369px;
`;

const IconWrapper = styled.i`
  margin-top: -2px;
  margin-left: 12px;
  display: inline-flex;
`;

export default TeamLifeSection;
