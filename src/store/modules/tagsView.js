import setting from "@/config/setting.js";

const defaultPage = setting.defaultPage;

const ADD_TAGSVIEW = "ADD_TAGSVIEW";
const DEL_TAGSVIEW = "DEL_TAGSVIEW";
const DEL_OTHER_TAGSVIEW = "DEL_OTHER_TAGSVIEW";
const DEL_ALL_TAGSVIEW = "DEL_ALL_TAGSVIEW";

const tagsview = {
  state: {
    visitedViews: [],
    cachedViews: [],
  },

  mutations: {
    [ADD_TAGSVIEW](state, view) {
      if (state.visitedViews.find((n) => n.path === view.path)) {
        return;
      }
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title ?? "未命名标签",
        default: view.path === defaultPage.path,
      });

      if (view.meta.keepAlive && state.cachedViews.indexOf(view.name) === -1) {
        state.cachedViews.push(view.name);
      }

      if (state.visitedViews[0].path !== defaultPage.path) {
        state.visitedViews.unshift({
          name: defaultPage.name,
          path: defaultPage.path,
          title: defaultPage.meta.title,
          default: true,
        });
      }
    },

    [DEL_TAGSVIEW](state, view) {
      if (view.path === defaultPage.path) {
        return;
      }
      let visitedIndex = state.visitedViews.findIndex(
        (el) => el.path === view.path
      );
      if (visitedIndex !== -1) {
        state.visitedViews.splice(visitedIndex, 1);
      }
      let cachedIndex = state.cachedViews.findIndex((el) => el === view.name);
      if (cachedIndex !== -1) {
        state.cachedViews.splice(cachedIndex, 1);
      }
    },

    [DEL_OTHER_TAGSVIEW](state, view) {
      state.visitedViews = state.visitedViews.filter((el) => {
        return el.path === view.path || el.path === defaultPage.path;
      });

      state.cachedViews = state.cachedViews.filter((el) => el === view.name);
    },

    [DEL_ALL_TAGSVIEW](state) {
      state.visitedViews = state.visitedViews.slice(0, 1);
      state.cachedViews = [];
    },
  },

  actions: {
    //添加一个新的标签页
    addVisitedView({ commit }, view) {
      commit(ADD_TAGSVIEW, view);
    },

    //删除一个标签页
    delVisitedView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_TAGSVIEW, view);
        resolve([...state.visitedViews]);
      });
    },

    //删除其他
    delOtherViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_OTHER_TAGSVIEW, view);
        resolve([...state.visitedViews]);
      });
    },

    //删除所有
    delAllViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_ALL_TAGSVIEW, view);
        resolve([...state.visitedViews]);
      });
    },
  },

  getters: {
    visitedViews: (state) => state.visitedViews,
    cachedViews: (state) => state.cachedViews,
  },
};

export default tagsview;
