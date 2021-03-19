import { PageFullType, SettingsItemString } from '@tager/web-modules';
import { Nullable } from '@tager/web-core';

import { StringFieldType } from '@/typings/common';

export interface ExamplePageType extends PageFullType {
  path: '/example';
  templateFields: null;
}

export type SettingsItemType =
  | SettingsItemString<'USER_NAME'>
  | SettingsItemString<'USER_AGE'>;

export type ImageType = Nullable<{
  url: Nullable<string>;
  url_2x: Nullable<string>;
  url_webp: Nullable<string>;
  url_webp_2x: Nullable<string>;
}>;

export interface HeroSectionType extends PageFullType {
  templateFields: {
    heroTitle: StringFieldType;
    heroText: StringFieldType;
    heroImage: ImageType;
    heroMobileImage: ImageType;
  };
}

export type WorksItemType = {
  image: ImageType;
  tags?: StringFieldType;
  text?: StringFieldType;
  title?: StringFieldType;
};

export interface WorksSectionType extends PageFullType {
  templateFields: {
    worksTitle: StringFieldType;
    worksItems: Array<WorksItemType>;
  };
}
