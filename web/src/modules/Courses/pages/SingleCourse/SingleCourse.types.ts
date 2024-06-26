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
  isActive?: boolean;
  onPointerDown?: () => void;
}

export interface ProgramStepsItem {
  title: string | null;
  time: string | null;
  list: string | null;
}

export interface CourseProgramItem {
  title: string | null;
  subtitle: string | null;
  time: string | null;
  descriptionTitle: string | null;
  description: string | null;
  programStepsItems: ProgramStepsItem[];
  initialOpenedValue: boolean;
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
  courseProgramId: string | null;
  courseProgramTitle: string | null;
  courseProgramDescription: string | null;
  courseProgramItems: CourseProgramItem[];
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
