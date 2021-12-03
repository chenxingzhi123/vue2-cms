<template>
  <base-echarts :option="option" v-bind="$attrs"></base-echarts>
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "RoseEcharts",

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
        series: [
          {
            type: "pie",
            radius: [20, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: this.data,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
