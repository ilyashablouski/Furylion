import React from 'react';
import styled from 'styled-components';

import { StringFieldType } from '@/typings/common';
import { ImageType } from '@/typings/model';
import Picture from '@/components/Picture';

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
          ? data.logos.map((logoItem) => (
              <LogoItem>
                <Picture
                  mobileSmall={{
                    src: logoItem?.url,
                    src2x: logoItem?.url_2x,
                    webp: logoItem?.url_webp,
                    webp2x: logoItem?.url_webp_2x,
                  }}
                />
              </LogoItem>
            ))
          : []}
      </Logos>

      <Additional>
        <AdditionalTitle>Additional:</AdditionalTitle>
        <AdditionalText
          dangerouslySetInnerHTML={{ __html: data.addText ?? '' }}
        />
      </Additional>

      <Buttons></Buttons>
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
const Additional = styled.div`
  margin-top: 47px;
`;

const LogoItem = styled.div`
  flex: 0 0 auto;

  &:not(:first-child) {
    margin-left: 35px;
  }
`;

const AdditionalTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
`;

const AdditionalText = styled.p`
  max-width: 631px;
  font-weight: 400;
  font-size: 14px;
  line-height: 187.5%;
`;

const Buttons = styled.div`
  margin-top: 35px;
  display: inline-flex;
`;

export default TechRight;
