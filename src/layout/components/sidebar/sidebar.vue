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
  components: { SidebarItem },
  name: "SideBar",
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: "/test",
          title: "测试",
          icon: "el-icon-menu",
          children: [
            {
              path: "/test/test1",
              title: "测试1",
              icon: "el-icon-menu",
            },
          ],
        },
        {
          path: "/test1",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test2",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test3",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test4",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test6",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test7",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test8",
          title: "测试",
          icon: "el-icon-menu",
        },
        {
          path: "/test9",
          title: "测试",
          icon: "el-icon-menu",
        },
      ],
    };
  },
  methods: {},
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
