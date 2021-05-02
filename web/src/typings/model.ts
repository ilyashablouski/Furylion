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
  | SettingsInstagramOptions<'INSTAGRAM'>
  | SettingsItemString<'NOT_FOUND_TEXT'>
  | SettingsItemString<'NOT_FOUND_BUTTON_LABEL'>
  | SettingsItemString<'NOT_FOUND_BUTTON_URL'>;

export type FileType = {
  id: number;
  mime: string;
  name: string;
  size: number;
  url: string;
};

export interface HeaderFooterType {
  socialsData: Array<{ href: StringFieldType; svg: SVGProps<SVGSVGElement> }>;
  vacanciesTotalValue: number;
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
  title: StringFieldType;
  text: StringFieldType;
  logos: Array<ThumbnailType>;
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
  videoId: StringFieldType;
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

export type OutStaffingItemType = {
  title: StringFieldType;
  tags: StringFieldType;
};

export interface OutStaffingSectionType extends PageFullType {
  templateFields: {
    outStaffingTitle: StringFieldType;
    outStaffingText1: StringFieldType;
    outStaffingText2: StringFieldType;
    outStaffingItems: Array<OutStaffingItemType>;
  };
}

export interface CoDevelopmentSectionType extends PageFullType {
  templateFields: {
    coDevelopmentTitle: StringFieldType;
    coDevelopmentText1: StringFieldType;
    coDevelopmentText2: StringFieldType;
    coDevelopmentText3: StringFieldType;
    leftLogo: ThumbnailType;
    rightLogo: ThumbnailType;
    coDevelopmentButtonLabel: StringFieldType;
    coDevelopmentButtonUrl: StringFieldType;
  };
}

export interface AdsSectionType extends PageFullType {
  templateFields: {
    adsTitle: StringFieldType;
    adsText1: StringFieldType;
    adsText2: StringFieldType;
    adsText3: StringFieldType;
    adsImages: Array<ThumbnailType>;
    adsButtonLabel: StringFieldType;
    adsButtonUrl: StringFieldType;
  };
}

export type AdsHeadItemType = {
  image: ThumbnailType;
  linkUrl: StringFieldType;
};

export interface AdsHeadSectionType extends PageFullType {
  templateFields: {
    headAdsText: StringFieldType;
    headAdsItems: Array<AdsHeadItemType>;
  };
}

export interface AdvantagesSectionType extends PageFullType {
  templateFields: {
    advantagesTitle: StringFieldType;
    advantagesText1: StringFieldType;
    advantagesText2: StringFieldType;
    advantagesText3: StringFieldType;
    advantagesList: StringFieldType;
  };
}

export interface RateSectionType extends PageFullType {
  templateFields: {
    rateMainTitle: StringFieldType;
    rateText: StringFieldType;
    rateLeftTitle: StringFieldType;
    rateLeftText: StringFieldType;
    rateRightTitle: StringFieldType;
    rateRightText: StringFieldType;
    rateButtonLabel: StringFieldType;
    rateButtonUrl: StringFieldType;
  };
}

export interface CpiSectionType extends PageFullType {
  templateFields: {
    cpiTitle: StringFieldType;
    cpiImage: ThumbnailType;
    cpiButtonLabel: StringFieldType;
    cpiButtonUrl: StringFieldType;
  };
}

export interface ReengagementSectionType extends PageFullType {
  templateFields: {
    reengagementTitle: StringFieldType;
    reengagementText1: StringFieldType;
    reengagementText2: StringFieldType;
    reengagementText3: StringFieldType;
    reengagementButtonLabel: StringFieldType;
    reengagementButtonUrl: StringFieldType;
  };
}

export type FrameworkItemType = {
  title: StringFieldType;
  topText: StringFieldType;
  bottomText: StringFieldType;
};

export interface FrameworkSectionType extends PageFullType {
  templateFields: {
    frameworkTitle: StringFieldType;
    frameworkText: StringFieldType;
    frameworkItems: Array<FrameworkItemType>;
    frameworkButtonLabel: StringFieldType;
    frameworkButtonUrl: StringFieldType;
  };
}

export interface NetworksSectionType extends PageFullType {
  templateFields: {
    networksTitle: StringFieldType;
    networksFirstGallery: Array<ThumbnailType>;
    networksSecondGallery: Array<ThumbnailType>;
  };
}

export interface EditorSectionType extends PageFullType {
  templateFields: {
    editorTitle: StringFieldType;
    editorText: StringFieldType;
    editorButtonLabel: StringFieldType;
    editorButtonUrl: StringFieldType;
    editorImage: ThumbnailType;
  };
}

export interface EditorSectionType extends PageFullType {
  templateFields: {
    editorTitle: StringFieldType;
    editorText: StringFieldType;
    editorButtonLabel: StringFieldType;
    editorButtonUrl: StringFieldType;
    editorImage: ThumbnailType;
  };
}

export interface EditorFormType extends PageFullType {
  templateFields: {
    formTitle: StringFieldType;
    formProfileTitle: StringFieldType;
    formProfileImage: ThumbnailType;
    formProfileLabel: StringFieldType;
  };
}

export interface DoYouWantSectionType extends PageFullType {
  templateFields: {
    doYouWantTitle: StringFieldType;
    doYouWantFirstGallery: Array<ThumbnailType>;
    doYouWantSecondGallery: Array<ThumbnailType>;
    doYouWantThirdGallery: Array<ThumbnailType>;
  };
}
