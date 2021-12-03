import SvgIcon from "./svg-icon";
import XzCard from "./card";

//全局组件
const components = [SvgIcon, XzCard];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};
