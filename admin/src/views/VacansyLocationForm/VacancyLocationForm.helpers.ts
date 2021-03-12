import { Nullable } from '@tager/admin-services';
import { VacancyLocationType } from '@/typings/model';
import {
  VacancyLocationCreatePayload,
  VacancyLocationUpdatePayload,
} from '@/services/requests';

export type FormValues = {
  name: string;
  urlAlias: string;
};

export function convertValuesToLocationCreationPayload(
  values: FormValues
): VacancyLocationCreatePayload {
  return {
    name: values.name,
  };
}

export function convertValuesToLocationUpdatePayload(
  values: FormValues
): VacancyLocationUpdatePayload {
  return {
    name: values.name,
    urlAlias: values.urlAlias,
  };
}

export function convertVacancyLocationToFormValues(
  vacancyLocation: Nullable<VacancyLocationType>
): FormValues {
  if (!vacancyLocation) {
    return {
      name: '',
      urlAlias: '',
    };
  }

  return {
    name: vacancyLocation.name ?? '',
    urlAlias: vacancyLocation.urlAlias ?? '',
  };
}
