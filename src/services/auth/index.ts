import { api } from '@/services/api';
import { LoginRequest, LoginResponse } from '@/types/auth';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/next/api/login',
        method: 'GET',
        data: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
