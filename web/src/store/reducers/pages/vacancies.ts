import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  createResourceLoader,
  MapEntry,
  Nullable,
  ResourceType,
  shouldGetResourceDataFromCache,
} from '@tager/web-core';

import { AppState, AppThunk } from '@/store/store';
import { VacancyFull, VacancyShort } from '@/typings/model';
import {
  getCareersVacanciesList,
  getCareersVacancyByAlias,
} from '@/services/requests';

const vacancyListLoader = createResourceLoader<Array<VacancyShort>>([]);
const vacancyLoader = createResourceLoader<Nullable<VacancyFull>>(null);
type State = {
  vacancyShortList: ResourceType<Array<VacancyShort>>;
  vacancyFullMap: Record<string, ResourceType<Nullable<VacancyFull>>>;
};
const initialState: State = {
  vacancyShortList: vacancyListLoader.getInitialResource(),
  vacancyFullMap: {},
};
const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    /** Vacancies list */
    vacanciesListRequestPending(state) {
      state.vacancyShortList = vacancyListLoader.pending();
    },
    vacanciesListRequestFulfilled(
      state,
      action: PayloadAction<Array<VacancyShort>>
    ) {
      state.vacancyShortList = vacancyListLoader.fulfill(action.payload);
    },
    vacanciesListRequestRejected(state) {
      state.vacancyShortList = vacancyListLoader.reject();
    },
    /** Vacancy full */
    vacancyRequestPending(state, action: PayloadAction<{ key: string }>) {
      state.vacancyFullMap[action.payload.key] = vacancyLoader.pending();
    },
    vacancyRequestFulfilled(
      state,
      action: PayloadAction<MapEntry<string, VacancyFull>>
    ) {
      state.vacancyFullMap[action.payload.key] = vacancyLoader.fulfill(
        action.payload.value
      );
    },
    vacancyRequestRejected(state, action: PayloadAction<{ key: string }>) {
      state.vacancyFullMap[action.payload.key] = vacancyLoader.reject();
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
} = actions;
export default reducer;

export function getVacanciesListThunk(options?: {
  shouldInvalidate?: boolean;
}): AppThunk<Promise<Array<VacancyShort>>> {
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
): AppThunk<Promise<Nullable<VacancyFull>>> {
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
): ResourceType<Array<VacancyShort>> {
  return state.tager.vacancies.vacancyShortList;
}

export function selectVacanciesList(state: AppState): Array<VacancyShort> {
  return selectVacanciesListResource(state).data;
}

export function selectVacancyByAliasResource(
  state: AppState,
  alias: string
): ResourceType<Nullable<VacancyFull>> | undefined {
  return state.tager.vacancies.vacancyFullMap[alias];
}
