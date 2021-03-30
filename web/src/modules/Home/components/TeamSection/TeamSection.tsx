import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { TeamSectionType } from '@/typings/model';
import teamBgUrl from '@/assets/images/team/team-bg.png';
import teamBgUrl2x from '@/assets/images/team/team-bg@2x.png';
import teamBgUrlWebp from '@/assets/images/team/team-bg@2x.webp';
import teamBgUrlWebp2x from '@/assets/images/team/team-bg@2x.webp';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import SkewButton from '@/components/SkewButton';
import { media } from '@/utils/mixin';

function TeamSection() {
  const page = useCurrentPage<TeamSectionType>();
  const pageFields = page?.templateFields;
  const teamImagesArray = pageFields?.teamGallery;
  return (
    <Wrapper>
      <BackgroundPicture
        mobileSmall={{
          src: teamBgUrl,
          src2x: teamBgUrl2x,
          webp: teamBgUrlWebp,
          webp2x: teamBgUrlWebp2x,
        }}
        className="team-background"
      />
      <Title>Team</Title>
      <Inner>
        {teamImagesArray
          ? teamImagesArray.map((image, index) => (
              <TeammatePicture
                key={index}
                mobileSmall={{
                  src: image?.url,
                  src2x: image?.url_2x,
                  webp: image?.url_webp,
                  webp2x: image?.url_webp_2x,
                }}
              />
            ))
          : null}
      </Inner>

      <StyledButton>
        <SkewButton href={pageFields?.teamButtonUrl}>
          {pageFields?.teamButtonLabel}
        </SkewButton>
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 130px;
  position: relative;
  background: ${colors.white};
  overflow: hidden;
`;

const Title = styled.span`
  position: absolute;
  top: 0;
  left: -18px;
  display: block;
  width: 100vw;
  font-weight: 900;
  font-size: 34.9vw;
  line-height: 72%;
  text-transform: uppercase;
  color: ${colors.red};
`;

const BackgroundPicture = styled(Picture)`
  &.team-background {
    position: relative;
    display: block;
  }

  img {
    position: relative;
    padding-bottom: 14.5%;
    margin: 0 auto;
    width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 67%;
    background: ${colors.dark};
    clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const TeammatePicture = styled(Picture)`
  flex: 1 1 25%;
  max-width: 25%;
  border-radius: 100%;
  overflow: hidden;
`;

const StyledButton = styled.div`
  width: 100%;
  max-width: 370px;
  top: 77.3%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;

  ${media.tabletSmallOnly(css`
    top: 87%;
  `)}

  ${media.mobile(css`
    max-width: 302px;
    top: 84%;
  `)}
`;

export default TeamSection;
