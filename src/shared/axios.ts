import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
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

  // Response Interceptor
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      // console.error('Response Error:', error);
      return Promise.reject(error);
    }
  );

  return instance;
};

const AuthServiceUrl = HttpService(config.service.auth_url);
const CoreServiceUrl = HttpService(config.service.core_url);

export { AuthServiceUrl, CoreServiceUrl, HttpService };
