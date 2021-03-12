import { createId, FileType, Nullable } from '@tager/admin-services';
import { SingleFileInputValueType } from '@tager/admin-ui';

export function createFileInputValue(
  file: Nullable<FileType>
): Nullable<SingleFileInputValueType> {
  return file
    ? {
        id: createId(),
        file,
        caption: null,
      }
    : null;
}

export function getWebsiteOrigin(): string {
  return process.env.VUE_APP_WEBSITE_URL || window.location.origin;
}
