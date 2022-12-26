/* eslint-disable no-param-reassign */
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

import { AUTH_TOKEN_KEY } from '@/libs/constants';

const Axios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 5000000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
Axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  config.headers = {
    ...config.headers,
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Change response data/error here
Axios.interceptors.response.use(
  (response: AxiosResponse<any, any>) => response,
  (error) => {
    if (
      (error?.response && error?.response?.status === 401) ||
      (error?.response && error?.response?.status === 403)
    ) {
      Cookies.remove(AUTH_TOKEN_KEY);
      Router.reload();
    }
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown): Promise<T> {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any): Promise<T> {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown): Promise<T> {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string): Promise<T> {
    const response = await Axios.delete<T>(url);
    return response.data;
  }
}
