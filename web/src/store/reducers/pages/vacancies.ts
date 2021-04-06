import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from 'next/dist/build/output/store';

import {
  createResourceLoader,
  MapEntry,
  Nullable,
  ResourceType,
  shouldGetResourceDataFromCache,
} from '@tager/web-core';

import { AppState, AppThunk } from '@/store/store';
import { VacancyFullListType, VacancyShortListType } from '@/typings/model';
import {
  getCareersVacanciesList,
  getCareersVacancyByAlias,
} from '@/services/requests';

const vacancyListLoader = createResourceLoader<Array<VacancyShortListType>>([]);
const vacancyLoader = createResourceLoader<Nullable<VacancyFullListType>>(null);
type State = {
  VacancyShortListTypeList: ResourceType<Array<VacancyShortListType>>;
  VacancyFullListTypeMap: Record<
    string,
    ResourceType<Nullable<VacancyFullListType>>
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
    vacanciesListRequestFulfilled(
      state,
      action: PayloadAction<Array<VacancyShortListType>>
    ) {
      state.VacancyShortListTypeList = vacancyListLoader.fulfill(
        action.payload
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
      action: PayloadAction<MapEntry<string, VacancyFullListType>>
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
}): AppThunk<Promise<Array<VacancyShortListType>>> {
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
      //FIXME: fix for get meta & data
      // dispatch(vacanciesListRequestFulfilled(response.data.data));
      // dispatch(setTotalVacanciesValue({ total: response.meta.total }));
      // return response.data.data;

      dispatch(vacanciesListRequestFulfilled(response.data));
      return response.data;
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
): AppThunk<Promise<Nullable<VacancyFullListType>>> {
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
): ResourceType<Array<VacancyShortListType>> {
  return state.tager.vacancies.VacancyShortListTypeList;
}

export function selectVacanciesList(
  state: AppState
): Array<VacancyShortListType> {
  return selectVacanciesListResource(state).data;
}

export function selectVacancyByAliasResource(
  state: AppState,
  alias: string
): ResourceType<Nullable<VacancyFullListType>> | undefined {
  return state.tager.vacancies.VacancyFullListTypeMap[alias];
}

export function selectVacanciesTotalValue(state: AppState): number {
  return state.tager.vacancies.totalVacanciesValue;
}
