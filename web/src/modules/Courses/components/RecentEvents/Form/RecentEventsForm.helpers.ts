import * as Yup from 'yup';

import { RecentEventsFormData } from './RecentEventsForm.types';

export const validationSchema: Yup.SchemaOf<RecentEventsFormData> = Yup.object().shape(
  {
    email: Yup.string().label('Email').email().required(),
  }
);
