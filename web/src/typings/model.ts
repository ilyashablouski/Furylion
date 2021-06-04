import { ReactElement, SVGProps } from 'react';

import {
  PageFullType,
  SettingsItemImage,
  SettingsItemString,
  ThumbnailType,
} from '@tager/web-modules';
import { Nullable, Nullish } from '@tager/web-core';
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
  | SettingsItemString<'NOT_FOUND_BUTTON_URL'>
  | SettingsItemString<'FirstHeaderTitle'>
  | SettingsItemString<'SecondHeaderTitle'>
  | SettingsItemString<'BenefitsTitle'>;

export type FileType = {
  id: number;
  mime: string;
  name: string;
  size: number;
  url: string;
};

interface BaseImageType {
  desktop: Nullable<ThumbnailType>;
  mobile: Nullable<ThumbnailType>;
  laptop: Nullable<ThumbnailType>;
  tablet: Nullable<ThumbnailType>;
}

export interface SocialsType {
  socialsData: Array<{ href: StringFieldType; svg: SVGProps<SVGSVGElement> }>;
}

export interface HeroSectionType extends PageFullType {
  templateFields: {
    heroId: StringFieldType;
    heroTitle: StringFieldType;
    heroText: StringFieldType;
    heroImage: Nullable<BaseImageType>;
    heroMobileImage: Nullable<BaseImageType>;
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
    worksId: StringFieldType;
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
  isNewTab: boolean;
  scrollTo?: Nullish<string>;
};

export interface ServicesSectionType extends PageFullType {
  templateFields: {
    servicesId: StringFieldType;
    servicesBottomId: StringFieldType;
    servicesTitle: StringFieldType;
    servicesItems: Array<ServiceItemType>;
    servicesBottomTitle: StringFieldType;
    servicesBottomItems: Array<ServiceItemType>;
  };
}

export interface TechSectionType extends PageFullType {
  templateFields: {
    technologiesId: StringFieldType;
    technologiesTitle: StringFieldType;
    technologiesText: StringFieldType;
    technologiesLogos: Array<ThumbnailType>;
    technologiesImage: Nullable<ThumbnailType>;
    technologiesMobileImage: Nullable<ThumbnailType>;
    technologiesTextAdditional: StringFieldType;
    technologiesButtonFirstLabel: StringFieldType;
    technologiesButtonFirstUrl: StringFieldType;
    technologiesButtonFirstIsNewTab: boolean;
    technologiesButtonSecondLabel: StringFieldType;
    technologiesButtonSecondUrl: StringFieldType;
    technologiesButtonSecondIsNewTab: boolean;
  };
}

export interface PlatformSectionType extends PageFullType {
  templateFields: {
    platformId: StringFieldType;
    platformTitle: StringFieldType;
    platformText: StringFieldType;
    platformLogos: Array<ThumbnailType>;
    platformAdditional: StringFieldType;
    platformButtonFirstLabel: StringFieldType;
    platformButtonFirstUrl: StringFieldType;
    platformButtonFirstIsNewTab: boolean;
    platformButtonSecondLabel: StringFieldType;
    platformButtonSecondUrl: StringFieldType;
    platformButtonSecondIsNewTab: boolean;
  };
}

export interface TeamSectionType extends PageFullType {
  templateFields: {
    teamId: StringFieldType;
    teamItems: Array<ThumbnailType>;
    teamButtonLabel: StringFieldType;
    teamButtonUrl: StringFieldType;
    teamButtonIsNewTab: boolean;
  };
}

export interface ClientsSectionType extends PageFullType {
  templateFields: {
    clientsId: StringFieldType;
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
    teamLifeId: StringFieldType;
    headId: StringFieldType;
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
    headId: StringFieldType;
    headText: StringFieldType;
  };
}

export interface FirstArtSectionType extends PageFullType {
  templateFields: {
    firstArtId: StringFieldType;
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
    secondArtId: StringFieldType;
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
    productionId: StringFieldType;
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
    portingId: StringFieldType;
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
    developmentId: StringFieldType;
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
    outStaffingId: StringFieldType;
    outStaffingTitle: StringFieldType;
    outStaffingText1: StringFieldType;
    outStaffingText2: StringFieldType;
    outStaffingItems: Array<OutStaffingItemType>;
  };
}

export interface CoDevelopmentSectionType extends PageFullType {
  templateFields: {
    coDevelopmentId: StringFieldType;
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
    adsId: StringFieldType;
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
    headAdsId: StringFieldType;
    headAdsText: StringFieldType;
    headAdsItemsTop: Array<AdsHeadItemType>;
    headAdsItemsBottom: Array<AdsHeadItemType>;
  };
}

export interface AdvantagesSectionType extends PageFullType {
  templateFields: {
    advantagesId: StringFieldType;
    advantagesTitle: StringFieldType;
    advantagesText1: StringFieldType;
    advantagesText2: StringFieldType;
    advantagesText3: StringFieldType;
    advantagesList: StringFieldType;
  };
}

export interface RateSectionType extends PageFullType {
  templateFields: {
    rateMainId: StringFieldType;
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
    cpiId: StringFieldType;
    cpiTitle: StringFieldType;
    cpiImage: ThumbnailType;
    cpiButtonLabel: StringFieldType;
    cpiButtonUrl: StringFieldType;
  };
}

export interface ReengagementSectionType extends PageFullType {
  templateFields: {
    reengagementId: StringFieldType;
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
    frameworkId: StringFieldType;
    frameworkTitle: StringFieldType;
    frameworkText: StringFieldType;
    frameworkItems: Array<FrameworkItemType>;
    frameworkButtonLabel: StringFieldType;
    frameworkButtonUrl: StringFieldType;
  };
}

export interface NetworksSectionType extends PageFullType {
  templateFields: {
    networksId: StringFieldType;
    networksTitle: StringFieldType;
    networksFirstGallery: Array<ThumbnailType>;
    networksSecondGallery: Array<ThumbnailType>;
  };
}

export interface EditorSectionType extends PageFullType {
  templateFields: {
    editorId: StringFieldType;
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

export type DoYouWantSectionItemType = {
  image: ThumbnailType;
  action: StringFieldType;
  link: StringFieldType;
};

export interface DoYouWantSectionType extends PageFullType {
  templateFields: {
    doYouWantId: StringFieldType;
    doYouWantTitle: StringFieldType;
    doYouWantFirstGallery: Array<DoYouWantSectionItemType>;
    doYouWantSecondGallery: Array<DoYouWantSectionItemType>;
    doYouWantThirdGallery: Array<DoYouWantSectionItemType>;
  };
}
