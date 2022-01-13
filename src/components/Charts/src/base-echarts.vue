<template>
  <div ref="baseEcharts" :style="{ height: height, width: width }"></div>
</template>

<script>
import * as echarts from "echarts";
import { throttle } from "lodash";

export default {
  name: "BaseEcharts",

  props: {
    height: {
      type: String,
      default: "200px",
    },
    width: {
      type: String,
      default: "100%",
    },
    option: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      chart: null,
    };
  },

  watch: {
    option: {
      handler(newVal) {
        this.chart.setOption(newVal);
      },
      deep: true,
    },
  },

  mounted() {
    this.resizeChart = throttle(() => {
      this.chart.resize();
    }, 500);

    this.initCharts();
  },

  beforeDestroy() {
    if (!this.chart) {
      return;
    }

    // 防止内存泄漏
    this.chart.dispose();
    this.chart = null;
  },

  destroyed() {
    // 事件解绑
    window.removeEventListener("resize", this.resizeChart);
  },

  methods: {
    initCharts() {
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs["baseEcharts"]);

        this.chart.setOption(this.option);

        window.addEventListener("resize", this.resizeChart);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
