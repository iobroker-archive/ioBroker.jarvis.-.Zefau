import{bt as Q,a4 as R,bM as U,cs as G,bw as J,Q as c,dc as W,dS as Z,dw as f,k as D,aZ as X,ao as Y,bR as p,aG as B,ay as l,W as m,V as v,b3 as h,bn as k,a2 as H,d3 as _,b1 as x,a1 as ee,D as te,C as V,I as $,aE as q,A as I,U as y,aI as K,dT as ne}from"./index-2eefae4b.js";const{capitalize:ae}=ne,ie=R({name:"ModuleHomeKitTile",props:["_containerSize","widget"],setup(e){const w=U(),z=G(),F=J(),O=c(()=>e.widget.config),r=c(()=>({...W.joinConfig(O.value,Z)})),a=c(()=>e.widget.items&&e.widget.items[0]||{}),d=c(()=>f.get(a.value.deviceId)),n=D({}),i=D({}),g=c(()=>({on:"true",off:"false",...n.value&&n.value.properties||{}})),T=c(()=>n.value&&n.value.val!==void 0&&n.value.val.toString()===g.value.on.toString()),A=(t,o,s,u)=>{if(S.value=!0,t){C.value=t;return}n.value=u},M=(t,o,s,u)=>{if(S.value=!0,t){C.value=t;return}i.value=u},N=c(()=>{let t=n.value&&n.value.bodyStyle;if(!t)return"";if(typeof t=="string"){t.indexOf("{")!==-1&&t.indexOf("}")!==-1&&(t=t.replace("{","").replace("}",""));const o={};return t.split(";").forEach(s=>{const[u,E]=s.split(":");o[u.trim()]=E.trim()}),o}try{return t}catch{return""}}),S=D(!1),C=D();let b=[];X(()=>{d.value?a.value.bodyStateKey||a.value.primaryStateKey?(a.value.primaryStateKey&&(b=b.concat(f.listen(d.value.id,a.value.primaryStateKey,A))),a.value.bodyStateKey&&(b=b.concat(f.listen(d.value.id,a.value.bodyStateKey,M)))):S.value=!0:(C.value="HomeKitTile: "+w.t("Device {deviceId} not found").replace("{deviceId}",a.value.deviceId),console.warn(C.value),S.value=!0)}),Y(()=>f.unlisten(b));const j=(t,o,s)=>{if(Array.isArray(s))return s.some(E=>j(t,o,E));const u=r.value[t+ae(o)];return u===null?!1:s==="secondaryStates"?u===s&&a.value.secondaryStatesKeys:s==="state"?u===s&&a.value.primaryStateKey:s==="bodyElement"?u===s&&a.value.bodyStateKey&&a.value.bodyElement:s==="actionElement"?u===s&&a.value.primaryStateKey&&a.value.actionElement:u===s},P=(t,o="action",s="State")=>p.Components[t]&&p.Components[t][o][s]||p.Components._defaults&&p.Components._defaults[o][s]||null,L=()=>{if(r.value.action==="website"&&(r.value.website.indexOf("http")>-1||r.value.website.indexOf("www")>-1))window.open((r.value.website.indexOf("http")===-1?"http://":"")+r.value.website,"_blank");else if(r.value.action==="page"&&r.value.jumper)z.push({params:{tabId:r.value.jumper}}).catch(t=>console.warn(t));else if(r.value.action==="popup"&&d.value)F.set({selectedDeviceId:d.value.id});else if(d.value&&r.value.action==="trigger"&&a.value.primaryStateKey){const t=T.value?g.value.setOff:g.value.setOn;let o=T.value?g.value.off:g.value.on;o=typeof o=="string"&&(o==="true"||o==="false")?o==="true":o,f.set(d.value.id,a.value.primaryStateKey,t!==void 0?t:o)}};return{FunctionsComponents:p.Components,FunctionsIcons:p.Icons,horizontal:["left","center","right"],vertical:["top","middle","bottom"],moduleConfig:r,loaded:S,error:C,device:d,deviceConfig:a,primaryState:n,bodyState:i,bodyStyle:N,setDevice:f.set,getComponent:P,hasElement:j,jump:L}}}),oe=["v-ripple"],se={key:0,class:"q-focus-helper"};function le(e,w,z,F,O,r){const a=B("alert"),d=B("icon");return l(),m("div",{class:I(["HomeKitTile grid",{"cursor-pointer":e.moduleConfig.action&&e.moduleConfig.action!=="none","q-hoverable":e.moduleConfig.action&&e.moduleConfig.action!=="none"}]),style:V({height:e._containerSize.height+"px",width:e._containerSize.width+"px"}),onClick:w[0]||(w[0]=(...n)=>e.jump&&e.jump(...n)),"v-ripple":e.moduleConfig.action&&e.moduleConfig.action!=="none"},[e.moduleConfig.action&&e.moduleConfig.action!=="none"?(l(),m("span",se)):v("",!0),h(H(_,{indeterminate:""},null,512),[[k,!e.loaded&&!e.error]]),h(H(a,null,{default:x(()=>[ee(te(e.error),1)]),_:1},512),[[k,e.loaded&&e.error]]),e.device?h((l(),m("div",{key:1,class:"q-pa-sm full-height",style:V(e.bodyStyle)},[(l(!0),m($,null,q(e.vertical,n=>(l(),m("div",{key:n,class:I([n,"item row nowrap"])},[(l(!0),m($,null,q(e.horizontal,i=>(l(),m("div",{key:i,class:I(["col-grow",i])},[e.hasElement(n,i,"icon")?(l(),y(d,{key:0,alignment:i,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.primaryState.icon,color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):v("",!0),e.hasElement(n,i,"deviceIcon")?(l(),y(d,{key:1,alignment:i,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.device.icon||e.FunctionsIcons[e.device.function],color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):v("",!0),e.hasElement(n,i,"label")?(l(),y(K(e.FunctionsComponents._defaults.components.Title),{key:2,alignment:i,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,i,"secondaryStates")?(l(),y(K(e.FunctionsComponents._defaults.components.SecondaryStates),{key:3,alignment:i,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,i,"state")?(l(),y(K(e.FunctionsComponents._defaults.components.State),{key:4,alignment:i,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,i,"bodyElement")?(l(),y(K(e.getComponent(e.device.function,"body",e.deviceConfig.bodyElement)),{key:5,alignment:i,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,i,"actionElement")?(l(),y(K(e.getComponent(e.device.function,"action",e.deviceConfig.actionElement)),{key:6,alignment:i,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0)],2))),128))],2))),128))],4)),[[k,e.loaded&&!e.error]]):v("",!0)],14,oe)}var ue=Q(ie,[["render",le],["__scopeId","data-v-7ef281c9"]]);export{ue as default};