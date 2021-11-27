<template>
  <el-main>
    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>
  </el-main>
</template>

<script>
export default {
  name: "AppMain",

  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped></style>
