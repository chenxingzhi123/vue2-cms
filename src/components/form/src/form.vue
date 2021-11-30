<template>
  <el-form :model="value" v-on="$attrs" v-bind="$listener"> </el-form>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
