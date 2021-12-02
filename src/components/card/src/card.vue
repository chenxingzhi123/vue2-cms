<template>
  <div class="xz-card" :class="{ border: border }">
    <div class="xz-card__header">
      <p class="xz-card__header-title">{{ title }}</p>
    </div>

    <div class="xz-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.xz-card {
  display: flex;
  flex-direction: column;
  background: #fff;

  &__header {
    padding-top: 14px;

    &-title {
      color: $color-text-primary;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      font-weight: bold;
      &:before {
        content: "";
        width: 4px;
        height: 16px;
        background: $color-primary;
        margin-right: 10px;
      }
    }
  }

  &__body {
    flex: 1;
    overflow: hidden;
    padding: 20px;
  }
}

.border {
  border: 1px solid $border-color-base;
}
</style>
