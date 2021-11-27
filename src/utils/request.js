import axios from "axios";
import { MessageBox, Message } from "element-ui";

//创建axios
const service = axios.create({
  timeout: 15 * 1000, // request timeout
});

//请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (!res.resultCode) {
      //可能返回的是blob格式文件
    }

    if (res.resultCode === "000000") {
      console.log(res);
      return res;
    } else {
      Message({
        message: res.resultMsg || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      //登录过期，或未登录
      if (res.resultCode === "000001") {
        MessageBox.confirm("登录过期，请重新登录", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        });
        return Promise.reject(new Error(res.message || "Error"));
      }
    }
  },
  (error) => {
    const res = error.response;
    const req = error.request;
    let msg = "未知错误";

    if (req.readyState === 4 && req.status === 0) {
      msg = "请求超时，请重试";
    }

    if (res) {
      const { status } = res;
      switch (status) {
        case 404:
          msg = "请求地址不存在";
          break;
        default:
          msg = "服务端异常";
          break;
      }
    }

    Message({
      message: msg,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
