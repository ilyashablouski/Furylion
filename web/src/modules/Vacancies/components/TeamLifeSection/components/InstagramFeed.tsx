import React from 'react';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';

function InstagramFeed() {
  return (
    <Container>
      <InstagramEmbed
        url="https://www.instagram.com/i.shablovskiy/"
        clientAccessToken="IGQVJWaHYzRUJGTnRka2FRazctMUJZANnYtTHcyRW43dXdsdjctUHRIcFIzMDF4S01Ga3Q1SGphWVVmbWpENk5aWUlhQ3hzUXZAnTndMZA3pYZAklsNU5BQXVyTmx1aV9tZAkV4eVAteWhuZA3FvZAXdnZAGp6WgZDZD"
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
