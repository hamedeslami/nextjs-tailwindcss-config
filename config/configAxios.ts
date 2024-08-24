import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {toast} from 'react-toastify';
import {cookies} from 'next/headers'

const cookieStore = cookies();
const axiosInstance = axios.create();
const BASE_API_URL: string = process.env.BASE_API_URL as string;

const onUnAuthorize = async (error: AxiosError): Promise<AxiosResponse> => {
    const originalRequest: InternalAxiosRequestConfig<any> | undefined = error.config;

    const token = cookieStore.get('AUTH_USER_TOKEN');
    const refreshToken = cookieStore.get('AUTH_REFRESH_TOKEN');

    try {
        const refreshData = await axiosInstance.post(
            `${BASE_API_URL}/refresh-token`,
            {refreshToken},
            {
                headers: {
                    Authorization: token
                }
            }
        );

        const newToken: string | undefined = refreshData?.data?.token;
        if (!newToken) throw new Error('token is invalid');
        cookieStore.set('AUTH_USER_TOKEN', newToken);

        return axios({
            ...originalRequest,
            headers: {...originalRequest?.headers, Authorization: newToken}
        });
    } catch (e) {
        cookieStore.delete('AUTH_USER_TOKEN');
        cookieStore.delete('AUTH_REFRESH_TOKEN');
        return Promise.reject(error || error);
    }
};

const onForbidden = (): void => {
    cookieStore.delete('AUTH_USER_TOKEN');
    cookieStore.delete('AUTH_REFRESH_TOKEN');
};

const onRequest = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    const newConfig = {...config};
    const token = cookieStore.get('AUTH_USER_TOKEN');

    newConfig.baseURL = BASE_API_URL;
    newConfig.headers['Content-Type'] = 'application/json';

    if (token) {
        newConfig.headers['Authorization'] = `Bearer ${token}`;
    }

    return newConfig;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): any => {
    return response.data;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    const realStatus: number | undefined = error?.response?.status;
    const realError: AxiosResponse | undefined = error.response;

    if (realStatus === 401) {
        await onUnAuthorize(error);
    } else if (realStatus === 403) {
        onForbidden();
    }

    toast.error(realError?.data?.message || error?.message);
    return Promise.reject(realError || error);
};

export const setupInterceptorsTo = (axiosInstance: typeof axios): typeof axios => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};
