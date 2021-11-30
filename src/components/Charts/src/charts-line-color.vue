<template>
  <div class="plain-line-charts">
    <Charts :options="options" :width="width" :height="height" />
  </div>
</template>

<script>
import Charts from "./charts.vue";

import { randomHexColor } from "@/utils";

export default {
  components: { Charts },

  props: {
    optionData: {
      type: Array,
      default: function () {
        return [50, 75, 60, 90, 80, 40, 90];
      },
    },

    width: {
      type: String,
      default: "180px",
    },

    height: {
      type: String,
      default: "70px",
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
            lineStyle: {
              color: randomHexColor(),
            },
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
