webpackJsonp([35],{"6wVe":function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v=o("k/d3"),e=function(t){return t&&t.__esModule?t:{default:t}}(v);a.default={components:{basicgrid:e.default}}},SK2T:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v={};v.base='\n  <ga-row>\n    <ga-col span="12">col-12</ga-col>\n    <ga-col span="12">col-12</ga-col>\n  </ga-row>\n  <br>\n  <ga-row>\n    <ga-col span="8">col-8</ga-col>\n    <ga-col span="8">col-8</ga-col>\n    <ga-col span="8">col-8</ga-col>\n  </ga-row>\n  <br>\n  <ga-row>\n    <ga-col span="6">col-6</ga-col>\n    <ga-col span="6">col-6</ga-col>\n    <ga-col span="6">col-6</ga-col>\n    <ga-col span="6">col-6</ga-col>\n  </ga-row>\n  <ga-row type="flex">\n    <ga-col span="6" order="4">1 | order-4</ga-col>\n    <ga-col span="6" order="3">2 | order-3</ga-col>\n    <ga-col span="6" order="2">3 | order-2</ga-col>\n    <ga-col span="6" order="1">4 | order-1</ga-col>\n  </ga-row>\n  <ga-row>\n    <ga-col span="8">col-8</ga-col>\n    <ga-col span="8" offset="8">col-8 | offset-8</ga-col>\n  </ga-row>\n  <br>\n  <ga-row>\n    <ga-col span="6" offset="8">col-6 | offset-8</ga-col>\n    <ga-col span="6" offset="4">col-6 | offset-4</ga-col>\n  </ga-row>\n  <br>\n  <ga-row>\n    <ga-col span="12" offset="8">col-12 | offset-8</ga-col>\n  </ga-row>\n',a.default=v},XjMK:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v=o("SK2T"),e=function(t){return t&&t.__esModule?t:{default:t}}(v);a.default={components:{},data:function(){return{moduleName:"基本使用",Code:e.default}},props:{},watch:{},methods:{}}},Z2nE:function(t,a,o){var v=o("pAVX");"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);o("rjj0")("0068ed98",v,!0,{})},e6Ov:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ga-panel",{staticClass:"grid",attrs:{moduleName:t.moduleName}},[o("ga-row",[o("ga-col",{attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),o("ga-col",{attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),o("br"),t._v(" "),o("ga-row",[o("ga-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("ga-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("ga-col",{attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),o("br"),t._v(" "),o("ga-row",[o("ga-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("ga-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("ga-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("ga-col",{attrs:{span:"6"}},[t._v("col-6")])],1),t._v(" "),o("ga-row",{attrs:{type:"flex"}},[o("ga-col",{attrs:{span:"6",order:"4"}},[t._v("1 | order-4")]),t._v(" "),o("ga-col",{attrs:{span:"6",order:"3"}},[t._v("2 | order-3")]),t._v(" "),o("ga-col",{attrs:{span:"6",order:"2"}},[t._v("3 | order-2")]),t._v(" "),o("ga-col",{attrs:{span:"6",order:"1"}},[t._v("4 | order-1")])],1),t._v(" "),o("ga-row",[o("ga-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("ga-col",{attrs:{span:"8",offset:"8"}},[t._v("col-8 | offset-8")])],1),t._v(" "),o("br"),t._v(" "),o("ga-row",[o("ga-col",{attrs:{span:"6",offset:"8"}},[t._v("col-6 | offset-8")]),t._v(" "),o("ga-col",{attrs:{span:"6",offset:"4"}},[t._v("col-6 | offset-4")])],1),t._v(" "),o("br"),t._v(" "),o("ga-row",[o("ga-col",{attrs:{span:"12",offset:"8"}},[t._v("col-12 | offset-8")])],1),t._v(" "),o("v-code",{attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},j0Nj:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-page",[o("ga-row",[o("basicgrid")],1),t._v(" "),o("ga-panel",{attrs:{moduleName:"API说明/事件说明"}},[o("ga-row",[o("div",{staticClass:"api"},[o("h4",[t._v("row")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("gutter")]),t._v(" "),o("td",[t._v("栅格间距，单位 px，左右平分")]),t._v(" "),o("td",[t._v("Number")]),t._v(" "),o("td",[t._v("0")])]),t._v(" "),o("tr",[o("td",[t._v("type")]),t._v(" "),o("td",[t._v("布局模式，可选值为"),o("code",[t._v("flex")]),t._v("或不选，在现代浏览器下有效")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("align")]),t._v(" "),o("td",[t._v("flex 布局下的垂直对齐方式，可选值为"),o("code",[t._v("top")]),t._v("、"),o("code",[t._v("middle")]),t._v("、"),o("code",[t._v("bottom")])]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("justify")]),t._v(" "),o("td",[t._v("flex 布局下的水平排列方式，可选值为"),o("code",[t._v("start")]),t._v("、"),o("code",[t._v("end")]),t._v("、"),o("code",[t._v("center")]),t._v("、"),o("code",[t._v("space-around")]),t._v("、"),o("code",[t._v("space-between")])]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("class-name")]),t._v(" "),o("td",[t._v("自定义的class名称")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])])])]),t._v(" "),o("h4",[t._v("col")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("span")]),t._v(" "),o("td",[t._v("栅格的占位格数，可选值为0~24的整数，为 0 时，相当于"),o("code",[t._v("display:none")])]),t._v(" "),o("td",[t._v("Number | String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("order")]),t._v(" "),o("td",[t._v("栅格的顺序，在"),o("code",[t._v("flex")]),t._v("布局模式下有效")]),t._v(" "),o("td",[t._v("Number | String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("offset")]),t._v(" "),o("td",[t._v("栅格左侧的间隔格数，间隔内不可以有栅格")]),t._v(" "),o("td",[t._v("Number | String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("push")]),t._v(" "),o("td",[t._v("栅格向右移动格数")]),t._v(" "),o("td",[t._v("Number | String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("pull")]),t._v(" "),o("td",[t._v("栅格向左移动格数")]),t._v(" "),o("td",[t._v("Number | String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("class-name")]),t._v(" "),o("td",[t._v("自定义的class名称")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("xs")]),t._v(" "),o("td",[o("code",[t._v("<768px")]),t._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]),t._v(" "),o("td",[t._v("Number | Object")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("sm")]),t._v(" "),o("td",[o("code",[t._v("≥768px")]),t._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]),t._v(" "),o("td",[t._v("Number | Object")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("md")]),t._v(" "),o("td",[o("code",[t._v("≥992px")]),t._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]),t._v(" "),o("td",[t._v("Number | Object")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("lg")]),t._v(" "),o("td",[o("code",[t._v("≥1200px")]),t._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]),t._v(" "),o("td",[t._v("Number | Object")]),t._v(" "),o("td",[t._v("-")])])])])])])],1)],1)},staticRenderFns:[]}},"k/d3":function(t,a,o){function v(t){o("Z2nE")}var e=o("VU/8")(o("XjMK"),o("e6Ov"),v,"data-v-16247a9b",null);t.exports=e.exports},pAVX:function(t,a,o){a=t.exports=o("FZ+f")(!0),a.push([t.i,".grid .ga-col[data-v-16247a9b]{background:rgba(0,153,229,.7);margin-top:10px;padding:10px 0;color:#fff;text-align:center}.bottom[data-v-16247a9b],.top[data-v-16247a9b]{text-align:center}.center[data-v-16247a9b]{width:300px;margin:10px auto;overflow:hidden}.center-left[data-v-16247a9b]{float:left}.center-right[data-v-16247a9b]{float:right}","",{version:3,sources:["/Users/xiangshoulai/work/big-screen/gaui/src/views/grid/module/basicgrid.vue"],names:[],mappings:"AACA,+BACE,8BAA+B,AAC/B,gBAAiB,AACjB,eAAgB,AAChB,WAAW,AACX,iBAAmB,CACpB,AACD,+CAEE,iBAAmB,CACpB,AACD,yBACE,YAAa,AACb,iBAAkB,AAClB,eAAiB,CAClB,AACD,8BACE,UAAY,CACb,AACD,+BACE,WAAa,CACd",file:"basicgrid.vue",sourcesContent:["\n.grid .ga-col[data-v-16247a9b] {\n  background: rgba(0,153,229,.7);\n  margin-top: 10px;\n  padding: 10px 0;\n  color:#fff;\n  text-align: center;\n}\n.top[data-v-16247a9b],\n.bottom[data-v-16247a9b] {\n  text-align: center;\n}\n.center[data-v-16247a9b] {\n  width: 300px;\n  margin: 10px auto;\n  overflow: hidden;\n}\n.center-left[data-v-16247a9b] {\n  float: left;\n}\n.center-right[data-v-16247a9b] {\n  float: right;\n}\n\n"],sourceRoot:""}])},"z+Yn":function(t,a,o){var v=o("VU/8")(o("6wVe"),o("j0Nj"),null,null,null);t.exports=v.exports}});