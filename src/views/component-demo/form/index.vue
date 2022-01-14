<template>
  <div>
    <xz-card title="表格">
      <xz-form
        v-model="formData"
        :config="formConfig"
        :label-width="formData.labelWidth"
        :label-position="formData.labelPosition"
        :colLayout="colLayout"
        v-on="formFunction"
        :btn-position="formData.btnPosition"
      >
        <template #hasSearch>
          <el-checkbox v-model="formData.hasSearch">搜索</el-checkbox>
          <el-checkbox v-model="formData.hasReset">重置</el-checkbox>
        </template>

        <template #btnPosition>
          <el-radio-group v-model="formData.btnPosition">
            <el-radio
              v-for="item in btnPositionArr"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </template>
      </xz-form>
    </xz-card>

    <xz-card title="表格-详情">
      <xz-form
        v-model="formData"
        :config="formConfig"
        is-detail
        :label-width="formData.labelWidth"
        :label-position="formData.labelPosition"
        :colLayout="colLayout"
      >
        <template #labelPosition>
          {{ labelPositionMap.get(formData.labelPosition) }}
        </template>

        <template #layout>
          {{ layoutArr[formData.layout] }}
        </template>

        <template #hasSearch>
          <el-checkbox v-model="formData.hasSearch" disabled>搜索</el-checkbox>
          <el-checkbox v-model="formData.hasReset" disabled>重置</el-checkbox>
        </template>

        <template #btnPosition>
          <el-radio-group v-model="formData.btnPosition" disabled>
            <el-radio
              v-for="item in btnPositionArr"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </template>

        <template #switch>
          <el-switch
            v-model="formData.switch"
            disabled
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </template>
      </xz-form>
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
      formData: {
        labelPosition: "top",
        labelWidth: "auto",
        layout: 0,
        xl: 6, // ≥1920px
        lg: 6, // ≥1200px
        md: 6, // ≥992px
        sm: 8, // ≥768px
        xs: 24, // <768px
        span: 6,
        hasSearch: true,
        hasReset: true,
        btnPosition: "right",
        switch: 0,
      },
      formDataCopy: {},
      labelPositionMap: new Map([
        ["right", "右对齐"],
        ["left", "左对齐"],
        ["top", "顶部对齐"],
      ]),
      layoutArr: ["普通布局", "响应式布局"],
      btnPositionArr: [
        { label: "居右", value: "right" },
        { label: "居中", value: "center" },
      ],
    };
  },

  created() {
    this.formDataCopy = JSON.parse(JSON.stringify(this.formData));
  },

  computed: {
    // 表单配置
    formConfig() {
      let config = [
        {
          prop: "labelPosition",
          label: "对齐方式",
          type: "select",
          options: [...this.labelPositionMap.entries()].map((el) => {
            return {
              label: el[1],
              value: el[0],
            };
          }),
        },
        {
          prop: "labelWidth",
          label: "标签的宽度",
        },
        {
          prop: "layout",
          label: "布局",
          type: "select",
          options: this.layoutArr.map((item, index) => {
            return { label: item, value: index };
          }),
        },
        {
          prop: "hasSearch",
          label: "按钮",
        },
        {
          prop: "switch",
          label: "",
          type: "switch",
          attrs: {
            "active-color": "#13ce66",
            "inactive-color": "#ff4949",
            "active-text": "按月付费",
            "inactive-text": "按年付费",
          },
        },
      ];

      let btnPosition = {
        prop: "btnPosition",
        label: "按钮位置",
      };

      if (this.formData.hasSearch || this.formData.hasReset) {
        config.splice(
          config.findIndex((el) => el.prop === "hasSearch") + 1,
          0,
          btnPosition
        );
      }

      let colLayout = this.formData.layout
        ? [
            { prop: "xl", label: "xl", type: "number" },
            { prop: "lg", label: "lg", type: "number" },
            { prop: "md", label: "md", type: "number" },
            { prop: "sm", label: "sm", type: "number" },
            { prop: "xs", label: "xs", type: "number" },
          ]
        : [{ prop: "span", label: "span", type: "number" }];

      config.splice(
        config.findIndex((el) => el.prop === "layout") + 1,
        0,
        ...colLayout
      );

      return config;
    },

    // 表单布局
    colLayout() {
      return this.formData.layout
        ? {
            xl: this.formData.xl,
            lg: this.formData.lg,
            md: this.formData.md,
            sm: this.formData.sm,
            xs: this.formData.xs,
          }
        : {
            span: this.formData.span,
          };
    },

    // 表单使用到的funtion
    formFunction() {
      let obj = {};
      if (this.formData.hasSearch) {
        obj.search = this.handleSearchClick;
      }
      if (this.formData.hasReset) {
        obj.reset = this.handleResetClick;
      }
      return obj;
    },
  },

  methods: {
    handleSearchClick() {
      this.$message.success("点击了搜索");
    },

    handleResetClick() {
      this.formData = JSON.parse(JSON.stringify(this.formDataCopy));
    },
  },
};
</script>

<style scoped></style>
