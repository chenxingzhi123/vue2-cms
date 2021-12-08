<template>
  <el-row class="trade-detail" :gutter="10">
    <el-col :span="6" v-for="(item, index) of homeTotalData" :key="index">
      <div class="item">
        <p class="item__title">{{ item.title }}</p>
        <countup class="item__num" :number="item.value"></countup>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Countup from "@/components/countup";

export default {
  components: { Countup },

  data() {
    return {
      homeTotalData: [
        {
          title: "采购额",
          value: "233233",
        },
        {
          title: "销售额",
          value: 5343433,
        },
        {
          title: "总利润",
          value: 345333,
        },
        {
          title: "净利润",
          value: 125440,
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

    text-align: center;
    padding: 10px;
    height: 160px;

    &__num {
      margin: 5px 0;
      font-size: 34px;
      color: #ffc107;
    }
  }
}
</style>
