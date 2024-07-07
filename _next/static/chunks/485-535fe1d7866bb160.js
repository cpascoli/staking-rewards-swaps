(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{2485:function(t,n,e){"use strict";e.d(n,{Z:function(){return J}});var r=e(5893),i=e(7294),a=e(7495),s=e(3795),d=e(5616),o=e(9417),u=e(8456),c=e(5861),l=e(8703),h=e(1737),v=e(3111),f=e(9279),w=e(4627),x=e(5811),j=e(7979),m=e(1762),p=j.m4.chainId,S=function(t){var n,e=m.SEPOLIA.STAKER,r=(null!==(n=(0,w.W)({contract:(0,x._k)(p),method:"unbonds_new",args:t?[e,t]:[f.d,0]}))&&void 0!==n?n:{}).value;return r&&r[1].toNumber()},k=j.m4.chainId,g=e(7737),N=e(1435),b=e(1385),C=e.n(b),A=e(6332),W=e(4721),Z=e(3946),I=e(5697),M=function(t){var n=t.message;return(0,r.jsx)(A.Z,{title:n,style:{maxHeight:20},children:(0,r.jsx)(Z.Z,{children:(0,r.jsx)(W.Z,{})})})};M.propTypes={message:e.n(I)().string.isRequired};var _=M,J=function(t){var n,e,f,j=t.swapId,m=t.side,p=t.address,b=t.size,A=t.duration,W=t.createdAt,Z=t.takenAt,I=t.rewards,M=t.shares,J=t.isSettled,y=t.isClaimed,E=t.canSettle,T=t.withdrawNonce,L=(0,a.K)(),O=L.chainId,R=L.account,q=(0,v.LA)(j,"Maker"===m),D=(0,v.Qc)(O),Q=D.withdraw,V=D.withdrawState,z=function(){var t,n=(null!==(t=(0,w.W)({contract:(0,x.Wp)(k),method:"getCurrentEpoch",args:[]}))&&void 0!==t?t:{}).value;return n&&n[0].toNumber()}(),B=S(T),H=(0,i.useState)(!1),P=H[0],K=H[1],U=(0,i.useState)(!1),X=(U[0],U[1]),Y=void 0;if(void 0!==q&&B&&z){var F=z-B;Y=F>=80?0:80-F}(0,i.useEffect)((function(){console.log(">> SwapSide - useEffect - withdrawState:",null===V||void 0===V?void 0:V.status),"Mining"===V.status&&X(!0),"Success"===V.status&&(X(!1),K(!0))}),[null===V||void 0===V?void 0:V.status,null===V||void 0===V||null===(n=V.transaction)||void 0===n?void 0:n.hash]);var G=function(t,n){"clickaway"!==n&&K(!1)};return(0,r.jsxs)("div",{className:C().swapside,children:[(0,r.jsx)("h2",{children:"Maker"===m?"Maker Side":"Taker Side"}),(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"User"}),(0,r.jsxs)("td",{children:[p&&(0,r.jsx)(s.Z,{href:(0,g.q)("SEPOLIA",p),target:"_blank",children:(0,g.X)(p)}),p===R&&(0,r.jsx)("span",{style:{marginLeft:10},children:"(You)"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Size:"}),(0,r.jsxs)("td",{children:[(0,N.Bw)(b,2)," MATIC"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Duration:"}),(0,r.jsxs)("td",{children:[A/86400," days ",Z&&(0,r.jsx)(_,{message:(0,N._Q)(Z,A)})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Maker"==m?"Created At":"Taken At"}),(0,r.jsx)("td",{children:"Maker"==m?(0,N.p6)(W):Z&&(0,N.p6)(Z)})]}),M&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Shares:"}),(0,r.jsxs)("td",{children:[" ",(0,N.Bw)(M,10)," TruMATIC"]})]}),I&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Rewards:"}),(0,r.jsxs)("td",{children:[I&&(0,N.Bw)(I,10)," MATIC"]})]}),J&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Settled:"}),(0,r.jsx)("td",{children:J?"\u2705 ":"No"})]}),0==J&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Can Settle:"}),(0,r.jsx)("td",{children:E?"\u2705 ":"No"})]}),1==J&&void 0!==y&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Claimed:"}),(0,r.jsx)("td",{children:y?"\u2705":"No"})]})]})}),1==J&&0==y&&void 0!==q&&R===p&&(0,r.jsx)(d.Z,{textAlign:"center",children:(0,r.jsxs)(d.Z,{sx:{mt:2,marginLeft:"auto",marginRight:"auto"},alignItems:"center",style:{maxWidth:200},children:[(0,r.jsx)(o.Z,{variant:"outlined",onClick:function(){R===p?Q(j):console.log("User is not the owner of this side of the swap")},disabled:0==q||"Mining"===V.status,startIcon:"Mining"===V.status?(0,r.jsx)(u.Z,{size:20}):null,children:"Claim"}),(0,r.jsxs)(c.Z,{sx:{mt:1},variant:"body2",color:"error",hidden:0===Y,children:["wait ",Y," epochs"]})]})}),(0,r.jsx)(l.Z,{open:P,autoHideDuration:6e3,onClose:G,children:(0,r.jsxs)(h.Z,{onClose:G,severity:"success",sx:{width:"100%"},children:["Swap principal claimed and rewards paid!",(0,r.jsx)("br",{}),"View on block explorer: "," ",(0,r.jsx)(s.Z,{href:(0,g.q)("SEPOLIA",null===V||void 0===V||null===(e=V.transaction)||void 0===e?void 0:e.hash,"transaction"),target:"_blank",children:null===V||void 0===V||null===(f=V.transaction)||void 0===f?void 0:f.hash})]})})]})}},3111:function(t,n,e){"use strict";e.d(n,{LA:function(){return o},Qc:function(){return S},V9:function(){return l},Wf:function(){return c},ZV:function(){return x},dQ:function(){return w},hf:function(){return j},hh:function(){return p},jv:function(){return h},kH:function(){return m},oV:function(){return f},wn:function(){return v}});var r=e(9279),i=e(4627),a=e(391),s=e(5811),d=e(7979).m4.chainId,o=function(t,n){var e,r=(null!==(e=(0,i.W)({contract:(0,s.sJ)(d),method:"canWithdraw",args:t?[t,n]:[0,!1]}))&&void 0!==e?e:{}).value;return r&&r[0]},u=function(){var t,n=(null!==(t=(0,i.W)({contract:(0,s.sJ)(d),method:"getSwaps",args:[]}))&&void 0!==t?t:{}).value;return null===n||void 0===n?void 0:n[0].map((function(t){return k(t)}))},c=function(){var t;return null===(t=u())||void 0===t?void 0:t.filter((function(t){return void 0===t.taker.user}))},l=function(){var t;return null===(t=u())||void 0===t?void 0:t.filter((function(t){return void 0!==t.taker.user}))},h=function(t){var n,e=(null!==(n=(0,i.W)({contract:(0,s.sJ)(d),method:"getSwap",args:[t]}))&&void 0!==n?n:{}).value,r=null===e||void 0===e?void 0:e[0];return r?k(r):void 0},v=function(t){var n,e=(null!==(n=(0,i.W)({contract:(0,s.sJ)(d),method:"canSettle",args:[t]}))&&void 0!==n?n:{}).value;return[null===e||void 0===e?void 0:e[0],null===e||void 0===e?void 0:e[1]]},f=function(t){var n,e=(null!==(n=(0,i.W)({contract:(0,s.sJ)(d),method:"previewRewards",args:t?[t]:[0]}))&&void 0!==n?n:{}).value;return[null===e||void 0===e?void 0:e[0],null===e||void 0===e?void 0:e[1]]},w=function(){var t,n=(null!==(t=(0,i.W)({contract:(0,s.sJ)(d),method:"token",args:[]}))&&void 0!==t?t:{}).value;return null===n||void 0===n?void 0:n[0]},x=function(t){var n=(0,s.sJ)(t),e=(0,a.j)(n,"offer",{transactionName:"Offer Swap"}),r=e.send;return{offer:function(t,n,e,i){return r(t,n,e,i)},offerState:e.state}},j=function(t){var n=(0,s.sJ)(t),e=(0,a.j)(n,"take",{transactionName:"Take Swap"}),r=e.send;return{take:function(t){return r(t)},takeState:e.state}},m=function(t){var n=(0,s.sJ)(t),e=(0,a.j)(n,"cancel",{transactionName:"Cancel Swap Offer"}),r=e.send;return{cancel:function(t){return r(t)},cancelState:e.state}},p=function(t){var n=(0,s.sJ)(t),e=(0,a.j)(n,"settle",{transactionName:"Settle"}),r=e.send;return{settle:function(t){return r(t)},settleState:e.state}},S=function(t){var n=(0,s.sJ)(t),e=(0,a.j)(n,"withdraw",{transactionName:"Withdraw"}),r=e.send;return{withdraw:function(t){return r(t)},withdrawState:e.state}},k=function(t){return{id:t.id.toNumber(),maker:g(t.maker),taker:g(t.taker)}},g=function(t){var n=t.user!=r.d;return{user:n?t.user:void 0,createdAt:n?new Date(1e3*t.createdAt.toNumber()):void 0,amount:t.amount,period:t.period.toNumber(),shares:t.shares,isSettled:t.isSettled,totalWithdrawn:t.totalWithdrawn,withdrawal:{unbondNonce:0==t.withdrawal.unbondNonce.toNumber()?void 0:t.withdrawal.unbondNonce.toNumber(),isClaimed:t.withdrawal.isClaimed,amount:0==t.withdrawal.amount.toNumber()?void 0:t.withdrawal.amount}}}},1385:function(t){t.exports={swapside:"SwapSide_swapside__WMDqp"}}}]);