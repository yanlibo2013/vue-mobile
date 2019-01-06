// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store/index";
import FastClick from "fastclick";
import "babel-polyfill";
import {
  ToastPlugin,
  AlertPlugin,
  Datetime,
  PopupPicker,
  Group,
  Cell,
  Picker,
  XAddress,
  ChinaAddressV4Data,
  Actionsheet,
  XInput,
  Popup,
  Toast,
  XButton,
  ConfigPlugin,
  TransferDom,
  Confirm,
  XDialog,
  Tab,
  TabItem,
  XTextarea,
  Swiper,
  SwiperItem,
  DatetimePlugin,
  LoadingPlugin,
  Checklist,
  Checker,
  CheckerItem
} from "vux";
import VueGrid from "@liqueflies/vue-flex-grid";
import { $http } from "./utils/ak/http";

const mock = process.env.USER_MOCK;
if (mock) {
  require("@/mock");
}

import "vux/src/styles/reset.less";
import "@/styles/index.less";

import "@/styles/flex-grid/flex-grid-lite.css";

FastClick.attach(document.body);

Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(VueGrid);
Vue.use(LoadingPlugin)

Vue.config.productionTip = false;
Vue.prototype.$http = $http;
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

export const $vux = Vue.$vux;
