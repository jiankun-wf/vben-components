"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("vue"),p=require("./components.js"),i=r.defineComponent({__name:"Redirect",setup(u){const{currentRoute:c,replace:a}=p.useRouter(),{params:e,query:o}=r.unref(c),{path:n,_redirect_type:s="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(n)?n.join("/"):n;return a(s==="name"?{name:t,query:o,params:JSON.parse(e._origin_params??"{}")}:{path:t.startsWith("/")?t:"/"+t,query:o}),(_,l)=>(r.openBlock(),r.createElementBlock("div"))}});exports.default=i;