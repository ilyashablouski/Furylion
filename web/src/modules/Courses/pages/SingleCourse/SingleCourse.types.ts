import { ThumbnailType } from '@tager/web-modules';

export interface SingleCourseProps {
  singleCourse?: boolean;
}

export interface TargetCourseItem {
  title: string | null;
  content: string | null;
}

export interface AfterCompleteItem {
  skill: string | null;
}

export interface LearnItem {
  title: string | null;
  description: string | null;
  image?: ThumbnailType;
  onPointerDown?: () => void;
  isActive?: boolean;
}

export interface SingleCourse {
  heroId: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  heroDescription: string | null;
  courseRegistrationTitle: string | null;
  courseRegistration: string | null;
  heroCoursePlacesTitle: string | null;
  heroCoursePlaces: string | null;
  heroButtonFirstLabel: string | null;
  heroButtonFirstUrl: string | null;
  heroButtonFirstIsNewTab: boolean;
  heroButtonSecondLabel: string | null;
  heroButtonSecondUrl: string | null;
  heroButtonSecondIsNewTab: string | null;
  heroImage: ThumbnailType;
  targetCourseId: string | null;
  targetCourseTitle: string | null;
  targetCourseDescription: string | null;
  targetCourseItems: TargetCourseItem[];
  courseAudienceId: string | null;
  courseAudienceTitle: string | null;
  courseAudienceList: string | null;
  learnId: string | null;
  learnTitle: string | null;
  learnItems: LearnItem[];
  afterCompleteId: string | null;
  afterCompleteTitle: string | null;
  afterCompleteItems: AfterCompleteItem[];
  courseCostTitle: string | null;
  courseCost: string | null;
  courseStartTitle: string | null;
  courseStartDate: string | null;
  coursePlacesTitle: string | null;
  coursePlaces: string | null;
  singUpCourseButtonLabel: string | null;
  singUpCourseButtonUrl: string | null;
  singUpCourseButtonIsNewTab: boolean;
}
