// import { constantRouterMap, asyncRouterMap } from "@/router";

// const SET_ROUTERS = "SET_ROUTERS";

// function generaRouter(routers, menus) {
//   let result = routers.filter((route) => {
//     let menu = menus.find((el) => el.url === route.path);

//     if (route?.children?.length) {
//       if (menu?.children?.length) {
//         route = generaRouter(route.children, (menu.children = []));
//       } else {
//         route.children = [];
//       }
//     }
//     return menu !== undefined;
//   });

//   return result;
// }

// const permission = {
//   state: {
//     addRouters: "",
//     routers: constantRouterMap,
//   },
//   mutations: {
//     [SET_ROUTERS](state, routers) {
//       state.addRouters = routers;
//       state.routers = constantRouterMap.concat(routers);
//     },
//   },
//   actions: {
//     GenerateRoutes({ commit }, meuns) {
//       return new Promise((resolve) => {
//         let routers = JSON.parse(JSON.stringify(asyncRouterMap));
//         generaMenu(routers, meuns);
//         commit("SET_ROUTERS", routers);
//         resolve();
//       });
//     },
//   },
//   getters: {
//     addRouters: (state) => state.addRouters,
//     routers: (state) => state.routers,
//   },
// };

const permission = {};
export default permission;
