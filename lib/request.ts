import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "/api", // 设置基础 URL
  timeout: 15000, // 请求超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：添加 token
    // if (localStorage.getItem('token')) {
    //   config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    // }
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error: any) => {
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，可以在这里处理登出逻辑
          break;
        case 403:
          // 禁止访问
          break;
        case 404:
          // 未找到
          break;
        case 500:
          // 服务器错误
          break;
        default:
          console.log(`发生错误: ${error.message}`);
      }
    }
    return Promise.reject(error);
  }
);

// 封装 GET 请求
const get = (url: string, params = {}) => {
  return instance.get(url, { params });
};

// 封装 POST 请求
const post = (url: string, data = {}) => {
  return instance.post(url, data);
};

// 封装 PUT 请求
const put = (url: string, data = {}) => {
  return instance.put(url, data);
};

// 封装 DELETE 请求
const del = (url: string) => {
  return instance.delete(url);
};

export default instance;

export const request = {
  get,
  post,
  put,
  del,
};
