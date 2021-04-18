import { ReactElement, SVGProps } from 'react';

import {
  PageFullType,
  SettingsItemImage,
  SettingsItemString,
  ThumbnailType,
} from '@tager/web-modules';
import { Nullable } from '@tager/web-core';
import { SettingsItemCommon } from '@tager/web-modules/src/typings/models';

import { StringFieldType } from '@/typings/common';

export type SettingOptionType = {
  title: StringFieldType;
  text: StringFieldType;
  phone: StringFieldType;
  email: StringFieldType;
};

export type SettingInstagramOptionType = {
  type: StringFieldType;
  preview: ThumbnailType;
  url: StringFieldType;
};

export type SettingOptionsListType = Array<SettingOptionType>;
export type SettingInstagramOptionsListType = Array<SettingInstagramOptionType>;

export interface SettingsItemOptions<Key extends string>
  extends SettingsItemCommon<Key> {
  value: SettingOptionsListType;
}

export interface SettingsInstagramOptions<Key extends string>
  extends SettingsItemCommon<Key> {
  value: SettingInstagramOptionsListType;
}

export type SettingsItemType =
  | SettingsItemString<'FORM_TITLE'>
  | SettingsItemString<'FORM_VACANCIES_TITLE'>
  | SettingsItemOptions<'FOOTER_OFFICES'>
  | SettingsItemString<'INSTAGRAM_URL'>
  | SettingsItemString<'VKONTAKTE_URL'>
  | SettingsItemString<'APPSTORE_URL'>
  | SettingsItemString<'GOOGLEPLAY_URL'>
  | SettingsItemString<'OPEN_VACANCY_TITLE'>
  | SettingsItemImage<'OPEN_VACANCY_IMAGE'>
  | SettingsItemString<'OPEN_VACANCY_DESCRIPTION'>
  | SettingsInstagramOptions<'INSTAGRAM'>;

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
    heroImage: Nullable<ThumbnailType>;
    heroMobileImage: Nullable<ThumbnailType>;
  };
}

export type WorksItemType = {
  image: Nullable<ThumbnailType>;
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
  image: Nullable<ThumbnailType>;
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
    technologiesLogos: Array<ThumbnailType>;
    technologiesImage: Nullable<ThumbnailType>;
    technologiesMobileImage: Nullable<ThumbnailType>;
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
    platformLogos: Array<ThumbnailType>;
    platformAdditional: StringFieldType;
    platformButtonFirstLabel: StringFieldType;
    platformButtonFirstUrl: StringFieldType;
    platformButtonSecondLabel: StringFieldType;
    platformButtonSecondUrl: StringFieldType;
  };
}

export interface TeamSectionType extends PageFullType {
  templateFields: {
    teamGallery: Array<ThumbnailType>;
    teamButtonLabel: StringFieldType;
    teamButtonUrl: StringFieldType;
  };
}

export interface ClientsSectionType extends PageFullType {
  templateFields: {
    clientsTitle: StringFieldType;
    clientsFirstGallery: Array<ThumbnailType>;
    clientsSecondGallery: Array<ThumbnailType>;
  };
}

export interface VacancyShortType {
  id: number;
  title: StringFieldType;
  excerpt: StringFieldType;
  tags: StringFieldType;
  urlAlias: StringFieldType;
  location: StringFieldType;
  image: Nullable<ThumbnailType>;
  typeOfWork: StringFieldType;
  level: StringFieldType;
}

export interface VacancyFullType {
  id: number;
  body: StringFieldType;
  pageTitle: StringFieldType;
  tags: StringFieldType;
  conditions: StringFieldType;
  excerpt: StringFieldType;
  title: StringFieldType;
  image: Nullable<ThumbnailType>;
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
  data: VacancyFullType;
}

//TODO: Delete types if not need
type testThumbnailType = string;

export interface VacancyCardShortType {
  image: Nullable<ThumbnailType>;
  typeOfWork?: StringFieldType;
  level?: StringFieldType;
}

export interface VacancyCardFullType extends VacancyCardShortType {
  title: StringFieldType;
  excerpt: StringFieldType;
  urlAlias?: StringFieldType;
  tags?: StringFieldType;
}

export interface TeamLifeSectionType extends PageFullType {
  templateFields: {
    headImage: Nullable<ThumbnailType>;
    teamLifeTitle: StringFieldType;
    teamLifeDescription: StringFieldType;
    teamLifeButton: {
      label: StringFieldType;
      link: StringFieldType;
      isNewTab: boolean;
    };
  };
}

export type LocationType = {
  id: number;
  location: string;
  number: number;
};

export interface ServiceHeaderSectionType extends PageFullType {
  templateFields: {
    headText: StringFieldType;
  };
}

export interface FirstArtSectionType extends PageFullType {
  templateFields: {
    firstArtTitle: StringFieldType;
    firstArtText1: StringFieldType;
    firstArtText2: StringFieldType;
    firstArtText3: StringFieldType;
    firstArtTextAdditional: StringFieldType;
    firstArtButtonFirstLabel: StringFieldType;
    firstArtButtonFirstUrl: StringFieldType;
    firstArtButtonSecondLabel: StringFieldType;
    firstArtButtonSecondUrl: StringFieldType;
    firstArtImages: Array<ThumbnailType>;
  };
}

export interface SecondArtSectionType extends PageFullType {
  templateFields: {
    secondArtTitle: StringFieldType;
    secondArtText1: StringFieldType;
    secondArtText2: StringFieldType;
    secondArtText3: StringFieldType;
    secondArtTextAdditional: StringFieldType;
    secondArtButtonFirstLabel: StringFieldType;
    secondArtButtonFirstUrl: StringFieldType;
    secondArtButtonSecondLabel: StringFieldType;
    secondArtButtonSecondUrl: StringFieldType;
    secondArtImages: Array<ThumbnailType>;
  };
}

export type ProductionMediaItemType = {
  image: ThumbnailType;
  videoUrl: StringFieldType;
};

export interface ProductionBlockType extends PageFullType {
  templateFields: {
    productionTitle: StringFieldType;
    productionText1: StringFieldType;
    productionText2: StringFieldType;
    productionButtonFirstLabel: StringFieldType;
    productionButtonFirstUrl: StringFieldType;
    productionButtonSecondLabel: StringFieldType;
    productionButtonSecondUrl: StringFieldType;
    productionMediaTop: Array<ProductionMediaItemType>;
    productionMediaBottom: Array<ProductionMediaItemType>;
  };
}

export interface PortingBlockType extends PageFullType {
  templateFields: {
    portingTitle: StringFieldType;
    portingText1: StringFieldType;
    portingText2: StringFieldType;
    portingText3: StringFieldType;
    portingButtonFirstLabel: StringFieldType;
    portingButtonFirstUrl: StringFieldType;
    portingButtonSecondLabel: StringFieldType;
    portingButtonSecondUrl: StringFieldType;
    portingImage: ThumbnailType;
  };
}

export type DevelopmentLogoType = {
  image: ThumbnailType;
  linkUrl: StringFieldType;
};

export type DevelopmentItemType = {
  image: ThumbnailType;
  title: StringFieldType;
  text: StringFieldType;
  logos: Array<DevelopmentLogoType>;
};

export interface DevelopmentSectionType extends PageFullType {
  templateFields: {
    developmentTitle: StringFieldType;
    developmentItems: Array<DevelopmentItemType>;
  };
}
