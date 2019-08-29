import Vue from "vue";
import VueRouter from "vue-router";

import GroupOveriew from "../pages/group-overview/group-overview";
import NewExpense from "../pages/new-expense/new-expense";
import NewUser from "../pages/new-user/new-user";
import SettleUp from "../pages/settle-up/settle-up";
import About from "../pages/about/about";

Vue.use(VueRouter);

Vue.filter("monetary", value => {
  return value.toFixed(2);
});

const routes = [
  { path: "/", component: GroupOveriew },
  { path: "/about", component: About },
  { path: "/new-expense", component: NewExpense },
  { path: "/new-user", component: NewUser },
  { path: "/settle-up", component: SettleUp }
];

const router = new VueRouter({
  routes
});

export default router;
