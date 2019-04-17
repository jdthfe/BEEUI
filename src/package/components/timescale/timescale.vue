<template>
  <div :class="[prefixCls]" v-clickoutside="handleClose">
    <div ref="reference" :class="[prefixCls + '-rel']">
      <slot>
        <i-input
          :class="[prefixCls + '-editor']"
          :readonly="!editable || readonly"
          :disabled="disabled"
          :placeholder="placeholder"
          :value="currentValueval || visualValue.value"
          @on-input-change="handleInputChange"
          @on-focus="handleFocus"
          @on-click="handleIconClick"
          @mouseenter.native="handleInputMouseenter"
          @mouseleave.native="handleInputMouseleave"
          @click.native="toggleOpen"
          :icon="iconType"></i-input>
      </slot>
    </div>
    <!-- <transition :name="transition"> -->
    <Drop v-show="opened" :placement="placement" ref="drop">
      <Scale @scale-selected="scaleSelected"
        :value='currentValue'
        :visualValue='visualValue'
        :disabledselect="disabledselectArray"
        :currentValueval="currentValueval">
      </Scale>
      <div style="position:absolute;left:10px;bottom:10px">
        <slot name="custombtn"></slot>
      </div>
    </Drop>
    <!-- </transition> -->
  </div>
</template>
<script>
import Vue from 'vue';
import iInput from '../../components/input/input.vue';
import Drop from '../../components/select/dropdown.vue';
import clickoutside from '../../directives/clickoutside';
import {
  oneOf,
  getYearWeek
} from '../../utils/assist';
// import { formatDate, parseDate } from './util';

import Scale from './base/scale.vue';

const prefixCls = 'ga-date-picker';

export default {
  name: 'TimeScale',
  components: {
    iInput,
    Drop,
    Scale
  },
  directives: {
    clickoutside
  },
  props: {
    readonly: {
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
      disabledselectArray:[],
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
      timeScale: [{
        value: '00:00~00:29',
        label: '1',
      }, {
        value: '00:30~00:59',
        label: '2',
      }, {
        value: '01:00~01:29',
        label: '3'
      }, {
        value: '01:30~01:59',
        label: '4'
      }, {
        value: '02:00~02:29',
        label: '5'
      }, {
        value: '02:30~02:59',
        label: '6'
      }, {
        value: '03:00~03:29',
        label: '7'
      }, {
        value: '03:30~03:59',
        label: '8'
      }, {
        value: '04:00~04:29',
        label: '9'
      }, {
        value: '04:30~04:59',
        label: '10'
      }, {
        value: '05:00~05:29',
        label: '11'
      }, {
        value: '05:30~05:59',
        label: '12'
      }, {
        value: '06:00~06:29',
        label: '13'
      }, {
        value: '06:30~06:59',
        label: '14'
      }, {
        value: '07:00~07:29',
        label: '15'
      }, {
        value: '07:30~07:59',
        label: '16'
      }, {
        value: '08:00~08:29',
        label: '17'
      }, {
        value: '08:30~08:59',
        label: '18'
      }, {
        value: '09:00~09:29',
        label: '19'
      }, {
        value: '09:30~09:59',
        label: '20'
      }, {
        value: '10:00~10:29',
        label: '21'
      }, {
        value: '10:30~10:59',
        label: '22'
      }, {
        value: '11:00~11:29',
        label: '23'
      }, {
        value: '11:30~11:59',
        label: '24'
      }, {
        value: '12:00~12:29',
        label: '25'
      }, {
        value: '12:30~12:59',
        label: '26'
      }, {
        value: '13:00~13:29',
        label: '27'
      }, {
        value: '13:30~13:59',
        label: '28'
      }, {
        value: '14:00~14:29',
        label: '29'
      }, {
        value: '14:30~14:59',
        label: '30'
      }, {
        value: '15:00~15:29',
        label: '31'
      }, {
        value: '15:30~15:59',
        label: '32'
      }, {
        value: '16:00~16:29',
        label: '33'
      }, {
        value: '16:30~16:59',
        label: '34'
      }, {
        value: '17:00~17:29',
        label: '35'
      }, {
        value: '17:30~17:59',
        label: '36'
      }, {
        value: '18:00~18:29',
        label: '37'
      }, {
        value: '18:30~18:59',
        label: '38'
      }, {
        value: '19:00~19:29',
        label: '39'
      }, {
        value: '19:30~19:59',
        label: '40'
      }, {
        value: '20:00~20:29',
        label: '41'
      }, {
        value: '20:30~20:59',
        label: '42'
      }, {
        value: '21:00~21:29',
        label: '43'
      }, {
        value: '21:30~21:59',
        label: '44'
      }, {
        value: '22:00~22:29',
        label: '45'
      }, {
        value: '22:30~22:59',
        label: '46'
      }, {
        value: '23:00~23:29',
        label: '47'
      }, {
        value: '23:30~23:59',
        label: '48'
      }]
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
    },
    // selectionMode() {
    //   if (this.type === 'month') {
    //     return 'month';
    //   } else if (this.type === 'year') {
    //     return 'year';
    //   } else if (this.type === 'week') {
    //     return 'week'
    //   }

    //   return 'day';
    // }
  },
  methods: {
    scaleSelected(val, num,str) {
      if (!val.length || !num.length) {
        this.$emit('selected', val, num);
        this.handleClose()
        return
      }
      if(str){
        this.currentValueval = '';
      }
      this.visualValue.value = val[0].value.split('~')[0] + '~' + val[val.length - 1].value.split('~')[1];
      this.visualValue.label = num
      this.$emit('selected', val, num);
      this.handleClose()
    },
    handleClose() {
      if (this.open !== null) return;
      //                if (!this.disableClickOutSide) this.visible = false;
      this.visible = false;
      this.disableClickOutSide = false;
    },
    handleFocus() {
      let date = new Date();
      // let nowString = `${date.getHours()>=10?date.getHours():'0'+date.getHours()}:${date.getMinutes()>=10?date.getMinutes():'0'+date.getMinutes()}`;
      this.disabledselectArray = Object.assign([],this.disabledselect);
      let nowString = moment().format('HH:mm')
      for (let v of this.timeScale) {
        if (v.value.split('~')[0] >= nowString) {
          this.disabledselectArray.push(v.label)
        }
      }
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
    showPicker() {


    },
    emitChange(date) {

    },
    formattingDate(date) {

    }
  },
  watch: {
    visible(val) {

    },
    internalValue(val) {

    },
    'disabledselect':{
      handler(val,oldval){
        this.disabledselectArray = Object.assign([],val);
      },
      deep:true
    },
    'value':{
      handler(val,oldval){
        this.currentValue = val;
        this.currentValueval = val.value;
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
