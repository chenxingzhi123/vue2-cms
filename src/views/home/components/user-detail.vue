<template>
  <div class="user-detail">
    <div
      :style="{ 'background-color': item.color }"
      class="item"
      v-for="item in userInfo"
      :key="item.title"
    >
      <p class="item__title">{{ item.title }}</p>
      <p class="item__value">{{ item.value }}</p>
    </div>
  </div>
</template>

<script>
import { randomHexColor } from "@/utils";

export default {
  data() {
    return {
      userInfo: [
        {
          title: "会员",
          value: 2342340,
          color: randomHexColor(),
        },
        {
          title: "昨日活跃用户",
          value: 234234,
          color: randomHexColor(),
        },
        {
          title: "今日活跃用户",
          value: 323,
          color: randomHexColor(),
        },
        {
          title: "网站日均访问",
          value: 676,
          color: randomHexColor(),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.user-detail {
  display: flex;
  height: 300px;
  width: 100%;
  overflow: hidden;
  flex-flow: row wrap;
  justify-content: space-around;
  .item {
    height: 145px;
    flex: 0 0 48%;
    color: #fff;
    &__title {
      padding: 30px 0 10px 0;
      text-align: center;
      font-size: 20px;
    }
    &__value {
      text-align: center;
      font-size: 28px;
    }
  }
}
</style>
