<template>
  <navigation-grid :nav-items="navItemList" />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  SetupContext,
} from '@vue/composition-api';
import { NavigationGridItem, useTranslation } from '@tager/admin-ui';
import { useResource } from '@tager/admin-services';
import { getPageCount } from '@tager/admin-pages';
import { getLinks } from '@/constants/links';
import { getVacanciesCount } from '@/services/requests';
import {getFilesCount} from "@tager/admin-files";

export default defineComponent({
  name: 'Home',
  setup(props, context: SetupContext) {
    const { t } = useTranslation(context);

    const [
      fetchPageCount,
      { data: pageCountData, status: pageCountDataStatus },
    ] = useResource({
      fetchResource: getPageCount,
      initialValue: null,
      resourceName: 'Page count',
      context,
    });

    const [
      fetchVacancyCount,
      { data: vacancyCountData, status: vacancyCountDataStatus },
    ] = useResource({
      fetchResource: getVacanciesCount,
      initialValue: null,
      resourceName: 'Vacancies count',
      context,
    });

    const [
      fetchFilesCount,
      { data: filesCountData, status: filesCountDataStatus },
    ] = useResource({
      fetchResource: getFilesCount,
      initialValue: null,
      resourceName: 'Files count',
      context,
    });

    onMounted(() => {
      fetchPageCount();
      fetchVacancyCount();
      fetchFilesCount();
    });

    const links = computed(() => getLinks(t));

    const navItemList = computed<Array<NavigationGridItem>>(() => [
      {
        name: links.value.PAGE_LIST.text,
        url: links.value.PAGE_LIST.url,
        total: {
          value: pageCountData.value?.count ?? 0,
          status: pageCountDataStatus.value,
        },
      },
      {
        name: links.value.VACANCIES_LIST.text,
        url: links.value.VACANCIES_LIST.url,
        total: {
          value: vacancyCountData.value?.count ?? 0,
          status: vacancyCountDataStatus.value,
        },
      },
      {
        name: links.value.FILES_LIST.text,
        url: links.value.FILES_LIST.url,
        total: {
          value: filesCountData.value?.count ?? 0,
          status: filesCountDataStatus.value,
        },
      },
      {
        name: t('admin:settings'),
        linkList: [
          links.value.SETTINGS_COMMON,
          links.value.SEO_TEMPLATES,
          links.value.SEO_SETTINGS,
        ],
      },
      {
        name: t('admin:eMail'),
        linkList: [links.value.EMAIL_TEMPLATE_LIST, links.value.EMAIL_LOG_LIST],
      },
      {
        name: t('admin:administrators'),
        linkList: [links.value.ADMIN_ADMINS, links.value.ADMIN_ROLES],
      },
    ]);

    return {
      navItemList,
    };
  },
});
</script>

<style scoped></style>
