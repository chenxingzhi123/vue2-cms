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
      path: "/element",
      title: "封装Element组件",
      icon: "icon-elment",
      children: [
        {
          path: "/element/form",
          title: "封装表单",
        },
      ],
    },
    {
      path: "/charts",
      title: "图表",
      icon: "icon-tubiao",
    },
  ];
  let data = menus;

  return { ...common, data };
}

function logout() {
  return { ...common };
}

export { login, logout, getUserInfo, getMenu };
