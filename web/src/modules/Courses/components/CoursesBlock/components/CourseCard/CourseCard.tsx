import React from 'react';
import styled, { css } from 'styled-components';

import { useMedia } from '@tager/web-core';

import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import Link from '@/components/Link';
import { ReactComponent as ButtonArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { media } from '@/utils/mixin';
import { StyledButtonLink } from '@/components/Button/Button';
import useCurrentPage from '@/hooks/useCurrentPage';

import Information from './components/Information';
import { CourseCardProps } from './CourseCard.types';

function CourseCard({
  image,
  title,
  subtitle,
  information,
  linkLabel,
  linkUrl,
  isNewTab,
}: CourseCardProps) {
  const desktopMedia = useMedia('(min-width: 1260px)');
  const tabletMedia = useMedia('(max-width: 1259.9px)');
  const page = useCurrentPage();
  const baseUrl = page.path.split('/')[1] + '/';

  return (
    <Component>
      <Background
        src={image.desktop.url}
        src2x={image.desktop.url_2x}
        srcWebp={image.desktop.url_webp}
        srcWebp2x={image.desktop.url_webp_2x}
      />
      <Container>
        <Content>
          <CardLink to={`${baseUrl}${linkUrl}`} />
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>

          {information.length > 0 && (
            <InformationList>
              {information.map(({ title, content }, index) => (
                <Information title={title} content={content} key={index} />
              ))}
            </InformationList>
          )}

          {desktopMedia && (
            <ToLearnMore
              to={`${baseUrl}${linkUrl}`}
              target={isNewTab ? '_blank' : undefined}
              className="white-link"
            >
              {linkLabel}
              <ButtonArrowIcon />
            </ToLearnMore>
          )}

          {information.length > 0 && tabletMedia && (
            <StyledButton>
              <StyledButtonLink
                href={`${baseUrl}${linkUrl}`}
                variants={['large', 'red', 'w100']}
                target={isNewTab ? '_blank' : undefined}
              >
                {linkLabel}
              </StyledButtonLink>
            </StyledButton>
          )}

          {information.length === 0 && tabletMedia && (
            <ToLearnMore
              to={`${baseUrl}${linkUrl}`}
              target={isNewTab ? '_blank' : undefined}
              className="white-link"
            >
              {linkLabel}
              <ButtonArrowIcon />
            </ToLearnMore>
          )}
        </Content>
      </Container>
      <ButtonVector className="button-vector" />
    </Component>
  );
}

export default CourseCard;

const Component = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    .white-link {
      color: ${colors.white};
    }

    .button-vector {
      right: 0;
    }
  }
`;

const Container = styled.div`
  position: relative;
  padding: 68px;

  ${media.tablet(css`
    padding: 40px;
  `)}

  ${media.mobile(css`
    padding: 40px 20px;
  `)}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${media.tablet(css`
    align-items: stretch;
  `)}
`;

const Title = styled.div`
  z-index: 2;
  position: relative;
  font-weight: 900;
  font-size: 64px;
  line-height: 120%;
  color: ${colors.white};
  text-transform: uppercase;

  ${media.tablet(css`
    font-size: 56px;
    line-height: 130%;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Subtitle = styled.div`
  z-index: 2;
  position: relative;
  margin-top: 8px;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
  text-transform: uppercase;

  ${media.tablet(css`
    font-size: 18px;
    margin-top: 12px;
  `)}
`;

const ToLearnMore = styled(Link)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white05};

  & svg {
    width: 62px;
    height: 62px;
    transform: rotate(180deg);
    margin-left: 8px;

    ${media.tablet(css`
      width: 42px;
      height: 42px;
    `)}

    ${media.mobile(css`
      width: 21px;
      height: 21px;
    `)}
  }

  &:hover {
    color: ${colors.white};
  }

  ${media.tablet(css`
    position: relative;
    transform: none;
    top: 0;
    right: 0;
    margin-top: 32px;
    align-self: flex-start;
    justify-content: flex-start;
  `)}

  ${media.mobile(css`
    color: ${colors.white};
    font-size: 14px;
  `)}
`;

const CardLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const StyledButton = styled.div`
  margin-top: 16px;
  z-index: 2;

  ${media.tablet(css`
    z-index: 4;
  `)}
`;

const InformationList = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  margin-top: 60px;

  ${media.tablet(css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 24px;
  `)}

  ${media.mobile(css`
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  `)}
`;

const Background = styled(Picture)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  picture,
  img {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(90deg, rgba(25, 24, 20, 0) 0%, #191814 100.6%);
  }
`;

const ButtonVector = styled.span`
  display: block;
  position: absolute;
  width: 45.5%;
  height: 100%;
  bottom: 0;
  right: -46%;
  background: ${colors.red};
  z-index: 1;

  transition: right 0.2s linear;
  clip-path: polygon(45% 0, 100% 0, 100% 100%, 0% 100%);

  ${media.tablet(css`
    display: none;
  `)}
`;
