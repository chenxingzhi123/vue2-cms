<template>
  <base-echarts :option="option" v-bind="$attrs"></base-echarts>
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "ScatterEcharts",

  components: { BaseEcharts },

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      option: {
        xAxis: {},
        yAxis: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true,
        },
        series: [
          {
            symbolSize: 20,
            data: this.data,
            type: "scatter",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
