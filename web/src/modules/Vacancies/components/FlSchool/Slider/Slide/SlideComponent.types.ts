import SwiperCore from 'swiper';

import { ThumbnailType } from '@tager/web-modules';

export interface SlideComponentProps {
  swiper: SwiperCore | null;

  url: string | null;
  text: string | null;
  author: string | null;
  authorPosition: string | null;
  videoPreviewImage: ThumbnailType;
  videoButtonText: string | null;

  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}
