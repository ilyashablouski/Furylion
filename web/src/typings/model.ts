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
  tags: StringFieldType;
  text: StringFieldType;
  title: StringFieldType;
};

export interface WorksSectionType extends PageFullType {
  templateFields: {
    worksTitle: StringFieldType;
    worksItems: Array<WorksItemType>;
  };
}

export type ServiceItemType = {
  image: ImageType;
  title: StringFieldType;
  text: StringFieldType;
  linkLabel: StringFieldType;
  linkUrl: StringFieldType;
};

export interface ServicesSectionType extends PageFullType {
  templateFields: {
    servicesTitle: StringFieldType;
    servicesItems: Array<ServiceItemType>;
    servicesBottomTitle: StringFieldType;
    servicesBottomItems: Array<ServiceItemType>;
  };
}

export interface TechSectionType extends PageFullType {
  templateFields: {
    technologiesTitle: StringFieldType;
    technologiesText: StringFieldType;
    technologiesLogos: Array<ImageType>;
    technologiesImage: ImageType;
    technologiesMobileImage: ImageType;
    technologiesTextAdditional: StringFieldType;
    technologiesButtonFirstLabel: StringFieldType;
    technologiesButtonFirstUrl: StringFieldType;
    technologiesButtonSecondLabel: StringFieldType;
    technologiesButtonSecondUrl: StringFieldType;
  };
}

export interface PlatformSectionType extends PageFullType {
  templateFields: {
    platformTitle: StringFieldType;
    platformText: StringFieldType;
    platformLogos: Array<ImageType>;
    platformAdditional: StringFieldType;
    platformButtonFirstLabel: StringFieldType;
    platformButtonFirstUrl: StringFieldType;
    platformButtonSecondLabel: StringFieldType;
    platformButtonSecondUrl: StringFieldType;
  };
}

export interface TeamSectionType extends PageFullType {
  templateFields: {
    teamGallery: Array<ImageType>;
    teamButtonLabel: StringFieldType;
    teamButtonUrl: StringFieldType;
  };
}

export interface ClientsSectionType extends PageFullType {
  templateFields: {
    clientsTitle: StringFieldType;
    clientsFirstGallery: Array<ImageType>;
    clientsSecondGallery: Array<ImageType>;
  };
}
