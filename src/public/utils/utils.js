/**
 * Created by xueshuai on 2016/12/7.
 */
// import moment from 'moment';
// coerce convert som types of data into another type
export const coerce = {
  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
  boolean: val => (typeof val === 'string' ? val === '' || val === 'true' ? true : (val === 'false' || val === 'null' || val === 'undefined' ? false : val) : val),
  // Attempt to convert a string value to a Number. Otherwise, return 0.
  number: (val, alt = null) => (typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val)),
  // Attempt to convert to string any value, except for null or undefined.
  string: val => (val === undefined || val === null ? '' : val + ''),
  // Pattern accept RegExp, function, or string (converted to RegExp). Otherwise return null.
  pattern: val => (val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null)
}

export const accuracyOperation = {
  minus: function (n, m) {
    n = typeof n == "string" ? n : this.numToString(n);
    m = typeof m == "string" ? m : this.numToString(m);
    var F = n.indexOf(".") != -1 ? this.handleNum(n) : [n, 0, 0],
      S = m.indexOf(".") != -1 ? this.handleNum(m) : [m, 0, 0],
      l1 = F[2],
      l2 = S[2],
      L = l1 > l2 ? l1 : l2,
      T = Math.pow(10, L);
    return (F[0] * T + F[1] * T / Math.pow(10, l1) - S[0] * T - S[1] * T / Math.pow(10, l2)) / T
  },
  multiply: function (n, m) {
    n = typeof n == "string" ? n : this.numToString(n);
    m = typeof m == "string" ? m : this.numToString(m);
    var F = n.indexOf(".") != -1 ? this.handleNum(n) : [n, 0, 0],
      S = m.indexOf(".") != -1 ? this.handleNum(m) : [m, 0, 0],
      l1 = F[2],
      l2 = S[2],
      L = l1 > l2 ? l1 : l2,
      T = Math.pow(10, L);
    return ((F[0] * T + F[1] * T / Math.pow(10, l1)) * (S[0] * T + S[1] * T / Math.pow(10, l2))) / T / T
  },
  division: function (n, m) {
    n = typeof n == "string" ? n : this.numToString(n);
    m = typeof m == "string" ? m : this.numToString(m);
    var F = n.indexOf(".") != -1 ? this.handleNum(n) : [n, 0, 0],
      S = m.indexOf(".") != -1 ? this.handleNum(m) : [m, 0, 0],
      l1 = F[2],
      l2 = S[2],
      L = l1 > l2 ? l1 : l2,
      T = Math.pow(10, L);
    return ((F[0] * T + F[1] * T / Math.pow(10, l1)) / (S[0] * T + S[1] * T / Math.pow(10, l2)))
  },
  numToString: function (tempArray) {
    if (Object.prototype.toString.call(tempArray) == "[object Array]") {
      var temp = tempArray.slice();
      for (var i, l = temp.length; i < l; i++) {
        temp[i] = typeof temp[i] == "number" ? temp[i].toString() : temp[i];
      }
      return temp;
    }
    if (typeof tempArray == "number") {
      return tempArray.toString();
    }
    return []
  },
  plus: function (n, m) {
    n = typeof n == "string" ? n : this.numToString(n);
    m = typeof m == "string" ? m : this.numToString(m);
    var F = n.indexOf(".") != -1 ? this.handleNum(n) : [n, 0, 0],
      S = m.indexOf(".") != -1 ? this.handleNum(m) : [m, 0, 0],
      l1 = F[2],
      l2 = S[2],
      L = l1 > l2 ? l1 : l2,
      T = Math.pow(10, L);
    return (F[0] * T + F[1] * T / Math.pow(10, l1) + S[0] * T + S[1] * T / Math.pow(10, l2)) / T

  },
  handleNum: function (n) {
    n = typeof n !== "string" ? n + "" : n;
    var temp = n.split(".");
    temp.push(temp[1].length);
    return temp
  },
}

