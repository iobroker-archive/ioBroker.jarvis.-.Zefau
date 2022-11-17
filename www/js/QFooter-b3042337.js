import{bx as p,cw as T,cx as _,cy as S,cz as A,cA as D,Q as i,aY as v,af as y,cB as r,cC as $,cD as P,ac as m,ck as R,a9 as x,aA as O,k as b,cE as E,ao as I,cF as K,cG as M}from"./index-962b79b3.js";var G=p({name:"QRouteTab",props:{...T,..._},emits:S,setup(o,{slots:d,emit:u}){const t=A({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:n}=D(o,d,u,{exact:i(()=>o.exact),...t});return v(()=>`${o.name} | ${o.exact} | ${(t.resolvedLink.value||{}).href}`,()=>{n.verifyRouteModel()}),()=>a(t.linkTag.value,t.linkAttrs.value)}}),N=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:d}){const{proxy:{$q:u}}=x(),t=y($,r);if(t===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(y(P,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const n=i(()=>{const f=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof o.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:u.screen.height;return o.styleFn(f,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-f+"px":u.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":u.screen.height-f+"px"}}),l=i(()=>`q-page${o.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:l.value,style:n.value},R(d.default))}}),U=p({name:"QPageContainer",setup(o,{slots:d}){const{proxy:{$q:u}}=x(),t=y($,r);if(t===r)return console.error("QPageContainer needs to be child of QLayout"),r;O(P,!0);const a=i(()=>{const n={};return t.header.space===!0&&(n.paddingTop=`${t.header.size}px`),t.right.space===!0&&(n[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(n.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(n[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),n});return()=>m("div",{class:"q-page-container",style:a.value},R(d.default))}}),Y=p({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(o,{slots:d,emit:u}){const{proxy:{$q:t}}=x(),a=y($,r);if(a===r)return console.error("QFooter needs to be child of QLayout"),r;const n=b(parseInt(o.heightHint,10)),l=b(!0),f=b(E.value===!0||a.isContainer.value===!0?0:window.innerHeight),h=i(()=>o.reveal===!0||a.view.value.indexOf("F")>-1||t.platform.is.ios&&a.isContainer.value===!0),Q=i(()=>a.isContainer.value===!0?a.containerHeight.value:f.value),C=i(()=>{if(o.modelValue!==!0)return 0;if(h.value===!0)return l.value===!0?n.value:0;const e=a.scroll.value.position+Q.value+n.value-a.height.value;return e>0?e:0}),z=i(()=>o.modelValue!==!0||h.value===!0&&l.value!==!0),q=i(()=>o.modelValue===!0&&z.value===!0&&o.reveal===!0),w=i(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(o.bordered===!0?" q-footer--bordered":"")+(z.value===!0?" q-footer--hidden":"")+(o.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),L=i(()=>{const e=a.rows.value.bottom,s={};return e[0]==="l"&&a.left.space===!0&&(s[t.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(s[t.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),s});function c(e,s){a.update("footer",e,s)}function g(e,s){e.value!==s&&(e.value=s)}function H({height:e}){g(n,e),c("size",e)}function V(){if(o.reveal!==!0)return;const{direction:e,position:s,inflectionPoint:B}=a.scroll.value;g(l,e==="up"||s-B<100||a.height.value-Q.value-s-n.value<300)}function k(e){q.value===!0&&g(l,!0),u("focusin",e)}v(()=>o.modelValue,e=>{c("space",e),g(l,!0),a.animate()}),v(C,e=>{c("offset",e)}),v(()=>o.reveal,e=>{e===!1&&g(l,o.modelValue)}),v(l,e=>{a.animate(),u("reveal",e)}),v([n,a.scroll,a.height],V),v(()=>t.screen.height,e=>{a.isContainer.value!==!0&&g(f,e)});const F={};return a.instances.footer=F,o.modelValue===!0&&c("size",n.value),c("space",o.modelValue),c("offset",C.value),I(()=>{a.instances.footer===F&&(a.instances.footer=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const e=K(d.default,[m(M,{debounce:0,onResize:H})]);return o.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:w.value,style:L.value,onFocusin:k},e)}}});export{N as Q,U as a,Y as b,G as c};