<template>
  <el-form
    ref="form"
    :model="formData"
    v-on="$attrs"
    v-bind="$listeners"
    :label-position="labelPosition"
    :label-width="labelWidth"
    size="small"
  >
    <el-row type="flex" :gutter="20" style="flex-flow: wrap">
      <el-col
        v-for="item in config"
        :key="item.prop"
        v-bind="item.colLayout ? item.colLayout : colLayout"
      >
        <el-form-item :label="item.label + '：'" :prop="item.prop">
          <template v-if="$slots[item.prop + '_label']" slot="label">
            <slot :name="item.prop + '_label'"></slot>
          </template>

          <slot :name="item.prop">
            <component
              :is="computeName(item.type)"
              v-bind="computeAttrs(item)"
              v-model="formData[item.prop]"
            >
              <template v-if="item.type === 'select'">
                <el-option
                  v-for="oitem in item.options"
                  :key="oitem.value"
                  :label="oitem.label"
                  :value="oitem.value"
                >
                </el-option>
              </template>
            </component>
          </slot>
        </el-form-item>
      </el-col>

      <div class="form-btn">
        <el-button
          type="primary"
          v-if="$listeners.search"
          @click="$emit('search', $event)"
          >查询</el-button
        >
        <el-button v-if="$listeners.reset" @click="$emit('reset', $event)"
          >重置</el-button
        >
      </div>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: {
    config: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => {},
    },
    labelPosition: {
      type: String,
      default: "right",
      validator: function (value) {
        return ["right", "left", "top"].indexOf(value) !== -1;
      },
    },
    labelWidth: {
      type: String,
      default: "auto",
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px
        lg: 8, // ≥1200px
        md: 12, // ≥992px
        sm: 24, // ≥768px
        xs: 24, // <768px
      }),
    },
  },

  data() {
    return {
      formData: { ...this.value },
    };
  },

  watch: {
    formData: {
      handler(newValue) {
        this.$emit("input", newValue);
      },
      deep: true,
    },
  },

  methods: {
    resetFields() {
      this.$refs.form.resetFields();
    },

    validate(callback) {
      return this.$refs.form.validate(callback);
    },

    validateField(props, cb) {
      this.$refs.form.validateField(props, cb);
    },

    clearValidate(props = []) {
      this.$refs.form.clearValidate(props);
    },

    computeName(type) {
      let name;
      switch (type) {
        case "select":
          name = "ElSelect";
          break;
        case "switch":
          name = "ElSwitch";
          break;
        case "date":
          name = "ElDatePicker";
          break;
        default:
          name = "ElInput";
          break;
      }
      return name;
    },

    computeAttrs(item) {
      const type = item.type;
      let defaultAttrs;

      switch (type) {
        case "switch":
          defaultAttrs = {
            "active-value": 1,
            "inactive-value": 0,
          };
          break;
        case "date":
          defaultAttrs = {
            type: "daterange",
            "value-format": "yyyy-MM-dd",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
          };
          break;
        case "textarea":
          defaultAttrs = {
            maxlength: "200",
            type: "textarea",
            "show-word-limit": true,
          };
          break;
        default:
          defaultAttrs = {};
          break;
      }
      return { ...defaultAttrs, ...item.attrs };
    },
  },
};
</script>

<style lang="scss" scoped>
.form-btn {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
</style>
