"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,a,c,o,s=n(861),u=n(439),i=n(757),p=n.n(i),l=n(168),f=n(444),h=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),v=f.ZP.li(a||(a=(0,l.Z)(["\n  border: 1px solid black;\n  border-radius: 5px;\n  flex-basis: calc((100%-90px) / 10);\n"]))),d=f.ZP.p(c||(c=(0,l.Z)(["\n  padding: 5px 0;\n  font-size: 14px;\n"]))),x=f.ZP.img(o||(o=(0,l.Z)(["\n  width: 100%;\n"]))),w=n(243),k=n(791),b=n(689),m=n(88),g=n(184),Z=function(){var t,e=(0,b.UO)().elementId,n=(0,k.useState)({}),r=(0,u.Z)(n,2),a=r[0],c=r[1],o=(0,k.useState)(!1),i=(0,u.Z)(o,2),l=i[0],f=i[1],Z=(0,k.useCallback)((0,s.Z)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,(0,m.IQ)(e);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),[e]);return(0,k.useEffect)((function(){f(!0),Z(),f(!1)}),[Z]),(0,g.jsxs)(g.Fragment,{children:[l&&(0,g.jsx)(w.gy,{height:"160",width:"160",color:"#2196f3",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{paddingTop:"35vh",display:"flex",justifyContent:"center"},wrapperClass:"Spinner",visible:!0}),!l&&(0,g.jsx)(h,{children:null===a||void 0===a||null===(t=a.cast)||void 0===t?void 0:t.map((function(t){var e=null===t.profile_path?"https://static.thenounproject.com/png/3674270-200.png":"https://image.tmdb.org/t/p/w500/".concat(t.profile_path);return(0,g.jsxs)(v,{children:[(0,g.jsx)(x,{src:e}),(0,g.jsx)(d,{children:t.name})]},t.id)}))})]})}},88:function(t,e,n){n.d(e,{IQ:function(){return p},Jh:function(){return l},a2:function(){return u},on:function(){return f},s_:function(){return i}});var r=n(861),a=n(757),c=n.n(a),o="https://api.themoviedb.org/3/movie/",s=new URLSearchParams({api_key:"6013882f278a288901195e6aa884c4e8"}),u=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/all/day?").concat(s));case 3:if((e=t.sent).ok){t.next=6;break}throw new Error(e.statu);case 6:return t.next=8,e.json();case 8:return n=t.sent,t.abrupt("return",n);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o).concat(e,"?").concat(s));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.statu);case 6:return t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o).concat(e,"/credits?").concat(s));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.statu);case 6:return t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o).concat(e,"/reviews?").concat(s));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.statu);case 6:return t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie?").concat(s,"&query=").concat(e));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.statu);case 6:return t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.67dbb5a6.chunk.js.map