(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{9716:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swap/[id]",function(){return r(9319)}])},9319:function(e,t,r){"use strict";r.r(t);var n=r(603),a=r(5893),i=r(7294),s=r(1163),o=r(7495),d=r(7979),l=r(5616),c=r(9417),u=r(8456),h=r(5861),f=r(8703),m=r(1737),w=r(3795),p=r(7737),k=r(3111),v=r(2485);t.default=function(){var e,t,r,x=(0,s.useRouter)(),S=x.query.id,b=(0,o.K)(),y=b.chainId,j=b.account,g=(0,k.jv)(Number(S)),A=(0,n.Z)((0,k.wn)(Number(S)),2),Z=A[0],N=A[1],_=(0,n.Z)((0,k.oV)(Number(S)),2),C=_[0],E=_[1],I=(0,k.hh)(y),T=I.settle,O=I.settleState,M=(0,i.useState)(!1),P=M[0],z=M[1],B=(0,i.useState)(!1),R=(B[0],B[1]),q=(0,i.useState)(""),D=q[0],L=q[1];(0,i.useEffect)((function(){console.log(">> OfferDetailPage - useEffect - status:",null===O||void 0===O?void 0:O.status),"Mining"===O.status&&(R(!0),L("")),"Success"===O.status&&(R(!1),z(!0),L("")),"Exception"===O.status&&L(O.errorMessage)}),[null===O||void 0===O?void 0:O.status,null===O||void 0===O||null===(e=O.transaction)||void 0===e?void 0:e.hash]);var V=function(e,t){"clickaway"!==t&&z(!1)};return g?(0,a.jsxs)("div",{style:{paddingTop:20,paddingBottom:20},children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:function(){x.push("/?selectedTab=swaps")},children:"Back"}),(0,a.jsxs)("h1",{children:["Swap ",S]}),g&&(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,a.jsx)(v.Z,{swapId:Number(S),side:"Maker",address:g.maker.user,size:g.maker.amount,createdAt:g.maker.createdAt,takenAt:g.taker.createdAt,duration:g.maker.period,shares:g.maker.shares,rewards:C,otherSideRewards:E,isSettled:g.maker.isSettled,isClaimed:g.maker.withdrawal.isClaimed,canSettle:Z,withdrawNonce:g.maker.withdrawal.unbondNonce}),(0,a.jsx)(v.Z,{swapId:Number(S),side:"Taker",address:g.taker.user,size:g.taker.amount,createdAt:g.maker.createdAt,takenAt:g.taker.createdAt,duration:g.taker.period,shares:g.taker.shares,rewards:E,otherSideRewards:C,isSettled:g.taker.isSettled,isClaimed:g.taker.withdrawal.isClaimed,canSettle:N,withdrawNonce:g.taker.withdrawal.unbondNonce})]}),(0,a.jsxs)(l.Z,{sx:{mt:2},textAlign:"center",hidden:g.maker.isSettled&&g.taker.isSettled,children:[(0,a.jsx)(c.Z,{variant:"contained",color:"primary",disabled:!Z&&!N||"Mining"===O.status,onClick:function(){void 0!==j&&y===d.m4.chainId?(L(""),T(Number(S))):L("Please connect your wallet to Sepolia.")},startIcon:"Mining"===O.status?(0,a.jsx)(u.Z,{size:20}):null,children:"Settle Swap"}),D&&(0,a.jsx)(l.Z,{sx:{paddingTop:1},children:(0,a.jsx)(h.Z,{color:"error",children:D})})]})]}),(0,a.jsx)(f.Z,{open:P,autoHideDuration:1e4,onClose:V,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,a.jsxs)(m.Z,{onClose:V,severity:"success",sx:{width:"100%"},children:["Swap settled!",(0,a.jsx)("br",{}),"View on block explorer: "," ",(0,a.jsx)(w.Z,{href:(0,p.q)("SEPOLIA",null===O||void 0===O||null===(t=O.transaction)||void 0===t?void 0:t.hash,"transaction"),target:"_blank",children:null===O||void 0===O||null===(r=O.transaction)||void 0===r?void 0:r.hash})]})})]}):(0,a.jsx)(l.Z,{textAlign:"center",sx:{marginTop:10,marginBottom:8},children:"Loading..."})}},603:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return a}})}},function(e){e.O(0,[901,156,628,485,774,888,179],(function(){return t=9716,e(e.s=t);var t}));var t=e.O();_N_E=t}]);