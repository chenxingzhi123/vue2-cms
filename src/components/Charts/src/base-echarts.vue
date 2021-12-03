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
      defaultOption: {
        // color: [
        //   "rgb(24, 144, 255)",
        //   "rgb(54, 203, 203)",
        //   "rgb(78, 203, 115)",
        //   "rgb(251, 212, 55)",
        //   "rgb(242, 99, 123)",
        // ],
      },
    };
  },

  mounted() {
    this.resizeChart = throttle(() => {
      this.chart.resize();
    }, 500);

    this.initCharts();
  },

  watch: {
    option: {
      handler(newVal) {
        if (this.chart) {
          this.chart.setOption({
            ...this.defaultOption,
            ...newVal,
          });
        }
      },
      deep: true,
    },
  },

  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },

  methods: {
    initCharts() {
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs["baseEcharts"]);

        this.chart.setOption({
          ...this.defaultOption,
          ...this.option,
        });

        window.addEventListener("resize", this.resizeChart);
      });
    },
  },
};
</script>
