export type RecentEventsFormData = {
  email: string;
};

export type RecentEventsFormProps = {
  save?: (values: RecentEventsFormData) => Promise<void>;
};
