import SvgIcon from "./svg-icon";

//全局组件
const components = [SvgIcon];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};
