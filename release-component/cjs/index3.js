"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),t=require("./components.js");function w(r){if(!e.getCurrentInstance())throw new Error("useDescription() can only be used inside setup() or functional components!");const n=e.ref(null),o=e.ref(!1);function i(a){e.unref(o)&&t.isProdMode()||(n.value=a,r&&a.setDescProps(r),o.value=!0)}return[i,{setDescProps:a=>{var c;(c=e.unref(n))==null||c.setDescProps(a)}}]}function f(){return[{dataIndex:"type",title:"类型",width:80,customRender:({text:r})=>{const n=r===t.ErrorTypeEnum.VUE?"green":r===t.ErrorTypeEnum.RESOURCE?"cyan":r===t.ErrorTypeEnum.PROMISE?"blue":t.ErrorTypeEnum.AJAX?"red":"purple";return e.createVNode(t.Tag,{color:n},{default:()=>r})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:"时间",width:160},{dataIndex:"file",title:"文件",width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:"错误信息",width:300},{dataIndex:"stack",title:"stack信息"}]}function E(){return f().map(r=>({field:r.dataIndex,label:r.title}))}const k=e.defineComponent({__name:"DetailModal",props:{info:{type:Object,default:null}},setup(r){const[n]=w({column:2,schema:E()});return(o,i)=>(e.openBlock(),e.createBlock(e.unref(t.BasicModal),e.mergeProps({width:800,title:"详情"},o.$attrs),{default:e.withCtx(()=>[e.createVNode(e.unref(t.Description),{data:r.info,onRegister:e.unref(n)},null,8,["data","onRegister"])]),_:1},16))}}),y={class:"p-4"},C=["src"],b=e.defineComponent({__name:"index",setup(r){const n=e.ref(),o=e.ref([]),i=t.useErrorLogStore(),[u,{setTableData:a}]=t.useTable({title:"错误日志列表",columns:f(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[c,{openModal:m}]=t.useModal();e.watch(()=>i.getErrorLogInfoList,l=>{e.nextTick(()=>{a(t.cloneDeep(l))})},{immediate:!0});function p(l){n.value=l,m(!0)}function h(){throw new Error("fire vue error!")}function g(){o.value.push(`${new Date().getTime()}.png`)}return(l,x)=>{const d=e.resolveComponent("a-button");return e.openBlock(),e.createElementBlock("div",y,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.value,s=>e.withDirectives((e.openBlock(),e.createElementBlock("img",{key:s,src:s,alt:""},null,8,C)),[[e.vShow,!1]])),128)),e.createVNode(k,{info:n.value,onRegister:e.unref(c)},null,8,["info","onRegister"]),e.createVNode(e.unref(t.BasicTable),{onRegister:e.unref(u),class:"error-handle-table"},{toolbar:e.withCtx(()=>[e.createVNode(d,{onClick:h,type:"primary"},{default:e.withCtx(()=>[e.createTextVNode(" 点击触发vue错误 ")]),_:1}),e.createVNode(d,{onClick:g,type:"primary"},{default:e.withCtx(()=>[e.createTextVNode(" 点击触发资源加载错误 ")]),_:1})]),bodyCell:e.withCtx(({column:s,record:_})=>[s.key==="action"?(e.openBlock(),e.createBlock(e.unref(t._sfc_main$3),{key:0,actions:[{label:"详情",onClick:p.bind(null,_)}]},null,8,["actions"])):e.createCommentVNode("",!0)]),_:1},8,["onRegister"])])}}});exports.default=b;