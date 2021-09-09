import { ThumbnailType } from '@tager/web-modules';

export interface PictureType {
  desktop: ThumbnailType;
  mobile: ThumbnailType;
}

export interface Course {
  image: PictureType;
  title: string | null;
  subtitle: string | null;
  termRegistrationTitle?: string | null;
  termRegistrationDate?: string | null;
  educationStartTitle?: string | null;
  educationStartDate?: string | null;
  placesLeftTitle?: string | null;
  placesLeftCount?: string | null;
  trainingPeriodTitle?: string | null;
  trainingPeriodDate?: string | null;
  linkLabel?: string | null;
  linkUrl?: string | null;
  scrollTo?: string | null;
  isNewTab?: boolean;
  isComingSoon?: boolean;
}

export interface Fact {
  title: string | null;
  subtitle: string | null;
  description: string | null;
}

export interface Step {
  title: string | null;
  description: string | null;
  image: PictureType;
}

export interface Question {
  question: string | null;
  answer: string | null;
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
  reviewsId: string | null;
  reviewsTitle: string | null;
  reviewsItems: [];
  projectsId: string | null;
  projectsTitle: string | null;
  projectsImages: ThumbnailType[];
  recentEventsId: string | null;
  recentEventsTitle: string | null;
  recentEventsLabel: string | null;
  recentEventsDescription: string | null;
}
