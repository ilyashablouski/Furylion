import React from 'react';
import styled from 'styled-components';

import Picture from '@/components/Picture';
import { ImageType } from '@/typings/model';
import { StringFieldType } from '@/typings/common';

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
          ? logos.map((logoItem, index) => (
              <LogoItem key={index}>
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
      <AdditionalBlock>
        <AdditionalTitle>Additional:</AdditionalTitle>
        {addText ? (
          <AdditionalText dangerouslySetInnerHTML={{ __html: addText }} />
        ) : null}
      </AdditionalBlock>

      {/*<Buttons></Buttons>*/}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 68px;
  flex: 1 1 50%;
  max-width: 50%;
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
  margin-top: 44px;
  display: flex;
  align-items: center;
  max-width: 700px;
  justify-content: space-between;
`;

const LogoItem = styled.div`
  &:not(:first-child) {
    margin-left: 30px;
  }
`;

const AdditionalBlock = styled.div`
  margin-top: 47px;
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
  display: flex;
`;
export default PlatformLeft;
