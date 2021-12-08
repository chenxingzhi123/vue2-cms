// // import { asyncRouterMap } from "@/router";

// // 菜单路由映射
// export function meunRouterMap(menus = []) {
//   //递归生成路由
//   const __recurseGenerateRouter = (routers, menus) => {
//     let result = routers.filter((route) => {
//       let menu = menus.find((el) => el.url === route.path);

//       if (route?.children?.length) {
//         if (menu?.children?.length) {
//           route = __recurseGenerateRouter(route.children, menu.children);
//         } else {
//           route.children = undefined;
//         }
//       }
//       return menu !== undefined;
//     });

//     return result;
//   };

//   return __recurseGenerateRouter(asyncRouterMap, menus);
// }
