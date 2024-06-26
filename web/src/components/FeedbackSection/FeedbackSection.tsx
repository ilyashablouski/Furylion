import React from 'react';
import styled, { css } from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';
import ContactsFormContainer from '@/components/form';
import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';
import Link from '@/components/Link';

type Props = {
  formTitle?: StringFieldType;
  formProfileTitle?: StringFieldType;
  formProfileImage?: ThumbnailType;
  formProfileLabel?: StringFieldType;
  formProfileEmail?: StringFieldType;
  formProfilePosition?: StringFieldType;
  className?: string;
  isModal?: boolean;
  isProfileInfo?: boolean;
  idAnchor?: string;
  isCvForm?: boolean;
};

function FeedbackSection({
  formTitle,
  formProfileTitle,
  formProfileImage,
  formProfileLabel,
  formProfileEmail,
  formProfilePosition,
  className,
  isCvForm = false,
  isModal = false,
  isProfileInfo = false,
  idAnchor,
}: Props) {
  return (
    <Wrapper isModal={isModal} id={idAnchor}>
      <ContentContainer>
        {isProfileInfo && (
          <TitleBlock>
            <Title className={className} isProfileInfo>
              {formTitle}
            </Title>
          </TitleBlock>
        )}
        <Inner>
          {isProfileInfo && (
            <Left isProfileInfo>
              <ProfileInfo>
                <ProfileTitle>{formProfileTitle}</ProfileTitle>
                <ProfileImage
                  loading={'lazy'}
                  mobileSmall={convertThumbnailToPictureImage(formProfileImage)}
                />
                <ProfileName>{formProfileLabel}</ProfileName>
                {formProfilePosition ? (
                  <ProfilePosition>{formProfilePosition}</ProfilePosition>
                ) : null}
                {formProfileEmail ? (
                  <ProfileEmail to={`mailto:${formProfileEmail}`}>
                    <span>{formProfileEmail}</span>
                  </ProfileEmail>
                ) : null}
              </ProfileInfo>
            </Left>
          )}

          {!isProfileInfo && (
            <Left>
              <Title className={className}>{formTitle}</Title>
            </Left>
          )}
          <Right>
            <ContactsFormContainer isCvForm={isCvForm} />
          </Right>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section<{ isModal: boolean }>`
  ${(props) =>
    props.isModal
      ? css`
          padding-top: 0;
        `
      : css`
          padding-top: 120px;
          ${media.tabletSmall(css`
            margin-top: 70px;
          `)}
        `}
`;
const Inner = styled.div`
  display: flex;

  ${media.tabletSmall(css`
    display: block;
  `)}
`;

const TitleBlock = styled.div`
  max-width: 556px;

  ${media.tabletSmallOnly(css`
    margin: 0 auto;
    max-width: 612px;
    text-align: center;
  `)}
`;

const ProfilePosition = styled.span`
  display: block;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  color: ${colors.white};
`;

const Title = styled.span<{ isProfileInfo?: boolean }>`
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

  ${(props) =>
    props.isProfileInfo &&
    css`
      font-size: 56px;

      ${media.mobile(css`
        font-size: 32px;
      `)}
    `}
`;

const Left = styled.div<{ isProfileInfo?: boolean }>`
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmall(css`
    max-width: none;
  `)}

  ${(props) =>
    props.isProfileInfo &&
    css`
      margin-top: 97px;

      ${media.tabletSmall(css`
        margin-top: 51px;
        display: flex;
        justify-content: center;
      `)}

      ${media.mobile(css`
        margin-top: 32px;
      `)}
    `}
`;

const Right = styled.div`
  display: flex;
  align-items: flex-end;
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
  form {
    width: 100%;
  }
`;

const ProfileInfo = styled.div`
  display: inline-block;
  text-align: center;
`;

const ProfileTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 20px;
  `)}
`;
const ProfileImage = styled(Picture)`
  margin: 33px auto 0;
  border-radius: 100%;
  width: 257px;
  height: 257px;
  overflow: hidden;

  ${media.mobile(css`
    margin-top: 20px;
  `)}
  img {
    width: 257px;
    height: 257px;
  }
`;
const ProfileName = styled.span`
  margin-top: 30px;
  display: block;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: capitalize;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 20px;
  `)}
`;

const ProfileEmail = styled(Link)`
  position: relative;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  line-height: 160%;
  color: ${colors.white};
  transition: color 0.3s ease;
  cursor: pointer;
  font-weight: 300;
  font-size: 20px;
  text-align: center;

  span {
    position: relative;

    &:before {
      position: absolute;
      display: block;
      content: '';
      height: 1px;
      width: 100%;
      bottom: 0px;
      background: ${colors.white};
      transition: background 0.3s ease;
    }
  }

  ${media.mobile(css`
    font-size: 20px;
  `)}
  &:hover {
    color: ${colors.grayLight};

    span {
      &:before {
        background: ${colors.grayLight};
      }
    }
  }
`;

export default FeedbackSection;
