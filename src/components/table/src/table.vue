<template>
  <el-table :data="tableData">
    <el-table-column
      v-if="showSelection"
      type="selection"
      align="center"
      width="60"
    ></el-table-column>
    <el-table-column
      v-if="showIndex"
      type="index"
      label="序号"
      align="center"
      width="80"
    ></el-table-column>

    <el-table-column
      v-for="item in config"
      :key="item.prop"
      v-bind="item"
      show-overflow-tooltip
      min-width="120"
    >
      <template #default="scope">
        <slot :name="item.prop" :row="scope.row">
          {{ scope.row[item.prop] }}
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    showSelection: {
      type: Boolean,
      default: false,
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
