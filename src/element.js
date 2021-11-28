import {
  Form,
  FormItem,
  Button,
  Container,
  Main,
  Header,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tag,
  Aside,
  Scrollbar,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Loading,
  MessageBox,
  Message,
} from "element-ui";

const components = [
  Form,
  FormItem,
  Button,
  Container,
  Main,
  Header,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tag,
  Aside,
  Scrollbar,
  Menu,
  Submenu,
  MenuItem,
  Input,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: "medium",
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$message = Message;
};

export default {
  install,
};
