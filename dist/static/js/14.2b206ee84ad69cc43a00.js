webpackJsonp([14],{"+mRZ":function(e,t,n){var r=n("s99m");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("1b5ea85b",r,!0,{})},"1e75":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ga-panel",{attrs:{moduleName:e.moduleName}},[n("ga-address",{attrs:{"all-areas":e.allAreas},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),n("v-code",{attrs:{language:"html"}},[e._v("\n    "+e._s(e.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},"5gI5":function(e,t,n){var r=n("VU/8")(n("CUEt"),n("fNkz"),null,null,null);e.exports=r.exports},"5zde":function(e,t,n){n("zQR9"),n("qyJz"),e.exports=n("FeBl").Array.from},"6GRf":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-page",[n("ga-row",[n("basic")],1),e._v(" "),n("ga-panel",{attrs:{moduleName:"API说明"}},[n("ga-row",[n("div",{staticClass:"api"},[n("h4",[e._v("api")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("v-model绑定的值")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("all-areas")]),e._v(" "),n("td",[e._v("地址全量值")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("width")]),e._v(" "),n("td",[e._v("外层宽度设置，会影响弹出层的宽度")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("450")])]),e._v(" "),n("tr",[n("td",[e._v("input-width")]),e._v(" "),n("td",[e._v("input框宽度设置")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("200")])]),e._v(" "),n("tr",[n("td",[e._v("max-deep")]),e._v(" "),n("td",[e._v("最大层级深度设置")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("3")])]),e._v(" "),n("tr",[n("td",[e._v("append-to-body")]),e._v(" "),n("td",[e._v("下拉弹窗是否添加到body中")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("placement")]),e._v(" "),n("td",[e._v("弹出层方向设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("bottom")])]),e._v(" "),n("tr",[n("td",[e._v("placeholder")]),e._v(" "),n("td",[e._v("提示文字设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("请选择省市区")])])])]),e._v(" "),n("h4",[e._v("事件")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-change")]),e._v(" "),n("td",[e._v("点击选中触发改变事件")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("Array")])])])])])])],1)],1)},staticRenderFns:[]}},CUEt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=function(e){return e&&e.__esModule?e:{default:e}}(r),s=n("qD0P"),o=a.default.prototype.$isServer,i=o?function(){}:n("Zgw8").default;t.default={name:"Drop",props:{placement:{type:String,default:"bottom-start"}},data:function(){return{popper:null,width:""}},computed:{styles:function(){var e={};return this.width&&(e.width=this.width+"px"),"bottom-start"===this.placement&&(e.top="auto"),"top"===this.placement&&(e.top="-145px"),e}},methods:{update:function(){var e=this;o||(this.popper?this.$nextTick(function(){e.popper.update()}):this.$nextTick(function(){e.popper=new i(e.$parent.$refs.reference,e.$el,{placement:e.placement,modifiers:{computeStyle:{gpuAcceleration:!1}},onCreate:function(){e.resetTransformOrigin(),e.$nextTick(e.popper.update())},onUpdate:function(){e.resetTransformOrigin()}})}),"gaAddress"===this.$parent.$options.name&&(this.width=parseInt((0,s.getStyle)(this.$parent.$el,"width"))))},destroy:function(){var e=this;this.popper&&setTimeout(function(){e.popper.destroy(),e.popper=null},300)},resetTransformOrigin:function(e){var t=this.popper.popper.getAttribute("x-placement").split("-")[0];this.popper.popper.style.transformOrigin="bottom"===t?"center top":"center bottom"}},created:function(){this.$on("on-update-popper",this.update),this.$on("on-destroy-popper",this.destroy)},beforeDestroy:function(){this.popper&&this.popper.destroy()}}},DCGC:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.handleClose,expression:"handleClose"}],ref:"reference",staticClass:"ga-adress-wrap",style:e.classesStyles,on:{click:function(t){e.showContent=!e.showContent}}},[n("div",{staticClass:"ga-adress-text-wrap",style:{width:e.inputWidth+"px"}},[n("div",{staticClass:"ga-adress-text",attrs:{title:e.inputTitle}},[e._v(e._s(e.inputTitle))]),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCloseIcon,expression:"showCloseIcon"}],class:[e.prefixCls+"-arrow"],attrs:{type:"ios-close"},nativeOn:{click:function(t){return t.stopPropagation(),e.clearSelect(t)}}})],1),e._v(" "),n("transition",{attrs:{name:e.transitionName}},[n("Drop",{directives:[{name:"show",rawName:"v-show",value:e.showContent,expression:"showContent"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"dropdown",class:e.dropdownBody,attrs:{placement:e.placement,"data-append-to-body":e.appendToBody}},[n("div",{staticClass:"ga-adress-content-wrap",style:{width:e.width+"px"}},[n("div",{staticClass:"tab-wrap tab-select clearfix"},e._l(e.comValues,function(t,r){return n("div",{key:r,class:["tab-item","fl",e.selectedIndex===r?"tab-item-select":""],on:{click:function(t){return t.stopPropagation(),e.setSelectedIndex(r)}}},[e._v(e._s(t.name)+"\n            ")])}),0),e._v(" "),n("div",{on:{click:function(t){return t.stopPropagation(),e.selectArea(t)}}},e._l(e.areaList,function(t,r){return n("div",{key:r,staticClass:"fl ga-adress-btn",class:e.classes(t),attrs:{"data-self-id":t.id}},[e._v(e._s(t.name))])}),0)])])],1)],1)},staticRenderFns:[]}},DJLo:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("KqIs"),s=r(a),o=n("cfei"),i=r(o);t.default={components:{gaAddress:s.default},data:function(){return{moduleName:"基本使用",Code:i.default,value:[],allAreas:[{id:"北京市",name:"北京市",level:"PROVINCE",nodes:[{id:"北京市",name:"北京市",level:"CITY",nodes:[{id:"昌平区",name:"昌平区",level:"DISTRICT",nodes:[]}]}]},{id:"安徽省",name:"安徽省",level:"PROVINCE",nodes:[{id:"安庆市",name:"安庆市",level:"CITY",nodes:[{id:"大观区",name:"大观区",level:"DISTRICT",nodes:[]}]}]}]}},methods:{}}},FmOZ:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Gu7T"),s=r(a),o=n("bOdI"),i=r(o),d=n("Q5u7"),l=r(d),u=n("5gI5"),c=r(u),p=n("KW0B"),v=r(p),f=n("oeHJ"),_=r(f),h=n("qD0P"),m=n("8BHK"),y=r(m);t.default={name:"gaAddress",mixins:[y.default],components:{Drop:c.default,Icon:l.default},directives:{TransferDom:_.default,clickoutside:v.default},props:{value:Array,allAreas:Array,width:{type:Number,default:450},inputWidth:{type:Number,default:200},maxDeep:{type:Number,default:3},appendToBody:{type:Boolean,default:!1},placement:{validator:function(e){return(0,h.oneOf)(e,["top","bottom"])},default:"bottom"},placeholder:{type:String,default:"请选择省市区"},clearable:{type:Boolean,default:!1}},data:function(){return{prefixCls:"ga-address",selectedIndex:0,showContent:!1}},computed:{showCloseIcon:function(){return this.clearable},classesStyles:function(){return String(this.width).indexOf("%")>-1?"width: "+this.width:"width: "+this.width+"px;"},transitionName:function(){return"bottom"===this.placement?"slide-up":"slide-down"},dropdownBody:function(){return[(0,i.default)({},"ga-address-dropdown-body",this.appendToBody)]},comValues:function(){return this.value.length<this.maxDeep?[].concat((0,s.default)(this.value),[{name:"请选择"}]):[].concat((0,s.default)(this.value))},inputTitle:function(){var e="";return this.value.forEach(function(t){e+=t.name+" "||""}),e||this.placeholder},areaList:function(){var e=this;return this.value.reduce(function(t,n,r){return r<e.selectedIndex?t.filter(function(t){return t.id===e.value[r].id})[0].nodes:t},this.allAreas)}},watch:{showContent:function(e){e?this.broadcast("Drop","on-update-popper"):this.broadcast("Drop","on-destroy-popper")}},methods:{classes:function(e){return[(0,i.default)({},"ga-address-address-select",this.value[this.selectedIndex]&&this.value[this.selectedIndex].name===e.name)]},clearSelect:function(){},handleClose:function(){this.showContent=!1},setSelectedIndex:function(e){this.selectedIndex=e},selectArea:function(e){var t={id:e.target.dataset.selfId,name:e.target.innerText},n=[].concat((0,s.default)(this.value));n[this.selectedIndex]=t,n=n.slice(0,this.selectedIndex+1),this.$emit("input",n),this.$emit("on-change",n),this.selectedIndex<this.maxDeep-1?this.selectedIndex+=1:this.selectedIndex===this.maxDeep-1&&(this.showContent=!1)}}}},Gu7T:function(e,t,n){"use strict";t.__esModule=!0;var r=n("c/Tr"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,a.default)(e)}},KqIs:function(e,t,n){var r=n("VU/8")(n("FmOZ"),n("DCGC"),null,null,null);e.exports=r.exports},Mhyx:function(e,t,n){var r=n("/bQp"),a=n("dSzd")("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||s[a]===e)}},Yl6V:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("uBoy"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={components:{basic:a.default}}},"c/Tr":function(e,t,n){e.exports={default:n("5zde"),__esModule:!0}},cfei:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};r.base='\n<template>\n    <ga-address \n      v-model="value" \n      :all-areas="allAreas"/>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value: [],\n      allAreas: [\n        {\n          "id": "北京市",\n          "name": "北京市",\n          "level": "PROVINCE",\n          "nodes": [\n            {\n              "id": "北京市",\n              "name": "北京市",\n              "level": "CITY",\n              "nodes": [\n                {\n                  "id": "昌平区",\n                  "name": "昌平区",\n                  "level": "DISTRICT",\n                  "nodes": []\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "id": "安徽省",\n          "name": "安徽省",\n          "level": "PROVINCE",\n          "nodes": [{\n            "id": "安庆市",\n            "name": "安庆市",\n            "level": "CITY",\n            "nodes": [{\n              "id": "大观区",\n              "name": "大观区",\n              "level": "DISTRICT",\n              "nodes": []\n            }]\n          }]\n        }    \n      ]\n    }\n  },\n  methods: {\n    \n  }\n}\n\n<\/script>\n<style scoped>\n\n</style>\n\n',t.default=r},dY0y:function(e,t,n){var r=n("dSzd")("iterator"),a=!1;try{var s=[7][r]();s.return=function(){a=!0},Array.from(s,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var s=[7],o=s[r]();o.next=function(){return{done:n=!0}},s[r]=function(){return o},e(s)}catch(e){}return n}},fBQ2:function(e,t,n){"use strict";var r=n("evD5"),a=n("X8DO");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},fNkz:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"ga-select-dropdown",style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},msXi:function(e,t,n){var r=n("77Pl");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){var s=e.return;throw void 0!==s&&r(s.call(e)),t}}},q8HX:function(e,t,n){var r=n("VU/8")(n("Yl6V"),n("6GRf"),null,null,null);e.exports=r.exports},qyJz:function(e,t,n){"use strict";var r=n("+ZMJ"),a=n("kM2E"),s=n("sB3e"),o=n("msXi"),i=n("Mhyx"),d=n("QRG4"),l=n("fBQ2"),u=n("3fs2");a(a.S+a.F*!n("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,c,p=s(e),v="function"==typeof this?this:Array,f=arguments.length,_=f>1?arguments[1]:void 0,h=void 0!==_,m=0,y=u(p);if(h&&(_=r(_,f>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(t=d(p.length),n=new v(t);t>m;m++)l(n,m,h?_(p[m],m):p[m]);else for(c=y.call(p),n=new v;!(a=c.next()).done;m++)l(n,m,h?o(c,_,[a.value,m],!0):a.value);return n.length=m,n}})},s99m:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"basic.vue",sourceRoot:""}])},uBoy:function(e,t,n){function r(e){n("+mRZ")}var a=n("VU/8")(n("DJLo"),n("1e75"),r,"data-v-e2f87296",null);e.exports=a.exports}});