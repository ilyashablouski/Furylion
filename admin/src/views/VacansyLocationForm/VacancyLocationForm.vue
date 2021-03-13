<template>
  <page :title="pageTitle" :is-content-loading="isContentLoading">
    <!-- Creation -->
    <form v-if="isCreation" novalidate @submit.prevent>
      <form-field
        v-model="values.name"
        name="name"
        :error="errors.name"
        label="Name"
      />
    </form>

    <!-- Editing -->
    <form v-else novalidate @submit.prevent>
      <form-field
        v-model="values.name"
        name="name"
        :error="errors.name"
        label="Name"
      />
      <form-field-url-alias-input
        id="urlAlias"
        v-model="values.urlAlias"
        name="urlAlias"
        label="URL-alias"
        :url-template="pagePath"
        :error="errors.urlAlias"
      />
    </form>

    <template v-slot:footer>
      <FormFooter
        :back-href="backButtonUrl"
        :on-submit="submitForm"
        :is-submitting="isSubmitting"
        :is-creation="isCreation"
        :can-create-another="isCreation"
        :is-submit-button-disabled="isCreation ? isSubmitButtonDisabled : false"
      />
    </template>
  </page>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
} from '@vue/composition-api';
import {
  getVacancyLocationFormUrl,
  getVacancyLocationListUrl,
} from '@/utils/paths';
import {
  convertRequestErrorToMap,
  Nullable,
  useResource,
} from '@tager/admin-services';
import { FormFooter, TagerFormSubmitEvent } from '@tager/admin-ui';
import { VacancyLocationType } from '@/typings/model';
import {
  createVacancyLocation,
  getVacancyLocation,
  updateVacancyLocation,
} from '@/services/requests';
import { getWebsiteOrigin } from '@/utils/common';
import {
  convertVacancyLocationToFormValues,
  convertValuesToLocationCreationPayload,
  convertValuesToLocationUpdatePayload,
  FormValues,
} from '@/views/VacansyLocationForm/VacancyLocationForm.helpers';

export default defineComponent({
  name: 'LocationForm',
  components: { FormFooter },
  setup(props, context) {
    const locationId = computed<string>(
      () => context.root.$route.params.locationId
    );

    const isCreation = computed<boolean>(() => locationId.value === 'create');

    const errors = ref<Record<string, string>>({});
    const isSubmitting = ref<boolean>(false);

    const pagePath = computed<string>(() => {
      return getWebsiteOrigin() + '/careers/location/';
    });

    const [
      fetchVacancyLocation,
      { data: vacancyLocation, loading: isVacancyLocationLoading },
    ] = useResource<Nullable<VacancyLocationType>>({
      fetchResource: () => getVacancyLocation(locationId.value),
      initialValue: null,
      context,
      resourceName: 'Vacancy Location',
    });

    const values = ref<FormValues>(
      convertVacancyLocationToFormValues(vacancyLocation.value)
    );

    function setValues() {
      values.value = convertVacancyLocationToFormValues(vacancyLocation.value);
    }

    const pageTitle = computed<string>(() => {
      return isCreation.value
        ? `Add Location`
        : `Edit Location "${values.value.name}"`;
    });

    const isSubmitButtonDisabled = computed<boolean>(() => {
      return !values.value.name;
    });

    onMounted(() => {
      if (isCreation.value) return;
      fetchVacancyLocation();
    });

    function submitForm(event: TagerFormSubmitEvent) {
      isSubmitting.value = true;

      const creationBody = convertValuesToLocationCreationPayload(values.value);
      const updateBody = convertValuesToLocationUpdatePayload(values.value);

      const requestPromise = isCreation.value
        ? createVacancyLocation(creationBody)
        : updateVacancyLocation(locationId.value, updateBody);

      requestPromise
        .then((response) => {
          errors.value = {};

          if (event.type === 'create') {
            context.root.$router.push(
              getVacancyLocationFormUrl({ locationId: response.data.id })
            );
          }
          if (event.type === 'create_exit' || event.type === 'save_exit') {
            context.root.$router.push(getVacancyLocationListUrl());
          }
          if (event.type === 'create_create-another') {
            setValues();
          }

          context.root.$toast({
            variant: 'success',
            title: 'Success',
            body: isCreation.value
              ? `Location successfully added`
              : 'Location successfully updated',
          });
        })
        .catch((error) => {
          console.log(error);
          errors.value = convertRequestErrorToMap(error);
          context.root.$toast({
            variant: 'danger',
            title: 'Error',
            body: isCreation.value
              ? `Error while adding location`
              : 'Error while updating location',
          });
        })
        .finally(() => {
          isSubmitting.value = false;
        });
    }

    const isContentLoading = computed<boolean>(
      () => isVacancyLocationLoading.value
    );

    watch(vacancyLocation, () => {
      setValues();
    });

    watch(locationId, () => {
      fetchVacancyLocation();
    });

    return {
      pageTitle,
      pagePath,

      isCreation,
      isSubmitting,
      isContentLoading,
      isVacancyLocationLoading,
      errors,
      values,

      backButtonUrl: getVacancyLocationListUrl(),
      isSubmitButtonDisabled,

      submitForm,
    };
  },
});
</script>
