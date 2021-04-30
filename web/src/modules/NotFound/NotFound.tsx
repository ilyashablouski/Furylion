import React from 'react';
import styled from 'styled-components';

import notFoundBgUrl from '@/assets/images/404/404.png';
import notFoundBgUrl2x from '@/assets/images/404/404@2x.png';
import notFoundBgUrlWebp from '@/assets/images/404/404.webp';
import notFoundBgUrlWebp2x from '@/assets/images/404/404@2x.webp';
import CurveButton from '@/components/CurveButton';
import Picture from '@/components/Picture';
import ContentContainer from '@/components/ContentContainer';

function NotFound() {
  return (
    <Container>
      <PictureItem
        mobileSmall={{
          src: notFoundBgUrl,
          src2x: notFoundBgUrl2x,
          webp: notFoundBgUrlWebp,
          webp2x: notFoundBgUrlWebp2x,
        }}
      />

      <Text></Text>

      <ButtonWrapper>
        <CurveButton
          href=""
          label=""
          variants={['curve', 'curve-dark-small', 'w100']}
          isNewTab={true}
        />
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PictureItem = styled(Picture)``;

const Text = styled.div``;

const ButtonWrapper = styled.div``;

export default NotFound;
