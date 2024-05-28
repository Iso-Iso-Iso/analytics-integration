import axios, { AxiosRequestConfig } from "axios";

export const baseApi = {
  get: (url: string, config?: AxiosRequestConfig<any> | undefined) =>
    axios.get(url, config),
};
