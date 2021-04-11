import React from 'react';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';

function InstagramFeed() {
  return (
    <Container>
      <InstagramEmbed
        url="https://www.instagram.com/p/CCPPq1Nl6uQ/"
        clientAccessToken="355944969167741|960d85e71ec21bca49d502720e3c3649"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </Container>
  );
}

const Container = styled.div``;

export default InstagramFeed;
