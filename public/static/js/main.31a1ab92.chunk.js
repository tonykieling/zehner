(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(18),r=c.n(a),o=(c(27),c(11)),i=c(3),j=(c(28),c(1));function h(){return Object(j.jsx)("div",{className:"header-bar",children:"Free Shipping On Orders Over $49"})}var b=c(8),d=c(19),u=(c(30),[{country:"United States",hRefy:"us"},{country:"Canada",hRefy:"ca"},{country:"United Kingdom",hRefy:"uk"}]);function x(){var e=Object(n.useState)(u[0].country),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("dropdown-content-no-show"),r=Object(b.a)(a,2),o=r[0],i=r[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("div",{onClick:function(){return i("dropdown-content")},className:"dropbtn",children:[" ",c," "]}),Object(j.jsx)("div",{id:"myDropdown",className:o,children:u.map((function(e,t){return Object(j.jsxs)("a",{href:"#".concat(e.hRefy),onClick:function(){return t=e.country,s(t),void i("dropdown-content-no-show");var t},children:[" ",e.country," "]},t)}))})]})})}function l(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{}),Object(j.jsx)(x,{})]})}var O=c(10),A=c(22),f=c(21);c(31);function p(e){var t=e.onCloseSearch,c=Object(n.useState)(""),s=Object(b.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!1),h=Object(b.a)(o,2),d=h[0],u=h[1];Object(n.useEffect)((function(){return function(){return t()}}),[d]);return Object(j.jsxs)(j.Fragment,{children:[d&&Object(j.jsx)(i.a,{to:{pathname:"/search",text:a}}),Object(j.jsxs)("div",{className:"header-menu",children:[Object(j.jsx)(O.a,{}),Object(j.jsx)("input",{id:"text",autoFocus:!0,type:"text",value:a,placeholder:"Search...",className:"search-setting",style:{borderBottom:"1px solid black"},onChange:function(e){return r(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&void u(!0)}}),Object(j.jsx)(f.a,{onClick:function(){return t()}})]})]})}var m=window.innerWidth<800;function g(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)(j.Fragment,{children:m?console.log("render mobile screen"):c?Object(j.jsx)(p,{onCloseSearch:function(){return s(!1)}}):Object(j.jsxs)("div",{className:"header-menu",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"header-shop",children:"Shop"}),Object(j.jsx)(o.b,{to:"/about",className:"header-shop",children:"About 4moms"})]}),Object(j.jsx)(o.b,{className:"header-main-icon",to:"/",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"4momsLogo"})}),Object(j.jsxs)("span",{className:"header-menu-right",children:[Object(j.jsx)("span",{style:{width:"11rem"},children:Object(j.jsx)(l,{})}),Object(j.jsx)("span",{children:"Support"}),Object(j.jsx)(O.a,{className:"icons",onClick:function(){return s(!0)}}),Object(j.jsx)(A.a,{className:"icons"}),Object(j.jsx)(O.b,{className:"icons"})]})]})})}function v(){return Object(j.jsx)("div",{className:"app-body",children:Object(j.jsx)("h2",{children:"This is App body component"})})}function W(){return Object(j.jsx)("div",{className:"app-body",children:Object(j.jsx)("h1",{children:'This is "About 4moms" React component'})})}function y(){return Object(j.jsxs)("div",{className:"footer-general",children:["This is Footer",Object(j.jsx)("h3",{children:"Social media"}),Object(j.jsx)("h3",{children:"Subscription"}),Object(j.jsx)("h3",{children:"and more."})]})}function D(e){var t=e.location.text;return Object(j.jsx)("div",{className:"app-body",style:{color:"blue",fontWeight:"bolder"},children:Object(j.jsxs)("h2",{children:["Search Result for:",Object(j.jsx)("span",{style:{fontWeight:"bolder",color:"green"},children:' "'.concat(t,'"')})]})})}var w=function(){return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(g,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{exact:!0,path:"/",children:Object(j.jsx)(v,{})}),Object(j.jsx)(i.b,{exact:!0,path:"/about",children:Object(j.jsx)(W,{})}),Object(j.jsx)(i.b,{exact:!0,path:"/search",component:D})]}),Object(j.jsx)(y,{})]})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),Q()}},[[37,1,2]]]);
//# sourceMappingURL=main.31a1ab92.chunk.js.map