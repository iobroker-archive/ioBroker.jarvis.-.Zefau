import{dz as requiredArgs,dA as toDate,bt as _export_sfc,a4 as defineComponent,bI as useI18n,Q as computed,d7 as Modules,dP as ConfigFile,k as ref,aY as watch,dr as Devices,ao as onBeforeUnmount,dd as Pro,aG as resolveComponent,ay as openBlock,W as createElementBlock,b3 as withDirectives,bn as vShow,a2 as createVNode,c$ as QLinearProgress,b1 as withCtx,a1 as createTextVNode,D as toDisplayString,U as createBlock,$ as createSlots,bu as QIcon,bH as QInput,X as createBaseVNode,bK as QSelect,V as createCommentVNode,bO as QSeparator,bC as QBtn,I as Fragment,aE as renderList,C as normalizeStyle,A as normalizeClass,cs as _default,dQ as parseISO,cF as format,dR as stripHtml}from"./index-37e82287.js";import{Q as QTr,c as QTable,b as QTd}from"./QTable-95eb922e.js";import"./QVirtualScroll-61844a2d.js";function compareDesc(e,o){requiredArgs(2,arguments);var t=toDate(e),s=toDate(o),n=t.getTime()-s.getTime();return n>0?-1:n<0?1:n}var JsonTable_vue_vue_type_style_index_0_lang="";const _sfc_main=defineComponent({name:"ModuleJsonTable",props:["widget","_containerSize"],setup(props){const i18n=useI18n(),config=computed(()=>props.widget.config),moduleConfig=computed(()=>({...Modules.joinConfig(config.value,ConfigFile)})),device=ref(null),deviceConfig=computed(()=>props.widget.items&&props.widget.items[0]||{}),columns=ref([]),columnsVisible=ref([]),parse=data=>{if(!data)return[];loaded.value=!1;const c=[],cVisible=[];let j=convertToJson(data);try{if(j=typeof j=="string"?JSON.parse(j):j,j=flatten(j),!Array.isArray(j)&&typeof j!="object")throw new Error("JSON must be array of objects.");let theads=_default(moduleConfig.value.thead&&moduleConfig.value.thead.length>0?moduleConfig.value.thead:!j||!j[0]?[]:Object.keys(j[0]).map(e=>({field:e,label:e})));if(!Array.isArray(j)||moduleConfig.value.object===!0){const e=[];theads=_default(moduleConfig.value.thead&&moduleConfig.value.thead.length>0?moduleConfig.value.thead:[{field:i18n.t("Column")+" A"},{field:i18n.t("Column")+" B"}]),j=j[0]||j;for(const o in j){const t=j[o];e.push({[theads[0].field||theads[0].label]:o,[theads[1].field||theads[1].label]:t})}j=e}if(j.length>0){for(const i in theads){const thead=theads[i],columnKey=thead.field||thead.label||Object.keys(j[0])[i];let val=j[0][columnKey];const parsedFloat=parseFloat(val);if(!columnKey){console.warn("JsonTable",'Neither "field" nor "label" defined for column #'+i,thead);continue}const column={label:columnKey,align:"left",sortable:!0,...thead,name:columnKey.toLowerCase(),field:columnKey};if(thead.format&&Pro.isPro())try{column.format=eval(thead.format),val=column.format(val)}catch(e){error.value=e.message,console.error("JsonTable",e)}else thead.format&&!Pro.isPro()&&Pro.warn("JsonTable: Callback for format only available in Pro.");if(/\d{4}[\.-]\d{2}[\.-]\d{2}([ |T]\d{2}:\d{2}(:\d{2})?([.]\d{3})?Z?)?/.test(val))column.sort=(e,o)=>compareDesc(parseISO(e),parseISO(o)),column.format=e=>format(e,thead.mask?thead.mask:e.indexOf(":")!==-1?"dd.MM.yyyy HH:mm":"dd.MM.yyyy");else if(/(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.]((19|20)[0-9]{2})?/.test(val)){const e=new Date;column.sort=(o,t)=>(o=o&&o.endsWith(".")?o+""+e.getFullYear():o&&!o.endsWith(".")&&o.indexOf(".")===o.lastIndexOf(".")?o+"."+e.getFullYear():o,t=t&&t.endsWith(".")?t+""+e.getFullYear():t&&!t.endsWith(".")&&t.indexOf(".")===t.lastIndexOf(".")?t+"."+e.getFullYear():t,o&&t?compareDesc(parse(o,"dd.MM.yyyy",new Date),parse(t,"dd.MM.yyyy",new Date)):0)}else/\\d{2}:\\d{2}(:\\d{2})?/.test(val)?column.sort=(e,o)=>(e=e.replace(/:/,""),o=o.replace(/:/,""),e===o?0:e>o?1:-1):/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/.test(val)?column.sort=(e,o)=>(e=e.split(".").map(t=>("00"+t).slice(-3)).join(""),o=o.split(".").map(t=>("00"+t).slice(-3)).join(""),e===o?0:e>o?1:-1):Number.isNaN(parsedFloat)||(column.sort=(e,o)=>(e=parseFloat(e),o=parseFloat(o),e===o?0:e>o?1:-1));c.push(column),column.visible!==!1&&cVisible.push(columnKey.toLowerCase())}columns.value=c,columnsVisible.value=cVisible}}catch(e){error.value=e.message,console.warn("JsonTable",e),j=[]}return loaded.value=!0,moduleConfig.value.max>0?j.slice(0,moduleConfig.value.max):j},flatten=e=>e.map(o=>flat(o)),flat=e=>{let o={};for(const t in e){let s=e[t];if(typeof s=="object"&&!Array.isArray(s)){s=flat(s);const n={};for(const r in s)n[t+"."+r]=s[r];o={...o,...n}}else o[t]=s}return o},extractLabel=e=>{const o=e.indexOf(">")+1,t=e.indexOf("</",o);return e.substr(o,t-o)},convertToJson=e=>{let o=e;if(o&&!o.startsWith("{")&&!o.startsWith("[")&&!o.endsWith("}")&&!o.endsWith("]")&&o.indexOf("<table")!==-1&&o.indexOf("<tr")!==-1){const t=o.substr(o.indexOf("<table")),s=t.substr(0,t.indexOf("</table>")),n=s.substr(s.indexOf(">")+1),r=n.split("<tr");r.shift();const d=o.indexOf("<th")!==-1?n.split("<th"):r[0];d.shift();const l=d.map(u=>u?stripHtml(extractLabel(u)):"");r.shift();const a=[];r.forEach(u=>{const f=u.split("<td");f.shift();const m={};f.forEach((p,h)=>{m[l[h]]=p?stripHtml(extractLabel(p)):""}),Object.keys(m).length===l.length&&a.push(m)}),o=JSON.stringify(a)}return o},json=ref([]),gotState=(e,o,t)=>{if(e)return console.warn("JsonTable",e.message,e),e.message||e;json.value=parse(o.val)},error=ref(null),loaded=ref(!1);let subscriptionKeys=[];return watch(deviceConfig,e=>{device.value=Devices.get(e.deviceId),device.value?subscriptionKeys=Devices.listen(device.value.id,e.primaryStateKey,gotState):(error.value=i18n.t("Device {deviceId} not found").replace("{deviceId}",e.deviceId),console.warn("JsonTable",error.value),loaded.value=!0)},{immediate:!0}),onBeforeUnmount(()=>Devices.unlisten(subscriptionKeys)),{json,filter:ref(),columns,columnsVisible,loaded,error,device,moduleConfig,isPro:Pro.isPro(),style:computed(()=>({height:props._containerSize.height+"px"})),pagination:computed(()=>({sortBy:moduleConfig.value.sortColumn?moduleConfig.value.sortColumn.toLowerCase():"",descending:moduleConfig.value.sortDirection!==void 0?moduleConfig.value.sortDirection:!1,rowsPerPage:moduleConfig.value.rowsPerPage>=0?moduleConfig.value.rowsPerPage:10}))}}}),_hoisted_1={class:"row"},_hoisted_2=["innerHTML"],_hoisted_3={key:1};function _sfc_render(e,o,t,s,n,r){const d=resolveComponent("alert");return openBlock(),createElementBlock("div",{class:"jarvis-JsonTable-Container",style:normalizeStyle(e.style),key:e.widget.revision},[withDirectives(createVNode(QLinearProgress,{indeterminate:""},null,512),[[vShow,!e.loaded&&!e.error]]),withDirectives(createVNode(d,null,{default:withCtx(()=>[createTextVNode(toDisplayString(e.error),1)]),_:1},512),[[vShow,e.error]]),e.device?withDirectives((openBlock(),createBlock(QTable,{key:0,rows:e.json,filter:e.filter,flat:"",dense:e.moduleConfig.dense,pagination:e.pagination,"binary-state-sort":"",columns:e.columns,"row-key":"name","visible-columns":e.columnsVisible,class:"jarvis-JsonTable sticky-table-header full-height"},createSlots({body:withCtx(l=>[createVNode(QTr,{props:l},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(l.cols,a=>(openBlock(),createBlock(QTd,{key:a.field,class:normalizeClass({[l.rowIndex%2!==1?"jarvis-JsonTable-row-odd":"jarvis-JsonTable-row-even"]:!0}),align:a.align},{default:withCtx(()=>[e.isPro?(openBlock(),createElementBlock("div",{key:0,innerHTML:a.value},null,8,_hoisted_2)):(openBlock(),createElementBlock("div",_hoisted_3,toDisplayString(a.value),1))]),_:2},1032,["class","align"]))),128))]),_:2},1032,["props"])]),_:2},[e.moduleConfig.hideFilter!==!0?{name:"top-left",fn:withCtx(()=>[withDirectives(createVNode(QInput,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":o[0]||(o[0]=l=>e.filter=l),placeholder:e.$t("Search"),style:{"max-width":"120px"}},{prepend:withCtx(()=>[createVNode(QIcon,{name:"search"})]),_:1},8,["modelValue","placeholder"]),[[vShow,e.json&&e.json.length>0]])])}:void 0,e.moduleConfig.hideColumnsSelector!==!0||e.moduleConfig.hideFullscreenButton!==!0?{name:"top-right",fn:withCtx(l=>[withDirectives(createBaseVNode("div",_hoisted_1,[e.moduleConfig.hideColumnsSelector!==!0?(openBlock(),createBlock(QSelect,{key:0,modelValue:e.columnsVisible,"onUpdate:modelValue":o[1]||(o[1]=a=>e.columnsVisible=a),multiple:"",outlined:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.columns,"option-value":"name","options-cover":"",style:{"min-width":"150px"}},null,8,["modelValue","display-value","options"])):createCommentVNode("",!0),e.moduleConfig.hideColumnsSelector!==!0&&e.moduleConfig.hideFullscreenButton!==!0?(openBlock(),createBlock(QSeparator,{key:1,vertical:"",class:"q-mx-sm"})):createCommentVNode("",!0),e.moduleConfig.hideFullscreenButton!==!0?(openBlock(),createBlock(QBtn,{key:2,flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen,style:{width:"40px"}},null,8,["icon","onClick"])):createCommentVNode("",!0)],512),[[vShow,e.json&&e.json.length>0]])])}:void 0]),1032,["rows","filter","dense","pagination","columns","visible-columns"])),[[vShow,!e.error]]):createCommentVNode("",!0)],4)}var JsonTable=_export_sfc(_sfc_main,[["render",_sfc_render]]);export{JsonTable as default};