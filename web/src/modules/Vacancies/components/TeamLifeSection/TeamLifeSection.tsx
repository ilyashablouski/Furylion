import React from 'react';
import styled, { css } from 'styled-components';

import teamLifeBgUrl from '@/assets/images/team-life/team-life-bg.png';
import teamLifeBgUrl2x from '@/assets/images/team-life/team-life-bg@2x.png';
import teamLifeBgUrlWebp from '@/assets/images/team-life/team-life-bg@2x.webp';
import teamLifeBgUrlWebp2x from '@/assets/images/team-life/team-life-bg@2x.webp';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';

function TeamLifeSection() {
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 83px;
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
  color: ${colors.red};

  ${media.desktop1366(
    css`
      font-size: 34.1vw;
    `
  )}
`;

const BackgroundPicture = styled(Picture)`
  &.team-life-background {
    position: relative;
    display: block;
  }

  img {
    position: relative;
    margin: 0 auto;
    width: 108.2%;
    left: -57px;
    max-width: 1920px;
  }
`;
export default TeamLifeSection;
