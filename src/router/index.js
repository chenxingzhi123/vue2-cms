import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout";

Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    name: "Main",
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
    path: "/component",
    component: Layout,
    children: [
      {
        path: "form",
        component: () => import("@/views/component-demo/form"),
        name: "ComponentForm",
        meta: {
          title: "表单",
          keepAlive: true,
        },
      },
      {
        path: "charts",
        component: () => import("@/views/component-demo/charts"),
        name: "ComponentCharts",
        meta: {
          title: "图表",
          keepAlive: true,
        },
      },
    ],
  },
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap,
});

export default router;
