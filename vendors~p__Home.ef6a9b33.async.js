(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+QRC":function($,F,s){"use strict";var f=s("E9nw"),_={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function H(S){var g=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return S.replace(/#{\s*key\s*}/g,g)}function k(S,g){var x,V,q,Y,K,O,X=!1;g||(g={}),x=g.debug||!1;try{q=f(),Y=document.createRange(),K=document.getSelection(),O=document.createElement("span"),O.textContent=S,O.style.all="unset",O.style.position="fixed",O.style.top=0,O.style.clip="rect(0, 0, 0, 0)",O.style.whiteSpace="pre",O.style.webkitUserSelect="text",O.style.MozUserSelect="text",O.style.msUserSelect="text",O.style.userSelect="text",O.addEventListener("copy",function(w){if(w.stopPropagation(),g.format)if(w.preventDefault(),typeof w.clipboardData=="undefined"){x&&console.warn("unable to use e.clipboardData"),x&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var J=_[g.format]||_.default;window.clipboardData.setData(J,S)}else w.clipboardData.clearData(),w.clipboardData.setData(g.format,S);g.onCopy&&(w.preventDefault(),g.onCopy(w.clipboardData))}),document.body.appendChild(O),Y.selectNodeContents(O),K.addRange(Y);var ee=document.execCommand("copy");if(!ee)throw new Error("copy command was unsuccessful");X=!0}catch(w){x&&console.error("unable to copy using execCommand: ",w),x&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(g.format||"text",S),g.onCopy&&g.onCopy(window.clipboardData),X=!0}catch(J){x&&console.error("unable to copy using clipboardData: ",J),x&&console.error("falling back to prompt"),V=H("message"in g?g.message:o),window.prompt(V,S)}}finally{K&&(typeof K.removeRange=="function"?K.removeRange(Y):K.removeAllRanges()),O&&document.body.removeChild(O),q()}return X}$.exports=k},"/qDX":function($,F,s){},E9nw:function($,F){$.exports=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var f=document.activeElement,_=[],o=0;o<s.rangeCount;o++)_.push(s.getRangeAt(o));switch(f.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":f.blur();break;default:f=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||_.forEach(function(H){s.addRange(H)}),f&&f.focus()}}},T7W1:function($,F,s){"use strict";var f=s("q1tI"),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},o=_,H=s("/1Lp"),k=function(x,V){return f.createElement(H.a,Object.assign({},x,{ref:V,icon:o}))};k.displayName="CheckOutlined";var S=F.a=f.forwardRef(k)},tU7J:function($,F,s){"use strict";var f=s("cIOH"),_=s.n(f),o=s("/qDX"),H=s.n(o),k=s("5Dmo"),S=s("5NDa")},wFql:function($,F,s){"use strict";var f=s("jiTG"),_=s("+y50"),o=s("q1tI"),H=s("TSYQ"),k=s.n(H),S=s("Twdv"),g=s("H84U"),x=s("uaoM"),V=function(a,n){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&n.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(r[e[t]]=a[e[t]]);return r},q=function(n,r){var e=n.prefixCls,t=n.component,i=t===void 0?"article":t,l=n.className,c=n["aria-label"],d=n.setContentRef,u=n.children,h=V(n,["prefixCls","component","className","aria-label","setContentRef","children"]),p=r;return d&&(Object(x.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),p=Object(S.a)(r,d)),o.createElement(g.a,null,function(R){var v=R.getPrefixCls,P=R.direction,I=i,N=v("typography",e),U=k()(N,Object(_.a)({},"".concat(N,"-rtl"),P==="rtl"),l);return o.createElement(I,Object(f.a)({className:U,"aria-label":c,ref:p},h),u)})},Y=o.forwardRef(q);Y.displayName="Typography";var K=Y,O=K,X=s("rTrx"),ee=s("Ya77"),w=s("xGeg"),J=s("cdhz"),ge=s("u13E"),Oe=s("Ek/p"),Ce=s("UvXy"),Q=s("axMd"),be=s("+QRC"),_e=s.n(be),xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Te=xe,ne=s("/1Lp"),pe=function(n,r){return o.createElement(ne.a,Object.assign({},n,{ref:r,icon:Te}))};pe.displayName="EditOutlined";var Ne=o.forwardRef(pe),Le=s("T7W1"),Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},je=Re,fe=function(n,r){return o.createElement(ne.a,Object.assign({},n,{ref:r,icon:je}))};fe.displayName="CopyOutlined";var Ue=o.forwardRef(fe),De=s("6ner"),Ae=s("wEI+"),Pe=s("YMnH"),me=s("gDlH"),ae=s("oHiP"),Ee=s("R3zJ"),re=s("3S7+"),Me=s("Z97s"),ye=s("rOxa"),Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},we=Se,he=function(n,r){return o.createElement(ne.a,Object.assign({},n,{ref:r,icon:we}))};he.displayName="EnterOutlined";var Ie=o.forwardRef(he),ke=s("whJP"),Xe=function(n){var r=n.prefixCls,e=n["aria-label"],t=n.className,i=n.style,l=n.direction,c=n.maxLength,d=n.autoSize,u=d===void 0?!0:d,h=n.value,p=n.onSave,R=n.onCancel,v=o.useRef(),P=o.useRef(!1),I=o.useRef(),N=o.useState(h),U=Object(Me.a)(N,2),z=U[0],D=U[1];o.useEffect(function(){D(h)},[h]),o.useEffect(function(){if(v.current&&v.current.resizableTextArea){var L=v.current.resizableTextArea.textArea;L.focus();var y=L.value.length;L.setSelectionRange(y,y)}},[]);var W=function(y){var T=y.target;D(T.value.replace(/[\n\r]/g,""))},G=function(){P.current=!0},E=function(){P.current=!1},C=function(y){var T=y.keyCode;if(P.current)return;I.current=T},b=function(){p(z.trim())},A=function(y){var T=y.keyCode,B=y.ctrlKey,de=y.altKey,ce=y.metaKey,ue=y.shiftKey;I.current===T&&!P.current&&!B&&!de&&!ce&&!ue&&(T===ye.a.ENTER?b():T===ye.a.ESC&&R())},M=function(){b()},j=k()(r,"".concat(r,"-edit-content"),Object(_.a)({},"".concat(r,"-rtl"),l==="rtl"),t);return o.createElement("div",{className:j,style:i},o.createElement(ke.a,{ref:v,maxLength:c,value:z,onChange:W,onKeyDown:C,onKeyUp:A,onCompositionStart:G,onCompositionEnd:E,onBlur:M,"aria-label":e,autoSize:u}),o.createElement(Ie,{className:"".concat(r,"-edit-content-confirm")}))},ze=Xe,oe=s("i8i4"),Be=1,He=3,Ke=8,m,ie={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function se(a){if(!a)return 0;var n=a.match(/^\d*(\.\d*)?/);return n?Number(n[0]):0}function We(a){var n=Array.prototype.slice.apply(a);return n.map(function(r){return"".concat(r,": ").concat(a.getPropertyValue(r),";")}).join("")}function $e(a){var n=[];return a.forEach(function(r){var e=n[n.length-1];typeof r=="string"&&typeof e=="string"?n[n.length-1]+=r:n.push(r)}),n}var Fe=function(a,n,r,e,t){m||(m=document.createElement("div"),m.setAttribute("aria-hidden","true"),document.body.appendChild(m));var i=n.rows,l=n.suffix,c=l===void 0?"":l,d=window.getComputedStyle(a),u=We(d),h=se(d.lineHeight),p=Math.round(h*(i+1)+se(d.paddingTop)+se(d.paddingBottom));m.setAttribute("style",u),m.style.position="fixed",m.style.left="0",m.style.height="auto",m.style.minHeight="auto",m.style.maxHeight="auto",m.style.top="-999999px",m.style.zIndex="-1000",m.style.textOverflow="clip",m.style.whiteSpace="normal",m.style.webkitLineClamp="none";var R=$e(Object(Q.a)(r));Object(oe.render)(o.createElement("div",{style:ie},o.createElement("span",{style:ie},R,c),o.createElement("span",{style:ie},e)),m);function v(){return m.offsetHeight<p}if(v())return Object(oe.unmountComponentAtNode)(m),{content:r,text:m.innerHTML,ellipsis:!1};var P=Array.prototype.slice.apply(m.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(E){var C=E.nodeType;return C!==Ke}),I=Array.prototype.slice.apply(m.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(oe.unmountComponentAtNode)(m);var N=[];m.innerHTML="";var U=document.createElement("span");m.appendChild(U);var z=document.createTextNode(t+c);U.appendChild(z),I.forEach(function(E){m.appendChild(E)});function D(E){U.insertBefore(E,z)}function W(E,C){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C.length,M=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,j=Math.floor((b+A)/2),L=C.slice(0,j);if(E.textContent=L,b>=A-1)for(var y=A;y>=b;y-=1){var T=C.slice(0,y);if(E.textContent=T,v()||!T)return y===C.length?{finished:!1,reactNode:C}:{finished:!0,reactNode:T}}return v()?W(E,C,j,A,j):W(E,C,b,j,M)}function G(E,C){var b=E.nodeType;if(b===Be)return D(E),v()?{finished:!1,reactNode:R[C]}:(U.removeChild(E),{finished:!0,reactNode:null});if(b===He){var A=E.textContent||"",M=document.createTextNode(A);return D(M),W(M,A)}return{finished:!1,reactNode:null}}return P.some(function(E,C){var b=G(E,C),A=b.finished,M=b.reactNode;return M&&N.push(M),A}),{content:N,text:m.innerHTML,ellipsis:!0}},Ye=function(a,n){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&n.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(r[e[t]]=a[e[t]]);return r},Ge=Object(Ee.b)("webkitLineClamp"),Ve=Object(Ee.b)("textOverflow");function Je(a,n){var r=a.mark,e=a.code,t=a.underline,i=a.delete,l=a.strong,c=a.keyboard,d=n;function u(h,p){if(!h)return;d=o.createElement(p,{},d)}return u(l,"strong"),u(t,"u"),u(i,"del"),u(e,"code"),u(r,"mark"),u(c,"kbd"),d}var ve="...",le=function(a){Object(Oe.a)(r,a);var n=Object(Ce.a)(r);function r(){var e;return Object(J.a)(this,r),e=n.apply(this,arguments),e.contentRef=o.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,i=e.context.getPrefixCls;return i("typography",t)},e.onExpandClick=function(t){var i,l=e.getEllipsis(),c=l.onExpand;e.setState({expanded:!0}),(i=c)===null||i===void 0||i(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var i=e.getEditable(),l=i.onChange;l==null||l(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var i=e.props,l=i.children,c=i.copyable,d=Object(f.a)({},Object(X.a)(c)==="object"?c:null);d.text===void 0&&(d.text=String(l)),_e()(d.text||""),e.setState({copied:!0},function(){d.onCopy&&d.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var i=e.getEditable(),l=i.onStart;t&&l&&l(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ae.a.cancel(e.rafId),e.rafId=Object(ae.a)(function(){e.syncEllipsis()})},e}return Object(ge.a)(r,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var i=this.props.children,l=this.getEllipsis(),c=this.getEllipsis(t);(i!==t.children||l.rows!==c.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ae.a.cancel(this.rafId)}},{key:"getEditable",value:function(t){var i=this.state.edit,l=t||this.props,c=l.editable;return c?Object(f.a)({editing:i},Object(X.a)(c)==="object"?c:null):{editing:i}}},{key:"getEllipsis",value:function(t){var i=t||this.props,l=i.ellipsis;return l?Object(f.a)({rows:1,expandable:!1},Object(X.a)(l)==="object"?l:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,i=this.props,l=i.editable,c=i.copyable,d=this.getEllipsis(),u=d.rows,h=d.expandable,p=d.suffix,R=d.onEllipsis,v=d.tooltip;return p||v||(l||c||h||!t||R)?!1:u===1?Ve:Ge}},{key:"syncEllipsis",value:function(){var t=this.state,i=t.ellipsisText,l=t.isEllipsis,c=t.expanded,d=this.getEllipsis(),u=d.rows,h=d.suffix,p=d.onEllipsis,R=this.props.children;if(!u||u<0||!this.contentRef.current||c)return;if(this.canUseCSSEllipsis())return;Object(x.a)(Object(Q.a)(R).every(function(U){return typeof U=="string"}),"Typography","`ellipsis` should use string as children only.");var v=Fe(this.contentRef.current,{rows:u,suffix:h},R,this.renderOperations(!0),ve),P=v.content,I=v.text,N=v.ellipsis;(i!==I||l!==N)&&(this.setState({ellipsisText:I,ellipsisContent:P,isEllipsis:N}),l!==N&&p&&p(N))}},{key:"renderExpand",value:function(t){var i=this.getEllipsis(),l=i.expandable,c=i.symbol,d=this.state,u=d.expanded,h=d.isEllipsis;if(!l)return null;if(!t&&(u||!h))return null;var p;return c?p=c:p=this.expandStr,o.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},p)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!t)return;var i=t.icon,l=t.tooltip,c=Object(Q.a)(l)[0]||this.editStr,d=typeof c=="string"?c:"";return o.createElement(re.a,{key:"edit",title:l===!1?"":c},o.createElement(me.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":d},i||o.createElement(Ne,{role:"button"})))}},{key:"renderCopy",value:function(){var t=this.state.copied,i=this.props.copyable;if(!i)return;var l=this.getPrefixCls(),c=i.tooltips,d=Object(Q.a)(c);d.length===0&&(d=[this.copyStr,this.copiedStr]);var u=t?d[1]:d[0],h=typeof u=="string"?u:"",p=Object(Q.a)(i.icon);return o.createElement(re.a,{key:"copy",title:c===!1?"":u},o.createElement(me.a,{className:k()("".concat(l,"-copy"),t&&"".concat(l,"-copy-success")),onClick:this.onCopyClick,"aria-label":h},t?p[1]||o.createElement(Le.a,null):p[0]||o.createElement(Ue,null)))}},{key:"renderEditInput",value:function(){var t=this.props,i=t.children,l=t.className,c=t.style,d=this.context.direction,u=this.getEditable(),h=u.maxLength,p=u.autoSize;return o.createElement(ze,{value:typeof i=="string"?i:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:l,style:c,direction:d,maxLength:h,autoSize:p})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(i){return i})}},{key:"renderContent",value:function(){var t=this,i=this.state,l=i.ellipsisContent,c=i.isEllipsis,d=i.expanded,u=this.props,h=u.component,p=u.children,R=u.className,v=u.type,P=u.disabled,I=u.style,N=Ye(u,["component","children","className","type","disabled","style"]),U=this.context.direction,z=this.getEllipsis(),D=z.rows,W=z.suffix,G=z.tooltip,E=this.getPrefixCls(),C=Object(ee.a)(N,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(w.a)(Ae.a))),b=this.canUseCSSEllipsis(),A=D===1&&b,M=D&&D>1&&b,j=p;if(D&&c&&!d&&!b){var L=N.title,y=L||"";!L&&(typeof p=="string"||typeof p=="number")&&(y=String(p)),y=y==null?void 0:y.slice(String(l||"").length),j=o.createElement(o.Fragment,null,l,o.createElement("span",{title:y,"aria-hidden":"true"},ve),W),G&&(j=o.createElement(re.a,{title:G===!0?p:G},o.createElement("span",null,j)))}else j=o.createElement(o.Fragment,null,p,W);return j=Je(this.props,j),o.createElement(Pe.a,{componentName:"Text"},function(T){var B,de=T.edit,ce=T.copy,ue=T.copied,ct=T.expand;return t.editStr=de,t.copyStr=ce,t.copiedStr=ue,t.expandStr=ct,o.createElement(De.a,{onResize:t.resizeOnNextFrame,disabled:!D},o.createElement(O,Object(f.a)({className:k()((B={},Object(_.a)(B,"".concat(E,"-").concat(v),v),Object(_.a)(B,"".concat(E,"-disabled"),P),Object(_.a)(B,"".concat(E,"-ellipsis"),D),Object(_.a)(B,"".concat(E,"-ellipsis-single-line"),A),Object(_.a)(B,"".concat(E,"-ellipsis-multiple-line"),M),B),R),style:Object(f.a)(Object(f.a)({},I),{WebkitLineClamp:M?D:void 0}),component:h,ref:t.contentRef,direction:U},C),j,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),i=t.editing;return i?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var i=t.children,l=t.editable;return Object(x.a)(!l||typeof i=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),r}(o.Component);le.contextType=g.b,le.defaultProps={children:""};var te=le,Qe=function(a,n){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&n.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(r[e[t]]=a[e[t]]);return r},Ze=function(n){var r=n.ellipsis,e=Qe(n,["ellipsis"]),t=o.useMemo(function(){return r&&Object(X.a)(r)==="object"?Object(ee.a)(r,["expandable","rows"]):r},[r]);return Object(x.a)(Object(X.a)(r)!=="object"||!r||!("expandable"in r)&&!("rows"in r),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(te,Object(f.a)({},e,{ellipsis:t,component:"span"}))},qe=Ze,et=function(a,n){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&n.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(r[e[t]]=a[e[t]]);return r},tt=function(n,r){var e=n.ellipsis,t=n.rel,i=et(n,["ellipsis","rel"]);Object(x.a)(Object(X.a)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var l=o.useRef(null);o.useImperativeHandle(r,function(){var d;return(d=l.current)===null||d===void 0?void 0:d.contentRef.current});var c=Object(f.a)(Object(f.a)({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete c.navigate,o.createElement(te,Object(f.a)({},c,{ref:l,ellipsis:!!e,component:"a"}))},nt=o.forwardRef(tt),at=s("CWQg"),rt=function(a,n){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&n.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(r[e[t]]=a[e[t]]);return r},ot=Object(at.b)(1,2,3,4,5),it=function(n){var r=n.level,e=r===void 0?1:r,t=rt(n,["level"]),i;return ot.indexOf(e)!==-1?i="h".concat(e):(Object(x.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),i="h1"),o.createElement(te,Object(f.a)({},t,{component:i}))},st=it,lt=function(n){return o.createElement(te,Object(f.a)({},n,{component:"div"}))},dt=lt,Z=O;Z.Text=qe,Z.Link=nt,Z.Title=st,Z.Paragraph=dt;var ut=F.a=Z}}]);