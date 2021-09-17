import React, { useEffect, useState } from 'react';

export type TimerProps = {
  newTime: number | null;
  videoPlayed: boolean | null;
};

const Timer = ({ newTime, videoPlayed }: TimerProps) => {
  const [counterSecond, setCounterSecond] = useState(newTime);
  const [isVideoPlayed, setVideoPlayed] = useState(videoPlayed);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounterSecond(counterSecond && counterSecond + 1);
    }, 1000);

    setVideoPlayed(isVideoPlayed);

    return () => clearTimeout(timer);
  }, [counterSecond, isVideoPlayed]);

  console.log(counterSecond);
};

export default Timer;
