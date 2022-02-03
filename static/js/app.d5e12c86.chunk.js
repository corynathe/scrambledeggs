(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{82:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var o=n(6),i=n.n(o),r=n(20),a=n.n(r),c=n(21),s=n.n(c),l=n(0),b=n(14),j=n(18),u=n(2),y=[{rowCount:2,colCount:3,size:90,name:"Easy",icons:["star","star-o","star-o"]},{rowCount:4,colCount:3,size:60,name:"Medium",icons:["star","star","star-o"]},{rowCount:5,colCount:4,size:45,name:"Hard",icons:["star","star","star"]}],p=["darkblue","#92f7a8","magenta","#28b59e","purple","orange","lightblue","black","red","maroon","darkgreen","pink","tan","grey","#f56c42","#42ecf5","#14c93b","#c996f2","#4970c4","#785625"],f={egg:{title:"Scrambled Eggs",playAgain:"Play Again",iconContainer:{type:"FontAwesome",name:"shopping-basket",sizeFactor:1},icon:{type:"MaterialCommunityIcons",name:"egg-easter"},info:["The farmers eggs have all been scrambled!","Tap on the baskets to find the egg which is still in the correct place."]},penguin:{title:"Penguin Town",playAgain:"Play Again",iconContainer:{type:"FontAwesome5",name:"igloo",sizeFactor:1},icon:{type:"MaterialCommunityIcons",name:"penguin"},info:["The penguins are on the move!","Tap on the igloo to find the penguin that is still at home."]},book:{title:"Dewey's Decimals",playAgain:"Play Again",iconContainer:{type:"MaterialCommunityIcons",name:"bookshelf",sizeFactor:1.25},icon:{type:"FontAwesome",name:"book"},info:["The librarian is on vacation!","Tap on the book shelf to find the book that is in the right place"]},baby:{title:"Diaper Change",playAgain:"Play Again",iconContainer:{type:"MaterialCommunityIcons",name:"baby-carriage",sizeFactor:1.25},icon:{type:"FontAwesome5",name:"baby"},info:["The babies are going for a walk!","Tap on the stroller to find the baby that is in the right place."]},cow:{title:"Moo Moo Mixup",playAgain:"Play Again",iconContainer:{type:"MaterialCommunityIcons",name:"barn",sizeFactor:1.25},icon:{type:"MaterialCommunityIcons",name:"cow"},info:["The cows have escaped!","Tap on the barn to see which cow hasn't left his stable."]},ball:{title:"Hoop-tastic",playAgain:"Play Again",iconContainer:{type:"MaterialCommunityIcons",name:"basketball-hoop-outline",sizeFactor:1.25},icon:{type:"MaterialCommunityIcons",name:"basketball"},info:["The big game is down to the final seconds!","Tap on the hoop to see which ball is going to win the game."]}},m=n(5).a.create({container:{height:"100%",backgroundColor:"#fff"},north:{height:"20%",alignItems:"center",justifyContent:"center",backgroundColor:"#000"},center:{height:"5%",alignItems:"center",justifyContent:"center"},south:{height:"75%",alignItems:"center",justifyContent:"center"},title:{fontSize:48,fontFamily:"Papyrus",color:"#fff",paddingTop:40},infoIcon:{paddingRight:100},infoLine:{fontSize:25,fontFamily:"Papyrus",color:"#333"},gameIcon:{paddingRight:15},optionsDisplay:{fontSize:25,fontFamily:"Papyrus"},optionsTitle:{fontSize:40,fontFamily:"Papyrus"},optionsGameTitle:{fontSize:25,fontFamily:"Papyrus"},row:{flexDirection:"row"},spaced:{marginTop:20,marginBottom:20},cell:{padding:10,alignItems:"center"},cellBorder:{padding:10,margin:10,alignItems:"center",border:"solid 1px #555",borderRadius:10},levelSelected:{fontSize:25,fontFamily:"Papyrus"},levelUnselected:{color:"#bbb",fontSize:25,fontFamily:"Papyrus"},button:{backgroundColor:"#92f7a8",borderRadius:10,padding:10,elevation:2},buttonText:{fontFamily:"Papyrus",color:"#000",fontWeight:"bold",textTransform:"uppercase"},centeredView:{flex:1,justifyContent:"flex-start",alignItems:"center",marginTop:25},modalView:{margin:20,backgroundColor:"#fff",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5}}),d=n(119),O=n(121),h=n(120),g=n(1);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.onClick,n=Object(l.useCallback)((function(){null==t||t(e.index)}),[e]);return Object(g.jsxs)(j.a,{onPress:n,children:["FontAwesome"===e.type&&Object(g.jsx)(z,C({},e)),"FontAwesome5"===e.type&&Object(g.jsx)(P,C({},e)),"MaterialCommunityIcons"===e.type&&Object(g.jsx)(k,C({},e))]})},v=function(e){return Object(g.jsxs)(g.Fragment,{children:["FontAwesome"===e.type&&Object(g.jsx)(z,C({},e)),"FontAwesome5"===e.type&&Object(g.jsx)(P,C({},e)),"MaterialCommunityIcons"===e.type&&Object(g.jsx)(k,C({},e))]})},z=function(e){return Object(g.jsx)(d.a,C({},e))},P=function(e){return Object(g.jsx)(O.a,C({},e))},k=function(e){return Object(g.jsx)(h.a,C({},e))},F=Object(l.memo)((function(e){var t=e.icons,n=e.size,o=e.color;return Object(g.jsx)(g.Fragment,{children:t.map((function(e,t){return Object(g.jsx)(z,{name:e,color:o,size:n},t)}))})})),T=n(39),A=function(e){var t=e.settings,n=e.toggleOptionsModal,o=e.resetGame;return Object(g.jsx)(T.a,{animationType:"slide",transparent:!0,visible:!0,onRequestClose:n,children:Object(g.jsx)(u.a,{style:m.centeredView,children:Object(g.jsxs)(u.a,{style:m.modalView,children:[Object(g.jsx)(b.a,{style:m.optionsTitle,children:"Game Settings"}),Object(g.jsx)(u.a,{style:m.spaced,children:Object.keys(f).map((function(e){var n=f[e],i=e===t.game?m.levelSelected:m.levelUnselected,r=e===t.game?"#000":"#aaa";return Object(g.jsx)(j.a,{onPress:function(){o({game:e})},children:Object(g.jsxs)(u.a,{style:m.row,children:[Object(g.jsx)(v,{type:n.icon.type,name:n.icon.name,color:r,size:30}),Object(g.jsxs)(b.a,{style:i,children:["\xa0\xa0",n.title]})]})},e)}))}),Object(g.jsx)(u.a,{style:m.spaced,children:y.map((function(e,n){var i=t.level===n,r=i?m.levelSelected:m.levelUnselected;return Object(g.jsx)(j.a,{onPress:function(){o({level:n})},children:Object(g.jsxs)(u.a,{style:m.row,children:[Object(g.jsxs)(b.a,{style:r,children:[e.name,"\xa0\xa0"]}),Object(g.jsx)(F,{icons:e.icons,color:i?"#000":"#aaa",size:30})]})},e.name)}))}),Object(g.jsx)(j.a,{style:m.button,onPress:n,children:Object(g.jsx)(b.a,{style:m.buttonText,children:"DONE"})})]})})})},I=function(e){var t=e.toggleInfoModal,n=e.gameInfo,o=y[0].size;return Object(g.jsx)(T.a,{animationType:"slide",transparent:!0,visible:!0,onRequestClose:t,children:Object(g.jsx)(u.a,{style:m.centeredView,children:Object(g.jsxs)(u.a,{style:m.modalView,children:[Object(g.jsx)(b.a,{style:m.optionsTitle,children:"How To Play"}),Object(g.jsx)(u.a,{style:m.spaced,children:n.info.map((function(e){return Object(g.jsx)(b.a,{style:m.infoLine,children:e})}))}),Object(g.jsxs)(u.a,{style:m.row,children:[Object(g.jsxs)(u.a,{style:m.cell,children:[Object(g.jsxs)(u.a,{style:m.cellBorder,children:[Object(g.jsx)(v,{type:n.icon.type,name:n.icon.name,color:p[0],size:o}),Object(g.jsx)(v,{index:0,type:n.iconContainer.type,name:n.iconContainer.name,color:p[0],size:o*n.iconContainer.sizeFactor})]}),Object(g.jsx)(v,{style:m.infoCorrect,index:0,type:"FontAwesome",name:"check-circle",color:"green",size:50})]}),Object(g.jsxs)(u.a,{style:m.cell,children:[Object(g.jsxs)(u.a,{style:m.cellBorder,children:[Object(g.jsx)(v,{type:n.icon.type,name:n.icon.name,color:p[5],size:o}),Object(g.jsx)(v,{index:0,type:n.iconContainer.type,name:n.iconContainer.name,color:p[2],size:o*n.iconContainer.sizeFactor})]}),Object(g.jsx)(v,{style:m.infoCorrect,index:0,type:"FontAwesome",name:"times-circle",color:"red",size:50})]})]}),Object(g.jsx)(j.a,{style:m.button,onPress:t,children:Object(g.jsx)(b.a,{style:m.buttonText,children:"DONE"})})]})})})};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(){var e=Object(l.useState)({game:"egg",level:1,colors:E(p,12),totalCount:12}),t=s()(e,2),n=t[0],o=t[1],i=Object(l.useMemo)((function(){return y[n.level]}),[n]),r=Object(l.useMemo)((function(){return f[n.game]}),[n]),c=Object(l.useMemo)((function(){return a()(Array(i.rowCount).keys())}),[i]),d=Object(l.useMemo)((function(){return a()(Array(i.colCount).keys())}),[i]),O=Object(l.useState)(Array(n.totalCount).fill(!1)),h=s()(O,2),x=h[0],C=h[1],z=Object(l.useState)(!1),P=s()(z,2),k=P[0],T=P[1],M=Object(l.useState)(!1),D=s()(M,2),R=D[0],V=D[1],B=Object(l.useState)(!1),G=s()(B,2),H=G[0],U=G[1],q=Object(l.useState)(!1),J=s()(q,2),L=J[0],N=J[1],W=Object(l.useCallback)((function(e){R&&!e||(T(!1),C(Array(n.totalCount).fill(!1)))}),[R,n]);Object(l.useCallback)((function(){T(!1),C(Array(n.totalCount).fill(!0))}),[n]);Object(l.useEffect)((function(){k&&setTimeout((function(){return W()}),1500)}),[k]);var K=Object(l.useCallback)((function(e){if(!k&&"number"===typeof e){var t=a()(x);t[e]=!0,C(t),T(!0),V(n.colors.icons[e]===n.colors.containers[e])}}),[x,k,n]),Q=Object(l.useCallback)((function(){X(n)}),[n]),X=Object(l.useCallback)((function(e){var t,i=null!=(t=e.level)?t:n.level,r=y[i].rowCount*y[i].colCount,a=S(S(S({},n),e),{},{colors:E(p,r)});o(a),V(!1),W(!0)}),[n]),Y=Object(l.useCallback)((function(){U(!H)}),[H]),Z=Object(l.useCallback)((function(){N(!L)}),[L]);return Object(g.jsxs)(u.a,{style:m.container,children:[Object(g.jsxs)(u.a,{style:m.north,children:[Object(g.jsx)(b.a,{style:m.title,children:r.title}),Object(g.jsx)(u.a,{style:m.row,children:Object(g.jsxs)(b.a,{style:m.optionsDisplay,children:[Object(g.jsx)(j.a,{style:m.infoIcon,onPress:Z,children:Object(g.jsx)(v,{type:"MaterialCommunityIcons",name:"information-outline",color:"#fff",size:30})}),Object(g.jsx)(j.a,{onPress:Y,children:Object(g.jsxs)(u.a,{style:m.row,children:[Object(g.jsx)(v,{style:m.gameIcon,type:r.icon.type,name:r.icon.name,color:"#fff",size:30}),Object(g.jsx)(F,{icons:y[n.level].icons,color:"#fff",size:30})]})})]})})]}),Object(g.jsx)(u.a,{style:m.center,children:R&&Object(g.jsx)(j.a,{style:m.button,onPress:Q,children:Object(g.jsx)(b.a,{style:m.buttonText,children:r.playAgain})})}),Object(g.jsx)(u.a,{style:m.south,children:c.map((function(e){return Object(g.jsx)(u.a,{style:m.row,children:d.map((function(t){var o=e*d.length+t,a=x[o]?n.colors.icons[o]:"white";return Object(g.jsxs)(u.a,{style:m.cell,children:[Object(g.jsx)(v,{index:o,type:r.icon.type,name:r.icon.name,color:a,size:i.size}),R&&Object(g.jsx)(v,{index:o,type:r.iconContainer.type,name:r.iconContainer.name,color:n.colors.containers[o],size:i.size*r.iconContainer.sizeFactor}),!R&&Object(g.jsx)(w,{index:o,onClick:K,type:r.iconContainer.type,name:r.iconContainer.name,color:n.colors.containers[o],size:i.size*r.iconContainer.sizeFactor})]},e+""+t)}))},e)}))}),H&&Object(g.jsx)(A,{settings:n,toggleOptionsModal:Y,resetGame:X}),L&&Object(g.jsx)(I,{gameInfo:r,toggleInfoModal:Z})]})}var E=function(e,t){for(var n=a()(e).sort((function(){return.5-Math.random()})).slice(0,t),o=a()(n).sort((function(){return.5-Math.random()})),i=R(n,o);1!==i;)o=a()(n).sort((function(){return.5-Math.random()})),i=R(n,o);return{icons:n,containers:o}},R=function(e,t){return e.filter((function(e,n){return e===t[n]})).length}},83:function(e,t,n){e.exports=n(112)}},[[83,1,2]]]);
//# sourceMappingURL=app.d5e12c86.chunk.js.map