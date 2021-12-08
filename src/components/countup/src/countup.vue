<template>
  <div ref="countup">{{ number }}</div>
</template>

<script>
import { CountUp } from "countup.js";

export default {
  props: {
    number: {
      type: [Number, String],
      default: 0,
    },
    option: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.initCountUp();
  },
  watch: {
    number() {
      this.initCountUp();
    },
  },
  methods: {
    initCountUp() {
      let countUp = new CountUp(this.$refs.countup, this.number, this.options);
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
