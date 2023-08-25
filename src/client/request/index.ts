import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
const baseUrl = 'http://127.0.0.1:5001/api';
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response) {
      return Promise.reject(err.response.data);
    }

    if (err.request) {
      return Promise.reject(err.request);
    }

    return Promise.reject(err.message);
  }
);

// const ajax = <T>(cfg: AxiosRequestConfig) => instance.request<any, T>(cfg);

export default instance;
