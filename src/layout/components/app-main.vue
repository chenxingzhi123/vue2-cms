<template>
  <el-main class="app-main">
    <keep-alive :include="cachedViews">
      <router-view :key="key"></router-view>
    </keep-alive>
  </el-main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppMain",

  computed: {
    ...mapGetters(["cachedViews"]),

    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.app-main {
  background-color: $background-color-base;
}
</style>
