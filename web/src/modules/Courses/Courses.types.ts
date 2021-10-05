import SwiperCore from 'swiper';
import { RefObject } from 'react';

import { ThumbnailType } from '@tager/web-modules';
import { Nullable } from '@tager/web-core';

import { StringFieldType } from '@/typings/common';

export interface PictureType {
  desktop: ThumbnailType;
  mobile: ThumbnailType;
}

export interface Information {
  title?: string | null;
  content?: string | null;
  singleCourse?: boolean;
}

export interface Course {
  image: PictureType;
  title: string | null;
  subtitle: string | null;
  information: Information[];
  linkLabel?: string | null;
  linkUrl?: string | null;
  scrollTo?: string | null;
  isNewTab?: boolean;
}

export interface Fact {
  title: string | null;
  subtitle: string | null;
  description: string | null;
  counterRef?: RefObject<HTMLSpanElement>;
}

export interface Step {
  title: string | null;
  position?: string | null;
  description: string | null;
  image: PictureType;
}

export interface Question {
  question: string | null;
  answer: string | null;
}

export interface Review {
  avatar: ThumbnailType;
  name: string | null;
  position: string | null;
  video: {
    url: string | null;
  };
  preview: ThumbnailType;
  swiper?: SwiperCore | null;
}

export interface StudentsItem {
  image: Nullable<{
    mobile: ThumbnailType;
    tablet: ThumbnailType;
    laptop: ThumbnailType;
    desktop: ThumbnailType;
  }>;
  title: StringFieldType;
  text: StringFieldType;
  gallery?: ThumbnailType[];
}

export interface Courses {
  heroId: string | null;
  heroTitle: string | null;
  heroText: string | null;
  heroImage: PictureType;
  aboutUsId: string | null;
  aboutUsTitle: string | null;
  aboutUsDescription: string | null;
  aboutUsImages: PictureType[];
  coursesId: string | null;
  coursesTitle: string | null;
  coursesItems: Course[];
  factsId: string | null;
  factsTitle: string | null;
  factsItems: Fact[];
  factsText: string | null;
  stepsId: string | null;
  stepsTitle: string | null;
  stepsItems: Step[];
  chooseCourseLabel: string | null;
  chooseCourseLinkUrl: string | null;
  chooseCourseScrollTo: string | null;
  chooseCourseIsNewTab: boolean;
  questionsId: string | null;
  questionsTitle: string | null;
  questionsItems: Question[];
  studentsId: string | null;
  studentsTitle: string | null;
  studentsItems: StudentsItem[];
  studentsBottomTitle: string | null;
  studentsBottomItems: StudentsItem[];
  studentsBottomText: string | null;
  studentsBottomLabel: string | null;
  studentsBottomLinkUrl: string | null;
  studentsBottomScrollTo: string | null;
  studentsBottomIsNewTab: boolean;
  reviewsId: string | null;
  reviewsTitle: string | null;
  reviewsItems: Review[];
  officeLifeId: string | null;
  officeLifeTitle: string | null;
  officeLifeImage: ThumbnailType;
  officeLifeVideo: {
    url: string | null;
  };
  officeLifePreview: ThumbnailType;
  officeLifeVideoAvatar: ThumbnailType;
  officeLifeAvatarTitle: string | null;
  officeLifeButtonFirstLabel: string | null;
  officeLifeButtonFirstUrl: string | null;
  officeLifeButtonFirstIsNewTab: boolean | null;
  officeLifeButtonSecondLabel: string | null;
  officeLifeButtonSecondUrl: string | null;
  officeLifeButtonSecondIsNewTab: boolean | null;
  projectsId: string | null;
  projectsTitle: string | null;
  projectsImages: ThumbnailType[];
  recentEventsId: string | null;
  recentEventsTitle: string | null;
  recentEventsLabel: string | null;
  recentEventsDescription: string | null;
}
