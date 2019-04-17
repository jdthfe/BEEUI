webpackJsonp([24],{"02rW":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("bOdI"),o=function(n){return n&&n.__esModule?n:{default:n}}(s),a=t("qD0P");e.default={name:"Spin",props:{size:{validator:function(n){return(0,a.oneOf)(n,["small","large"])}},fix:{type:Boolean,default:!1}},data:function(){return{showText:!1}},computed:{classes:function(){var n;return["ga-spin",(n={},(0,o.default)(n,"ga-spin-"+this.size,!!this.size),(0,o.default)(n,"ga-spin-fix",this.fix),(0,o.default)(n,"ga-spin-show-text",this.showText),n)]},mainClasses:function(){return"ga-spin-main"},dotClasses:function(){return"ga-spin-dot"},textClasses:function(){return"ga-spin-text"}},mounted:function(){this.showText=void 0!==this.$slots.default}}},"61+F":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};s.base="\n<template>\n  <ga-row>\n      <ga-col class=\"demo-spin-col\">\n        <ga-spin :fix='fix'>\n        </ga-spin>\n      </ga-col>\n    </ga-row>\n</template>\n<style>\n.demo-spin-col {\n  height: 100px;\n  position: relative;\n  border: 1px solid #eee;\n}\n</style>\n<script>\nexport default {\n  data() {\n    return {\n      fix: true,\n    }\n  },\n}\n<\/script>\n",s.zdy='\n<template>\n    <ga-row>\n      <ga-col class="demo-spin-col">\n        <ga-spin :fix=\'fix\'>\n          <ga-icon type="load-c" size=22 class="demo-spin-icon-load"></ga-icon>\n          <div class="loading-text">loading</div>\n        </ga-spin>\n      </ga-col>\n    </ga-row>\n</template>\n<style>\n.demo-spin-icon-load {\n  animation: ani-demo-spin 1s linear infinite;\n}\n\n@keyframes ani-demo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.demo-spin-col {\n  height: 100px;\n  position: relative;\n  border: 1px solid #eee;\n}\n\n</style>\n<script>\nexport default {\n  data() {\n    return {\n      fix: true,\n    }\n  },\n}\n<\/script>\n\n',e.default=s},A3L3:function(n,e,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("Dmrn"),a=s(o),i=t("hteN"),r=s(i),l=t("61+F"),d=s(l);e.default={components:{gaSpin:a.default,gaIcon:r.default},data:function(){return{moduleName:"自定义用法",fix:!0,Code:d.default}}}},ClVQ:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,".demo-spin-icon-load{animation:ani-demo-spin 1s linear infinite}@keyframes ani-demo-spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.demo-spin-col{height:100px;position:relative;border:1px solid #eee}","",{version:3,sources:["/Users/xiangshoulai/work/big-screen/gaui/src/views/spin/module/zdyspin.vue"],names:[],mappings:"AACA,qBACE,0CAA4C,CAC7C,AACD,yBACA,GACI,sBAAwB,CAC3B,AACD,IACI,wBAA0B,CAC7B,AACD,GACI,uBAA0B,CAC7B,CACA,AACD,eACE,aAAc,AACd,kBAAmB,AACnB,qBAAuB,CACxB",file:"zdyspin.vue",sourcesContent:["\n.demo-spin-icon-load {\n  animation: ani-demo-spin 1s linear infinite;\n}\n@keyframes ani-demo-spin {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.demo-spin-col {\n  height: 100px;\n  position: relative;\n  border: 1px solid #eee;\n}\n\n"],sourceRoot:""}])},Dmrn:function(n,e,t){var s=t("VU/8")(t("02rW"),t("KdOs"),null,null,null);n.exports=s.exports},I1UX:function(n,e,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("Dmrn"),a=s(o),i=t("61+F"),r=s(i);e.default={components:{gaSpin:a.default},data:function(){return{moduleName:"基本用法",fix:!0,Code:r.default}}}},KdOs:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:n.classes,attrs:{name:"fade"}},[t("div",{class:n.mainClasses},[t("span",{class:n.dotClasses}),n._v(" "),t("div",{class:n.textClasses},[n._t("default")],2)])])},staticRenderFns:[]}},Khqr:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ga-panel",{attrs:{moduleName:n.moduleName}},[t("ga-row",[t("ga-col",{staticClass:"demo-spin-col"},[t("ga-spin",{attrs:{fix:n.fix}})],1)],1),n._v(" "),t("v-code",{attrs:{language:"html"}},[n._v("\n    "+n._s(n.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},Krpz:function(n,e,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("oxyg"),a=s(o),i=t("LaJH"),r=s(i);e.default={components:{basicspin:a.default,zdyspin:r.default}}},LaJH:function(n,e,t){function s(n){t("mbWg")}var o=t("VU/8")(t("A3L3"),t("fGDk"),s,null,null);n.exports=o.exports},aI1g:function(n,e,t){var s=t("VU/8")(t("Krpz"),t("sGA6"),null,null,null);n.exports=s.exports},fGDk:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ga-panel",{attrs:{moduleName:n.moduleName}},[t("ga-row",[t("ga-col",{staticClass:"demo-spin-col"},[t("ga-spin",{attrs:{fix:n.fix}},[t("ga-icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"22"}}),n._v(" "),t("div",{staticClass:"loading-text"},[n._v("loading")])],1)],1)],1),n._v(" "),t("v-code",{attrs:{language:"html"}},[n._v("\n    "+n._s(n.Code.zdy)+"\n  ")])],1)},staticRenderFns:[]}},hO3u:function(n,e,t){var s=t("p6jj");"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t("rjj0")("14787972",s,!0,{})},mbWg:function(n,e,t){var s=t("ClVQ");"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t("rjj0")("633d861b",s,!0,{})},oxyg:function(n,e,t){function s(n){t("hO3u")}var o=t("VU/8")(t("I1UX"),t("Khqr"),s,null,null);n.exports=o.exports},p6jj:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,".demo-spin-col{height:100px;position:relative;border:1px solid #eee}","",{version:3,sources:["/Users/xiangshoulai/work/big-screen/gaui/src/views/spin/module/basicspin.vue"],names:[],mappings:"AACA,eACE,aAAc,AACd,kBAAmB,AACnB,qBAAuB,CACxB",file:"basicspin.vue",sourcesContent:["\n.demo-spin-col {\n  height: 100px;\n  position: relative;\n  border: 1px solid #eee;\n}\n\n"],sourceRoot:""}])},sGA6:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-page",[t("ga-row",[t("basicspin"),n._v(" "),t("zdyspin")],1),n._v(" "),t("ga-panel",{attrs:{moduleName:"API说明/事件说明"}},[t("ga-row",[t("div",{staticClass:"api"},[t("h4",[n._v("API说明")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("属性")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("size")]),n._v(" "),t("td",[n._v("Spin尺寸，可选值为"),t("code",[n._v("large")]),n._v("和"),t("code",[n._v("small")]),n._v("或者不设置")]),n._v(" "),t("td",[n._v("String")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("fix")]),n._v(" "),t("td",[n._v("是否固定，需要父级有"),t("code",[n._v("relative")]),n._v("或"),t("code",[n._v("absolute")])]),n._v(" "),t("td",[n._v("Boolean")]),n._v(" "),t("td",[n._v("false")])])])])])])],1)],1)},staticRenderFns:[]}}});