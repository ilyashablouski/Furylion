import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

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
import { StringFieldType } from '@/typings/common';
import { coordinateTeamItems } from '@/modules/Home/components/TeamSection/TeamSection.constans';
import PictureModal from '@/components/modals/PictureModal';

gsap.registerPlugin(ScrollTrigger);

const saveRef = (
  key: number,
  refList: React.MutableRefObject<(HTMLDivElement | null)[]>
) => (ref: null | HTMLDivElement) => {
  refList.current[key] = ref;
};

function TeamSection() {
  const page = useCurrentPage<TeamSectionType>();
  const pageFields = page?.templateFields;
  const teamItems = pageFields?.teamItems;

  const containerRef = useRef<HTMLDivElement>(null);
  const bgPictureRef = useRef<HTMLImageElement>(null);
  const teamItemRefList = useRef<Array<HTMLDivElement | null>>(
    new Array(teamItems?.length).fill(null)
  );

  useEffect(() => {
    let timeline: gsap.core.Timeline;
    const delayed = gsap.delayedCall(0, () => {
      if (!containerRef.current) return null;

      timeline = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          trigger: containerRef.current,
          start: 'top 90%',
        },
      });

      timeline.from(
        bgPictureRef.current,
        {
          stagger: 0.15,
          ease: 'customEaseInOut',
          transformOrigin: '50% 40%',
          yPercent: 40,
          duration: 1,
        },
        0
      );

      teamItemRefList.current.forEach((teamItem, index) => {
        timeline.from(
          teamItem,
          {
            css: {
              scale: 0.1,
              opacity: 0,
              transition: 'linear',
            },
            duration: 0.5,
            delay: index / 3,
          },
          1.5
        );
      });
    });

    return () => {
      timeline?.kill();
      delayed?.kill();
    };
  }, []);

  return (
    <Wrapper id={pageFields?.teamId ?? ''} ref={containerRef}>
      <WrapperItem>
        <BackgroundPicture
          imageRef={bgPictureRef}
          loading={'lazy'}
          mobileSmall={{
            src: teamBgUrl,
            src2x: teamBgUrl2x,
            webp: teamBgUrlWebp,
            webp2x: teamBgUrlWebp2x,
          }}
          className="team-background"
        />
      </WrapperItem>

      <TitleBlock>
        <Title>Team</Title>
      </TitleBlock>
      <Inner>
        {teamItems
          ? teamItems.map((item, index) => {
              const width =
                coordinateTeamItems[index]?.width ??
                coordinateTeamItems[0]?.width;
              const left =
                coordinateTeamItems[index]?.leftX ??
                coordinateTeamItems[0]?.leftX;
              const top =
                coordinateTeamItems[index]?.topY ??
                coordinateTeamItems[0]?.topY;

              return (
                <TeammatePictureItem
                  ref={saveRef(index, teamItemRefList)}
                  key={index}
                  itemWidth={width}
                  itemLeftOffset={left}
                  itemTopOffset={top}
                  data-index={index}
                >
                  <Picture
                    loading={'lazy'}
                    mobileSmall={convertThumbnailToPictureImage(item)}
                    className="teammate-image-block"
                  />
                </TeammatePictureItem>
              );
            })
          : null}
      </Inner>

      <StyledButton>
        <SkewButton
          href={pageFields?.teamButtonUrl}
          color="darkRed"
          isNewTab={pageFields?.teamButtonIsNewTab}
        >
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

const WrapperItem = styled.div``;

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
  top: 0;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  z-index: 1;
`;

const TeammatePictureItem = styled.div<{
  itemWidth: StringFieldType;
  itemLeftOffset: StringFieldType;
  itemTopOffset: StringFieldType;
}>`
  position: absolute;
  border-radius: 100%;
  overflow: hidden;
  transition: all 150ms ease-in-out;
  will-change: transform;
  z-index: 1;
  @media (min-width: 1024px) {
    cursor: pointer;
    &:hover {
      transform: scale(1.2) !important;
      z-index: 10;
    }
  }

  img {
    image-rendering: -webkit-optimize-contrast;
  }

  ${(props) =>
    props.itemWidth &&
    css`
      left: ${((Number(props.itemLeftOffset) * 100) / 1366).toFixed(2) + '%'};
      top: ${((Number(props.itemTopOffset) * 100) / 1598).toFixed(2) + '%'};
      max-width: ${((Number(props.itemWidth) * 100) / 1366).toFixed(2) + '%'};
    `}
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
