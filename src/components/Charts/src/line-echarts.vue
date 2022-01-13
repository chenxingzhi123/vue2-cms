<template>
  <!-- 折线图 -->
  <BaseEcharts :option="mergeOption" v-bind="$attrs" />
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "LineEcharts",

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
      let {
        tooltip,
        legend,
        grid,
        xAxis,
        yAxis,
        series = [],
      } = this.option ?? {};

      return {
        ...this.option,

        tooltip: {
          trigger: "axis",
          ...tooltip,
        },

        legend: {
          left: "right",
          ...legend,
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true,
          ...grid,
        },

        xAxis: {
          type: "category",
          ...xAxis,
        },

        yAxis: {
          type: "value",
          ...yAxis,
        },

        series: series.map((item) => {
          return { type: "line", ...item };
        }),
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
