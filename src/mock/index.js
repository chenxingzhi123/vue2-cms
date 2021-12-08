import Mock from "mockjs";
import * as login from "./login";

Mock.setup({
  timeout: "300-600",
});

// 登录相关接口
Mock.mock("/common/login", "post", login.login);
Mock.mock("/common/logout", "post", login.logout);
Mock.mock("/common/getUserInfo", "post", login.getUserInfo);
Mock.mock("/common/getMenu", "post", login.getMenu);

export default Mock;
