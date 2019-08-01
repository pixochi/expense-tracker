import Vue from "vue";
import VueRouter from "vue-router";

import GroupOveriew from "../pages/group-overview/group-overview";
import NewExpense from "../pages/new-expense/new-expense";
import About from "../pages/about/about";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: GroupOveriew },
  { path: "/new-expense", component: NewExpense },
  { path: "/about", component: About },
];

const router = new VueRouter({
  routes
});

export default router;
