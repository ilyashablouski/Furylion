import { PageFullType, SettingsItemString } from '@tager/web-modules';
import { Nullish } from '@tager/web-core';

export interface ExamplePageType extends PageFullType {
  path: '/example';
  templateFields: null;
}

export type SettingsItemType =
  | SettingsItemString<'USER_NAME'>
  | SettingsItemString<'USER_AGE'>;

export interface HomePageTemplate extends PageFullType {
  templateFields: {
    heroTitle: Nullish<string>;
    heroText: Nullish<string>;
    heroImage: {
      url: Nullish<string>;
    };
  };
}
