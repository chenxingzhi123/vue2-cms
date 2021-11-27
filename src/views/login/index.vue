<template>
  <div class="login-container">
    <div class="wapper">
      <div class="header">
        <h1>{{ title }}</h1>
      </div>

      <div class="login-box">
        <h1 class="login-box__title">登录</h1>
        <div class="login-box__form">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            autocomplete="on"
            label-position="left"
          >
            <el-form-item prop="username">
              <el-input
                v-model.trim="loginForm.username"
                maxlength="20"
                size=""
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginForm.password"
                maxlength="20"
                size=""
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                type="password"
              />
            </el-form-item>

            <el-button
              class="login-box__form__submit"
              type="primary"
              native-type="submit"
              @click.native.prevent="submit"
              >登录</el-button
            >
          </el-form>
        </div>
      </div>
    </div>

    <div class="footer">Copyright© 2021 xxx All Rights Reserved。</div>
  </div>
</template>

<script>
import setting from "@/config/setting";

import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: setting.title,
      loginForm: {},
      loginRules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },

  methods: {
    ...mapActions(["login"]),
    async submit() {
      try {
        await this.$refs.loginForm.validate();
      } catch (error) {
        return;
      }
      this.login(this.loginForm).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .wapper {
    flex: 1;
    background: url("~@/assets/login/background.jpg") no-repeat fixed center;
    position: relative;

    .header {
      height: 46px;
      display: flex;
      align-items: center;
      position: absolute;
      top: 36px;
      left: 32px;
      h1 {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
      }
    }

    .login-box {
      background: #fff;
      width: 400px;
      border-radius: 8px;
      padding: 63px 45px 150px;

      position: fixed;
      right: 160px;
      top: 50%;
      transform: translateY(-50%);

      &__title {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.65);
        text-align: left;
        font-weight: normal;
      }

      &__form {
        width: 100%;
        padding-top: 39px;

        ::v-deep .el-form-item {
          margin-bottom: 18px;
        }

        ::v-deep .el-input__inner {
          padding-left: 51px;
          &::placeholder {
            font-size: 14px;
            color: #999999;
            text-align: left;
            line-height: 40px;
          }
        }

        ::v-deep .el-input__prefix {
          font-size: 24px;
          left: 10px;
          .el-input__icon {
            display: flex;
            align-items: center;
            &::after {
              height: 16px;
              padding-left: 10px;
              border-right: 1px solid #d8d8d8;
            }
          }
        }
        &__submit {
          width: 100%;
          margin-top: 28px;
        }
      }
    }
  }
  .footer {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #595959;
    background: #fff;
  }
}
</style>
