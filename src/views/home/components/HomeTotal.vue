<template>
  <el-row class="home-total">
    <el-col
      :xs="12"
      :sm="12"
      :md="12"
      :lg="6"
      :xl="6"
      class="home-total-item"
      v-for="(item, index) of homeTotalData"
      :key="'line-' + index"
    >
      <div class="wrapper-item">
        <p class="title">{{ item.title }}</p>
        <p class="value digital-number" ref="countup">{{ item.value }}</p>
        <PlainLineCharts />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { PlainLineCharts } from "@/components/Charts";
import { CountUp } from "countup.js";
export default {
  components: { PlainLineCharts },
  data() {
    return {
      homeTotalData: [
        {
          title: "12313",
          value: 33432,
        },
        {
          title: "12313",
          value: 33432,
        },
        {
          title: "12313",
          value: 33432,
        },
        {
          title: "12313",
          value: 33432,
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
.home-total {
  width: 100%;
  height: 160px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 0 15px 0;
  .home-total-item {
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    padding: 15px 0;
    vertical-align: top;
    .wrapper-item {
      height: 100%;
      padding: 0 20px;
      border-right: 1px solid #ccc;
      text-align: center;
      .title {
        margin: 0px 0;
      }
      .value {
        margin: 5px 0;
        font-size: 34px;
        color: #ffc107;
      }
    }
    &:last-child {
      .wrapper-item {
        border: none;
      }
    }
  }
}
</style>
