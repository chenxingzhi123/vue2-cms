<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <xz-card title="折线图" style="width: 100%">
          <line-echarts
            style="width: 100%"
            legendShow
            :xLabel="lineData.xLabel"
            :series="lineData.series"
          >
          </line-echarts>
        </xz-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <xz-card title="柱状图">
          <bar-echarts :xLabel="barData.xLabel" :series="barData.series">
          </bar-echarts>
        </xz-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <xz-card title="饼图">
          <pie-echarts :data="pieData.data"> </pie-echarts>
        </xz-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <xz-card title="南丁格尔玫瑰图">
          <rose-echarts :data="roseData.data"> </rose-echarts>
        </xz-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <xz-card title="散点图">
          <scatter-echarts :data="scatterData.data"> </scatter-echarts>
        </xz-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  LineEcharts,
  BarEcharts,
  PieEcharts,
  RoseEcharts,
  ScatterEcharts,
} from "@/components/charts";

export default {
  name: "ComponentCharts",
  components: {
    LineEcharts,
    BarEcharts,
    PieEcharts,
    RoseEcharts,
    ScatterEcharts,
  },

  data() {
    return {
      lineData: {
        xLabel: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        series: [
          {
            name: "采购",
            data: [150, 230, 224, 218, 135, 147, 260],
          },
          {
            name: "销售",
            data: [352, 132, 223, 243, 145, 437, 220],
          },
        ],
      },
      barData: {
        xLabel: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        series: [
          {
            name: "采购",
            data: [150, 230, 224, 218, 135, 147, 260],
          },
        ],
      },
      pieData: {
        data: [
          { value: 1048, name: "吃饭" },
          { value: 735, name: "睡觉" },
          { value: 580, name: "打游戏" },
          { value: 484, name: "上班" },
          { value: 300, name: "学习" },
        ],
      },
      roseData: {
        data: [
          { value: 40, name: "rose 1" },
          { value: 38, name: "rose 2" },
          { value: 32, name: "rose 3" },
          { value: 30, name: "rose 4" },
          { value: 25, name: "rose 5" },
          { value: 20, name: "rose 6" },
        ],
      },
      scatterData: {
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
