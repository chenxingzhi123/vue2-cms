<template>
  <!-- 饼图 -->
  <BaseEcharts :option="mergeOption" v-bind="$attrs" />
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "PieEcharts",

  components: { BaseEcharts },

  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    //设置默认属性，合并用户属性
    mergeOption() {
      let { tooltip, series = [] } = this.option ?? {};

      return {
        ...this.option,

        tooltip: {
          trigger: "item",
          ...tooltip,
        },

        series: series.map((item) => {
          return { type: "pie", radius: "50%", ...item };
        }),
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
