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
  Row,
  Col,
  Card,
  Select,
  Option,
  Switch,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Tooltip,
  RadioGroup,
  Radio,
  Checkbox,
  InputNumber,
} from "element-ui";

//设置el-input组件默认属性
const inputRender = Input.render;
Input.render = function () {
  // 设置组件默认原生属性（attr）
  this.$attrs.placeholder || (this.$attrs.placeholder = "请输入");
  this.$attrs.maxlength || (this.$attrs.maxlength = 50);
  return inputRender.apply(this, arguments);
};
Input.props.clearable.default = true;
Input.props.size = { default: "small", type: String };

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
  Row,
  Col,
  Card,
  Select,
  Option,
  Switch,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Tooltip,
  RadioGroup,
  Radio,
  Checkbox,
  InputNumber,
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

  //MessageBox.confirm配置默认属性
  Vue.prototype.$confirm = (message, title, options) => {
    let defaultOptions = {
      closeOnClickModal: false,
      center: true,
      confirmButtonText: "确定",
      cancelButtonText: "取消",
    };
    return MessageBox.confirm(message, title, {
      ...defaultOptions,
      ...options,
    });
  };

  Vue.prototype.$prompt = MessageBox.prompt;

  Vue.prototype.$message = Message;
};

export default {
  install,
};
