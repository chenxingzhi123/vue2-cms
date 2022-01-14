<template>
  <div @click="handleIconClick">
    <i v-if="isFullscreen" class="iconfont">&#xe8fb;</i>
    <i v-else class="iconfont">&#xe8fa;</i>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "Screenfull",

  props: {},
  data() {
    return {
      isFullscreen: screenfull.isFullscreen,
    };
  },
  created() {
    screenfull.onchange(() => {
      this.isFullscreen = screenfull.isFullscreen;
    });
  },
  methods: {
    handleIconClick() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
  },
};
</script>

<style scoped lang="scss"></style>
