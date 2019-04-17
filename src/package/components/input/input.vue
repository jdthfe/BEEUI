<template>
  <div :class="wrapClasses" :style="wrapClassesStyles">
    <template v-if="type !== 'textarea'">
      <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady" ref="prepend"><slot name="prepend"></slot></div>
      <transition name="fade">
          <!-- <i class="ga-icon ga-icon-load-c ga-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="icon"></i> -->
        <i class="ga-icon" :class="['ga-icon-ios-close', prefixCls + '-icon', prefixCls + '-icon-clear' , prefixCls + '-icon-normal']" v-if="clearable && currentValue" @click="handleClear"></i>
        <i class="ga-icon" :class="['ga-icon-' + suffixIcon, prefixCls + '-icon', prefixCls + '-suffix-icon']" v-if="suffixIcon" @click="handleIconClick"></i>
        <i class="ga-icon" :class="['ga-icon-' + prefixIcon, prefixCls + '-icon', prefixCls + '-prefix-icon']" v-if="prefixIcon" @click="handleIconClick"></i>
      </transition>
      <input
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :number="number"
        @keyup.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange" :title="currentValue">
      <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady" ref="append"><slot name="append"></slot></div>
    </template>
    <textarea
      v-else
      ref="textarea"
      :class="textareaClasses"
      :style="textareaStyles"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      :readonly="readonly"
      :name="name"
      :value="value"
      @keyup.enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput">
    </textarea>
  </div>
</template>
<script>
import { oneOf, findComponentUpward } from "../../utils/assist";
import calcTextareaHeight from "../../utils/calcTextareaHeight";
import Emitter from "../../mixins/emitter";

const prefixCls = "ga-input";

export default {
  name: "Input",
  mixins: [Emitter],
  props: {
    type: {
      validator(value) {
        return oneOf(value, ["text", "textarea", "password"]);
      },
      default: "text"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large"]);
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // icon: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    number: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: "200"
    },
    prefixIcon: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      prefixCls: prefixCls,
      prepend: true,
      append: true,
      slotReady: false,
      textareaStyles: {}
    };
  },
  computed: {
    wrapClassesStyles() {
      if (String(this.width).indexOf("%") > -1) return `width: ${this.width}`;
      return `width: ${this.width}px`;
    },
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type,
          [`${prefixCls}-group`]: this.prepend || this.append,
          [`${prefixCls}-group-${this.size}`]:
            (this.prepend || this.append) && !!this.size
        }
      ];
    },
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    textareaClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    handleClear() {
      const e = { target: { value: "" } };
      this.$emit("input", "");
      this.setCurrentValue("");
      this.$emit("on-change", e);
    },
    handleEnter(event) {
      this.$emit("on-enter", event);
    },
    handleIconClick(event) {
      this.$emit("on-click", event);
    },
    handleFocus(event) {
      this.$emit("on-focus", event);
    },
    handleBlur(event) {
      this.$emit("on-blur", event);
      if (
        !findComponentUpward(this, [
          "DatePicker",
          "TimePicker",
          "Cascader",
          "Search"
        ])
      ) {
        this.dispatch("FormItem", "on-form-blur", this.currentValue);
      }
    },
    handleInput(event) {
      let value = event.target.value;
      if (this.number)
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.setCurrentValue(value);
      this.$emit("on-change", event);
    },
    handleChange(event) {
      this.$emit("on-input-change", event);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.$nextTick(() => {
        this.resizeTextarea();
      });
      this.currentValue = value;
      if (
        !findComponentUpward(this, [
          "DatePicker",
          "TimePicker",
          "Cascader",
          "Search"
        ])
      ) {
        this.dispatch("FormItem", "on-form-change", value);
      }
    },
    resizeTextarea() {
      const autosize = this.autosize;
      if (!autosize || this.type !== "textarea") {
        return false;
      }

      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;

      this.textareaStyles = calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows
      );
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted() {
    if (this.type !== "textarea") {
      this.prepend = this.$slots.prepend !== undefined;
      this.append = this.$slots.append !== undefined;
    } else {
      this.prepend = false;
      this.append = false;
    }
    this.slotReady = true;
    this.resizeTextarea();
  }
};
</script>
