import Vue from "vue";
import "roboto-fontface";

import router from "./router/routes";
import App from "./app";

// Global directive
Vue.directive("clickable", {
  bind: el => {
    el.style.cursor = "pointer";
  }
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
