import { Nullable } from '@tager/admin-services';
import { OptionType, SingleFileInputValueType } from '@tager/admin-ui';
import { VacancyType } from '@/typings/model';
import {
  VacancyCreatePayload,
  VacancyUpdatePayload,
} from '@/services/requests';
import { createFileInputValue } from '@/utils/common';

export type FormValues = {
  title: string;
  urlAlias: string;
  location: Nullable<OptionType<number>>;
  excerpt: string;
  pageTitle: string;
  pageDescription: string;
  openGraphImage: Nullable<SingleFileInputValueType>;
  introduction: string;
  introductionSecond: string;
  introductionThird: string;
  type: string;
  level: string;
  technologies: string;
  duties: string;
  requirements: string;
  conditions: string;
  tags: string;
  image: Nullable<SingleFileInputValueType>;
};

export function convertFormValuesToVacancyCreationPayload(
  values: FormValues
): VacancyCreatePayload {
  return {
    title: values.title,
    locationId: values.location?.value ?? null,
  };
}

export function convertFormValuesToVacancyUpdatePayload(
  values: FormValues
): VacancyUpdatePayload {
  return {
    title: values.title,
    urlAlias: values.urlAlias,
    locationId: values.location?.value ?? null,
    excerpt: values.excerpt,
    pageTitle: values.pageTitle,
    pageDescription: values.pageDescription,
    openGraphImage: values.openGraphImage?.file.id ?? null,
    introduction: values.introduction,
    introductionSecond: values.introductionSecond,
    introductionThird: values.introductionThird,
    type: values.type,
    level: values.level,
    technologies: values.technologies,
    duties: values.duties,
    requirements: values.requirements,
    conditions: values.conditions,
    tags: values.tags,
    image: values.image?.file.id ?? null,
  };
}

export function convertVacancyToFormValues(
  vacancy: Nullable<VacancyType>,
  vacancyLocationOptionList: Array<OptionType<number>>
): FormValues {
  if (!vacancy) {
    return {
      title: '',
      urlAlias: '',
      location: null,
      excerpt: '',
      pageTitle: '',
      pageDescription: '',
      openGraphImage: null,
      image: null,
      introduction: '',
      introductionSecond: '',
      introductionThird: '',
      type: '',
      level: '',
      technologies: '',
      duties: '',
      requirements: '',
      conditions: '',
      tags: '',
    };
  }

  const foundVacancyLocationOption = vacancyLocationOptionList.find(
    (option) => option.value === vacancy.location?.id
  );

  return {
    title: vacancy.title ?? '',
    urlAlias: vacancy.urlAlias ?? '',
    location: foundVacancyLocationOption ?? null,
    excerpt: vacancy.excerpt ?? '',
    pageTitle: vacancy.pageTitle ?? '',
    pageDescription: vacancy.pageDescription ?? '',
    openGraphImage: vacancy.openGraphImage
      ? createFileInputValue(vacancy.openGraphImage)
      : null,
    image: vacancy.image ? createFileInputValue(vacancy.image) : null,
    introduction: vacancy.introduction,
    introductionSecond: vacancy.introductionSecond,
    introductionThird: vacancy.introductionThird,
    type: vacancy.type,
    level: vacancy.level,
    technologies: vacancy.technologies,
    duties: vacancy.duties,
    requirements: vacancy.requirements,
    conditions: vacancy.conditions,
    tags: vacancy.tags,
  };
}
