import request from "@/utils/request";

//登录
export function login(data) {
  return request({
    url: "/common/login",
    method: "post",
    data,
  });
}

//退出
export function logout(data) {
  return request({
    url: "/common/logout",
    method: "post",
    data,
  });
}

//获取用户信息
export function getUserInfo(data) {
  return request({
    url: "/common/getUserInfo",
    method: "post",
    data,
  });
}

//获取菜单信息
export function getMenu(data) {
  return request({
    url: "/common/getMenu",
    method: "post",
    data,
  });
}
