import React from 'react';
import styled, { css } from 'styled-components';

import { ThumbnailType } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';
import ContactsFormContainer from '@/components/form';
import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';

type Props = {
  formTitle?: StringFieldType;
  formProfileTitle?: StringFieldType;
  formProfileImage?: ThumbnailType;
  formProfileLabel?: StringFieldType;
  className?: string;
  isModal?: boolean;
  isProfileInfo?: boolean;
};

function FeedbackSection({
  formTitle,
  formProfileTitle,
  formProfileImage,
  formProfileLabel,
  className,
  isModal = false,
  isProfileInfo = false,
}: Props) {
  return (
    <Wrapper isModal={isModal}>
      <ContentContainer>
        {isProfileInfo && <Title className={className}>{formTitle}</Title>}
        <Inner>
          {isProfileInfo && (
            <Left>
              <ProfileTitle></ProfileTitle>
              <ProfileImage></ProfileImage>
              <ProfileName></ProfileName>
            </Left>
          )}
          <Right>
            <ContactsFormContainer />
          </Right>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}
export default FeedbackSection;

const Wrapper = styled.section<{ isModal: boolean }>`
  ${(props) =>
    props.isModal
      ? css`
          margin-top: 0;
        `
      : css`
          margin-top: 120px;
          ${media.tabletSmall(css`
            margin-top: 70px;
          `)}
        `}

  ${ContentContainer} {
    max-width: 1920px;
  }
`;
const Inner = styled.div`
  display: flex;

  ${media.tabletSmall(css`
    display: block;
  `)}
`;
const Title = styled.span`
  display: inline-block;
  font-style: normal;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};
  font-weight: 900;
  text-transform: uppercase;

  &.about-title--small {
    max-width: 260px;
    ${media.tabletSmall(css`
      max-width: none;
    `)}

    ${media.mobile(css`
      max-width: 252px;
    `)}
  }

  ${media.tabletSmall(css`
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Left = styled.div`
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmall(css`
    max-width: none;
  `)}
`;

const Right = styled.div`
  margin-left: 20px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmall(css`
    margin-left: 0;
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 80px;
  `)}

  ${media.mobile(css`
    margin-top: 35px;
  `)}
`;

const ProfileTitle = styled.span``;
const ProfileImage = styled(Picture)``;
const ProfileName = styled.span``;
