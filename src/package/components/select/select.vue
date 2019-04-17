<template>
  <div :class="classes" :style="classesStyles" v-clickoutside="handleClose" :title="selectedMultipleValue">
    <div :class="[prefixCls + '-selection']" ref="reference" @click="toggleMenu">
      <div class="ga-tag" v-for="(item, index) in selectedMultiple" :key="index">
        <span class="ga-tag-text">{{ item.label }}</span>
        <Icon type="ios-close-empty" v-if="removeFlag" @click.native.stop="removeTag(index)"></Icon>
      </div>
      <span :class="[prefixCls + '-placeholder']" :style="selectedStyle" v-show="showPlaceholder && !filterable">{{ localePlaceholder }}</span>
      <span :class="[prefixCls + '-selected-value']" :style="selectedStyle" v-show="!showPlaceholder && !multiple && !filterable">{{ selectedSingle }}</span>
      <input type="text" v-if="filterable" v-model="query" :class="[prefixCls + '-input']" :placeholder="showPlaceholder ? localePlaceholder : ''" :style="inputStyle" @blur="handleBlur" @focus="handlerFocus" @keydown="resetInputState" @keydown.delete="handleInputDelete" ref="input">
      <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.native.stop="clearSingleSelect"></Icon>
      <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']" v-if="!remote"></Icon>
      <Icon :type="prefixIcon" v-if="prefixIcon" :class="[prefixCls + '-prefix-icon']"></Icon>
    </div>
    <transition :name="transitionName">
      <Drop
        :class="dropdownBody"
        v-show="dropVisible" 
        ref="dropdown" 
        :placement="placement"
        :data-append-to-body="appendToBody"
        v-transfer-dom>
        <ul v-show="notFoundShow" :class="[prefixCls + '-not-found']">
          <li>{{ localeNotFoundText }}</li>
        </ul>
        <!-- <ul v-show="!notFound" :class="[prefixCls + '-dropdown-list']" ref="options">
          <slot></slot>
        </ul> -->
        <ul v-show="dropdownListShow" :class="[prefixCls + '-dropdown-list']">
          <slot></slot>
        </ul>
        <ul v-show="loading" :class="[prefixCls + '-loading']">{{ localeLoadingText }}</ul>
      </Drop>
    </transition>
  </div>
</template>
<script>
import Icon from "../icon";
import Drop from "./dropdown.vue";
import clickoutside from "../../directives/clickoutside";
import TransferDom from '../../directives/transfer-dom'
import { oneOf, findComponentDownward } from "../../utils/assist";
import Emitter from "../../mixins/emitter";
import Locale from "../../mixins/locale";

const prefixCls = "ga-select";

