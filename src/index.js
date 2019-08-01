import Vue from "vue";

import router from './router/routes';
import App from "./app";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
});