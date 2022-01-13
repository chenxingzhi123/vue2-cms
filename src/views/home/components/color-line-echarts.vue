<template>
  <LineEcharts :option="option" width="180px" height="70px" />
</template>

<script>
import { LineEcharts } from "@/components/charts";
import { randomHexColor } from "@/utils";

export default {
  name: "ColorLineEcharts",

  components: { LineEcharts },

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      option: {
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          containLabel: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            data: this.data,
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

<style lang="scss" scoped></style>
