<template>
  <el-tooltip :disabled="disabled" :content="String(content)" placement="top">
    <span class="ellipsis" @mouseenter="handleMouseEnter">
      <slot></slot>
    </span>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    content: {
      type: [String, Number, Boolean, Array],
      default: "",
    },
  },

  data() {
    return {
      disabled: true,
    };
  },

  methods: {
    handleMouseEnter(e) {
      this.disabled = !(e.target.scrollWidth > e.target.offsetWidth);
    },
  },
};
</script>

<style lang="scss" scoped>
.ellipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
