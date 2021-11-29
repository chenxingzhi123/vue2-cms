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
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TagsView from "./components/TagsView";
import AppMain from "./components/AppMain";

export default {
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
  height: 100vh;
  min-width: 900px;
  overflow: hidden;
}

::v-deep .el-container {
  overflow: hidden;
}
</style>