export function getJSON(url) {
  var request = new window.XMLHttpRequest()
  var data = {}
  // p (-simulated- promise)
  var p = {
    then(fn1, fn2) {
      return p.done(fn1).fail(fn2)
    },
    catch (fn) {
      return p.fail(fn)
    },
    always(fn) {
      return p.done(fn).fail(fn)
    }
  };
  ['done', 'fail'].forEach(name => {
    data[name] = []
    p[name] = (fn) => {
      if (fn instanceof Function) data[name].push(fn)
      return p
    }
  })
  p.done(JSON.parse)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      let e = {
        status: request.status
      }
      if (request.status === 200) {
        try {
          var response = request.responseText
          for (var i in data.done) {
            var value = data.done[i](response)
            if (value !== undefined) {
              response = value
            }
          }
        } catch (err) {
          data.fail.forEach(fail => fail(err))
        }
      } else {
        data.fail.forEach(fail => fail(e))
      }
    }
  }
  request.open('GET', url)
  request.setRequestHeader('Accept', 'application/json')
  request.send()
  return p
}

/**
 * [将大写字符换成_$1, $1为小括号内匹配的内容]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function camelToUnderline(str) {
  return str.replace(/([A-Z])/g,"_$1").toUpperCase()
}

export function getScrollBarWidth() {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0
  }
  let inner = document.createElement('p')
  inner.style.width = '100%'
  inner.style.height = '200px'

  let outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.top = '0px'
  outer.style.left = '0px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'
  outer.appendChild(inner)

  document.body.appendChild(outer)
  let w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'
  let w2 = inner.offsetWidth
  if (w1 === w2) w2 = outer.clientWidth

  document.body.removeChild(outer)

  return (w1 - w2)
}

// return all the translations or the default language (english)
export function translations(lang = 'en') {
  let text = {
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  }
  return window.VueStrapLang ? window.VueStrapLang(lang) : text
}

// delayer: set a function that execute after a delay
// @params (function, delay_prop or value, default_value)
export function delayer(fn, varTimer, ifNaN = 100) {
  function toInt(el) {
    return /^[0-9]+$/.test(el) ? Number(el) || 1 : null
  }

  var timerId
  return function (...args) {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN)
  }
}

// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a real parser, so this work only if your code is compatible with both)
// (Waiting for testing)
export function VueFixer(vue) {
  var vue2 = !window.Vue || !window.Vue.partial
  var mixin = {
    computed: {
      vue2() {
        return !this.$dispatch
      }
    }
  }
  if (!vue2) {
    //translate vue2 attributes to vue1
    if (vue.beforeCreate) {
      mixin.create = vue.beforeCreate
      delete vue.beforeCreate
    }
    if (vue.beforeMount) {
      vue.beforeCompile = vue.beforeMount
      delete vue.beforeMount
    }
    if (vue.mounted) {
      vue.ready = vue.mounted
      delete vue.mounted
    }
  } else {
    //translate vue1 attributes to vue2
    if (vue.beforeCompile) {
      vue.beforeMount = vue.beforeCompile
      delete vue.beforeCompile
    }
    if (vue.compiled) {
      mixin.compiled = vue.compiled
      delete vue.compiled
    }
    if (vue.ready) {
      vue.mounted = vue.ready
      delete vue.ready
    }
  }
  if (!vue.mixins) {
    vue.mixins = []
  }
  vue.mixins.unshift(mixin)
  return vue
};
/**
 * 合并数组、12/19 xiaoxian
 * @param target
 * @param arr
 * @returns {*}
 */
export function mergeArray(target, arr) {
  target.length = 0;
  if (arr.length !== 0) {
    for (let obj of arr) {
      if (!JSON.stringify(target).includes(JSON.stringify(obj))) {
        target.push(obj);
      }
    }
  }
  return target;
};
/**
 * 删除数组制定列、12/19 xiaoxian
 * @param arr
 * @param key
 * @param val
 * @returns {*}
 */
export function deleteByKey(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      arr.splice(i, 1);
      return arr;
    }
  }
}
/**
 * 定义公共的时间戳处理函数
 *
 * @export
 * @param {any} time
 */
// export function formatDate(time) {
//     return moment(time).format("YYYY-MM-DD hh:mm")
// }

/**
 * 定义获取浏览器参数的方法
 *
 * @export
 * @param {any} time
 */
export function getUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

