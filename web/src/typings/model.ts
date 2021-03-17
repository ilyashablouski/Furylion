import { PageFullType, SettingsItemString } from '@tager/web-modules';

import { StringFieldType } from '@/typings/common';

export interface ExamplePageType extends PageFullType {
  path: '/example';
  templateFields: null;
}

export type SettingsItemType =
  | SettingsItemString<'USER_NAME'>
  | SettingsItemString<'USER_AGE'>;

// export interface HomePageTemplate extends PageFullType {
//   templateFields: {
//     heroTitle: StringFieldType;
//     heroText: StringFieldType;
//     heroImage: {
//       url: StringFieldType;
//     };
//   };
// }

export interface HeroSectionType extends PageFullType {
  templateFields: {
    heroTitle: StringFieldType;
    heroText: StringFieldType;
    heroImage: {
      url: StringFieldType;
    };
  };
}
