import axios from "@/utils/request";

import { AxiosRequestConfig } from "axios";
import qs from "qs";

export type RequestConfig = Omit<
  AxiosRequestConfig,
  "url" | "data" | "method" | "params"
>;

export function urlResolve(
  url: string,
  paramsObj: { [key: string]: string }
): string {
  if (!paramsObj || !url.includes("{")) return url;

  const urlArray = url.split(`/`).map((item) => {
    if (item.includes("{")) {
      const paramName = item.replace(/[{}\s]/g, "");
      return paramsObj[paramName];
    }
    return item;
  });
  return urlArray.join("/");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fetch(options: AxiosRequestConfig): Promise<any> {
  const { params } = options;
  options.url = urlResolve(options.url as string, params);
  // get/post 设置请求头的方式不一样，需要兼容
  // 参考：https://www.cnblogs.com/dudu123/p/10107242.html
  if (options.method === "get" || options.method === "delete") {
    const data = options.data || {};
    return axios({
      ...options,
      ...params,
      data,
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, { indices: false });
      },
    }).then((res) => res.data);
  }
  return axios(options).then((res) => res.data);
}