/**
 * 定义输入框的值是否为空函数
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function isCheckNull(value) {
  if (value === '' || value === undefined || value === null) {
    return true;
  }
  return false;
}
/**
 * 定义去除字符前后空格
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}


// 判断参数是否是其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/**
 * 将浮点数字格式化为百分比数据 0.1223 格式为 12.23%
 * @public
 * @param string num 数值字符串 pos 保留几位小数
 * @return string
 */
export function formatPercent(num, pos) {
  pos = pos || 2;

  let result = formatFloat((num * 100), pos).toString() + "%";

  return result;
}

/**
 * 将千分位格式的数字字符串转换为浮点数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
export function formatFloat(src, pos, flag = true) {
  //格式化后台返回数字类型,
  try {
    //如果是空值或是null则返回--,
    if (src == null || src == "NULL" || src.length == 0) {
      return "--";
    }
    //如果是0直接返回0,
    if (src == "0")
      return "0";
    //如果是数字包括负数则根据条件保留指定位数小数并添加千分符号,默认不保留小数
    var re = /^[-]?[0-9]+.?[0-9]*$/;
    if (!re.test(src))
      return src;
    else {
      if (flag) {
        if (pos) {
          return ((parseFloat(src).toFixed(pos)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
        } else {
          return ((parseFloat(src).toFixed(0)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
        }
      } else {
        return parseFloat(src).toFixed(pos)
      }

    }
  } catch (e) {
    //如果出错返回原值
    return src;
  }
}

/**
 * 数字千分位格式化
 * @public
 * @param mixed mVal 数值
 * @param int iAccuracy 小数位精度(默认为2)
 * @return string
 */
