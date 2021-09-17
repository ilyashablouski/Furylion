export interface FlCourse {
  date: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  buttonLabel: string | null;
  buttonLinkUrl: string | null;
  buttonScrollTo?: string | null;
  buttonIsNewTab: boolean | null;
}

export interface Slide {
  video: {
    url: string | null;
  };
  text: string | null;
  author: string | null;
  authorPosition: string | null;
}

export interface FlSchool {
  flSchoolId: string | null;
  flSchoolTitle: string | null;
  flSchoolSubtitle: string | null;
  flSchoolLabel: string | null;
  flSchoolLinkUrl: string | null;
  flSchoolScrollTo?: string | null;
  flSchoolIsNewTab: boolean;
  flSchoolCoursesTitle: string | null;
  flSchoolCourses: FlCourse[];
  sliderItems: Slide[];
}
