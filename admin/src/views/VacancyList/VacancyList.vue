<template>
  <page
    title="Vacancies"
    :header-buttons="[
      {
        text: 'Add Vacancy',
        href: getVacancyFormUrl({
          vacancyId: 'create',
        }),
      },
    ]"
  >
    <template v-slot:content>
      <data-table
        :column-defs="columnDefs"
        :row-data="rowData"
        :loading="isRowDataLoading"
        :error-message="errorMessage"
        :search-query="searchQuery"
        :pagination="{
          pageNumber,
          pageCount,
          pageSize,
          disabled: isRowDataLoading,
        }"
        @change="handleChange"
      >
        <template v-slot:filters>
          <advanced-search :tags="tags" @click:tag="handleTagRemove">
            <form-field-multi-select
              v-model="locationFilter"
              :options="vacancyLocationOptionList"
              name="locationFilter"
              label="Locations"
            />
          </advanced-search>
        </template>
        <template v-slot:cell(index)="{ row, rowIndex }">
          <div>{{ rowIndex + 1 }}</div>
        </template>
        <template v-slot:cell(actions)="{ row, rowIndex }">
          <base-button
            variant="icon"
            :disabled="isBusy(row.id) || rowIndex === rowData.length - 1"
            @click="handleVacancyMove(row.id, 'down')"
          >
            <svg-icon name="south" />
          </base-button>

          <base-button
            variant="icon"
            :disabled="isBusy(row.id) || rowIndex === 0"
            @click="handleVacancyMove(row.id, 'up')"
          >
            <svg-icon name="north" />
          </base-button>

          <base-button
            variant="icon"
            title="Edit"
            :disabled="isBusy(row.id)"
            :href="
              getVacancyFormUrl({
                vacancyId: row.id,
              })
            "
          >
            <svg-icon name="edit"></svg-icon>
          </base-button>

          <base-button
            variant="icon"
            title="Delete"
            :disabled="isBusy(row.id)"
            @click="handleVacancyDelete(row.id)"
          >
            <svg-icon name="delete"></svg-icon>
          </base-button>
        </template>
      </data-table>
    </template>
  </page>
</template>

<script lang="ts">
import { getVacancyFormUrl } from '@/utils/paths';
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
} from '@vue/composition-api';
import {
  deleteVacancy,
  getVacanciesList,
  getVacancyLocationsList,
  moveVacancy,
} from '@/services/requests';
import {
  ColumnDefinition,
  getFilterParamAsNumberArray,
  getFilterParams,
  OptionType,
  useDataTable,
  useSelectOptionsResource,
} from '@tager/admin-ui';
import { useResourceDelete, useResourceMove } from '@tager/admin-services';
import { VacancyLocationType, VacancyType, TagType } from '@/typings/model';
import { getWebsiteOrigin } from '@/utils/common';
import _ from 'lodash';

const COLUMN_DEFS: Array<ColumnDefinition<VacancyType>> = [
  {
    id: 1,
    name: '#',
    field: 'index',
    style: { width: '57px', textAlign: 'center' },
    headStyle: { width: '57px', textAlign: 'center' },
  },
  {
    id: 2,
    name: 'Image',
    field: 'image',
    type: 'image',
    style: { width: '111px' },
    headStyle: { width: '111px' },
  },
  {
    id: 3,
    name: 'Title',
    field: 'title',
    type: 'name',
    style: { width: '230px' },
    headStyle: { width: '230px' },
    format: ({ row }) => ({
      adminLink: {
        text: row.title,
        url: getVacancyFormUrl({ vacancyId: row.id }),
      },
      websiteLink: {
        text: getWebsiteOrigin() + row.url,
        url: getWebsiteOrigin() + row.url,
      },
    }),
  },
  {
    id: 4,
    name: 'Location',
    field: 'location',
    style: { width: '230px' },
    headStyle: { width: '230px' },
  },
  {
    id: 5,
    name: 'Excerpt',
    field: 'excerpt',
  },
  {
    id: 6,
    name: 'Actions',
    field: 'actions',
    style: { width: '139px', textAlign: 'center', whiteSpace: 'nowrap' },
    headStyle: { width: '139px', textAlign: 'center' },
  },
];

