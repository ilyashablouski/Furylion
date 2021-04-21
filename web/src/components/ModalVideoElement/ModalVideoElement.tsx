import React, { useState } from 'react';
// @ts-ignore
import ModalVideo from 'react-modal-video';

type Props = {
  videoId: string;
};

function ModalVideoElement({ videoId }: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        // @ts-ignore
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
    </>
  );
}

export default ModalVideoElement;
