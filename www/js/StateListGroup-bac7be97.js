import{a4 as C,k as K,Q as N,dr as p,ao as I,bL as k,bt as L,ay as d,U as m,b1 as l,a2 as b,bJ as G,a1 as V,D,bA as v,W as O,aI as $,ak as B,V as _,bz as Q}from"./index-37e82287.js";const E=C({name:"ModuleStateListGroup",props:["devices","deviceConfig"],setup(t){const u=K({}),y=N(()=>{const e=Object.values(u.value),n=e.filter(o=>o===!0),i=e.filter(o=>o===!1);return e.length===n.length?!0:e.length===i.length?!1:null}),g=(e,n,i)=>{if(e)return;const{item:o}=t.devices[i.id+"#"+n.key]||{},r=n&&n.val!==void 0?n.val:null;if(o&&o.useInGroup!==!1){let{on:s,off:a}=n&&n.properties||{};s=s!==void 0?s:!0,u.value[i.id+"-"+n.stateKey]=r!==null?r.toString()===s.toString()||typeof r=="number"&&r>0:a}},S=(e=!0)=>{for(const n in t.devices){const{device:i,item:o}=t.devices[n],r=o.primaryStateKey.toLowerCase(),s=i.states[r]&&i.states[r].properties||{},a=u.value[i.id+"-"+o.primaryStateKey],h=typeof a=="boolean"?!1:typeof a=="number"?!0:!Number.isNaN(parseFloat(a))&&a.toString().length===parseFloat(a).toString().length;e===!0&&s.setOn!==void 0?e=s.setOn:e===!1&&s.setOff!==void 0?e=s.setOff:e===!0&&s.on!==void 0||e===!1&&s.off!==void 0?e=e===!0?s.on:s.off:h&&typeof e=="boolean"&&(e=e===!0?parseInt(s.level)||100:0),e=typeof e=="string"&&(e==="true"||e==="false")?e==="true":e;const c=parseInt(e)||null;e=typeof e=="string"&&c!==null&&!Number.isNaN(c)&&c.toString().length===e.length?c:e,o.useInGroup!==!1&&p.set(i.id,o.primaryStateKey,e)}};let f=[];if(t.deviceConfig.actions)for(const e in t.devices)t.devices[e].item.primaryStateKey&&(f=f.concat(p.listen(t.devices[e].device.id,t.devices[e].item.primaryStateKey,g)));return I(()=>p.unlisten(f)),{components:k.Components._defaults.action,groupDevicesStates:u,groupState:y,set:S}}}),F={key:0};function W(t,u,y,g,S,f){return d(),m(Q,{dense:"",class:"jarvis-StateListGroup"},{default:l(()=>[b(v,null,{default:l(()=>[b(G,{overline:""},{default:l(()=>[V(D(t.deviceConfig.name),1)]),_:1})]),_:1}),t.deviceConfig.actions===!0?(d(),m(v,{key:0,side:""},{default:l(()=>[t.deviceConfig.groupElement?(d(),O("div",F,[(d(),m($(t.components[t.deviceConfig.groupElement]),B(t.$props,{onSet:t.set,stateKey:"group",state:{properties:{},stateStyle:{},val:t.groupState}}),null,16,["onSet","state"]))])):_("",!0)]),_:1})):_("",!0)]),_:1})}var w=L(E,[["render",W]]);export{w as default};