webpackJsonp([7],{"2+Qg":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("jbLm"),a=i(o),r=n("U+Hx"),s=i(r),l=n("rYx4"),c=i(l),d=n("nlKZ"),u=i(d);e.default={components:{basicpoptip:a.default,modelpoptip:s.default,complexpoptip:c.default,confirmpoptip:u.default}}},"2jmZ":function(t,e,n){var i=n("VU/8")(n("8/6B"),n("dz8x"),null,null,null);t.exports=i.exports},"39Jr":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-page",[n("ga-row",[n("basicpoptip"),t._v(" "),n("modelpoptip"),t._v(" "),n("complexpoptip"),t._v(" "),n("confirmpoptip")],1),t._v(" "),n("ga-panel",{attrs:{moduleName:"API说明"}},[n("ga-row",[n("div",{staticClass:"api"},[n("h4",[t._v("API说明")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("trigger")]),t._v(" "),n("td",[t._v("触发方式，可选值为"),n("code",[t._v("hover")]),t._v("（悬停）"),n("code",[t._v("click")]),t._v("（点击）"),n("code",[t._v("focus")]),t._v("（聚焦）,在 confirm 模式下，只有 click 有效")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("click")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("显示的标题")]),t._v(" "),n("td",[t._v("String | Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("显示的正文内容，只在非 confirm 模式下有效")]),t._v(" "),n("td",[t._v("String | Number")]),t._v(" "),n("td",[t._v("空")])]),t._v(" "),n("tr",[n("td",[t._v("placement")]),t._v(" "),n("td",[t._v("提示框出现的位置，可选值为"),n("code",[t._v("top")]),n("code",[t._v("top-start")]),n("code",[t._v("top-end")]),n("code",[t._v("bottom")]),n("code",[t._v("bottom-start")]),n("code",[t._v("bottom-end")]),n("code",[t._v("left")]),n("code",[t._v("left-start")]),n("code",[t._v("left-end")]),n("code",[t._v("right")]),n("code",[t._v("right-start")]),n("code",[t._v("right-end")])]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("top")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px")]),t._v(" "),n("td",[t._v("String | Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("confirm")]),t._v(" "),n("td",[t._v("是否开启对话框模式")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("ok-text")]),t._v(" "),n("td",[t._v("确定按钮的文字，只在 confirm 模式下有效")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("确定")])]),t._v(" "),n("tr",[n("td",[t._v("cancel-text")]),t._v(" "),n("td",[t._v("取消按钮的文字，只在 confirm 模式下有效")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("取消")])]),t._v(" "),n("tr",[n("td",[t._v("append-to-body")]),t._v(" "),n("td",[t._v("下拉弹窗是否添加到body中")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("h4",[t._v("事件")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("返回值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("on-popper-show")]),t._v(" "),n("td",[t._v("在提示框显示时触发")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("on-popper-hide")]),t._v(" "),n("td",[t._v("在提示框消失时触发")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("on-ok")]),t._v(" "),n("td",[t._v("点击确定的回调，只在 confirm 模式下有效")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("on-cancel")]),t._v(" "),n("td",[t._v("点击取消的回调，只在 confirm 模式下有效")]),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h4",[t._v("slot")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("无")]),t._v(" "),n("td",[t._v("主体内容")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("提示框标题，定义此 slot 时，会覆盖 props "),n("code",[t._v("title")])])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("提示框内容，定义此 slot 时，会覆盖 props "),n("code",[t._v("content")]),t._v("，只在非 confirm 模式下有效")])])])])])])],1)],1)},staticRenderFns:[]}},"3u2Z":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("2jmZ"),a=i(o),r=n("jTp8"),s=i(r),l=n("5nUH"),c=i(l),d=n("tnQy"),u=i(d);e.default={components:{gaPoptip:a.default,gaButton:s.default},data:function(){return{Code:u.default}},methods:{ok:function(){c.default.info("点击了确定")},cancel:function(){c.default.info("点击了取消")}}}},"5nUH":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(){return h=h||c.default.newInstance({prefixCls:d,styles:{top:v+"px"}})}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=m[n],s="loading"===n?" ga-load-loop":"",l=o();return l.notice({name:""+p+_,duration:e,styles:{},transitionName:"move-up",content:'\n            <div class="'+d+"-custom-content "+d+"-"+n+'">\n                <i class="'+u+" "+u+"-"+r+s+'"></i>\n                <span>'+t+"</span>\n            </div>\n        ",onClose:i,closable:a,type:"message"}),function(){var t=_++;return function(){l.remove(""+p+t)}}()}Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),s=i(r),l=n("niAt"),c=i(l),d="ga-message",u="ga-icon",p="ga_message_key_",f=1.5,v=void 0,h=void 0,_=1,m={info:"information-circled",success:"checkmark-circled",warning:"android-alert",error:"close-circled",loading:"load-c"};e.default={info:function(t){return"string"===(void 0===t?"undefined":(0,s.default)(t))&&(t={content:t}),a(t.content,t.duration,"info",t.onClose,t.closable)},success:function(t){return"string"===(void 0===t?"undefined":(0,s.default)(t))&&(t={content:t}),a(t.content,t.duration,"success",t.onClose,t.closable)},warning:function(t){return"string"===(void 0===t?"undefined":(0,s.default)(t))&&(t={content:t}),a(t.content,t.duration,"warning",t.onClose,t.closable)},error:function(t){return"string"===(void 0===t?"undefined":(0,s.default)(t))&&(t={content:t}),a(t.content,t.duration,"error",t.onClose,t.closable)},loading:function(t){return"string"===(void 0===t?"undefined":(0,s.default)(t))&&(t={content:t}),a(t.content,t.duration,"loading",t.onClose,t.closable)},config:function(t){t.top&&(v=t.top),t.duration&&(f=t.duration)},destroy:function(){var t=o();h=null,t.destroy("ga-message")}}},"6Vcn":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bOdI"),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"Notice",props:{prefixCls:{type:String,default:""},duration:{type:Number,default:1.5},content:{type:String,default:""},styles:{type:Object,default:function(){return{right:"50%"}}},closable:{type:Boolean,default:!1},className:{type:String},name:{type:String,required:!0},onClose:{type:Function},transitionName:{type:String}},data:function(){return{withDesc:!1}},computed:{baseClass:function(){return this.prefixCls+"-notice"},classes:function(){var t;return[this.baseClass,(t={},(0,o.default)(t,""+this.className,!!this.className),(0,o.default)(t,this.baseClass+"-closable",this.closable),(0,o.default)(t,this.baseClass+"-with-desc",this.withDesc),t)]},contentClasses:function(){return this.baseClass+"-content"}},methods:{clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.onClose(),this.$parent.close(this.name)}},mounted:function(){var t=this;this.clearCloseTimer(),0!==this.duration&&(this.closeTimer=setTimeout(function(){t.close()},1e3*this.duration)),"ga-notice"===this.prefixCls&&(this.withDesc=""!==this.$refs.content.querySelectorAll("."+this.prefixCls+"-desc")[0].innerHTML)},beforeDestroy:function(){this.clearCloseTimer()}}},"8/6B":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("bOdI"),a=i(o),r=n("lRnd"),s=i(r),l=n("jTp8"),c=i(l),d=n("KW0B"),u=i(d),p=n("oeHJ"),f=i(p),v=n("qD0P"),h=n("48HD"),_=i(h);e.default={name:"Poptip",mixins:[s.default,_.default],directives:{clickoutside:u.default,TransferDom:f.default},components:{iButton:c.default},props:{trigger:{validator:function(t){return(0,v.oneOf)(t,["click","focus","hover"])},default:"click"},placement:{validator:function(t){return(0,v.oneOf)(t,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"top"},title:{type:[String,Number]},content:{type:[String,Number],default:""},width:{type:[String,Number]},confirm:{type:Boolean,default:!1},okText:{type:String},cancelText:{type:String},appendToBody:{type:Boolean,default:!1}},data:function(){return{prefixCls:"ga-poptip",showTitle:!0,isInput:!1}},computed:{classes:function(){return["ga-poptip",(0,a.default)({},"ga-poptip-confirm",this.confirm)]},styles:function(){var t={};return this.width&&(t.width=this.width+"px"),t},localeOkText:function(){return void 0===this.okText?this.t("i.poptip.okText"):this.okText},localeCancelText:function(){return void 0===this.cancelText?this.t("i.poptip.cancelText"):this.cancelText}},methods:{handleClick:function(){return this.confirm?(this.visible=!this.visible,!0):"click"===this.trigger&&void(this.visible=!this.visible)},handleClose:function(){return this.confirm?(this.visible=!1,!0):"click"===this.trigger&&void(this.visible=!1)},handleFocus:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if("focus"!==this.trigger||this.confirm||this.isInput&&!t)return!1;this.visible=!0},handleBlur:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if("focus"!==this.trigger||this.confirm||this.isInput&&!t)return!1;this.visible=!1},handleMouseenter:function(){if("hover"!==this.trigger||this.confirm)return!1;this.visible=!0},handleMouseleave:function(){if("hover"!==this.trigger||this.confirm)return!1;this.visible=!1},cancel:function(){this.visible=!1,this.$emit("on-cancel")},ok:function(){this.visible=!1,this.$emit("on-ok")},getInputChildren:function(){var t=this.$refs.reference.querySelectorAll("input"),e=this.$refs.reference.querySelectorAll("textarea"),n=null;return t.length?n=t[0]:e.length&&(n=e[0]),n}},mounted:function(){var t=this;this.confirm||(this.showTitle=void 0!==this.$slots.title||this.title),"focus"===this.trigger&&this.$nextTick(function(){var e=t.getInputChildren();e&&(t.isInput=!0,e.addEventListener("focus",t.handleFocus,!1),e.addEventListener("blur",t.handleBlur,!1))})},beforeDestroy:function(){var t=this.getInputChildren();t&&(t.removeEventListener("focus",this.handleFocus,!1),t.removeEventListener("blur",this.handleBlur,!1))}}},ADO8:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("2jmZ"),a=i(o),r=n("tnQy"),s=i(r);e.default={components:{gaPoptip:a.default},data:function(){return{Code:s.default,visible:!1}},methods:{close:function(){this.visible=!1}}}},EX3D:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("MICi"),a=i(o),r=n("bOdI"),s=i(r),l=n("qD0P"),c=n("dOnm"),d=i(c),u=n("8BHK"),p=i(u);e.default={name:"Input",mixins:[p.default],props:{type:{validator:function(t){return(0,l.oneOf)(t,["text","textarea","password"])},default:"text"},value:{type:[String,Number],default:""},size:{validator:function(t){return(0,l.oneOf)(t,["small","large"])}},placeholder:{type:String,default:""},maxlength:{type:Number},disabled:{type:Boolean,default:!1},autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},width:{type:[String,Number],default:"200"},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},clearable:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value,prefixCls:"ga-input",prepend:!0,append:!0,slotReady:!1,textareaStyles:{}}},computed:{wrapClassesStyles:function(){return String(this.width).indexOf("%")>-1?"width: "+this.width:"width: "+this.width+"px"},wrapClasses:function(){var t;return["ga-input-wrapper",(t={},(0,s.default)(t,"ga-input-wrapper-"+this.size,!!this.size),(0,s.default)(t,"ga-input-type",this.type),(0,s.default)(t,"ga-input-group",this.prepend||this.append),(0,s.default)(t,"ga-input-group-"+this.size,(this.prepend||this.append)&&!!this.size),t)]},inputClasses:function(){var t;return["ga-input",(t={},(0,s.default)(t,"ga-input-"+this.size,!!this.size),(0,s.default)(t,"ga-input-disabled",this.disabled),t)]},textareaClasses:function(){return["ga-input",(0,s.default)({},"ga-input-disabled",this.disabled)]}},methods:{handleClear:function(){var t={target:{value:""}};this.$emit("input",""),this.setCurrentValue(""),this.$emit("on-change",t)},handleEnter:function(t){this.$emit("on-enter",t)},handleIconClick:function(t){this.$emit("on-click",t)},handleFocus:function(t){this.$emit("on-focus",t)},handleBlur:function(t){this.$emit("on-blur",t),(0,l.findComponentUpward)(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-blur",this.currentValue)},handleInput:function(t){var e=t.target.value;this.number&&(e=(0,a.default)(Number(e))?e:Number(e)),this.$emit("input",e),this.setCurrentValue(e),this.$emit("on-change",t)},handleChange:function(t){this.$emit("on-input-change",t)},setCurrentValue:function(t){var e=this;t!==this.currentValue&&(this.$nextTick(function(){e.resizeTextarea()}),this.currentValue=t,(0,l.findComponentUpward)(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-change",t))},resizeTextarea:function(){var t=this.autosize;if(!t||"textarea"!==this.type)return!1;var e=t.minRows,n=t.maxRows;this.textareaStyles=(0,d.default)(this.$refs.textarea,e,n)}},watch:{value:function(t){this.setCurrentValue(t)}},mounted:function(){"textarea"!==this.type?(this.prepend=void 0!==this.$slots.prepend,this.append=void 0!==this.$slots.append):(this.prepend=!1,this.append=!1),this.slotReady=!0,this.resizeTextarea()}}},EhYv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.styles},t._l(t.notices,function(e){return n("Notice",{key:e.name,attrs:{"prefix-cls":t.prefixCls,styles:e.styles,content:e.content,duration:e.duration,closable:e.closable,name:e.name,"transition-name":e.transitionName,"on-close":e.onClose}})}),1)},staticRenderFns:[]}},JQ1S:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:"基本使用"}},[n("ga-poptip",{attrs:{trigger:"hover",title:"提示标题",content:"提示内容"}},[n("ga-button",[t._v("hover 激活")])],1),t._v(" "),n("ga-poptip",{attrs:{title:"提示标题",content:"提示内容"}},[n("ga-button",[t._v("click 激活")])],1),t._v(" "),n("ga-poptip",{attrs:{trigger:"focus",title:"提示标题",content:"提示内容"}},[n("ga-input",{attrs:{placeholder:"输入框的 focus"}})],1),t._v(" "),n("v-code",{staticStyle:{width:"100%",clear:"both"},attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},"Ji+X":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,attrs:{type:t.htmlType,disabled:t.disabled},on:{click:t.handleClick}},[t.loading?n("Icon",{staticClass:"ga-load-loop",attrs:{type:"load-c"}}):t._e(),t._v(" "),t.icon&&!t.loading?n("Icon",{attrs:{type:t.icon}}):t._e(),t._v(" "),t.showSlot?n("span",{ref:"slot"},[t._t("default")],2):t._e()],1)},staticRenderFns:[]}},JknD:function(t,e,n){var i=n("VU/8")(n("6Vcn"),n("vpSa"),null,null,null);t.exports=i.exports},K4R9:function(t,e,n){n("NA/8"),t.exports=n("FeBl").Number.isNaN},MICi:function(t,e,n){t.exports={default:n("K4R9"),__esModule:!0}},MQvV:function(t,e,n){var i=n("VU/8")(n("2+Qg"),n("39Jr"),null,null,null);t.exports=i.exports},"NA/8":function(t,e,n){var i=n("kM2E");i(i.S,"Number",{isNaN:function(t){return t!=t}})},"U+Hx":function(t,e,n){var i=n("VU/8")(n("ADO8"),n("qsxi"),null,null,null);t.exports=i.exports},"Vg+A":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:"confirm使用"}},[n("table",[n("tr",[n("td",[n("ga-poptip",{attrs:{confirm:"",title:"您确认删除这条内容吗？"},on:{"on-ok":t.ok,"on-cancel":t.cancel}},[n("ga-button",[t._v("删除")])],1)],1)]),t._v(" "),n("tr",[n("td",[n("ga-poptip",{attrs:{confirm:"",title:"您确认删除这条内容吗？"},on:{"on-ok":t.ok,"on-cancel":t.cancel}},[n("ga-button",[t._v("删除")])],1)],1)])]),t._v(" "),n("v-code",{staticStyle:{width:"100%",clear:"both"},attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.confirm)+"\n  ")])],1)},staticRenderFns:[]}},dOnm:function(t,e,n){"use strict";function i(t){var e=window.getComputedStyle(t),n=e.getPropertyValue("box-sizing"),i=parseFloat(e.getPropertyValue("padding-bottom"))+parseFloat(e.getPropertyValue("padding-top")),o=parseFloat(e.getPropertyValue("border-bottom-width"))+parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:s.map(function(t){return t+":"+e.getPropertyValue(t)}).join(";"),paddingSize:i,borderSize:o,boxSizing:n}}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;a||(a=document.createElement("textarea"),document.body.appendChild(a));var o=i(t),s=o.paddingSize,l=o.borderSize,c=o.boxSizing,d=o.contextStyle;a.setAttribute("style",d+";"+r),a.value=t.value||t.placeholder||"";var u=a.scrollHeight,p=-1/0,f=1/0;"border-box"===c?u+=l:"content-box"===c&&(u-=s),a.value="";var v=a.scrollHeight-s;return null!==e&&(p=v*e,"border-box"===c&&(p=p+s+l),u=Math.max(p,u)),null!==n&&(f=v*n,"border-box"===c&&(f=f+s+l),u=Math.min(f,u)),{height:u+"px",minHeight:p+"px",maxHeight:f+"px"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=void 0,r="\n    height:0 !important;\n    min-height:0 !important;\n    max-height:none !important;\n    visibility:hidden !important;\n    overflow:hidden !important;\n    position:absolute !important;\n    z-index:-1000 !important;\n    top:0 !important;\n    right:0 !important\n",s=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"]},dz8x:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.handleClose,expression:"handleClose"}],class:t.classes,on:{mouseenter:t.handleMouseenter,mouseleave:t.handleMouseleave}},[n("div",{ref:"reference",class:[t.prefixCls+"-rel"],on:{click:t.handleClick,mousedown:function(e){return t.handleFocus(!1)},mouseup:function(e){return t.handleBlur(!1)}}},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"popper",class:[t.prefixCls+"-popper"],style:t.styles,attrs:{"data-append-to-body":t.appendToBody}},[n("div",{class:[t.prefixCls+"-content"]},[n("div",{class:[t.prefixCls+"-arrow"]}),t._v(" "),t.confirm?n("div",{class:[t.prefixCls+"-inner"]},[n("div",{class:[t.prefixCls+"-body"]},[n("i",{staticClass:"ga-icon ga-icon-help-circled"}),t._v(" "),n("div",{class:[t.prefixCls+"-body-message"]},[t._t("title",[t._v(t._s(t.title))])],2)]),t._v(" "),n("div",{class:[t.prefixCls+"-footer"]},[n("i-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v(t._s(t.localeCancelText))]),t._v(" "),n("i-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){return t.ok(e)}}},[t._v(t._s(t.localeOkText))])],1)]):t._e(),t._v(" "),t.confirm?t._e():n("div",{class:[t.prefixCls+"-inner"]},[t.showTitle?n("div",{ref:"title",class:[t.prefixCls+"-title"]},[t._t("title",[n("div",{class:[t.prefixCls+"-title-inner"]},[t._v(t._s(t.title))])])],2):t._e(),t._v(" "),n("div",{class:[t.prefixCls+"-body"]},[n("div",{class:[t.prefixCls+"-body-content"]},[t._t("content",[n("div",{class:[t.prefixCls+"-body-content-inner"]},[t._v(t._s(t.content))])])],2)])])])])])],1)},staticRenderFns:[]}},"j/M6":function(t,e,n){var i=n("VU/8")(n("EX3D"),n("l1QH"),null,null,null);t.exports=i.exports},jTp8:function(t,e,n){var i=n("VU/8")(n("tYf6"),n("Ji+X"),null,null,null);t.exports=i.exports},jbLm:function(t,e,n){var i=n("VU/8")(n("xiJv"),n("JQ1S"),null,null,null);t.exports=i.exports},l1QH:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.wrapClasses,style:t.wrapClassesStyles},["textarea"!==t.type?[t.prepend?n("div",{directives:[{name:"show",rawName:"v-show",value:t.slotReady,expression:"slotReady"}],ref:"prepend",class:[t.prefixCls+"-group-prepend"]},[t._t("prepend")],2):t._e(),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.clearable&&t.currentValue?n("i",{staticClass:"ga-icon",class:["ga-icon-ios-close",t.prefixCls+"-icon",t.prefixCls+"-icon-clear",t.prefixCls+"-icon-normal"],on:{click:t.handleClear}}):t._e(),t._v(" "),t.suffixIcon?n("i",{staticClass:"ga-icon",class:["ga-icon-"+t.suffixIcon,t.prefixCls+"-icon",t.prefixCls+"-suffix-icon"],on:{click:t.handleIconClick}}):t._e(),t._v(" "),t.prefixIcon?n("i",{staticClass:"ga-icon",class:["ga-icon-"+t.prefixIcon,t.prefixCls+"-icon",t.prefixCls+"-prefix-icon"],on:{click:t.handleIconClick}}):t._e()]),t._v(" "),n("input",{class:t.inputClasses,attrs:{type:t.type,placeholder:t.placeholder,disabled:t.disabled,maxlength:t.maxlength,readonly:t.readonly,name:t.name,number:t.number,title:t.currentValue},domProps:{value:t.currentValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter(e)},focus:t.handleFocus,blur:t.handleBlur,input:t.handleInput,change:t.handleChange}}),t._v(" "),t.append?n("div",{directives:[{name:"show",rawName:"v-show",value:t.slotReady,expression:"slotReady"}],ref:"append",class:[t.prefixCls+"-group-append"]},[t._t("append")],2):t._e()]:n("textarea",{ref:"textarea",class:t.textareaClasses,style:t.textareaStyles,attrs:{placeholder:t.placeholder,disabled:t.disabled,rows:t.rows,maxlength:t.maxlength,readonly:t.readonly,name:t.name},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter(e)},focus:t.handleFocus,blur:t.handleBlur,input:t.handleInput}})],2)},staticRenderFns:[]}},niAt:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("fZjL"),a=i(o),r=n("tNbc"),s=i(r),l=n("7+uW"),c=i(l),d=n("qD0P");s.default.newInstance=function(t){var e=t||{},n="";(0,a.default)(e).forEach(function(t){n+=" :"+(0,d.camelcaseToHyphen)(t)+"="+t});var i=document.createElement("div");i.innerHTML="<notification"+n+"></notification>",document.body.appendChild(i);var o=new c.default({el:i,data:e,components:{Notification:s.default}}).$children[0];return{notice:function(t){o.add(t)},remove:function(t){o.close(t)},component:o,destroy:function(){document.body.removeChild(i)}}},e.default=s.default},nlKZ:function(t,e,n){var i=n("VU/8")(n("3u2Z"),n("Vg+A"),null,null,null);t.exports=i.exports},qsxi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:"model使用"}},[n("ga-poptip",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("a",[t._v("click 激活")]),t._v(" "),n("div",{attrs:{slot:"title"},slot:"title"},[n("i",[t._v("自定义标题")])]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("a",{on:{click:t.close}},[t._v("关闭提示框")])])]),t._v(" "),n("v-code",{staticStyle:{width:"100%",clear:"both"},attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.base)+"\n  ")])],1)},staticRenderFns:[]}},rYx4:function(t,e,n){var i=n("VU/8")(n("zVsh"),n("x/6j"),null,null,null);t.exports=i.exports},tNbc:function(t,e,n){var i=n("VU/8")(n("uLqK"),n("EhYv"),null,null,null);t.exports=i.exports},tYf6:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("bOdI"),a=i(o),r=n("Q5u7"),s=i(r),l=n("qD0P");e.default={name:"Button",components:{Icon:s.default},props:{type:{type:[String,Array],validator:function(t){return(0,l.oneOf)(t,["primary","ghost","dashed","text","info","success","warning","error"])}},shape:{validator:function(t){return(0,l.oneOf)(t,["circle","circle-outline"])}},size:{validator:function(t){return(0,l.oneOf)(t,["small","large"])}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator:function(t){return(0,l.oneOf)(t,["button","submit","reset"])}},icon:String,long:{type:Boolean,default:!1}},data:function(){return{showSlot:!0}},computed:{classes:function(){var t;return["ga-btn",(t={},(0,a.default)(t,"ga-btn-"+this.type,!!this.type),(0,a.default)(t,"ga-btn-long",this.long),(0,a.default)(t,"ga-btn-"+this.shape,!!this.shape),(0,a.default)(t,"ga-btn-"+this.size,!!this.size),(0,a.default)(t,"ga-btn-loading",null!=this.loading&&this.loading),(0,a.default)(t,"ga-btn-icon-only",!this.showSlot&&(!!this.icon||this.loading)),t)]}},methods:{handleClick:function(t){this.$emit("on-click",t)}},mounted:function(){this.showSlot=void 0!==this.$slots.default}}},tnQy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};i.base='\n<template>\n  <div>\n    <ga-poptip trigger="hover" title="提示标题" content="提示内容">\n        <ga-button>hover 激活</ga-button>\n    </ga-poptip>\n    <ga-poptip title="提示标题" content="提示内容">\n        <ga-button>click 激活</ga-button>\n    </ga-poptip>\n    <ga-poptip trigger="focus" title="提示标题" content="提示内容">\n        <ga-input placeholder="输入框的 focus"></ga-input>\n    </ga-poptip>\n  </div>\n</template>\n<script>\nexport default {\n}\n\n<\/script>\n',i.model='\n<template>\n    <ga-poptip v-model="visible">\n        <a>click 激活</a>\n        <div slot="title"><i>自定义标题</i></div>\n        <div slot="content">\n            <a @click="close">关闭提示框</a>\n        </div>\n    </ga-poptip>\n</template>\n<script>\n\nexport default {\n  data() {\n    return {\n      visible: false\n    };\n  },\n  methods: {\n    close() {\n      this.visible = false;\n    }\n  }\n};\n<\/script>\n\n',i.slot='\n<template>\n    <ga-poptip placement="right" width="400">\n        <ga-button type="ghost">click 激活</ga-button>\n        <div class="api" slot="content">\n            <table>\n                <thead>\n                    <tr>\n                        <th>版本号</th>\n                        <th>更新时间</th>\n                        <th>说明</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>0.9.5</td>\n                        <td>2016-10-26</td>\n                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>\n                    </tr>\n                    <tr>\n                        <td>0.9.4</td>\n                        <td>2016-10-25</td>\n                        <td>新增对话框组件 <code>Modal</code></td>\n                    </tr>\n                    <tr>\n                        <td>0.9.2</td>\n                        <td>2016-09-28</td>\n                        <td>新增选择器组件 <code>Select</code></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </ga-poptip>\n</template>\n<script>\nexport default {\n};\n<\/script>\n\n',i.confirm='\n<template>\n    <ga-poptip\n        confirm\n        title="您确认删除这条内容吗？"\n        @on-ok="ok"\n        @on-cancel="cancel">\n        <ga-button>删除</ga-button>\n    </ga-poptip>\n</template>\n<script>\nexport default {\n  methods: {\n    ok() {\n      Message.info("点击了确定");\n    },\n    cancel() {\n      Message.info("点击了取消");\n    }\n  }\n};\n<\/script>\n\n',e.default=i},uLqK:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(){return"gaNotification_"+p+"_"+u++}Object.defineProperty(e,"__esModule",{value:!0});var a=n("woOf"),r=i(a),s=n("bOdI"),l=i(s),c=n("JknD"),d=i(c),u=0,p=Date.now();e.default={components:{Notice:d.default},props:{prefixCls:{type:String,default:"ga-notification"},styles:{type:Object,default:function(){return{top:"65px",left:"50%"}}},content:{type:String},className:{type:String}},data:function(){return{notices:[]}},computed:{classes:function(){return[""+this.prefixCls,(0,l.default)({},""+this.className,!!this.className)]}},methods:{add:function(t){var e=t.name||o(),n=(0,r.default)({styles:{right:"50%"},content:"",duration:1.5,closable:!1,name:e},t);this.notices.push(n)},close:function(t){for(var e=this.notices,n=0;n<e.length;n++)if(e[n].name===t){this.notices.splice(n,1);break}}}}},vpSa:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transitionName}},[n("div",{class:t.classes,style:t.styles},[n("div",{ref:"content",class:[t.baseClass+"-content"],domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t.closable?n("a",{class:[t.baseClass+"-close"],on:{click:t.close}},[n("i",{staticClass:"ga-icon ga-icon-ios-close-empty"})]):t._e()])])},staticRenderFns:[]}},"x/6j":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ga-panel",{attrs:{moduleName:"slot使用"}},[n("ga-poptip",{attrs:{placement:"right",width:"400"}},[n("ga-button",{attrs:{type:"ghost"}},[t._v("click 激活")]),t._v(" "),n("div",{staticClass:"api",attrs:{slot:"content"},slot:"content"},[n("table",[n("thead",[n("tr",[n("th",[t._v("版本号")]),t._v(" "),n("th",[t._v("更新时间")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("0.9.5")]),t._v(" "),n("td",[t._v("2016-10-26")]),t._v(" "),n("td",[t._v("新增信息提示组件 "),n("code",[t._v("Tooltip")]),t._v("和"),n("code",[t._v("Poptip")])])]),t._v(" "),n("tr",[n("td",[t._v("0.9.4")]),t._v(" "),n("td",[t._v("2016-10-25")]),t._v(" "),n("td",[t._v("新增对话框组件 "),n("code",[t._v("Modal")])])]),t._v(" "),n("tr",[n("td",[t._v("0.9.2")]),t._v(" "),n("td",[t._v("2016-09-28")]),t._v(" "),n("td",[t._v("新增选择器组件 "),n("code",[t._v("Select")])])])])])])],1),t._v(" "),n("v-code",{staticStyle:{width:"100%",clear:"both"},attrs:{language:"html"}},[t._v("\n    "+t._s(t.Code.slot)+"\n  ")])],1)},staticRenderFns:[]}},xiJv:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("2jmZ"),a=i(o),r=n("jTp8"),s=i(r),l=n("j/M6"),c=i(l),d=n("tnQy"),u=i(d);e.default={components:{gaPoptip:a.default,gaButton:s.default,gaInput:c.default},data:function(){return{Code:u.default}}}},zVsh:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("2jmZ"),a=i(o),r=n("jTp8"),s=i(r),l=n("tnQy"),c=i(l);e.default={components:{gaPoptip:a.default,gaButton:s.default},data:function(){return{Code:c.default}}}}});