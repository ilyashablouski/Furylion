import { useRouter } from 'next/router';

import { Nullable, ResourceType } from '@tager/web-core';

import { useTypedSelector } from '@/store/store';
import { getParamAsString } from '@/utils/common';
import { VacancyFullType } from '@/typings/model';
import { selectVacancyByAliasResource } from '@/store/reducers/pages/vacancies';
function useCurrentVacancy():
  | ResourceType<Nullable<VacancyFullType>>
  | undefined {
  const router = useRouter();
  const vacancyAlias = getParamAsString(router.query.alias);
  return useTypedSelector((state) =>
    selectVacancyByAliasResource(state, vacancyAlias)
  );
}
export default useCurrentVacancy;
