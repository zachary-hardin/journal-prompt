(this["webpackJsonpjournal-prompt-app"]=this["webpackJsonpjournal-prompt-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n.n(a),s=n(12),i=n.n(s),o=(n(20),n(14)),l=(n(21),n(13));var j=function(){return Object(r.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Journal Prompt Project"}),Object(r.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsx)("a",{className:"nav-link mr-sm-3",href:"/",children:"Prompt Generator"})}),Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsx)("a",{className:"nav-link mr-sm-3",href:"#",children:"Admin \u2699\ufe0f"})})]})})]})})};var m=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){l.get("https://thawing-fortress-26537.herokuapp.com/prompt").then((function(e){c(e.data)}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsxs)("div",{className:"container spacer-2",children:[Object(r.jsx)("h1",{children:"Prompt Generator"}),Object(r.jsx)("div",{style:{height:"3rem"},children:function(){if(n.prompt)return Object(r.jsxs)("p",{children:['"',n.prompt,'"']})}()}),Object(r.jsx)("button",{className:"btn btn-primary","data-testid":"refreshPrompt",onClick:s,children:"Refresh Prompt"})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(40);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),b()}},[[41,1,2]]]);
//# sourceMappingURL=main.2d9ada43.chunk.js.map