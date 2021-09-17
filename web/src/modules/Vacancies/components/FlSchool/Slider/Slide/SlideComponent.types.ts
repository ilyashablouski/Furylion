import SwiperCore from 'swiper';

export interface SlideComponentProps {
  swiper: SwiperCore | null;

  url: string | null;
  text: string | null;
  author: string | null;
  authorPosition: string | null;

  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}
