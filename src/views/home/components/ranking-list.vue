<template>
  <xz-card border title="灌水嫌疑榜" class="ranking-list">
    <el-scrollbar
      style="height: 100%"
      wrapStyle="overflow-x: hidden;"
      viewStyle="height: 100%;"
    >
      <div v-for="item in userData" :key="item.name" style="height: 50px">
        <div>{{ item.name }}</div>
      </div>
    </el-scrollbar>
  </xz-card>
</template>

<script>
import XzCard from "@/components/card";
export default {
  components: { XzCard },
  data() {
    return {
      userData: [
        {
          name: "呵呵呵",
          value: 123,
        },
        {
          name: "哈哈哈",
          value: 23,
        },
        {
          name: "呵呵呵1",
          value: 123,
        },
        {
          name: "哈哈哈2",
          value: 23,
        },
        {
          name: "呵呵呵3",
          value: 123,
        },
        {
          name: "哈哈哈4",
          value: 23,
        },
        {
          name: "呵呵呵5",
          value: 123,
        },
        {
          name: "哈哈哈6",
          value: 23,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ranking-list {
  ::v-deep .box-card__body {
    overflow: hidden;
  }
}
</style>
