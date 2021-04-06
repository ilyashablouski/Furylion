import { ReactElement, SVGProps } from 'react';

import { PageFullType, SettingsItemString } from '@tager/web-modules';
import { Nullable } from '@tager/web-core';
import { SettingsItemCommon } from '@tager/web-modules/src/typings/models';

import { StringFieldType } from '@/typings/common';

export interface ExamplePageType extends PageFullType {
  path: '/example';
  templateFields: null;
}

export type SettingOptionType = {
  title: StringFieldType;
  text: StringFieldType;
  phone: StringFieldType;
  email: StringFieldType;
};
export type SettingOptionsListType = Array<SettingOptionType>;

export interface SettingsItemOptions<Key extends string>
  extends SettingsItemCommon<Key> {
  value: SettingOptionsListType;
}

export type SettingsItemType =
  | SettingsItemString<'FORM_TITLE'>
  | SettingsItemString<'FORM_VACANCIES_TITLE'>
  | SettingsItemOptions<'FOOTER_OFFICES'>
  | SettingsItemString<'INSTAGRAM_URL'>
  | SettingsItemString<'VKONTAKTE_URL'>
  | SettingsItemString<'APPSTORE_URL'>
  | SettingsItemString<'GOOGLEPLAY_URL'>;

export type ImageType = Nullable<{
  url: Nullable<string>;
  url_2x: Nullable<string>;
  url_webp: Nullable<string>;
  url_webp_2x: Nullable<string>;
}>;

export type FileType = {
  id: number;
  mime: string;
  name: string;
  size: number;
  url: string;
};

export interface SocialsType {
  socialsData: Array<{ href: StringFieldType; svg: SVGProps<SVGSVGElement> }>;
}

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

export interface VacancyShortListType {
  id: number;
  title: StringFieldType;
  excerpt: StringFieldType;
  urlAlias: StringFieldType;
  location: StringFieldType;
  image: ImageType;
  typeOfWork: StringFieldType;
  level: StringFieldType;
}

export interface VacancyFullListType {
  id: number;
  body: StringFieldType;
  pageTitle: StringFieldType;
  tags: StringFieldType;
  conditions: StringFieldType;
  excerpt: StringFieldType;
  title: StringFieldType;
  image: ImageType;
  introduction: StringFieldType;
  introductionSecond: StringFieldType;
  introductionThird: StringFieldType;
  level: StringFieldType;
  typeOfWork: StringFieldType;
  location: StringFieldType;
  openGraphImage: StringFieldType;
  pageDescription: StringFieldType;
  requirements: StringFieldType;
  responsibilities: StringFieldType;
  technologies: StringFieldType;
}

export interface CareersVacancyType {
  data: VacancyFullListType;
}

//TODO: refactoring types if need
type testImageType = string;

export interface VacancyCardType {
  image?: ImageType;
  typeOfWork?: StringFieldType;
  level?: StringFieldType;
}

export interface JobCardType extends VacancyCardType {
  title: StringFieldType;
  excerpt: StringFieldType;
  urlAlias: StringFieldType;
}
