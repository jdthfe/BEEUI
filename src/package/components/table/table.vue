<template>
  <div :class="wrapClasses" :style="styles">
    <div :class="classes">
      <div :class="[prefixCls + '-title']" v-if="showSlotHeader" ref="title">
        <slot name="header"></slot>
      </div>
      <div :class="[prefixCls + '-header']" v-if="showHeader" ref="header" @mousewheel="handleMouseWheel">
        <table-new-head :prefix-cls="prefixCls" :styleObject="tableStyle" :columns="cloneColumns" :obj-data="objData" :columns-width="columnsWidth" :theader="theader" :data="rebuildData"></table-new-head>
      </div>
      <div :class="[prefixCls + '-body']" :style="bodyStyle" ref="body" @scroll="handleBodyScroll" v-show="!((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
        <table-body ref="tbody" :prefix-cls="prefixCls" :styleObject="tableStyle" :columns="cloneColumns" :data="rebuildData" :columns-width="columnsWidth" :obj-data="objData" :theader="theader"></table-body>
      </div>
      <div :class="[prefixCls + '-tip']" v-show="((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td :style="{ 'height': bodyStyle.height }">
                <span :title="localeNoDataText" v-html="localeNoDataText" v-if="!data || data.length === 0"></span>
                <span :title="localeNoFilteredDataText" v-html="localeNoFilteredDataText" v-else></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="[prefixCls + '-fixed']" :style="fixedTableStyle" v-if="isLeftFixed">
        <div :class="[prefixCls + '-fixed-header']" ref="fixedHeader" v-if="showHeader">
          <table-new-head fixed="left" :prefix-cls="prefixCls" :styleObject="fixedTableStyle" :columns="leftFixedColumns" :obj-data="objData" :theader="theader" :columns-width.sync="columnsWidth" :data="rebuildData"></table-new-head>
        </div>
        <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedBody">
          <table-body fixed="left" :prefix-cls="prefixCls" :styleObject="fixedTableStyle" :columns="leftFixedColumns" :data="rebuildData" :columns-width="columnsWidth" :obj-data="objData"></table-body>
        </div>
      </div>
      <div :class="[prefixCls + '-fixed-right']" :style="fixedRightTableStyle" v-if="isRightFixed">
        <div :class="[prefixCls + '-fixed-header']" ref="fixedHeaderRight" v-if="showHeader">
          <table-new-head fixed="right" :prefix-cls="prefixCls" :styleObject="fixedRightTableStyle" :columns="rightFixedColumns" :obj-data="objData" :theader="theader" :columns-width="columnsWidth" :data="rebuildData"></table-new-head>
        </div>
        <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedRightBody">
          <table-body fixed="right" :prefix-cls="prefixCls" :styleObject="fixedRightTableStyle" :columns="rightFixedColumns" :data="rebuildData" :columns-width="columnsWidth" :obj-data="objData"></table-body>
        </div>
      </div>
      <div :class="[prefixCls + '-footer']" v-if="showSlotFooter" ref="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import tableNewHead from './table-new-head.vue';
import tableBody from './table-body.vue';
import {
  oneOf,
  getStyle,
  deepCopy,
  getScrollBarSize,
  decimal,
  unformatMoney
} from '../../utils/assist';
import { on, off } from '../../utils/dom';

import Csv from '../../utils/csv';
import ExportCsv from './export-csv';
import Locale from '../../mixins/locale';
import vInput from '../input/input.vue';

const prefixCls = 'ga-table';

let rowKey = 1;
let columnKey = 1;

