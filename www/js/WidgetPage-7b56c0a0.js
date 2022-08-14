import{bX as pe,k as P,aA as he,d5 as fe,aq as ye,am as me,as as Ce,ac as Se,cg as be,a9 as we,ci as oe,al as Ie,d6 as Oe,a4 as se,cl as W,bI as De,cm as ie,Q as R,d7 as H,cs as _,bL as ke,bt as de,d8 as $e,d4 as Ee,aG as J,ay as s,W as b,X as r,b3 as y,bn as m,a2 as a,b1 as v,I as U,aE as x,U as h,bA as G,bJ as Ke,A as ue,D as I,V as f,bz as z,cK as Le,bK as te,bC as q,bo as Be,bp as Z,aI as ee,ak as re,a1 as X,bx as Ae,bB as ae,aY as Ge,bM as Me,bT as Ve,bN as le,bO as Q,bP as Fe,bQ as We}from"./index-37e82287.js";import{Q as Qe}from"./QExpansionItem-6412d52b.js";import{a as Pe,u as Ue}from"./useDragDrop-99206927.js";var qe=pe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:K,emit:D}){const L=we(),C=P(null);let S=0;const l=[];function k(c){const w=[],A=typeof c=="boolean"?c:e.noErrorFocus!==!0,j=++S,u=(t,i)=>{D("validation-"+(t===!0?"success":"error"),i)};for(let t=0;t<l.length;t++){const i=l[t],O=i.validate();if(typeof O.then=="function")w.push(O.then(E=>({valid:E,comp:i}),E=>({valid:!1,comp:i,err:E})));else if(O!==!0){if(e.greedy===!1)return u(!1,i),A===!0&&typeof i.focus=="function"&&i.focus(),Promise.resolve(!1);w.push({valid:!1,comp:i})}}return w.length===0?(u(!0),Promise.resolve(!0)):Promise.all(w).then(t=>{const i=t.filter(Y=>Y.valid!==!0);if(i.length===0)return j===S&&u(!0),!0;const{valid:O,comp:E,err:N}=i[0];return j===S&&(N!==void 0&&console.error(N),u(!1,E),A===!0&&O!==!0&&typeof E.focus=="function"&&E.focus()),!1})}function n(){S++,l.forEach(c=>{typeof c.resetValidation=="function"&&c.resetValidation()})}function p(c){c!==void 0&&oe(c);const w=S+1;k().then(A=>{w===S&&A===!0&&(e.onSubmit!==void 0?D("submit",c):c!==void 0&&c.target!==void 0&&typeof c.target.submit=="function"&&c.target.submit())})}function B(c){c!==void 0&&oe(c),D("reset"),Ie(()=>{n(),e.autofocus===!0&&e.noResetFocus!==!0&&$()})}function $(){Oe(()=>{if(C.value===null)return;const c=C.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(C.value.querySelectorAll("[tabindex]"),w=>w.tabIndex>-1);c!=null&&c.focus({preventScroll:!0})})}he(fe,{bindComponent(c){l.push(c)},unbindComponent(c){const w=l.indexOf(c);w>-1&&l.splice(w,1)}});let M=!1;return ye(()=>{M=!0}),me(()=>{M===!0&&e.autofocus===!0&&$()}),Ce(()=>{e.autofocus===!0&&$()}),Object.assign(L.proxy,{validate:k,resetValidation:n,submit:p,reset:B,focus:$,getValidationComponents:()=>l}),()=>Se("form",{class:"q-form",ref:C,onSubmit:p,onReset:B},be(K.default))}});const je=se({name:"WidgetDevicesSection",props:["module","itemList"],emits:["onChange"],setup(e,{emit:K}){W.dev("DEBUG","WidgetDevicesSection","setup()");const D=De(),L=ie(),C=R(()=>H.Settings[e.module]||{}),S=R(()=>L.devices),l=o=>S.value[o],k=o=>S.value[o.deviceId].function==="other"?"_defaults":S.value[o.deviceId].function,n=o=>Object.keys(S.value[o].states)||[],p=o=>n(o).map(d=>({label:d,value:d})),B=o=>$[o].devices.length!==0,$=L.getGroups("function"),M=P(Object.values($)),c={},w=o=>(c[o]||(W.dev("DEBUG","WidgetDevicesSection","shallBeShown",o),c[o]=!C.value.addDevice||C.value.addDevice&&(!C.value.addDevice.fields||C.value.addDevice.fields&&C.value.addDevice.fields.includes(o))),c[o]),A=(o,d)=>{W.dev("DEBUG","WidgetDevicesSection","onFilter",o);const g=Object.values(o?L.getGroups("function",o):$);d(()=>{M.value=g})},j=(o,d,g)=>{const V=S.value[o.deviceId]&&S.value[o.deviceId].states[o[g+"StateKey"]]||{},F=o[d+"Element"];return $e(V[F+"Config"]||{},o[F+"Config"]&&o[F+"Config"][g]||{})},u=o=>{let d=!1;return o.map(g=>(d=g.type==="device"?d:g.type==="divider"?!1:g.type==="group"&&g.actions===!0,g.isInGroup=d,g))},t=P(u(_(e.itemList))),i=(o,d=null)=>{W.dev("DEBUG","WidgetDevicesSection","addItem",o,d);const g=Ee(),V={...o,id:g};if(d===null){if(o.type==="device"){const F=n(o.deviceId)[0]||null;V.primaryStateKey=F,V.bodyStateKey=F,V.bodyElement="LastChangeBody"}t.value.push(V)}else t.value.splice(d,0,V);t.value=u(t.value),K("onChange",{id:"items",value:t.value})},O=o=>{const d=_(t.value.find(g=>g.id===o));i(d,t.value.findIndex(g=>g.id===d.id)+1)},E=o=>{confirm(D.t("Really delete item?"))&&(t.value.splice(t.value.findIndex(g=>g.id===o),1),t.value=u(t.value),K("onChange",{id:"items",value:t.value}))},N=P(),Y=o=>{(!o.attributes||o.attributes&&o.attributes.deleted!==!0)&&(i({type:"device",deviceId:o.id}),C.value.addDevice&&C.value.addDevice.max!==void 0&&C.value.addDevice.max<=t.value.length&&N.value.hidePopup())},T=P({}),ce=()=>{T.value.value&&i({type:"group",name:T.value.value}),T.value={}},ve=()=>i({type:"divider"}),ne=o=>{if(W.dev("DEBUG","WidgetDevicesSection","onChange",o),o.id&&o.itemId){const d=t.value.findIndex(g=>g.id===o.itemId);if(d>-1){if(o.id.indexOf("moduleConfig.")>-1)t.value[d].moduleConfig={...t.value[d].moduleConfig||{},[o.id.replace("moduleConfig.","")]:o.value};else if(o.id.indexOf("secondaryStatesConfig.")>-1)t.value[d].secondaryStatesConfig={...t.value[d].secondaryStatesConfig||{},[o.id.replace("secondaryStatesConfig.","")]:o.value};else if(o.id==="componentOptions"){const g=o.stateKey||t.value[d].primaryStateKey;t.value[d][o.component+"Config"]={...t.value[d][o.component+"Config"]||{},[g]:{...t.value[d][o.component+"Config"]&&t.value[d][o.component+"Config"][g]||{},...o.value}}}else t.value[d][o.id]=o.value;t.value=u(t.value),K("onChange",{id:"items",value:t.value})}}},ge=(o,d)=>{W.dev("DEBUG","WidgetDevicesSection","onChangeSecondaryStatesKeys",o,d),ne({value:d.map(g=>g.value||g),itemId:o,id:"secondaryStatesKeys"})};return{...Pe(t,o=>K("onChange",{id:"items",value:u(o)})),FunctionsComponentsList:ke.ComponentsListAsOptions,ModuleSettings:C,onFilter:A,shallBeShown:w,deviceList:S,getDevice:l,getDeviceFunction:k,getDeviceStates:n,getDeviceStatesOptions:p,hasDevices:B,onChange:ne,onChangeSecondaryStatesKeys:ge,setGroup:o=>{T.value=o},group:T,addGroup:ce,addDivider:ve,addDevice:Y,items:t,addItem:i,copyItem:O,deleteItem:E,componentValues:j,addDeviceElement:N,optionsAddDevice:$,optionGroupsAddDevice:M}}}),Ne={class:"full-width"},Te={class:"row sticky body"},Re={class:"col-4"},ze=X("\xA0"),He={key:0},Je={class:"col-3"},Xe={class:"col-3",style:{"line-height":"70px"}},Ye={class:"row"},Ze={class:"row items-center"},_e={key:0},xe={key:1},en={key:2},nn={key:3,class:"row nowrap"},on={key:0,class:"row nowrap"},tn={key:1,class:"row nowrap"},an={key:2,class:"row nowrap"};function ln(e,K,D,L,C,S){const l=J("inputs"),k=J("icon");return s(),b("div",Ne,[r("div",Te,[r("div",Re,[y(a(te,{onFilter:e.onFilter,ref:"addDeviceElement",label:e.$t("Add Device"),options:e.optionGroupsAddDevice,"model-value":"","use-input":"","input-debounce":750,"stack-label":"",style:{margin:"0 8px"}},{option:v(n=>[a(Qe,{"expand-separator":"","header-class":"text-weight-bold",label:n.opt.label,icon:n.opt.icon},{default:v(()=>[(s(!0),b(U,null,x(n.opt.devices,p=>y((s(),h(z,{key:p.id,clickable:"",onClick:B=>e.addDevice(p)},{default:v(()=>[a(G,null,{default:v(()=>[a(Ke,{class:"q-ml-md"},{default:v(()=>[r("span",{class:ue({"text-strike":p.attributes&&p.attributes.deleted===!0})},I(p.label?p.label+" ("+p.name+")":p.name),3),ze,p.attributes&&p.attributes.deleted===!0?(s(),b("em",He,"[ "+I(e.$t("deleted"))+" ]",1)):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Le]])),128))]),_:2},1032,["label","icon"])]),_:1},8,["onFilter","label","options"]),[[m,e.ModuleSettings.addDevice!==!1&&(!e.ModuleSettings.addDevice||e.ModuleSettings.addDevice&&(e.ModuleSettings.addDevice.max===void 0||e.ModuleSettings.addDevice.max>e.items.length))]])]),y(r("div",{class:"col-1",style:{"text-align":"center","line-height":"70px"}},I(e.$t("or")),513),[[m,e.ModuleSettings.addGroup!==!1]]),y(r("div",Je,[a(l,{label:"Add Group",onOnChange:e.setGroup,onKeyup:Be(e.addGroup,["enter"]),value:e.group.value||""},{end:v(()=>[y(a(q,{flat:"",size:"sm",dense:"",icon:"mdi-check",label:e.$t("add group"),style:{height:"32px","min-width":"100px","margin-top":"16px"},onClick:e.addGroup},null,8,["label","onClick"]),[[m,!!e.group.value]])]),_:1},8,["onOnChange","onKeyup","value"])],512),[[m,e.ModuleSettings.addGroup!==!1]]),y(r("div",{class:"col-1",style:{"text-align":"center","line-height":"70px"}},I(e.$t("or")),513),[[m,e.ModuleSettings.addDivider!==!1]]),y(r("div",Xe,[a(q,{icon:"mdi-minus",label:e.$t("Add Divider"),color:"primary",onClick:e.addDivider},null,8,["label","onClick"])],512),[[m,e.ModuleSettings.addDivider!==!1]])]),r("div",Ye,[a(ae,{ref:"elDragDrop",class:"full-width"},{default:v(()=>[(s(!0),b(U,null,x(e.items,n=>(s(),h(z,{key:n.id,class:"paper"},{default:v(()=>[a(G,{avatar:""},{default:v(()=>[r("div",Ze,[y(a(k,{name:"mdi-drag-horizontal",class:"dragndrop",style:{"padding-right":"16px"}},null,512),[[m,e.items.length>1]]),a(l,{type:"button",dense:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:Z(p=>e.copyItem(n.id),["stop"])},null,8,["tooltip","onClick"]),y(a(l,{type:"button",dense:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:Z(p=>e.deleteItem(n.id),["stop"])},null,8,["tooltip","onClick"]),[[m,n._deleted!==!0]]),y(a(l,{type:"button",dense:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:Z(p=>e.restoreItem(n.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[m,n._deleted===!0]])])]),_:2},1024),n.type!=="device"||n.type==="device"&&e.deviceList[n.deviceId]!==void 0?(s(),b(U,{key:0},[e.ModuleSettings.customBodySection?(s(),h(G,{key:0},{default:v(()=>[(s(),h(ee(e.ModuleSettings.customBodySection),re({...e.$props,...e.$attrs},{onOnChange:e.onChange,item:n,device:e.deviceList[n.deviceId]}),null,16,["onOnChange","item","device"]))]),_:2},1024)):(s(),h(G,{key:1},{default:v(()=>[n.type==="divider"?(s(),b("span",_e,[r("em",null,I("("+e.$t("divider")+")"),1)])):f("",!0),n.type==="group"?(s(),b("span",xe,[r("strong",null,I(n.name),1)])):f("",!0),n.type==="device"?(s(),b("span",en,[r("strong",null,I(e.deviceList[n.deviceId].name),1),X(" ("+I(e.deviceList[n.deviceId].function+", #"+n.deviceId)+")",1)])):f("",!0),n.type==="device"?(s(),b("div",nn,[e.shallBeShown("label")?(s(),h(l,{key:0,dense:"",onOnChange:e.onChange,label:"Label",itemId:n.id,id:"label",json:"",value:n.label||"",placeholder:e.deviceList[n.deviceId].states[n.bodyStateKey]&&e.deviceList[n.deviceId].states[n.bodyStateKey].label?JSON.stringify(e.deviceList[n.deviceId].states[n.bodyStateKey].label):e.deviceList[n.deviceId].name},null,8,["onOnChange","itemId","value","placeholder"])):f("",!0),e.shallBeShown("bodyStateKey")?(s(),h(l,{key:1,dense:"",style:{width:"130px"},onOnSelect:e.onChange,label:"Body State",itemId:n.id,id:"bodyStateKey",value:n.bodyStateKey,type:"select",options:e.getDeviceStatesOptions(n.deviceId)},null,8,["onOnSelect","itemId","value","options"])):f("",!0),e.shallBeShown("bodyElement")?y((s(),h(l,{key:2,dense:"",style:{width:"230px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"bodyElement",label:"Body Element",state:e.deviceList[n.deviceId].states[n.bodyStateKey],stateKey:n.bodyStateKey,itemId:n.id,value:n.bodyElement,type:"select.components",components:e.FunctionsComponentsList.bodyElements[e.getDeviceFunction(n)],componentValues:e.componentValues(n,"body",n.bodyStateKey)},null,8,["onOnSelect","onOnOptions","state","stateKey","itemId","value","components","componentValues"])),[[m,n.bodyStateKey]]):f("",!0)])):f("",!0)]),_:2},1024)),e.ModuleSettings.customActionSection?(s(),h(G,{key:2,side:""},{default:v(()=>[(s(),h(ee(e.ModuleSettings.customActionSection),{onOnChange:e.onChange,item:n,device:e.deviceList[n.deviceId]},null,40,["onOnChange","item","device"]))]),_:2},1024)):(s(),h(G,{key:3,side:""},{default:v(()=>[n.type==="group"?(s(),b("div",on,[a(l,{dense:"",style:{width:"100px"},onOnChange:e.onChange,label:e.$t("Group Actions"),itemId:n.id,id:"actions",value:n.actions||!1,type:"switch"},null,8,["onOnChange","label","itemId","value"]),e.shallBeShown("groupElement")?y((s(),h(l,{key:0,dense:"",style:{width:"200px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"groupElement",label:"Group Element",stateKey:"group",itemId:n.id,value:n.groupElement,type:"select.components",components:e.FunctionsComponentsList.actionElements._defaults.filter(p=>!["DatePickerAction","TimePickerAction","InputAction","DropdownAction"].includes(p.value)),componentValues:e.componentValues(n,"group","group")},null,8,["onOnSelect","onOnOptions","itemId","value","components","componentValues"])),[[m,n.actions===!0]]):f("",!0)])):f("",!0),n.type==="device"?(s(),b("div",tn,[e.shallBeShown("primaryStateKey")?(s(),h(l,{key:0,dense:"",style:{width:"130px"},onOnSelect:e.onChange,label:"Action State",itemId:n.id,id:"primaryStateKey",value:n.primaryStateKey,type:"select",options:e.getDeviceStatesOptions(n.deviceId)},null,8,["onOnSelect","itemId","value","options"])):f("",!0),e.shallBeShown("showState")?y((s(),h(l,{key:1,dense:"",style:{width:"100px"},onOnChange:e.onChange,label:"Show State",itemId:n.id,id:"showState",value:n.showState!==void 0?n.showState:!0,type:"switch"},null,8,["onOnChange","itemId","value"])),[[m,n.primaryStateKey]]):f("",!0),e.shallBeShown("showGroupAction")?y((s(),h(l,{key:2,dense:"",style:{width:"100px"},onOnChange:e.onChange,label:"Use in Actions",itemId:n.id,id:"useInGroup",value:n.useInGroup!==void 0?n.useInGroup:!0,type:"switch"},null,8,["onOnChange","itemId","value"])),[[m,n.primaryStateKey&&n.isInGroup===!0]]):f("",!0),e.shallBeShown("actionElement")?y((s(),h(l,{key:3,dense:"",style:{width:"200px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"actionElement",label:"Action Element",state:e.deviceList[n.deviceId].states[n.primaryStateKey],stateKey:n.primaryStateKey,itemId:n.id,value:n.actionElement,type:"select.components",components:e.FunctionsComponentsList.actionElements[e.getDeviceFunction(n)],componentValues:e.componentValues(n,"action",n.primaryStateKey)},null,8,["onOnSelect","onOnOptions","state","stateKey","itemId","value","components","componentValues"])),[[m,n.primaryStateKey]]):f("",!0)])):f("",!0),n.type==="device"?(s(),b("div",an,[e.shallBeShown("secondaryStatesKeys")?(s(),h(te,{key:0,"stack-label":"",dense:"",style:{width:"430px"},"onUpdate:modelValue":p=>e.onChangeSecondaryStatesKeys(n.id,p),label:e.$t("Secondary State"),"model-value":n.secondaryStatesKeys,options:e.getDeviceStatesOptions(n.deviceId),"use-chips":"",multiple:""},{after:v(()=>[a(q,{flat:"",dense:"",icon:"mdi-dots-vertical","click.prevent":""},{default:v(()=>[a(Ae,null,{default:v(()=>[a(ae,{style:{"min-width":"100px"}},{default:v(()=>[a(z,null,{default:v(()=>[a(G,null,{default:v(()=>[a(l,{dense:"",onOnChange:e.onChange,itemId:n.id,label:"Use Labels",id:"secondaryStatesConfig.useLabel",value:n.secondaryStatesConfig&&n.secondaryStatesConfig.useLabel||!1,type:"switch",inline:""},null,8,["onOnChange","itemId","value"])]),_:2},1024)]),_:2},1024),a(z,null,{default:v(()=>[a(G,null,{default:v(()=>[a(l,{dense:"",onOnChange:e.onChange,itemId:n.id,label:"Use Colors",id:"secondaryStatesConfig.useColor",value:n.secondaryStatesConfig&&n.secondaryStatesConfig.useColor||!0,type:"switch",inline:""},null,8,["onOnChange","itemId","value"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onUpdate:modelValue","label","model-value","options"])):f("",!0)])):f("",!0)]),_:2},1024))],64)):(s(),h(G,{key:1},{default:v(()=>[X(I(e.$t("Device not found")+" ("+e.$t("Device ID")+": "+n.deviceId+")"),1)]),_:2},1024))]),_:2},1024))),128))]),_:1},512)])])}var sn=de(je,[["render",ln],["__scopeId","data-v-ed9b572c"]]);const dn=se({name:"WidgetPage",props:["widgetId"],emits:["onClose"],components:{WidgetDevicesSection:sn},setup(e,{emit:K}){const D=ie(),{errors:L,hasErrors:C,addError:S,removeError:l,resetErrors:k}=Ue({module:"Empty"}),n=P(null);Ge(()=>e.widgetId,u=>{u?(n.value=D.widgets[u]?_(D.widgets[u]):{id:u,config:{}},n.value.module&&l("module")):n.value=null});const p=H.ModuleList.map(u=>({label:u,value:u})),B=R(()=>H.Configurations[n.value.module]||[]),$=R(()=>H.Settings[n.value.module]||{}),M=R(()=>{const u={};return B.value.forEach(t=>{if(n.value.config[t.parameter]===void 0){const i=typeof t.value=="function"?t.value(n.value):t.value;w({id:"config."+t.parameter,value:i}),u[t.parameter]=i}else u[t.parameter]=n.value.config[t.parameter]}),u}),c=u=>u?Object.keys(u).some(t=>{const i=Array.isArray(u[t])?u[t]:[u[t]],O=n.value.config[t]===void 0?B.value.find(E=>E.parameter===t).value:n.value.config[t];return i.includes(O)}):!0,w=u=>{const{_error:t,id:i,value:O}=u;t?S(i,t):i!==void 0&&O!==void 0&&i.indexOf("config.")!==-1?(n.value.config[i.replace("config.","")]=O,l(i)):i!==void 0&&O!==void 0&&(n.value[i]=O,l(i),i==="module"&&(k(),n.value.config={}))},A=(u=null)=>{K("onClose",u),n.value=null,k()};return{ModuleList:p,ModuleConfigurations:B,ModuleSettings:$,ModuleConfigValues:M,errors:L,hasErrors:C,dependencies:c,widget:n,onChange:w,onCancel:A,onSave:()=>{D.addWidget({widget:n.value}),A(n.value)}}}}),un={class:"text-h6 row items-center"},rn={class:"text-h6 primary q-ma-sm"},cn={class:"row"},vn={class:"col"},gn={class:"col"},pn={class:"col"},hn={class:"col-2"},fn={class:"col-1"},yn={class:"text-h6 primary q-ma-sm"},mn={class:"row"},Cn={class:"col-3"},Sn={class:"col-9"},bn={class:"text-h7 primary q-ma-sm"},wn={class:"row"},In={class:"row"},On={class:"q-pa-sm"},Dn={key:0,class:"row"},kn={class:"text-h7 primary q-ma-sm"},$n={class:"row"};function En(e,K,D,L,C,S){const l=J("inputs"),k=J("widget-devices-section");return s(),h(We,{"model-value":e.widget!==null,"full-height":"",persistent:""},{default:v(()=>[e.widget!==null?(s(),h(Me,{key:0,class:"column full-height",style:{width:"1400px","max-width":"90vw"}},{default:v(()=>[a(le,{class:"row items-center"},{default:v(()=>[r("div",un,[X(I(e.$t("Widget"))+": ",1),a(l,{dense:"",onOnChange:e.onChange,id:"title",label:e.$t("Name"),value:e.widget.title||"",autofocus:"",style:{width:"230px"}},null,8,["onOnChange","label","value"])]),a(Ve),a(q,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),a(Q),a(le,{id:"WidgetDialogBody",class:"col scroll body"},{default:v(()=>[a(qe,null,{default:v(()=>[r("div",rn,I(e.$t("Widget-Box")),1),a(Q,{style:{margin:"0 -16px"}}),r("div",cn,[r("div",vn,[a(l,{onOnChange:e.onChange,id:"icon",label:e.$t("Widget")+" "+e.$t("Icon"),value:e.widget.icon||e.ModuleSettings.icon||"",icon:e.widget.icon},null,8,["onOnChange","label","value","icon"])]),r("div",gn,[a(l,{onOnChange:e.onChange,id:"label",label:e.$t("Widget")+" "+e.$t("Label"),value:e.widget.label||"",placeholder:e.widget.title},null,8,["onOnChange","label","value","placeholder"])]),r("div",pn,[a(l,{onOnChange:e.onChange,id:"link",label:e.$t("Widget")+" "+e.$t("Link"),value:e.widget.link||"",info:"config#HomeKitTile#jumper#info"},null,8,["onOnChange","label","value"])]),r("div",hn,[a(l,{type:"switch",onOnChange:e.onChange,id:"hideTitle",label:e.$t("Hide Widget Label and Icon"),value:e.widget.hideTitle||!1},null,8,["onOnChange","label","value"])]),r("div",fn,[y(a(l,{type:"switch",onOnChange:e.onChange,id:"hideSeparator",label:e.$t("Hide Separator"),value:e.widget.hideSeparator||!1},null,8,["onOnChange","label","value"]),[[m,e.widget.hideTitle!==!0]])])]),r("div",yn,I(e.$t("Module")),1),a(Q,{style:{margin:"0 -16px"}}),r("div",mn,[r("div",Cn,[a(l,{onOnSelect:e.onChange,id:"module",label:e.$t("Module"),type:"select",options:e.ModuleList,value:e.widget.module,"options-dense":"","use-input":"",required:"",error:e.errors.module!==void 0,"error-message":e.errors.module},null,8,["onOnSelect","label","options","value","error","error-message"])]),r("div",Sn,[y(r("div",{class:"centered"},I(e.$t(e.widget.module+"#description")),513),[[m,e.widget.module]])])]),y(r("div",null,[r("div",bn,I(e.$t("Module Configuration")),1),a(Q,{style:{margin:"0 0 8px 0"}}),y(r("div",wn,[(s(!0),b(U,null,x(e.ModuleConfigurations,n=>(s(),b(U,null,[n.hide!==!0?y((s(),b("div",{class:ue("col-"+(n.columns||4)),key:n.parameter},[a(l,re(n,{onOnChange:e.onChange,onOnSelect:e.onChange,id:"config."+n.parameter,value:e.ModuleConfigValues[n.parameter],errorMessage:e.errors["config."+n.parameter]}),null,16,["onOnChange","onOnSelect","id","value","errorMessage"])],2)),[[m,e.dependencies(n.dependencies)]]):f("",!0)],64))),256))],512),[[m,e.ModuleConfigurations.length>0]]),y(r("div",In,[r("p",On,I(e.$t("No configuration options for this module")),1)],512),[[m,e.ModuleConfigurations.length===0]]),e.ModuleSettings&&e.ModuleSettings.customConfiguration?(s(),b("div",Dn,[(s(),h(ee(e.ModuleSettings.customConfiguration),{config:e.widget.config,onOnChange:e.onChange},null,40,["config","onOnChange"]))])):f("",!0),e.ModuleSettings.addDevice!==!1?(s(),b(U,{key:1},[r("div",kn,I(e.$t("Module Devices")),1),a(Q,{style:{margin:"0 -0 8px 0"}}),r("div",$n,[a(k,{onOnChange:e.onChange,ModuleConfigValues:e.ModuleConfigValues,itemList:e.widget.items||[],module:e.widget.module},null,8,["onOnChange","ModuleConfigValues","itemList","module"])])],64)):f("",!0)],512),[[m,e.widget.module]])]),_:1})]),_:1}),a(Q),a(Fe,{align:"right"},{default:v(()=>[a(q,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),a(q,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave,disable:e.hasErrors},null,8,["label","onClick","disable"])]),_:1})]),_:1})):f("",!0)]),_:1},8,["model-value"])}var An=de(dn,[["render",En],["__scopeId","data-v-add1a280"]]);export{An as W};