<template>
  <div :class="[prefixCls]" v-clickoutside="handleClose">
    <div ref="reference" :class="[prefixCls + '-rel']">
      <div class="contrast-txt">
        对比日期
      </div>
      <slot>
        <i-input
          :class="[prefixCls + '-editor']"
          :readonly="!editable || readonly"
          :disabled="disabled"
          :placeholder="placeholder"
          :value="currentValueval"
          @on-input-change="handleInputChange"
          @on-focus="handleFocus"
          @on-click="handleIconClick"
          @mouseenter.native="handleInputMouseenter"
          @mouseleave.native="handleInputMouseleave"
          :icon="iconType"
          @click.native="toggleOpen"></i-input>
      </slot>
    </div>
    <!-- <transition :name="transition"> -->
    <Drop v-show="opened" :placement="placement" ref="drop">
      <Radio-group v-model="button6" vertical type="button" v-if="!simple">
          <Radio :label="item.value" v-for="(item,index) in typeName" :key="index"></Radio>
      </Radio-group>
      <seven-time
        :value="currentValue"
        v-show="button6 === typeName[0].value"
        @out-date="outDate"></seven-time>
      <data-dacu
        :value="currentValue"
        v-show="button6 === typeName[1].value"
        v-if="!simple"
        @out-date="outDate"></data-dacu>

      <!-- <div style="position:absolute;left:10px;bottom:10px">
        <slot name="custombtn"></slot>
      </div>
 -->    </Drop>
    <!-- </transition> -->
  </div>
</template>
<script>
import Vue from 'vue';
import iInput from '../../components/input/input.vue';
import Drop from '../../components/select/dropdown.vue';
import clickoutside from '../../directives/clickoutside';
import Radio from '../../components/radio/radio.vue';
import RadioGroup from '../../components/radio/radio-group.vue';
import sevenTime from './base/sevenTime.vue';
import dataDacu from './base/dataDacu.vue';
import {
  oneOf,
  getYearWeek
} from '../../utils/assist';
// import { formatDate, parseDate } from './util';
function getBeforeDate(n, now) {
  var n = n;
  let d = now;
  let year = d.getFullYear();
  let mon = d.getMonth() + 1;
  let day = d.getDate();
  if (day <= n) {
    if (mon > 1) {
      mon = mon - 1;
    } else {
      year = year - 1;
      mon = 12;
    }
  }
  d.setDate(d.getDate() - n);
  year = d.getFullYear();
  mon = d.getMonth() + 1;
  day = d.getDate();
  let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
  return s;
}

const prefixCls = 'ga-date-picker contrast-body';

export default {
  name: 'ContrastTime',
  components: {
    iInput,
    Drop,
    Radio,
    RadioGroup,
    sevenTime,
    dataDacu
  },
  directives: {
    clickoutside
  },
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    simple:{
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default(){
        return {
          value:'',
          label:''
        }
      }
    },
    radioList:{
      type: Array,
      default(){
        return [{
          value:'',
          label:''
        }]
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    placement: {
      validator(value) {
        return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
      },
      default: 'bottom-start'
    },
    disabledselect: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      button6: this.radioList[0].value,
      prefixCls: prefixCls,
      showClose: false,
      visible: false,
      picker: null,
      internalValue: '',
      disableClickOutSide: false, // fixed when click a date,trigger clickoutside to close picker
      currentValue: '',
      currentValueval:'',
      weeks: '',
      visualValue: {
        value: '',
        label: []
      },
      timeScale: [],
      typeName:[]
    };
  },
  computed: {
    opened() {
      return this.open === null ? this.visible : this.open;
    },
    iconType() {
      let icon = 'ios-calendar-outline';
      if (this.type === 'time' || this.type === 'timerange') icon = 'ios-clock-outline';
      if (this.showClose) icon = 'ios-close';
      return icon;
    },
    transition() {
      if (this.placement === 'bottom-start' || this.placement === 'bottom' || this.placement === 'bottom-end') {
        return 'slide-up';
      } else {
        return 'slide-down';
      }
    }
  },
  methods: {
    handleClose() {
      if (this.open !== null) return;
      //                if (!this.disableClickOutSide) this.visible = false;
      this.visible = false;
      this.disableClickOutSide = false;
    },
    handleFocus() {
      let date = new Date();
      let nowString = `${date.getHours()}:${date.getMinutes()}`;
      // for (let v of this.timeScale) {
      //   if (v.value.split('~')[0] >= nowString) {
      //     this.disabledselect.push(v.label)
      //   }
      // }

      if (this.readonly) return;
      // this.visible = true;
    },
    handleInputChange(event) {

    },
    handleInputMouseenter() {
      if (this.readonly || this.disabled) return;
      if (this.visualValue && this.clearable) {
        this.showClose = true;
      }
    },
    handleInputMouseleave() {
      this.showClose = false;
    },
    handleIconClick() {
      if (this.showClose) {
        this.handleClear();
      } else {
        this.handleFocus();
      }
    },
    /**
     * todo 增加点击切换打开隐藏方法
     */
    toggleOpen(){
      this.visible = !this.visible
    },
    handleClear() {
      this.visible = false;
      this.visualValue.value = '';
      this.visualValue.label = [];
      // this.currentValue = '';
      // this.$emit('selected','','');
    },
    outDate(val){
      this.currentValueval = val;
      this.$emit('out-date-all',val,this.button6);
      this.handleClose();
    }
  },
  watch: {
    visible(val) {

    },
    'radioList':{
      handler(val){
        this.typeName = val;
      },
      immediate:true
    },
    'value':{
      handler(val,oldval){
        let now = new Date(val.value);
        this.currentValue = val;
        this.currentValueval = getBeforeDate(1, now);
        this.$emit('out-date-all',this.currentValueval,this.button6);
      },
      deep:true
    },
    open(val) {
      if (val === true) {
        this.visible = val;
        this.$emit('on-open-change', true);
      } else if (val === false) {
        this.$emit('on-open-change', false);
      }
    }
  },
  beforeDestroy() {
    if (this.picker) {
      this.picker.$destroy();
    }
  },
  mounted() {
    if (this.open !== null) this.visible = this.open;
  }
};
</script>