export default {
  name: 'Table',
  mixins: [Locale],
  components: {
    tableNewHead,
    tableBody,
    vInput
  },
  props: {
    highlightRowIndex: {
      type: String,
      default () {
        return ''
      },
      require: false
    },
    initsort: {
      type: Object,
      default () {
        return {
          column: '',
          sort: ''
        }
      }
    },
    data: {
      type: Array,
      default () {
        return [];
      }
    },
    columns: {
      type: Array,
      default () {
        return [];
      }
    },
    theader: {
      type: Array,
      default () {
        return [];
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default']);
      }
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default () {
        return '';
      }
    },
    context: {
      type: Object
    },
    noDataText: {
      type: String
    },
    noFilteredDataText: {
      type: String
    },
  },
  data() {
    return {
      ready: false,
      tableWidth: 0,
      columnsWidth: {},
      prefixCls: prefixCls,
      compiledUids: [],
      objData: this.makeObjData(), // checkbox or highlight-row
      rebuildData: [], // for sort or filter
      cloneColumns: this.makeColumns(),
      showSlotHeader: true,
      showSlotFooter: true,
      bodyHeight: 0,
      bodyRealHeight: 0,
      scrollBarWidth: getScrollBarSize(),
      currentContext: this.context,
      cloneData: deepCopy(this.data), // when Cell has a button to delete row data, clickCurrentRow will throw an error, so clone a data
    };
  },
  computed: {
    localeNoDataText() {
      if (this.noDataText === undefined) {
        return this.t('i.table.noDataText');
      } else {
        return this.noDataText;
      }
    },
    localeNoFilteredDataText() {
      if (this.noFilteredDataText === undefined) {
        return this.t('i.table.noFilteredDataText');
      } else {
        return this.noFilteredDataText;
      }
    },
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`, {
          [`${prefixCls}-hide`]: !this.ready,
          [`${prefixCls}-with-header`]: this.showSlotHeader,
          [`${prefixCls}-with-footer`]: this.showSlotFooter
        }
      ];
    },
    classes() {
      return [
        `${prefixCls}`, {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-border`]: this.border,
          [`${prefixCls}-stripe`]: this.stripe,
          [`${prefixCls}-with-fixed-top`]: !!this.height
        }
      ];
    },
    styles() {
      let style = {};
      if (this.height) {
        const height = (this.isLeftFixed || this.isRightFixed) ? parseInt(this.height) + this.scrollBarWidth : parseInt(this.height);
        /**
         * 复杂表头的的高度
         */
        if (!this.theader) {
          style.height = `${height}px`;
        }
      }
      if (this.width) style.width = `${this.width}px`;
      return style;
    },
    tableStyle() {
      let style = {};
      if (this.tableWidth !== 0) {
        let width = '';
        if (this.bodyHeight === 0) {
          width = this.tableWidth;
        } else {
          if (this.bodyHeight > this.bodyRealHeight) {
            width = this.tableWidth;
          } else {
            width = this.tableWidth - this.scrollBarWidth;
          }
        }
        //                    const width = this.bodyHeight === 0 ? this.tableWidth : this.tableWidth - this.scrollBarWidth;
        style.width = `${width}px`;
      }
      return style;
    },
    fixedTableStyle() {
      let style = {};
      let width = 0;
      this.leftFixedColumns.forEach((col) => {
        if (col.fixed && col.fixed === 'left') width += col._width;
      });
      style.width = `${width}px`;
      return style;
    },
    fixedRightTableStyle() {
      let style = {};
      let width = 0;
      this.rightFixedColumns.forEach((col) => {
        if (col.fixed && col.fixed === 'right') width += col._width;
      });
      width += this.scrollBarWidth;
      style.width = `${width}px`;
      return style;
    },
    bodyStyle() {
      let style = {};
      if (this.bodyHeight !== 0) {
        // add a height to resolve scroll bug when browser has a scrollBar in fixed type and height prop
        const height = (this.isLeftFixed || this.isRightFixed) ? this.bodyHeight + this.scrollBarWidth : this.bodyHeight;
        style.height = `${height}px`;
      }
      return style;
    },
    fixedBodyStyle() {
      let style = {};
      if (this.bodyHeight !== 0) {
        let height = this.bodyHeight + this.scrollBarWidth - 1;

        if (this.width && this.width < this.tableWidth) {
          height = this.bodyHeight;
        }
        //                    style.height = this.scrollBarWidth > 0 ? `${this.bodyHeight}px` : `${this.bodyHeight - 1}px`;
        style.height = this.scrollBarWidth > 0 ? `${height}px` : `${height - 1}px`;
      }
      return style;
    },
    leftFixedColumns() {
      let left = [];
      let other = [];
      this.cloneColumns.forEach((col) => {
        if (col.fixed && col.fixed === 'left') {
          left.push(col);
        } else {
          other.push(col);
        }
      });
      return left.concat(other);
    },
    rightFixedColumns() {
      let right = [];
      let other = [];
      this.cloneColumns.forEach((col) => {
        if (col.fixed && col.fixed === 'right') {
          right.push(col);
        } else {
          other.push(col);
        }
      });
      return right.concat(other);
    },
    isLeftFixed() {
      return this.columns.some(col => col.fixed && col.fixed === 'left');
    },
    isRightFixed() {
      return this.columns.some(col => col.fixed && col.fixed === 'right');
    }
  },
  methods: {
    rowClsName(index) {
      return this.rowClassName(this.data[index], index);
    },
    handleResize() {
      this.$nextTick(() => {
        const allWidth = !this.columns.some(cell => !cell.width); // each column set a width
        if (allWidth && this.columns.length) {
          this.tableWidth = this.columns.map(cell => cell.width).reduce((a, b) => a + b);
        } else {
          this.tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
        }
        this.columnsWidth = {};
        this.$nextTick(() => {
          let columnsWidth = {};
          let autoWidthIndex = -1;
          if (allWidth) autoWidthIndex = this.cloneColumns.findIndex(cell => !cell.width); //todo 这行可能有问题

          if (this.data.length && this.$refs.tbody.$el.querySelectorAll('tbody tr')[0]) {

            const $td = this.$refs.tbody.$el.querySelectorAll('tbody tr')[0].querySelectorAll('td');
            for (let i = 0; i < $td.length; i++) { // can not use forEach in Firefox
              const column = this.cloneColumns[i];

              let width = parseInt(getStyle($td[i], 'width'));
              if (i === autoWidthIndex) {
                width = parseInt(getStyle($td[i], 'width')) - 1;
              }
              if (column.width) width = column.width;

              this.cloneColumns[i]._width = width;

              columnsWidth[column._index] = {
                width: width
              };
            }
            this.columnsWidth = columnsWidth;
          }
        });
        // get table real height,for fixed when set height prop,but height < table's height,show scrollBarWidth
        this.bodyRealHeight = parseInt(getStyle(this.$refs.tbody.$el, 'height'));
      });
    },
    handleMouseIn(_index) {
      if (this.objData[_index]._isHover) return;
      this.objData[_index]._isHover = true;
    },
    handleMouseOut(_index) {
      this.objData[_index]._isHover = false;
    },
    highlightCurrentRow(_index) {
      if (!this.highlightRow || this.objData[_index]._isHighlight) return;
      let oldIndex = -1;
      for (let i in this.objData) {
        if (this.objData[i]._isHighlight) {
          oldIndex = parseInt(i);
          this.objData[i]._isHighlight = false;
        }
      }
      this.objData[_index]._isHighlight = true;
      this.cloneData[_index]['_index'] = _index
      const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[oldIndex]));
      // this.$emit('on-current-change', oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[_index])), oldData);
      this.$emit('on-current-change', JSON.parse(JSON.stringify(this.cloneData[_index])), oldData);
    },
    clickCurrentRow(_index) {
      this.highlightCurrentRow(_index);
      const tempRowData = Object.assign({}, this.cloneData[_index], { rowIndex: _index });
      this.$emit('on-row-click', JSON.parse(JSON.stringify(tempRowData)));
    },
    dblclickCurrentRow(_index) {
      this.highlightCurrentRow(_index);
      this.$emit('on-row-dblclick', JSON.parse(JSON.stringify(this.cloneData[_index])));
    },
    getSelection() {
      let selectionIndexes = [];
      for (let i in this.objData) {
        if (this.objData[i]._isChecked) selectionIndexes.push(parseInt(i));
      }
      return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)));
    },
    toggleSelect(_index) {
      let data = {};

      for (let i in this.objData) {
        if (parseInt(i) === _index) {
          data = this.objData[i];
        }
      }
      const status = !data._isChecked;

      this.objData[_index]._isChecked = status;

      const selection = this.getSelection();
      if (status) {
        this.$emit('on-select', selection, JSON.parse(JSON.stringify(this.data[_index])));
      }
      this.$emit('on-selection-change', selection);
    },
    selectAll(status) {
      // this.rebuildData.forEach((data) => {
      //     if(this.objData[data._index]._isDisabled){
      //         this.objData[data._index]._isChecked = false;
      //     }else{
      //         this.objData[data._index]._isChecked = status;
      //     }

      // });
      for (const data of this.rebuildData) {
        if (this.objData[data._index]._isDisabled) {
          continue;
        } else {
          this.objData[data._index]._isChecked = status;
        }
      }
      const selection = this.getSelection();
      if (status) {
        this.$emit('on-select-all', selection);
      }
      this.$emit('on-selection-change', selection);
    },
    fixedHeader() {
      if (this.height) {
        this.$nextTick(() => {
          const titleHeight = parseInt(getStyle(this.$refs.title, 'height')) || 0;
          const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0;
          const footerHeight = parseInt(getStyle(this.$refs.footer, 'height')) || 0;
          this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight;
        });
      } else {
        this.bodyHeight = 0;
      }
    },
    hideColumnFilter() {
      this.cloneColumns.forEach((col) => col._filterVisible = false);
    },
    handleBodyScroll(event) {
      if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft;
      if (this.isLeftFixed) this.$refs.fixedBody.scrollTop = event.target.scrollTop;
      if (this.isRightFixed) this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
      this.hideColumnFilter();
    },
    handleMouseWheel(event) {
      const deltaX = event.deltaX;
      const $body = this.$refs.body;

      if (deltaX > 0) {
        $body.scrollLeft = $body.scrollLeft + 10;
      } else {
        $body.scrollLeft = $body.scrollLeft - 10;
      }
    },
    sortData(data, type, index) {
      const key = this.cloneColumns[index].key;
      /**
       * 定义包含中文字符串检测正则表达式
       */
      const reg = /.*[\u4e00-\u9fa5]+.*$/
      data.sort((a, b) => {
        if (this.cloneColumns[index].sortMethod) {
          return this.cloneColumns[index].sortMethod(a[key], b[key], type);
        } else {
          if (type === 'asc') {
            // return a[key] > b[key] ? 1 : -1;

            if (a[key].toString().includes('%')) {
              return decimal(a[key]) / 100 > decimal(b[key]) / 100 ? 1 : -1;
            } else if (a[key].toString().includes(',')) {
              return unformatMoney(a[key]) > unformatMoney(b[key]) ? 1 : -1;
            } else {
              if (isNaN(a[key] * 1) && reg.test(a[key])) {
                return a[key] > b[key] ? 1 : -1;
              } else if (isNaN(a[key] * 1) && !reg.test(a[key])) {
                return new Date(a[key]) > new Date(b[key]) ? 1 : -1;
              } else {
                return a[key] * 1 > b[key] * 1 ? 1 : -1;
              }
            }
          } else if (type === 'desc') {
            // return a[key] < b[key] ? 1 : -1;

            if (a[key].toString().includes('%')) {
              return decimal(a[key]) / 100 <= decimal(b[key]) / 100 ? 1 : -1;
            } else if (a[key].toString().includes(',')) {
              return unformatMoney(a[key]) <= unformatMoney(b[key]) ? 1 : -1;
            } else {
              if (b[key].toString().includes('%')) {
                return decimal(a[key]) / 100 <= decimal(b[key]) / 100 ? 1 : -1;
              } else if (b[key].toString().includes(',')) {
                return unformatMoney(a[key]) <= unformatMoney(b[key]) ? 1 : -1;
              } else {
                if (isNaN(a[key] * 1) && reg.test(a[key])) {
                  return a[key] <= b[key] ? 1 : -1;
                } else if (isNaN(a[key] * 1) && !reg.test(a[key])) {
                  return new Date(a[key]) <= new Date(b[key]) ? 1 : -1;
                } else {
                  return a[key] * 1 <= b[key] * 1 ? 1 : -1;
                }
              }
            }
          }
        }
      });
      return data;
    },
    // handleSort(index, type) {
    //     this.cloneColumns.forEach((col) => col._sortType = 'normal');

    //     const key = this.cloneColumns[index].key;
    //     if (this.cloneColumns[index].sortable !== 'custom') { // custom is for remote sort
    //         if (type === 'normal') {
    //             this.rebuildData = this.makeDataWithFilter();
    //         } else {
    //             this.rebuildData = this.sortData(this.rebuildData, type, index);
    //         }
    //     }
    //     this.cloneColumns[index]._sortType = type;

    //     /**
    //      * todo 把索引值emit出去
    //      */
    //     this.$emit('on-sort-change', {
    //         index: index,
    //         column: JSON.parse(JSON.stringify(this.columns[this.cloneColumns[index]._index])),
    //         key: key,
    //         order: type
    //     });
    // },

    /**
     * todo 修改全部数据排序
     * 这里会有个性能问题，当设置为后端排序的时候，该方法初始化的时候依然会执行，后期有时间优化下
     */
    handleSort(index, type) {
      this.cloneColumns.forEach((col) => col._sortType = 'normal');

      const key = this.cloneColumns[index].key;
      if (this.cloneColumns[index].sortable !== 'custom') { // custom is for remote sort
        if (type === 'normal') {
          this.rebuildData = this.makeDataWithFilter();
        } else {
          this.rebuildData = this.sortData(this.rebuildData, type, index);
        }
      }
      this.cloneColumns[index]._sortType = type;

      /**
       * todo 把索引值emit出去
       */
      // this.$emit('on-sort-change', {
      //     index: index,
      //     column: JSON.parse(JSON.stringify(this.columns[this.cloneColumns[index]._index])),
      //     key: key,
      //     order: type
      // });
    },

    /**
     * todo 后端排序方法只是emit参数
     */
    handleServiceSort(index, type) {
      this.cloneColumns.forEach((col) => col._sortType = 'normal');
      const key = this.cloneColumns[index].key;
      this.cloneColumns[index]._sortType = type;
      /**
       * todo 把索引值emit出去
       */
      this.$emit('on-sort-change', {
        index: index,
        column: JSON.parse(JSON.stringify(this.columns[this.cloneColumns[index]._index])),
        key: key,
        order: type
      });
    },


    handleFilterHide(index) { // clear checked that not filter now
      if (!this.cloneColumns[index]._isFiltered) this.cloneColumns[index]._filterChecked = [];
    },
    filterData(data, column) {
      return data.filter((row) => {
        let status = !column._filterChecked.length;
        for (let i = 0; i < column._filterChecked.length; i++) {
          status = column.filterMethod(column._filterChecked[i], row);
          if (status) break;
        }
        return status;
      });
    },
    filterOtherData(data, index) {
      this.cloneColumns.forEach((col, colIndex) => {
        if (colIndex !== index) {
          data = this.filterData(data, col);
        }
      });
      return data;
    },
    handleFilter(index) {
      const column = this.cloneColumns[index];
      let filterData = this.makeDataWithSort();
      /**
       * 增加当前页面搜索后分页未更新 王奇增加开始
       */
      // filterData = this.getPageRows(filterData,this.pageSize,this.current);
      /**
       * 增加当前页面搜索后分页未更新 王奇增加结束
       */
      // filter others first, after filter this column
      filterData = this.filterOtherData(filterData, index);
      this.rebuildData = this.filterData(filterData, column);

      /**
       * 开始
       * 过滤后所有的数据需要emit外层page分页组件告诉它过滤后的数据条数，重新渲染分页
       */
      this.$emit('filterDataLength', this.rebuildData.length);
      /**
       * 结束
       */

      this.cloneColumns[index]._isFiltered = true;
      this.cloneColumns[index]._filterVisible = false;
    },
    handleFilterSelect(index, value) {
      this.cloneColumns[index]._filterChecked = [value];
      this.handleFilter(index);
    },
    handleFilterReset(index) {
      this.cloneColumns[index]._isFiltered = false;
      this.cloneColumns[index]._filterVisible = false;
      this.cloneColumns[index]._filterChecked = [];

      let filterData = this.makeDataWithSort();
      filterData = this.filterOtherData(filterData, index);
      this.rebuildData = filterData;
      /**
       * 开始
       * 过滤后所有的数据需要emit外层page分页组件告诉它过滤后的数据条数，重新渲染分页
       */
      this.$emit('filterDataLength', this.rebuildData.length);
      this.$emit('filterData', this.rebuildData);
      /**
       * 结束
       */
    },
    makeData() {
      let data = deepCopy(this.data);
      data.forEach((row, index) => {
        row._index = index;
        row._rowKey = rowKey++; // todo 自定义key方便内层使用
      });
      return data;
    },
    makeDataWithSort() {
      let data = this.makeData();
      let sortType = 'normal';
      let sortIndex = -1;
      let isCustom = false;

      for (let i = 0; i < this.cloneColumns.length; i++) {
        if (this.cloneColumns[i]._sortType !== 'normal') {
          sortType = this.cloneColumns[i]._sortType;
          sortIndex = i;
          isCustom = this.cloneColumns[i].sortable === 'custom';
          break;
        }
      }
      if (sortType !== 'normal' && !isCustom) data = this.sortData(data, sortType, sortIndex);
      return data;
    },
    makeDataWithFilter() {
      let data = this.makeData();
      this.cloneColumns.forEach(col => data = this.filterData(data, col));
      return data;
    },
    /**
     * 根据默认显示条数判断显示多少rows方法
     */
    // getPageRows(data, pagesize, currentpage) {
    //     let newAry = [];
    //     let pagess = pagesize * (currentpage ? currentpage - 1 : 0)
    //     newAry = data.slice(pagess, pagesize + pagess);
    //     return newAry;
    // },
    makeDataWithSortAndFilter() {
      let data = this.makeDataWithSort();
      // data = this.getPageRows(data, pagesize, currentpage);
      this.cloneColumns.forEach(col => data = this.filterData(data, col));
      return data;
    },
    makeObjData() {
      let data = {};
      this.data.forEach((row, index) => {
        const newRow = deepCopy(row); // todo 直接替换
        newRow._isHover = false;
        // todo wq修改 通过_disabled配置项来设置行不可选
        if (newRow._disabled) {
          newRow._isDisabled = newRow._disabled;
        } else {
          newRow._isDisabled = false;
        }
        if (newRow._checked) {
          newRow._isChecked = newRow._checked;
        } else {
          newRow._isChecked = false;
        }
        if (newRow._highlight) {
          newRow._isHighlight = newRow._highlight;
        } else {
          newRow._isHighlight = false;
        }
        data[index] = newRow;
      });
      return data;
    },
    makeColumns() {
      let columns = deepCopy(this.columns);
      let left = [];
      let right = [];
      let center = [];

      columns.forEach((column, index) => {
        column._index = index;
        column._columnKey = columnKey++; //todo 兼容vue2.4.0 自定义key
        column._width = column.width ? column.width : ''; // update in handleResize()
        column._sortType = 'normal';
        column._filterVisible = false;
        column._isFiltered = false;
        column._filterChecked = [];

        if ('filterMultiple' in column) {
          column._filterMultiple = column.filterMultiple;
        } else {
          column._filterMultiple = true;
        }
        if ('filteredValue' in column) {
          column._filterChecked = column.filteredValue;
          column._isFiltered = true;
        }

        if (column.fixed && column.fixed === 'left') {
          left.push(column);
        } else if (column.fixed && column.fixed === 'right') {
          right.push(column);
        } else {
          center.push(column);
        }
      });
      return left.concat(center).concat(right);
    },
    exportCsv(params) {
      if (params.filename) {
        if (params.filename.indexOf('.csv') === -1) {
          params.filename += '.csv';
        }
      } else {
        params.filename = 'table.csv';
      }

      let columns = [];
      let datas = [];
      if (params.columns && params.data) {
        columns = params.columns;
        datas = params.data;
      } else {
        columns = this.columns;
        if (!('original' in params)) params.original = true;
        datas = params.original ? this.data : this.rebuildData;
      }

      let noHeader = false;
      if ('noHeader' in params) noHeader = params.noHeader;

      const data = Csv(columns, datas, ',', noHeader);
      ExportCsv.download(params.filename, data);
    }
  },
  created() {
    if (!this.context) this.currentContext = this.$parent;
    this.showSlotHeader = this.$slots.header !== undefined;
    this.showSlotFooter = this.$slots.footer !== undefined;
    this.rebuildData = this.makeDataWithSortAndFilter();
    // window.vm = this;
  },
  mounted() {
    this.handleResize();
    this.fixedHeader();
    this.$nextTick(() => this.ready = true);
    // window.addEventListener('resize', this.handleResize, false);
    on(window, 'resize', this.handleResize);
    this.$on('on-visible-change', (val) => {
      if (val) {
        this.handleResize();
        this.fixedHeader();
      }
    });
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.handleResize, false);
    off(window, 'resize', this.handleResize);

  },
  watch: {
    data: {
      handler(val, oldval) {
        this.objData = this.makeObjData();
        this.rebuildData = this.makeDataWithSortAndFilter();
        this.handleResize();
        // here will trigger before clickCurrentRow, so use async
        this.$nextTick(() => {
          this.cloneData = deepCopy(this.data);
          /**
           * todo 点击单行下钻表格时候更新rebuildData数组内容
           */
          this.rebuildData = deepCopy(this.makeData());
        });
      },
      deep: true
    },
    columns: {
      handler() {
        // todo 这里有性能问题，可能是左右固定计算属性影响的
        this.cloneColumns = this.makeColumns();
        this.rebuildData = this.makeDataWithSortAndFilter();
        this.handleResize();
      },
      deep: true
    },
    initsort: {
      handler(val) {
        if (val.column === '' && val.sort === '') return
        this.handleSort(val.column, val.sort)
      },
      deep: true
    },
    height() {
      this.fixedHeader();
    },
    highlightRowIndex: {
      handler(val) {
        if (val !== '') {
          this.highlightCurrentRow(val);
        }
      },
      deep: true
    }
  }
};

</script>