export default {
  name: "iSelect",
  mixins: [Emitter, Locale],
  components: { Icon, Drop },
  directives: { clickoutside, TransferDom },
  props: {
    removeFlag: {
      type: Boolean,
      default: true
    },
    value: {
      type: [String, Number, Array],
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    filterMethod: {
      type: Function
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      }
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    notFoundText: {
      type: String
    },
    placement: {
      validator(value) {
        return oneOf(value, ["top", "bottom"]);
      },
      default: "bottom"
    },
    origindata: {
      type: Array,
      default() {
        return [];
      }
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: "加载中..."
    },
    width: {
      type: [String, Number],
      default: ""
    },
    prefixIcon: {
      type: String,
      default: ""
    },
    focus: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    valueObject: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      visible: false,
      options: [],
      optionInstances: [],
      selectedSingle: "", // label
      selectedMultiple: [],
      selectedMultipleValue: [], //title配置项
      focusIndex: 0,
      query: "",
      inputLength: 20,
      notFound: false,
      slotChangeDuration: false, // if slot change duration and in multiple, set true and after slot change, set false
      model: this.value,
      lastQuery: "",
      autoComplete: false,
      remoteValue: "", // 远程搜索值
      remoteFlag: false, // true可以发请求，反之则不行
      timeOut: null
    };
  },
  computed: {
    selectedStyle() {
      return this.prefixIcon ? 'padding-left: 20px;' : ''
    },
    transitionName() {
      return this.placement === "bottom" ? "slide-up" : "slide-down";
    },
    classesStyles() {
      if(String(this.width).indexOf('%') > -1) return `width: ${this.width}`
      return `width: ${this.width}px`
    },
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-visible`]: this.visible,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-multiple`]: this.multiple,
          [`${prefixCls}-single`]: !this.multiple,
          [`${prefixCls}-show-clear`]: this.showCloseIcon,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ];
    },
    dropdownBody() {
      return [
        {
          [`${prefixCls}-dropdown-body`]: this.appendToBody,
        }
      ];
    },
    showPlaceholder() {
      let status = false;

      if (typeof this.model === "string") {
        if (this.model === "") {
          status = true;
        }
      } else if (Array.isArray(this.model)) {
        if (!this.model.length) {
          status = true;
        }
      }

      return status;
    },
    showCloseIcon() {
      return !this.multiple && this.clearable && !this.showPlaceholder;
    },
    inputStyle() {
      let style = {};

      if (this.multiple) {
        if (this.showPlaceholder) {
          style.width = "100%";
        } else {
          style.width = `${this.inputLength}px`;
        }
      }

      if(this.prefixIcon) {
        style.paddingLeft = '20px'
      }
      return style;
    },
    localePlaceholder() {
      if (this.placeholder === undefined) {
        return this.t("i.select.placeholder");
      } else {
        return this.placeholder;
      }
    },
    localeNotFoundText() {
      if (this.notFoundText === undefined) {
        return this.t("i.select.noMatch");
      } else {
        return this.notFoundText;
      }
    },
    localeLoadingText() {
      return this.loadingText;
    },
    dropVisible() {
      let status = true;

      const options = this.$slots.default || [];
      if (!this.loading && this.remote && this.query === "" && !options.length)
        status = false;
      if (this.autoComplete && !options.length) status = false;
      return this.visible && status;
    },
    notFoundShow() {
      const options = this.$slots.default || [];
      return (
        (this.notFound && !this.remote) ||
        (this.remote && !this.loading && !options.length)
      );
    },
    dropdownListShow() {
      return (
        (!this.notFound && !this.remote) ||
        (this.remote && !this.loading && !this.notFound)
      );
    }
  },
  methods: {
    handlerFocus() {
      this.$emit('on-focus')
    },
    toggleMenu() {
      if (this.disabled) {
        return false;
      }
      if(this.focus) {
        this.visible = false
      }
      this.$emit('on-focus')
      this.visible = !this.visible;
    },
    hideMenu() {
      this.visible = false;
      this.focusIndex = 0;
      this.broadcast("iOption", "on-select-close");
    },
    // find option component
    findChild(cb) {
      const find = function(child) {
        const name = child.$options.componentName;
        
        if (name) {
          cb(child);
        } else if (child.$children.length) {
          child.$children.forEach(innerChild => {
            find(innerChild, cb);
          });
        }
      };

      if (this.optionInstances.length) {
        this.optionInstances.forEach(child => {
          find(child);
        });
      } else {
        this.$children.forEach(child => {
          find(child);
        });
      }
    },
    updateOptions(init, slot = false) {
      let options = [];
      let index = 1;

      this.findChild(child => {
        options.push({
          value: child.value,
          label: child.label === undefined ? child.$el.innerHTML : child.label,
          valueObject: child.valueObject
        });
        child.index = index++;
        
        if (init) {
          this.optionInstances.push(child);
        }
      });
      /**
       * todo 由于在watch的时候调用了该方法，会导致options不断增加，所以在第二次触发的时候options做删除原数组长度操作
       */
      options.splice(options.length, options.length);
      this.optionInstances.splice(options.length, options.length);

      this.options = options;

      if (init) {
        this.updateSingleSelected(true, slot);
        this.updateMultipleSelected(true, slot);
      }
    },
    updateSingleSelected(init = false, slot = false) {
      const type = typeof this.model;
      /**
       * todo 非过滤情况下增加搜索多选配置开始
       */
      let newoptions = this.origindata.length ? this.origindata : this.options;
      /**
       * todo 非过滤情况下增加搜索多选配置结束
       */
      if (type === "string" || type === "number") {
        let findModel = false;

        for (let i = 0; i < newoptions.length; i++) {
          if (this.model === newoptions[i].value) {
            this.selectedSingle = newoptions[i].label;
            findModel = true;
            break;
          }
        }

        if (slot && !findModel) {
          this.model = "";
          this.query = "";
        }
      }
      this.toggleSingleSelected(this.model, init);
    },
    clearSingleSelect() {
      if (this.showCloseIcon) {
        this.findChild(child => {
          child.selected = false;
        });
        this.model = "";

        if (this.filterable) {
          this.query = "";
        }

        if (this.remote && this.remoteMethod) {
          this.optionInstances = [];
          this.options = [];
        }
      }
    },
    updateMultipleSelected(init = false, slot = false) {
      if (this.multiple && Array.isArray(this.model)) {
        let selected = [];
        let selectedvalue = [];
        /**
         * todo 非过滤情况下增加搜索多选配置开始
         */
        let newoptions = this.origindata.length
          ? this.origindata
          : this.options;
        /**
         * todo 非过滤情况下增加搜索多选配置结束
         */
        for (let i = 0; i < this.model.length; i++) {
          const model = this.model[i];

          for (let j = 0; j < newoptions.length; j++) {
            const option = newoptions[j];

            if (model === option.value) {
              selected.push({
                value: option.value,
                label: option.label
              });
              selectedvalue.push(option.label);
            }
          }
        }

        this.selectedMultiple = selected;
        this.selectedMultipleValue = selectedvalue.join(",");

        if (slot) {
          let selectedModel = [];

          for (let i = 0; i < selected.length; i++) {
            selectedModel.push(selected[i].value);
          }

          // if slot change and remove a selected option, emit user
          if (this.model.length === selectedModel.length) {
            this.slotChangeDuration = true;
          }

          this.model = selectedModel;
        }
      }
      this.toggleMultipleSelected(this.model, init);
    },
    removeTag(index) {
      if (this.disabled) {
        return false;
      }
      this.model.splice(index, 1);

      if (this.filterable && this.visible) {
        this.$refs.input.focus();
      }

      this.broadcast("Drop", "on-update-popper");
    },
    // to select option for single
    toggleSingleSelected(value, init = false) {
      if (!this.multiple) {
        let label = "";
        let valueObject = {}
        this.findChild(child => {
          if (child.value === value) {
            child.selected = true;
            label = child.label === undefined ? child.$el.innerHTML : child.label;
          } else {
            child.selected = false;
          }
        });

        if(this.valueObject) {
          this.findChild(child => {
            if (child.value === value) {
              child.selected = true;
              valueObject = child.valueObject === undefined ? child.$el.innerHTML : child.valueObject
            } else {
              child.selected = false;
            }
          });
        }

        this.hideMenu();

        if (!init) {
          if (this.labelInValue) {
            this.$emit("on-change", {
              value: value,
              label: label
            });
            this.dispatch("FormItem", "on-form-change", {
              value: value,
              label: label
            });
          } else if (this.valueObject) {
            this.$emit("on-change", {
              ...valueObject
            });
            this.dispatch("FormItem", "on-form-change", {
              ...valueObject
            });
          } else {
            this.$emit("on-change", value);
            this.dispatch("FormItem", "on-form-change", value);
          }
        }
      }
    },
    // to select option for multiple
    toggleMultipleSelected(value, init = false) {
      if (this.multiple) {
        let hybridValue = [];
        for (let i = 0; i < value.length; i++) {
          hybridValue.push({
            value: value[i]
          });
        }

        this.findChild(child => {
          const index = value.indexOf(child.value);

          if (index >= 0) {
            child.selected = true;
            hybridValue[index].label =
              child.label === undefined ? child.$el.innerHTML : child.label;
          } else {
            child.selected = false;
          }
        });

        if(this.valueObject) {
          this.findChild(child => {
            const index = value.indexOf(child.value);

            if (index >= 0) {
              child.selected = true;
              hybridValue[index] =
                child.valueObject === undefined ? child.$el.innerHTML : child.valueObject
            } else {
              child.selected = false;
            }
          });
        }
        if (!init) {
          if (this.labelInValue) {
            this.$emit("on-change", hybridValue);
            this.dispatch("FormItem", "on-form-change", hybridValue);
          } else if (this.valueObject) {
            this.$emit("on-change", hybridValue);
            this.dispatch("FormItem", "on-form-change", hybridValue);
          } else {
            this.$emit("on-change", value);
            this.dispatch("FormItem", "on-form-change", value);
          }
        }
      }
    },
    handleClose() {
      this.hideMenu();
    },
    handleKeydown(e) {
      if (this.visible) {
        const keyCode = e.keyCode;
        // Esc slide-up
        if (keyCode === 27) {
          e.preventDefault();
          this.hideMenu();
        }
        // next
        if (keyCode === 40) {
          e.preventDefault();
          this.navigateOptions("next");
        }
        // prev
        if (keyCode === 38) {
          e.preventDefault();
          this.navigateOptions("prev");
        }
        // enter
        if (keyCode === 13) {
          e.preventDefault();

          this.findChild(child => {
            if (child.isFocus) {
              child.select();
            }
          });
        }
      }
    },
    navigateOptions(direction) {
      if (direction === "next") {
        const next = this.focusIndex + 1;
        this.focusIndex = this.focusIndex === this.options.length ? 1 : next;
      } else if (direction === "prev") {
        const prev = this.focusIndex - 1;
        this.focusIndex = this.focusIndex <= 1 ? this.options.length : prev;
      }

      let child_status = {
        disabled: false,
        hidden: false
      };

      let find_deep = false; // can next find allowed

      this.findChild(child => {
        if (child.index === this.focusIndex) {
          child_status.disabled = child.disabled;
          child_status.hidden = child.hidden;

          if (!child.disabled && !child.hidden) {
            child.isFocus = true;
          }
        } else {
          child.isFocus = false;
        }

        if (!child.hidden && !child.disabled) {
          find_deep = true;
        }
      });

      this.resetScrollTop();

      if ((child_status.disabled || child_status.hidden) && find_deep) {
        this.navigateOptions(direction);
      }
    },
    resetScrollTop() {
      const index = this.focusIndex - 1;
      let bottomOverflowDistance =
        this.optionInstances[index].$el.getBoundingClientRect().bottom -
        this.$refs.dropdown.$el.getBoundingClientRect().bottom;
      let topOverflowDistance =
        this.optionInstances[index].$el.getBoundingClientRect().top -
        this.$refs.dropdown.$el.getBoundingClientRect().top;

      if (bottomOverflowDistance > 0) {
        this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
      }
      if (topOverflowDistance < 0) {
        this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
      }
    },
    handleBlur() {
      // 2018-03-05 wq修改，取消blur事件
      // setTimeout(() => {
      //   const model = this.model;
      //   if (this.multiple) {
      //     this.query = '';
      //   } else {
      //     if (model !== '') {
      //       this.findChild((child) => {
      //         if (child.value === model) {
      //           this.query = child.label === undefined ? child.searchLabel : child.label;
      //         }
      //       });
      //       // // 如果删除了搜索词，下拉列表也清空了，所以强制调用一次remoteMethod
      //       if (this.remote && this.query !== this.lastQuery) {
      //         this.$nextTick(() => {
      //           this.query = this.lastQuery;
      //         });
      //       }
      //     } else {
      //       // todo 如果开启远程搜索则不清空输入框
      //       if (this.remoteMethod) {
      //         this.query = this.remoteValue;
      //       } else {
      //         this.query = '';
      //       }
      //     }
      //   }
      // }, 300);
    },
    resetInputState() {
      this.inputLength = this.$refs.input.value.length * 12 + 20;
    },
    handleInputDelete() {
      if (this.multiple && this.model.length && this.query === "") {
        this.removeTag(this.model.length - 1);
      }

      if (this.remote && this.remoteMethod) {
        this.optionInstances = [];
        this.options = [];
      }
    },
    // use when slot changed
    slotChange() {
      this.options = [];
      this.optionInstances = [];
    },
    setQuery(query) {
      if (!this.filterable) return;
      this.query = query;
    },
    modelToQuery() {
      if (!this.multiple && this.filterable && this.model) {
        this.findChild(child => {
          if (this.model === child.value) {
            if (child.label) {
              this.query = child.label;
            } else if (child.searchLabel) {
              this.query = child.searchLabel;
            } else {
              this.query = child.value;
            }
          }
        });
      }
    },
    broadcastQuery(val) {
      if (findComponentDownward(this, "OptionGroup")) {
        this.broadcast("OptionGroup", "on-query-change", val);
        this.broadcast("iOption", "on-query-change", val);
      } else {
        this.broadcast("iOption", "on-query-change", val);
      }
    },
    getFocus() {
      // 如果设置focus=true，默认初始化聚焦
      if(this.focus) {
        this.$refs.input.focus()
        this.$nextTick(() => {
          this.visible = true
        })
      }
    }
  },
  created() {
    if(this.remote && this.remoteMethod) {
      if(!this.value) this.remoteFlag = true
      this.query = this.value
    }
  },
  mounted() {
    this.getFocus()
    this.modelToQuery();

    this.updateOptions(true);
    document.addEventListener("keydown", this.handleKeydown);

    this.$on("append", () => {
      this.modelToQuery();
      this.slotChange();
      this.updateOptions(true, true);
    });
    this.$on("remove", () => {
      this.modelToQuery();
      this.slotChange();
      this.updateOptions(true, true);
    });

    this.$on("on-select-selected", value => {
      if (this.model === value) {
        this.hideMenu();
      } else {
        if (this.multiple) {
          const index = this.model.indexOf(value);
          if (index >= 0) {
            this.removeTag(index);
          } else {
            this.model.push(value);
            this.broadcast("Drop", "on-update-popper");
          }

          if (this.filterable) {
            this.query = "";
            this.$refs.input.focus();
          }
        } else {
          this.model = value;

          if (this.filterable) {
            this.findChild(child => {
              if (child.value === value) {
                this.lastQuery = this.query =
                  child.label === undefined ? child.searchLabel : child.label;
              }
            });
          }
        }
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  watch: {
    focus(val) {
      this.getFocus()
    },
    selectedMultipleValue(val) {
      /**
       * todo
       * 监听title变化改变下拉框的显示还是隐藏
       */
      if (this.origindata.length) {
        this.visible = !this.visible;
      }
    },
    value(val) {
      this.model = val;
      if (val === "") this.query = "";
    },
    model() {
      this.$emit("input", this.model);
      this.modelToQuery();
      /**
       * todo ajax拉取数据初始化赋值操作
       */
      // if(this.value) {
        this.updateOptions(true);
      // }

      if (this.multiple) {
        if (this.slotChangeDuration) {
          this.slotChangeDuration = false;
        } else {
          this.updateMultipleSelected();
        }
      } else {
        this.updateSingleSelected();
      }

      // 2018-03-23 动态修改options时产生选中值不变bug修复
      if(!this.model) this.slotChange()
    },
    visible(val) {
      if (val) {
        if (this.filterable) {
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            this.$refs.input.select();
          }
        }
        this.broadcast("Drop", "on-update-popper");
      } else {
        if (this.filterable) {
          this.$refs.input.blur();
          // #566 reset options visible
          setTimeout(() => {
            this.broadcastQuery("");
          }, 300);
        }
        this.broadcast("Drop", "on-destroy-popper");
      }
    },
    query(val) {
      if (this.remote && this.remoteMethod) {
        if(this.remoteFlag) {
          this.remoteValue = val;
          clearTimeout(this.timeOut)
          this.timeOut = setTimeout(() => {
            this.remoteMethod(val, this.lastQuery);
          }, 300)
          
          this.$emit("on-query-change", val);
          // 2018-03-04 wq修改 远程搜索默认值修改
          // this.broadcastQuery(val);
          this.broadcast("Drop", "on-update-popper");
        }
        this.remoteFlag = true
      } else {
        this.$emit("on-query-change", val);
        this.broadcastQuery(val);

        let is_hidden = true;

        this.$nextTick(() => {
          this.findChild(child => {
            if (!child.hidden) {
              is_hidden = false;
            }
          });
          this.notFound = is_hidden;
        });
        this.broadcast("Drop", "on-update-popper");
      }
    }
  }
};
</script>
