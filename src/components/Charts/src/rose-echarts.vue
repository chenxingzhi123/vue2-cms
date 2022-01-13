<template>
  <!-- 玫瑰图 -->
  <BaseEcharts :option="mergeOption" v-bind="$attrs" />
</template>

<script>
import BaseEcharts from "./base-echarts.vue";

export default {
  name: "RoseEcharts",

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
      let { series = [] } = this.option ?? {};

      return {
        ...this.option,
        series: series.map((item) => {
          return {
            type: "pie",
            radius: [20, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            ...item,
          };
        }),
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
