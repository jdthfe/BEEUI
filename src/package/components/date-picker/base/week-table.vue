<template>
    <div style="width:230px" :class="classes" @click="handleClick" @mousemove="handleMouseMove">
        <div :class="[prefixCls + '-header']">
            <span>周</span>
            <span>{{ t('i.datepicker.weeks.mon') }}</span><span>{{ t('i.datepicker.weeks.tue') }}</span><span>{{ t('i.datepicker.weeks.wed') }}</span><span>{{ t('i.datepicker.weeks.thu') }}</span><span>{{ t('i.datepicker.weeks.fri') }}</span><span>{{ t('i.datepicker.weeks.sat') }}</span><span>{{ t('i.datepicker.weeks.sun') }}</span>
        </div>
        <div class="week-day">
            <div :class="item.selected?'week-day-group week-day-group-active':'week-day-group'" style="display:inline-block" v-for="item in readGroupCells">
                <template v-for="(cell, index) in item.week" v-if="index % 7 === 0">
                    <span :class="getCellCls(cell)"><em :cellidx="JSON.stringify(cell)">{{getYearWeekFn(cell.date)}}</em></span>
                    <span :class="getCellCls(cell)"><em :cellidx="JSON.stringify(cell)">{{ cell.text }}</em></span>
                </template>
                <template v-else>
                    <span :class="getCellCls(cell)"><em :cellidx="JSON.stringify(cell)">{{ cell.text }}</em></span>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import {
    getFirstDayOfMonth,
    getDayCountOfMonth
} from '../util';
import {
    deepCopy,
    getYearWeek,
    getNumOfWeeks
} from '../../../utils/assist';
import Locale from '../../../mixins/locale';

const prefixCls = 'ga-date-picker-cells';

