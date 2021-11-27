import common from "./common";

function login(userInfo) {
  let token = JSON.parse(userInfo.body).username;
  let data = {
    token,
  };
  return { ...common, data };
}

function logout() {
  return { ...common };
}

export { login, logout };
