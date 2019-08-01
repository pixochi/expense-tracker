import Vue from "vue";
import 'roboto-fontface';

import router from './router/routes';
import App from "./app";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
});
