<template>
  <el-row class="trade-detail" :gutter="10">
    <el-col :span="6" v-for="(item, index) of homeTotalData" :key="index">
      <div class="item">
        <p class="item__title">{{ item.title }}</p>
        <p class="item__num" ref="countup">{{ item.value }}</p>
        <ChartsLineColor />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { ChartsLineColor } from "@/components/charts";
import { CountUp } from "countup.js";

export default {
  components: { ChartsLineColor },

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

  mounted() {
    this.initCountUp();
  },

  methods: {
    initCountUp() {
      this.$nextTick(() => {
        let countupLength = this.$refs.countup.length;
        for (let i = 0; i < countupLength; i++) {
          let count = new CountUp(
            this.$refs.countup[i],
            this.$refs.countup[i].innerText
          );
          if (!count.error) {
            count.start();
          } else {
            console.error(count.error);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.trade-detail {
  width: 100%;
  margin-bottom: 20px;

  .item {
    border: 1px solid #ccc;
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
