<template>
  <!-- 散点图 -->
  <BaseEcharts :option="mergeOption" v-bind="$attrs" />
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "ScatterEcharts",

  components: { BaseEcharts },

  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    //设置默认属性，合并用户属性
    mergeOption() {
      let { xAxis, yAxis, grid, series = [] } = this.option ?? {};

      return {
        ...this.option,

        xAxis: {
          ...xAxis,
        },

        yAxis: {
          ...yAxis,
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true,
          ...grid,
        },

        series: series.map((item) => {
          return { symbolSize: 20, type: "scatter", ...item };
        }),
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
