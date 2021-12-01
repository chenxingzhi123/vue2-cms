<template>
  <div>
    <xz-form v-model="formData" :config="formConfig"></xz-form>
  </div>
</template>

<script>
import XzForm from "@/components/form";

export default {
  components: { XzForm },
  data() {
    return {
      formConfig: [
        { prop: "test1", label: "测试12323423:" },
        { prop: "test2", label: "测试2啦啦啦:" },
        { prop: "test3", label: "测试3" },
        { prop: "test4", label: "测试4" },
        { prop: "test5", label: "测试5" },
        { prop: "test6", label: "测试6" },
        { prop: "test7", label: "测试7" },
      ],
      formData: {
        test1: "123",
        test2: "",
        test3: "",
        test4: "",
        test5: "",
        test6: "",
        test7: "456",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
