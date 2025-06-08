import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/lib/toolkit-query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
  tagTypes: ['User'],
});
