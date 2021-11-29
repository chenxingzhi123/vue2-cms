<template>
  <div ref="baseChart" :style="{ height: height, width: width }"></div>
</template>

<script>
import * as echarts from "echarts";
import { throttle } from "lodash";

export default {
  name: "echarts",
  data() {
    return {};
  },
  props: {
    height: {
      type: String,
      default: "300px",
    },
    width: {
      type: String,
      default: "100%",
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let baseChart = echarts.init(this.$refs.baseChart);
      baseChart.setOption(this.options); // 绘制图表
      window.onresize = throttle(() => baseChart.resize(), 500);
    },
  },
};
</script>
