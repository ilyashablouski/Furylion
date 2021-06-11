import React, { RefObject, useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  isAnimate: boolean;
  children: React.ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

function FadeElement({ isAnimate, children }: Props) {
  const [render, setRender] = useState(isAnimate);

  useEffect(() => {
    if (isAnimate) setRender(true);
  }, [isAnimate]);

  const onAnimationEnd = () => {
    if (!isAnimate) setRender(false);
  };

  return render ? (
    <Container
      style={{ animation: `${isAnimate ? 'fadeIn' : 'fadeOut'} 0.15s` }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </Container>
  ) : null;
}

const Container = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default FadeElement;