export function formatMoney(mVal, iAccuracy) {
  var fTmp = 0.00; //临时变量
  var iFra = 0; //小数部分
  var iInt = 0; //整数部分
  var aBuf = new Array(); //输出缓存
  var bPositive = true; //保存正负值标记(true:正数)
  /**
   * 输出定长字符串，不够补0
   * <li>闭包函数</li>
   * @param int iVal 值
   * @param int iLen 输出的长度
   */
  function funZero(iVal, iLen) {
    var sTmp = iVal.toString();
    var sBuf = new Array();
    for (var i = 0, iLoop = iLen - sTmp.length; i < iLoop; i++)
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
/**
 * 将千分位格式的数字字符串转换为浮点数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
export function unformatMoney(sVal) {
  let fTmp = parseFloat(sVal.toString().replace(/,/g, ''));
  return (isNaN(fTmp) ? 0 : fTmp);

}

/**
 * 将百分数变成小数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
export function decimal(sVal) {
  let fTmp = sVal.replace(/%/, "");
  return fTmp;

}

/**
 * 直接增加百分号
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
export function unDecimal(sVal) {
  let fTmp = sVal + '%';
  return fTmp;

}

/**
 * 直接增加百分号
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
// export function percentN(sVal) {
//   let fTmp = sVal + '%';
//   return fTmp;
// }

/**
 * 将百分数变成小数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
export function transformInteger(sVal) {
  let fTmp = Math.ceil(data);
  return fTmp;

}

/**
 * 保留两位有效数字
 */
export function twoDecimal(num) {
  var f_x = parseFloat(num);
  if (isNaN(f_x)) {
    alert('function:changeTwoDecimal->parameter error');
    return false;
  }
  var f_x = Math.round(num * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  return s_x;
}
/**
 * 保留n位小数
 */
export function nDecimal(num, n) {
  var f_x = parseFloat(num);
  if (isNaN(f_x)) {
    alert('function:changeTwoDecimal->parameter error');
    return false;
  }

  if (!n) return parseInt(f_x);

  // var f_x = Math.round(num * 10 * n) / 10 * n;
  var f_x = Math.round(num * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + n) {
    s_x += '0';
  }
  return s_x;
}

/**
 * 数组快速排序
 */
export function quickSort(arr) {
  if (arr.length <= 1) { //如果数组中只有一位数，返回数组
    return arr;
  }
  var mNumIndex = Math.floor(arr.length / 2); //取基准值的下标
  var mNum = arr.splice([mNumIndex], 1)[0]; //取基准值
  var left = []; //左边数组
  var right = []; //右边数组

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mNum) { //如果数组小于基准值，放在左边数组
      left.push(arr[i]);
    } else { ///否则
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([mNum], quickSort(right)); //返回左边数组+基准值+右边数组
}

/**
 * 对象数组按照指定变量排序
 */
export function compare(prop) {
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
}

export function compare2(prop) {
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 > val2) {
      return -1;
    } else if (val1 < val2) {
      return 1;
    } else {
      return 0;
    }
  }
}


/**
 * 格式化处理函数
 * #,###.0000%
 */
export function decimalformat(str, rules) {

  if (str === '-') return

  /**
   * 判断是否包含.
   * 包含则把数字做左右分割
   */
  let leftV = '';
  let rightV = '';
  let bu = '';
  let rLen;
  let ruspLen;
  let rusp;
  let eName = '';

  str = String(str);

  if (rules.includes('%')) {
    str = str * 100;
  }

  /**
   * 科学计数法格式判断
   */
  if (rules.includes('E')) {
    str = String(str);
    let num = rules.split('E')[1].replace('%', '');
    switch (num) {
      case '4':
        eName = '万';
        break;
      case '5':
        eName = '十万';
        break;
      case '6':
        eName = '百万';
        break;
      case '7':
        eName = '千万';
        break;
      case '8':
        eName = '亿';
        break;
    }
    //如果传过来是E4但数据超过亿,按照亿显示
    if (Math.abs(str) > 99999999) {
      str = new Number(str + 'E-8');
      eName = '亿';
    } else {
      str = new Number(str + 'E-' + num);
    }
    if (rules.includes('%')) {
      rules = rules.split('E')[0] + '%';
    }
    else {
      rules = rules.split('E')[0];
    }

  }
  if (rules.includes('.')) {
    let sp = String(str).split('.');
    // let rLen;
    leftV = sp[0];
    if (sp[1]) {
      rightV = sp[1];
    } else {
      rightV = '';
    }
    rLen = rightV.length;

    rusp = rules.split('.')[1];

    rusp = rusp.split('%')[0];

    ruspLen = rusp.length;

    /**
     * 小数位数  ===   >  <
     */
    for (let i = 0; i < (ruspLen); i++) {
      bu = bu + '0';
    }
  }

  // if(rules.includes(',')){
  //   if(ruspLen){
  //     str = formatMoney(str,ruspLen)
  //   }else{
  //     str = formatMoney(str);
  //     str = str.split('.')[0];
  //   }
  // }

  ruspLen = ruspLen ? ruspLen : 0;
  /**
   * 不包含‘.’就需要做取整操作
   * 统一为四舍五入
   */
  if (!rules.includes('.')) {
    str = Math.round(str);
  }


  if (rules.includes('%')) {
    if (!String(str).includes('.')) {
      return (bu === '') ? str + '%' : str + '.' + bu + '%' + eName
    } else if (rules.includes('.') && !rules.includes(',')) {
      return nDecimal(Number(str), ruspLen) + '%' + eName
    } else if (rules.includes('.') && rules.includes(',')) {
      str = nDecimal(Number(str), ruspLen);
      if (ruspLen) {
        str = formatMoney(str, ruspLen)
      } else {
        str = formatMoney(str);
        str = str.split('.')[0];
      }
      return str + '%' + eName;
    } else {
      return nDecimal(Number(str), ruspLen) + '%' + eName;
    }
  } else {
    if (rules.includes('.') && !rules.includes(',')) {
      return nDecimal(Number(str), ruspLen) + eName;
    } else if (rules.includes('.') && rules.includes(',')) {
      str = nDecimal(Number(str), ruspLen);
      if (ruspLen) {
        str = formatMoney(str, ruspLen)
      } else {
        str = formatMoney(str);
        str = str.split('.')[0];
      }

      /**
       * 如果str不包含小数，但是格式化规则包含小数，则需要补小数位
       */
      str = String(str).includes('.') ? str : (str + '.' + bu);

      return str + eName;

    } else if (!rules.includes('.') && rules.includes(',')) {
      return formatMoney(str, ruspLen) + eName;
    } else {
      return str + eName

    }

  }
}

/*排序*/
export function compareSort(property,type,propertychildren='') {
  //默认降序
  if (type == undefined) {
    type = 1;
  } else {
    type = (type === 'desc') ? 1 : -1;
  }
  return function (obj1, obj2) {
    // let type = typeKey;
    let a,b;

    if(propertychildren){
      a = obj1[property][propertychildren[0]][propertychildren[1]];
      b = obj2[property][propertychildren[0]][propertychildren[1]];
    }else if(Object.prototype.toString.call(obj1[property]) === '[object Object]'){
      a = obj1[property]['value'];
      b = obj2[property]['value'];
    }else{
      a = obj1[property];
      b = obj2[property];
    }

    a = a ? a + "" : "";
    b = b ? b + "" : "";

    let temp = '';

    /**
     * 如果是负数的情况
     */
    // if(a.split('-') && b.split('-')){

    // }

    if (a.length > b.length) {
      temp = -1;
    } else if (a.length < b.length) {
      temp = 1;
    } else {
      if (a < b) {
        temp = 1;
      } else if (a > b) {
        temp = -1;
      } else {
        temp = 0;
      }
    }
    return temp * type;
  }
}

// export function compareSort(property,type,propertychildren='') {
//   //默认降序
//   if (type == undefined) {
//     type = 1;
//   } else {
//     type = (type === 'desc') ? 1 : -1;
//   }
//   return function (obj1, obj2) {
//     // let type = typeKey;
//     let a,b;

//     if(propertychildren){
//       a = obj1[property][propertychildren[0]][propertychildren[1]];
//       b = obj2[property][propertychildren[0]][propertychildren[1]];
//     }else{
//       a = obj1[property];
//       b = obj2[property];
//     }

//     a = a ? a + "" : "";
//     b = b ? b + "" : "";

//     let temp = '';
//     if (a.length > b.length) {
//       temp = -1;
//     } else if (a.length < b.length) {
//       temp = 1;
//     } else {
//       if (a < b) {
//         temp = 1;
//       } else if (a > b) {
//         temp = -1;
//       } else {
//         temp = 0;
//       }
//     }
//     return temp * type;
//   }
// }

/**
 * 加水印
 */
export function watermark(settings) {

  if(settings.clear) return

  //默认设置
  var defaultSettings = {
    watermark_txt: "text",
    watermark_x: 20, //水印起始位置x轴坐标
    watermark_y: 20, //水印起始位置Y轴坐标
    watermark_rows: 50, //水印行数
    watermark_cols: 50, //水印列数
    watermark_x_space: 5, //水印x轴间隔
    watermark_y_space: 70, //水印y轴间隔
    watermark_color: '#000000', //水印字体颜色
    watermark_alpha: 0.005, //水印透明度
    watermark_fontsize: '14px', //水印字体大小
    watermark_font: '微软雅黑', //水印字体
    watermark_width: 100, //水印宽度
    watermark_height: 80, //水印长度
    watermark_angle: 25, //水印倾斜度数
    watermark_dom:document.body //页面dom
  };
  //采用配置项替换默认值，作用类似jquery.extend
  // if(arguments.length===1&&typeof arguments[0] ==="object" )
  // {
  //   var src=arguments[0]||{};
  //   for(key in src)
  //   {
  //     if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
  //       continue;
  //     else if(src[key])
  //       defaultSettings[key]=src[key];
  //   }
  // }

  /*渲染之前删除dom节点*/
  if(document.querySelectorAll('.mask_div').length !== 0){
    let nodes = document.querySelectorAll('.mask_div');
    let len = nodes.length;
    for(let i=0;i<len;i++){
      defaultSettings.watermark_dom.removeChild(nodes[i])
    }
  }

  _.assign(defaultSettings, settings)

  var oTemp = document.createDocumentFragment();

  //获取页面最大宽度
  var page_width = Math.max(defaultSettings.watermark_dom.scrollWidth, defaultSettings.watermark_dom.clientWidth);
  //获取页面最大长度
  // var page_height = Math.max(defaultSettings.watermark_dom.scrollHeight, defaultSettings.watermark_dom.clientHeight) - 100;
  var page_height = document.documentElement.clientHeight;

  //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
  if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
    defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
    defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
  }
  //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
  if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
    defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
    defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
  }
  var x;
  var y;
  for (var i = 0; i < defaultSettings.watermark_rows; i++) {
    y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
    for (var j = 0; j < defaultSettings.watermark_cols; j++) {
      x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

      var mask_div = document.createElement('div');
      mask_div.id = 'mask_div' + i + j;
      mask_div.className = 'mask_div';
      mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
      //设置水印div倾斜显示
      mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
      mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
      mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
      mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
      mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
      mask_div.style.visibility = "";
      mask_div.style.position = "fixed";
      //选不中
      mask_div.style.left = x + 'px';
      mask_div.style.top = y + 'px';
      mask_div.style.overflow = "hidden";
      mask_div.style.zIndex = "9999";
      mask_div.style.pointerEvents = "none";
      //mask_div.style.border="solid #eee 1px";
      mask_div.style.opacity = defaultSettings.watermark_alpha;
      mask_div.style.fontSize = defaultSettings.watermark_fontsize;
      mask_div.style.color = defaultSettings.watermark_color;
      mask_div.style.textAlign = "center";
      mask_div.style.width = defaultSettings.watermark_width + 'px';
      mask_div.style.height = defaultSettings.watermark_height + 'px';
      mask_div.style.display = "block";
      oTemp.appendChild(mask_div);
    }
    ;
  }
  ;
  defaultSettings.watermark_dom.appendChild(oTemp);
}

