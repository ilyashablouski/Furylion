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
import { computed, defineComponent } from '@vue/composition-api';
import {
  deleteVacancy,
  getVacanciesList,
  moveVacancy,
} from '@/services/requests';
import { ColumnDefinition, useDataTable } from '@tager/admin-ui';
import { useResourceDelete, useResourceMove } from '@tager/admin-services';
import { VacancyType } from '@/typings/model';
import { getWebsiteOrigin } from '@/utils/common';

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
    id: 3,
    name: 'Location',
    field: 'location',
    style: { width: '230px' },
    headStyle: { width: '230px' },
  },
  {
    id: 4,
    name: 'Excerpt',
    field: 'excerpt',
  },
  {
    id: 5,
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
        }),
      initialValue: [],
      context,
      resourceName: 'Vacancies list',
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

    const isRowDataLoading = computed<boolean>(
      () => isVacanciesListLoading.value
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
    };
  },
});
</script>
