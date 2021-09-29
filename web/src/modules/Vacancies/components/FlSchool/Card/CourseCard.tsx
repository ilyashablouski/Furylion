import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import Link from '@/components/Link';
import { media } from '@/utils/mixin';

import { FlCourse } from '../FlSchool.types';

function CourseCard({
  date,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonLinkUrl,
  buttonIsNewTab,
}: FlCourse) {
  return (
    <Component>
      <ComponentLink
        to={buttonLinkUrl}
        target={buttonIsNewTab ? '_blank' : undefined}
      />
      <Left>
        <Date>{date}</Date>
        <CourseLink
          to={buttonLinkUrl}
          target={buttonIsNewTab ? '_blank' : undefined}
          className="white-link"
        >
          {buttonLabel}
        </CourseLink>
      </Left>
      <Right>
        <Title>{title}</Title>
        <Content>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
        </Content>
      </Right>
    </Component>
  );
}

export default CourseCard;

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid ${colors.white};
  position: relative;
  transition: 0.3s;

  &:not(:last-child) {
    padding-bottom: 80px;

    ${media.tablet(css`
      padding-bottom: 25px;
    `)}
  }

  &:nth-child(n) {
    ${media.mobile(css`
      padding-bottom: 65px;
    `)}
  }

  &:hover {
    transition: 0.3s;
    border-top-color: ${colors.red};

    .white-link {
      color: ${colors.white};
      text-decoration-color: transparent;
    }
  }

  ${media.tablet(css`
    padding-top: 25px;
  `)}

  ${media.mobile(css`
    flex-direction: column;
    padding-top: 20px;
  `)}
`;

const ComponentLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 35%;
  max-width: 35%;
  justify-content: space-between;

  ${media.mobile(css`
    flex: auto;
    max-width: none;
  `)}
`;

const Date = styled.span`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const CourseLink = styled(Link)`
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  text-underline-offset: 8px;
  text-decoration: underline;
  color: ${colors.white05};

  &:hover {
    color: ${colors.white};
    text-decoration-color: transparent;
  }

  ${media.mobile(css`
    position: absolute;
    bottom: 25px;
    left: 0;
  `)}
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 65%;
  max-width: 65%;
  margin-left: 30px;

  ${media.tablet(css`
    flex-direction: row;
    flex: auto;
    max-width: none;
    justify-content: space-between;
  `)}

  ${media.mobile(css`
    margin-left: 0;
    margin-top: 20px;
    justify-content: flex-start;
    flex-direction: column;
  `)}
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  max-width: 292px;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 24px;
  `)}
`;

const Content = styled.div`
  ${media.tablet(css`
    margin-left: 20px;
  `)}

  ${media.mobile(css`
    margin-left: 0;
    margin-top: 4px;
  `)}
`;

const Subtitle = styled.p`
  font-size: 14px;
  line-height: 160%;
  font-weight: bold;
  margin-top: 8px;
  color: ${colors.white};

  ${media.tablet(css`
    margin-top: 0;
  `)}

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 160%;
  margin-top: 8px;
  color: ${colors.white};

  ${media.tablet(css`
    max-width: 300px;
  `)}

  ${media.mobile(css`
    font-size: 12px;
    max-width: none;
  `)}
`;
