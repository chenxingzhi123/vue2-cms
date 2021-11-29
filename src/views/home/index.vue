<template>
  <div>
    <!-- <el-button @click="test">测试</el-button> -->
    <HomeTotal />
  </div>
</template>

<script>
import HomeTotal from "./components/HomeTotal.vue";

import { throttle } from "lodash";
export default {
  components: { HomeTotal },
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

  mounted() {
    window.onresize = throttle(() => console.log("hehe"), 500);
  },
};
</script>

<style scoped></style>
