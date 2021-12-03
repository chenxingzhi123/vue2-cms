<!-- 柱状图 -->
<template>
  <base-echarts :option="option" v-bind="$attrs"> </base-echarts>
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "BarEcharts",

  components: { BaseEcharts },

  props: {
    title: {
      type: String,
      default: "",
    },
    xLabel: {
      type: Array,
      default: () => [],
    },
    series: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {
        title: {
          text: this.title,
        },

        tooltip: {
          trigger: "axis",
        },

        legend: {
          left: "right",
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 40,
          containLabel: true,
        },

        xAxis: {
          data: this.xLabel,
          type: "category",
        },

        yAxis: {
          type: "value",
        },

        series: this.series.map((item) => {
          return { type: "bar", ...item };
        }),
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
