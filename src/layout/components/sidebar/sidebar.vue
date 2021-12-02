<template>
  <el-aside class="sidebar-wapper" style="width: 210px">
    <el-scrollbar
      class="sidebar-scrollbar"
      wrapStyle="overflow-x: hidden;"
      viewStyle="height: 100%;"
    >
      <el-menu
        class="sidebar-menu"
        mode="vertical"
        unique-opened
        background-color="rgb(248, 249, 250)"
        :collapse="isCollapse"
        router
      >
        <sidebar-item
          v-for="item in menuData"
          :key="item.path"
          :item="item"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
import SidebarItem from "./sidebar-item.vue";

export default {
  name: "SideBar",

  components: { SidebarItem },

  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: "/element",
          title: "封装Element组件",
          icon: "el-icon-platform-eleme",
          children: [
            {
              path: "/element/form",
              title: "封装表单",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wapper {
  .sidebar-scrollbar,
  .sidebar-menu {
    height: 100%;
  }
}
</style>
