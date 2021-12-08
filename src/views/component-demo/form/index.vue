<template>
  <div>
    <xz-card title="筛选">
      <xz-form v-model="formData" :config="formConfig"></xz-form>
    </xz-card>
  </div>
</template>

<script>
import XzForm from "@/components/form";

export default {
  name: "ComponentForm",

  components: { XzForm },

  data() {
    return {
      formConfig: [
        { prop: "test1", label: "测试1" },
        { prop: "test2", label: "测试2" },
        { prop: "test3", label: "测试3" },
        { prop: "test4", label: "测试4" },
        { prop: "test5", label: "测试5" },
        { prop: "test6", label: "测试6" },
      ],
      formData: {
        test1: "",
        test2: "",
        test3: "",
        test4: "",
        test5: "",
        test6: "",
      },
    };
  },
};
</script>

<style scoped></style>
