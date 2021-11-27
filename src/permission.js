import router from "@/router";
import NProgress from "nprogress"; //进度条
import "nprogress/nprogress.css";

import { getToken } from "@/utils/auth";

import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false });

//白名单
const whiteList = ["/login"];

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();

  document.title = getPageTitle(to.meta.title);

  if (getToken()) {
    //有token
    //访问登录页，直接跳转到首页
    if (to.path === "/login") {
      next("/");
      NProgress.done();
    } else {
      next();
    }
  } else {
    //未登录
    if (whiteList.includes(to.path)) {
      //在白名单里的直接跳转到
      next();
    } else {
      //不在白名单的，重定向到登录页
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
