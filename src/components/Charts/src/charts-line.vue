<template>
  <div>
    <Charts :options="options" :width="width" :height="height" />
  </div>
</template>

<script>
import Charts from "./charts.vue";

export default {
  name: "LineCharts",

  components: { Charts },

  props: {
    title: {
      type: String,
      default: "",
    },
    legendData: {
      type: Array,
      default: () => [],
    },
    xLabel: {
      type: Array,
      default: () => [],
    },
    series: {
      type: Array,
      default: () => [],
    },
    width: String,
    height: String,
  },

  data() {
    return {
      options: {
        title: {
          text: this.title,
        },

        tooltip: {
          trigger: "axis",
        },

        legend: {
          data: this.legendData,
          left: "0",
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "10px",
          containLabel: true,
        },

        xAxis: {
          data: this.xLabel,
          type: "category",
          boundaryGap: false,
        },

        yAxis: {
          type: "value",
        },

        series: this.series.map((item) => {
          return { type: "line", ...item };
        }),
      },
    };
  },
};
</script>

<style scoped></style>
