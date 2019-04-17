<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styles">
        <colgroup>
          <col v-for="(column, index) in columns" :key="column._index" :width="setCellWidth(column, index, true)">
        </colgroup>
        <thead>
          <tr role="row" v-if="theader.length">
            <th v-if="!column.hidden" :rowspan="column.rowspan" :colspan="column.colspan" v-for="(column, index) in theader" :key="index" :class="alignCls(column)">{{column.title}}</th>
          </tr>
          <tr role="row">
            <th v-if="!column.hidden" v-for="(column, index) in columns" :key="index" :class="alignCls(column)">
              <div :class="cellClasses(column)">
                <template v-if="column.type === 'selection'"><Checkbox :value="isSelectAll" @on-change="selectAll" v-if="!column.show">{{column.title}}</Checkbox><span v-if="column.show">{{column.title}}</span></template>
                <template v-else>
                    <span v-html="renderHeader(column, index)" :class="{on: column._sortType === 'desc'}" @click="handleSort(index, 'desc')"></span>
                    <span :class="[prefixCls + '-sort']" v-if="column.sortable">
                        <i class="ga-icon ga-icon-arrow-up-b" :class="{on: column._sortType === 'asc'}" @click="handleSort(index, 'asc')"></i>
                        <i class="ga-icon ga-icon-arrow-down-b" :class="{on: column._sortType === 'desc'}" @click="handleSort(index, 'desc')"></i>
                    </span>
                    <Poptip
                        v-if="isPopperShow(column)"
                        v-model="column._filterVisible"
                        placement="bottom"
                        @on-popper-hide="handleFilterHide(index)"
                        append-to-body>
                        <span :class="[prefixCls + '-filter']">
                            <i class="ga-icon ga-icon-funnel" :class="{on: column._isFiltered}"></i>
                        </span>
                        <div slot="content" :class="[prefixCls + '-filter-list']" v-if="column._filterMultiple">
                            <div :class="[prefixCls + '-filter-list-item']">
                                <checkbox-group v-model="column._filterChecked">
                                    <checkbox v-for="(item,index) in column.filters" :key="index" :label="item.value">{{ item.label }}</checkbox>
                                </checkbox-group>
                            </div>
                            <div :class="[prefixCls + '-filter-footer']">
                                <i-button type="text" size="small" :disabled="!column._filterChecked.length" @click.native="handleFilter(index)">{{ t('i.table.confirmFilter') }}</i-button>
                                <i-button type="text" size="small" @click.native="handleReset(index)">{{ t('i.table.resetFilter') }}</i-button>
                            </div>
                        </div>
                        <div slot="content" :class="[prefixCls + '-filter-list']" v-else>
                            <ul :class="[prefixCls + '-filter-list-single']">
                                <li
                                    :class="itemAllClasses(column)"
                                    @click="handleReset(index)">{{ t('i.table.clearFilter') }}</li>
                                <li
                                    :class="itemClasses(column, item)"
                                    v-for="(item,index) in column.filters"
                                    :key="index"
                                    @click="handleSelect(index, item.value,item.columns)">{{ item.label }}</li>
                            </ul>
                        </div>
                    </Poptip>
                    <Poptip 
                      trigger="hover" 
                      v-if="isTooltipShow(column)" 
                      :content="column.tip" 
                      placement="bottom"
                      append-to-body>
                        <Icon type="help-circled"></Icon>
                    </Poptip>
                </template>
              </div>
            </th>
          </tr>
        </thead>
    </table>
</template>
<script>
import CheckboxGroup from "../checkbox/checkbox-group.vue";
import Checkbox from "../checkbox/checkbox.vue";
import Poptip from "../poptip/poptip.vue";
import Tooltip from "../tooltip/tooltip.vue";
import Icon from "../icon/icon.vue";
import iButton from "../button/button.vue";
import Mixin from "./mixin";
import Locale from "../../mixins/locale";

export default {
  name: "TableHead",
  mixins: [Mixin, Locale],
  components: { CheckboxGroup, Checkbox, Poptip, iButton, Tooltip, Icon },
  props: {
    prefixCls: {
      type: String,
      default: "ga-table"
    },
    styleObject: Object,
    columns: Array,
    objData: Object,
    data: Array, // rebuildData
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    theader: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    styles() {
      const style = Object.assign({}, this.styleObject);
      const width =
        this.$parent.bodyHeight === 0
          ? parseInt(this.styleObject.width)
          : parseInt(this.styleObject.width) + this.$parent.scrollBarWidth;
      style.width = `${width}px`;
      return style;
    },
    isSelectAll() {
      let isSelectAll = true;
      if (!this.data.length) isSelectAll = false;
      for (let i = 0; i < this.data.length; i++) {
        if (
          !this.objData[this.data[i]._index]._isChecked &&
          !this.objData[this.data[i]._index]._isDisabled
        ) {
          isSelectAll = false;
          break;
        }
      }

      return isSelectAll;
    }
  },
  methods: {
    cellClasses(column) {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]:
            !this.fixed &&
            column.fixed &&
            (column.fixed === "left" || column.fixed === "right")
        }
      ];
    },
    itemClasses(column, item) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]:
            column._filterChecked[0] === item.value
        }
      ];
    },
    itemAllClasses(column) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]: !column
            ._filterChecked.length
        }
      ];
    },
    renderHeader(column, $index) {
      if ("renderHeader" in this.columns[$index]) {
        return this.columns[$index].renderHeader(column, $index);
      } else {
        return column.title || "#";
      }
    },
    selectAll() {
      const status = !this.isSelectAll;
      this.$parent.selectAll(status);
    },
    handleSort(index, type) {
      if (
        this.columns[index].sortable === null ||
        this.columns[index].sortable === undefined
      )
        return;
      if (this.columns[index]._sortType === type) {
        /**
         * todo 取消nomal配置项，只会存在desc和asc配置
         */
        type = type;
      }
      /**
       * sortable = custom 自定义排序
       * sortable = true 组件内部排序
       */
      if (this.columns[index].sortable === "custom") {
        this.$parent.handleServiceSort(index, type);
      } else {
        this.$parent.handleSort(index, type);
      }
    },
    handleFilter(index) {
      this.$parent.handleFilter(index);
    },
    handleSelect(index, value, columns) {
      // this.$parent.handleFilterSelect(index, value);
      /**
       * todo 修复自定义列过滤方法
       */
      this.$parent.handleFilterSelect(columns, value);
    },
    handleReset(index) {
      this.$parent.handleFilterReset(index);
    },
    handleFilterHide(index) {
      this.$parent.handleFilterHide(index);
    }
  }
};
</script>