/**
 * 定义一个canvas水印方法
 */
 // export function canvasWatermark(settings){

 //  let defaultSettings = {
 //    watermark_txt: "text",
 //    watermark_width: 100, //画布宽度
 //    watermark_height: 80, //画布长度
 //    watermark_textAlign: 'center',//水印内容显示方式，默认居中
 //    watermark_textBaseline:'middle',
 //    watermark_alpha:0.05,//透明度
 //    watermark_font:'20px Microsoft Yahei',//字体大小以及字体样式
 //    watermark_x:50,
 //    watermark_y:50,
 //    watermark_rotate:-Math.PI / 4,
 //    watermark_dom:document.body //页面dom
 //  }

 //  $.extend(true, defaultSettings, settings)

 //  function createBgCanvas(){
 //    //创建一个canvas仅仅是写入erpId账号使用
 //    let canvas = document.createElement('canvas');
 //    let ctx = canvas.getContext('2d');
 //    canvas.width = 100
 //    canvas.height = 100;
 //    ctx.textAlign = defaultSettings.watermark_textAlign;
 //    ctx.textBaseline = defaultSettings.watermark_textBaseline;
 //    ctx.globalAlpha = defaultSettings.watermark_alpha;
 //    ctx.font = defaultSettings.watermark_font;
 //    ctx.translate(defaultSettings.watermark_x, defaultSettings.watermark_y);
 //    ctx.rotate(defaultSettings.watermark_rotate);
 //    ctx.fillText(defaultSettings.watermark_txt,0,0);
 //    return canvas;
 //  }


 //  //获取页面最大宽度
 //  let page_width = Math.max(defaultSettings.watermark_dom.scrollWidth, defaultSettings.watermark_dom.clientWidth);
 //  //获取页面最大长度
 //  let page_height = Math.max(defaultSettings.watermark_dom.scrollHeight, defaultSettings.watermark_dom.clientHeight);

 //  /**
 //   * 在创建一个canvas，然后平铺第一个canvas里面的内容
 //   * @type {[type]}
 //   */
 //  let canvas2 = document.createElement('canvas');
 //  let ctx2 = canvas2.getContext('2d');
 //  canvas2.width = page_width
 //  canvas2.height = page_height;
 //  let backCanvas=createBgCanvas();
 //  ctx2.rotate(defaultSettings.watermark_rotate);
 //  ctx2.clearRect(0,0,page_width,page_height);  //清除整个画布
 //  let pat = ctx2.createPattern(backCanvas, "repeat");
 //  ctx2.fillStyle = pat;
 //  ctx2.fillRect(0, 0, page_width, page_height);
 //  document.body.appendChild(canvas2);
 // }

/**
 * 超过1000的百分数统一返回1000+
 * @param str
 * @returns {*}
 */
export function exceedThousandPer(str) {
  if (Math.abs(str.replace('%', '')) > 1000) {
    let temp = str.match(/^\+|\-/g);
    if (temp == null) {
      temp = '';
    }
    return temp + '1000<sup>+</sup>'
  } else {
    return str;
  }
}

// watch DOM change
export const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;
