(this["webpackJsonpmemomry-game"]=this["webpackJsonpmemomry-game"]||[]).push([[0],{29:function(e,c,t){},30:function(e,c,t){"use strict";t.r(c);var n,a,i=t(0),r=t.n(i),s=t(13),b=t.n(s),d=t(3),o=t(11),f=t(8),u=t.n(f),j=t(14),l=t(2),m=t(4),h=m.a.h1(n||(n=Object(d.a)(["\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: ",";\n} "])),(function(e){return e.spotify?"#1db954":"#fff"})),O=(m.a.h2(a||(a=Object(d.a)(["\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1db954;\n}"]))),t(1));var g=function(e){var c=e.title;return Object(O.jsx)("div",{className:"title",children:Object(O.jsx)(h,{children:c})})};var p=function(e){return Object(O.jsxs)("div",{className:"score-board",children:[Object(O.jsxs)("div",{children:["Score: ",e.scores.score]}),Object(O.jsxs)("div",{children:["Best: ",e.scores.bestScore]})]})};var v=function(e){return Object(O.jsx)("div",{className:"loading",children:Object(O.jsxs)("h1",{children:["Loading Lv",e.level]})})};var x,k=function(e){return Object(O.jsxs)("div",{className:"congratulation",children:[Object(O.jsx)("h1",{children:"WOWZA!!!"}),Object(O.jsx)("h1",{children:"YOU HAVE A GREAT MEMORY!"}),Object(O.jsxs)("h1",{children:["Restarting in ",e.remainingSeconds," seconds..."]})]})},S=(t(29),m.a.img(x||(x=Object(d.a)(["\n  width: 200px;\n  height: 200px;\n  border-radius: 0.5rem;\n  box-shadow: 0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.45);\n\n  &:hover {\n    cursor: pointer;\n  }\n"])))),w=t(18);function E(e){for(var c,t,n=Object(w.a)(e),a=n.length;a;)t=Math.floor(Math.random()*a--),c=n[a],n[a]=n[t],n[t]=c;return n}var y,M=["https://i.scdn.co/image/ab67616d0000b273a2df18ac09a56166a5ed4ecb","https://i.scdn.co/image/ab67616d0000b27357b703060f763bf2d0a140d1","https://i.scdn.co/image/ab67616d0000b273daf7982ccaad9ca5e1603792","https://i.scdn.co/image/ab67616d0000b2733b2a32bfe8eb5e798a355b17","https://i.scdn.co/image/ab67616d0000b2735f9608114e13bb4e5e6b0399","https://i.scdn.co/image/ab67616d0000b2734a6d5da9e8c6bb38a2e62f6f","https://i.scdn.co/image/ab67616d0000b27332ba888c8c9b19cca68ca58d","https://i.scdn.co/image/ab67616d0000b2739633cfd2e42a610f3dafa801","https://i.scdn.co/image/ab67616d0000b27375c7a650fd82c52dc7746267","https://i.scdn.co/image/ab67616d0000b2730a4449bb83bbfccfab5c0c3a","https://i.scdn.co/image/ab67616d0000b2737ac73c439819e81f544cc023","https://i.scdn.co/image/ab67616d0000b273e09cf2e27583bc4ad22269f2","https://i.scdn.co/image/ab67616d0000b273e93846f5423feb3d0961fab1","https://i.scdn.co/image/ab67616d0000b2739abe2ff421191addd871b98a","https://i.scdn.co/image/ab67616d0000b273a7fcbfdd783b559de31d181b","https://i.scdn.co/image/ab67616d0000b273e7ef3c292ad04a42a708fee0","https://i.scdn.co/image/ab67616d0000b27395768aaeb6607d53450a527b","https://i.scdn.co/image/ab67616d0000b2735c041fe9e3c9de436047d86b","https://i.scdn.co/image/ab67616d0000b2732bf83c1a01156fb93b564160","https://i.scdn.co/image/ab67616d0000b2734b378770cd6b77e86f8a6288"],N=t(32),C=function(e){var c=e.src,t=e.onClickHandler;return Object(O.jsx)(S,{src:c,onClick:t})},H=function(e){var c=e.cards,t=e.onClickHandler;return Object(O.jsx)("div",{className:"cards",children:c.map((function(e){return Object(O.jsx)(C,{src:e.imgSrc,onClickHandler:function(c){return t(c,e.id)}},e.id)}))})},A=function(e){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)(g,{title:"K-POP Memory Game"}),Object(O.jsx)(p,{scores:e.scores})]})},I=m.a.div(y||(y=Object(d.a)(["\n  .cards {\n    padding: 2rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 200px);\n    column-gap: 2rem;\n    row-gap: 2rem;\n  }\n"]))),R=function(){var e=Object(i.useState)(0),c=Object(l.a)(e,2),t=c[0],n=c[1],a=Object(i.useState)(0),r=Object(l.a)(a,2),s=r[0],b=r[1],d=Object(i.useState)([]),f=Object(l.a)(d,2),m=f[0],h=f[1],g=Object(i.useState)(1),p=Object(l.a)(g,2),x=p[0],S=p[1],w=Object(i.useState)([]),y=Object(l.a)(w,2),C=y[0],R=y[1],T=Object(i.useState)(!1),z=Object(l.a)(T,2),B=z[0],G=z[1],J=Object(i.useState)(!1),L=Object(l.a)(J,2),P=L[0],W=L[1],Y=Object(i.useState)(5),K=Object(l.a)(Y,2),U=K[0],V=K[1];Object(i.useEffect)((function(){var e=[];(function(){var c=Object(j.a)(u.a.mark((function c(){var t;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=M.map((function(e){return{id:Object(N.a)(),imgSrc:e,clicked:!1}})),console.log(e),h(t);case 3:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[]),Object(i.useEffect)((function(){var e=E(m);switch(x){case 1:R(e.slice(0,2));break;case 2:G(!0),R(e.slice(0,4));break;case 3:G(!0),R(e.slice(0,6));break;default:W(!0)}}),[x,m]),Object(i.useEffect)((function(){0!==C.length&&(C.every((function(e){return e.clicked}))&&S((function(e){return e+1})))}),[C]),Object(i.useEffect)((function(){B&&setTimeout((function(){G(!1)}),2e3)}),[B]),Object(i.useEffect)((function(){if(P){var e=setInterval((function(){V((function(e){return e-1}))}),1e3);setTimeout((function(){W(!1),Z(),clearInterval(e)}),5e3)}}),[P]);var Z=function(){S(1),n(0),b(0)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(A,{scores:{score:t,bestScore:s}}),Object(O.jsx)(I,{children:!B&&!P&&Object(O.jsx)(H,{cards:C,onClickHandler:function(e,c){var a=C.find((function(e){return e.id===c}));if(!0===(null===a||void 0===a?void 0:a.clicked))return function(){S(1),n(0);var e=E(m);R(e.slice(0,2))}();var i=C.map((function(e){return e.id===c?Object(o.a)(Object(o.a)({},e),{},{clicked:!e.clicked}):e}));R(E(i)),n((function(e){return e+1})),t>=s&&b((function(e){return e+1}))}})}),B?Object(O.jsx)(v,{level:x}):null,P?Object(O.jsx)(k,{remainingSeconds:U}):null]})};b.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d4df0719.chunk.js.map