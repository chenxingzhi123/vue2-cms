<template>
  <el-form
    ref="form"
    :model="value"
    v-on="$attrs"
    v-bind="$listeners"
    :label-position="isDetail ? 'left' : labelPosition"
    :label-width="labelWidth"
    size="small"
  >
    <el-row type="flex" :gutter="20" style="flex-flow: wrap">
      <el-col
        v-for="item in config"
        :key="item.prop"
        v-bind="item.colLayout ? item.colLayout : colLayout"
      >
        <el-form-item
          :label="item.label ? item.label + '：' : ' '"
          :prop="item.prop"
        >
          <!-- form表单的label -->
          <template v-if="$slots[item.prop + '_label']" slot="label">
            <slot :name="item.prop + '_label'"></slot>
          </template>

          <!-- form表单的content,详情页 -->
          <xz-tooltip v-if="isDetail" :content="value[item.prop]">
            <slot :name="item.prop" :data="value">
              <span>{{ value[item.prop] }}</span>
            </slot>
          </xz-tooltip>

          <!-- form表单的content -->
          <slot v-else :name="item.prop">
            <component
              :is="computeName(item.type)"
              v-bind="computeAttrs(item)"
              v-model="value[item.prop]"
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

      <div
        class="form-btn el-form-item"
        :class="[btnPosition === 'center' ? 'center' : 'right']"
      >
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
import XzTooltip from "@/components/tooltip";

export default {
  components: { XzTooltip },

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
      default: "top",
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
        lg: 6, // ≥1200px
        md: 6, // ≥992px
        sm: 8, // ≥768px
        xs: 24, // <768px
      }),
    },

    isDetail: {
      type: Boolean,
      default: false,
    },

    btnPosition: {
      type: String,
      default: "right",
      validator: function (value) {
        return ["right", "center"].indexOf(value) !== -1;
      },
    },
  },

  data() {
    return {};
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
        case "daterange":
          name = "ElDatePicker";
          break;
        case "number":
          name = "ElInputNumber";
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
        case "daterange":
          defaultAttrs = {
            type: "daterange",
            "value-format": "yyyy-MM-dd",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
          };
          break;
        case "date":
          defaultAttrs = {
            type: "date",
            "value-format": "yyyy-MM-dd",
            placeholder: "请选择日期",
          };
          break;
        case "textarea":
          defaultAttrs = {
            maxlength: "200",
            type: "textarea",
            "show-word-limit": true,
          };
          break;
        case "number":
          defaultAttrs = {};
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
  display: flex;
  align-items: flex-end;

  &.right {
    flex: 1;
    justify-content: flex-end;
  }
  &.center {
    width: 100%;
    justify-content: center;
  }
}

.text-overflow {
  display: flex !important;

  ::v-deep .el-form-item__content {
    display: flex !important;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span.content {
      max-width: 100%;
      float: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

::v-deep .el-form {
  &-item__content {
    div {
      width: 100%;
    }
  }

  &-item__label {
    height: 42px;
  }
}
</style>
