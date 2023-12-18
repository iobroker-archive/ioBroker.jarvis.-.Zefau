const _semver=require("semver");module.exports={getAdapterUpdates(){this.adapter.log.debug("Refresh Adapter Updates...");this.cache.AdapterUpdates=this.cache.AdapterUpdates||{ts:0,data:{}};return new Promise((s,a)=>{this.adapter.getForeignState("admin.0.info.updatesJson",(e,t)=>{if(!e&&t){try{this.cache.AdapterUpdates={ts:Date.now(),data:JSON.parse(t.val)};this.broadcast("AdapterUpdates",this.cache.AdapterUpdates.data);return s(this.cache.AdapterUpdates.data)}catch(e){delete this.cache.AdapterUpdates}}a(e)})})},getAdapterInstances(){this.adapter.log.debug("Refresh Adapter Instances...");this.cache.AdapterInstances=this.cache.AdapterInstances||{ts:0,data:{}};return new Promise((a,r)=>{this.adapter.getObjectView("system","instance",{startkey:"system.adapter.",endkey:"system.adapter.zzz"},(e,t)=>{if(!e&&t&&t.rows){const s=t.rows.map(d=>{const e=d.id.replace("system.adapter.","");d={...d.value.common,systemId:d.id,id:e};return Promise.allSettled([this.adapter.getForeignStateAsync(d.systemId+".alive"),this.adapter.getForeignStateAsync(d.systemId+".connected"),this.adapter.getForeignStateAsync(e+".info.connection")]).then(e=>{const[t,s,a]=e;d.alive=t.value?t.value.val:null;d.connectedToHost=s.value?s.value.val:null;d.connectedToInstance=a.value?a.value.val:null;const r=this.cache.AdapterUpdates&&this.cache.AdapterUpdates[d.name]&&this.cache.AdapterUpdates[d.name].availableVersion||d.version;d.update=r&&d.version&&_semver.gt(r,d.version)===true?r:null;delete d.docs;delete d.news;return d})});return Promise.allSettled(s).then(e=>{const t=e.map(e=>e.value).sort((e,t)=>e.name.toLowerCase()===t.name.toLowerCase()?0:e.name.toLowerCase()>t.name.toLowerCase()?1:-1);this.cache.AdapterInstances={ts:Date.now(),data:t};this.broadcast("AdapterInstances",this.cache.AdapterInstances.data);return a(this.cache.AdapterInstances.data)})}r(e)})})},getScriptStatuses(){this.adapter.log.debug("Refresh Script Statuses...");this.cache.ScriptStatuses=this.cache.ScriptStatuses||{ts:0,data:{}};return new Promise((i,t)=>{this.adapter.getObjectView("system","script",null,(e,r)=>{const d=[];const c={};if(!e&&r&&r.rows){r.rows=r.rows||[];r.rows.forEach(e=>{const t=e.id.replace("script.js.","");const s=t.substr(0,t.lastIndexOf("."));const a=t.substr(0,t.indexOf("."));e=e.value;e.disabled=!e.enabled;delete e.common.source;c[t]={...c[t],...e.common,created:e.ts,type:"file",id:t,parentId:s,lazy:false,children:null};c[s]={...c[s]||{},type:"folder",id:s,parentId:s.substr(0,s.lastIndexOf(".")),children:c[s]&&c[s].children||[]};c[s].children.push(c[t]);const r=t.split(".");if(r.length>2){r.forEach((e,t)=>{const s=r.slice(0,t).join(".");const a=s.substr(0,s.lastIndexOf("."));if(s&&a){c[a]=c[a]||{id:a,parentId:a.substr(0,a.lastIndexOf(".")),type:"folder",children:[]};if(c[a].children.findIndex(e=>e.id===s)===-1){c[a].children.push({id:s,type:"folder",lazy:true})}}})}});const n=Object.values(c);let e={},t,s=[],a;n.sort((e,t)=>{return e.type==="folder"&&t.type==="file"?-1:e.id.toLowerCase()===t.id.toLowerCase()?0:e.id.toLowerCase()>t.id.toLowerCase()?1:-1});for(a=0;a<n.length;a+=1){e[n[a].id]=a;n[a].children=[]}for(a=0;a<n.length;a+=1){t=n[a];if(t.parentId!==""){n[e[t.parentId]].children.push(t)}else{s.push(t)}}this.cache.ScriptStatuses={ts:Date.now(),data:{scripts:s,scriptList:d}};this.broadcast("ScriptStatuses",this.cache.ScriptStatuses.data);return i(this.cache.ScriptStatuses.data)}t(e)})})},subscribeAdapterInstances({cb:e}){e(this.cache.AdapterInstances.data)},subscribeScriptStatuses({cb:e}){e(this.cache.ScriptStatuses.data)}};