import { fetch, urlResolve } from "@/utils/fetch";

const getWholePath = (path) => {
  const prefix = "";
  return prefix + path;
};
/**
 * @desc 获取请求的URL
 */
export function getUrl(paramsObj) {
  return urlResolve(getWholePath("/user/createWithArray"), paramsObj);
}

/**
 * @desc Creates list of users with given input array
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: getWholePath("/user/createWithArray"),
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
