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

/** Fields for images*/
export type ImageType = Nullable<{
  url: Nullable<string>;
  url_2x: Nullable<string>;
  url_webp: Nullable<string>;
  url_webp_2x: Nullable<string>;
}>;
