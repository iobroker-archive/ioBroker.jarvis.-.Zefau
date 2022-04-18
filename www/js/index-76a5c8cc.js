var U=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var B=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&B(e,r,t[r]);if(q)for(var r of q(t))G.call(t,r)&&B(e,r,t[r]);return e},P=(e,t)=>K(e,X(t));import{Q as Y}from"./QToolbarTitle-31630b1c.js";import{Q as _}from"./QTooltip-30d1582f.js";import{bX as x,u as ee,cl as te,a4 as N,cm as ie,c as v,y as S,b7 as oe,cn as se,h as H,co as ne,aZ as ae,_ as re,q as le,cp as ue,cq as de,H as ce,cr as fe,cs as ge,ct as ve,cu as me,j as L,o as p,a as k,w as g,k as u,i as z,t as D,O as T,d as J,l as ye,F as R,cv as pe,cw as he,g as V,ac as be,cx as we,cy as W}from"./index-8c8fca3a.js";import{Q as I}from"./QToolbar-5bbd648e.js";import{Q as Ce,a as Se,b as ke}from"./QPageContainer-fe202438.js";import{Q as Qe}from"./QHeader-6acf1fc8.js";var $e=x({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:r}){const{proxy:{$q:h}}=ae(),n=ee(te,()=>{console.error("QFooter needs to be child of QLayout")}),y=N(parseInt(e.heightHint,10)),c=N(!0),C=N(ie.value===!0||n.isContainer.value===!0?0:window.innerHeight),b=v(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||h.platform.is.ios&&n.isContainer.value===!0),a=v(()=>n.isContainer.value===!0?n.containerHeight.value:C.value),Q=v(()=>{if(e.modelValue!==!0)return 0;if(b.value===!0)return c.value===!0?y.value:0;const o=n.scroll.value.position+a.value+y.value-n.height.value;return o>0?o:0}),$=v(()=>e.modelValue!==!0||b.value===!0&&c.value!==!0),O=v(()=>e.modelValue===!0&&$.value===!0&&e.reveal===!0),F=v(()=>"q-footer q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+($.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(b.value!==!0?" hidden":""):"")),E=v(()=>{const o=n.rows.value.bottom,f={};return o[0]==="l"&&n.left.space===!0&&(f[h.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),o[2]==="r"&&n.right.space===!0&&(f[h.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),f});function s(o,f){n.update("footer",o,f)}function i(o,f){o.value!==f&&(o.value=f)}function w({height:o}){i(y,o),s("size",o)}function m(){if(e.reveal!==!0)return;const{direction:o,position:f,inflectionPoint:j}=n.scroll.value;i(c,o==="up"||f-j<100||n.height.value-a.value-f-y.value<300)}function l(o){O.value===!0&&i(c,!0),r("focusin",o)}S(()=>e.modelValue,o=>{s("space",o),i(c,!0),n.animate()}),S(Q,o=>{s("offset",o)}),S(()=>e.reveal,o=>{o===!1&&i(c,e.modelValue)}),S(c,o=>{n.animate(),r("reveal",o)}),S([y,n.scroll,n.height],m),S(()=>h.screen.height,o=>{n.isContainer.value!==!0&&i(C,o)});const d={};return n.instances.footer=d,e.modelValue===!0&&s("size",y.value),s("space",e.modelValue),s("offset",Q.value),oe(()=>{n.instances.footer===d&&(n.instances.footer=void 0,s("size",0),s("offset",0),s("space",!1))}),()=>{const o=se(t.default,[H(ne,{debounce:0,onResize:w})]);return e.elevated===!0&&o.push(H("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),H("footer",{class:F.value,style:E.value,onFocusin:l},o)}}});const A=[{id:"devices",title:"Devices",icon:"mdi-devices"},{id:"widgets",title:"Widgets",icon:"mdi-view-grid"},{id:"layout",title:"Layout",icon:"mdi-file"},{id:"styles",title:"Styles",icon:"mdi-code-tags",pro:!0},{id:"settings",title:"Settings",icon:"mdi-cog"},{id:"account",title:"Pro-Account",icon:"mdi-star"},{id:"help",title:"Help",icon:"mdi-help-box"}],Oe=le({name:"ConfigurationLayout",components:{Login:ue},setup(){var E;const e=de(),t=ce(),r=fe(),h=ge();if(e.init({devices:t.devices,layout:Array.isArray(t.layout)&&t.layout.length>0?t.layout:[{id:"2bbbe067-7506-4fac-8a1f-bfbf9f48a9e7",type:"page",icon:"mdi-view-dashboard-variant",title:"Overview",tabs:[{icon:"mdi-desktop-mac-dashboard",title:"Dashboard",id:"674d30a6-83d8-4876-9135-55791d7dfec9",widgetsDesktop:[],widgetsSmartphone:[]}]}],styles:t.styles,settings:t.settings,widgets:t.widgets}),r.name==="Configuration"){const s=ve(((E=e.settings)==null?void 0:E.configTab)||A[0].id)+"Page";setTimeout(()=>{h.replace({name:s,params:r.params}).catch(i=>console.error(i))},500)}const n=N(me.get("secureConfiguration")),y=v(()=>t.settings),c=v(()=>e.hasErrors),C=v({get(){var s;return(s=e.settings)==null?void 0:s.configExpertMode},set(s){e.set("settings.configExpertMode",s)}}),b=v({get(){var s;return(s=e.settings)==null?void 0:s.configTab},set(s){s&&e.set("settings.configTab",s)}}),a=window.open,Q=s=>window.location.href.endsWith("configuration")||window.location.href.endsWith("configuration/")?"/configuration/"+s:s,$=(s,i)=>(t.set("pageHeight",i-s),{"min-height":i-s+"px"}),O=()=>{t.set("drawerSidebar",!1),h.push({name:"home",params:P(M({},r.params),{tabId:t.getSelectedTabId})}).catch(()=>{})};return{hasErrors:c,settings:y,login:n,version:"3.1.0-alpha.5",configTab:b,expertMode:C,tabs:A,setPageContainer:$,to:Q,onOpen:a,onCancel:O,onSave:s=>{const i={devices:e.devices,widgets:W(e.widgets),layout:W(e.getLayoutWithoutDeletions)||[],styles:e.styles,settings:e.settings};for(const m in i.widgets)i.widgets[m].items=i.widgets[m].items||[],i.widgets[m].items=i.widgets[m].items.filter(l=>i.devices[l.deviceId]&&(!i.devices[l.deviceId].attributes||i.devices[l.deviceId].attributes&&i.devices[l.deviceId].attributes.deleted!==!0));i.layout.forEach(m=>{m.tabs=m.tabs||[],m.tabs.forEach(l=>{delete l.widgets,l.widgetsDesktop=l.widgetsDesktop||[],l.widgetsDesktop.forEach(d=>{d.items=d.items||[],d.items=d.items.filter(o=>i.widgets[o]&&i.widgets[o]._deleted!==!0)}),l.widgetsSmartphone=l.widgetsSmartphone||[],l.widgetsSmartphone.forEach(d=>{d.items=d.items||[],d.items=d.items.filter(o=>i.widgets[o]&&i.widgets[o]._deleted!==!0)})})}),i.devices=e.getDevicesWithoutDeletions,i.widgets=e.getWidgetsWithoutDeletions;const w={};JSON.stringify(t.widgets)!==JSON.stringify(i.widgets)&&(w.widgets=i.widgets),JSON.stringify(t.devices)!==JSON.stringify(i.devices)&&(w.devices=i.devices),JSON.stringify(t.layout)!==JSON.stringify(i.layout)&&(w.layout=i.layout),JSON.stringify(t.settings)!==JSON.stringify(i.settings)&&(w.settings=i.settings),JSON.stringify(t.styles)!==JSON.stringify(i.styles)&&(w.styles=i.styles),e.save(w),s?O():e.init(i)}}}}),Ee={key:1};function Te(e,t,r,h,n,y){const c=L("icon"),C=L("Login"),b=L("router-view");return p(),k(we,{view:"hHh lpR fFf"},{default:g(()=>[!e.settings.secureConfiguration||e.settings.secureConfiguration&&e.login?(p(),k(Qe,{key:0},{default:g(()=>[u(I,null,{default:g(()=>[u(Y,null,{default:g(()=>[u(c,{name:"mdi-cog",vAlign:"middle"}),z(" "+D(e.$t("Configuration"))+" (v"+D(e.version)+") ",1)]),_:1}),u(T,{flat:"",dense:"",round:"",icon:e.expertMode?"mdi-code-tags-check":"mdi-code-tags","aria-label":"$t('Expert Mode')",onClick:t[0]||(t[0]=a=>e.expertMode=!e.expertMode)},{default:g(()=>[u(_,null,{default:g(()=>[z(D(e.$t("Expert Mode")),1)]),_:1})]),_:1},8,["icon"])]),_:1}),u(he,{modelValue:e.configTab,"onUpdate:modelValue":t[1]||(t[1]=a=>e.configTab=a),"inline-label":"",dense:"","outside-arrows":"","mobile-arrows":"",align:"left"},{default:g(()=>[(p(!0),J(R,null,ye(e.tabs,a=>(p(),J(R,null,[a.link?(p(),k(pe,{key:a.id,name:a.id,label:e.$t(a.title),icon:a.icon,onClick:Q=>e.onOpen(a.link,"_blank")},null,8,["name","label","icon","onClick"])):(p(),k(Ce,{key:a.id,name:a.id,label:e.$t(a.title),icon:a.icon,to:e.to(a.id)},null,8,["name","label","icon","to"]))],64))),256))]),_:1},8,["modelValue"])]),_:1})):V("",!0),u(ke,{class:"ConfigurationPage body"},{default:g(()=>[u(Se,{"style-fn":e.setPageContainer},{default:g(()=>[e.settings.secureConfiguration!==void 0&&e.settings.secureConfiguration!==!1&&!e.login?(p(),k(C,{key:0,ns:"secureConfiguration",code:e.settings.secureConfiguration,onOnSuccess:t[2]||(t[2]=a=>e.login=!0)},null,8,["code"])):V("",!0),!e.settings.secureConfiguration||e.settings.secureConfiguration&&e.login?(p(),J("div",Ee,[u(b)])):V("",!0)]),_:1},8,["style-fn"])]),_:1}),!e.settings.secureConfiguration||e.settings.secureConfiguration&&e.login?(p(),k($e,{key:1},{default:g(()=>[u(I,null,{default:g(()=>[u(T,{flat:"",icon:"mdi-window-close","aria-label":"Cancel",label:e.$t("Cancel"),class:"text-red",onClick:e.onCancel},null,8,["label","onClick"]),u(be),u(T,{disable:e.hasErrors,icon:"mdi-content-save","aria-label":"Save",label:e.$t("Save"),flat:"",color:"primary",onClick:t[3]||(t[3]=a=>e.onSave(!1)),style:{"margin-right":"8px"}},null,8,["disable","label"]),u(T,{disable:e.hasErrors,icon:"mdi-content-save","aria-label":"Save & Exit",label:e.$t("Save")+" & "+e.$t("Exit"),color:"primary",onClick:t[4]||(t[4]=a=>e.onSave(!0))},null,8,["disable","label"])]),_:1})]),_:1})):V("",!0)]),_:1})}var qe=re(Oe,[["render",Te]]);export{qe as default};