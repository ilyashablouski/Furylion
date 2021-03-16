import { Nullish } from '@tager/web-core';

import { PageModuleType } from '@/typings/common';
import DefaultTemplate from '@/modules/DefaultTemplate';
import Home from '@/modules/Home';
import Vacancies from '@/modules/Vacancies';
import Services from '@/modules/Services';
import PlayableAds from '@/modules/PlayableAds';
import Vacancy from '@/modules/Vacancy';
import { getMenuItemListThunk } from '@/store/reducers/tager/menus';
import Contacts from '@/modules/Contacts/Contacts';

const DEFAULT_PAGE_MODULE: PageModuleType = {
  component: DefaultTemplate,
  template: '',
};

const PAGE_MODULE_LIST: Array<PageModuleType> = [
  {
    template: 'home',
    component: Home,
    getInitialProps({ store }) {
      return Promise.all([store.dispatch(getMenuItemListThunk('header'))]);
    },
  },
  {
    template: 'vacancies',
    component: Vacancies,
    getInitialProps({ store }) {
      return Promise.all([store.dispatch(getMenuItemListThunk('header'))]);
    },
  },
  {
    template: 'services',
    component: Services,
    getInitialProps({ store }) {
      return Promise.all([store.dispatch(getMenuItemListThunk('header'))]);
    },
  },
  {
    template: 'playable-ads',
    component: PlayableAds,
    getInitialProps({ store }) {
      return Promise.all([store.dispatch(getMenuItemListThunk('header'))]);
    },
  },
  {
    template: 'vacancy',
    component: Vacancy,
    getInitialProps({ store }) {
      return Promise.all([store.dispatch(getMenuItemListThunk('header'))]);
    },
  },
  {
    template: 'contacts',
    component: Contacts,
    getInitialProps({ store }) {
      return Promise.all([store.dispatch(getMenuItemListThunk('header'))]);
    },
  },
];

export function getPageModuleByTemplate(
  template: Nullish<string>
): PageModuleType {
  return (
    PAGE_MODULE_LIST.find((pageModule) => pageModule.template === template) ??
    DEFAULT_PAGE_MODULE
  );
}
