import { fetch, urlResolve } from "@/utils/fetch";

const getWholePath = (path) => {
  const prefix = "";
  return prefix + path;
};
/**
 * @desc 获取请求的URL
 */
export function getUrl(paramsObj) {
  return urlResolve(getWholePath("/store/inventory"), paramsObj);
}

/**
     * @desc Returns pet inventories by status
Returns a map of status codes to quantities
     */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: getWholePath("/store/inventory"),
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    },
    options
  );
  return fetch(fetchOption);
}
