<template>
  <div>
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$confirm("此操作将永久删除该文件, 是否继续?")
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped></style>
