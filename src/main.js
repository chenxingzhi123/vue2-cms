import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//使用lodash工具库
import _ from "lodash";

import "normalize.css/normalize.css";

Vue.prototype._ = _;

Vue.use(ElementUI, {
  size: "medium", //设置element-ui默认尺寸
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
