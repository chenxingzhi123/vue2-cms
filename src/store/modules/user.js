import { getUserInfo, login, logout, getMenu } from "@/api/login";
import router from "@/router";

const SET_TOKEN = "SET_TOKEN";
const SET_USERINFO = "SET_USERINFO";
const SET_MENUS = "SET_MENUS";

const user = {
  state: {
    token: "",
    userInfo: {},
    menus: [],
  },

  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token;
    },
    [SET_USERINFO](state, userInfo) {
      state.userInfo = userInfo;
    },
    [SET_MENUS](state, menus) {
      state.menus = menus;
      console.log(menus);
    },
  },

  actions: {
    async AccountloginAction({ commit }, payload) {
      //登录
      const loginResult = await login(payload);
      const token = loginResult.data.token;
      commit(SET_TOKEN, token);
      sessionStorage.setItem("token", token);

      //获取用户信息
      const userInfoResult = await getUserInfo();
      const userInfo = userInfoResult.data;
      commit(SET_USERINFO, userInfo);
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

      //获取菜单信息
      const menusResult = await getMenu();
      const menus = menusResult.data;
      commit(SET_MENUS, menus);
      sessionStorage.setItem("menus", JSON.stringify(menus));

      router.push("/");
    },

    loadLocalCache({ commit }) {
      const token = sessionStorage.getItem("token");
      if (token) {
        commit(SET_TOKEN, token);
      }

      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo) {
        commit(SET_USERINFO, userInfo);
      }

      const menus = JSON.parse(sessionStorage.getItem("menus"));
      if (menus) {
        commit(SET_MENUS, menus);
      }
    },

    async logoutAction({ commit }) {
      try {
        await logout();
      } catch (error) {
        return;
      }
      sessionStorage.clear();
      commit(SET_TOKEN, "");
      commit(SET_USERINFO, {});
      router.go(0);
    },
  },

  getters: {
    menus: (state) => state.menus,
  },
};

export default user;
