import { Page } from '@/typings/page';
import useCurrentPage from '@/hooks/useCurrentPage';

import { SingleCourse } from './SingleCourse.types';

export function useSingleCourseData(): Page<SingleCourse>['templateFields'] {
  return useCurrentPage<Page<SingleCourse>>().templateFields;
}
