import { Page } from '@/typings/page';
import useCurrentPage from '@/hooks/useCurrentPage';

import { FlSchool } from './FlSchool.types';

export function useFlSchoolData(): Page<FlSchool>['templateFields'] {
  return useCurrentPage<Page<FlSchool>>().templateFields;
}
