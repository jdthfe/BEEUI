<template>
  <div style="width:519px" :class="classes">
    <div class="time-scale">
      <div :class="item.selected?'time-scale-group time-scale-group-active':'time-scale-group'" style="display:inline-block" v-for="(item,index) in readGroupCells" :key="index">
        <strong>{{item.value}}</strong>
        <span :class="getCellStyle(cell)" v-for="(cell, index) in item.children" :key="index" @click="handleClick(cell,index)"><em>{{ cell.value }}</em></span>
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

const prefixCls = 'ga-time-scale-cells';

let oldlabel = '';
let Index = 0;

export default {
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
          value:'',
          label:''
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
      selectCells: [],
      selectCellsLabels: [],
      determinetxt: '确定',
      readGroupCells: [{
        value: '0',
        label: '',
        children: [{
          value: '00:00~00:29',
          label: '1',
          selected: false,
          disabled: false,
        }, {
          value: '00:30~00:59',
          selected: false,
          disabled: false,
          label: '2',
        }, {
          value: '01:00~01:29',
          selected: false,
          disabled: false,
          label: '3'
        }, {
          value: '01:30~01:59',
          selected: false,
          disabled: false,
          label: '4'
        }, {
          value: '02:00~02:29',
          selected: false,
          disabled: false,
          label: '5'
        }, {
          value: '02:30~02:59',
          label: '6'
        }]
      }, {
        value: '3',
        label: '',
        children: [{
          value: '03:00~03:29',
          selected: false,
          disabled: false,
          label: '7'
        }, {
          value: '03:30~03:59',
          selected: false,
          disabled: false,
          label: '8'
        }, {
          value: '04:00~04:29',
          selected: false,
          disabled: false,
          label: '9'
        }, {
          value: '04:30~04:59',
          selected: false,
          disabled: false,
          label: '10'
        }, {
          value: '05:00~05:29',
          selected: false,
          disabled: false,
          label: '11'
        }, {
          value: '05:30~05:59',
          selected: false,
          disabled: false,
          label: '12'
        }]
      }, {
        value: '6',
        label: '',
        children: [{
          value: '06:00~06:29',
          selected: false,
          disabled: false,
          label: '13'
        }, {
          value: '06:30~06:59',
          selected: false,
          disabled: false,
          label: '14'
        }, {
          value: '07:00~07:29',
          selected: false,
          disabled: false,
          label: '15'
        }, {
          value: '07:30~07:59',
          selected: false,
          disabled: false,
          label: '16'
        }, {
          value: '08:00~08:29',
          selected: false,
          disabled: false,
          label: '17'
        }, {
          value: '08:30~08:59',
          selected: false,
          disabled: false,
          label: '18'
        }]
      }, {
        value: '9',
        label: '',
        children: [{
          value: '09:00~09:29',
          selected: false,
          disabled: false,
          label: '19'
        }, {
          value: '09:30~09:59',
          selected: false,
          disabled: false,
          label: '20'
        }, {
          value: '10:00~10:29',
          selected: false,
          disabled: false,
          label: '21'
        }, {
          value: '10:30~10:59',
          selected: false,
          disabled: false,
          label: '22'
        }, {
          value: '11:00~11:29',
          selected: false,
          disabled: false,
          label: '23'
        }, {
          value: '11:30~11:59',
          selected: false,
          disabled: false,
          label: '24'
        }]
      }, {
        value: '12',
        label: '',
        children: [{
          value: '12:00~12:29',
          selected: false,
          disabled: false,
          label: '25'
        }, {
          value: '12:30~12:59',
          selected: false,
          disabled: false,
          label: '26'
        }, {
          value: '13:00~13:29',
          selected: false,
          disabled: false,
          label: '27'
        }, {
          value: '13:30~13:59',
          selected: false,
          disabled: false,
          label: '28'
        }, {
          value: '14:00~14:29',
          selected: false,
          disabled: false,
          label: '29'
        }, {
          value: '14:30~14:59',
          selected: false,
          disabled: false,
          label: '30'
        }]
      }, {
        value: '15',
        label: '',
        children: [{
          value: '15:00~15:29',
          selected: false,
          disabled: false,
          label: '31'
        }, {
          value: '15:30~15:59',
          selected: false,
          disabled: false,
          label: '32'
        }, {
          value: '16:00~16:29',
          selected: false,
          disabled: false,
          label: '33'
        }, {
          value: '16:30~16:59',
          selected: false,
          disabled: false,
          label: '34'
        }, {
          value: '17:00~17:29',
          selected: false,
          disabled: false,
          label: '35'
        }, {
          value: '17:30~17:59',
          selected: false,
          disabled: false,
          label: '36'
        }]
      }, {
        value: '18',
        label: '',
        children: [{
          value: '18:00~18:29',
          selected: false,
          disabled: false,
          label: '37'
        }, {
          value: '18:30~18:59',
          selected: false,
          disabled: false,
          label: '38'
        }, {
          value: '19:00~19:29',
          selected: false,
          disabled: false,
          label: '39'
        }, {
          value: '19:30~19:59',
          selected: false,
          disabled: false,
          label: '40'
        }, {
          value: '20:00~20:29',
          selected: false,
          disabled: false,
          label: '41'
        }, {
          value: '20:30~20:59',
          selected: false,
          disabled: false,
          label: '42'
        }]
      }, {
        value: '21',
        label: '',
        children: [{
          value: '21:00~21:29',
          selected: false,
          disabled: false,
          label: '43'
        }, {
          value: '21:30~21:59',
          selected: false,
          disabled: false,
          label: '44'
        }, {
          value: '22:00~22:29',
          selected: false,
          disabled: false,
          label: '45'
        }, {
          value: '22:30~22:59',
          selected: false,
          disabled: false,
          label: '46'
        }, {
          value: '23:00~23:29',
          selected: false,
          disabled: false,
          label: '47'
        }, {
          value: '23:30~23:59',
          selected: false,
          disabled: false,
          label: '48'
        }]
      }]
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
      handler(val,oldval) {
        if (val) {
          this.removeArray()
          for (let v of this.readGroupCells) {
            for (let vv of v.children) {
              if (Number(val.label) >= Number(vv.label) && !vv.disabled) {
                vv.selected = true;
                this.selectCells.push(vv);
                this.selectCellsLabels.push(Number(vv.label))
              }
            }
          }
          this.$emit('scale-selected', this.selectCells, this.selectCellsLabels);
          // oldlabel = this.selectCellsLabels[0]
        }
      },
      deep: true
    },
    // 'visualValue': {
    //   handler(val) {
    //     if (!val.label.length) {
    //       for (let v of this.readGroupCells) {
    //         for (let vv of v.children) {
    //           vv.selected = false;
    //           // vv.disabled = false;
    //           // this.selectCells = [];
    //           // this.selectCellsLabels = [];
    //         }
    //       }
    //       oldlabel = '';
    //       this.removeArray()

    //       this.$emit('scale-selected', this.selectCells, this.selectCellsLabels);
    //     }
    //   },
    //   deep: true
    // }
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

      if (Index % 2 === 0) {
        for (let v of this.readGroupCells) {
          for (let vv of v.children) {
            if (cell.label === vv.label) {
              vv.selected = true;
            } else {
              vv.selected = false;
            }

          }
        }
        this.selectCells.push(cell);
        this.selectCellsLabels.push(Number(cell.label))
      } else {
        for (let v of this.readGroupCells) {
          for (let vv of v.children) {
            if (Number(oldlabel) < Number(cell.label)) {
              if ((Number(vv.label) >= Number(oldlabel)) && (Number(cell.label) >= Number(vv.label))) {
                vv.selected = true;
                this.selectCells.push(vv);
                this.selectCellsLabels.push(Number(vv.label))
              } else {
                vv.selected = false;
              }

            } else {
              if ((Number(vv.label) >= Number(cell.label)) && (Number(oldlabel) >= Number(vv.label))) {
                vv.selected = true;
                this.selectCells.push(vv);
                this.selectCellsLabels.push(Number(vv.label))
              } else {
                vv.selected = false;
              }

            }

          }
        }
      }

      oldlabel = cell.label;

      ++Index;


      // if (oldlabel === cell.label) {
      //   cell.selected = !cell.selected;
      // } else {
      //   cell.selected = true;
      // }

      // if (cell.selected) {
      //   this.selectCells.push(cell);
      //   this.selectCellsLabels.push(Number(cell.label))
      // } else {
      //   for (let v of Object.keys(this.selectCells)) {
      //     if (this.selectCells[v].label === cell.label) {
      //       this.selectCells.splice(v, 1)
      //       this.selectCellsLabels.splice(v, 1)
      //       break;
      //     }
      //   }
      // }

    },
    determineClick() {
      if (isContinuationInteger(this.selectCellsLabels)) {
        if (this.currentValueval !== '') {
          this.$emit('scale-selected', this.selectCells, this.selectCellsLabels, 'determine');
        } else {
          this.$emit('scale-selected', this.selectCells, this.selectCellsLabels);
        }

      } else {
        vMessage.success('请选择连续的时刻！')
      }
    },
    getCellStyle(cell) {
      return {
        ['selected']: cell.selected,
        ['disabled']: cell.disabled,
      }
    }

  }
};
</script>
