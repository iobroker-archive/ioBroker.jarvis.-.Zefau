(this.webpackJsonpjarvis=this.webpackJsonpjarvis||[]).push([[25,28,38,64,65],{2093:function(e,t,n){"use strict";n.r(t),t.default={}},2094:function(e,t,n){"use strict";n.r(t),t.default={}},2095:function(e,t,n){"use strict";n.r(t);var a=n(64),r=n(0),i=n.n(r),c=n(58),l=n(142);t.default=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return i.a.createElement(c.a,Object.assign({container:!0,alignItems:"center",spacing:1},n),i.a.createElement(c.a,{item:!0,xs:!0},i.a.createElement(l.a,null)),i.a.createElement(c.a,{item:!0},t),i.a.createElement(c.a,{item:!0,xs:!0},i.a.createElement(l.a,null)))}},2108:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(8),i=n(14),c=n(0),l=n.n(c),u=n(5),o=n(9),d=n(185),s=n(2095),f=n(33),m=n(68),v=n(669),b=n(79),E=n(671),h=n(130),p=n(670),g=n(1008),j=n.n(g),O=n(2213),k=n.n(O),y=n(2212),C=n.n(y),w=n(2211),z=n.n(w),M=n(2210),x=n.n(M),D=n(56),L=Object(D.a)((function(e){return{List:{padding:e.spacing(0,1.5)},unread:{backgroundColor:e.palette.background.paper},read:{opacity:.5},archived:{opacity:.5,fontStyle:"italic"},bold:{fontWeight:"bold"}}}));function N(e){var t=e.list,n=e.divider,a=Object(c.useState)(void 0!==e.hidden&&e.hidden),r=Object(i.a)(a,2),u=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement(b.a,{dense:!0,button:!0,onClick:function(){return o((function(e){return!e}))}},l.a.createElement(s.default,null,n(u))),!0!==u&&t)}function S(e){var t=e.id,n=e.state,a=e.onClick,r=e.title,i=void 0===r?null:r,c=e.message,o=void 0===c?"":c,s=(e.criticality,e.icon),v=e.iconColor,g=L();if(null===i)return null;var O=function(e){var n=new d.default;"delete"===e?n.del(t):n.set(t,{state:e})};return l.a.createElement(b.a,{onClick:a,classes:{root:Object(u.a)("read"===n&&g.read,(!n||"unread"===n)&&g.unread,"archived"===n&&g.archived)},dense:!0,divider:!0,button:!0},l.a.createElement(E.a,null,l.a.createElement(f.default,{icon:s||"mdi-message",color:v})),l.a.createElement(h.a,{classes:{primary:Object(u.a)((!n||"unread"===n)&&g.bold),secondary:Object(u.a)((!n||"unread"===n)&&g.bold)},primary:i,secondary:o.length>40?o.substr(0,35)+"...":o}),l.a.createElement(p.a,null,"archived"!==n?l.a.createElement(m.a,{onClick:function(){return O("unread"===n?"read":"unread")},edge:"end","aria-label":"unread"===n?"read":"unread"},"unread"===n?l.a.createElement(x.a,{size:"small"}):l.a.createElement(z.a,{size:"small"})):l.a.createElement(m.a,{onClick:function(){return O("read")},edge:"end","aria-label":"restore"},l.a.createElement(C.a,{size:"small"})),l.a.createElement(m.a,{onClick:function(){return O("archived"===n?"delete":"archived")},edge:"end","aria-label":"archived"===n?"delete":"archive"},"archived"===n?l.a.createElement(j.a,{size:"small"}):l.a.createElement(k.a,{size:"small"}))))}t.default=l.a.memo((function(e){var t=L(),n=Object(c.useState)([]),u=Object(i.a)(n,2),s=u[0],f=u[1],m=new d.default,b=function(e){m.emit("new",Object(r.a)(Object(r.a)({},e),{},{display:"popup",autoHideDuration:null}))};Object(c.useEffect)((function(){var e=function(e){return f(Object(a.a)(e).reverse())};return m.get("all",e),m.on("all",e),function(){return m.off("all",e)}}),[m]);var E=[],h=[];return s.forEach((function(e){"archived"!==e.state?E.push(l.a.createElement(S,Object.assign({key:e.id,onClick:function(){return b(e)}},e))):h.push(l.a.createElement(S,Object.assign({key:e.id,onClick:function(){return b(e)}},e)))})),l.a.createElement(v.a,{classes:{root:t.List},dense:!0},l.a.createElement(N,{list:E}),l.a.createElement(N,{list:h,hidden:!0,divider:h.length>0&&function(e){return l.a.createElement("em",null,o.default.t((e?"show":"hide")+" archived Notifications"))}}))}),(function(e,t){return!1===t.open}))},2109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),r=n.n(a),i=n(9),c=n(25),l=n(2108),u=n(2302),o=n(56),d=Object(o.a)((function(e){return{drawer:function(t){return{width:t.isMobile?"100%":500,backgroundColor:e.palette.background.default}}}}));function s(e){var t=e.navigate,n=d({isMobile:c.default.get("_isMobile")});return r.a.createElement(u.a,{anchor:"right",open:e.open,onOpen:console.log,onClose:function(){return t(null)},classes:{paper:n.drawer}},r.a.createElement(l.default,e))}i.default.setTranslations((function(e){return n(2230)("./"+e)}))},2127:function(e,t,n){"use strict";n.r(t);var a=n(2109);n.d(t,"default",(function(){return a.default}))},2230:function(e,t,n){var a={"./de":2093,"./de.js":2093,"./en":2094,"./en.js":2094};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=2230}}]);
//# sourceMappingURL=25.412f5f77.chunk.js.map