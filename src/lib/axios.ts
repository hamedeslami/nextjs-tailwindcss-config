import axios from 'axios';
import { store } from '@/store'
import { login, logout } from '@/store/auth/auth.reducers';


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { auth } = store.getState();
    const { accessToken } = auth;

    config.headers["Content-Type"] = "application/json";

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const { auth } = store.getState();
        const { refreshToken } = auth;

        const response = await axios.post(`${process.env.REACT_APP_REFRESH_TOKEN_API}`, { refreshToken });
        const { accessToken } = response.data;

        store.dispatch(login({
          accessToken: accessToken,
          refreshToken: refreshToken
        }));

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
