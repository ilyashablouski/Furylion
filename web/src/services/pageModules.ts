import { Nullish } from '@tager/web-core';

import { PageModuleType } from '@/typings/common';
import DefaultTemplate from '@/modules/DefaultTemplate';
import Home from '@/modules/Home';
import Vacancies from '@/modules/Vacancies';
import Services from '@/modules/PlayableAds';
import PlayableAds from '@/modules/PlayableAds';
import Vacancy from '@/modules/Vacancy';

const DEFAULT_PAGE_MODULE: PageModuleType = {
  component: DefaultTemplate,
  template: '',
};

const PAGE_MODULE_LIST: Array<PageModuleType> = [
  { template: 'home', component: Home },
  { template: 'vacancies', component: Vacancies },
  { template: 'services', component: Services },
  { template: 'playable-ads', component: PlayableAds },
  { template: 'vacancy', component: Vacancy },
];

export function getPageModuleByTemplate(
  template: Nullish<string>
): PageModuleType {
  return (
    PAGE_MODULE_LIST.find((pageModule) => pageModule.template === template) ??
    DEFAULT_PAGE_MODULE
  );
}
