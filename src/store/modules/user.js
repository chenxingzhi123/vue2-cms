import { getUserInfo, login, logout } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

const SET_TOKEN = "SET_TOKEN";
const SET_USERNAME = "SET_USERNAME";
const SET_AVATAR = "SET_AVATAR";

const user = {
  state: {
    token: getToken(),
    username: "",
    avatar: "",
  },

  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token;
    },
    [SET_USERNAME](state, username) {
      state.username = username;
    },
    [SET_AVATAR](state, avatar) {
      state.avatar = avatar;
    },
  },

  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            setToken(res.data.token);
            commit(SET_TOKEN, res.data.token);
            return resolve();
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },

    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            commit(SET_USERNAME, res.data.username);
            commit(SET_AVATAR, res.data.avatar);
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            removeToken();
            commit(SET_TOKEN, "");
            commit(SET_USERNAME, "");
            commit(SET_AVATAR, "");
            return resolve();
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
  },
};

export default user;
