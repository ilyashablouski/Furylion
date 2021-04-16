import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import Picture from '@/components/Picture';
import useSettingItem from '@/hooks/useSettingItem';
import Link from '@/components/Link';
import { ReactComponent as InstagramVideoIcon } from '@/assets/svg/vacancies/instagram-video-icon.svg';
import { ReactComponent as InstagramGalleryIcon } from '@/assets/svg/vacancies/instagram-gallery-icon.svg';
import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function InstagramFeed() {
  const instagramItems = useSettingItem('INSTAGRAM');
  return (
    <Container>
      <Wrapper>
        {instagramItems.map((instagramItem, index) => {
          return (
            <InstagramItem key={index}>
              <IconContainer>
                {instagramItem.type === 'CAROUSEL_ALBUM' && (
                  <InstagramGalleryIcon />
                )}

                {instagramItem.type === 'VIDEO' && <InstagramVideoIcon />}
              </IconContainer>

              <ItemLink to={instagramItem.url} target="_blank" />
              <ImageContainer>
                <Picture
                  mobileSmall={convertThumbnailToPictureImage(
                    instagramItem.preview
                  )}
                  className="instagram-thumbnail"
                />
                <InstagramIconWrapper>
                  <InstagramIcon />
                </InstagramIconWrapper>
              </ImageContainer>
            </InstagramItem>
          );
        })}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 65px;

  ${media.tabletSmall(css`
    margin-top: 50px;
  `)}
`;

const Wrapper = styled.div`
  margin: -40px -20px 0;
  display: flex;
  flex-wrap: wrap;

  ${media.tabletSmallOnly(css`
    margin: -20px -10px 0;
  `)}

  ${media.mobile(css`
    margin: 0 -20px;
    display: block;
  `)}
`;

const ItemLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const InstagramIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  opacity: 0;
  color: ${colors.white};
  transition: all 150ms ease-in-out;
  z-index: 1;

  svg {
    width: 36px;
    height: auto;
  }
`;

const InstagramItem = styled.div`
  position: relative;
  margin: 40px 20px 0;
  flex: 1 1 calc(33.33% - 40px);
  max-width: calc(33.33% - 40px);
  max-height: 389px;
  overflow: hidden;
  transition: all 150ms ease-in-out;

  ${media.tabletSmallOnly(css`
    margin: 20px 10px 0;
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);

    &:nth-child(5) {
      display: none;
    }

    &:nth-child(6) {
      display: none;
    }
  `)}

  ${media.mobile(css`
    margin: 0 auto;
    flex: 0 0 360px;
    max-width: 360px;
    max-height: 360px;

    &:nth-child(5) {
      display: block;
    }

    &:nth-child(6) {
      display: block;
    }
  `)}

  &:hover {
    ${ItemLink} {
      background: rgba(0, 0, 0, 0.3);
    }

    ${InstagramIconWrapper} {
      opacity: 1;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  .instagram-thumbnail {
    width: 100%;
    height: 100%;
  }

  picture {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default InstagramFeed;
