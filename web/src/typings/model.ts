import { PageFullType, SettingsItemString } from '@tager/web-modules';
import { Nullable } from '@tager/web-core';

export interface ExamplePageType extends PageFullType {
  path: '/example';
  templateFields: null;
}

export type SettingsItemType =
  | SettingsItemString<'USER_NAME'>
  | SettingsItemString<'USER_AGE'>;

export type StringField = Nullable<string>;

export interface HomePageTemplate extends PageFullType {
  templateFields: {
    heroTitle: StringField;
    heroText: StringField;
    heroImage: {
      url: StringField;
    };
  };
}
