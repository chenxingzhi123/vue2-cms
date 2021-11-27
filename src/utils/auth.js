import Cookies from "js-cookie";

const TokenKey = "Vue2-cms";

function getToken() {
  return Cookies.get(TokenKey);
}

function setToken(token) {
  return Cookies.set(TokenKey, token);
}

function removeToken() {
  return Cookies.remove(TokenKey);
}

export { getToken, setToken, removeToken };
