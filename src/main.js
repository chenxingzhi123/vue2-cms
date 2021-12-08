import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//按需引入element-ui
import ElementUI from "./element";
import "./styles/element-variables.scss";

import "./styles/index.scss";
import "normalize.css/normalize.css";

//引入iconfont
import "../public/static/fonts/iconfont.css";

//全局权限校验
import "./permission";

//全局Mock接口
import "./mock";

//svg
import "./icons";

//全局组件
import globalComponents from "./components";

Vue.use(ElementUI);

Vue.use(globalComponents);

Vue.config.productionTip = false;

store.dispatch("loadLocalCache");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
