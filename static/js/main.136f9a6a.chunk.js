(this.webpackJsonpgbo2=this.webpackJsonpgbo2||[]).push([[1],{106:function(e,t,n){var a={"./ion-icon.entry.js":[170,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=106,e.exports=r},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(38),c=n.n(l),o=n(25),s=n(1),i=n(72),u=n(16),m=n(8),E=n.n(m),j=n(15),f=n(18),d=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],l=t[1],c=function(){var e=Object(j.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database/news/game.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),n?r.a.createElement(s.s,null,r.a.createElement(s.m,null,r.a.createElement(s.B,null,r.a.createElement(s.z,null,"Home"))),r.a.createElement(s.k,null,r.a.createElement(s.m,{collapse:"condense"},r.a.createElement(s.B,null,r.a.createElement(s.z,{size:"large"},"Home"))),r.a.createElement(s.l,{className:"ion-no-padding"},r.a.createElement(s.v,{className:"ion-justify-content-center"},r.a.createElement(s.j,{"size-md":"6"},n.map((function(e){return r.a.createElement(s.e,{key:e.id},r.a.createElement("img",{src:e.cover}),r.a.createElement(s.f,null,r.a.createElement(s.h,null,e.title),r.a.createElement(s.g,null,"Game News")))}))))))):r.a.createElement("div",null,"Loading")},b=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],l=t[1],c=function(){var e=Object(j.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database/ms.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),n?r.a.createElement(s.s,null,r.a.createElement(s.m,null,r.a.createElement(s.B,null,r.a.createElement(s.z,null,"Database"))),r.a.createElement(s.k,null,r.a.createElement(s.m,{collapse:"condense"},r.a.createElement(s.B,null,r.a.createElement(s.z,{size:"large"},"Database"))),r.a.createElement(s.l,{className:"ion-no-padding"},r.a.createElement(s.v,{className:"ion-justify-content-center"},r.a.createElement(s.j,{"size-md":"6"},r.a.createElement(s.r,null,n.map((function(e){return r.a.createElement(s.p,{key:e.id,routerLink:"/ms/".concat(e.id)},r.a.createElement(s.b,{slot:"start"},r.a.createElement(s.o,{src:e.avatar})),r.a.createElement(s.q,null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.group," | ",e.cost)),r.a.createElement(s.i,{outline:!0,color:"dark",slot:"end"},r.a.createElement(s.q,null,"LVL ",e.level)))})))))))):r.a.createElement("div",null,"Loading")},p=n(176),y=n(177),h=n(173),O=n(175),g=n(174);localStorage.getItem("clock_mode")||localStorage.setItem("clock_mode","AM/PM");var v=localStorage.getItem("clock_mode"),k="EEEE, MMMM d, yyyy",_=(new Date).toLocaleString("en-US",{timeZone:"America/Los_Angeles"}),x=Object(p.a)(_,"MM/dd/yyyy, h:mm:ss a",new Date),w=(new Date).toString().split(" ")[5],S=(parseInt("GMT-0700".split("-")[1])-parseInt(w.split("-")[1]))/100,M={year:x.getUTCFullYear(),month:x.getUTCMonth(),date:x.getDate(),hours:12+S,minutes:59,seconds:0},D=Object(y.a)(new Date,M),L=Object(h.a)(D,1),N=function(){var e=Object(a.useState)(new Date),t=Object(f.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(D),o=Object(f.a)(c,1)[0],i=Object(a.useState)(L),u=Object(f.a)(i,1)[0],m=Object(a.useState)("AM/PM"==v?"h:mm:ss a":"H:mm:ss"),E=Object(f.a)(m,2),j=E[0],d=E[1];return Object(a.useEffect)((function(){setTimeout((function(){return l(new Date)}),1e3),localStorage.setItem("clock_mode","h:mm:ss a"==j?"AM/PM":"24 Hour")}),[n,j]),r.a.createElement(s.s,null,r.a.createElement(s.m,null,r.a.createElement(s.B,null,r.a.createElement(s.z,null,"Clocks"))),r.a.createElement(s.k,null,r.a.createElement(s.l,{className:"ion-no-padding"},r.a.createElement(s.v,{className:"ion-justify-content-center"},r.a.createElement(s.j,{"size-md":"6"},r.a.createElement(s.r,null,r.a.createElement(s.p,null,r.a.createElement(s.A,{checked:"h:mm:ss a"==j,onIonChange:function(e){return d(e.detail.checked?"h:mm:ss a":"H:mm:ss")}}),r.a.createElement(s.q,null,"h:mm:ss a"==j?"AM/PM":"24 Hour"))),r.a.createElement(s.e,null,r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Local Time"),r.a.createElement(s.h,null,Object(O.a)(n,k)),r.a.createElement(s.h,null,Object(O.a)(n,j)))),r.a.createElement(s.e,null,r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Next Daily Mission Reset"),r.a.createElement(s.h,null,Object(O.a)(o,k)),r.a.createElement(s.h,null,Object(O.a)(o,j),"\xa0 (",Object(g.a)(o,{addSuffix:!0}),")"))),r.a.createElement(s.e,null,r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Next Daily Supply Counter Reset"),r.a.createElement(s.h,null,Object(O.a)(u,k)),r.a.createElement(s.h,null,Object(O.a)(u,j),"\xa0 (",Object(g.a)(u,{addSuffix:!0}),")"))),r.a.createElement(s.e,null,r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Next Daily Login Bonus Reset"),r.a.createElement(s.h,null,Object(O.a)(o,k)),r.a.createElement(s.h,null,Object(O.a)(o,j),"\xa0 (",Object(g.a)(o,{addSuffix:!0}),")"))))))))},I=function(e){var t=e.match,n=Object(a.useState)(),l=Object(f.a)(n,2),c=l[0],o=l[1],i=Object(a.useState)(!0),u=Object(f.a)(i,2),m=u[0],d=u[1],b=function(){var e=Object(j.a)(E.a.mark((function e(){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database/ms.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.find((function(e){return e.id==t.params.id})),o(r),d(!1),e.abrupt("return",(function(){return o({})}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()})),m?r.a.createElement("div",null,"Loading"):r.a.createElement(s.s,null,r.a.createElement(s.m,null,r.a.createElement(s.B,null,r.a.createElement(s.d,{slot:"start"},r.a.createElement(s.c,{defaultHref:"/database"})),r.a.createElement(s.z,null,c.name," LVL ",c.level))),r.a.createElement(s.k,null,r.a.createElement(s.l,{className:"ion-no-padding"},r.a.createElement(s.v,{className:"ion-justify-content-center"},r.a.createElement(s.j,{"size-md":"6"},r.a.createElement(s.f,null,r.a.createElement(s.g,null,r.a.createElement(s.i,{outline:!0,color:"dark"},r.a.createElement(s.q,null,c.group)),r.a.createElement(s.i,{outline:!0,color:"dark"},r.a.createElement(s.q,null,c.cost)),c.compatibility.map((function(e,t){return r.a.createElement(s.i,{key:t,outline:!0,color:"dark"},r.a.createElement(s.q,null,e))})))),r.a.createElement("img",{src:c.picture,alt:c.name+" "+c.level}))))))},z=(n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(35)),T=Object(a.createContext)({}),B={mobile_suits:[],loading:!1},C=function(e,t){switch(t.type){case"SET_MOBILE_SUITS":return Object(z.a)(Object(z.a)({},e),{},{mobile_suits:t.payload});case"SET_LOADING":return Object(z.a)(Object(z.a)({},e),{},{loading:t.payload})}return e},q=function(e){var t=Object(a.useReducer)(C,Object(z.a)({},B)),n=Object(f.a)(t,2),l=n[0],c=n[1],o=function(){var e=Object(j.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database/ms.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c({type:"SET_MOBILE_SUITS",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),r.a.createElement(T.Provider,{value:{state:l,dispatch:c}},e.children)},U=(T.Consumer,function(){return r.a.createElement(q,null,r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(s.y,null,r.a.createElement(s.u,null,r.a.createElement(o.b,{path:"/home",component:d,exact:!0}),r.a.createElement(o.b,{path:"/database",component:b,exact:!0}),r.a.createElement(o.b,{path:"/clocks",component:N}),r.a.createElement(o.b,{path:"/ms/:id",component:I}),r.a.createElement(o.b,{path:"/",render:function(){return r.a.createElement(o.a,{to:"/home"})},exact:!0})),r.a.createElement(s.w,{slot:"bottom"},r.a.createElement(s.x,{tab:"home",href:"/home"},r.a.createElement(s.n,{icon:u.i}),r.a.createElement(s.q,null,"Home")),r.a.createElement(s.x,{tab:"database",href:"/database"},r.a.createElement(s.n,{icon:u.b}),r.a.createElement(s.q,null,"Database")),r.a.createElement(s.x,{tab:"clocks",href:"/clocks"},r.a.createElement(s.n,{icon:u.p}),r.a.createElement(s.q,null,"Clocks")))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,t,n){e.exports=n(122)},84:function(e,t,n){var a={"./ion-action-sheet.entry.js":[124,5],"./ion-alert.entry.js":[125,6],"./ion-app_8.entry.js":[126,7],"./ion-avatar_3.entry.js":[127,18],"./ion-back-button.entry.js":[128,19],"./ion-backdrop.entry.js":[129,43],"./ion-button_2.entry.js":[130,20],"./ion-card_5.entry.js":[131,21],"./ion-checkbox.entry.js":[132,22],"./ion-chip.entry.js":[133,23],"./ion-col_3.entry.js":[134,44],"./ion-datetime_3.entry.js":[135,10],"./ion-fab_3.entry.js":[136,24],"./ion-img.entry.js":[137,45],"./ion-infinite-scroll_2.entry.js":[138,46],"./ion-input.entry.js":[139,25],"./ion-item-option_3.entry.js":[140,26],"./ion-item_8.entry.js":[141,27],"./ion-loading.entry.js":[142,28],"./ion-menu_3.entry.js":[143,29],"./ion-modal.entry.js":[144,8],"./ion-nav_2.entry.js":[145,15],"./ion-popover.entry.js":[146,9],"./ion-progress-bar.entry.js":[147,30],"./ion-radio_2.entry.js":[148,31],"./ion-range.entry.js":[149,32],"./ion-refresher_2.entry.js":[150,11],"./ion-reorder_2.entry.js":[151,17],"./ion-ripple-effect.entry.js":[152,47],"./ion-route_4.entry.js":[153,33],"./ion-searchbar.entry.js":[154,34],"./ion-segment_2.entry.js":[155,35],"./ion-select_3.entry.js":[156,36],"./ion-slide_2.entry.js":[157,48],"./ion-spinner.entry.js":[158,13],"./ion-split-pane.entry.js":[159,49],"./ion-tab-bar_2.entry.js":[160,37],"./ion-tab_2.entry.js":[161,16],"./ion-text.entry.js":[162,38],"./ion-textarea.entry.js":[163,39],"./ion-toast.entry.js":[164,40],"./ion-toggle.entry.js":[165,12],"./ion-virtual-scroll.entry.js":[166,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=84,e.exports=r}},[[78,3,4]]]);
//# sourceMappingURL=main.136f9a6a.chunk.js.map