export default defineComponent({
  name: 'Vacancies',
  setup(props, context) {
    const {
      loading: isVacancyLocationListLoading,
      options: vacancyLocationOptionList,
      fetchEntityList: fetchVacancyLocationList,
    } = useSelectOptionsResource<VacancyLocationType, OptionType<number>>({
      fetchEntityList: getVacancyLocationsList,
      context,
      resourceName: 'Location list',
      minQueryLength: 0,
      convertEntityToOption: (vacancyLocation) => {
        return {
          value: vacancyLocation.id,
          label: vacancyLocation.name,
        };
      },
    });

    onMounted(() => {
      fetchVacancyLocationList({ query: '' });
    });

    const initialLocationFilter = computed<Array<OptionType<number>>>(() => {
      const queryValue = getFilterParamAsNumberArray(
        context.root.$route.query,
        'location'
      );

      return vacancyLocationOptionList.value.filter((option) =>
        queryValue.some((selected) => option.value === selected)
      );
    });

    const locationFilter = ref<Array<OptionType<number>>>(
      initialLocationFilter.value
    );

    watch(initialLocationFilter, () => {
      locationFilter.value = initialLocationFilter.value;
    });

    const filterParams = computed(() => {
      return getFilterParams({
        location: locationFilter.value.map((tag) => tag.value),
      });
    });

    const {
      isLoading: isVacanciesListLoading,
      rowData,
      errorMessage,
      searchQuery,
      handleChange,
      fetchEntityList: fetchVacanciesList,
      pageNumber,
      pageCount,
      pageSize,
    } = useDataTable<VacancyType>({
      fetchEntityList: (params) =>
        getVacanciesList({
          query: params.searchQuery,
          pageNumber: params.pageNumber,
          pageSize: params.pageSize,
          ...filterParams.value,
        }),
      initialValue: [],
      context,
      resourceName: 'Vacancies list',
    });

    watch(filterParams, () => {
      const newQuery = {
        ...filterParams.value,
        query: context.root.$route.query.query,
      };

      if (!_.isEqual(context.root.$route.query, newQuery)) {
        context.root.$router.replace({
          query: newQuery,
        });
        fetchVacanciesList();
      }
    });

    const {
      handleResourceDelete: handleVacancyDelete,
      isDeleting,
    } = useResourceDelete({
      deleteResource: deleteVacancy,
      resourceName: 'Vacancy',
      onSuccess: fetchVacanciesList,
      context,
    });

    const { handleResourceMove: handleVacancyMove, isMoving } = useResourceMove(
      {
        moveResource: moveVacancy,
        resourceName: 'Category',
        onSuccess: fetchVacanciesList,
        context,
      }
    );

    function handleTagRemove(event: TagType) {
      if (event.name === 'location') {
        locationFilter.value = locationFilter.value.filter(
          (tag) => String(tag.value) !== event.value
        );
      }
    }

    const tags = computed<Array<TagType>>(() => [
      ...locationFilter.value.map((tag) => ({
        value: String(tag.value),
        label: tag.label,
        name: 'location',
        title: 'Locations',
      })),
    ]);

    const isRowDataLoading = computed<boolean>(
      () => isVacanciesListLoading.value || isVacancyLocationListLoading.value
    );

    function isBusy(vacancyId: number): boolean {
      return (
        isDeleting(vacancyId) || isMoving(vacancyId) || isRowDataLoading.value
      );
    }

    return {
      isRowDataLoading,
      rowData,
      getVacancyFormUrl,
      handleVacancyDelete,
      handleVacancyMove,
      pageSize,
      pageCount,
      pageNumber,
      isBusy,
      handleChange,
      searchQuery,
      errorMessage,
      columnDefs: COLUMN_DEFS,

      locationFilter,
      vacancyLocationOptionList,

      handleTagRemove,
      tags,
    };
  },
});
</script>
