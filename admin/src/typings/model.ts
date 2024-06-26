import { FileType, Nullable } from '@tager/admin-services';

export type TagType = {
  value: string;
  label: string;
  name: string;
  title: string;
};

export type VacancyType = {
  readonly id: number;
  readonly url: string;
  readonly title: string;
  readonly urlAlias: string;
  readonly location: Nullable<VacancyLocationType>;
  readonly excerpt: string;
  readonly introduction: string;
  readonly introductionSecond: string;
  readonly introductionThird: string;
  readonly type: string;
  readonly level: string;
  readonly technologies: string;
  readonly duties: string;
  readonly requirements: string;
  readonly conditions: string;
  readonly tags: string;
  readonly body: Nullable<string>;
  readonly pageTitle: Nullable<string>;
  readonly pageDescription: Nullable<string>;
  readonly openGraphImage: Nullable<FileType>;
  readonly image: Nullable<FileType>;
};

export type VacancyLocationType = {
  readonly id: number;
  readonly url: string;
  readonly name: string;
  readonly urlAlias: string;
  readonly vacanciesCount: number;
};
