(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{4188:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-swap",function(){return n(4063)}])},3111:function(e,t,n){"use strict";n.d(t,{LA:function(){return s},Qc:function(){return g},V9:function(){return d},Wf:function(){return c},ZV:function(){return h},dQ:function(){return w},hf:function(){return S},hh:function(){return p},jv:function(){return f},kH:function(){return N},oV:function(){return m},wn:function(){return v}});var a=n(9279),r=n(4627),o=n(391),i=n(5811),u=n(7979).m4.chainId,s=function(e,t){var n,a=(null!==(n=(0,r.W)({contract:(0,i.sJ)(u),method:"canWithdraw",args:e?[e,t]:[0,!1]}))&&void 0!==n?n:{}).value;return a&&a[0]},l=function(){var e,t=(null!==(e=(0,r.W)({contract:(0,i.sJ)(u),method:"getSwaps",args:[]}))&&void 0!==e?e:{}).value;return null===t||void 0===t?void 0:t[0].map((function(e){return b(e)}))},c=function(){var e;return null===(e=l())||void 0===e?void 0:e.filter((function(e){return void 0===e.taker.user}))},d=function(){var e;return null===(e=l())||void 0===e?void 0:e.filter((function(e){return void 0!==e.taker.user}))},f=function(e){var t,n=(null!==(t=(0,r.W)({contract:(0,i.sJ)(u),method:"getSwap",args:[e]}))&&void 0!==t?t:{}).value,a=null===n||void 0===n?void 0:n[0];return a?b(a):void 0},v=function(e){var t,n=(null!==(t=(0,r.W)({contract:(0,i.sJ)(u),method:"canSettle",args:[e]}))&&void 0!==t?t:{}).value;return[null===n||void 0===n?void 0:n[0],null===n||void 0===n?void 0:n[1]]},m=function(e){var t,n=(null!==(t=(0,r.W)({contract:(0,i.sJ)(u),method:"previewRewards",args:e?[e]:[0]}))&&void 0!==t?t:{}).value;return[null===n||void 0===n?void 0:n[0],null===n||void 0===n?void 0:n[1]]},w=function(){var e,t=(null!==(e=(0,r.W)({contract:(0,i.sJ)(u),method:"token",args:[]}))&&void 0!==e?e:{}).value;return null===t||void 0===t?void 0:t[0]},h=function(e){var t=(0,i.sJ)(e),n=(0,o.j)(t,"offer",{transactionName:"Offer Swap"}),a=n.send;return{offer:function(e,t,n,r){return a(e,t,n,r)},offerState:n.state}},S=function(e){var t=(0,i.sJ)(e),n=(0,o.j)(t,"take",{transactionName:"Take Swap"}),a=n.send;return{take:function(e){return a(e)},takeState:n.state}},N=function(e){var t=(0,i.sJ)(e),n=(0,o.j)(t,"cancel",{transactionName:"Cancel Swap Offer"}),a=n.send;return{cancel:function(e){return a(e)},cancelState:n.state}},p=function(e){var t=(0,i.sJ)(e),n=(0,o.j)(t,"settle",{transactionName:"Settle"}),a=n.send;return{settle:function(e){return a(e)},settleState:n.state}},g=function(e){var t=(0,i.sJ)(e),n=(0,o.j)(t,"withdraw",{transactionName:"Withdraw"}),a=n.send;return{withdraw:function(e){return a(e)},withdrawState:n.state}},b=function(e){return{id:e.id.toNumber(),maker:x(e.maker),taker:x(e.taker)}},x=function(e){var t=e.user!=a.d;return{user:t?e.user:void 0,createdAt:t?new Date(1e3*e.createdAt.toNumber()):void 0,amount:e.amount,period:e.period.toNumber(),shares:e.shares,isSettled:e.isSettled,totalWithdrawn:e.totalWithdrawn,withdrawal:{unbondNonce:0==e.withdrawal.unbondNonce.toNumber()?void 0:e.withdrawal.unbondNonce.toNumber(),isClaimed:e.withdrawal.isClaimed,amount:0==e.withdrawal.amount.toNumber()?void 0:e.withdrawal.amount}}}},4063:function(e,t,n){"use strict";n.r(t);var a=n(2222),r=n(5893),o=n(7294),i=n(1163),u=n(3156),s=n(5616),l=n(9417),c=n(8703),d=n(1737),f=n(3795),v=n(5861),m=n(6886),w=n(1330),h=n(8456),S=n(1291),N=n(7495),p=n(1762),g=n(2593),b=n(3111),x=n(5553),A=n(7737);t.default=function(){var e,t,n,j,C=(0,o.useState)(""),Z=C[0],k=C[1],O=(0,o.useState)(""),W=O[0],E=O[1],I=(0,o.useState)(""),M=I[0],z=I[1],_=(0,o.useState)(""),T=_[0],D=_[1],P=(0,o.useState)(""),F=P[0],J=P[1],y=(0,o.useState)(void 0),$=y[0],L=y[1],V=(0,N.K)(),B=V.chainId,G=V.account,K=(0,b.ZV)(B),R=K.offer,q=K.offerState,H=(0,S.Fx)(B,"MATIC",G,p.SEPOLIA.STAKING_SWAPS),Q=(0,S.ZG)(B,"MATIC",p.SEPOLIA.STAKING_SWAPS),X=Q.approveErc20,U=Q.approveErc20State,Y=(0,i.useRouter)(),ee=(0,o.useState)(!1),te=ee[0],ne=ee[1],ae=(0,o.useState)(!1),re=(ae[0],ae[1]);(0,o.useEffect)((function(){"Mining"===q.status&&(J(""),re(!0)),"Success"===q.status&&(J(""),re(!1),ne(!0),oe())}),[null===q||void 0===q?void 0:q.status,null===q||void 0===q||null===(e=q.transaction)||void 0===e?void 0:e.hash]),(0,o.useEffect)((function(){"Mining"===U.status&&(console.log(">>> Approve allowance mining"),re(!0)),"Success"===U.status&&(console.log(">>> Approve allowance success"),re(!1))}),[null===U||void 0===U?void 0:U.status,null===U||void 0===U||null===(t=U.transaction)||void 0===t?void 0:t.hash]),(0,o.useEffect)((function(){var e=!(!isNaN(Number(Z))&&Number(Z)>0)||H&&H.gte(g.O$.from(Z).mul(g.O$.from(10).pow(18))),t="Mining"===(null===U||void 0===U?void 0:U.status)||"Mining"===(null===q||void 0===q?void 0:q.status);console.log(">>> NewSwapPage - useEffect - swapSizeFirst:",Z,"allowance:",null===H||void 0===H?void 0:H.toString(),"allowanceIsEnough:",e),J(t||!1!==e?"":"Not enough allowance to create swap. (Current allowance is ".concat((0,x.formatEther)(H)," MATIC.)")),L(e)}),[H,Z,null===U||void 0===U?void 0:U.status,null===q||void 0===q?void 0:q.status]);var oe=function(){k(""),E(""),z(""),D(""),J("")},ie=function(e){var t=H,n=g.O$.from(e.swapSizeFirst).mul(g.O$.from(10).pow(18)),a=86400*e.swapDurationFirst,r=g.O$.from(e.swapSizeSecond).mul(g.O$.from(10).pow(18)),o=86400*e.swapDurationSecond;if(console.log("createSwap - userAllowance: ",t.toString(),"firstLegAmount",n.toString()),t.lt(n))return console.log("User allowance is less than swap size"),void J("Not enough allowance to create swap. (Current allowance is ".concat((0,x.formatEther)(t)," MATIC.)"));R(n.toString(),a,r.toString(),o)},ue=function(e,t){"clickaway"!==t&&ne(!1)};console.log("AAAA swapSizeFirst","undefined"===typeof Z?"undefined":(0,a.Z)(Z),Z,Number(Z),"allowance:",null===H||void 0===H?void 0:H.toString());var se=!isNaN(Number(Z))&&Number(Z)>0;return(0,r.jsx)(u.Z,{maxWidth:"md",children:(0,r.jsxs)(s.Z,{sx:{mt:4,mb:4},children:[(0,r.jsx)(s.Z,{sx:{mb:4},children:(0,r.jsx)(l.Z,{variant:"outlined",onClick:function(){Y.push("/?selectedTab=offers")},children:"Back"})}),(0,r.jsx)(c.Z,{open:te,autoHideDuration:6e3,onClose:ue,children:(0,r.jsxs)(d.Z,{onClose:ue,severity:"success",sx:{width:"100%"},children:["Swap offer created successfully!",(0,r.jsx)("br",{}),"View on block explorer: "," ",(0,r.jsx)(f.Z,{href:(0,A.q)("SEPOLIA",null===q||void 0===q||null===(n=q.transaction)||void 0===n?void 0:n.hash,"transaction"),target:"_blank",children:null===q||void 0===q||null===(j=q.transaction)||void 0===j?void 0:j.hash})]})}),(0,r.jsx)(v.Z,{variant:"h6",sx:{paddingBottom:5},children:"New Reward Swap Offer"}),(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),(Z&&W&&M&&T?isNaN(Number(Z))||isNaN(Number(W))||isNaN(Number(M))||isNaN(Number(T))?(J("All fields must be valid numbers"),0):0!==Number(Z)&&0!==Number(W)&&0!==Number(M)&&0!==Number(T)||(J("All fields should be greater than 0."),0):(J("All fields are required"),0))&&ie({swapSizeFirst:Number(Z),swapDurationFirst:Number(W),swapSizeSecond:Number(M),swapDurationSecond:Number(T)})},onChange:function(e){console.log("handleChange - val",e.target.value,"name:",e.target.name);var t=Z,n=W,a=M,r=T;switch(e.target.name){case"swapSizeFirst":t=e.target.value;break;case"swapDurationFirst":n=e.target.value;break;case"swapSizeSecond":a=e.target.value;break;case"swapDurationSecond":r=e.target.value}t&&isNaN(Number(t))||n&&isNaN(Number(n))||a&&isNaN(Number(a))||r&&isNaN(Number(r))?J("All fields must be valid numbers."):t&&0===Number(t)||n&&0===Number(n)||a&&0===Number(a)||r&&0===Number(r)?J("All fields should be greater than 0."):!0===$&&J("")},children:(0,r.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,r.jsxs)(m.ZP,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(v.Z,{children:"Maker Side"}),(0,r.jsx)(w.Z,{name:"swapSizeFirst",label:"Size (MATIC)",variant:"outlined",fullWidth:!0,value:Z,onChange:function(e){return k(e.target.value)},margin:"normal",autoComplete:"off"}),(0,r.jsx)(w.Z,{name:"swapDurationFirst",label:"Duration (days)",variant:"outlined",fullWidth:!0,value:W,onChange:function(e){return E(e.target.value)},margin:"normal",autoComplete:"off"})]}),(0,r.jsxs)(m.ZP,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(v.Z,{children:"Taker Side"}),(0,r.jsx)(w.Z,{name:"swapSizeSecond",label:"Size (MATIC)",variant:"outlined",fullWidth:!0,value:M,onChange:function(e){return z(e.target.value)},margin:"normal",autoComplete:"off"}),(0,r.jsx)(w.Z,{name:"swapDurationSecond",label:"Duration (days)",variant:"outlined",fullWidth:!0,value:T,onChange:function(e){return D(e.target.value)},margin:"normal",autoComplete:"off"})]}),(0,r.jsx)(m.ZP,{xs:12,textAlign:"center",children:(0,r.jsxs)(v.Z,{style:{paddingBottom:10},color:"error",children:[F," \xa0"]})}),(0,r.jsxs)(m.ZP,{xs:12,textAlign:"center",children:[0==$&&se&&(0,r.jsx)(l.Z,{onClick:function(){Number(Z);var e=g.O$.from(Z).mul(g.O$.from(10).pow(18));X(e.toString())},variant:"contained",color:"primary",disabled:"Mining"===U.status,startIcon:"Mining"===U.status?(0,r.jsx)(h.Z,{size:20}):null,children:"Approve MATIC transfer"}),(1==$||0==se)&&(0,r.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",disabled:"Mining"===q.status,startIcon:"Mining"===q.status?(0,r.jsx)(h.Z,{size:20}):null,children:"Mining"===q.status?"Submitting Swap Offer...":"Submit Swap Offer "})]})]})})]})})}}},function(e){e.O(0,[430,126,774,888,179],(function(){return t=4188,e(e.s=t);var t}));var t=e.O();_N_E=t}]);