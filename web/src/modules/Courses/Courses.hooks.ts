import { Page } from '@/typings/page';
import useCurrentPage from '@/hooks/useCurrentPage';

import { Courses } from './Courses.types';

export function useCoursesData(): Page<Courses>['templateFields'] {
  return useCurrentPage<Page<Courses>>().templateFields;
}
