(this["webpackJsonpreact-search-filter"]=this["webpackJsonpreact-search-filter"]||[]).push([[0],{14:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(15),s=a.n(r),i=(a(22),a(5)),u=a.n(i),o=a(16),j=a(3),d=a(17),h=a.n(d),l=(a(14),a(0)),b=function(e){var t=e.data,a=e.setsearchText,n=e.setFilteredData;return Object(l.jsx)("input",{className:"searchBar",placeholder:"Search Name here",type:"text",name:"searchText",id:"searchText",onChange:function(e){a(e.target.value),function(e){var a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));n(a)}(e.target.value)}})},f=function(e){var t=e.data;return Object(l.jsx)("ol",{children:t&&t.length>0&&t.map((function(e,t){return Object(l.jsx)("li",{children:e.name},t)}))})};var x=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),i=s[0],d=s[1],x=Object(n.useState)(a),O=Object(j.a)(x,2),p=O[0],m=O[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://jsonplaceholder.typicode.com/users/");case 2:return t=e.sent,e.next=5,t.data;case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("h3",{className:"header",children:"React Search Filter"}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)(b,{data:a,setsearchText:d,setFilteredData:m}),Object(l.jsx)(f,{data:""===i?a:p})]}),Object(l.jsx)("span",{className:"footer",children:"Thu Aug 19 2021 15:09:28 GMT+0500 (Pakistan Standard Time) "})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.40fa4781.chunk.js.map