import dateUtil from '../../utils/date';
import {getYearWeek} from '../../utils/assist';
import moment from 'moment'


export const toDate = function (date) {
  date = new Date(date);
  if (isNaN(date.getTime())) return null;
  return date;
};

export const formatDate = function (date, format) {

  // 增加月区间格式化显示
  if(format === 'yyyy-MR') {
    if(!date.start || !date.end) return ''
    return moment(date.start).format('YYYY-MM') + "至" + moment(date.end).format('YYYY-MM')
  }

  date = toDate(date);
  if (!date) return '';
  /**
   * todo 添加单独的格式化操作按周
   */
  if (format === 'yyyy-WW') return date.getFullYear() + '年第' + getYearWeek(date) + '周';

  /**
   * todo 添加单独的格式化操作按季度
   */
  if (format === 'yyyy-SS') {
    const month = date.getMonth();
    let season = '';

    switch (month) {
      case 0:case 1:case 2:
        season = '一';
        break;
      case 3:case 4:case 5:
        season = '二';
        break;
      case 6:case 7:case 8:
        season = '三';
        break;
      case 9:case 10:case 11:
        season = '四';
        break;
      default:
        season = '全';
    }

    return date.getFullYear() + '年第' + season + '季度';
  }

  return dateUtil.format(date, format || 'yyyy-MM-dd');
};

export const parseDate = function (string, format) {
  return dateUtil.parse(string, format || 'yyyy-MM-dd');
};

export const getDayCountOfMonth = function (year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

export const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

export const prevMonth = function (src) {
  const year = src.getFullYear();
  const month = src.getMonth();
  const date = src.getDate();

  const newYear = month === 0 ? year - 1 : year;
  const newMonth = month === 0 ? 11 : month - 1;

  const newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
  if (newMonthDayCount < date) {
    src.setDate(newMonthDayCount);
  }

  src.setMonth(newMonth);
  src.setFullYear(newYear);

  return new Date(src.getTime());
};

export const nextMonth = function (src) {
  const year = src.getFullYear();
  const month = src.getMonth();
  const date = src.getDate();

  const newYear = month === 11 ? year + 1 : year;
  const newMonth = month === 11 ? 0 : month + 1;

  const newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
  if (newMonthDayCount < date) {
    src.setDate(newMonthDayCount);
  }

  src.setMonth(newMonth);
  src.setFullYear(newYear);

  return new Date(src.getTime());
};

export const initTimeDate = function () {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};
