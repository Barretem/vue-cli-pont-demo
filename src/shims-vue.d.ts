// ts识别全局方法/变量
import VueRouter, { Route } from "vue-router";
import Vue from "vue";
import { Store } from "vuex";
import { api } from "./api/index";
declare global {
  interface window {
    require: any;
  }
}

// 识别 this.$route
declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $store: Store<any>;
    $api: typeof api;
  }
}
