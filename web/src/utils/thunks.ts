import { getMenuItemListThunk } from '@/store/reducers/tager/menus';
import { getSettingItemListThunk } from '@/store/reducers/tager/settings';
import { StoreDispatch } from '@/store/store';
import { getVacanciesListThunk } from '@/store/reducers/pages/vacancies';

export function getSharedThunkList(dispatch: StoreDispatch) {
  return [
    dispatch(getMenuItemListThunk('header')),
    dispatch(getMenuItemListThunk('footer')),
    dispatch(getSettingItemListThunk()),
    dispatch(getVacanciesListThunk()),
  ] as const;
}
