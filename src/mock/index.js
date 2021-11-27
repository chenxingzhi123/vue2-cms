import Mock from "mockjs";
import * as login from "./login";

Mock.setup({
  timeout: "300-600",
});

// 登录相关接口
Mock.mock("/login/login", "post", login.login);
Mock.mock("/login/logout", "post", login.logout);

export default Mock;
