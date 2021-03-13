<template>
  <page :title="pageTitle" :is-content-loading="isContentLoading">
    <!-- Creation -->
    <form v-if="isCreation" novalidate @submit.prevent>
      <form-field
        v-model="values.title"
        name="title"
        :error="errors.title"
        label="Title"
      />
      <form-field-select
        v-model="values.location"
        name="location"
        label="Location"
        :error="errors.location"
        :options="vacancyLocationOptionList"
        placeholder="No location"
      />
    </form>

    <!-- Editing -->
    <form v-else novalidate @submit.prevent>
      <tab-list
        :tab-list="tabList"
        :selected-tab-id="selectedTabId"
        @tab:update="selectedTabId = $event.tabId"
      />
      <template v-if="selectedTabId === 'general'">
        <form-field
          v-model="values.title"
          name="title"
          :error="errors.title"
          label="Title"
        />
        <form-field-url-alias-input
          id="urlAlias"
          v-model="values.urlAlias"
          name="urlAlias"
          label="URL-alias"
          :url-template="pagePath"
          :error="errors.urlAlias"
        />
        <form-field-select
          v-model="values.location"
          name="location"
          label="Location"
          :error="errors.location"
          :options="vacancyLocationOptionList"
          placeholder="No location"
        />
        <form-field
          v-model="values.excerpt"
          name="excerpt"
          :error="errors.excerpt"
          type="textarea"
          label="Excerpt"
        />
        <form-field
          v-model="values.type"
          name="type"
          :error="errors.type"
          label="Type of work"
        />
        <form-field
          v-model="values.level"
          name="level"
          :error="errors.level"
          label="Level"
        />
        <form-field-file-input
          v-model="values.image"
          name="image"
          :error="errors.image"
          label="Image"
        />
      </template>
      <template v-if="selectedTabId === 'details'">
        <form-field
          v-model="values.introduction"
          name="introduction"
          :error="errors.introduction"
          type="textarea"
          label="Intro text"
        />
        <form-field
          v-model="values.technologies"
          name="technologies"
          :error="errors.technologies"
          label="Technologies used"
        />
        <form-field
          v-model="values.duties"
          name="duties"
          :error="errors.duties"
          type="textarea"
          label="Responsibilities"
        />
        <form-field
          v-model="values.requirements"
          name="requirements"
          :error="errors.requirements"
          type="textarea"
          label="Requirements"
        />
        <form-field
          v-model="values.conditions"
          name="conditions"
          :error="errors.conditions"
          type="textarea"
          label="Conditions"
        />
        <form-field-rich-text-input
          v-model="values.body"
          name="body"
          label="Body"
          :error="errors.body"
        />
      </template>
      <template v-if="selectedTabId === 'seo'">
        <SeoFieldGroup
          :title="values.pageTitle"
          :description="values.pageDescription"
          :image="values.openGraphImage"
          @change:title="handleSEOTitle"
          @change:description="handleSEODescription"
          @change:image="handleSEOImage"
        />
      </template>
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
import { getVacancyFormUrl, getVacancyListUrl } from '@/utils/paths';
import {
  convertRequestErrorToMap,
  notEmpty,
  Nullable,
  useResource,
} from '@tager/admin-services';
import {
  createTabErrorFinder,
  FormFooter,
  OptionType,
  SeoFieldGroup,
  SingleFileInputValueType,
  TabType,
  TagerFormSubmitEvent,
} from '@tager/admin-ui';
import {
  convertFormValuesToVacancyCreationPayload,
  convertFormValuesToVacancyUpdatePayload,
  convertVacancyToFormValues,
  FormValues,
} from '@/views/VacancyForm/VacancyForm.helpers';
import { VacancyLocationType, VacancyType } from '@/typings/model';
import {
  createVacancy,
  getVacancy,
  getVacancyLocationsList,
  updateVacancy,
} from '@/services/requests';
import { getWebsiteOrigin } from '@/utils/common';

