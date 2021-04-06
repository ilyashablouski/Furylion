import React from 'react';
import styled, { css } from 'styled-components';

import Picture from '@/components/Picture';
import { ImageType } from '@/typings/model';
import { StringFieldType } from '@/typings/common';
import { media } from '@/utils/mixin';
import Button, { ButtonLink } from '@/components/Button';

type Props = {
  title?: StringFieldType;
  text?: StringFieldType;
  logos?: Array<ImageType>;
  addText?: StringFieldType;
  btnFirstLabel?: StringFieldType;
  btnFirstUrl?: StringFieldType;
  btnSecondLabel?: StringFieldType;
  btnSecondUrl?: StringFieldType;
};

function PlatformLeft({
  title,
  text,
  logos,
  addText,
  btnFirstLabel,
  btnFirstUrl,
  btnSecondLabel,
  btnSecondUrl,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Logos>
        {logos
          ? logos.map((logo, index) => (
              <Logo key={index}>
                <Picture
                  mobileSmall={{
                    src: logo?.url,
                    src2x: logo?.url_2x,
                    webp: logo?.url_webp,
                    webp2x: logo?.url_webp_2x,
                  }}
                />
              </Logo>
            ))
          : null}
      </Logos>
      <AdditionalBlock>
        <AdditionalTitle>Additional:</AdditionalTitle>
        {addText ? (
          <AdditionalText dangerouslySetInnerHTML={{ __html: addText }} />
        ) : null}
      </AdditionalBlock>

      <Buttons>
        <StyledButton>
          <ButtonLink
            href={btnFirstUrl ?? '#'}
            variants={['cut-bottom', 'white-dark', 'w100']}
          >
            {btnFirstLabel}
          </ButtonLink>
        </StyledButton>

        <StyledButton right>
          <ButtonLink
            href={btnSecondUrl ?? '#'}
            variants={['cut-top', 'dark', 'w100']}
          >
            {btnSecondLabel}
          </ButtonLink>
        </StyledButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 68px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.desktop1366(css`
    padding-right: 0;
  `)}

  ${media.tabletSmall(css`
    padding: 0;
    max-width: 50%;
  `)}

  ${media.mobile(css`
    max-width: 100%;
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;

  ${media.tabletSmall(css`
    position: absolute;
    top: 70px;
    left: auto;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Text = styled.p`
  margin-top: 38px;
  max-width: 388px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  ${media.tabletSmall(css`
    font-size: 12px;
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 27px;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const Logos = styled.div`
  margin-top: 37px;
  display: flex;
  align-items: center;
  max-width: 700px;
  justify-content: space-between;

  ${media.desktop1366(css`
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 53px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Logo = styled.div`
  &:not(:first-child) {
    margin-left: 30px;
  }

  img {
    max-height: 75px;

    ${media.tabletSmall(css`
      max-height: 64px;
    `)}
  }
`;

const AdditionalBlock = styled.div`
  margin-top: 40px;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
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
  margin-top: -3px;
  max-width: 631px;
  font-weight: 400;
  font-size: 14px;
  line-height: 187.5%;

  ${media.tabletSmall(css`
    font-size: 12px;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 10px;
  `)}

  ${media.mobile(css`
    margin-top: 5px;
  `)}
`;

const Buttons = styled.div`
  margin-top: 44px;
  display: inline-flex;

  ${media.tabletSmall(css`
    position: absolute;
    left: auto;
    margin-top: 0;
  `)}

  ${media.tabletSmallOnly(css`
    bottom: 70px;
  `)}

  ${media.mobile(css`
    left: -20px;
    right: -20px;
    bottom: 60px;
    width: auto;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  margin-left: ${(props) => (props.right ? '-3%' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};
  flex: 0 0 265px;
  max-width: 265px;

  ${media.tabletSmallOnly(css`
    flex: 0 0 186px;
    max-width: 186px;
  `)}

  ${media.mobile(css`
    flex: auto;
    max-width: none;
  `)}
`;

export default PlatformLeft;
