import{Q as L}from"./QTooltip-0ea98b06.js";import{_ as N,q as T,I as q,dh as R,Y as F,c as h,d8 as V,dz as z,a4 as Q,j as D,bF as O,dq as G,k as l,w as t,K as b,a2 as k,M as w,o as u,a as v,i,t as s,g as m,N as r,$ as U,d as S,l as H,e as y,cN as J,J as E,O as M,f as K,L as P,Q as Y,F as W}from"./index-9b3d623a.js";import{Q as X}from"./QBadge-6f0b6161.js";const Z=T({name:"ModuleAdapterStatus",props:["widget"],setup(a){const C=G.getConnection;q();const c=R(),I=F(),g=h(()=>a.widget.config),p=h(()=>({...V.joinConfig(g.value,z),list:g.value.list?g.value.list.replace(/, /g,",").toLowerCase().split(","):null,blacklist:g.value.blacklist?g.value.blacklist.replace(/, /g,",").toLowerCase().split(","):null})),n=h(()=>{let o=c.instances;if(o=o&&o.val&&!o.val.error?{...o.val}:{},p.value.list)for(const d in o){const f=d.substr(0,d.indexOf("."));!p.value.list.includes(d)&&!p.value.list.includes(f)&&delete o[d]}else if(p.value.blacklist)for(const d in o){const f=d.substr(0,d.indexOf("."));(p.value.blacklist.includes(d)||p.value.blacklist.includes(f))&&delete o[d]}return o}),e=Q([]),_=Q([]);C.subscribeState("admin.0.info.updatesList",({err:o,state:d})=>{if(d){const f=d&&d.val?d.val.replace("js-controller,","").replace("js-controller",""):"";e.value=f?f.split(","):[],_.value=e.value.map($=>n.value[$+".0"]?n.value[$+".0"].title+" ("+n.value[$+".0"].name+")":$).join(", ")}});const A=Q({}),j=(o,d)=>{A.value[o]=!0,C.setAdapter(o,d).then(()=>{c.join("instances",{val:{...c.instances.val,[o]:{...c.instances.val[o],enabled:d}},ts:Date.now()})}).catch(f=>{console.error(f)}).finally(()=>{A.value[o]=!1})},B=h(()=>I.locale.substr(0,2));return{activeRepo:h(()=>c.meta.activeRepo),adapterUpdates:e,adapterUpdateList:_,instances:n,language:B,loading:A,moduleConfig:p,onSet:j}}}),x=y("br",null,null,-1),ee=i(", "),ae={class:"UpdateAvailable"},le={key:1},te={key:2};function oe(a,C,c,I,g,p){const n=D("icon");return O([a.widget.revision],()=>l(M,null,{default:t(()=>[b(l(w,{class:"UpdateAvailableListItem",style:{"background-color":"var(--q-accent)"}},{default:t(()=>[a.adapterUpdateList.length>60?(u(),v(L,{key:0},{default:t(()=>[i(s(a.adapterUpdateList),1)]),_:1})):m("",!0),l(r,{avatar:""},{default:t(()=>[l(n,{name:"refresh"})]),_:1}),l(r,null,{default:t(()=>[l(U,null,{default:t(()=>[i(s(a.adapterUpdateList.length>60?a.adapterUpdateList.substr(0,58)+"...":a.adapterUpdateList),1)]),_:1}),l(U,{caption:"",style:{color:"#fff"}},{default:t(()=>[i(s(a.adapterUpdates.length)+" "+s(a.$t("Updates available")),1),x,i(" "+s(a.$t("Repository")+": "+a.activeRepo),1)]),_:1})]),_:1}),l(r,{side:""},{default:t(()=>[l(X,{rounded:"",color:"white",style:{color:"var(--q-accent)"},label:a.adapterUpdates.length},null,8,["label"])]),_:1})]),_:1},512),[[k,a.moduleConfig.updates&&a.adapterUpdates.length>0]]),(u(!0),S(W,null,H(a.instances,e=>(u(),v(w,{key:e.id,clickable:a.moduleConfig.switch&&e.mode!=="none"&&e.mode!=="once"&&a.loading[e.id]!==!0,"v-ripple":a.moduleConfig.switch&&e.mode!=="none"&&e.mode!=="once"&&a.loading[e.id]!==!0},{default:t(()=>[l(r,{avatar:""},{default:t(()=>[l(n,{name:"img:"+e.extIcon},null,8,["name"])]),_:2},1024),l(r,null,{default:t(()=>[l(U,null,{default:t(()=>[i(s(e.titleLang&&(e.titleLang[a.language]||e.titleLang.en||e.titleLang.de)||e.titleLang||e.title),1)]),_:2},1024),l(U,{caption:""},{default:t(()=>[y("span",null,s(e.id)+", v"+s(e.version),1),b(y("span",null,[ee,y("span",ae,s(a.$t("Update available")+" v"+e.update),1)],512),[[k,e.update]]),b(y("span",null,", "+s(a.$t("Compact Mode"))+" "+s(a.$t("on"))+" ("+s(a.$t("Group")+" "+e.compactGroup)+")",513),[[k,e.runAsCompactMode]])]),_:2},1024)]),_:2},1024),e.mode!=="none"&&e.mode!=="once"?b((u(),v(r,{key:0,side:""},{default:t(()=>[a.loading[e.id]===!0?(u(),v(J,{key:0,color:"primary",size:"21px"})):m("",!0),a.loading[e.id]!==!0&&e.alive!==!1&&e.connectedToHost!==!1&&e.connectedToInstance!==!1?(u(),S("div",le,[l(n,{color:"positive",name:"mdi-check-circle"}),l(L,null,{default:t(()=>[i(s(a.$t("Adapter")+" "+a.$t("alive")),1)]),_:1})])):m("",!0),a.loading[e.id]!==!0&&e.alive===!1||e.connectedToHost===!1||e.connectedToInstance===!1?(u(),S("div",te,[l(n,{color:"warning",name:"mdi-alert"}),l(L,null,{default:t(()=>[i(s(a.$t("Adapter")+" "+a.$t("not alive")),1)]),_:1})])):m("",!0)]),_:2},1536)),[[k,e.enabled===!0]]):m("",!0),e.mode!=="none"&&e.mode!=="once"?b((u(),v(r,{key:1,side:""},{default:t(()=>[l(n,{name:"mdi-close"}),l(L,null,{default:t(()=>[i(s(a.$t("Adapter")+" "+a.$t("disabled")),1)]),_:1})]),_:2},1536)),[[k,e.enabled===!1]]):m("",!0),a.moduleConfig.switch&&e.mode!=="none"&&e.mode!=="once"&&a.loading[e.id]!==!0?(u(),v(E,{key:2,ref_for:!0,ref:"menu","touch-position":""},{default:t(()=>[l(M,{style:{"min-width":"120px","man-width":"150px"},class:"body"},{default:t(()=>[l(w,{class:K("text-white bg-"+(e.enabled?"positive":"negative"))},{default:t(()=>[l(r,{avatar:""}),l(r,null,{default:t(()=>[i(s(a.$t(e.enabled?"Currently running":"Currently stopped")),1)]),_:2},1024),l(r,{side:""})]),_:2},1032,["class"]),b((u(),v(w,{clickable:"",onClick:_=>a.onSet(e.id,!e.enabled)},{default:t(()=>[l(r,{avatar:""},{default:t(()=>[l(Y,{color:e.enabled?"negative":"positive",name:e.enabled?"mdi-pause":"mdi-play"},null,8,["color","name"])]),_:2},1024),l(r,null,{default:t(()=>[i(s(a.$t(e.enabled?"Stop":"Start")+" "+a.$t("Adapter")),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[P]])]),_:2},1024)]),_:2},1536)):m("",!0)]),_:2},1032,["clickable","v-ripple"]))),128))]),_:1}),C,0)}var ne=N(Z,[["render",oe]]);export{ne as default};