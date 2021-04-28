import { fetch, urlResolve } from "@/utils/fetch";

const getWholePath = (path) => {
  const prefix = "";
  return prefix + path;
};
/**
 * @desc 获取请求的URL
 */
export function getUrl(paramsObj) {
  return urlResolve(getWholePath("/pet"), paramsObj);
}

/**
 * @desc Add a new pet to the store
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: getWholePath("/pet"),
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      data: bodyParams,
    },
    options
  );
  return fetch(fetchOption);
}
