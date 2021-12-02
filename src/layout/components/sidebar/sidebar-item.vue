<template>
  <div>
    <!-- 该菜单有子菜单时 -->
    <el-submenu v-if="item.children && item.children.length" :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </template>

      <template v-for="child of item.children">
        <!-- 递归子菜单 -->
        <sidebar-item
          :key="child.path"
          :item="child"
          v-if="child.children && child.children.length"
        ></sidebar-item>

        <el-menu-item :key="child.path" :index="child.path">
          <i :class="child.icon"></i>
          <span slot="title">{{ child.title }}</span>
        </el-menu-item>
      </template>
    </el-submenu>

    <!-- 该菜单无子菜单时 -->
    <el-menu-item v-else :index="item.path">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