export default defineComponent({
  name: 'VacanciesForm',
  components: { FormFooter, SeoFieldGroup },
  setup(props, context) {
    const vacancyId = computed<string>(
      () => context.root.$route.params.vacancyId
    );

    const isCreation = computed<boolean>(() => vacancyId.value === 'create');

    const errors = ref<Record<string, string>>({});
    const isSubmitting = ref<boolean>(false);

    const pagePath = computed<string>(() => {
      return getWebsiteOrigin() + '/careers/';
    });

    /** Tabs */
    const tabList = computed<Array<TabType>>(() => {
      const hasErrors = createTabErrorFinder(errors.value);

      return [
        {
          id: 'general',
          label: 'General',
          hasErrors: hasErrors([
            'title',
            'urlAlias',
            'location',
            'excerpt',
            'type',
            'level',
            'image',
          ]),
        },
        {
          id: 'details',
          label: 'Details',
          hasErrors: hasErrors([
            'introduction',
            'technologies',
            'duties',
            'requirements',
            'conditions',
            'body',
          ]),
        },
        {
          id: 'seo',
          label: 'SEO',
          hasErrors: hasErrors([
            'pageTitle',
            'pageDescription',
            'openGraphImage',
          ]),
        },
      ].filter(notEmpty);
    });

    const selectedTabId = ref<string>(tabList.value[0].id);

    const [
      fetchVacancyLocationList,
      { data: vacancyLocationList, loading: isVacancyLocationListLoading },
    ] = useResource<Array<VacancyLocationType>>({
      fetchResource: getVacancyLocationsList,
      initialValue: [],
      context,
      resourceName: 'Location list',
    });

    const [
      fetchVacancy,
      { data: vacancy, loading: isVacancyLoading },
    ] = useResource<Nullable<VacancyType>>({
      fetchResource: () => getVacancy(vacancyId.value),
      initialValue: null,
      context,
      resourceName: 'Vacancy',
    });

    const vacancyLocationOptionList = computed<Array<OptionType<number>>>(() =>
      vacancyLocationList.value.map((vacancyLocation) => ({
        value: vacancyLocation.id,
        label: vacancyLocation.name,
      }))
    );

    const values = ref<FormValues>(
      convertVacancyToFormValues(vacancy.value, vacancyLocationOptionList.value)
    );

    function setValues() {
      values.value = convertVacancyToFormValues(
        vacancy.value,
        vacancyLocationOptionList.value
      );
    }

    const pageTitle = computed<string>(() => {
      return isCreation.value
        ? `Add Vacancy`
        : `Edit Vacancy "${values.value.title}"`;
    });

    const isSubmitButtonDisabled = computed<boolean>(() => {
      return !values.value.title || !values.value.location;
    });

    onMounted(() => {
      fetchVacancyLocationList();
      if (isCreation.value) return;
      fetchVacancy();
    });

    function submitForm(event: TagerFormSubmitEvent) {
      isSubmitting.value = true;

      const creationBody = convertFormValuesToVacancyCreationPayload(
        values.value
      );
      const updateBody = convertFormValuesToVacancyUpdatePayload(values.value);

      const requestPromise = isCreation.value
        ? createVacancy(creationBody)
        : updateVacancy(vacancyId.value, updateBody);

      requestPromise
        .then((response) => {
          errors.value = {};

          if (event.type === 'create') {
            context.root.$router.push(
              getVacancyFormUrl({ vacancyId: response.data.id })
            );
          }
          if (event.type === 'create_exit' || event.type === 'save_exit') {
            context.root.$router.push(getVacancyListUrl());
          }
          if (event.type === 'create_create-another') {
            setValues();
          }

          context.root.$toast({
            variant: 'success',
            title: 'Success',
            body: isCreation.value
              ? `Vacancy successfully added`
              : 'Vacancy successfully updated',
          });
        })
        .catch((error) => {
          errors.value = convertRequestErrorToMap(error);
          context.root.$toast({
            variant: 'danger',
            title: 'Error',
            body: isCreation.value
              ? `Error while adding vacancy`
              : 'Error while updating vacancy',
          });
        })
        .finally(() => {
          isSubmitting.value = false;
        });
    }

    function handleSEOTitle(value: string) {
      values.value.pageTitle = value;
    }

    function handleSEODescription(value: string) {
      values.value.pageDescription = value;
    }

    function handleSEOImage(value: SingleFileInputValueType | null) {
      values.value.openGraphImage = value;
    }

    const isContentLoading = computed<boolean>(
      () => isVacancyLoading.value || isVacancyLocationListLoading.value
    );

    watch(vacancy, () => {
      setValues();
    });

    watch(vacancyId, () => {
      if (isCreation.value) return;
      fetchVacancy();
    });

    return {
      pageTitle,
      pagePath,
      selectedTabId,
      tabList,

      vacancyLocationOptionList,

      isCreation,
      isSubmitting,
      isContentLoading,
      isVacancyLoading,
      errors,
      values,

      handleSEOTitle,
      handleSEODescription,
      handleSEOImage,

      backButtonUrl: getVacancyListUrl(),
      isSubmitButtonDisabled,

      submitForm,
    };
  },
});
</script>
