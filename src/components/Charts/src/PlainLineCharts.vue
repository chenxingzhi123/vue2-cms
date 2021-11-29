<template>
  <div class="plain-line-charts">
    <BaseCharts :options="options" width="180px" height="70px" />
  </div>
</template>

<script>
import BaseCharts from "./BaseCharts.vue";
export default {
  components: { BaseCharts },
  props: {
    optionData: {
      type: Array,
      default: function () {
        return [50, 75, 60, 90, 80, 40, 90];
      },
    },
    color: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      options: {
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            data: this.optionData,
            type: "line",
            symbol: "none",
            smooth: true,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.plain-line-charts {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
