export default {
    methods: {
        alignCls (column, row = {}) {
            let cellClassName = '';
            if (row.cellClassName && column.key && row.cellClassName[column.key]) {
                cellClassName = row.cellClassName[column.key];
            }
            /**
             * row合并问题处理
             * 如果是三行合并，则0、3、6、9...依此类推显示
             * 如果是二行合并，则0、2、4、6、8...依此类推显示
             */
            let displayNone = '';
            if(Number(row.cellrowspan) === 3){
              displayNone = (row._index % 3 === 0)?'':`${this.prefixCls}-cell-none`;
            }else if (Number(row.cellrowspan) === 2){
              displayNone = (row._index % 2 === 0)?'':`${this.prefixCls}-cell-none`;
            }

            return [
                {
                    [`${displayNone}`]:(column.cellrowspan === row.cellrowspan),
                    [`${cellClassName}`]: cellClassName,    // cell className
                    [`${column.className}`]: column.className,    // column className
                    [`${this.prefixCls}-column-${column.align}`]: column.align,
                    [`${this.prefixCls}-hidden`]: (this.fixed === 'left' && column.fixed !== 'left') || (this.fixed === 'right' && column.fixed !== 'right') || (!this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'))
                }
            ];
        },
        isPopperShow (column) {
            return column.filters && ((!this.fixed && !column.fixed) || (this.fixed === 'left' && column.fixed === 'left') || (this.fixed === 'right' && column.fixed === 'right'));
        },
        /**
         * 增加tooltip判断
         * table使用
         */
        isTooltipShow (column) {
            return column.tip && ((!this.fixed && !column.fixed) || (this.fixed === 'left' && column.fixed === 'left') || (this.fixed === 'right' && column.fixed === 'right'));
        },
        setCellWidth (column, index, top) {
            let width = '';
            if (column.width) {
                width = column.width;
            } else if (this.columnsWidth[column._index]) {
                width = this.columnsWidth[column._index].width;
            }
            // when browser has scrollBar,set a width to resolve scroll position bug
            if (this.columns.length === index + 1 && top && this.$parent.bodyHeight !== 0) {
                width += this.$parent.scrollBarWidth;
            }
            // when fixed type,reset first right fixed column's width
            if (this.fixed === 'right') {
                const firstFixedIndex = this.columns.findIndex((col) => col.fixed === 'right');
                if (firstFixedIndex === index) width += this.$parent.scrollBarWidth;
            }
            // todo 2018-04-13 修改解决表头计算宽度错误问题
            if (width === '0') width = '';
            return width;
        }
    }
};
