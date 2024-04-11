import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const service = axios.create({
  timeout: 5000, // request timeout
});
// 发起请求之前的拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
