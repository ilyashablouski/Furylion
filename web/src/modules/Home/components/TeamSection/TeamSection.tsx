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
      <TitleBlock>
        <Title>Team</Title>
      </TitleBlock>
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
        <SkewButton href={pageFields?.teamButtonUrl} color="red">
          {pageFields?.teamButtonLabel}
        </SkewButton>
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 83px;
  position: relative;
  background: ${colors.white};
  overflow: hidden;

  ${media.tabletSmallOnly(
    css`
      padding-top: 95px;
    `
  )}

  ${media.mobile(
    css`
      padding-top: 95px;
    `
  )}
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
  font-size: 474px;
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
  &.team-background {
    position: relative;
    display: block;
  }

  img {
    position: relative;
    padding-bottom: 13.9%;
    margin: 0 auto;
    width: 108.2%;
    left: -57px;
    max-width: 1920px;

    ${media.tabletSmallOnly(css`
      left: -86px;
      padding-bottom: 16.5%;
      width: 117.2%;
    `)}

    ${media.mobile(css`
      left: -17px;
      padding-bottom: 31%;
      width: 109.2%;
    `)}
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 66.7%;
    background: ${colors.dark};
    clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
    z-index: 1;
    overflow: hidden;

    ${media.tabletSmallOnly(css`
      height: 60.7%;
    `)}

    ${media.tabletSmallOnly(css`
      height: 57%;
    `)}

    ${media.mobile(css`
      height: 57.5%;
    `)}
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1920px;
  transform: translateX(-50%);
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
  top: 76.7%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;

  ${media.tabletSmallOnly(css`
    top: 87.5%;
  `)}

  ${media.mobile(css`
    max-width: 302px;
    top: 84.6%;
  `)}
`;

export default TeamSection;
