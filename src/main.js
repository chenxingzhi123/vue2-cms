import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//按需引入element-ui
import ElementUI from "./element";

//使用lodash工具库
import _ from "lodash";

import "./styles/index.scss";
import "normalize.css/normalize.css";

//全局权限校验
import "./permission";

//全局Mock接口
import "./mock";

Vue.prototype._ = _;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
