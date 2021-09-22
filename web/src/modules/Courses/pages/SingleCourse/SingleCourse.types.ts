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

export interface SingleCourse {
  targetCourseId: string | null;
  targetCourseTitle: string | null;
  targetCourseDescription: string | null;
  targetCourseItems: TargetCourseItem[];
  courseAudienceId: string | null;
  courseAudienceTitle: string | null;
  courseAudienceList: string | null;
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
