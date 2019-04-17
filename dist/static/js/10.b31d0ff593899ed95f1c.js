webpackJsonp([10],{"41NW":function(t,e,n){var s=n("VU/8")(n("v+t+"),n("NogF"),null,null,null);t.exports=s.exports},"4vFY":function(t,e,n){var s=n("VU/8")(n("D7Rl"),n("CHRr"),null,null,null);t.exports=s.exports},"7jdx":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("bOdI"),r=function(t){return t&&t.__esModule?t:{default:t}}(s),a=n("qD0P");e.default={name:"Step",props:{status:{validator:function(t){return(0,a.oneOf)(t,["wait","process","finish","error"])}},title:{type:String,default:""},content:{type:String},icon:{type:String}},data:function(){return{prefixCls:"ga-steps",stepNumber:"",nextError:!1,total:1,currentStatus:""}},created:function(){this.currentStatus=this.status},computed:{wrapClasses:function(){var t;return["ga-steps-item","ga-steps-status-"+this.currentStatus,(t={},(0,r.default)(t,"ga-steps-custom",!!this.icon),(0,r.default)(t,"ga-steps-next-error",this.nextError),t)]},iconClasses:function(){var t="";return this.icon?t=this.icon:"finish"==this.currentStatus?t="ios-checkmark-empty":"error"==this.currentStatus&&(t="ios-close-empty"),["ga-steps-icon","ga-icon",(0,r.default)({},"ga-icon-"+t,""!=t)]},styles:function(){return{width:1/this.total*100+"%"}}},watch:{status:function(t){this.currentStatus=t,"error"==this.currentStatus&&this.$parent.setNextError()}}}},A5ji:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("gNyE"),a=s(r),i=n("K6nr"),o=s(i),u=n("rw1U"),l=s(u);e.default={components:{vStep:a.default,vSteps:o.default},data:function(){return{moduleName:"基本使用",Code:l.default}}}},CHRr:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:t.moduleName}},[n("v-steps",{attrs:{current:2,size:"small"}},[n("v-step",{attrs:{title:"已完成"}}),t._v(" "),n("v-step",{attrs:{title:"进行中"}}),t._v(" "),n("v-step",{attrs:{title:"待进行"}}),t._v(" "),n("v-step",{attrs:{title:"待进行"}})],1),t._v(" "),n("v-code",{attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.simple)+"\n  ")])],1)},staticRenderFns:[]}},D7Rl:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("gNyE"),a=s(r),i=n("K6nr"),o=s(i),u=n("rw1U"),l=s(u);e.default={components:{vStep:a.default,vSteps:o.default},data:function(){return{moduleName:"简单样例",Code:l.default}}}},"Ji+X":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,attrs:{type:t.htmlType,disabled:t.disabled},on:{click:t.handleClick}},[t.loading?n("Icon",{staticClass:"ga-load-loop",attrs:{type:"load-c"}}):t._e(),t._v(" "),t.icon&&!t.loading?n("Icon",{attrs:{type:t.icon}}):t._e(),t._v(" "),t.showSlot?n("span",{ref:"slot"},[t._t("default")],2):t._e()],1)},staticRenderFns:[]}},K6nr:function(t,e,n){var s=n("VU/8")(n("i1PX"),n("khpv"),null,null,null);t.exports=s.exports},KRAm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:t.moduleName}},[n("p",[t._v("当前正在进行第 "+t._s(t.current+1)+" 步")]),t._v(" "),n("v-steps",{attrs:{current:t.current}},[n("v-step",{attrs:{title:"步骤1"}}),t._v(" "),n("v-step",{attrs:{title:"步骤2"}}),t._v(" "),n("v-step",{attrs:{title:"步骤3"}}),t._v(" "),n("v-step",{attrs:{title:"步骤4"}})],1),t._v(" "),n("v-button",{attrs:{type:"primary"},on:{"on-click":t.next}},[t._v("Next step")]),t._v(" "),n("v-code",{attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.next)+"\n  ")])],1)},staticRenderFns:[]}},NogF:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:t.moduleName}},[n("v-steps",{attrs:{current:1,status:"error"}},[n("v-step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}}),t._v(" "),n("v-step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}}),t._v(" "),n("v-step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}}),t._v(" "),n("v-step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}})],1),t._v(" "),n("v-code",{attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.error)+"\n  ")])],1)},staticRenderFns:[]}},SykP:function(t,e,n){var s=n("VU/8")(n("VRdx"),n("KRAm"),null,null,null);t.exports=s.exports},VRdx:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("gNyE"),a=s(r),i=n("K6nr"),o=s(i),u=n("jTp8"),l=s(u),c=n("rw1U"),d=s(c);e.default={components:{vStep:a.default,vSteps:o.default,vButton:l.default},data:function(){return{moduleName:"下一步样例",Code:d.default,current:0}},methods:{next:function(){3==this.current?this.current=0:this.current+=1}}}},XD6h:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:t.moduleName}},[n("v-steps",{attrs:{current:1}},[n("v-step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}}),t._v(" "),n("v-step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}}),t._v(" "),n("v-step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}}),t._v(" "),n("v-step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}})],1),t._v(" "),n("v-code",{attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},cAL2:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("gNyE"),a=s(r),i=n("K6nr"),o=s(i),u=n("rw1U"),l=s(u);e.default={components:{vStep:a.default,vSteps:o.default},data:function(){return{moduleName:"icon样例",Code:l.default}}}},gAsN:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("hXl3"),a=s(r),i=n("4vFY"),o=s(i),u=n("ogx2"),l=s(u),c=n("SykP"),d=s(c),p=n("41NW"),v=s(p);e.default={components:{basicsteps:a.default,simplesteps:o.default,iconsteps:l.default,nextsteps:d.default,errorsteps:v.default}}},gNyE:function(t,e,n){var s=n("VU/8")(n("7jdx"),n("hT/i"),null,null,null);t.exports=s.exports},"hT/i":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.wrapClasses,style:t.styles},[n("div",{class:[t.prefixCls+"-tail"]},[n("i")]),t._v(" "),n("div",{class:[t.prefixCls+"-head"]},[n("div",{class:[t.prefixCls+"-head-inner"]},[t.icon||"finish"==t.currentStatus||"error"==t.currentStatus?n("span",{class:t.iconClasses}):n("span",[t._v(t._s(t.stepNumber))])])]),t._v(" "),n("div",{class:[t.prefixCls+"-main"]},[n("div",{class:[t.prefixCls+"-title"]},[t._v(t._s(t.title))]),t._v(" "),t.content?n("div",{class:[t.prefixCls+"-content"]},[t._v(t._s(t.content))]):t._e()])])},staticRenderFns:[]}},hXl3:function(t,e,n){var s=n("VU/8")(n("A5ji"),n("XD6h"),null,null,null);t.exports=s.exports},"hmp/":function(t,e,n){var s=n("VU/8")(n("gAsN"),n("jQWL"),null,null,null);t.exports=s.exports},i1PX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("bOdI"),r=function(t){return t&&t.__esModule?t:{default:t}}(s),a=n("qD0P");e.default={name:"Steps",props:{current:{type:Number,default:0},status:{validator:function(t){return(0,a.oneOf)(t,["wait","process","finish","error"])},default:"process"},size:{validator:function(t){return(0,a.oneOf)(t,["small"])}},direction:{validator:function(t){return(0,a.oneOf)(t,["horizontal","vertical"])},default:"horizontal"}},computed:{classes:function(){return["ga-steps","ga-steps-"+this.direction,(0,r.default)({},"ga-steps-"+this.size,!!this.size)]}},mounted:function(){this.updateChildProps(!0),this.setNextError(),this.updateCurrent(!0)},methods:{updateChildProps:function(t){var e=this,n=this.$children.length;this.$children.forEach(function(s,r){s.stepNumber=r+1,"horizontal"===e.direction&&(s.total=n),t&&s.currentStatus||(r==e.current?"error"!=e.status&&(s.currentStatus="process"):r<e.current?s.currentStatus="finish":s.currentStatus="wait"),"error"!=s.currentStatus&&0!=r&&(e.$children[r-1].nextError=!1)})},setNextError:function(){var t=this;this.$children.forEach(function(e,n){"error"==e.currentStatus&&0!=n&&(t.$children[n-1].nextError=!0)})},updateCurrent:function(t){if(!(this.current<0||this.current>=this.$children.length))if(t){var e=this.$children[this.current].currentStatus;e||(this.$children[this.current].currentStatus=this.status)}else this.$children[this.current].currentStatus=this.status}},watch:{current:function(){this.updateChildProps()},status:function(){this.updateCurrent()}}}},jQWL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-page",[n("ga-row",[n("basicsteps"),t._v(" "),n("simplesteps"),t._v(" "),n("iconsteps"),t._v(" "),n("nextsteps"),t._v(" "),n("errorsteps")],1),t._v(" "),n("ga-panel",{attrs:{moduleName:"API说明"}},[n("ga-row",[n("div",{staticClass:"api"},[n("h4",[t._v("steps events")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("current")]),t._v(" "),n("td",[t._v("当前步骤，从 0 开始计数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("status")]),t._v(" "),n("td",[t._v("当前步骤的状态，可选值为"),n("code",[t._v("wait")]),t._v("、"),n("code",[t._v("process")]),t._v("、"),n("code",[t._v("finish")]),t._v("、"),n("code",[t._v("error")])]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("process")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",[t._v("步骤条的尺寸，可选值为"),n("code",[t._v("small")]),t._v("或者不写")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("direction")]),t._v(" "),n("td",[t._v("步骤条的方向，可选值为"),n("code",[t._v("horizontal")]),t._v("（水平）或"),n("code",[t._v("vertical")]),t._v("（垂直）")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("horizontal")])])])]),t._v(" "),n("h4",[t._v("step props")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("status")]),t._v(" "),n("td",[t._v("步骤的状态，可选值为"),n("code",[t._v("wait")]),t._v("、"),n("code",[t._v("process")]),t._v("、"),n("code",[t._v("finish")]),t._v("、"),n("code",[t._v("error")]),t._v("，不设置时自动判断")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("process")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("标题")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("空")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("步骤的详细描述，可选")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("步骤的图标，可选")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])])])])])])],1)],1)},staticRenderFns:[]}},jTp8:function(t,e,n){var s=n("VU/8")(n("tYf6"),n("Ji+X"),null,null,null);t.exports=s.exports},khpv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},ogx2:function(t,e,n){var s=n("VU/8")(n("cAL2"),n("s84N"),null,null,null);t.exports=s.exports},rw1U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};s.base='\n<template>\n    <ga-steps :current="1">\n      <ga-step title="已完成" content="这里是该步骤的描述信息"></ga-step>\n      <ga-step title="进行中" content="这里是该步骤的描述信息"></ga-step>\n      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>\n      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>\n    </ga-steps>\n</template>\n<script>\n    export default {\n\n    }\n<\/script>\n',s.simple='\n<template>\n    <ga-steps :current="2" size="small">\n      <ga-step title="已完成"></ga-step>\n      <ga-step title="进行中"></ga-step>\n      <ga-step title="待进行"></ga-step>\n      <ga-step title="待进行"></ga-step>\n    </ga-steps>\n</template>\n<script>\n    export default {\n\n    }\n<\/script>\n',s.icon='\n<template>\n    <ga-steps :current="1">\n      <ga-step title="注册" icon="person-add"></ga-step>\n      <ga-step title="上传头像" icon="camera"></ga-step>\n      <ga-step title="验证邮箱" icon="email"></ga-step>\n    </ga-steps>\n</template>\n<script>\n    export default {\n\n    }\n<\/script>\n',s.next='\n<template>\n    <p>当前正在进行第 {{ current + 1 }} 步</p>\n    <ga-steps :current="current">\n        <ga-step title="步骤1"></ga-step>\n        <ga-step title="步骤2"></ga-step>\n        <ga-step title="步骤3"></ga-step>\n        <ga-step title="步骤4"></ga-step>\n    </ga-steps>\n    <Button type="primary" @click="next">Next step</Button>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                current: 0\n            }\n        },\n        methods: {\n            next () {\n                if (this.current == 3) {\n                    this.current = 0;\n                } else {\n                    this.current += 1;\n                }\n            }\n        }\n    }\n<\/script>\n',s.error='\n<template>\n    <ga-steps :current="1" status="error">\n      <ga-step title="已完成" content="这里是该步骤的描述信息"></ga-step>\n      <ga-step title="进行中" content="这里是该步骤的描述信息"></ga-step>\n      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>\n      <ga-step title="待进行" content="这里是该步骤的描述信息"></ga-step>\n    </ga-steps>\n</template>\n<script>\n    export default {\n\n    }\n<\/script>\n',e.default=s},s84N:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:t.moduleName}},[n("v-steps",{attrs:{current:1}},[n("v-step",{attrs:{title:"注册",icon:"person-add"}}),t._v(" "),n("v-step",{attrs:{title:"上传头像",icon:"camera"}}),t._v(" "),n("v-step",{attrs:{title:"验证邮箱",icon:"email"}})],1),t._v(" "),n("v-code",{attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.icon)+"\n  ")])],1)},staticRenderFns:[]}},tYf6:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("bOdI"),a=s(r),i=n("Q5u7"),o=s(i),u=n("qD0P");e.default={name:"Button",components:{Icon:o.default},props:{type:{type:[String,Array],validator:function(t){return(0,u.oneOf)(t,["primary","ghost","dashed","text","info","success","warning","error"])}},shape:{validator:function(t){return(0,u.oneOf)(t,["circle","circle-outline"])}},size:{validator:function(t){return(0,u.oneOf)(t,["small","large"])}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator:function(t){return(0,u.oneOf)(t,["button","submit","reset"])}},icon:String,long:{type:Boolean,default:!1}},data:function(){return{showSlot:!0}},computed:{classes:function(){var t;return["ga-btn",(t={},(0,a.default)(t,"ga-btn-"+this.type,!!this.type),(0,a.default)(t,"ga-btn-long",this.long),(0,a.default)(t,"ga-btn-"+this.shape,!!this.shape),(0,a.default)(t,"ga-btn-"+this.size,!!this.size),(0,a.default)(t,"ga-btn-loading",null!=this.loading&&this.loading),(0,a.default)(t,"ga-btn-icon-only",!this.showSlot&&(!!this.icon||this.loading)),t)]}},methods:{handleClick:function(t){this.$emit("on-click",t)}},mounted:function(){this.showSlot=void 0!==this.$slots.default}}},"v+t+":function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("gNyE"),a=s(r),i=n("K6nr"),o=s(i),u=n("rw1U"),l=s(u);e.default={components:{vStep:a.default,vSteps:o.default},data:function(){return{moduleName:"步骤错误样例",Code:l.default}}}}});