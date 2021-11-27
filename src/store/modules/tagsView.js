import setting from "@/config/setting.js";

const defaultPage = setting.defaultPage;

const ADD_TAGSVIEW = "ADD_TAGSVIEW";
const DEL_TAGSVIEW = "DEL_TAGSVIEW";
const DEL_OTHER_TAGSVIEW = "DEL_OTHER_TAGSVIEW";
const DEL_ALL_TAGSVIEW = "DEL_ALL_TAGSVIEW";

const tagsview = {
  state: {
    visitedViews: [],
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
      for (let [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path && v.path !== defaultPage.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
    },
    [DEL_OTHER_TAGSVIEW](state, view) {
      for (let [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.splice(i, i + 1);
          //补上首页
          if (view.path !== defaultPage.path) {
            state.visitedViews.unshift({
              name: defaultPage.name,
              path: defaultPage.path,
              title: defaultPage.meta.title,
              default: true,
            });
          }
          break;
        }
      }
    },
    [DEL_ALL_TAGSVIEW](state) {
      state.visitedViews = state.visitedViews.slice(0, 1);
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
    delOtherViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_OTHER_TAGSVIEW, view);
        resolve([...state.visitedViews]);
      });
    },
    delAllViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_ALL_TAGSVIEW, view);
        resolve([...state.visitedViews]);
      });
    },
  },

  getters: {
    visitedViews: (state) => state.visitedViews,
  },
};

export default tagsview;
