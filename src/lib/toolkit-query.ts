import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import axiosInstance from './axios';

type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
};

type AxiosBaseQueryResult = unknown;
type AxiosBaseQueryError = {
  status?: number;
  data: unknown;
};

export const axiosBaseQuery: BaseQueryFn<
  AxiosBaseQueryArgs,
  AxiosBaseQueryResult,
  AxiosBaseQueryError
> = async ({ url, method, data, params, headers }) => {
  try {
    const result = await axiosInstance({ url, method, data, params, headers });
    return { data: result.data };
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      error: {
        status: axiosError.response?.status,
        data: axiosError.response?.data ?? axiosError.message,
      },
    };
  }
};
