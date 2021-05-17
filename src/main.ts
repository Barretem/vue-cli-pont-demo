import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 注入$api,这样声明能够在使用的时候再进行引入，降低首屏的加载压力
Vue.prototype.$api = async function () {
  return await import("./api");
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
