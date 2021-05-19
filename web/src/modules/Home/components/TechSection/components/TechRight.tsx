import React from 'react';
import styled, { css } from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import { StringFieldType } from '@/typings/common';
import Picture from '@/components/Picture';
import { ButtonLink } from '@/components/Button';
import { media } from '@/utils/mixin';

type Props = {
  data: {
    title?: StringFieldType;
    text?: StringFieldType;
    logos?: Array<ThumbnailType>;
    addText?: StringFieldType;
    btnFirstLabel?: StringFieldType;
    btnFirstUrl?: StringFieldType;
    btnSecondLabel?: StringFieldType;
    btnSecondUrl?: StringFieldType;
    btnFirstIsNewTab: boolean;
    btnSecondIsNewTab: boolean;
  };
};

function TechRight({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
      <LogosWrapper>
        <Logos>
          {data.logos
            ? data.logos.map((logo, index) => (
                <Logo key={index}>
                  <Picture mobileSmall={convertThumbnailToPictureImage(logo)} />
                </Logo>
              ))
            : null}
        </Logos>
      </LogosWrapper>

      <AdditionalBlock>
        <AdditionalTitle>Additional:</AdditionalTitle>
        {data.addText ? (
          <AdditionalText dangerouslySetInnerHTML={{ __html: data.addText }} />
        ) : null}
      </AdditionalBlock>

      <Buttons>
        <StyledButton>
          <ButtonLink
            href={data.btnFirstUrl ?? '#'}
            variants={['cut-bottom', 'white-red', 'w100']}
            target={data.btnFirstIsNewTab ? '_blank' : '_self'}
          >
            {data.btnFirstLabel}
          </ButtonLink>
        </StyledButton>

        <StyledButton right>
          <ButtonLink
            href={data.btnSecondUrl ?? '#'}
            variants={['cut-top', 'red', 'w100']}
            target={data.btnSecondIsNewTab ? '_blank' : '_self'}
          >
            {data.btnSecondLabel}
          </ButtonLink>
        </StyledButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 100px;
  padding-left: 68px;

  ${media.tabletSmallOnly(css`
    padding-top: 70px;
    padding-left: 40px;
  `)}

  ${media.mobile(css`
    padding-left: 20px;
    padding-top: 25px;
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;
const Text = styled.p`
  margin-top: 35px;
  max-width: 388px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  ${media.tabletSmall(css`
    max-width: 345px;
    font-size: 12px;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const LogosWrapper = styled.div`
  margin-top: 60px;
  position: relative;
  height: 75px;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Logos = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 61%;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.tabletSmall(css`
    width: 53%;
  `)}
`;
const AdditionalBlock = styled.div`
  margin-top: 36px;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Logo = styled.div`
  flex: 0 0 auto;

  ${media.laptop(css`
    flex: 1 1 auto;
  `)}

  &:not(:first-child) {
    margin-left: 69px;
  }

  img {
    max-height: 75px;
  }
`;

const AdditionalTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;

  ${media.tabletSmall(css`
    font-size: 20px;
  `)}
`;

const AdditionalText = styled.div`
  max-width: 631px;
  font-weight: 400;
  font-size: 14px;
  line-height: 187.5%;

  ${media.tabletSmall(css`
    max-width: 260px;
    font-size: 12px;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 7px;
  `)}

  ${media.mobile(css`
    margin-top: 5px;
  `)}
`;

const Buttons = styled.div`
  margin-top: 35px;
  position: absolute;
  left: auto;
  top: auto;
  z-index: 1;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 51px;
  `)}

  ${media.mobile576(css`
    left: 0;
    bottom: 0;
    width: 100%;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  flex: 0 0 265px;
  max-width: 265px;
  margin-left: ${(props) => (props.right ? '-3%' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};

  ${media.tabletSmallOnly(css`
    flex: 0 0 186px;
    max-width: 186px;
  `)}

  ${media.mobile(css`
    flex: 0 0 195px;
    max-width: 195px;
  `)}

  ${media.mobile576(css`
    flex: auto;
    max-width: none;
  `)}
`;

export default TechRight;
