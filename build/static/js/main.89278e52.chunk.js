(this.webpackJsonpjeoparty3=this.webpackJsonpjeoparty3||[]).push([[0],{89:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(42),s=n.n(o),i=n(12),r=n(26),j=n(1),b=function(){return Object(j.jsx)("div",{children:"Welcome to the browser board!"})},a=n(43),u=n.n(a)()(),l=Object(c.createContext)(),d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.useContext)(l).on("session_name",(function(e){o(e)})),Object(j.jsxs)("div",{children:["Welcome to the browser lobby!",Object(j.jsx)("br",{}),"Session name: ",n]})},O=function(e){return Object(c.useContext)(l).on("disconnect",(function(){alert("You've been disconnected!")})),Object(j.jsx)("div",{children:e.children})},x=function(){return Object(j.jsx)("div",{children:"Welcome to the mobile board!"})},h=n(27),f=n(45),v=n(44),m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useContext)(l),r=Object(c.useCallback)((function(e){s.emit("join_session",e)}),[]);return s.on("join_session_success",(function(e){alert("You joined session (".concat(e,")")),o("")})),s.on("join_session_failure",(function(e){alert("Couldn't find session (".concat(e,")")),o("")})),Object(j.jsxs)("div",{children:["Welcome to the mobile lobby!",Object(j.jsxs)(h.a,{className:"mb-3",children:[Object(j.jsx)(v.a,{value:n,onChange:function(e){return o(e.target.value)},"aria-describedby":"basic-addon1"}),Object(j.jsx)(h.a.Prepend,{children:Object(j.jsx)(f.a,{onClick:function(){return r(n)},variant:"outline-secondary",children:"Join"})})]})]})},p=(n(88),"lobby"),w="board",y=function(){var e=Object(c.useState)(p),t=Object(i.a)(e,2),n=t[0],o=(t[1],null),s=null;switch(n){case p:o=Object(j.jsx)(d,{}),s=Object(j.jsx)(m,{});break;case w:o=Object(j.jsx)(b,{}),s=Object(j.jsx)(x,{});break;default:o=Object(j.jsx)(d,{}),s=Object(j.jsx)(m,{})}return Object(j.jsxs)(l.Provider,{value:u,children:[Object(j.jsx)(r.BrowserView,{children:o}),Object(j.jsx)(r.MobileView,{children:Object(j.jsx)(O,{children:s})})]})};u.on("connect_device",(function(){u.emit("connect_device",/Mobi/.test(navigator.userAgent))})),s.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.89278e52.chunk.js.map