const clearHours = function(time) {
    const cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

export default {
    name:'weekTable',
    mixins: [Locale],
    props: {
        date: {},
        year: {},
        month: {},
        selectionMode: {
            default: 'day'
        },
        disabledDate: {},
        minDate: {},
        maxDate: {},
        rangeState: {
            default () {
                return {
                    endDate: null,
                    selecting: false
                };
            }
        },
        value: ''
    },
    data() {
        return {
            prefixCls: prefixCls,
            readCells: [],
            readGroupCells: []
        };
    },
    watch: {
        'rangeState.endDate' (newVal) {
            this.markRange(newVal);
        },
        minDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = true;
                this.markRange(newVal);
            } else if (!newVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
            } else {
                this.markRange();
            }
        },
        maxDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
                //                    this.$emit('on-pick', {
                //                        minDate: this.minDate,
                //                        maxDate: this.maxDate
                //                    });
            }
        },
        cells: {
            handler(cells) {
                if(cells){
                    this.readCells = cells.cells;
                    this.readGroupCells = cells.newCells
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
        cells() {
            if (!this.year || !this.month && this.month !== 0) return
            const date = new Date(this.year, this.month, 1);
            let day = getFirstDayOfMonth(date); // day of first day
            day = (day === 0 ? 7 : day);
            const today = clearHours(new Date()); // timestamp of today
            const selectDay = clearHours(new Date(this.value)); // timestamp of selected day
            const minDay = clearHours(new Date(this.minDate));
            const maxDay = clearHours(new Date(this.maxDate));

            const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
            const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

            const disabledDate = this.disabledDate;

            let cells = [];
            const cell_tmpl = {
                text: '',
                type: '',
                weeks: '',
                date: '',
                selected: false,
                disabled: false,
                range: false,
                start: false,
                end: false
            };
            // if (day !== 7) {
                for (let i = 1; i < day; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'prev-month';
                    cell.text = dateCountOfLastMonth - (day - 1) + i;

                    let prevMonth = this.month - 1;
                    let prevYear = this.year;
                    if (this.month === 0) {
                        prevMonth = 11;
                        prevYear -= 1;
                    }
                    cell.date = new Date(this.year, prevMonth, dateCountOfLastMonth - (day - 1) + i);

                    const time = clearHours(new Date(prevYear, prevMonth, cell.text));
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }
            // }

            for (let i = 1; i <= dateCountOfMonth; i++) {
                const cell = deepCopy(cell_tmpl);
                const time = clearHours(new Date(this.year, this.month, i));
                cell.type = time === today ? 'today' : 'normal';
                cell.text = i;
                cell.selected = time === selectDay;
                cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                cell.range = time >= minDay && time <= maxDay;
                cell.start = this.minDate && time === minDay;
                cell.end = this.maxDate && time === maxDay;
                cell.date = new Date(this.year, this.month, i);

                cells.push(cell);
            }

            const nextMonthCount = 42 - cells.length;
            for (let m = 0; m < nextMonthCount; m++) {
                const cellnext = deepCopy(cell_tmpl);
                cellnext.type = 'next-month';
                cellnext.text = m + 1;

                let nextMonth = this.month + 1;
                let nextYear = this.year;
                if (this.month === 11) {
                    nextMonth = 0;
                    nextYear += 1;
                }
                cellnext.date = new Date(this.year, nextMonth, cellnext.text);

                const time = clearHours(new Date(nextYear, nextMonth, cellnext.text));
                cellnext.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                cells.push(cellnext);
            }

            /**
             * 按周增加分组
             */
            let newCells = []

            // for (let i = 0; i < 42; i++) {

            // }

            newCells = [{
                week: [
                    cells[0],
                    cells[1],
                    cells[2],
                    cells[3],
                    cells[4],
                    cells[5],
                    cells[6],
                ],
                selected: cells[0].selected || cells[1].selected || cells[2].selected || cells[3].selected || cells[4].selected || cells[5].selected || cells[6].selected
            }, {
                week: [cells[7], cells[8], cells[9], cells[10], cells[11], cells[12], cells[13]],
                selected: cells[7].selected || cells[8].selected || cells[9].selected || cells[10].selected || cells[11].selected || cells[12].selected || cells[13].selected
            }, {
                week: [cells[14], cells[15], cells[16], cells[17], cells[18], cells[19], cells[20]],
                selected: cells[14].selected || cells[15].selected || cells[16].selected || cells[17].selected || cells[18].selected || cells[19].selected || cells[20].selected
            }, {
                week: [cells[21], cells[22], cells[23], cells[24], cells[25], cells[26], cells[27]],
                selected: cells[21].selected || cells[22].selected || cells[23].selected || cells[24].selected || cells[25].selected || cells[26].selected || cells[27].selected
            }, {
                week: [cells[28], cells[29], cells[30], cells[31], cells[32], cells[33], cells[34]],
                selected: cells[28].selected || cells[29].selected || cells[30].selected || cells[31].selected || cells[32].selected || cells[33].selected || cells[34].selected
            }, {
                week: [cells[35], cells[36], cells[37], cells[38], cells[39], cells[40], cells[41]],
                selected: cells[35].selected || cells[36].selected || cells[37].selected || cells[38].selected || cells[39].selected || cells[40].selected || cells[41].selected
            }]

            return {
                newCells,
                cells
            };
        }
    },
    methods: {
        getYearWeekFn(val) {
            return getYearWeek(val)
        },
        getDateOfCell(cell) {
            let year = this.year;
            let month = this.month;
            let day = cell.text;

            const date = this.date;
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (cell.type === 'prev-month') {
                if (month === 0) {
                    month = 11;
                    year--;
                } else {
                    month--;
                }
            } else if (cell.type === 'next-month') {
                if (month === 11) {
                    month = 0;
                    year++;
                } else {
                    month++;
                }
            }

            return new Date(year, month, day, hours, minutes, seconds);
        },
        handleClick(event) {
            const target = event.target;
            if (target.tagName === 'EM') {
                // const cell = this.cells.cells[parseInt(event.target.getAttribute('index'))];
                const cell = JSON.parse(event.target.getAttribute('cellidx'));

                if (cell.disabled) return;

                const newDate = this.getDateOfCell(cell);

                if (this.selectionMode === 'range') {
                    if (this.minDate && this.maxDate) {
                        const minDate = new Date(newDate.getTime());
                        const maxDate = null;
                        this.rangeState.selecting = true;
                        this.markRange(this.minDate);

                        this.$emit('on-pick', {
                            minDate,
                            maxDate
                        }, false);
                    } else if (this.minDate && !this.maxDate) {
                        if (newDate >= this.minDate) {
                            const maxDate = new Date(newDate.getTime());
                            this.rangeState.selecting = false;

                            this.$emit('on-pick', {
                                minDate: this.minDate,
                                maxDate
                            });
                        } else {
                            const minDate = new Date(newDate.getTime());

                            this.$emit('on-pick', {
                                minDate,
                                maxDate: this.maxDate
                            }, false);
                        }
                    } else if (!this.minDate) {
                        const minDate = new Date(newDate.getTime());
                        this.rangeState.selecting = true;
                        this.markRange(this.minDate);

                        this.$emit('on-pick', {
                            minDate,
                            maxDate: this.maxDate
                        }, false);
                    }
                } else {
                    this.$emit('on-pick', newDate);
                }
            }
            this.$emit('on-pick-click');
        },
        handleMouseMove(event) {
            if (!this.rangeState.selecting) return;

            this.$emit('on-changerange', {
                minDate: this.minDate,
                maxDate: this.maxDate,
                rangeState: this.rangeState
            });

            const target = event.target;
            if (target.tagName === 'EM') {
                // const cell = this.cells.cells[parseInt(event.target.getAttribute('index'))];
                const cell = JSON.parse(event.target.getAttribute('cellidx'));

                //                    if (cell.disabled) return;    // todo 待确定
                this.rangeState.endDate = this.getDateOfCell(cell);
            }
        },
        markRange(maxDate) {
            const minDate = this.minDate;
            if (!maxDate) maxDate = this.maxDate;

            const minDay = clearHours(new Date(minDate));
            const maxDay = clearHours(new Date(maxDate));

            this.cells.cells.forEach(cell => {
                if (cell.type === 'today' || cell.type === 'normal') {
                    const time = clearHours(new Date(this.year, this.month, cell.text));
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = minDate && time === minDay;
                    cell.end = maxDate && time === maxDay;
                }
            });
        },
        getCellCls(cell) {
            return [
                `${prefixCls}-cell`, {
                    [`${prefixCls}-cell-selected`]: cell.selected || cell.start || cell.end,
                    [`${prefixCls}-cell-disabled`]: cell.disabled,
                    [`${prefixCls}-cell-today`]: cell.type === 'today',
                    [`${prefixCls}-cell-prev-month`]: cell.type === 'prev-month',
                    [`${prefixCls}-cell-next-month`]: cell.type === 'next-month',
                    [`${prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
                }
            ];
        },

    }
};
</script>
