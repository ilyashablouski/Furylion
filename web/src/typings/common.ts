import { FunctionComponent } from 'react';

import { Nullable } from '@tager/web-core';

import { CustomApp_PageContext } from '@/typings/hocs';

export type PageModuleType = {
  component: FunctionComponent;
  getInitialProps?: (context: CustomApp_PageContext) => Promise<unknown>;
  template: string;
};

/** Fields in Admin panel */
export type StringFieldType = Nullable<string>;
