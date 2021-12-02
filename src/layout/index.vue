<template>
  <el-container class="app-wrapper" direction="vertical">
    <Navbar />

    <el-container>
      <Sidebar />
      <el-container direction="vertical">
        <TagsView />
        <AppMain />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar/sidebar";
import TagsView from "./components/tags-view";
import AppMain from "./components/app-main";

export default {
  name: "Layout",

  components: {
    Navbar,
    Sidebar,
    TagsView,
    AppMain,
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 900px;
  overflow: hidden;
}

::v-deep .el-container {
  overflow: hidden;
}
</style>
