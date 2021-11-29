import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//按需引入element-ui
import ElementUI from "./element";

import "./styles/index.scss";
import "normalize.css/normalize.css";

//全局权限校验
import "./permission";

//全局Mock接口
import "./mock";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
