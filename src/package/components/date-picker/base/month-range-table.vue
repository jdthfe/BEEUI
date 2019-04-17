<template>
    <div :class="classes" @click="handleClick">
        <span 
          :class="getCellCls(cell)" v-for="(cell, index) in cells" 
          :key="index" @mousemove="monthRange">
            <em :cellidx="index">{{ tCell(cell.text) }}</em>
          </span>
    </div>
</template>
<script>
import moment from 'moment'
import { deepCopy } from "../../../utils/assist";
import Locale from "../../../mixins/locale";
const prefixCls = "ga-date-picker-cells";

export default {
  mixins: [Locale],
  props: {
    monthrange: {},
    disabledDate: {},
    date: {}
  },
  data() {
    return {
      flag: false,
      cells: [],
      indexArray: [],
      idxnum: ''
    }
  },
  computed: {
    classes() {
      return [`${prefixCls}`, `${prefixCls}-monthrange`];
    }
  },
  watch: {
    monthrange(val) {
      this.createCells()
      if(!val.start || !val.end) return
      this.displaySelected(moment(val.start).format('YYYY-M'), moment(val.end).format('YYYY-M'))
    },
    disabledDate() {
      if(this.monthrange && (this.monthrange.start || this.monthrange.end)) return
      this.createCells()
    }
  },
  mounted() {
    this.createCells()
  },
  methods: {
    createCells() {
      let cells = [];
      const cell_tmpl = {
        text: "",
        selected: false,
        disabled: false,
        hovered: false
      };

      for (let i = 0; i < 12; i++) {
        const cell = deepCopy(cell_tmpl);
        cell.text = i + 1;

        const date = new Date(this.date);
        date.setMonth(i);
        cell.disabled =
          typeof this.disabledDate === "function" &&
          this.disabledDate(date);
        cells.push(cell);
      }
      this.cells = cells
      
    },
    getCellCls(cell) {
      return [
        `${prefixCls}-cell`,
        {
          [`${prefixCls}-cell-selected`]: cell.selected,
          [`${prefixCls}-cell-hovered`]: cell.hovered,
          [`${prefixCls}-cell-disabled`]: cell.disabled
        }
      ];
    },
    handleClick(event) {
      const target = event.target;
      if(!this.indexArray.length) {
        this.createCells()
      }
      this.flag = true;
      if (target.tagName === "EM") {
        const index = parseInt(event.target.getAttribute("cellidx"));
        this.idxnum = index
        const cell = this.cells[index];
        this.cells[index].selected = true
        if (cell.disabled) return;
        this.indexArray.push(index)
        this.getHoverStyle('move', index, this.indexArray.length)
        if(this.indexArray.length === 2) {
          this.$emit("on-pick", this.indexArray);
        }
      }
      if(this.indexArray.length === 2) {
        this.$emit("on-pick-click");
        this.indexArray = []
        this.flag = false
      }
    },
    monthRange(event) {
      if(this.flag) {
        const target = event.target;
        if (target.tagName === 'EM') {
          const index = parseInt(event.target.getAttribute("cellidx"));
          this.getHoverStyle('move', index)
        }
      }
    },
    getHoverStyle(type, index, len = 0) {
      if(len) return
      for(let i = this.idxnum; i < index + 1; i++) {
        for(let v of Object.keys(this.cells)) {
          if(i > Number(v) && Number(v) > this.idxnum) {
            if(!this.cells[v].selected) this.cells[v].hovered = true
          } else {
            this.cells[v].hovered = false
          }
        }        
      }
    },
    displaySelected(start, end) {
      let stat = start.split('-')[1]
      let send = end.split('-')[1]
      for(let v of Object.keys(this.cells)) {
        if(Number(stat) < Number(v) + 1 && Number(send) > Number(v) + 1) {
          this.cells[v].hovered = true
        }
        if(Number(stat) === Number(v) + 1 || Number(send) === Number(v) + 1 ) {
          this.cells[v].selected = true
        }
      }
    }, 
    tCell(cell) {
      return this.t(`i.datepicker.months.m${cell}`);
    }
  }
};
</script>
