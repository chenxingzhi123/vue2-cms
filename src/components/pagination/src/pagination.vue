<template>
  <div v-show="hidden" class="pagination-container">
    <el-pagination
      @size-change="$emit('pagination', $event)"
      @current-change="$emit('pagination', $event)"
      :current-page.sync="page"
      :page-sizes="pageSizes"
      :page-size.sync="limit"
      :layout="layout"
      :total="total"
      v-bind="$attrs"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50, 100],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
  },
  computed: {
    page: {
      get() {
        return this.currentPage;
      },
      set(val) {
        this.$emit("update:currentPage", val);
      },
    },
    limit: {
      get() {
        return this.pageSize;
      },
      set(val) {
        this.$emit("update:pageSize", val);
      },
    },
    hidden() {
      return parseInt(this.total) < 1;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pagination-container {
  margin: 16px 0 0;
}
</style>
