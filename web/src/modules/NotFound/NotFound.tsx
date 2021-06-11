import React from 'react';
import styled, { css } from 'styled-components';

import notFoundBgUrl from '@/assets/images/404/404.png';
import notFoundBgUrl2x from '@/assets/images/404/404@2x.png';
import notFoundBgUrlWebp from '@/assets/images/404/404.webp';
import notFoundBgUrlWebp2x from '@/assets/images/404/404@2x.webp';
import CurveButton from '@/components/CurveButton';
import Picture from '@/components/Picture';
import ContentContainer from '@/components/ContentContainer';
import useSettingItem from '@/hooks/useSettingItem';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function NotFound() {
  const notPageFoundText = useSettingItem('NOT_FOUND_TEXT');
  const notPageFoundButtonLabel = useSettingItem('NOT_FOUND_BUTTON_LABEL');
  const notPageFoundButtonUrl = useSettingItem('NOT_FOUND_BUTTON_URL');
  return (
    <Wrapper>
      <ContentContainer>
        <Container>
          <PictureItem
            mobileSmall={{
              src: notFoundBgUrl,
              src2x: notFoundBgUrl2x,
              webp: notFoundBgUrlWebp,
              webp2x: notFoundBgUrlWebp2x,
            }}
          />

          <TextItem>
            <Text>{notPageFoundText}</Text>
          </TextItem>

          <ButtonWrapper>
            <CurveButton
              href={notPageFoundButtonUrl}
              label={notPageFoundButtonLabel}
              variants={['curve', 'curve-dark-small', 'w100']}
              isNewTab={true}
            />
          </ButtonWrapper>
        </Container>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 195px;
  margin-bottom: 95px;

  ${media.mobile(css`
    margin-top: 126px;
    margin-bottom: 70px;
  `)}
`;

const Container = styled.div``;

const PictureItem = styled(Picture)`
  margin: 0 auto;
  max-width: 643px;

  picture {
    width: 100%;
    height: 100%;
  }

  img {
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
  }
`;

const TextItem = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  max-width: 403px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.black};
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default NotFound;
