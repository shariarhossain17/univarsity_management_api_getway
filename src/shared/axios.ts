import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },

    (error) => {
      return error;
    }
  );

  return instance;
};

export const AuthServiceUrl = HttpService(config.service.auth_url);
export const CoreServiceUrl = HttpService(config.service.core_url);
