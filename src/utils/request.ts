import axios from "axios";

axios.interceptors.request.use(
  async function (config) {
    const url = config.url || "";
    config.url = `${url}${
      url.indexOf("?") > -1 ? "&" : "?"
    }_=${new Date().getTime()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (resp) {
    return Promise.resolve(resp);
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default axios;
