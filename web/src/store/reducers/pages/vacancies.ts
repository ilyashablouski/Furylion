import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  createResourceLoader,
  MapEntry,
  Nullable,
  ResourceType,
  shouldGetResourceDataFromCache,
} from '@tager/web-core';

import { AppState, AppThunk } from '@/store/store';
import { VacancyFullType, VacancyShortType } from '@/typings/model';
import {
  getCareersVacanciesList,
  getCareersVacancyByAlias,
} from '@/services/requests';

const vacancyListLoader = createResourceLoader<Array<VacancyShortType>>([]);
const vacancyLoader = createResourceLoader<Nullable<VacancyFullType>>(null);
type State = {
  VacancyShortListTypeList: ResourceType<Array<VacancyShortType>>;
  VacancyFullListTypeMap: Record<
    string,
    ResourceType<Nullable<VacancyFullType>>
  >;
  totalVacanciesValue: number;
};
const initialState: State = {
  VacancyShortListTypeList: vacancyListLoader.getInitialResource(),
  VacancyFullListTypeMap: {},
  totalVacanciesValue: 0,
};
const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    /** Vacancies list */
    vacanciesListRequestPending(state) {
      state.VacancyShortListTypeList = vacancyListLoader.pending();
    },
    vacanciesListRequestFulfilled(state, action: PayloadAction<{ data: any }>) {
      state.VacancyShortListTypeList = vacancyListLoader.fulfill(
        action.payload.data
      );
    },
    vacanciesListRequestRejected(state) {
      state.VacancyShortListTypeList = vacancyListLoader.reject();
    },
    /** Vacancy full */
    vacancyRequestPending(state, action: PayloadAction<{ key: string }>) {
      state.VacancyFullListTypeMap[
        action.payload.key
      ] = vacancyLoader.pending();
    },
    vacancyRequestFulfilled(
      state,
      action: PayloadAction<MapEntry<string, VacancyFullType>>
    ) {
      state.VacancyFullListTypeMap[action.payload.key] = vacancyLoader.fulfill(
        action.payload.value
      );
    },
    vacancyRequestRejected(state, action: PayloadAction<{ key: string }>) {
      state.VacancyFullListTypeMap[action.payload.key] = vacancyLoader.reject();
    },
    setTotalVacanciesValue(state, action: PayloadAction<{ total: number }>) {
      state.totalVacanciesValue = action.payload.total;
    },
  },
});
const { actions, reducer } = vacanciesSlice;
export const {
  vacanciesListRequestPending,
  vacanciesListRequestFulfilled,
  vacanciesListRequestRejected,
  vacancyRequestPending,
  vacancyRequestFulfilled,
  vacancyRequestRejected,
  setTotalVacanciesValue,
} = actions;
export default reducer;

export function getVacanciesListThunk(options?: {
  shouldInvalidate?: boolean;
}): AppThunk<Promise<Array<VacancyShortType>>> {
  return async (dispatch, getState) => {
    const vacanciesListResource = selectVacanciesListResource(getState());
    const shouldGetDataFromCache = shouldGetResourceDataFromCache(
      vacanciesListResource,
      options?.shouldInvalidate
    );
    if (shouldGetDataFromCache) {
      return vacanciesListResource.data;
    }
    dispatch(vacanciesListRequestPending());
    try {
      const response = await getCareersVacanciesList();
      dispatch(vacanciesListRequestFulfilled({ data: response.data }));
      dispatch(setTotalVacanciesValue({ total: response.meta.total }));
      return response.data.data;
    } catch (error) {
      dispatch(vacanciesListRequestRejected());
      return [];
    }
  };
}

export function getVacancyByAliasThunk(
  alias: string,
  options?: {
    shouldInvalidate?: boolean;
  }
): AppThunk<Promise<Nullable<VacancyFullType>>> {
  return async (dispatch, getState) => {
    try {
      const post = selectVacancyByAliasResource(getState(), alias);
      if (!options?.shouldInvalidate && post) {
        return post.data;
      }
      dispatch(vacancyRequestPending({ key: alias }));
      const response = await getCareersVacancyByAlias(alias);
      dispatch(
        vacancyRequestFulfilled({
          key: alias,
          value: response.data,
        })
      );
      return response.data;
    } catch (error) {
      dispatch(vacancyRequestRejected({ key: alias }));
      return null;
    }
  };
}

export function selectVacanciesListResource(
  state: AppState
): ResourceType<Array<VacancyShortType>> {
  return state.tager.vacancies.VacancyShortListTypeList;
}

export function selectVacanciesList(state: AppState): Array<VacancyShortType> {
  return selectVacanciesListResource(state).data;
}

export function selectVacancyByAliasResource(
  state: AppState,
  alias: string
): ResourceType<Nullable<VacancyFullType>> | undefined {
  return state.tager.vacancies.VacancyFullListTypeMap[alias];
}

export function selectVacanciesTotalValue(state: AppState): number {
  return state.tager.vacancies.totalVacanciesValue;
}
