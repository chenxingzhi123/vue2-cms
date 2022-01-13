<template>
  <el-row class="trade-detail" :gutter="10">
    <el-col :span="6" v-for="(item, index) of homeTotalData" :key="index">
      <div class="item">
        <p class="item__title">{{ item.title }}</p>
        <countup class="item__num" :number="item.value"></countup>
        <color-line-echarts :data="item.data"></color-line-echarts>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Countup from "@/components/countup";
import ColorLineEcharts from "./color-line-echarts.vue";

export default {
  components: { Countup, ColorLineEcharts },

  data() {
    return {
      homeTotalData: [
        {
          title: "采购额",
          value: "233233",
          data: [10, 20, 30, 20, 40, 50],
        },
        {
          title: "销售额",
          value: 5343433,
          data: [70, 20, 10, 20, 45, 53],
        },
        {
          title: "总利润",
          value: 345333,
          data: [30, 35, 10, 40, 20, 20],
        },
        {
          title: "净利润",
          value: 125440,
          data: [22, 44, 33, 55, 11, 28],
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.trade-detail {
  margin-bottom: 20px;

  .item {
    border: 1px solid $border-color-base;

    padding: 10px;
    height: 160px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__num {
      margin: 5px 0;
      font-size: 34px;
      color: #ffc107;
    }
  }
}
</style>
