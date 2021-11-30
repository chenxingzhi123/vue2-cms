<template>
  <div class="box-card">
    <div class="box-card__header">
      <p class="box-card__header-title">{{ title }}</p>
    </div>

    <div class="box-card__body">
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
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;

  &__header {
    background-color: #dde3ef;
    padding: 10px 0;
    &-title {
      padding-left: 8px;
      color: #666;
      font-size: 14px;
      display: flex;
      &:before {
        content: "";
        width: 4px;
        height: 16px;
        background: #800080;
        margin-right: 4px;
        border-radius: 4px;
        vertical-align: middle;
      }
    }
  }

  &__body {
    flex: 1;
  }
}
</style>
