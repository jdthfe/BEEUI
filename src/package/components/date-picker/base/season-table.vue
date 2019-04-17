<template>
  <div :class="classes" @click="handleClick" style="width: 200px;">

    <div class="season-group">
      <!--<span :class="getCellCls(cells[3])"><em :cellidx="3">{{ tCell(cells[3].text) }}</em></span>-->
      <span :class="getCellCls(cells[0])"><em :cellidx="0">第一季度</em></span>
      <!--<span :class="getCellCls(cells[1])"><em :cellidx="1"></em></span>-->
      <!--<span :class="getCellCls(cells[2])"><em :cellidx="2"></em></span>-->
    </div>

    <div class="season-group">
      <span :class="getCellCls(cells[3])"><em :cellidx="3">第二季度</em></span>
      <!--<span :class="getCellCls(cells[4])"><em :cellidx="4"></em></span>-->
      <!--<span :class="getCellCls(cells[5])"><em :cellidx="5"></em></span>-->
    </div>

    <div class="season-group">
      <span :class="getCellCls(cells[6])"><em :cellidx="6">第三季度</em></span>
      <!--<span :class="getCellCls(cells[7])"><em :cellidx="7"></em></span>-->
      <!--<span :class="getCellCls(cells[8])"><em :cellidx="8"></em></span>-->
    </div>

    <div class="season-group">
      <span :class="getCellCls(cells[9])"><em :cellidx="9">第四季度</em></span>
      <!--<span :class="getCellCls(cells[10])"><em :cellidx="10"></em></span>-->
      <!--<span :class="getCellCls(cells[11])"><em :cellidx="11"></em></span>-->
    </div>

  </div>
</template>
<script>
  import { deepCopy } from '../../../utils/assist';
  import Locale from '../../../mixins/locale';
  const prefixCls = 'ga-date-picker-cells';

  export default {
    mixins: [ Locale ],
    data() {
      return {
        yearSelect: '',
      }
    },
    props: {
      date: {},
      season: {
        type: Number
      },
      disabledDate: {},
      selectionMode: {
        default: 'season'
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-season`
        ];
      },
      cells () {
        let cells = [];
        const cell_tmpl = {
          text: '',
          selected: false,
          disabled: false
        };

        let monthForSeason = 0;

        for (let i = 0; i < 12; i++) {
          const cell = deepCopy(cell_tmpl);
          cell.text = i + 1;

          const date = new Date(this.date);
          date.setMonth(i);
          cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date)  && this.selectionMode === 'season';

          switch (this.season){
            case 0: case 1:case 2:
            monthForSeason = 0;
            break;
            case 3: case 4: case 5:
            monthForSeason = 3;
            break;
            case 6: case 7: case 8:
            monthForSeason = 6;
            break;
            case 9: case 10: case 11:
            monthForSeason = 9;
            break;
            default:
              monthForSeason = 0;
          }

          cell.selected = this.season !== null && Number(monthForSeason) === i;

//          cell.selected = Number(this.season) === i;
          cells.push(cell);
        }

        return cells;
      }
    },
    methods: {
      getCellCls (cell) {
        return [
          `${prefixCls}-cell`,
          {
            [`${prefixCls}-cell-selected`]: cell.selected,
            [`${prefixCls}-cell-disabled`]: cell.disabled
          }
        ];
      },
      handleClick (event) {
        const target = event.target;
        let season = 0;
        if (target.tagName === 'EM') {
          const index = parseInt(event.target.getAttribute('cellidx'));
          const cell = this.cells[index];

          if (cell.disabled) return;

          switch (index){
            case 0: case 1:case 2:
              season = 0;
              break;
            case 3: case 4: case 5:
              season = 3;
              break;
            case 6: case 7: case 8:
              season = 6;
              break;
            case 9: case 10: case 11:
              season = 9;
              break;
            default:
              season = 12;
          }

          this.$emit('on-pick', season);
        }
        this.$emit('on-pick-click');
      },
      tCell (cell) {
        return this.t(`i.datepicker.months.m${cell}`);
      }
    }
  };
</script>
