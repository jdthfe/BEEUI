<template>
  <div style="width:418px" :class="classes">
    <div class="seven-time">
      <div :class="item.selected?'seven-time-group seven-time-group-active':'seven-time-group'" style="display:inline-block" v-for="(item,index) in readGroupCells" :key="index">
        <span :class="getCellStyle(item)" @click="handleClick(item,index)"><em>{{ item.value }}</em></span>
      </div>
    </div>
    <v-button type="primary" class="determine-btn" @click.native="determineClick">{{determinetxt}}</v-button>
  </div>
</template>
<script>
import {
  deepCopy,
  isContinuationInteger
} from '../../../utils/assist';
import vButton from '../../button/button.vue';
import vMessage from '../../message/index';

const prefixCls = 'ga-seven-time-cells';


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

function isLeapYear(year) {
  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
}

export default {
  name: 'sevenTime',
  components: {
    vButton
  },
  props: {
    disabledDate: {},
    rangeState: {
      default () {
        return {
          endDate: null,
          selecting: false
        };
      }
    },
    showbutton: {
      type: Boolean,
      default: true
    },
    value: {
      // type: Object,
      default () {
        return {
          value: '',
          label: ''
        }
      }
    },
    visualValue: {
      type: Object,
      default () {
        return {}
      }
    },
    disabledselect: {
      type: Array,
      default () {
        return []
      }
    },
    currentValueval: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      selectCells: '',
      selectCellsLabels: '',
      determinetxt: '确定',
      readGroupCells: [] //七天的数据和去年同期的数据
    };
  },
  watch: {
    'disabledselect': {
      handler(val) {
        if (val.length) {
          for (let v of this.readGroupCells) {
            for (let vv of v.children) {
              if (val.includes(vv.label)) {
                vv.disabled = true;
              } else {
                vv.disabled = false;
              }
            }
          }
        }
      },
      deep: true
    },
    'value': {
      handler(val, oldval) {
        if (val) {
          let nowArray = val.value.split('-');
          let now = new Date(val.value);
          for (let i = 1; i < 8; i++) {
            if(i === 1){
              this.readGroupCells.push({
                value: getBeforeDate(i, new Date(val.value)),
                selected:true,
                disabled:false
              })
            }else{
              this.readGroupCells.push({
                value: getBeforeDate(i, new Date(val.value)),
                selected:false,
                disabled:false
              })
            }

          }
          // 计算去年同日日期
          // 先判断今年是否是闰年，对二月进行特殊处理
          if(isLeapYear(nowArray[0]) && nowArray[1] === '02' && nowArray[2] === '29'){
            this.readGroupCells.push({
              value: `${new Date(val.value).getFullYear() - 1}-${nowArray[1]}-${nowArray[2]-1}`,
              selected:false,
              disabled:false
            })
          }else{
            this.readGroupCells.push({
              value: `${new Date(val.value).getFullYear() - 1}-${nowArray[1]}-${nowArray[2]}`,
              last:'last',
              selected:false,
              disabled:false
            })
          }

          this.selectCells = this.readGroupCells[0].value;
        }
      },
      deep: true
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`
      ];
    },
    cellclasses() {
      return [{
        [`${prefixCls}-disabled`]: this.disabled,
        [`${prefixCls}-selected`]: this.selected,
        [`${prefixCls}-divided`]: this.divided
      }];
    }
  },
  methods: {
    /**
     * 清空数组操作
     */
    removeArray() {
      this.selectCells = [];
      this.selectCellsLabels = [];
    },
    handleClick(cell) {
      if (cell.disabled) return


      this.removeArray();

      for (let v of this.readGroupCells) {
          if (cell.value === v.value) {
            v.selected = true;
          } else {
            v.selected = false;
          }
      }
      this.selectCells = cell.value;



    },
    determineClick() {
      this.$emit('out-date',this.selectCells);
    },
    getCellStyle(cell) {
      return {
        ['selected']: cell.selected,
        ['last']: cell.last,
        ['disabled']: cell.disabled,
      }
    }

  }
};
</script>
