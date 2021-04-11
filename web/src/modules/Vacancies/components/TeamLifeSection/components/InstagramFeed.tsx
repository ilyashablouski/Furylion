import React from 'react';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';

function InstagramFeed() {
  return (
    <Container>
      <InstagramEmbed
        url="https://www.instagram.com/i.shablovskiy/"
        clientAccessToken="IGQVJYaHdNX1ljbmJUVmY4VV9oQXlfRnlQdlNoSmtWa29XdzZAXbVRNQ2RaSF9TNUI3SFlCSUpBV08yNVMtM1J1dFVjb1VFRWpsYjZAWNnVnTXNMQ0xiZAi04b3hwdlZAIREVkQUdTd2VSa1NOdTVoazRBQgZDZD"
        maxWidth={320}
        hideCaption={false}
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
