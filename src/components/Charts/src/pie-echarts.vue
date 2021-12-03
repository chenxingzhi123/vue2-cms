<template>
  <base-echarts :option="option" v-bind="$attrs"></base-echarts>
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "PieEcharts",

  components: { BaseEcharts },

  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
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
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: this.data,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
