import common from "./common";

function login(userInfo) {
  let token = JSON.parse(userInfo.body).username;
  let data = {
    token,
  };
  return { ...common, data };
}

function getUserInfo() {
  let data = {
    username: "234234",
  };
  return { ...common, data };
}

function getMenu() {
  const menus = [
    {
      path: "/component",
      title: "组件封装",
      children: [
        {
          path: "/component/form",
          title: "Element表单封装",
        },
        {
          path: "/component/charts",
          title: "Echarts封装",
        },
      ],
    },
  ];
  let data = menus;

  return { ...common, data };
}

function logout() {
  return { ...common };
}

export { login, logout, getUserInfo, getMenu };
