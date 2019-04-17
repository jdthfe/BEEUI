<template>
    <div :class="classes" :style="classesStyles" v-clickoutside="handleClose">
        <div :class="[prefixCls + '-rel']" @click="toggleOpen">
            <slot>
                <i-input
                    readonly
                    :disabled="disabled"
                    v-model="displayRender"
                    :size="size"
                    :width="width"
                    :placeholder="placeholder"></i-input>
                <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.native.stop="clearSelect"></Icon>
                <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']"></Icon>
            </slot>
        </div>
        <transition name="slide-up">
            <Drop v-show="visible">
                <div>
                <!-- todo
                  将input选中的值传给自组件item来匹配高亮哪个item
                 -->
                    <Caspanel
                        ref="caspanel"
                        :prefix-cls="prefixCls"
                        :data="data"
                        :disabled="disabled"
                        :selectedValue="selectedValue"
                        :change-on-select="changeOnSelect"
                        :lastValue="lastValue"
                        :remoteLevel="remoteLevel"
                        :remote="remote"
                        :trigger="trigger"></Caspanel>
                </div>
            </Drop>
        </transition>
    </div>
</template>
<script>
import iInput from "../input/input.vue";
import Drop from "../select/dropdown.vue";
import Icon from "../icon/icon.vue";
import Caspanel from "./caspanel.vue";
import clickoutside from "../../directives/clickoutside";
import { oneOf } from "../../utils/assist";
import Emitter from "../../mixins/emitter";

const prefixCls = "ga-cascader";

export default {
  name: "Cascader",
  mixins: [Emitter],
  components: { iInput, Drop, Icon, Caspanel },
  directives: { clickoutside },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large"]);
      }
    },
    trigger: {
      validator(value) {
        return oneOf(value, ['hover', 'click']);
      },
      default: "hover"
    },
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    renderFormat: {
      type: Function,
      default(label) {
        return label.join(" / ");
      }
    },
    width: {
      type: [String, Number],
      default: "200"
    },
    lastValue: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function
    },
    remoteLevel: {
      type: [String, Number],
      default: 3
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      visible: false,
      selected: [],
      tmpSelected: [],
      updatingValue: false, // to fix set value in changeOnSelect type
      currentValue: this.value,
      selectedValue: [], // todo 定义input里面选中的中文名字
      isLoading: false
    };
  },
  computed: {
    classesStyles() {
      return `width: ${this.width}px`
    },
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-show-clear`]: this.showCloseIcon,
          [`${prefixCls}-visible`]: this.visible,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    showCloseIcon() {
      return this.currentValue && this.currentValue.length && this.clearable;
    },
    displayRender() {
      let label = [];
      let value = [];
      for (let i = 0; i < this.selected.length; i++) {
        label.push(this.selected[i].label);
        value.push(this.selected[i].value);
      }

      // todo 用定义的变量保存input中选中的中文名字，传给子组件来判断是否高亮相应的选项
      this.selectedValue = Object.assign([], value);

      return this.renderFormat(label, this.selected);
    }
  },
  methods: {
    clearSelect() {
      const oldVal = JSON.stringify(this.currentValue);
      this.currentValue = this.selected = this.tmpSelected = [];
      this.handleClose();
      this.emitValue(this.currentValue, oldVal);
      //                this.$broadcast('on-clear');
      this.broadcast("Caspanel", "on-clear");
    },
    handleClose() {
      this.visible = false;
    },
    toggleOpen() {
      if (this.disabled) return false;
      if (this.visible) {
        this.handleClose();
      } else {
        this.onFocus();
      }
    },
    onFocus() {
      this.visible = true;
      if (!this.currentValue.length) {
        this.broadcast("Caspanel", "on-clear");
      }
    },
    updateResult(result) {
      this.tmpSelected = result;
      /**
       * todo 可以默认选中一个值
       */
      this.selected = result;
    },
    updateSelected(init = false) {
      if (!this.changeOnSelect || init) {
        this.broadcast("Caspanel", "on-find-selected", {
          value: this.currentValue
        });
      }
    },
    emitValue(val, oldVal) {
      if (JSON.stringify(val) !== oldVal) {
        this.$emit(
          "on-change",
          this.currentValue,
          JSON.parse(JSON.stringify(this.selected))
        );
        this.dispatch("FormItem", "on-form-change", {
          value: this.currentValue,
          selected: JSON.parse(JSON.stringify(this.selected))
        });
      }
    }
  },
  mounted() {
    this.updateSelected(true);
    this.$on("on-result-change", params => {
      // lastValue: is click the final val
      // fromInit: is this emit from update value
      const lastValue = params.lastValue;
      const changeOnSelect = params.changeOnSelect;
      const fromInit = params.fromInit;

      if (lastValue || changeOnSelect) {
        const oldVal = JSON.stringify(this.currentValue);
        this.selected = this.tmpSelected;

        let newVal = [];
        this.selected.forEach(item => {
          newVal.push(item.value);
        });

        if (!fromInit) {
          this.updatingValue = true;
          this.currentValue = newVal;
          this.emitValue(this.currentValue, oldVal);
        }
      }
      if (lastValue && !fromInit) {
        this.handleClose();
      }
    });
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.currentValue.length) {
          this.updateSelected();
        }
      }
    },
    value(val) {
      this.currentValue = val;
      /**
       * todo 如果val的长度是0，则清空内部选中的值
       */
      if (val.length === 0) {
        this.selected = [];
        this.tmpSelected = [];
      }
    },
    currentValue() {
      this.$emit("input", this.currentValue);

      if (this.updatingValue) {
        this.updatingValue = false;
        return;
      }
      this.updateSelected(true);
    },
    data: {
      handler(val) {
        if(this.remote) {
          for(let v of val) {
            v.loading = false
          }
          // if (!this.isLoading) {
          //   this.$nextTick(() => this.updateSelected());
          // }
          // this.isLoading = false;
        }
      },
      deep: true
    }
  }
};
</script>
