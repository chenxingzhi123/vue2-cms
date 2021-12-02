<template>
  <div class="home-container">
    <TradeDetail />

    <el-row :gutter="10">
      <el-col :span="12">
        <xz-card border title="销售额" style="height: 300px">
          <ChartsLine
            :title="chartsData.title"
            :legendData="chartsData.legendData"
            :xLabel="chartsData.xLabel"
            :series="chartsData.series"
            style="height: 100%"
            height="100%"
          />
        </xz-card>
      </el-col>
      <el-col :span="8">
        <UserDetail />
      </el-col>
      <el-col :span="4">
        <RankingList style="height: 300px" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TradeDetail from "./components/trade-detail.vue";
import UserDetail from "./components/user-detail.vue";
import RankingList from "./components/ranking-list.vue";

import { ChartsLine } from "@/components/charts";

import XzCard from "@/components/card";

export default {
  components: { TradeDetail, ChartsLine, XzCard, UserDetail, RankingList },
  data() {
    return {
      chartsData: {
        xLabel: [
          "2021-6",
          "2021-7",
          "2021-8",
          "2021-9",
          "2021-10",
          "2021-11",
          "2021-12",
        ],
        series: [
          { data: [220, 182, 191, 234, 290, 330, 310], name: "销售" },
          { data: [4, 8, 20, 10, 50, 34, 39], name: "退货" },
        ],
      },
    };
  },
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

<style scoped lang="scss">
.home-container {
  width: 100%;
}
</style>
