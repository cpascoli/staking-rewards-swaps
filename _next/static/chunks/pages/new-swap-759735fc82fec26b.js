(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{4188:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-swap",function(){return n(4063)}])},3111:function(e,t,n){"use strict";n.d(t,{LA:function(){return s},Qc:function(){return b},TV:function(){return m},V9:function(){return d},Wf:function(){return c},ZV:function(){return S},dQ:function(){return h},hf:function(){return p},hh:function(){return N},jv:function(){return f},kH:function(){return g},oV:function(){return w},wn:function(){return v}});var r=n(9279),a=n(4627),i=n(391),o=n(5811),u=n(7979).m4.chainId,s=function(e,t){var n,r=(null!==(n=(0,a.W)({contract:(0,o.sJ)(u),method:"canWithdraw",args:e?[e,t]:[0,!1]}))&&void 0!==n?n:{}).value;return r&&r[0]},l=function(){var e,t=(null!==(e=(0,a.W)({contract:(0,o.sJ)(u),method:"getSwaps",args:[]}))&&void 0!==e?e:{}).value;return null===t||void 0===t?void 0:t[0].map((function(e){return x(e)}))},c=function(){var e;return null===(e=l())||void 0===e?void 0:e.filter((function(e){return void 0===e.taker.user}))},d=function(){var e;return null===(e=l())||void 0===e?void 0:e.filter((function(e){return void 0!==e.taker.user}))},f=function(e){var t,n=(null!==(t=(0,a.W)({contract:(0,o.sJ)(u),method:"getSwap",args:[e]}))&&void 0!==t?t:{}).value,r=null===n||void 0===n?void 0:n[0];if(void 0!==r)return x(r)},v=function(e){var t,n=(null!==(t=(0,a.W)({contract:(0,o.sJ)(u),method:"canSettle",args:[e]}))&&void 0!==t?t:{}).value;return[null===n||void 0===n?void 0:n[0],null===n||void 0===n?void 0:n[1]]},m=function(e){var t=(0,o.sJ)(u),n=e.map((function(e){return{contract:t,method:"canSettle",args:[e]}})),r=(0,a.G)(n),i={};return r.forEach((function(t,n){var r,a;i[e[n]]=[!0===(null===t||void 0===t||null===(r=t.value)||void 0===r?void 0:r[0]),!0===(null===t||void 0===t||null===(a=t.value)||void 0===a?void 0:a[1])]})),i},w=function(e){var t,n=(null!==(t=(0,a.W)({contract:(0,o.sJ)(u),method:"previewRewards",args:e?[e]:[0]}))&&void 0!==t?t:{}).value;return[null===n||void 0===n?void 0:n[0],null===n||void 0===n?void 0:n[1]]},h=function(){var e,t=(null!==(e=(0,a.W)({contract:(0,o.sJ)(u),method:"token",args:[]}))&&void 0!==e?e:{}).value;return null===t||void 0===t?void 0:t[0]},S=function(e){var t=(0,o.sJ)(e),n=(0,i.j)(t,"offer",{transactionName:"Offer Swap"}),r=n.send;return{offer:function(e,t,n,a){return r(e,t,n,a)},offerState:n.state}},p=function(e){var t=(0,o.sJ)(e),n=(0,i.j)(t,"take",{transactionName:"Take Swap"}),r=n.send;return{take:function(e){return r(e)},takeState:n.state}},g=function(e){var t=(0,o.sJ)(e),n=(0,i.j)(t,"cancel",{transactionName:"Cancel Swap Offer"}),r=n.send;return{cancel:function(e){return r(e)},cancelState:n.state}},N=function(e){var t=(0,o.sJ)(e),n=(0,i.j)(t,"settle",{transactionName:"Settle"}),r=n.send;return{settle:function(e){return r(e)},settleState:n.state}},b=function(e){var t=(0,o.sJ)(e),n=(0,i.j)(t,"withdraw",{transactionName:"Withdraw"}),r=n.send;return{withdraw:function(e){return r(e)},withdrawState:n.state}},x=function(e){return{id:e.id.toNumber(),maker:j(e.maker),taker:j(e.taker)}},j=function(e){var t=e.user!=r.d;return{user:t?e.user:void 0,createdAt:t?new Date(1e3*e.createdAt.toNumber()):void 0,amount:e.amount,period:e.period.toNumber(),shares:e.shares,isSettled:e.isSettled,totalWithdrawn:e.totalWithdrawn,withdrawal:{unbondNonce:0==e.withdrawal.unbondNonce.toNumber()?void 0:e.withdrawal.unbondNonce.toNumber(),isClaimed:e.withdrawal.isClaimed,amount:e.withdrawal.amount.isZero()?void 0:e.withdrawal.amount}}}},4063:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),i=n(1163),o=n(2593),u=n(7495),s=n(7979),l=n(3156),c=n(5616),d=n(9417),f=n(8703),v=n(1737),m=n(3795),w=n(5861),h=n(6886),S=n(1330),p=n(8456),g=n(1291),N=n(1762),b=n(3111),x=n(5553),j=n(7737);t.default=function(){var e,t,n,A,C=(0,a.useState)(""),Z=C[0],k=C[1],M=(0,a.useState)(""),E=M[0],I=M[1],T=(0,a.useState)(""),O=T[0],W=T[1],z=(0,a.useState)(""),P=z[0],_=z[1],D=(0,a.useState)(""),F=D[0],J=D[1],y=(0,a.useState)(!1),$=y[0],V=y[1],L=(0,a.useState)(!1),G=L[0],B=L[1],K=(0,u.K)(),R=K.chainId,q=K.account,H=(0,b.ZV)(R),Q=H.offer,X=H.offerState,U=(0,g.Fx)(R,"MATIC",q,N.SEPOLIA.STAKING_SWAPS),Y=(0,g.ZG)(R,"MATIC",N.SEPOLIA.STAKING_SWAPS),ee=Y.approveErc20,te=Y.approveErc20State,ne=(0,i.useRouter)(),re=(0,a.useState)(!1),ae=re[0],ie=re[1],oe=(0,a.useState)(!1),ue=(oe[0],oe[1]);(0,a.useEffect)((function(){"Mining"===X.status&&(J(""),ue(!0)),"Success"===X.status&&(J(""),ue(!1),ie(!0),se()),"Fail"===X.status&&(ue(!1),J("Transaction failed. (".concat(X.errorMessage,")"))),"Exception"===X.status&&(ue(!1),J(X.errorMessage))}),[null===X||void 0===X?void 0:X.status,null===X||void 0===X||null===(e=X.transaction)||void 0===e?void 0:e.hash]),(0,a.useEffect)((function(){"Mining"===te.status&&(ue(!0),B(!0)),"Success"===te.status&&ue(!1),"Fail"===te.status&&(ue(!1),J("Transaction failed. (".concat(te.errorMessage,")"))),"Exception"===te.status&&(ue(!1),J(te.errorMessage))}),[null===te||void 0===te?void 0:te.status,null===te||void 0===te||null===(t=te.transaction)||void 0===t?void 0:t.hash]),(0,a.useEffect)((function(){var e=!(!isNaN(Number(Z))&&Number(Z)>0)||U&&U.gte(o.O$.from(Z).mul(o.O$.from(10).pow(18)));"Mining"===(null===te||void 0===te?void 0:te.status)||null===X||void 0===X||X.status;console.log(">>> NewSwapPage - useEffect - swapSizeFirst:",Z,"allowance:",null===U||void 0===U?void 0:U.toString(),"allowanceIsEnough:",e),!0===e?(V(!1),J("")):(V(!0),U&&J("Approve MATIC transfer to create swap. (Current allowance is ".concat((0,x.formatEther)(U)," MATIC.)")))}),[U,Z]),(0,a.useEffect)((function(){B(!1)}),[U]);var se=function(){k(""),I(""),W(""),_(""),J("")},le=function(e){var t=U,n=o.O$.from(e.swapSizeFirst).mul(o.O$.from(10).pow(18)),r=86400*e.swapDurationFirst,a=o.O$.from(e.swapSizeSecond).mul(o.O$.from(10).pow(18)),i=86400*e.swapDurationSecond;if(console.log("createSwap - userAllowance: ",t.toString(),"firstLegAmount",n.toString()),t.lt(n))return console.log("User allowance is less than swap size"),V(!0),void J("Approve MATIC transfer to create the swap. (Current allowance is ".concat((0,x.formatEther)(t)," MATIC.)"));Q(n.toString(),r,a.toString(),i)},ce=function(e,t){"clickaway"!==t&&ie(!1)};console.log(">> render new-swap - swapSizeFirst",Number(Z),"allowance:",null===U||void 0===U?void 0:U.toString());var de=!isNaN(Number(Z))&&Number(Z)>0;return(0,r.jsx)(l.Z,{maxWidth:"md",children:(0,r.jsxs)(c.Z,{sx:{mt:4,mb:4},children:[(0,r.jsx)(c.Z,{sx:{mb:4},children:(0,r.jsx)(d.Z,{variant:"outlined",onClick:function(){ne.push("/?selectedTab=offers")},children:"Back"})}),(0,r.jsx)(f.Z,{open:ae,autoHideDuration:6e3,onClose:ce,children:(0,r.jsxs)(v.Z,{onClose:ce,severity:"success",sx:{width:"100%"},children:["Swap offer created successfully!",(0,r.jsx)("br",{}),"View on block explorer: "," ",(0,r.jsx)(m.Z,{href:(0,j.q)("SEPOLIA",null===X||void 0===X||null===(n=X.transaction)||void 0===n?void 0:n.hash,"transaction"),target:"_blank",children:null===X||void 0===X||null===(A=X.transaction)||void 0===A?void 0:A.hash})]})}),(0,r.jsx)(w.Z,{variant:"h6",sx:{paddingBottom:5},children:"New Reward Swap Offer"}),(0,r.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),Z&&E&&O&&P?isNaN(Number(Z))||isNaN(Number(E))||isNaN(Number(O))||isNaN(Number(P))?(J("All fields must be valid numbers"),0):0!==Number(Z)&&0!==Number(E)&&0!==Number(O)&&0!==Number(P)||(J("All fields should be greater than 0."),0):(J("All fields are required"),0)){if(void 0===q||R!==s.m4.chainId)return void J("Please connect your wallet to Sepolia.");le({swapSizeFirst:Number(Z),swapDurationFirst:Number(E),swapSizeSecond:Number(O),swapDurationSecond:Number(P)})}},onChange:function(e){console.log("handleChange - val",e.target.value,"name:",e.target.name);var t=Z,n=E,r=O,a=P;switch(e.target.name){case"swapSizeFirst":t=e.target.value;break;case"swapDurationFirst":n=e.target.value;break;case"swapSizeSecond":r=e.target.value;break;case"swapDurationSecond":a=e.target.value}t&&isNaN(Number(t))||n&&isNaN(Number(n))||r&&isNaN(Number(r))||a&&isNaN(Number(a))?J("All fields must be valid numbers."):(t&&0===Number(t)||n&&0===Number(n)||r&&0===Number(r)||a&&0===Number(a))&&J("All fields should be greater than 0.")},children:(0,r.jsxs)(h.ZP,{container:!0,spacing:4,children:[(0,r.jsxs)(h.ZP,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(w.Z,{children:"Maker Side"}),(0,r.jsx)(S.Z,{name:"swapSizeFirst",label:"Size (MATIC)",variant:"outlined",fullWidth:!0,value:Z,onChange:function(e){return k(e.target.value)},margin:"normal",autoComplete:"off"}),(0,r.jsx)(S.Z,{name:"swapDurationFirst",label:"Duration (days)",variant:"outlined",fullWidth:!0,value:E,onChange:function(e){return I(e.target.value)},margin:"normal",autoComplete:"off"})]}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(w.Z,{children:"Taker Side"}),(0,r.jsx)(S.Z,{name:"swapSizeSecond",label:"Size (MATIC)",variant:"outlined",fullWidth:!0,value:O,onChange:function(e){return W(e.target.value)},margin:"normal",autoComplete:"off"}),(0,r.jsx)(S.Z,{name:"swapDurationSecond",label:"Duration (days)",variant:"outlined",fullWidth:!0,value:P,onChange:function(e){return _(e.target.value)},margin:"normal",autoComplete:"off"})]}),(0,r.jsx)(h.ZP,{xs:12,textAlign:"center",children:(0,r.jsxs)(w.Z,{style:{paddingBottom:10},color:"error",children:[F," \xa0"]})}),(0,r.jsxs)(h.ZP,{xs:12,textAlign:"center",children:[!0===$&&de&&(0,r.jsx)(d.Z,{onClick:function(){if(void 0!==q&&R===s.m4.chainId){var e=o.O$.from(Z).mul(o.O$.from(10).pow(18));ee(e.toString())}else J("Please connect your wallet to Sepolia.")},variant:"contained",color:"primary",disabled:"Mining"===te.status||!0===G,startIcon:"Mining"===te.status||!0===G?(0,r.jsx)(p.Z,{size:20}):null,children:"Approve MATIC transfer"}),(0==$||0==de)&&(0,r.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:"Mining"===X.status,startIcon:"Mining"===X.status?(0,r.jsx)(p.Z,{size:20}):null,children:"Mining"===X.status?"Submitting Swap Offer...":"Submit Swap Offer "})]})]})})]})})}}},function(e){e.O(0,[901,628,235,774,888,179],(function(){return t=4188,e(e.s=t);var t}));var t=e.O();_N_E=t}]);