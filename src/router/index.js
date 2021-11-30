import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home"),
        name: "Home",
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    children: [
      {
        path: "test1",
        component: () => import("@/views/test/test1"),
        name: "Test1",
        meta: {
          title: "测试1",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
