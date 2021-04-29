import React from 'react';
import styled from 'styled-components';

import notFoundBgUrl from '@/assets/images/404/404.png';
import notFoundBgUrl2x from '@/assets/images/404/404@2x.png';
import notFoundBgUrlWebp from '@/assets/images/404/404.webp';
import notFoundBgUrlWebp2x from '@/assets/images/404/404@2x.webp';
import CurveButton from '@/components/CurveButton';
import Picture from '@/components/Picture';

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

      {/*<ButtonWrapper>*/}
      {/*  <CurveButton*/}
      {/*    href={}*/}
      {/*    label={}*/}
      {/*    variants={['curve', 'curve-red', 'w100']}*/}
      {/*  />*/}
      {/*</ButtonWrapper>*/}
    </Container>
  );
}

const Container = styled.div`
  //color: white;
`;

const PictureItem = styled(Picture)``;

const Text = styled.div``;

const ButtonWrapper = styled.div;

export default NotFound;
