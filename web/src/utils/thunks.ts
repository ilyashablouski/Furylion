import { getMenuItemListThunk } from '@/store/reducers/tager/menus';
import { getSettingItemListThunk } from '@/store/reducers/tager/settings';
import { StoreDispatch } from '@/store/store';

export function getSharedThunkList(dispatch: StoreDispatch) {
  return [
    dispatch(getMenuItemListThunk('header')),
    dispatch(getMenuItemListThunk('footer')),
    dispatch(getSettingItemListThunk()),
  ] as const;
}
