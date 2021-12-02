<template>
  <div>
    <xz-form v-model="formData" :config="formConfig"></xz-form>

    <xz-table :table-data="tableData" :config="tableConfig"></xz-table>
  </div>
</template>

<script>
import XzForm from "@/components/form";
import XzTable from "@/components/table";

export default {
  name: "Test1",

  components: { XzForm, XzTable },
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
      tableData: [
        {
          test1: "123",
          test2: "3434",
          test3: "445",
          test4: "",
          test5: "",
          test6: "",
          test7: "456",
        },
      ],
      tableConfig: [
        { prop: "test1", label: "测试12323423:" },
        { prop: "test2", label: "测试2啦啦啦:" },
        { prop: "test3", label: "测试3" },
        { prop: "test4", label: "测试4" },
        { prop: "test5", label: "测试5" },
        { prop: "test6", label: "测试6" },
        { prop: "test7", label: "测试7" },
        { prop: "test8", label: "测试8" },
        { prop: "test9", label: "测试9" },
        { prop: "test10", label: "测试10" },
        { prop: "test11", label: "测试11" },
        { prop: "test12", label: "测试12" },
        { prop: "test13", label: "测试13" },
        { prop: "test14", label: "测试14" },
        { prop: "test15", label: "测试15" },
        { prop: "test16", label: "测试16" },
        { prop: "test17", label: "测试17" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
