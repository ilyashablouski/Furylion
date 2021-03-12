<template>
  <page
    title="Locations"
    :header-buttons="[
      {
        text: 'Add Location',
        href: getVacancyLocationFormUrl({
          locationId: 'create',
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
            @click="handleVacancyLocationMove(row.id, 'down')"
          >
            <svg-icon name="south" />
          </base-button>

          <base-button
            variant="icon"
            :disabled="isBusy(row.id) || rowIndex === 0"
            @click="handleVacancyLocationMove(row.id, 'up')"
          >
            <svg-icon name="north" />
          </base-button>

          <base-button
            variant="icon"
            title="Edit"
            :disabled="isBusy(row.id)"
            :href="
              getVacancyLocationFormUrl({
                locationId: row.id,
              })
            "
          >
            <svg-icon name="edit"></svg-icon>
          </base-button>

          <base-button
            variant="icon"
            title="Delete"
            :disabled="isBusy(row.id)"
            @click="handleVacancyLocationDelete(row.id)"
          >
            <svg-icon name="delete"></svg-icon>
          </base-button>
        </template>
      </data-table>
    </template>
  </page>
</template>

<script lang="ts">
import { getVacancyLocationFormUrl } from '@/utils/paths';
import { computed, defineComponent } from '@vue/composition-api';
import {
  deleteVacancy,
  getVacancyLocationsList,
  moveVacancyLocation,
} from '@/services/requests';
import { ColumnDefinition, useDataTable } from '@tager/admin-ui';
import { useResourceDelete, useResourceMove } from '@tager/admin-services';
import { VacancyLocationType } from '@/typings/model';
import { getWebsiteOrigin } from '@/utils/common';

const COLUMN_DEFS: Array<ColumnDefinition<VacancyLocationType>> = [
  {
    id: 1,
    name: '#',
    field: 'index',
    style: { width: '57px', textAlign: 'center' },
    headStyle: { width: '57px', textAlign: 'center' },
  },
  {
    id: 2,
    name: 'Name',
    field: 'name',
    type: 'name',
    style: { width: '230px' },
    headStyle: { width: '230px' },
    format: ({ row }) => ({
      adminLink: {
        text: row.name,
        url: getVacancyLocationFormUrl({ locationId: row.id }),
      },
      websiteLink: {
        text: getWebsiteOrigin() + row.url,
        url: getWebsiteOrigin() + row.url,
      },
    }),
  },
  {
    id: 3,
    name: 'Actions',
    field: 'actions',
    style: { width: '139px', textAlign: 'center', whiteSpace: 'nowrap' },
    headStyle: { width: '139px', textAlign: 'center' },
  },
];

export default defineComponent({
  name: 'Locations',
  setup(props, context) {
    const {
      isLoading: isVacancyLocationsListLoading,
      rowData,
      errorMessage,
      searchQuery,
      handleChange,
      fetchEntityList: fetchVacancyLocationsList,
      pageNumber,
      pageCount,
      pageSize,
    } = useDataTable<VacancyLocationType>({
      fetchEntityList: (params) =>
        getVacancyLocationsList({
          query: params.searchQuery,
          pageNumber: params.pageNumber,
          pageSize: params.pageSize,
        }),
      initialValue: [],
      context,
      resourceName: 'Locations',
    });

    const {
      handleResourceDelete: handleVacancyLocationDelete,
      isDeleting,
    } = useResourceDelete({
      deleteResource: deleteVacancy,
      resourceName: 'Location',
      onSuccess: fetchVacancyLocationsList,
      context,
    });

    const {
      handleResourceMove: handleVacancyLocationMove,
      isMoving,
    } = useResourceMove({
      moveResource: moveVacancyLocation,
      resourceName: 'Location',
      onSuccess: fetchVacancyLocationsList,
      context,
    });

    const isRowDataLoading = computed<boolean>(
      () => isVacancyLocationsListLoading.value
    );

    function isBusy(locationId: number): boolean {
      return (
        isDeleting(locationId) || isMoving(locationId) || isRowDataLoading.value
      );
    }

    return {
      isRowDataLoading,
      rowData,
      getVacancyLocationFormUrl,
      handleVacancyLocationDelete,
      handleVacancyLocationMove,
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
