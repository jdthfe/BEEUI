webpackJsonp([8],{"0x0W":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("j/M6"),l=a(r),o=n("wGKg"),i=a(o),u=n("lE0T"),s=a(u),d=n("8jk8"),c=a(d);t.default={components:{gaInput:l.default,gaSelect:i.default,gaOption:s.default},data:function(){return{moduleName:"组合",value4:"",select1:"http",select2:"com",Code:c.default}},methods:{onChangeFn:function(e){this.changeValue=e}}}},"10pg":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("p",[e._v("设置属性 autosize，文本域会自动适应高度的变化。autosize也可以设定为一个对象，指定最小行数和最大行数。")]),e._v(" "),n("ga-input",{attrs:{type:"textarea",autosize:!0,placeholder:"请输入..."},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}}),e._v(" "),n("ga-input",{attrs:{type:"textarea",disabled:"",autosize:{minRows:2,maxRows:5},placeholder:"请输入..."},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}}),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.autosize)+"\n  ")])],1)},staticRenderFns:[]}},"1TJQ":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new window.XMLHttpRequest,n={},a={then:function(e,t){return a.done(e).fail(t)},catch:function(e){return a.fail(e)},always:function(e){return a.done(e).fail(e)}};return["done","fail"].forEach(function(e){n[e]=[],a[e]=function(t){return t instanceof Function&&n[e].push(t),a}}),a.done(JSON.parse),t.onreadystatechange=function(){if(4===t.readyState){var e={status:t.status};if(200===t.status)try{var a=t.responseText;for(var r in n.done){var l=n.done[r](a);void 0!==l&&(a=l)}}catch(e){n.fail.forEach(function(t){return t(e)})}else n.fail.forEach(function(t){return t(e)})}},t.open("GET",e),t.setRequestHeader("Accept","application/json"),t.send(),a}function l(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()}function o(){if(document.documentElement.scrollHeight<=document.documentElement.clientHeight)return 0;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var a=e.offsetWidth;return n===a&&(a=t.clientWidth),document.body.removeChild(t),n-a}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t={daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],limit:"Limit reached ({{limit}} items max).",loading:"Loading...",minLength:"Min. Length",months:["January","February","March","April","May","June","July","August","September","October","November","December"],notSelected:"Nothing Selected",required:"Required",search:"Search"};return window.VueStrapLang?window.VueStrapLang(e):t}function u(e,t){function n(e){return/^[0-9]+$/.test(e)?Number(e)||1:null}var a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return function(){for(var l=this,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];a&&clearTimeout(a),a=setTimeout(function(){e.apply(l,i)},n(t)||n(this[t])||r)}}function s(e){var t=!window.Vue||!window.Vue.partial,n={computed:{vue2:function(){return!this.$dispatch}}};return t?(e.beforeCompile&&(e.beforeMount=e.beforeCompile,delete e.beforeCompile),e.compiled&&(n.compiled=e.compiled,delete e.compiled),e.ready&&(e.mounted=e.ready,delete e.ready)):(e.beforeCreate&&(n.create=e.beforeCreate,delete e.beforeCreate),e.beforeMount&&(e.beforeCompile=e.beforeMount,delete e.beforeMount),e.mounted&&(e.ready=e.mounted,delete e.mounted)),e.mixins||(e.mixins=[]),e.mixins.unshift(n),e}function d(e,t){if(e.length=0,0!==t.length){var n=!0,a=!1,r=void 0;try{for(var l,o=(0,T.default)(t);!(n=(l=o.next()).done);n=!0){var i=l.value;(0,E.default)(e).includes((0,E.default)(i))||e.push(i)}}catch(e){a=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}}return e}function c(e,t,n){for(var a=0;a<e.length;a++)if(e[a][t]===n)return e.splice(a,1),e}function p(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function v(e){return""===e||void 0===e||null===e}function f(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function m(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}function h(e,t){return t=t||2,g(100*e,t).toString()+"%"}function g(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];try{if(null==e||"NULL"==e||0==e.length)return"--";if("0"==e)return"0";return/^[-]?[0-9]+.?[0-9]*$/.test(e)?n?t?parseFloat(e).toFixed(t).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,"):parseFloat(e).toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,"):parseFloat(e).toFixed(t):e}catch(t){return e}}function x(e,t){function n(e,t){for(var n=e.toString(),a=new Array,r=0,l=t-n.length;r<l;r++)a.push("0");return a.push(n),a.join("")}var a=0,r=0,l=0,o=new Array,i=!0;t=t||2,i=e>=0,a=isNaN(a=parseFloat(e))?0:Math.abs(a),l=parseInt(a,10),r=parseInt((a-l)*Math.pow(10,t)+.5,10);do{o.unshift(n(l%1e3,3))}while(l=parseInt(l/1e3,10));return o[0]=parseInt(o[0],10).toString(),(i?"":"-")+o.join(",")+(0===r?"":"."+n(r,t))}function w(e){var t=parseFloat(e.toString().replace(/,/g,""));return isNaN(t)?0:t}function y(e){return e.replace(/%/,"")}function b(e){return e+"%"}function k(e){return Math.ceil(data)}function N(e){var t=parseFloat(e);if(isNaN(t))return alert("function:changeTwoDecimal->parameter error"),!1;var t=Math.round(100*e)/100,n=t.toString(),a=n.indexOf(".");for(a<0&&(a=n.length,n+=".");n.length<=a+2;)n+="0";return n}function S(e,t){var n=parseFloat(e);if(isNaN(n))return alert("function:changeTwoDecimal->parameter error"),!1;if(!t)return parseInt(n);var n=Math.round(100*e)/100,a=n.toString(),r=a.indexOf(".");for(r<0&&(r=a.length,a+=".");a.length<=r+t;)a+="0";return a}function C(e){if(e.length<=1)return e;for(var t=Math.floor(e.length/2),n=e.splice([t],1)[0],a=[],r=[],l=0;l<e.length;l++)e[l]<n?a.push(e[l]):r.push(e[l]);return C(a).concat([n],C(r))}function M(e){return function(t,n){var a=t[e],r=n[e];return isNaN(Number(a))||isNaN(Number(r))||(a=Number(a),r=Number(r)),a<r?-1:a>r?1:0}}function z(e){return function(t,n){var a=t[e],r=n[e];return isNaN(Number(a))||isNaN(Number(r))||(a=Number(a),r=Number(r)),a>r?-1:a<r?1:0}}function O(e,t){if("-"!==e){var n="",a="",r=void 0,l=void 0,o="";if(e=String(e),t.includes("%")&&(e*=100),t.includes("E")){e=String(e);var i=t.split("E")[1].replace("%","");switch(i){case"4":o="万";break;case"5":o="十万";break;case"6":o="百万";break;case"7":o="千万";break;case"8":o="亿"}Math.abs(e)>99999999?(e=new Number(e+"E-8"),o="亿"):e=new Number(e+"E-"+i),t=t.includes("%")?t.split("E")[0]+"%":t.split("E")[0]}if(t.includes(".")){var u=String(e).split(".");u[0],n=u[1]?u[1]:"",n.length,l=t.split(".")[1],l=l.split("%")[0],r=l.length;for(var s=0;s<r;s++)a+="0"}return r=r||0,t.includes(".")||(e=Math.round(e)),t.includes("%")?String(e).includes(".")?t.includes(".")&&!t.includes(",")?S(Number(e),r)+"%"+o:t.includes(".")&&t.includes(",")?(e=S(Number(e),r),r?e=x(e,r):(e=x(e),e=e.split(".")[0]),e+"%"+o):S(Number(e),r)+"%"+o:""===a?e+"%":e+"."+a+"%"+o:t.includes(".")&&!t.includes(",")?S(Number(e),r)+o:t.includes(".")&&t.includes(",")?(e=S(Number(e),r),r?e=x(e,r):(e=x(e),e=e.split(".")[0]),(e=String(e).includes(".")?e:e+"."+a)+o):!t.includes(".")&&t.includes(",")?x(e,r)+o:e+o}}function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t=void 0==t?1:"desc"===t?1:-1,function(a,r){var l=void 0,o=void 0;n?(l=a[e][n[0]][n[1]],o=r[e][n[0]][n[1]]):"[object Object]"===Object.prototype.toString.call(a[e])?(l=a[e].value,o=r[e].value):(l=a[e],o=r[e]),l=l?l+"":"",o=o?o+"":"";return(l.length>o.length?-1:l.length<o.length?1:l<o?1:l>o?-1:0)*t}}function I(e){if(!e.clear){var t={watermark_txt:"text",watermark_x:20,watermark_y:20,watermark_rows:50,watermark_cols:50,watermark_x_space:5,watermark_y_space:70,watermark_color:"#000000",watermark_alpha:.005,watermark_fontsize:"14px",watermark_font:"微软雅黑",watermark_width:100,watermark_height:80,watermark_angle:25,watermark_dom:document.body};if(0!==document.querySelectorAll(".mask_div").length)for(var n=document.querySelectorAll(".mask_div"),a=n.length,r=0;r<a;r++)t.watermark_dom.removeChild(n[r]);_.assign(t,e);var l=document.createDocumentFragment(),o=Math.max(t.watermark_dom.scrollWidth,t.watermark_dom.clientWidth),i=document.documentElement.clientHeight;(0==t.watermark_cols||parseInt(t.watermark_x+t.watermark_width*t.watermark_cols+t.watermark_x_space*(t.watermark_cols-1))>o)&&(t.watermark_cols=parseInt((o-t.watermark_x+t.watermark_x_space)/(t.watermark_width+t.watermark_x_space)),t.watermark_x_space=parseInt((o-t.watermark_x-t.watermark_width*t.watermark_cols)/(t.watermark_cols-1))),(0==t.watermark_rows||parseInt(t.watermark_y+t.watermark_height*t.watermark_rows+t.watermark_y_space*(t.watermark_rows-1))>i)&&(t.watermark_rows=parseInt((t.watermark_y_space+i-t.watermark_y)/(t.watermark_height+t.watermark_y_space)),t.watermark_y_space=parseInt((i-t.watermark_y-t.watermark_height*t.watermark_rows)/(t.watermark_rows-1)));for(var u,s,d=0;d<t.watermark_rows;d++){s=t.watermark_y+(t.watermark_y_space+t.watermark_height)*d;for(var c=0;c<t.watermark_cols;c++){u=t.watermark_x+(t.watermark_width+t.watermark_x_space)*c;var p=document.createElement("div");p.id="mask_div"+d+c,p.className="mask_div",p.appendChild(document.createTextNode(t.watermark_txt)),p.style.webkitTransform="rotate(-"+t.watermark_angle+"deg)",p.style.MozTransform="rotate(-"+t.watermark_angle+"deg)",p.style.msTransform="rotate(-"+t.watermark_angle+"deg)",p.style.OTransform="rotate(-"+t.watermark_angle+"deg)",p.style.transform="rotate(-"+t.watermark_angle+"deg)",p.style.visibility="",p.style.position="fixed",p.style.left=u+"px",p.style.top=s+"px",p.style.overflow="hidden",p.style.zIndex="9999",p.style.pointerEvents="none",p.style.opacity=t.watermark_alpha,p.style.fontSize=t.watermark_fontsize,p.style.color=t.watermark_color,p.style.textAlign="center",p.style.width=t.watermark_width+"px",p.style.height=t.watermark_height+"px",p.style.display="block",l.appendChild(p)}}t.watermark_dom.appendChild(l)}}function j(e){if(Math.abs(e.replace("%",""))>1e3){var t=e.match(/^\+|\-/g);return null==t&&(t=""),t+"1000<sup>+</sup>"}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.MutationObserver=t.accuracyOperation=t.coerce=void 0;var V=n("mvHQ"),E=a(V),P=n("BO1k"),T=a(P);t.getJSON=r,t.camelToUnderline=l,t.getScrollBarWidth=o,t.translations=i,t.delayer=u,t.VueFixer=s,t.mergeArray=d,t.deleteByKey=c,t.getUrlParam=p,t.isCheckNull=v,t.trim=f,t.oneOf=m,t.formatPercent=h,t.formatFloat=g,t.formatMoney=x,t.unformatMoney=w,t.decimal=y,t.unDecimal=b,t.transformInteger=k,t.twoDecimal=N,t.nDecimal=S,t.quickSort=C,t.compare=M,t.compare2=z,t.decimalformat=O,t.compareSort=F,t.watermark=I,t.exceedThousandPer=j;t.coerce={boolean:function(e){return"string"==typeof e?""===e||"true"===e||"false"!==e&&"null"!==e&&"undefined"!==e&&e:e},number:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"number"==typeof e?e:void 0===e||null===e||isNaN(Number(e))?t:Number(e)},string:function(e){return void 0===e||null===e?"":e+""},pattern:function(e){return e instanceof Function||e instanceof RegExp?e:"string"==typeof e?new RegExp(e):null}},t.accuracyOperation={minus:function(e,t){e="string"==typeof e?e:this.numToString(e),t="string"==typeof t?t:this.numToString(t);var n=-1!=e.indexOf(".")?this.handleNum(e):[e,0,0],a=-1!=t.indexOf(".")?this.handleNum(t):[t,0,0],r=n[2],l=a[2],o=r>l?r:l,i=Math.pow(10,o);return(n[0]*i+n[1]*i/Math.pow(10,r)-a[0]*i-a[1]*i/Math.pow(10,l))/i},multiply:function(e,t){e="string"==typeof e?e:this.numToString(e),t="string"==typeof t?t:this.numToString(t);var n=-1!=e.indexOf(".")?this.handleNum(e):[e,0,0],a=-1!=t.indexOf(".")?this.handleNum(t):[t,0,0],r=n[2],l=a[2],o=r>l?r:l,i=Math.pow(10,o);return(n[0]*i+n[1]*i/Math.pow(10,r))*(a[0]*i+a[1]*i/Math.pow(10,l))/i/i},division:function(e,t){e="string"==typeof e?e:this.numToString(e),t="string"==typeof t?t:this.numToString(t);var n=-1!=e.indexOf(".")?this.handleNum(e):[e,0,0],a=-1!=t.indexOf(".")?this.handleNum(t):[t,0,0],r=n[2],l=a[2],o=r>l?r:l,i=Math.pow(10,o);return(n[0]*i+n[1]*i/Math.pow(10,r))/(a[0]*i+a[1]*i/Math.pow(10,l))},numToString:function(e){if("[object Array]"==Object.prototype.toString.call(e)){for(var t,n=e.slice(),a=n.length;t<a;t++)n[t]="number"==typeof n[t]?n[t].toString():n[t];return n}return"number"==typeof e?e.toString():[]},plus:function(e,t){e="string"==typeof e?e:this.numToString(e),t="string"==typeof t?t:this.numToString(t);var n=-1!=e.indexOf(".")?this.handleNum(e):[e,0,0],a=-1!=t.indexOf(".")?this.handleNum(t):[t,0,0],r=n[2],l=a[2],o=r>l?r:l,i=Math.pow(10,o);return(n[0]*i+n[1]*i/Math.pow(10,r)+a[0]*i+a[1]*i/Math.pow(10,l))/i},handleNum:function(e){e="string"!=typeof e?e+"":e;var t=e.split(".");return t.push(t[1].length),t}},t.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||!1},"3P5y":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-page",[n("ga-row",[n("basic-input"),e._v(" "),n("size-input"),e._v(" "),n("textareainput"),e._v(" "),n("icon-input"),e._v(" "),n("composite-input"),e._v(" "),n("clearableinput")],1),e._v(" "),n("ga-panel",{attrs:{moduleName:"API说明／事件说明"}},[n("ga-row",[n("div",{staticClass:"api"},[n("h4",[e._v("API说明")]),e._v(" "),n("table",{staticClass:"table table-bordered table-hover"},[n("thead",[n("tr",{staticStyle:{"background-color":"rgb(0, 136, 204)",color:"rgb(255, 255, 255)"}},[n("th",{staticStyle:{"text-align":"left","min-width":"77px"}},[e._v("属性")]),e._v(" "),n("th",{staticStyle:{"text-align":"left","min-width":"77px"}},[e._v("说明")]),e._v(" "),n("th",{staticStyle:{"text-align":"left","min-width":"77px"}},[e._v("类型")]),e._v(" "),n("th",{staticStyle:{"min-width":"77px"}},[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("输入框类型，可选值为 "),n("code",[e._v("text")]),e._v("、"),n("code",[e._v("password")]),e._v(" 或 "),n("code",[e._v("textarea")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("text")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("绑定的值，可使用 v-model 双向绑定")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("空")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("输入框尺寸，可选值为"),n("code",[e._v("large")]),e._v("和"),n("code",[e._v("small")]),e._v("或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("placeholder")]),e._v(" "),n("td",[e._v("占位文本")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("设置输入框为禁用状态")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("readonly")]),e._v(" "),n("td",[e._v("设置输入框为只读")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("maxlength")]),e._v(" "),n("td",[e._v("最大输入长度")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("rows")]),e._v(" "),n("td",[e._v("文本域默认行数，仅在 textarea 类型下有效")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("2")])]),e._v(" "),n("tr",[n("td",[e._v("autosize")]),e._v(" "),n("td",[e._v("自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }")]),e._v(" "),n("td",[e._v("Boolean | Object")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("number")]),e._v(" "),n("td",[e._v("将用户的输入转换为 Number 类型")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("width")]),e._v(" "),n("td",[e._v("设置input宽度(200或者10%)")]),e._v(" "),n("td",[e._v("String,Number")]),e._v(" "),n("td",[e._v("200")])]),e._v(" "),n("tr",[n("td",[e._v("prefix-icon")]),e._v(" "),n("td",[e._v("输入框头部图标")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("suffix-icon")]),e._v(" "),n("td",[e._v("输入框尾部图标")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("clearable")]),e._v(" "),n("td",[e._v("设置输入框是否有清空按钮")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("h4",[e._v("事件说明")]),e._v(" "),n("table",{staticClass:"table table-bordered table-hover"},[n("thead",[n("tr",{staticStyle:{"background-color":"rgb(0, 136, 204)",color:"rgb(255, 255, 255)"}},[n("th",{staticStyle:{"text-align":"left","min-width":"77px"}},[e._v("事件名称")]),e._v(" "),n("th",{staticStyle:{"text-align":"left","min-width":"77px"}},[e._v("说明")]),e._v(" "),n("th",{staticStyle:{"min-width":"77px"}},[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-enter")]),e._v(" "),n("td",[e._v("按下回车键时触发")]),e._v(" "),n("td",[e._v("无")])]),e._v(" "),n("tr",[n("td",[e._v("on-click")]),e._v(" "),n("td",[e._v("设置 icon 属性后，点击图标时触发")]),e._v(" "),n("td",[e._v("无")])]),e._v(" "),n("tr",[n("td",[e._v("on-change")]),e._v(" "),n("td",[e._v("数据改变时触发")]),e._v(" "),n("td",[e._v("event")])]),e._v(" "),n("tr",[n("td",[e._v("on-focus")]),e._v(" "),n("td",[e._v("输入框聚焦时触发")]),e._v(" "),n("td",[e._v("无")])]),e._v(" "),n("tr",[n("td",[e._v("on-blur")]),e._v(" "),n("td",[e._v("输入框失去焦点时触发")]),e._v(" "),n("td",[e._v("无")])])])])])])],1)],1)},staticRenderFns:[]}},"4+/u":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("j/M6"),l=a(r),o=n("8jk8"),i=a(o);t.default={components:{gaInput:l.default},data:function(){return{moduleName:"autosize",value7:"",value8:"",Code:i.default}}}},"4IHZ":function(e,t,n){var a=n("VU/8")(n("4+/u"),n("10pg"),null,null,null);e.exports=a.exports},"6+2P":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("p",[e._v("通过 icon 属性可以在输入框右边加一个图标。点击图标，会触发 on-click 事件")]),e._v(" "),n("ga-input",{attrs:{"suffix-icon":"ios-clock-outline",placeholder:"请输入..."},on:{"on-click":e.onChangeFn},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}}),e._v(" "),n("ga-input",{attrs:{"prefix-icon":"ios-search",placeholder:"请输入..."},on:{"on-click":e.onChangeFn},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}}),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.icon)+"\n  ")])],1)},staticRenderFns:[]}},"6rvw":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("ga-input",{attrs:{width:"300"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},[n("ga-select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},[n("ga-option",{attrs:{value:"http"}},[e._v("http://")]),e._v(" "),n("ga-option",{attrs:{value:"https"}},[e._v("https://")])],1),e._v(" "),n("ga-select",{staticStyle:{width:"70px"},attrs:{slot:"append"},slot:"append",model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},[n("ga-option",{attrs:{value:"com"}},[e._v(".com")]),e._v(" "),n("ga-option",{attrs:{value:"org"}},[e._v(".org")]),e._v(" "),n("ga-option",{attrs:{value:"io"}},[e._v(".io")])],1)],1),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.icon2)+"\n  ")])],1)},staticRenderFns:[]}},"8jk8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.base='\n  <ga-input v-model="value" placeholder="请输入..." width="200"></ga-input>\n  <script>\n      export default {\n          data() {\n              return {\n                  value:\'\',\n              }\n          }\n      }\n  <\/script>\n',a.size='\n  <ga-input v-model="value1" size="large" placeholder="large size"></ga-input>\n  <br>\n  <ga-input v-model="value2" placeholder="default size"></ga-input>\n  <br>\n  <ga-input v-model="value3" size="small" placeholder="small size"></ga-input>\n  <script>\n      export default {\n          data() {\n              return {\n                  value1:\'\',\n                  value2:\'\',\n                  value3:\'\',\n              }\n          }\n      }\n  <\/script>\n',a.autosize='\n  <template>\n      <ga-input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></ga-input>\n      <ga-input v-model="value8" disabled type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></ga-input>\n  </template>\n  <script>\n      export default {\n          data () {\n              return {\n                  value7: \'\',\n                  value8: \'\'\n              }\n          }\n      }\n  <\/script>\n',a.icon='\n  <template>\n  <ga-input \n    v-model="value4" \n    suffix-icon="ios-clock-outline" \n    placeholder="请输入..."\n    @on-click="onChangeFn"/>\n  <ga-input \n    v-model="value4" \n    prefix-icon="ios-search" \n    placeholder="请输入..."\n    @on-click="onChangeFn"/>\n  </template>\n  <script>\n    export default {\n        data () {\n            return {\n                value4: \'\',\n            }\n        },\n        methods: {\n            onChangeFn(val) {\n              console.log(val)\n            }\n        }\n    }\n  <\/script>\n',a.icon2='\n  <template>\n    <ga-input v-model="value12" width="300">\n        <ga-select v-model="select1" slot="prepend" style="width: 80px">\n            <ga-option value="http">http://</ga-option>\n            <ga-option value="https">https://</ga-option>\n        </ga-select>\n        <ga-select v-model="select2" slot="append" style="width: 70px">\n            <ga-option value="com">.com</ga-option>\n            <ga-option value="org">.org</ga-option>\n            <ga-option value="io">.io</ga-option>\n        </ga-select>\n    </ga-input>\n  </template>\n    <script>\n      export default {\n        data () {\n          return {\n            value4:\'\',\n            select1: \'http\',\n            select2: \'com\',\n          }\n        }\n      }\n    <\/script>\n',a.clear='\n<template>\n<ga-input \n    v-model="value" \n    :maxlength="20" \n    @on-change="changeValue" \n    placeholder="请输入..."\n    width="200"\n    clearable/>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      value: \'\',\n    }\n  },\n\n  methods: {\n    changeValue(val) {\n    }\n  }\n}\n\n<\/script>\n',t.default=a},EX3D:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("MICi"),l=a(r),o=n("bOdI"),i=a(o),u=n("qD0P"),s=n("dOnm"),d=a(s),c=n("8BHK"),p=a(c);t.default={name:"Input",mixins:[p.default],props:{type:{validator:function(e){return(0,u.oneOf)(e,["text","textarea","password"])},default:"text"},value:{type:[String,Number],default:""},size:{validator:function(e){return(0,u.oneOf)(e,["small","large"])}},placeholder:{type:String,default:""},maxlength:{type:Number},disabled:{type:Boolean,default:!1},autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},width:{type:[String,Number],default:"200"},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},clearable:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value,prefixCls:"ga-input",prepend:!0,append:!0,slotReady:!1,textareaStyles:{}}},computed:{wrapClassesStyles:function(){return String(this.width).indexOf("%")>-1?"width: "+this.width:"width: "+this.width+"px"},wrapClasses:function(){var e;return["ga-input-wrapper",(e={},(0,i.default)(e,"ga-input-wrapper-"+this.size,!!this.size),(0,i.default)(e,"ga-input-type",this.type),(0,i.default)(e,"ga-input-group",this.prepend||this.append),(0,i.default)(e,"ga-input-group-"+this.size,(this.prepend||this.append)&&!!this.size),e)]},inputClasses:function(){var e;return["ga-input",(e={},(0,i.default)(e,"ga-input-"+this.size,!!this.size),(0,i.default)(e,"ga-input-disabled",this.disabled),e)]},textareaClasses:function(){return["ga-input",(0,i.default)({},"ga-input-disabled",this.disabled)]}},methods:{handleClear:function(){var e={target:{value:""}};this.$emit("input",""),this.setCurrentValue(""),this.$emit("on-change",e)},handleEnter:function(e){this.$emit("on-enter",e)},handleIconClick:function(e){this.$emit("on-click",e)},handleFocus:function(e){this.$emit("on-focus",e)},handleBlur:function(e){this.$emit("on-blur",e),(0,u.findComponentUpward)(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-blur",this.currentValue)},handleInput:function(e){var t=e.target.value;this.number&&(t=(0,l.default)(Number(t))?t:Number(t)),this.$emit("input",t),this.setCurrentValue(t),this.$emit("on-change",e)},handleChange:function(e){this.$emit("on-input-change",e)},setCurrentValue:function(e){var t=this;e!==this.currentValue&&(this.$nextTick(function(){t.resizeTextarea()}),this.currentValue=e,(0,u.findComponentUpward)(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-change",e))},resizeTextarea:function(){var e=this.autosize;if(!e||"textarea"!==this.type)return!1;var t=e.minRows,n=e.maxRows;this.textareaStyles=(0,d.default)(this.$refs.textarea,t,n)}},watch:{value:function(e){this.setCurrentValue(e)}},mounted:function(){"textarea"!==this.type?(this.prepend=void 0!==this.$slots.prepend,this.append=void 0!==this.$slots.append):(this.prepend=!1,this.append=!1),this.slotReady=!0,this.resizeTextarea()}}},IK7X:function(e,t,n){var a=n("VU/8")(n("L2MF"),n("WpNb"),null,null,null);e.exports=a.exports},K4R9:function(e,t,n){n("NA/8"),e.exports=n("FeBl").Number.isNaN},Kkow:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("j/M6"),l=a(r),o=n("1TJQ"),i=n("8jk8"),u=a(i);t.default={components:{gaInput:l.default},data:function(){return{moduleName:"基础输入框",value:"",Code:u.default}},methods:{changeValue:function(e){this.value=(0,o.formatMoney)((0,o.unformatMoney)(e.target.value))}}}},L2MF:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("j/M6"),l=a(r),o=n("8jk8"),i=a(o);t.default={components:{gaInput:l.default},data:function(){return{moduleName:"input尺寸",value1:"",value2:"",value3:"",Code:i.default}},methods:{onChangeFn:function(e){this.changeValue=e}}}},LsFn:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("ga-row",[n("p",[e._v("输入框类型，可选值为 text、password 或 textarea，通过添加disabled属性可将按钮设置为不可用状态。")]),e._v(" "),n("ga-input",{attrs:{maxlength:20,placeholder:"请输入...",width:"300"},on:{"on-change":e.changeValue},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},Lwhy:function(e,t,n){var a=n("VU/8")(n("fc6a"),n("lQyR"),null,null,null);e.exports=a.exports},MICi:function(e,t,n){e.exports={default:n("K4R9"),__esModule:!0}},"NA/8":function(e,t,n){var a=n("kM2E");a(a.S,"Number",{isNaN:function(e){return e!=e}})},O6It:function(e,t,n){var a=n("VU/8")(n("Kkow"),n("LsFn"),null,null,null);e.exports=a.exports},"TFP/":function(e,t,n){var a=n("VU/8")(n("ovyi"),n("6+2P"),null,null,null);e.exports=a.exports},WpNb:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("p",[e._v("输入框有三种尺寸：大、默认（中）、小通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。")]),e._v(" "),n("ga-input",{attrs:{size:"large",placeholder:"large size"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),n("br"),e._v(" "),n("ga-input",{attrs:{placeholder:"default size"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),n("br"),e._v(" "),n("ga-input",{attrs:{size:"small",placeholder:"small size"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.size)+"\n  ")])],1)},staticRenderFns:[]}},cVsj:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("O6It"),l=a(r),o=n("IK7X"),i=a(o),u=n("4IHZ"),s=a(u),d=n("TFP/"),c=a(d),p=n("j1kl"),v=a(p),f=n("Lwhy"),m=a(f);t.default={components:{basicInput:l.default,sizeInput:i.default,textareainput:s.default,iconInput:c.default,compositeInput:v.default,clearableinput:m.default}}},dOnm:function(e,t,n){"use strict";function a(e){var t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing"),a=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),r=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:i.map(function(e){return e+":"+t.getPropertyValue(e)}).join(";"),paddingSize:a,borderSize:r,boxSizing:n}}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;l||(l=document.createElement("textarea"),document.body.appendChild(l));var r=a(e),i=r.paddingSize,u=r.borderSize,s=r.boxSizing,d=r.contextStyle;l.setAttribute("style",d+";"+o),l.value=e.value||e.placeholder||"";var c=l.scrollHeight,p=-1/0,v=1/0;"border-box"===s?c+=u:"content-box"===s&&(c-=i),l.value="";var f=l.scrollHeight-i;return null!==t&&(p=f*t,"border-box"===s&&(p=p+i+u),c=Math.max(p,c)),null!==n&&(v=f*n,"border-box"===s&&(v=v+i+u),c=Math.min(v,c)),{height:c+"px",minHeight:p+"px",maxHeight:v+"px"}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=void 0,o="\n    height:0 !important;\n    min-height:0 !important;\n    max-height:none !important;\n    visibility:hidden !important;\n    overflow:hidden !important;\n    position:absolute !important;\n    z-index:-1000 !important;\n    top:0 !important;\n    right:0 !important\n",i=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"]},fc6a:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("j/M6"),l=a(r),o=n("8jk8"),i=a(o);t.default={components:{gaInput:l.default},data:function(){return{moduleName:"clear关闭",value:"",Code:i.default}},methods:{changeValue:function(e){}}}},"j/M6":function(e,t,n){var a=n("VU/8")(n("EX3D"),n("l1QH"),null,null,null);e.exports=a.exports},j1kl:function(e,t,n){var a=n("VU/8")(n("0x0W"),n("6rvw"),null,null,null);e.exports=a.exports},l1QH:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.wrapClasses,style:e.wrapClassesStyles},["textarea"!==e.type?[e.prepend?n("div",{directives:[{name:"show",rawName:"v-show",value:e.slotReady,expression:"slotReady"}],ref:"prepend",class:[e.prefixCls+"-group-prepend"]},[e._t("prepend")],2):e._e(),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.clearable&&e.currentValue?n("i",{staticClass:"ga-icon",class:["ga-icon-ios-close",e.prefixCls+"-icon",e.prefixCls+"-icon-clear",e.prefixCls+"-icon-normal"],on:{click:e.handleClear}}):e._e(),e._v(" "),e.suffixIcon?n("i",{staticClass:"ga-icon",class:["ga-icon-"+e.suffixIcon,e.prefixCls+"-icon",e.prefixCls+"-suffix-icon"],on:{click:e.handleIconClick}}):e._e(),e._v(" "),e.prefixIcon?n("i",{staticClass:"ga-icon",class:["ga-icon-"+e.prefixIcon,e.prefixCls+"-icon",e.prefixCls+"-prefix-icon"],on:{click:e.handleIconClick}}):e._e()]),e._v(" "),n("input",{class:e.inputClasses,attrs:{type:e.type,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,readonly:e.readonly,name:e.name,number:e.number,title:e.currentValue},domProps:{value:e.currentValue},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnter(t)},focus:e.handleFocus,blur:e.handleBlur,input:e.handleInput,change:e.handleChange}}),e._v(" "),e.append?n("div",{directives:[{name:"show",rawName:"v-show",value:e.slotReady,expression:"slotReady"}],ref:"append",class:[e.prefixCls+"-group-append"]},[e._t("append")],2):e._e()]:n("textarea",{ref:"textarea",class:e.textareaClasses,style:e.textareaStyles,attrs:{placeholder:e.placeholder,disabled:e.disabled,rows:e.rows,maxlength:e.maxlength,readonly:e.readonly,name:e.name},domProps:{value:e.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnter(t)},focus:e.handleFocus,blur:e.handleBlur,input:e.handleInput}})],2)},staticRenderFns:[]}},lQyR:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("ga-row",[n("ga-input",{attrs:{maxlength:20,placeholder:"请输入...",width:"200",clearable:""},on:{"on-change":e.changeValue},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.clear)+"\n  ")])],1)},staticRenderFns:[]}},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},nnf9:function(e,t,n){var a=n("VU/8")(n("cVsj"),n("3P5y"),null,null,null);e.exports=a.exports},ovyi:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("j/M6"),l=a(r),o=n("8jk8"),i=a(o);t.default={components:{gaInput:l.default},data:function(){return{moduleName:"icon input",value4:"",Code:i.default}},methods:{onChangeFn:function(e){}}}},qkKv:function(e,t,n){var a=n("FeBl"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}});