"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),n=require("./components.js"),a=require("./index2.js"),c=e.defineComponent({name:"InputNumberItem",__name:"InputNumberItem",props:{event:{type:Number},title:{type:String}},setup(r){const s=r,{prefixCls:u}=n.useDesign("setting-input-number-item");function o(t){s.event&&a.baseHandler(s.event,t)}return(t,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(u))},[e.createElementVNode("span",null,e.toDisplayString(r.title),1),e.createVNode(e.unref(n.InputNumber),e.mergeProps(t.$attrs,{size:"small",class:`${e.unref(u)}-input-number`,onChange:o}),null,16,["class"])],2))}}),l=n._export_sfc(c,[["__scopeId","data-v-c179222e"]]);exports.default=l;