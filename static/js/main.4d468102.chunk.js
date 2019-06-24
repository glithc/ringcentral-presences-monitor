(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=n(54),l=n.n(i),s=(n(91),n(15)),u=n(10),m=n.n(u),p=n(18),d=n(150),f=n(139),h=n(148),g=n(137),b=n(147),v=n(135),w=n(55),E=n.n(w)()({storageOptions:{name:"call-supervise-data"}}),x=n(136),S=n(138),y=Object(v.a)(function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)}}});var C=function(e){var t=e.onLogin,n=y();return r.a.createElement("div",{className:n.heroContent},r.a.createElement(x.a,{maxWidth:"sm"},r.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Call Supervise"),r.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"A app for admin to  supervise calls under their RingCentral account."),r.a.createElement("div",{className:n.heroButtons},r.a.createElement(S.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(S.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:t},"Login with RingCentral Sandbox account"))))))},j=n(42),k=n(140),O=n(144),N=n(143),P=n(141),I=n(142),D=n(57),K=n.n(D),T=n(146),L=n(149),W=n(145),B=Object(v.a)(function(e){return{modalContent:{position:"absolute",width:800,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"},table:{minWidth:800}}});function R(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var F=function(e){var t=e.opened,n=e.presence,a=e.onClose,c=e.superviseCall,o=e.endCall,i=r.a.useState(R),l=Object(s.a)(i,1)[0],u=B();return r.a.createElement(L.a,{open:t,onClose:a},r.a.createElement("div",{className:u.modalContent,style:l},r.a.createElement(g.a,{variant:"h6"},n.extension&&n.extension.extensionNumber," | ",n.telephonyStatus),r.a.createElement(g.a,{variant:"h6"},"Calls:"),r.a.createElement(k.a,{className:u.table,size:"small"},r.a.createElement(P.a,null,r.a.createElement(I.a,null,r.a.createElement(N.a,null,"Direction"),r.a.createElement(N.a,{align:"right"},"Telephony Status"),r.a.createElement(N.a,{align:"right"},"From"),r.a.createElement(N.a,{align:"right"},"To"),r.a.createElement(N.a,{align:"right"},"Start Time"),r.a.createElement(N.a,{align:"right"},"Operation"))),r.a.createElement(O.a,null,n.activeCalls&&n.activeCalls.filter(function(e){return"NoCall"!==e.telephonyStatus}).map(function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement(N.a,{component:"th",scope:"row"},e.direction),r.a.createElement(N.a,{align:"right"},e.telephonyStatus),r.a.createElement(N.a,{align:"right"},e.from),r.a.createElement(N.a,{align:"right"},e.to),r.a.createElement(N.a,{align:"right"},e.startTime),r.a.createElement(N.a,{align:"right"},r.a.createElement(W.a,{size:"small","aria-label":"Small outlined contained primary button group"},r.a.createElement(f.a,{onClick:function(){return o(e)}},"End"),r.a.createElement(f.a,{onClick:function(){return c(e,n.extension.extensionNumber)}},"Supervise"))))})))))},G=Object(v.a)(function(e){return{container:{paddingTop:"20px"},table:{minWidth:650},tr:{"&:hover":{background:"#f3f3f3",cursor:"pointer"}}}}),J=[];var z=function(e){var t=e.loadPresences,n=e.subscription,c=e.superviseCall,o=e.endCall,i=G(),l=E("presencesData",J),u=Object(s.a)(l,2),d=u[0],f=u[1],h=Object(a.useState)({}),g=Object(s.a)(h,2),b=g[0],v=g[1],w=Object(a.useState)(!1),S=Object(s.a)(w,2),y=S[0],C=S[1];return Object(a.useEffect)(function(){if(n){var e=function(e){console.log(e);var t=[].concat(d),n=t.findIndex(function(t){return t.extension.id===e.body.extensionId});n>-1&&(t[n]=Object(j.a)({},t[n],e.body,{activeCalls:e.body.activeCalls&&e.body.activeCalls.filter(function(e){return"NoCall"!==e.telephonyStatus})}),f(t)),b.extension&&b.extension.id===e.body.extensionId&&v(Object(j.a)({},b,e.body))};return n.on(n.events.notification,e),function(){n.removeListener(n.events.notification,e)}}},[n,d,b]),Object(a.useEffect)(function(){function e(){return(e=Object(p.a)(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d!==J){e.next=5;break}return e.next=3,t();case 3:n=e.sent,f(n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[d]),r.a.createElement(x.a,{maxWidth:"md",component:"main",className:i.container},r.a.createElement(T.a,{color:"primary","aria-label":"Refresh",onClick:Object(p.a)(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f([]),e.next=3,t();case 3:n=e.sent,f(n);case 5:case"end":return e.stop()}},e)}))},r.a.createElement(K.a,null)),r.a.createElement(k.a,{className:i.table},r.a.createElement(P.a,null,r.a.createElement(I.a,null,r.a.createElement(N.a,null,"Extension"),r.a.createElement(N.a,{align:"right"},"Presence Status"),r.a.createElement(N.a,{align:"right"},"Telephony Status"),r.a.createElement(N.a,{align:"right"},"Dnd Status"),r.a.createElement(N.a,{align:"right"},"Active Calls"))),r.a.createElement(O.a,null,d.map(function(e){return r.a.createElement(I.a,{key:e.extension.id,className:i.tr,onClick:function(){v(e),C(!0)}},r.a.createElement(N.a,{component:"th",scope:"row"},e.extension.extensionNumber),r.a.createElement(N.a,{align:"right"},e.presenceStatus),r.a.createElement(N.a,{align:"right"},e.telephonyStatus),r.a.createElement(N.a,{align:"right"},e.dndStatus),r.a.createElement(N.a,{align:"right"},e.activeCalls&&e.activeCalls.length||0))}))),r.a.createElement(F,{opened:y,onClose:function(){C(!1)},presence:b,superviseCall:c,endCall:o}))},A=Object(v.a)(function(e){return{root:{flexGrow:1},center:{display:"flex",flexDirection:"column",alignItems:"center"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}),M=function(){var e=Object(p.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("subscribeKey",t=window.rcSDK.createSubscription(),n=window.rcSDK.cache().getItem("subscribeKey"))try{t.setSubscription(n)}catch(a){console.error("Cannot set subscription data",a)}else t.setEventFilters(["/account/~/presence?detailedTelephonyState=true"]);return t.on([t.events.subscribeSuccess,t.events.renewSuccess],function(){window.rcSDK.cache().setItem("subscribeKey",t.subscription())}),e.prev=5,e.next=8,t.register();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),console.error("Cannot register subscription",e.t0);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}},e,null,[[5,10]])}));return function(){return e.apply(this,arguments)}}();var V=function(){var e=A(),t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1],i=E("authState",!1),l=Object(s.a)(i,2),u=l[0],v=l[1],w=window.rcPlatform,x=Object(a.useState)(null),S=Object(s.a)(x,2),y=S[0],j=S[1];Object(a.useEffect)(function(){function e(){return(e=Object(p.a)(m.a.mark(function e(){var t,n,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.loggedIn();case 2:if(t=e.sent,v(t),!t){e.next=13;break}return n=function(){v(!1)},w.on(w.events.refreshError,n),e.next=9,M();case 9:return a=e.sent,j(a),o(!0),e.abrupt("return",function(){w.removeListener(w.events.refreshError,n)});case 13:if(-1!==window.location.search.indexOf("code=")){e.next=16;break}return o(!0),e.abrupt("return");case 16:if(!(r=window.rcPlatform.parseLoginRedirect(window.location.search)).code){e.next=21;break}return e.next=20,window.rcPlatform.login(r);case 20:window.location.assign("https://embbnux.github.io/ringcentral-presences-monitor");case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var k=null;k=c?u?r.a.createElement(z,{loadPresences:Object(p.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.rcPlatform.get("/account/~/presence?detailedTelephonyState=true");case 2:return t=e.sent,n=t.json(),e.abrupt("return",n.records);case 5:case"end":return e.stop()}},e)})),superviseCall:function(){var e=Object(p.a)(m.a.mark(function e(t,n){var a,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.rcPlatform.get("/account/~/extension/~/device");case 2:if(a=e.sent,r=a.json().records,c=r[0]){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,window.rcPlatform.post("/account/~/telephony/sessions/".concat(t.telephonySessionId,"/supervise"),{mode:"Listen",extensionNumber:n,deviceId:c.id});case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),endCall:function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.rcPlatform.delete("/account/~/telephony/sessions/".concat(t.telephonySessionId));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),subscription:y}):r.a.createElement(C,{onLogin:function(){var e=window.rcPlatform.loginUrl();window.location.assign(e)}}):r.a.createElement("div",{className:e.center},r.a.createElement(b.a,null));var O=u?r.a.createElement(f.a,{color:"inherit",onClick:function(){v(!1),window.rcSDK.platform().logout()}},"Logout"):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title},"RingCentral Presences Monitor"),O)),k)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.rcSDK=new l.a({server:"https://platform.devtest.ringcentral.com",appKey:"XpvtlSIbSFSDSVI5J9VY3A",appSecret:"jhPd2zOMQyW9-MZ8kuZQVgecjSJCIBTtGYus9HWSXcGg",redirectUri:"https://embbnux.github.io/ringcentral-presences-monitor"}),window.rcPlatform=window.rcSDK.platform(),o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){e.exports=n(112)},91:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.4d468102.chunk.js.map