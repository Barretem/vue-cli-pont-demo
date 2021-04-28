import { fetch, urlResolve } from "@/utils/fetch";

const getWholePath = (path) => {
  const prefix = "";
  return prefix + path;
};
/**
 * @desc 获取请求的URL
 */
export function getUrl(paramsObj) {
  return urlResolve(getWholePath("/user"), paramsObj);
}

/**
     * @desc Create user
This can only be done by the logged in user.
     */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: getWholePath("/user"),
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
