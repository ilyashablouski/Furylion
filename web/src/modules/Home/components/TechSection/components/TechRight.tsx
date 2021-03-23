import React from 'react';
import styled from 'styled-components';

import { StringFieldType } from '@/typings/common';
import { ImageType } from '@/typings/model';
import Picture from '@/components/Picture';
import { ButtonLink } from '@/components/Button';

type Props = {
  data: {
    title?: StringFieldType;
    text?: StringFieldType;
    logos?: Array<ImageType>;
    addText?: StringFieldType;
    btnFirstLabel?: StringFieldType;
    btnFirstUrl?: StringFieldType;
    btnSecondLabel?: StringFieldType;
    btnSecondUrl?: StringFieldType;
  };
};

function TechRight({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
      <Logos>
        {data.logos
          ? data.logos.map((logo, index) => (
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
          : []}
      </Logos>

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
          >
            {data.btnFirstLabel}
          </ButtonLink>
        </StyledButton>

        <StyledButton right>
          <ButtonLink
            href={data.btnSecondUrl ?? '#'}
            variants={['cut-top', 'red', 'w100']}
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
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
`;
const Text = styled.p`
  margin-top: 35px;
  max-width: 388px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`;
const Logos = styled.div`
  margin-top: 71px;
  display: flex;
  align-items: center;
`;
const AdditionalBlock = styled.div`
  margin-top: 47px;
`;

const Logo = styled.div`
  flex: 0 0 auto;

  &:not(:first-child) {
    margin-left: 35px;
  }

  &:last-child {
    img {
      max-height: 49px;
    }
  }

  img {
    max-height: 75px;
  }
`;

const AdditionalTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
`;

const AdditionalText = styled.div`
  max-width: 631px;
  font-weight: 400;
  font-size: 14px;
  line-height: 187.5%;
`;

const Buttons = styled.div`
  margin-top: 35px;
  display: inline-flex;
`;

const StyledButton = styled.div<{ right?: boolean }>`
  flex: 0 0 265px;
  max-width: 265px;
  margin-left: ${(props) => (props.right ? '-3%' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};
`;

export default TechRight;
