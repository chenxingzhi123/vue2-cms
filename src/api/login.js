import request from "@/utils/request";

//登录
export function login(data) {
  return request({
    url: "/login/login",
    method: "post",
    data,
  });
}

//退出
export function logout(data) {
  return request({
    url: "/login/logout",
    method: "post",
    data,
  });
}

//获取用户信息
export function userInfo(data) {
  return request({
    url: "/user/userInfo",
    method: "post",
    data,
  });
}
