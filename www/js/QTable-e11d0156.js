import{bx as ee,ac as r,ck as N,cH as rt,bu as pe,a9 as te,Q as b,k as Q,cY as it,aY as M,cZ as xe,an as st,as as ut,ao as ct,c_ as be,c$ as Te,d0 as dt,al as Fe,d1 as Le,cW as vt,cX as ft,d2 as gt,cO as ge,bz as V,bP as bt,bB as Z,bU as mt,d3 as ht}from"./index-ee3047f4.js";import{Q as St,g as yt}from"./QVirtualScroll-4ac4f8c3.js";var wt=ee({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:o}){const v=te(),{proxy:{$q:i}}=v,g=s=>{o("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},N(a.default));let s,u;const c=v.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const l=s.align==="right"?"unshift":"push";u=rt(a.default,[]),u[l](r(pe,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else u=N(a.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:l=>{s.sortable===!0&&e.props.sort(s),g(l)}};return r("th",S,u)}}}),$t=ee({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:a}){const o=b(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>r("tr",{class:o.value},N(a.default))}}),Ut=ee({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const o=te(),v=b(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:v.value},N(a.default));const i=o.vnode.key,g=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(g===void 0)return;const{row:s}=e.props;return r("td",{class:v.value+g.__tdClass(s),style:g.__tdStyle(s)},N(a.default))}}});let A=0;const Pt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},_t=["update:fullscreen","fullscreen"];function Ct(){const e=te(),{props:a,emit:o,proxy:v}=e;let i,g,s;const u=Q(!1);it(e)===!0&&M(()=>v.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),M(()=>a.fullscreen,h=>{u.value!==h&&c()}),M(u,h=>{o("update:fullscreen",h),o("fullscreen",h)});function c(){u.value===!0?l():S()}function S(){u.value!==!0&&(u.value=!0,s=v.$el.parentNode,s.replaceChild(g,v.$el),document.body.appendChild(v.$el),A++,A===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:l},xe.add(i))}function l(){u.value===!0&&(i!==void 0&&(xe.remove(i),i=void 0),s.replaceChild(v.$el,g),u.value=!1,A=Math.max(0,A-1),A===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return st(()=>{g=document.createElement("span")}),ut(()=>{a.fullscreen===!0&&S()}),ct(l),Object.assign(v,{toggleFullscreen:c,setFullscreen:S,exitFullscreen:l}),{inFullscreen:u,toggleFullscreen:c}}function qt(e,a){return new Date(e)-new Date(a)}const kt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Rt(e,a,o,v){const i=b(()=>{const{sortBy:u}=a.value;return u&&o.value.find(c=>c.name===u)||null}),g=b(()=>e.sortMethod!==void 0?e.sortMethod:(u,c,S)=>{const l=o.value.find(q=>q.name===c);if(l===void 0||l.field===void 0)return u;const h=S===!0?-1:1,P=typeof l.field=="function"?q=>l.field(q):q=>q[l.field];return u.sort((q,k)=>{let w=P(q),y=P(k);return w==null?-1*h:y==null?1*h:l.sort!==void 0?l.sort(w,y,q,k)*h:be(w)===!0&&be(y)===!0?(w-y)*h:Te(w)===!0&&Te(y)===!0?qt(w,y)*h:typeof w=="boolean"&&typeof y=="boolean"?(w-y)*h:([w,y]=[w,y].map(B=>(B+"").toLocaleString().toLowerCase()),w<y?-1*h:w===y?0:h)})});function s(u){let c=e.columnSortOrder;if(dt(u)===!0)u.sortOrder&&(c=u.sortOrder),u=u.name;else{const h=o.value.find(P=>P.name===u);h!==void 0&&h.sortOrder&&(c=h.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==u?(S=u,l=c==="da"):e.binaryStateSort===!0?l=!l:l===!0?c==="ad"?S=null:l=!1:c==="ad"?l=!0:S=null,v({sortBy:S,descending:l,page:1})}return{columnToSort:i,computedSortMethod:g,sort:s}}const xt={filter:[String,Object],filterMethod:Function};function Tt(e,a){const o=b(()=>e.filterMethod!==void 0?e.filterMethod:(v,i,g,s)=>{const u=i?i.toLowerCase():"";return v.filter(c=>g.some(S=>{const l=s(S,c)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Fe(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:o}}function Bt(e,a){for(const o in a)if(a[o]!==e[o])return!1;return!0}function Be(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Ot={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function pt(e,a){const{props:o,emit:v}=e,i=Q(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:o.rowsPerPageOptions.length>0?o.rowsPerPageOptions[0]:5},o.pagination)),g=b(()=>{const l=o["onUpdate:pagination"]!==void 0?{...i.value,...o.pagination}:i.value;return Be(l)}),s=b(()=>g.value.rowsNumber!==void 0);function u(l){c({pagination:l,filter:o.filter})}function c(l={}){Fe(()=>{v("request",{pagination:l.pagination||g.value,filter:l.filter||o.filter,getCellValue:a})})}function S(l,h){const P=Be({...g.value,...l});if(Bt(g.value,P)===!0){s.value===!0&&h===!0&&u(P);return}if(s.value===!0){u(P);return}o.pagination!==void 0&&o["onUpdate:pagination"]!==void 0?v("update:pagination",P):i.value=P}return{innerPagination:i,computedPagination:g,isServerSide:s,requestServerInteraction:c,setPagination:S}}function Ft(e,a,o,v,i,g){const{props:s,emit:u,proxy:{$q:c}}=e,S=b(()=>v.value===!0?o.value.rowsNumber||0:g.value),l=b(()=>{const{page:R,rowsPerPage:x}=o.value;return(R-1)*x}),h=b(()=>{const{page:R,rowsPerPage:x}=o.value;return R*x}),P=b(()=>o.value.page===1),q=b(()=>o.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/o.value.rowsPerPage))),k=b(()=>h.value===0?!0:o.value.page>=q.value),w=b(()=>(s.rowsPerPageOptions.includes(a.value.rowsPerPage)?s.rowsPerPageOptions:[a.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(x=>({label:x===0?c.lang.table.allRows:""+x,value:x})));M(q,(R,x)=>{if(R===x)return;const $=o.value.page;R&&!$?i({page:1}):R<$&&i({page:R})});function y(){i({page:1})}function B(){const{page:R}=o.value;R>1&&i({page:R-1})}function H(){const{page:R,rowsPerPage:x}=o.value;h.value>0&&R*x<S.value&&i({page:R+1})}function O(){i({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...o.value}),{firstRowIndex:l,lastRowIndex:h,isFirstPage:P,isLastPage:k,pagesNumber:q,computedRowsPerPageOptions:w,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:H,lastPage:O}}const Lt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Mt=["update:selected","selection"];function jt(e,a,o,v){const i=b(()=>{const k={};return e.selected.map(v.value).forEach(w=>{k[w]=!0}),k}),g=b(()=>e.selection!=="none"),s=b(()=>e.selection==="single"),u=b(()=>e.selection==="multiple"),c=b(()=>o.value.length>0&&o.value.every(k=>i.value[v.value(k)]===!0)),S=b(()=>c.value!==!0&&o.value.some(k=>i.value[v.value(k)]===!0)),l=b(()=>e.selected.length);function h(k){return i.value[k]===!0}function P(){a("update:selected",[])}function q(k,w,y,B){a("selection",{rows:w,added:y,keys:k,evt:B});const H=s.value===!0?y===!0?w:[]:y===!0?e.selected.concat(w):e.selected.filter(O=>k.includes(v.value(O))===!1);a("update:selected",H)}return{hasSelectionMode:g,singleSelection:s,multipleSelection:u,allRowsSelected:c,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:h,clearSelection:P,updateSelection:q}}function Oe(e){return Array.isArray(e)?e.slice():[]}const Dt={expanded:Array},Et=["update:expanded"];function Ht(e,a){const o=Q(Oe(e.expanded));M(()=>e.expanded,s=>{o.value=Oe(s)});function v(s){return o.value.includes(s)}function i(s){e.expanded!==void 0?a("update:expanded",s):o.value=s}function g(s,u){const c=o.value.slice(),S=c.indexOf(s);u===!0?S===-1&&(c.push(s),i(c)):S!==-1&&(c.splice(S,1),i(c))}return{isRowExpanded:v,setExpanded:i,updateExpanded:g}}const Vt={visibleColumns:Array};function At(e,a,o){const v=b(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(c=>({name:c,label:c.toUpperCase(),field:c,align:be(u[c])?"right":"left",sortable:!0})):[]}),i=b(()=>{const{sortBy:u,descending:c}=a.value;return(e.visibleColumns!==void 0?v.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):v.value).map(l=>{const h=l.align||"right",P=`text-${h}`;return{...l,align:h,__iconClass:`q-table__sort-icon q-table__sort-icon--${h}`,__thClass:P+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===u?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>P+" "+l.classes:q=>P+" "+l.classes(q):()=>P}})}),g=b(()=>{const u={};return i.value.forEach(c=>{u[c.name]=c}),u}),s=b(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(o.value===!0?1:0));return{colList:v,computedCols:i,computedColsMap:g,computedColspan:s}}const J="q-table__bottom row items-center",Me={};Le.forEach(e=>{Me[e]={}});var It=ee({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Me,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...vt,...Pt,...Vt,...xt,...Ot,...Dt,...Lt,...kt},emits:["request","virtual-scroll",..._t,...Et,...Mt],setup(e,{slots:a,emit:o}){const v=te(),{proxy:{$q:i}}=v,g=ft(e,i),{inFullscreen:s,toggleFullscreen:u}=Ct(),c=b(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=Q(null),l=Q(null),h=b(()=>e.grid!==!0&&e.virtualScroll===!0),P=b(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=b(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":P.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),k=b(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{h.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:w,computedPagination:y,isServerSide:B,requestServerInteraction:H,setPagination:O}=pt(v,D),{computedFilterMethod:R}=Tt(e,O),{isRowExpanded:x,setExpanded:$,updateExpanded:je}=Ht(e,o),le=b(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:n,descending:d}=y.value;return e.filter&&(t=R.value(t,e.filter,p.value,D)),Ae.value!==null&&(t=Ne.value(e.rows===t?t.slice():t,n,d)),t}),me=b(()=>le.value.length),L=b(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:n}=y.value;return n!==0&&(I.value===0&&e.rows!==t?t.length>z.value&&(t=t.slice(0,z.value)):t=t.slice(I.value,z.value)),t}),{hasSelectionMode:j,singleSelection:De,multipleSelection:he,allRowsSelected:Ee,someRowsSelected:Se,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:He,updateSelection:U}=jt(e,o,L,c),{colList:Ve,computedCols:p,computedColsMap:ye,computedColspan:we}=At(e,y,j),{columnToSort:Ae,computedSortMethod:Ne,sort:oe}=Rt(e,y,Ve,O),{firstRowIndex:I,lastRowIndex:z,isFirstPage:re,isLastPage:ie,pagesNumber:W,computedRowsPerPageOptions:Qe,computedRowsNumber:K,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Ft(v,w,y,B,O,me),$e=b(()=>L.value.length===0),Ue=b(()=>{const t={};return Le.forEach(n=>{t[n]=e[n]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ie(){h.value===!0&&l.value.reset()}function ze(){if(e.grid===!0)return nt();const t=e.hideHeader!==!0?ke:null;if(h.value===!0){const d=a["top-row"],f=a["bottom-row"],m={default:C=>_e(C.item,a.body,C.index)};if(d!==void 0){const C=r("tbody",d({cols:p.value}));m.before=t===null?()=>C:()=>[t()].concat(C)}else t!==null&&(m.before=t);return f!==void 0&&(m.after=()=>r("tbody",f({cols:p.value}))),r(St,{ref:l,class:e.tableClass,style:e.tableStyle,...Ue.value,scrollTarget:e.virtualScrollTarget,items:L.value,type:"__qtable",tableColspan:we.value,onVirtualScroll:Ke},m)}const n=[Ge()];return t!==null&&n.unshift(t()),yt({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},n)}function We(t,n){if(l.value!==null){l.value.scrollTo(t,n);return}t=parseInt(t,10);const d=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(d!==null){const f=S.value.querySelector(".q-table__middle.scroll"),m=d.offsetTop-e.virtualScrollStickySizeStart,C=m<f.scrollTop?"decrease":"increase";f.scrollTop=m,o("virtual-scroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:C})}}function Ke(t){o("virtual-scroll",t)}function Pe(){return[r(ht,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function _e(t,n,d){const f=c.value(t),m=ne(f);if(n!==void 0)return n(Ce({key:f,row:t,pageIndex:d,__trClass:m?"selected":""}));const C=a["body-cell"],_=p.value.map(T=>{const Y=a[`body-cell-${T.name}`],X=Y!==void 0?Y:C;return X!==void 0?X(Ye({key:f,row:t,pageIndex:d,col:T})):r("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},D(T,t))});if(j.value===!0){const T=a["body-selection"],Y=T!==void 0?T(Xe({key:f,row:t,pageIndex:d})):[r(ge,{modelValue:m,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(X,ot)=>{U([f],[t],X,ot)}})];_.unshift(r("td",{class:"q-table--col-auto-width"},Y))}const F={key:f,class:{selected:m}};return e.onRowClick!==void 0&&(F.class["cursor-pointer"]=!0,F.onClick=T=>{o("RowClick",T,t,d)}),e.onRowDblclick!==void 0&&(F.class["cursor-pointer"]=!0,F.onDblclick=T=>{o("RowDblclick",T,t,d)}),e.onRowContextmenu!==void 0&&(F.class["cursor-pointer"]=!0,F.onContextmenu=T=>{o("RowContextmenu",T,t,d)}),r("tr",F,_)}function Ge(){const t=a.body,n=a["top-row"],d=a["bottom-row"];let f=L.value.map((m,C)=>_e(m,t,C));return n!==void 0&&(f=n({cols:p.value}).concat(f)),d!==void 0&&(f=f.concat(d({cols:p.value}))),r("tbody",f)}function Ce(t){return ve(t),t.cols=t.cols.map(n=>V({...n},"value",()=>D(n,t.row))),t}function Ye(t){return ve(t),V(t,"value",()=>D(t.col,t.row)),t}function Xe(t){return ve(t),t}function ve(t){Object.assign(t,{cols:p.value,colsMap:ye.value,sort:oe,rowIndex:I.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),j.value===!0&&V(t,"selected",()=>ne(t.key),(n,d)=>{U([t.key],[t.row],n,d)}),V(t,"expand",()=>x(t.key),n=>{je(t.key,n)})}function D(t,n){const d=typeof t.field=="function"?t.field(n):n[t.field];return t.format!==void 0?t.format(d,n):d}const E=b(()=>({pagination:y.value,pagesNumber:W.value,isFirstPage:re.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:s.value,toggleFullscreen:u}));function Ze(){const t=a.top,n=a["top-left"],d=a["top-right"],f=a["top-selection"],m=j.value===!0&&f!==void 0&&ae.value>0,C="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:C},[t(E.value)]);let _;if(m===!0?_=f(E.value).slice():(_=[],n!==void 0?_.push(r("div",{class:"q-table-control"},[n(E.value)])):e.title&&_.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),d!==void 0&&(_.push(r("div",{class:"q-table__separator col"})),_.push(r("div",{class:"q-table__control"},[d(E.value)]))),_.length!==0)return r("div",{class:C},_)}const qe=b(()=>Se.value===!0?null:Ee.value);function ke(){const t=Je();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:we.value},Pe())])),r("thead",t)}function Je(){const t=a.header,n=a["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const d=p.value.map(f=>{const m=a[`header-cell-${f.name}`],C=m!==void 0?m:n,_=fe({col:f});return C!==void 0?C(_):r(wt,{key:f.name,props:_},()=>f.label)});if(De.value===!0&&e.grid!==!0)d.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const f=a["header-selection"],m=f!==void 0?f(fe({})):[r(ge,{color:e.color,modelValue:qe.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Re})];d.unshift(r("th",{class:"q-table--col-auto-width"},m))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},d)]}function fe(t){return Object.assign(t,{cols:p.value,sort:oe,colsMap:ye.value,color:e.color,dark:g.value,dense:e.dense}),he.value===!0&&V(t,"selected",()=>qe.value,Re),t}function Re(t){Se.value===!0&&(t=!1),U(L.value.map(c.value),L.value,t)}const G=b(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function et(){if(e.hideBottom===!0)return;if($e.value===!0){if(e.hideNoData===!0)return;const d=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=a["no-data"],m=f!==void 0?[f({message:d,icon:i.iconSet.table.warning,filter:e.filter})]:[r(pe,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),d];return r("div",{class:J+" q-table__bottom--nodata"},m)}const t=a.bottom;if(t!==void 0)return r("div",{class:J},[t(E.value)]);const n=e.hideSelectedBanner!==!0&&j.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:J+" justify-end"},lt(n));if(n.length>0)return r("div",{class:J},n)}function tt(t){O({page:1,rowsPerPage:t.value})}function lt(t){let n;const{rowsPerPage:d}=y.value,f=e.paginationLabel||i.lang.table.pagination,m=a.pagination,C=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),C===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r(bt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:d,options:Qe.value,displayValue:d===0?i.lang.table.allRows:d,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":tt})])),m!==void 0)n=m(E.value);else if(n=[r("span",d!==0?{class:"q-table__bottom-item"}:{},[d?f(I.value+1,Math.min(z.value,K.value),K.value):f(1,me.value,K.value)])],d!==0&&W.value>1){const _={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(_.size="sm"),W.value>2&&n.push(r(Z,{key:"pgFirst",..._,icon:G.value[0],disable:re.value,onClick:se})),n.push(r(Z,{key:"pgPrev",..._,icon:G.value[1],disable:re.value,onClick:ue}),r(Z,{key:"pgNext",..._,icon:G.value[2],disable:ie.value,onClick:ce})),W.value>2&&n.push(r(Z,{key:"pgLast",..._,icon:G.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},n)),t}function at(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[ke()])]:e.loading===!0&&a.loading===void 0?Pe():void 0;return r("div",{class:"q-table__middle"},t)}function nt(){const t=a.item!==void 0?a.item:n=>{const d=n.cols.map(m=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[m.label]),r("div",{class:"q-table__grid-item-value"},[m.value])]));if(j.value===!0){const m=a["body-selection"],C=m!==void 0?m(n):[r(ge,{modelValue:n.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(_,F)=>{U([n.key],[n.row],_,F)}})];d.unshift(r("div",{class:"q-table__grid-item-row"},C),r(mt,{dark:g.value}))}const f={class:["q-table__grid-item-card"+P.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=m=>{o("RowClick",m,n.row,n.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=m=>{o("RowDblclick",m,n.row,n.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(n.selected===!0?" q-table__grid-item--selected":"")},[r("div",f,d)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},L.value.map((n,d)=>t(Ce({key:c.value(n),row:n,pageIndex:d}))))}return Object.assign(v.proxy,{requestServerInteraction:H,setPagination:O,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:He,isRowExpanded:x,setExpanded:$,sort:oe,resetVirtualScroll:Ie,scrollTo:We,getCellValue:D}),gt(v.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>L.value,computedRowsNumber:()=>K.value}),()=>{const t=[Ze()],n={ref:S,class:k.value};return e.grid===!0?t.push(at()):Object.assign(n,{class:[n.class,e.cardClass],style:e.cardStyle}),t.push(ze(),et()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",n,t)}}});export{$t as Q,wt as a,Ut as b,It as c};