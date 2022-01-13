<template>
  <el-card class="cz-card" shadow="never">
    <div slot="header">
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  name: "XzCard",

  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.cz-card {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ::v-deep .el-card__body {
    flex: 1;
  }
}
</style>
