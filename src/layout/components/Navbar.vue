<template>
  <el-header class="navbar-wrapper">
    <router-link class="title" to="/home">
      <p>{{ title }}</p>
    </router-link>

    <div class="content">
      <el-dropdown class="content__dropdown" trigger="click">
        <div class="content__dropdown__avatar">
          <el-avatar
            size="medium"
            :src="require('@/assets/center/头像.jpg')"
          ></el-avatar>

          <div class="content__dropdown__avatar--name">
            <span>嗷大喵</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logoutAction">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import setting from "@/config/setting";

import { mapActions } from "vuex";

export default {
  name: "Navbar",

  data() {
    return {
      title: setting.title,
    };
  },

  methods: {
    ...mapActions(["logoutAction"]),
  },
};
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);

  .title {
    p {
      color: #fff;
      font-weight: bold;
    }
  }

  .content {
    display: flex;
    align-items: center;

    &__dropdown {
      &__avatar {
        display: flex;
        align-items: center;
        &--name {
          color: #fff;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
