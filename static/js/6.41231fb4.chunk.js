(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{500:function(e,t,a){"use strict";t.a=function(){return{debounce:function(e){var t,a=e.func,r=e.wait,n=e.immediate;return function(){var e=this,o=arguments,l=function(){t=null,n||a.apply(e,o)},c=n&&!t;clearTimeout(t),t=setTimeout(l,r),c&&a.apply(e,o)}}}}},501:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(497),a(498),a(63);var r=a(508),n=a.n(r),o=(a(509),a(510),a(512),"https:"==window.location.protocol),l="".concat(window.location.protocol,"//").concat(o?window.location.host:window.location.hostname+":8000");n.a.get("antiCsrfToken")},502:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(497),n=a.n(r),o=a(498),l=(a(501),a(503)),c=a.n(l),i=function(e){return"https://www.zillowstatic.com/autocomplete/v2/suggestions?q=".concat(e)},u=function(){var e=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get(i(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:if(!(a=e.sent)||200!=a.status){e.next=6;break}return o=a.data,e.abrupt("return",null===o||void 0===o||null===(r=o.resultGroups[0])||void 0===r?void 0:r.results);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},507:function(e,t,a){"use strict";a(525);var r=a(19),n=a(0),o=a.n(n),l=a(87),c=a(490),i=a(493),u=a(150),s=a(148),m=(a(559),a(560),a(497)),d=a.n(m),p=a(498),b=(a(501),a(503),a(149)),f=a(500),h=(a(22),a(568)),g=a(557),w=a(492),v=a(494),E=a(491),O=a(561),j=a(562),k=(a(154),function(e){var t=e.details;return o.a.createElement(l.a,{background:"light-1",width:"flex",pad:"small",gap:"small",border:"all",round:"xsmall",elevation:"small"},o.a.createElement(w.a,{elevation:"small",size:"large",src:"images/agents/profile.jpg",background:"accent-4",border:"all",color:"accent-2"}),o.a.createElement(i.a,{size:"small",color:"dark-1"},t.Broker||""),o.a.createElement(c.a,{margin:"0",level:"3",color:"brand"},t.Name),o.a.createElement(l.a,{direction:"row",gap:"xsmall"},o.a.createElement(O.a,{color:"brand"}),o.a.createElement(i.a,{color:"dark-1",size:"xsmall"},t.Cell)),o.a.createElement(l.a,{direction:"row",gap:"xsmall"},o.a.createElement(v.a,{href:"#"},o.a.createElement(j.a,{color:"brand"})),o.a.createElement(i.a,{color:"dark-1",size:"xsmall"},t.Email)),o.a.createElement(i.a,{weight:"bold",color:"brand",size:"xsmall"},t.State?b.b[t.State]:""),o.a.createElement(l.a,{direction:"row",gap:"small",pad:"small"},o.a.createElement(E.a,{primary:!0,size:"small",color:"brand",label:"Read More",onClick:function(){}}),o.a.createElement(E.a,{size:"small",color:"brand",label:"Book",onClick:function(){}})))}),y=a(567),S=a(558),x=(a(502),function(e){var t=e.placeholder,a=e.width,c=e.users,u=e.setAgents,s=Object(n.useState)(!1),m=Object(r.a)(s,2),h=m[0],g=m[1],w=Object(n.useState)(),v=Object(r.a)(w,2)[1],E=Object(n.useCallback)((function(){return v({})}),[]),O=Object(n.useState)(""),j=Object(r.a)(O,2),k=j[0],x=j[1],z=Object(n.useState)([]),C=Object(r.a)(z,2),R=C[0],N=C[1],T=Object(n.useRef)();Object(f.a)().debounce;Object(n.useEffect)((function(){E()}),[E]);var L=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,r=[],x(a),a.trim()?(Object.keys(b.b).forEach((function(e){b.b[e].toLowerCase().includes(a.toLowerCase())})),n=null===c||void 0===c?void 0:c.filter((function(e){return r.length?r.includes(e.State):e.Name.toLowerCase().includes(a.toLowerCase())})),u(n.map((function(e){return e.Name})))):u(c.map((function(e){return e.Name})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(l.a,{ref:T,width:a||"xlarge",direction:"row",height:"40px",margin:{left:"medium"},round:"xsmall",align:"center",background:"light-1",pad:{horizontal:"xsmall"},elevation:h?"medium":void 0,border:{side:"all",color:h?"transparent":"border"},style:h?{borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"}:{}},o.a.createElement(y.a,{type:"search",plain:!0,value:k,onChange:L,dropTarget:T.current,onSelect:function(e){x(""),N([])},placeholder:t,suggestions:R.map((function(e,t,a){var r=e.display;return{label:o.a.createElement(l.a,{direction:"row",border:{top:{size:"xsmall"},color:"light-5"},pad:"xsmall"},o.a.createElement(l.a,{pad:{right:{size:"medium"}},margin:{left:"small",right:"small"}},o.a.createElement(i.a,{size:"medium"},r.split(",")[0])),o.a.createElement(l.a,null,o.a.createElement(i.a,{color:"status-unknown",size:"medium"},r.split(",")[1]))),value:{display:r}}})),onSuggestionsOpen:function(){return g(!0)},onSuggestionsClose:function(){return g(!1)}}),o.a.createElement(l.a,null,o.a.createElement(S.a,{color:"brand"})))}),z=a(153);t.a=function(e){var t=e.users,a=e.placeholder,m=e.heading,d=Object(z.b)(),p=Object(n.useState)(!1),b=Object(r.a)(p,2),f=(b[0],b[1],Object(n.useState)()),w=Object(r.a)(f,2)[1],v=Object(n.useCallback)((function(){return w({})}),[]),E=Object(n.useState)(""),O=Object(r.a)(E,2),j=(O[0],O[1],Object(n.useState)([])),y=Object(r.a)(j,2),S=(y[0],y[1],Object(n.useRef)(),Object(n.useState)(!0)),C=Object(r.a)(S,2),R=C[0],N=C[1],T=Object(u.c)("viewType",u.b),L=Object(r.a)(T,2),A=L[0],B=L[1],q=Object(n.useState)(t.map((function(e){return e.Name}))),F=Object(r.a)(q,2),G=F[0],J=F[1],W=Object(n.useState)(!1),Y=Object(r.a)(W,2),H=(Y[0],Y[1]),I=(Object(s.a)().navigate,Object(n.useState)()),M=Object(r.a)(I,2);M[0],M[1];Object(n.useEffect)((function(){v()}),[v]),Object(n.useEffect)((function(){A?N("map"===A):B(R?"map":"list"),H(!0)}),[]);return o.a.createElement(l.a,{pad:{top:"small",left:"medium",bottom:"small",right:"medium"},direction:"column"},o.a.createElement(c.a,{level:"4",color:"brand"},"Get in touch with one of our agents ",m),o.a.createElement(i.a,{size:"small",color:"dark-3",margin:{bottom:"small"}},"Here you can quickly and easily get in touch with our realtors if you want to sell, value or buy your home. The Iraqi American Realtors a nationwide group of certified independent real estate agents throughout the USA. Find your local broker bellow. Our goal is to make the housing market a less complicated place. Whether you plan to move tomorrow or in ten years. We usually say that we make it easier to sell and easier to buy - both before, during and afterwards."),o.a.createElement(l.a,{height:"small",pad:{vertical:"small"},direction:"row"},o.a.createElement(x,{users:t,setAgents:J,placeholder:a||"Search",width:"large"})),o.a.createElement(l.a,{direction:"row",style:{height:1400,overflowY:"auto"}},o.a.createElement(l.a,{direction:"row",style:{height:1400,overflowY:"auto"},pad:"medium",margin:{top:"small"}},o.a.createElement(l.a,{width:"100%"},o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{rows:"medium",columns:{count:"small"===d.appSize?1:"medium"===d.appSize?3:5,size:"auto"},gap:"medium"},o.a.createElement(g.a,{items:G,step:100},(function(e){return o.a.createElement(k,{details:null===t||void 0===t?void 0:t.find((function(t){return t.Name===e}))})}))))))))}},565:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(16),l=a(87),c=(a(104),a(507)),i=a(151);t.default=function(){Object(o.i)().id;return n.a.createElement(l.a,{direction:"column",background:"light-2"},n.a.createElement(c.a,{placeholder:'"Search by agent or state name"',users:i.a}))}}}]);
//# sourceMappingURL=6.41231fb4.chunk.js.map