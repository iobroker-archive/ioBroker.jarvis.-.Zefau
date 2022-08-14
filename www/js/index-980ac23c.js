import{Q as ye}from"./QToolbarTitle-15f1d109.js";import{Q as be}from"./QToolbar-361309c8.js";import{a4 as te,cl as j,bI as re,cm as ne,k as F,aY as ce,cs as ue,Q as P,d9 as Ce,da as $e,bt as oe,d4 as ie,aG as L,ay as r,W as S,a2 as l,b1 as t,U as W,bN as pe,X as a,D as u,bT as we,bC as Q,bO as V,b3 as O,bn as D,bK as Se,I as q,aE as H,bz as A,bA as b,bJ as z,a1 as C,cK as ke,bB as x,V as M,bP as _e,bM as Oe,bQ as Ie,as as We,cp as De,bp as ee,A as N,C as Y,bw as me,bx as ve,ct as Te,cr as Ee,db as Pe,dc as Le,dd as ze,cO as je}from"./index-37e82287.js";import{Q as ae}from"./QBtnDropdown-4cb6feb5.js";import{J as Be}from"./json-editor-bf9ce35a.js";import{Q as de}from"./QTooltip-d5c2ad6a.js";import{Q as fe}from"./QExpansionItem-6412d52b.js";import{W as Ae}from"./WidgetPage-7b56c0a0.js";import{a as he}from"./useDragDrop-99206927.js";import"./_commonjsHelpers-55d1ff45.js";import"./QSlideTransition-db2f8c42.js";const Qe=te({name:"WidgetPopup",props:["widget"],emits:["onClose","onSave"],components:{WidgetPage:Ae},setup(e,{emit:v}){j.dev("DEBUG","WidgetPopup","setup()");const m=re(),$=ne(),B=[{label:m.t("top aligned"),value:"top"},{label:m.t("middle aligned"),value:"middle"},{label:m.t("bottom aligned"),value:"bottom"}],k=[{label:m.t("left aligned"),value:"left"},{label:m.t("center aligned"),value:"center"},{label:m.t("right aligned"),value:"right"},{label:m.t("fill full width"),value:"fill-width"}];let s={};Object.values($.widgets).forEach(y=>{s[y.module]=s[y.module]||{label:y.module,widgets:[]},y._deleted!==!0&&s[y.module].widgets.push({...y,value:y.id,label:y.label?y.label+" "+(y.title?"("+y.title+")":""):y.title||""})}),s=Object.values(s);const d=F(s),g=F(null);ce(()=>e.widget,y=>{j.dev("DEBUG","WidgetPopup","watch",y),g.value=y?ue({items:[],...y}):null});const n=P(()=>g.value.scaleToFitContents!==void 0?g.value.scaleToFitContents:!0),f=P(()=>g.value.alignmentVertical||"top"),p=P(()=>g.value.alignmentHorizontal||"center"),i=P(()=>g.value.allowFullscreen||!1),I=P(()=>g.value.items?g.value.items.map(y=>$.widgets[y]||{}):[]),E=(y,ge)=>{j.dev("DEBUG","WidgetPopup","onFilter",y);let se=s;y&&(y=y.toLowerCase(),se=[],s.forEach(K=>{const G=[];K.widgets.forEach(Z=>{(Z.module&&Z.module.toLowerCase().indexOf(y)!==-1||Z.title&&Z.title.toLowerCase().indexOf(y)!==-1||Z.label&&Z.label.toLowerCase().indexOf(y)!==-1)&&G.push(Z)}),G.length>0&&se.push({label:K.label+" ("+G.length+")",widgets:G})})),ge(()=>{d.value=se.sort((K,G)=>(K=K.label?K.label.toLowerCase():"",G=G.label?G.label.toLowerCase():"",K===G?0:K>G?1:-1))})},h=F(null);let T=!1;const U=y=>{j.dev("DEBUG","WidgetPopup","onChange",y),g.value[y.id]=y.value},J=y=>{y&&T===!0&&w({id:h.value}),T=!1,h.value=null},X=()=>{g.value=null,v("onClose")},o=()=>{v("onSave",g.value),X()},c=F(),w=y=>{g.value.items.push(y.id),c.value.hidePopup()};return{ScaleExceptions:Ce,AlignmentExceptions:$e,alignmentHorizontal:k,alignmentVertical:B,inputValueAlignmentHorizontal:p,inputValueAlignmentVertical:f,inputScaleToFitContents:n,inputValueAllowFullscreen:i,onChange:U,onClose:J,onCancel:X,onSave:o,onFilter:E,itemList:I,widgetListFiltered:d,selectedWidgetId:h,container:g,addWidgetElement:c,assignWidget:w,addWidget:()=>{T=!0,h.value=ie()},editWidget:y=>{h.value=y},deleteWidget:y=>{confirm(m.t("Really delete item?"))&&g.value.items.splice(g.value.items.indexOf(y),1)}}}}),qe={class:"text-h6"},He={class:"text-h7 primary q-ma-sm"},Fe={class:"row"},Ue={class:"col"},Ge={class:"col-1",style:{"text-align":"center","line-height":"56px"}},Ve={class:"col-3",style:{"text-align":"center","line-height":"56px"}},Me={key:0},Re={class:"row items-center"},Ne={class:"text-h7 primary q-ma-sm",style:{"margin-top":"16px"}},Je={class:"row q-pb-xs"},Ke={class:"col"},Ye={class:"col"},Xe={class:"col"},Ze={class:"col"};function xe(e,v,m,$,B,k){const s=L("widget-page"),d=L("icon"),g=L("inputs");return r(),S("div",null,[l(s,{onOnClose:e.onClose,widgetId:e.selectedWidgetId},null,8,["onOnClose","widgetId"]),l(Ie,{"model-value":e.container!==null,persistent:""},{default:t(()=>[e.container?(r(),W(Oe,{key:0,class:"column",style:{width:"1200px","max-width":"90vw"}},{default:t(()=>[l(pe,{class:"row items-center"},{default:t(()=>[a("div",qe,u(e.$t("Assign Widget to Box")),1),l(we),l(Q,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),l(V),l(pe,{class:"col defaultPadding-2 q-pt-none scroll body"},{default:t(()=>[a("div",He,u(e.$t("Widget")),1),l(V,{style:{margin:"0 0 8px 0"}}),O(a("div",Fe,[a("div",Ue,[l(Se,{onFilter:e.onFilter,ref:"addWidgetElement",label:e.$t("Assign Widget"),options:e.widgetListFiltered,"model-value":"","use-input":"","stack-label":"",style:{margin:"0 8px"}},{option:t(n=>[l(fe,{"expand-separator":"","header-class":"text-weight-bold",label:n.opt.label},{default:t(()=>[(r(!0),S(q,null,H(n.opt.widgets,f=>O((r(),W(A,{key:f.id,clickable:"",onClick:p=>e.assignWidget(f)},{default:t(()=>[l(b,null,{default:t(()=>[f.label?(r(),W(z,{key:0,class:"q-ml-md"},{default:t(()=>[C(u(f.label),1)]),_:2},1024)):(r(),W(z,{key:1,class:"q-ml-md"},{default:t(()=>[a("em",null,"("+u(e.$t("no title"))+")",1)]),_:1})),l(z,{class:"q-ml-md",caption:""},{default:t(()=>[C(u(f.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[ke]])),128))]),_:2},1032,["label"])]),_:1},8,["onFilter","label","options"])]),a("div",Ge,u(e.$t("or")),1),a("div",Ve,[l(Q,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget},null,8,["label","onClick"])])],512),[[D,e.itemList.length===0]]),l(x,null,{default:t(()=>[(r(!0),S(q,null,H(e.itemList,(n,f)=>(r(),W(A,{key:n.id+"-"+f,class:"list-group-item"},{default:t(()=>[n.icon?(r(),W(b,{key:0,avatar:""},{default:t(()=>[l(d,{color:"primary",name:n.icon},null,8,["name"])]),_:2},1024)):M("",!0),l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(n.label||n.title||e.$t("no title"))+" ",1),n._deleted?(r(),S("em",Me,"[ "+u(e.$t("deleted"))+" ]",1)):M("",!0)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C("Widget ID: "+u(n.id)+", Module: "+u(n.module),1)]),_:2},1024)]),_:2},1024),l(b,{side:""},{default:t(()=>[a("div",Re,[n._deleted!==!0?(r(),W(Q,{key:0,size:"sm",flat:"",round:"",onClick:p=>e.editWidget(n.id),icon:"mdi-pencil"},null,8,["onClick"])):M("",!0),l(Q,{size:"sm",flat:"",round:"",onClick:p=>e.deleteWidget(n.id),icon:"mdi-delete",color:"negative"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),a("div",Ne,u(e.$t("Options")),1),l(V,{style:{margin:"0 0 8px 0"}}),a("div",Je,[a("div",Ke,[l(g,{icon:"mdi-resize",onOnChange:e.onChange,id:"allowFullscreen",label:"Allow fullscreen",type:"switch",value:e.inputValueAllowFullscreen},null,8,["onOnChange","value"])]),a("div",Ye,[O(l(g,{icon:"mdi-fit-to-page",onOnChange:e.onChange,id:"scaleToFitContents",label:"Scale contents to fit widget",type:"switch",value:e.inputScaleToFitContents},null,8,["onOnChange","value"]),[[D,e.itemList[0]&&e.ScaleExceptions.includes(e.itemList[0].module)===!1]])]),a("div",Xe,[O(l(g,{icon:"mdi-arrow-split-horizontal",onOnSelect:e.onChange,id:"alignmentVertical",label:"Vertical alignment",type:"select",options:e.alignmentVertical,value:e.inputValueAlignmentVertical},null,8,["onOnSelect","options","value"]),[[D,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])]),a("div",Ze,[O(l(g,{icon:"mdi-arrow-split-vertical",onOnSelect:e.onChange,id:"alignmentHorizontal",label:"Horizontal alignment",type:"select",options:e.alignmentHorizontal,value:e.inputValueAlignmentHorizontal},null,8,["onOnSelect","options","value"]),[[D,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])])])]),_:1}),l(V),l(_e,{align:"right"},{default:t(()=>[l(Q,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),l(Q,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave},null,8,["label","onClick"])]),_:1})]),_:1})):M("",!0)]),_:1},8,["model-value"])])}var el=oe(Qe,[["render",xe]]);const ll=te({name:"WidgetSection",props:["pageId","tabId","id","label","icon","fullscreen","widgetEdges","widgetConfig","items"],components:{WidgetPopup:el},setup(e){j.dev("DEBUG","WidgetSection","setup()");const v=re(),m=ne(),$=[{id:"copy",icon:"mdi-content-copy",label:v.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:v.t("duplicate")}],B=P(()=>e.id!=="desktop"&&e.widgetConfig[e.id+"SameAs"]!=="specific-layout"),k=P(()=>[{label:v.t("wie Desktop"),value:"desktop"},{label:v.t("wie Smartphone"),value:"smartphone"},{label:v.t("eigenes Layout"),value:"specific-layout"}].filter(o=>o.value!==e.id));ce(()=>e.fullscreen,o=>{j.dev("DEBUG","WidgetSection","watch",o),o===!0&&i.value.length===0&&h()});const s=o=>{j.dev("DEBUG","WidgetSection","onChange",o),m.setWidgetConfig({pageId:e.pageId,tabId:e.tabId,key:o.id,val:o.value})},d=F({}),g=(o,c,w,_,R)=>{j.dev("DEBUG","WidgetSection","onResized",o,c,w,_,R),d.value[o]={width:(100/(12/w)).toFixed(2),height:_}},n={},f=o=>m.widgets[o]||{items:[]},p=o=>{o=o||[];const c=o.join("-");return n[c]?n[c]:(j.dev("DEBUG","WidgetSection","getWidgetsData",o),!o||o.length===0?v.t("No widgets assigned"):(n[c]=o.map(w=>{const _=f(w);_.items=_.items||[];const R=_.items.filter(le=>le.type==="divider").length;return _.module+(!_.label&&!_.title?"":" ("+(_.label||_.title)+(_.module!=="StateList"?"":", "+_.items.length+" "+v.t("items")+" "+v.t("apprx.")+" "+((_.hideTitle!==!0?56:0)+R+(_.items.length-R)*46)+"px "+v.t("in height"))+")")}).join(", "),n[c]))},i=F(ue(e.items)||[]),I=o=>{m.setWidgets({pageId:e.pageId,tabId:e.tabId,key:"widgets"+De(e.id),val:o})},E=F(),h=()=>{let o=0,c=0;for(const w of i.value){const _=w.y+w.h;_>c&&(c=_,o=w.x)}if(i.value.push({x:o,y:c,w:4,h:4,i:ie()}),E.value&&E.value[E.value.length-1]){const w=E.value[E.value.length-1].$el,{top:_,height:R}=w.getBoundingClientRect();w.parentElement.parentElement.scrollTo(0,_+R+1e3)}I(i.value)},T=o=>{const c=o.id,w=ue(i.value.find(_=>_.i===c));w.i=ie(),o.val==="copy"&&(w.items=w.items||[],w.items=w.items.map(_=>{const R=f(_),le=ie();return m.copyWidget({id:le,widget:R}),le})),i.value.push(w),I(i.value)},U=o=>{confirm(v.t("Really delete item?"))&&(i.value.splice(i.value.findIndex(w=>w.i===o),1),I(i.value))},J=F(null),X=o=>{j.dev("DEBUG","WidgetSection","saveWidgetAssignments",o),i.value.splice(i.value.findIndex(c=>c.i===J.value.i),1,{...J.value,...o}),J.value=null,I(i.value)};return We(()=>{E.value&&E.value.forEach(o=>{g(o.$props.i,o.$props.h,o.$props.w,o.$props.h*o.rowHeight+(o.$props.h-1)*o.margin[0],null)})}),{gridItemElements:E,expanded:e.id==="desktop",copyMenu:$,onChange:s,onResized:g,widgets:i,widgetSizes:d,setWidgets:I,getWidgetsData:p,selectedWidget:J,addWidget:h,copyWidget:T,deleteWidget:U,saveWidgetAssignments:X,disabled:B,options:k}}}),tl={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},nl={class:"grid-item tooltip-widget"},ol={class:"row justify-between"},il={class:"row items-center",style:{"padding-left":"8px"}},al={class:"row"},sl={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},dl={class:"grid-layout-container",style:{height:"800px","overflow-y":"scroll"}},ul={class:"row justify-between"},rl={class:"row items-center",style:{"padding-left":"8px"}},cl=C("\xA0 "),gl={key:0},pl={class:"row"},vl={class:"row q-pa-sm tooltip-widget",style:{overflow:"hidden"}};function ml(e,v,m,$,B,k){const s=L("widget-popup"),d=L("icon"),g=L("inputs"),n=L("grid-item"),f=L("grid-layout");return r(),S("div",null,[l(s,{onOnClose:v[0]||(v[0]=p=>e.selectedWidget=null),onOnSave:e.saveWidgetAssignments,widget:e.selectedWidget},null,8,["onOnSave","widget"]),l(fe,{"model-value":e.disabled!==!0?e.expanded:!1,class:"full-width paper",disable:e.disabled},{header:t(()=>[a("div",{class:"row full-width",onClick:v[2]||(v[2]=p=>e.expanded=!e.expanded)},[l(b,{avatar:""},{default:t(()=>[l(d,{name:e.icon},null,8,["name"])]),_:1}),l(b,{style:{height:"40px"}},{default:t(()=>[C(u(e.label),1)]),_:1}),e.id!=="desktop"?(r(),W(b,{key:0,side:"",class:"notDisabled"},{default:t(()=>[l(g,{onOnSelect:e.onChange,type:"select",options:e.options,dense:"",label:e.$t("Use same layout as"),id:e.id+"SameAs",onClick:v[1]||(v[1]=ee(()=>{},["prevent"])),value:e.widgetConfig[e.id+"SameAs"]||"desktop",style:{width:"150px"}},null,8,["onOnSelect","options","label","id","value"])]),_:1})):M("",!0)])]),default:t(()=>[a("div",null,[O(a("div",null,[O(a("div",tl,[l(Q,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"])],512),[[D,e.widgets.length===0]]),l(V),O(a("div",nl,[a("div",ol,[a("div",il,u(e.$t("Fullscreen")),1),a("div",al,[l(Q,{size:"sm",flat:"",round:"",icon:"mdi-pencil",onClick:v[3]||(v[3]=p=>e.selectedWidget=e.widgets[0])})])])],512),[[D,e.widgets[0]!==void 0]])],512),[[D,e.fullscreen===!0]]),O(a("div",null,[a("div",sl,[l(Q,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"]),l(g,{dense:"",type:"switch",inline:"",label:e.$t("Height of all widgets equal to page height (no scrollbars)"),id:e.id+"FitPageHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"FitPageHeight"]||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","id","onOnChange","value"]),O(l(g,{set:e.rowHeight=parseInt(e.widgetConfig[e.id+"FitPageHeight"]!==!0&&e.widgetConfig[e.id+"WidgetHeight"])||50,dense:"",type:"number",min:10,label:e.$t("Widget height")+" ("+e.$t("in pixels")+")",id:e.id+"WidgetHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"WidgetHeight"]||50,style:{margin:"auto 0 auto 16px"}},null,8,["set","label","id","onOnChange","value"]),[[D,e.widgetConfig[e.id+"FitPageHeight"]!==!0]]),l(g,{set:e.gapSize=parseInt(e.widgetConfig[e.id+"GapSize"]||5),dense:"",type:"number",min:0,label:e.$t("Widget gaps")+" ("+e.$t("in pixels")+")",id:e.id+"GapSize",onOnChange:e.onChange,value:e.widgetConfig[e.id+"GapSize"]||5,style:{margin:"auto 0 auto 16px"}},null,8,["set","label","id","onOnChange","value"])]),l(V),a("div",dl,[l(f,{onLayoutUpdated:e.setWidgets,layout:e.widgets,"onUpdate:layout":v[4]||(v[4]=p=>e.widgets=p),"row-height":e.rowHeight,margin:[e.gapSize,e.gapSize],"use-css-transforms":!0,responsive:!1,preventCollision:!1,style:{"min-height":"50px"}},{default:t(()=>[(r(!0),S(q,null,H(e.widgets,(p,i)=>(r(),W(n,{key:"grid-item-"+p.i,ref_for:!0,ref:"gridItemElements",x:p.x,y:p.y,w:p.w,h:p.h,i:p.i,class:N(["grid-item tooltip-widget",{"rounded-borders":e.widgetEdges!==!0}]),onResized:e.onResized},{default:t(()=>[l(de,{target:".tooltip-widget"},{default:t(()=>[C(u(e.getWidgetsData(p.items)),1)]),_:2},1024),a("div",ul,[a("div",rl,[a("span",{class:N("sort-"+i)},"[ "+u(i)+" ]",3),cl,l(de,{target:".sort-"+i},{default:t(()=>[C(u(e.$t("Responsive Position"))+": "+u(i),1)]),_:2},1032,["target"]),C(" "+u(e.$t("Position")+": "+p.x+"x * "+p.y+"y")+" ",1),e.widgetSizes[p.i]?(r(),S("span",gl,"\xA0- "+u(e.$t("Size")+": "+p.w+"w ("+e.widgetSizes[p.i].width+"%) * "+p.h+"h ("+e.widgetSizes[p.i].height+"px)"),1)):M("",!0)]),a("div",pl,[l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-pencil",tooltip:e.$t("edit"),onClick:ee(I=>e.selectedWidget=p,["stop"])},null,8,["tooltip","onClick"]),l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyWidget,id:p.i,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"]),l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:ee(I=>e.deleteWidget(p.i),["stop"])},null,8,["tooltip","onClick"])])]),a("div",vl,[C(u(e.getWidgetsData(p.items))+" ",1),l(de,null,{default:t(()=>[C(u(e.getWidgetsData(p.items)),1)]),_:2},1024)])]),_:2},1032,["x","y","w","h","i","class","onResized"]))),128)),a("div",{class:"grid-spacer",style:Y({bottom:-3*e.rowHeight+"px",height:3*e.rowHeight+"px"})},null,4)]),_:1},8,["onLayoutUpdated","layout","row-height","margin"])])],512),[[D,e.fullscreen!==!0]])])]),_:1},8,["model-value","disable"])])}var fl=oe(ll,[["render",ml]]);const hl=te({name:"TabSection",props:["pageId","tabId"],components:{WidgetSection:fl},setup(e){j.dev("DEBUG","TabSection","setup()");const v=ne(),m=k=>{j.dev("DEBUG","TabSection","onChange",k);let s=k.value;try{s=s&&k.json!==void 0&&s.indexOf("{")>-1&&s.indexOf("}")>-1?JSON.parse(s):s}catch(d){console.warn(k.value,d)}v.editTab({pageId:e.pageId,tabId:e.tabId,key:k.id,val:s})},$=P(()=>(v.layout.find(d=>d.id===e.pageId)||{}).tabs.find(d=>d.id===e.tabId)||{}),B=P(()=>$.value.title?typeof $.value.title=="string"?$.value.title:$.value.title.default||Object.values($.value.title)[0]:"");return{onChange:m,tab:$,tabTitle:B}}}),yl={style:{padding:"0 8px"}},bl={class:"text-h6 primary q-ma-sm"},Cl={class:"row"},$l={class:"col"},wl={class:"col"},Sl={class:"row"},kl={class:"col"},_l={class:"col"},Ol={class:"row"},Il={class:"col"},Wl={class:"col"},Dl={class:"row"},Tl={class:"col-2"},El={class:"col"},Pl={class:"text-h6 primary q-ma-sm",style:{"margin-top":"24px"}};function Ll(e,v,m,$,B,k){const s=L("inputs"),d=L("widget-section");return r(),S("div",yl,[a("div",bl,u(e.$t("Tab"))+": "+u(e.tabTitle)+" ("+u(e.$t("ID")+": "+e.tab.id)+")",1),a("div",Cl,[a("div",$l,[l(s,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Tab")+" "+e.$t("Icon"),value:e.tab.icon||"",icon:e.tab.icon},null,8,["onOnChange","label","value","icon"])]),a("div",wl,[l(s,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Tab")+" "+e.$t("Title"),value:e.tab.title||""},null,8,["onOnChange","label","value"])])]),a("div",Sl,[a("div",kl,[l(s,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.tab.iconStyle},null,8,["onOnChange","value"])]),a("div",_l,[l(s,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.tab.bodyStyle},null,8,["onOnChange","value"])])]),a("div",Ol,[a("div",Il,[l(s,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.tab.iconSelectedStyle},null,8,["onOnChange","value"])]),a("div",Wl,[l(s,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.tab.bodySelectedStyle},null,8,["onOnChange","value"])])]),a("div",Dl,[a("div",Tl,[l(s,{type:"switch",inline:"",label:e.$t("Tab")+" "+e.$t("Fullscreen"),id:"fullscreen",onOnChange:e.onChange,value:e.tab.fullscreen||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),a("div",El,[l(s,{type:"switch",inline:"",label:e.$t("Widgets edges (round or angled)"),id:"widgetEdges",onOnChange:e.onChange,value:e.tab.widgetEdges||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])])]),a("div",Pl,u(e.$t("Widgets of tab"))+": "+u(e.tabTitle),1),l(d,{pageId:e.pageId,tabId:e.tabId,id:"desktop",label:"Desktop",icon:"mdi-monitor",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsDesktop},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"]),l(d,{pageId:e.pageId,tabId:e.tabId,id:"smartphone",label:"Smartphone",icon:"mdi-cellphone",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsSmartphone},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"])])}var zl=oe(hl,[["render",Ll]]);const jl=te({name:"DrawerSection",props:["pageId"],components:{TabSection:zl},setup(e,{emit:v}){var X;j.dev("DEBUG","DrawerSection","setup()");const m=me(),$=ne(),B=P(()=>{const o=[];return $.getPagesWithoutDeletions.forEach(c=>{c.id!==e.pageId&&o.push({id:c.id,label:c.title,...c})}),o}),k=P(()=>$.layout.find(o=>o.id===e.pageId)||{}),s=P(()=>typeof k.value.title=="string"?k.value.title:k.value.title.default||Object.values(k.value.title)[0]),d=P({get(){return(k.value.tabs||[]).map(c=>(c._hasIconBinding=typeof c.icon=="object",c._hasTitleBinding=typeof c.title=="object",c))},set(o){$.setTabs({pageId:e.pageId,tabs:o})}}),g=m.getSelectedPage.id===k.value.id&&m.getSelectedTab||((X=k.value.tabs)==null?void 0:X[0])||{},n=F(g.id||null),f=F({}),p=(o,c)=>{j.dev("DEBUG","DrawerSection","setRef",o,c),f.value[".tabOptions-move-"+o.id]=c};let i=null;ce(()=>e.pageId,()=>{var o,c;j.dev("DEBUG","DrawerSection","watch",e.pageId),n.value=i||((c=(o=d.value)==null?void 0:o[0])==null?void 0:c.id)||null,i=null});const I=()=>{$.addTab({pageId:e.pageId}),n.value=d.value[d.value.length-1].id},E=(o,c=!1)=>{$.addTab({pageId:e.pageId,tabId:o,copyWidgets:c}),n.value=d.value[d.value.length-1].id},h=(o,c)=>{$.moveTab({pageId:e.pageId,tabId:o,destinationPageId:c}),n.value=o,i=o,v("onSelectPage",$.layout.find(w=>w.id===c)||{})},T=o=>{if($.deleteTab({pageId:e.pageId,tabId:o}),n.value===o){const c=d.value.find(w=>w._deleted!==!0);n.value=c?c.id:null}},U=o=>{$.restoreTab({pageId:e.pageId,tabId:o}),n.value=o},J=o=>{j.dev("DEBUG","DrawerSection","onChange",o);let c=o.value;try{c=c&&o.json!==void 0&&o.value.indexOf("{")>-1&&o.value.indexOf("}")>-1?JSON.parse(o.value):o.value}catch(w){console.warn(o.value,w)}$.editDrawerItem({itemId:e.pageId,key:o.id,val:c})};return{...he(d,o=>d.value=o,{direction:"vertical"}),onChange:J,setRef:p,pages:B,page:k,pageTitle:s,tabs:d,tabOptions:f,selectedTab:n,addTab:I,copyTab:E,moveTab:h,deleteTab:T,restoreTab:U}}}),Bl={class:"text-h6 primary q-ma-sm"},Al={class:"row"},Ql={class:"col"},ql={class:"col"},Hl={class:"row"},Fl={class:"col"},Ul={class:"col"},Gl={class:"row"},Vl={class:"col"},Ml={class:"col"},Rl={key:0},Nl={class:"text-h6 primary q-ma-sm"},Jl={class:"q-ma-sm row"},Kl={ref:"elDragDrop",style:{display:"flex"}},Yl={key:0},Xl={key:1},Zl={key:2},xl={key:3};function et(e,v,m,$,B,k){const s=L("inputs"),d=L("icon"),g=L("tab-section");return r(),S("div",{key:e.page.id},[a("div",Bl,u(e.$t("Page"))+": "+u(e.pageTitle)+" (ID: "+u(e.page.id)+")",1),a("div",Al,[a("div",Ql,[l(s,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Icon"),value:e.page.icon||"",icon:e.page.icon},null,8,["onOnChange","label","value","icon"])]),a("div",ql,[l(s,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Title"),value:e.page.title||""},null,8,["onOnChange","label","value"])])]),a("div",Hl,[a("div",Fl,[l(s,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.page.iconStyle},null,8,["onOnChange","value"])]),a("div",Ul,[l(s,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.page.bodyStyle},null,8,["onOnChange","value"])])]),a("div",Gl,[a("div",Vl,[l(s,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.page.iconSelectedStyle},null,8,["onOnChange","value"])]),a("div",Ml,[l(s,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.page.bodySelectedStyle},null,8,["onOnChange","value"])])]),!e.page.type||e.page.type==="page"?(r(),S("div",Rl,[a("div",Nl,u(e.$t("Tabs of page"))+": "+u(e.pageTitle),1),a("div",Jl,[l(Q,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Tab"),onClick:e.addTab},null,8,["label","onClick"]),l(s,{type:"switch",inline:"",label:e.$t("Do not show Tab Labels (only Icons)"),id:"hideLabels",onOnChange:e.onChange,value:e.page.hideLabels||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),l(Ee,{modelValue:e.selectedTab,"onUpdate:modelValue":v[1]||(v[1]=n=>e.selectedTab=n),"inline-label":"","outside-arrows":"","mobile-arrows":"",class:"bg-primary text-white full-width",align:"left"},{default:t(()=>[a("div",Kl,[(r(!0),S(q,null,H(e.tabs,n=>(r(),W(Te,{key:n.id,name:n.id,style:Y({backgroundColor:n.backgroundColor}),class:N({"q-px-xs":!0,rowDeleted:n._deleted===!0}),disable:n._deleted===!0},{default:t(()=>[l(d,{size:"sm",name:"mdi-drag-vertical",class:"dragndrop",color:n.color},null,8,["color"]),n._hasIconBinding?(r(),S("div",Yl,[l(ae,{flat:"",dense:""},{label:t(()=>[l(d,{size:"xs",name:n.icon.default||Object.values(n.icon)[0],class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),default:t(()=>[l(x,null,{default:t(()=>[(r(!0),S(q,null,H(n.icon,(f,p)=>(r(),W(A,{key:p},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:f,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),_:2},1024),l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(f),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(u(p),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(r(),S("div",Xl,[l(d,{size:"xs",name:n.icon,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])])),n._hasTitleBinding?(r(),S("div",Zl,[l(ae,{flat:"",dense:"",label:n.title.default||Object.values(n.title)[0]},{default:t(()=>[l(x,null,{default:t(()=>[(r(!0),S(q,null,H(n.title,(f,p)=>(r(),W(A,{key:p},{default:t(()=>[l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(f),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(u(p),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(r(),S("div",xl,[O(a("div",{class:"q-tab__label",style:Y({color:n.color})},u(n.title),5),[[D,e.page.hideLabels!==!0]])])),a("div",{class:"row items-center no-wrap",style:Y([{"margin-left":"16px"},{color:n.color}])},[l(V,{vertical:"",class:"q-ma-xs"}),O(l(s,{round:"",type:"button",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:f=>e.restoreTab(n.id)},null,8,["tooltip","onClick"]),[[D,n._deleted===!0]]),O(l(Q,{class:N("tabOptions-"+n.id),dense:"",flat:"",round:"",color:"white",icon:"mdi-dots-vertical",onClick:v[0]||(v[0]=ee(()=>{},["stop"]))},null,8,["class"]),[[D,n._deleted!==!0]]),l(ve,{target:".tabOptions-"+n.id,anchor:"bottom left",self:"top left","auto-close":""},{default:t(()=>[O(l(A,{clickable:"",onClick:f=>e.copyTab(n.id,!0)},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:"mdi-content-copy"})]),_:1}),l(b,null,{default:t(()=>[C(u(e.$t("copy")),1)]),_:1})]),_:2},1032,["onClick"]),[[D,n._deleted!==!0]]),O(l(A,{clickable:"",onClick:f=>e.copyTab(n.id)},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:"mdi-content-duplicate"})]),_:1}),l(b,null,{default:t(()=>[C(u(e.$t("duplicate")),1)]),_:1})]),_:2},1032,["onClick"]),[[D,n._deleted!==!0]]),O(l(A,{class:N("tabOptions-move-"+n.id),onMouseover:f=>e.tabOptions[".tabOptions-move-"+n.id].show(),clickable:""},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:"mdi-folder-move-outline"})]),_:1}),l(b,null,{default:t(()=>[C(u(e.$t("move")),1)]),_:1}),l(b,{side:""},{default:t(()=>[l(d,{name:"mdi-chevron-right"})]),_:1}),l(ve,{ref_for:!0,ref:f=>e.setRef(n,f),anchor:"top end",self:"top start","auto-close":""},{default:t(()=>[l(x,null,{default:t(()=>[(r(!0),S(q,null,H(e.pages,f=>(r(),W(A,{key:f.id,clickable:"",onClick:p=>e.moveTab(n.id,f.id)},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:f.icon},null,8,["name"])]),_:2},1024),l(b,null,{default:t(()=>[C(u(f.title),1)]),_:2},1024),l(b,{side:""})]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1536)]),_:2},1032,["class","onMouseover"]),[[D,n._deleted!==!0&&e.pages.length>0]]),l(A,{clickable:"",style:{color:"#fff",background:"var(--q-negative)"},onClick:f=>e.deleteTab(n.id)},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:"mdi-delete"})]),_:1}),l(b,null,{default:t(()=>[C(u(e.$t("delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["target"])],4)]),_:2},1032,["name","style","class","disable"]))),128))],512)]),_:1},8,["modelValue"]),l(Le,{modelValue:e.selectedTab,"onUpdate:modelValue":v[2]||(v[2]=n=>e.selectedTab=n),animated:"","keep-alive":"",class:"border"},{default:t(()=>[(r(!0),S(q,null,H(e.tabs,n=>(r(),W(Pe,{key:n.id,name:n.id,style:{padding:"16px 0"},class:"body"},{default:t(()=>[l(g,{pageId:e.page.id,tabId:n.id},null,8,["pageId","tabId"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])):M("",!0)])}var lt=oe(jl,[["render",et]]);const tt=te({name:"LayoutsPage",components:{DrawerSection:lt,JsonEditor:Be},setup(){j.dev("DEBUG","LayoutsPage","setup()");const e=re(),v=me(),m=ne(),$=[{id:"copy",icon:"mdi-content-copy",label:e.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:e.t("duplicate")}],B=h=>!h._error&&m.set({[h.id]:JSON.parse(h.value)}),k=h=>m.set({["settings."+h.id]:h.value}),s=P({get(){return(m.getLayout||[]).map(T=>(T._hasIconBinding=typeof T.icon=="object",T._hasTitleBinding=typeof T.title=="object",T))},set(h){m.setLayout(h)}}),d=F(m.selectedPage?m.selectedPage:m.getLayout.find(h=>h.type==="page"&&h._deleted!==!0)),g=h=>{d.value=h},n=()=>m.addDrawerItem({type:"divider"}),f=()=>m.addDrawerItem({type:"header",title:e.t("New Header")}),p=()=>{m.addDrawerItem({type:"page",icon:"mdi-file",title:e.t("New Page"),tabs:[]}),d.value=s.value[s.value.length-1],m.addTab({pageId:d.value.id})},i=h=>{const T=h.id;m.copyDrawerItem({itemId:T,copyWidgets:h.val==="copy"});const U=s.value[s.value.length-1];U.type==="page"&&(d.value=U)},I=h=>{m.deleteDrawerItem({itemId:h}),d.value.id===h&&(d.value=s.value.find(T=>T.type==="page"&&T._deleted!==!0))},E=h=>{m.restoreDrawerItem({itemId:h});const T=s.value.find(U=>U.id===h);T.type==="page"&&(d.value=T)};return{...he(s,h=>s.value=h),copyMenu:$,json:P(()=>m.layout),settings:P(()=>m.settings),proWarning:P(()=>!ze.isPro()&&s.value.filter(h=>h.type==="page").length>1),pageHeight:P(()=>v.pageHeight),pagesWithoutDeletionsCount:P(()=>m.getPagesWithoutDeletions.length),onChangeSettings:k,onJsonEditor:B,onSelectPage:g,selectedPage:d,pages:s,addDivider:n,addHeader:f,addPage:p,copyItem:i,deleteItem:I,restoreItem:E}}}),nt={class:"full-height LayoutsPage"},ot={class:"row no-wrap"},it={class:"row",style:{"margin-bottom":"54px"}},at={class:"col-3"},st={class:"text-h6 primary q-ma-sm"},dt={key:0},ut={key:1},rt={key:1},ct={key:2},gt={class:"row items-center"},pt={class:"col-9"};function vt(e,v,m,$,B,k){const s=L("alert"),d=L("icon"),g=L("inputs"),n=L("paper"),f=L("drawer-section"),p=L("json-editor");return r(),S("div",nt,[a("div",ot,[l(be,{class:"paper",style:{"min-height":"56px"}},{default:t(()=>[l(ye,{shrink:""},{default:t(()=>[C(u(e.$t("Layout")),1)]),_:1})]),_:1})]),O(a("div",it,[a("div",at,[l(n,{class:"q-pa-sm"},{default:t(()=>[a("div",st,u(e.$t("Drawer")+" / "+e.$t("Pages")),1),l(je,null,{default:t(()=>[l(Q,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Page"),onClick:e.addPage},null,8,["label","onClick"]),l(Q,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Header"),onClick:e.addHeader},null,8,["label","onClick"]),l(Q,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Divider"),onClick:e.addDivider},null,8,["label","onClick"])]),_:1}),O(l(s,{style:{margin:"16px 0 0 0"}},{default:t(()=>[C(u(e.$t("Only a single page is allowed without Pro. A single page may hold infinite tabs though."))+".",1)]),_:1},512),[[D,e.proWarning]]),l(V,{style:{margin:"16px 0"}}),l(x,{ref:"elDragDrop"},{default:t(()=>[(r(!0),S(q,null,H(e.pages,i=>(r(),W(A,{key:i.id,clickable:!i.type||i.type==="page"||i.type==="header",onClick:I=>e.onSelectPage(i),class:N({rowDeleted:i._deleted===!0,selected:e.selectedPage.id===i.id}),disable:i._deleted===!0},{default:t(()=>[l(b,{avatar:"",center:""},{default:t(()=>[l(d,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),!i.type||i.type==="page"?(r(),W(b,{key:0,avatar:"",center:"",style:Y({backgroundColor:i.backgroundColor})},{default:t(()=>[i._hasIconBinding?(r(),S("div",dt,[l(ae,{flat:"",dense:""},{label:t(()=>[l(d,{name:i.icon.default||Object.values(i.icon)[0],color:e.selectedPage.id===i.id?"white":"primary",styles:{color:i.iconColor}},null,8,["name","color","styles"])]),default:t(()=>[l(x,null,{default:t(()=>[(r(!0),S(q,null,H(i.icon,(I,E)=>(r(),W(A,{key:E},{default:t(()=>[l(b,{avatar:""},{default:t(()=>[l(d,{size:"xs",name:I,class:"pageIcon q-mr-xs",color:i.iconColor||i.color},null,8,["name","color"])]),_:2},1024),l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(I),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(u(E),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(r(),S("div",ut,[l(d,{name:i.icon,color:e.selectedPage.id===i.id?"white":"primary",styles:{color:i.iconColor}},null,8,["name","color","styles"])]))]),_:2},1032,["style"])):M("",!0),l(b,{class:N({itemDeleted:i._deleted===!0}),style:Y({backgroundColor:i.backgroundColor,color:i.color})},{default:t(()=>[i.type==="divider"?(r(),W(V,{key:0})):M("",!0),i._hasTitleBinding?(r(),S("div",rt,[l(ae,{flat:"",dense:"",label:i.title.default||Object.values(i.title)[0]},{default:t(()=>[l(x,null,{default:t(()=>[(r(!0),S(q,null,H(i.title,(I,E)=>(r(),W(A,{key:E},{default:t(()=>[l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(I),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(u(E),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(r(),S("div",ct,[l(z,{class:N({header:i.type==="header"}),style:Y({color:i.color})},{default:t(()=>[C(u(i.title),1)]),_:2},1032,["class","style"])]))]),_:2},1032,["class","style"]),l(b,{side:"",class:N({rowDeleted:i._deleted===!0,selected:e.selectedPage.id===i.id})},{default:t(()=>[a("div",gt,[i.type==="page"?O((r(),W(g,{key:0,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyItem,id:i.id,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"])),[[D,i.type!=="divider"&&i._deleted!==!0]]):O((r(),W(g,{key:1,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:ee(I=>e.copyItem({id:i.id}),["stop"])},null,8,["tooltip","onClick"])),[[D,i.type!=="divider"&&i._deleted!==!0]]),O(l(g,{type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:ee(I=>e.deleteItem(i.id),["stop"])},null,8,["tooltip","onClick"]),[[D,(i.type&&i.type!=="page"||(!i.type||i.type==="page")&&e.pagesWithoutDeletionsCount>1)&&i._deleted!==!0]]),O(l(g,{type:"button",round:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:ee(I=>e.restoreItem(i.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[D,i._deleted===!0]])])]),_:2},1032,["class"])]),_:2},1032,["clickable","onClick","class","disable"]))),128)),l(V,{class:"q-my-sm"}),l(A,null,{default:t(()=>[l(b,{avatar:"",center:""}),l(b,{avatar:"",center:""},{default:t(()=>[l(d,{name:"mdi-cog",color:"primary"})]),_:1}),l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(e.$t("Configuration"))+" & "+u(e.$t("Help")),1)]),_:1}),l(z,{caption:""},{default:t(()=>[C(u(e.$t("show in sidebar")),1)]),_:1})]),_:1}),l(b,{side:""},{default:t(()=>[l(g,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowSettings",value:e.settings.drawerShowSettings},null,8,["onOnChange","value"])]),_:1})]),_:1}),l(A,null,{default:t(()=>[l(b,{avatar:"",center:""}),l(b,{avatar:"",center:""},{default:t(()=>[l(d,{name:"mdi-menu",color:"primary"})]),_:1}),l(b,null,{default:t(()=>[l(z,null,{default:t(()=>[C(u(e.$t("Drawer")),1)]),_:1}),l(z,{caption:""},{default:t(()=>[C(u(e.$t("show button")),1)]),_:1})]),_:1}),l(b,{side:""},{default:t(()=>[l(g,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowMenuButton",value:e.settings.drawerShowMenuButton},null,8,["onOnChange","value"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),a("div",pt,[l(n,{class:"q-pa-sm"},{default:t(()=>[e.selectedPage&&e.selectedPage.id?(r(),W(f,{key:0,onOnSelectPage:e.onSelectPage,pageId:e.selectedPage.id},null,8,["onOnSelectPage","pageId"])):M("",!0)]),_:1})])],512),[[D,!e.settings.configExpertMode]]),O(l(n,{style:Y({height:e.pageHeight-66-16+"px"})},{default:t(()=>[l(p,{id:"layout",json:e.json,onOnChange:e.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[D,e.settings.configExpertMode]])])}var Ot=oe(tt,[["render",vt]]);export{Ot as default};