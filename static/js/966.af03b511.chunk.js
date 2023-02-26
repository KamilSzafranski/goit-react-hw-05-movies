"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[966],{47:function(n,t,e){e.d(t,{e:function(){return s}});e(791);var r,a=e(168),o=e(444).ZP.li(r||(r=(0,a.Z)(['\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  align-items: center;\n  position: relative;\n  margin-bottom: 5px;\n  font-size: 18px;\n  transition: transform 300ms ease-in, color 300ms ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    transform: scale(1.02);\n    color: #2196f3;\n  }\n  &::before {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    content: "";\n    width: 25px;\n    height: 25px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-image: url("https://cdn-icons-png.flaticon.com/512/3658/3658959.png");\n  }\n']))),c=e(87),u=e(689),i=e(184),s=function(n){var t=n.movie,e=(0,u.TH)();return(0,i.jsx)("ul",{children:t.map((function(n){var t;return(0,i.jsx)(c.OL,{to:"/movie/".concat(n.id),state:{from:e},children:(0,i.jsx)(o,{children:null!==(t=n.title)&&void 0!==t?t:"No title yet"})},n.id)}))})}},966:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,o,c,u=e(861),i=e(439),s=e(757),p=e.n(s),f=e(47),l=e(734),h=e(791),v=e(87),x=e(88),d=e(168),m=e(444),g=m.ZP.input(r||(r=(0,d.Z)(["\n  width: 300px;\n  display: block;\n  padding: 7px 0 7px 8px;\n  color: black;\n  font-size: 16px;\n  line-height: 1.25;\n  border: 1px solid black;\n  border-radius: 4px;\n  outline: none;\n"]))),w=m.ZP.button(a||(a=(0,d.Z)(["\n  display: block;\n  align-items: center;\n  padding: 5px 10px;\n  font-weight: 700;\n  font-size: 24px;\n  background-color: #2196f3;\n  color: white;\n  border: 0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  cursor: pointer;\n"]))),b=m.ZP.form(o||(o=(0,d.Z)(["\n  margin-bottom: 25px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),k=m.ZP.h2(c||(c=(0,d.Z)(["\n  padding-top: 30vh;\n  text-align: center;\n"]))),Z=e(184),y=function(){var n=(0,v.lr)(),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=e.get("title"),o=(0,h.useState)(a||""),c=(0,i.Z)(o,2),s=c[0],d=c[1],m=(0,h.useState)([]),y=(0,i.Z)(m,2),j=y[0],P=y[1],_=(0,h.useState)(!1),E=(0,i.Z)(_,2),S=E[0],z=E[1];(0,h.useEffect)((function(){var n=function(){var n=(0,u.Z)(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=P,n.next=3,(0,x.on)(s.trim());case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var C=function(){var n=(0,u.Z)(p().mark((function n(t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,x.on)(s);case 3:if(0!==(e=n.sent).total_results){n.next=6;break}return n.abrupt("return",z(!0));case 6:P(e),z(!1);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,Z.jsx)(l.P,{children:(0,Z.jsxs)(l.W,{children:[(0,Z.jsxs)(b,{onSubmit:C,children:[(0,Z.jsx)(g,{type:"text",value:null!==a&&void 0!==a?a:"",onChange:function(n){n.preventDefault(),r({title:n.target.value}),d(n.target.value)}}),(0,Z.jsx)(w,{type:"submit",children:"Search"})]}),S&&(0,Z.jsx)(k,{children:"We found nothing \ud83d\ude2d Please try againg with corret search value \ud83d\ude09"}),void 0!==j.results&&!S&&(0,Z.jsx)(f.e,{movie:j.results})]})})}},734:function(n,t,e){e.d(t,{P:function(){return i},W:function(){return u}});var r,a,o=e(168),c=e(444),u=c.ZP.div(r||(r=(0,o.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),i=c.ZP.section(a||(a=(0,o.Z)(["\n  padding: 20px 25px 0;\n  position: relative;\n"])))},88:function(n,t,e){e.d(t,{IQ:function(){return p},Jh:function(){return f},a2:function(){return i},on:function(){return l},s_:function(){return s}});var r=e(861),a=e(757),o=e.n(a),c="https://api.themoviedb.org/3/movie/",u=new URLSearchParams({api_key:"6013882f278a288901195e6aa884c4e8"}),i=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/all/day?").concat(u));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statu);case 6:return n.next=8,t.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c).concat(t,"?").concat(u));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statu);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c).concat(t,"/credits?").concat(u));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statu);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c).concat(t,"/reviews?").concat(u));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statu);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie?").concat(u,"&query=").concat(t));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statu);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,a,o,c){try{var u=n[o](c),i=u.value}catch(s){return void e(s)}u.done?t(i):Promise.resolve(i).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,o){var c=n.apply(t,e);function u(n){r(c,a,o,u,i,"next",n)}function i(n){r(c,a,o,u,i,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=966.af03b511.chunk.js.map