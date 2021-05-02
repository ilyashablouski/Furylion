import { gsap } from 'gsap';

import { isServer } from '@tager/web-core';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

type TweenInstance = gsap.core.Animation;

export function createCallback(tween: TweenInstance) {
  return function (entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) tween.play();
      else tween.pause();
    });
  };
}

export function createIntersectionObserver(tween: TweenInstance) {
  return !isServer()
    ? new IntersectionObserver(createCallback(tween), options)
    : undefined;
}
