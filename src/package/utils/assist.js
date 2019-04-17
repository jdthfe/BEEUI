import Vue from 'vue';
import moment from 'moment';
const isServer = Vue.prototype.$isServer;
// 判断参数是否是其中之一
export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

export function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
let cached;
export function getScrollBarSize(fresh) {
    if (isServer) return 0;

    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

// watch DOM change
// export const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;
export const MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
export function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
}

// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}
export { firstUpperCase };

// Warn
export function warnProp(component, prop, correctType, wrongType) {
    correctType = firstUpperCase(correctType);
    wrongType = firstUpperCase(wrongType);
    console.error(`[iView warn]: Invalid prop: type check failed for prop ${prop}. Expected ${correctType}, got ${wrongType}. (found in component: ${component})`); // eslint-disable-line
}

function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}

export { deepCopy };

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) return;

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

// Find components upward
function findComponentUpward(content, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = content.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
export { findComponentUpward };

// Find component downward
function findComponentDownward(content, componentName) {
    const childrens = content.$children;
    let children = null;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
            }
        });

        for (let i = 0; i < childrens.length; i++) {
            const child = childrens[i];
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}
export { findComponentDownward };

// Find components downward
function findComponentsDownward(content, componentName, components = []) {
    const childrens = content.$children;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            const childs = child.$children;

            if (name === componentName) components.push(child);
            if (childs.length) {
                const findChilds = findComponentsDownward(child, componentName, components);
                if (findChilds) components.concat(findChilds);
            }
        });
    }
    return components;
}
export { findComponentsDownward };

/**
 * 将百分数变成小数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
function decimal(sVal) {
    let fTmp = sVal.replace(/%/, "");
    return fTmp;

}

export { decimal }

/**
 * 数字增加百分号
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
function unDecimal(sVal) {
  let fTmp = sVal + '%';
  return fTmp;
}

export { unDecimal }

/**
 * 将千分位格式的数字字符串转换为浮点数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
function unformatMoney(sVal) {
    let fTmp = parseFloat((sVal + '').replace(/,/g, ''));
    return (isNaN(fTmp) ? 0 : fTmp);

}

export { unformatMoney }

/**
 * 计算当前日期为第几周
 */
// function getYearWeek(date) {
//     if(!date) return;
//     let date2 = new Date(date.getFullYear(), 0, 1);
//     let day1 = date.getDay();
//     if (day1 == 0) day1 = 7;
//     let day2 = date2.getDay();
//     if (day2 == 0) day2 = 7;
//     let dd = Math.round((date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)) / 86400000);
//     return Math.ceil(dd / 7) + 1;
// }

// export { getYearWeek }


/**
 * 判断年份是否为润年
 *
 * @param {Number} year
 */
function isLeapYear(year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
/**
 * 获取某一年份的某一月份的天数
 *
 * @param {Number} year
 * @param {Number} month
 */
function getMonthDays(year, month) {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}
/**
 * 获取某年的某天是第几周
 * @param {Date} date
 * @returns {Date}
 */
function getYearWeek(date) {
    // var now = new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    //     year = now.getFullYear(),
    //     month = now.getMonth(),
    //     days = now.getDate();
    // //那一天是那一年中的第多少天
    // for (var i = 0; i < month; i++) {
    //     days += getMonthDays(year, i);
    // }

    // //那一年第一天是星期几
    // var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

    // var week = null;
    // if (yearFirstDay == 1) {
    //     week = Math.ceil(days / yearFirstDay);
    // } else {
    //     days -= (7 - yearFirstDay + 1);
    //     week = Math.ceil(days / 7) + 1;
    // }

    // return week;
    return moment(date).format('w')
}

export { getYearWeek }


/**
 * 计算一年有多少周
 */
function getNumOfWeeks(year) {
    let d = new Date(year, 0, 1);
    let yt = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 366 : 365;
    return Math.ceil((yt - d.getDay()) / 7.0);
}

export { getNumOfWeeks }

/**
 * 数字千分位格式化
 * @public
 * @param mixed mVal 数值
 * @param int iAccuracy 小数位精度(默认为2)
 * @return string
 */
function formatMoney(mVal, iAccuracy) {
    let fTmp = 0.00; //临时变量
    let iFra = 0; //小数部分
    let iInt = 0; //整数部分
    let aBuf = new Array(); //输出缓存
    let bPositive = true; //保存正负值标记(true:正数)
    /**
     * 输出定长字符串，不够补0
     * <li>闭包函数</li>
     * @param int iVal 值
     * @param int iLen 输出的长度
     */
    function funZero(iVal, iLen) {
        let sTmp = iVal.toString();
        let sBuf = new Array();
        for (let i = 0, iLoop = iLen - sTmp.length; i < iLoop; i++)
            sBuf.push('0');
        sBuf.push(sTmp);
        return sBuf.join('');
    };

    iAccuracy = iAccuracy || 2;

    bPositive = (mVal >= 0); //取出正负号
    fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp); //强制转换为绝对值数浮点
    //所有内容用正数规则处理
    iInt = parseInt(fTmp, 10); //分离整数部分
    iFra = parseInt((fTmp - iInt) * Math.pow(10, iAccuracy) + 0.5, 10); //分离小数部分(四舍五入)

    do {
        aBuf.unshift(funZero(iInt % 1000, 3));
    } while ((iInt = parseInt(iInt / 1000, 10)));
    aBuf[0] = parseInt(aBuf[0], 10).toString(); //最高段区去掉前导0

    return (((bPositive) ? '' : '-') + aBuf.join(',') + ((0 === iFra) ? '' : '.' + funZero(iFra, iAccuracy)));

}

export { formatMoney }

/**
 * 定义去除字符前后空格
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

export { trim }

/**
 * 判断数组数字是否连续，从小到大
 */
function isContinuationInteger(array){
    if(!array){
        //数组为null
        return false;
    }
    if(array.length==0){
        //数组为[]
        return true;
    }
    var len=array.length;
    var n0=array[0];
    var sortDirection=1;//默认升序
    if(array[0]>array[len-1]){
        //降序
        sortDirection=-1;
    }
    if((n0*1+(len-1)*sortDirection)!==array[len-1]){
        //筛除['3',4,5,6,7,8]
        return false;
    }
    var isContinuation=true;
    for(var i=0;i<len;i++){
        if(array[i]!==(i+n0*sortDirection)){
            isContinuation=false;
            break;
        }
    }
    return isContinuation;
}
export { isContinuationInteger }


