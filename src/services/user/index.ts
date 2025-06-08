import { api } from '@/services/api';
import type { UserType } from '@/types/userTypes';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserType, string>({
      query: (id) => ({
        url: `user/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'User' as const, id }],
    }),

    updateUser: builder.mutation<UserType, Partial<UserType> & { id: string }>({
      query: ({ id, ...body }) => ({
        url: `user/${id}`,
        method: 'PUT',
        data: body, // Axios uses `data` not `body`
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User' as const, id }],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
