(this["webpackJsonpelectron-playground"]=this["webpackJsonpelectron-playground"]||[]).push([[33],{1383:function(e,t,n){"use strict";n.r(t);var A=n(0),r=n.n(A),a=n(134),i=n.n(a),o=n(409),c=n(215),l=n(851),s=n.n(l),u=n(852);t.default=function(){return r.a.createElement("div",null,r.a.createElement("code",null," \u4ee3\u7801\u8def\u5f84\uff1a",i.a.resolve(__filename)," "),r.a.createElement("p",null,"\u5f00\u53d1electron\u9879\u76ee\u65f6\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230APP\u5d29\u6e83\u7684\u60c5\u51b5\uff0c\u5982\u679cAPP\u7aef\u6ca1\u6709\u5bf9\u5e94\u7684\u65e5\u5fd7\u8bb0\u5f55\uff0c\u90a3\u5f00\u53d1\u5c31\u65e0\u6cd5\u638c\u63e1APP\u7684\u5d29\u6e83\u60c5\u51b5\u4e86\uff0c\u4e5f\u4e0d\u597d\u505a\u5206\u6790\u3002"),r.a.createElement("p",null,"\u76ee\u524d\u6211\u4eec\u9009\u7528\u7684\u662f\u5f00\u6e90\u9879\u76ee",r.a.createElement("a",{href:"https://sentry.io",target:"_blank"},"Sentry"),",\u5b83\u7528\u6765\u8bb0\u5f55crash\u65e5\u5fd7\uff0c\u5b83\u4e5f\u6709\u7edf\u8ba1\u6a21\u5757\uff0c\u4e5f\u80fd\u79c1\u6709\u5316\u90e8\u7f72\uff0c\u57fa\u672c\u4e0a\u5f00\u7bb1\u5c31\u80fd\u7528"),r.a.createElement("img",{src:u,alt:"Sentry",height:"125"}),r.a.createElement("div",null,r.a.createElement("h3",null,"\u60c5\u51b5\u6a21\u62df"),r.a.createElement("div",{className:s.a["case-simulation"]},r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",onClick:function(){window.$EB.ipcRenderer.send("renderer.error",{message:"renderer.error"})}},"Renderer\u8fdb\u7a0b\u4e3b\u52a8push\u9519\u8bef\u4fe1\u606f"),r.a.createElement("p",null,"\u89e6\u53d1\u7684",r.a.createElement("a",{href:"https://sentry.io/share/issue/76069b04b4aa4cc0ba99c2e74fceb8fc/",target:"_blank"},"sentry \u9519\u8bef\u65e5\u5fd7(\u53ef\u80fd\u9700\u8981\u7ffb\u5899)")," ")),r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",onClick:function(){throw new Error("Error triggered in renderer process")}},"Renderer\u8fdb\u7a0b\u88ab\u52a8\u89e6\u53d1\u9519\u8bef\u4fe1\u606f"),r.a.createElement("p",null,"\u8fd9\u4e0d\u4f1a\u89e6\u53d1sentry\u4fe1\u606f")),r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",onClick:function(){window.$EB.crash()}},"Renderer\u8fdb\u7a0bcrash\u4e86"),r.a.createElement("p",null,"\u89e6\u53d1\u7684",r.a.createElement("a",{href:"https://sentry.io/share/issue/05a5ec366a194f36b2293b453cdec25c/",target:"_blank"},"sentry crash\u65e5\u5fd7(\u53ef\u80fd\u9700\u8981\u7ffb\u5899)")," ")))),r.a.createElement("p",null,"\u5b9e\u73b0\u4e0a\u8ff0\u529f\u80fd\uff0c\u9700\u8981\u4e24\u6b65"),r.a.createElement("p",null,"1. App\u542f\u52a8\u65f6\uff0c/app/collect/sentry.ts"),r.a.createElement("p",null,"2. createBrowserWindow\u65f6\uff0c\u628aaddCrashListener\u5f15\u7528\u4e0b"),r.a.createElement("p",null,"\u4ee5\u4e0b\u662f\u6838\u5fc3\u4ee3\u7801"),r.a.createElement(c.a,{src:"/app/collect/sentry.ts",language:"typescript"}))}},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var A=n(134),r=n.n(A),a=process.cwd(),i=function(e){return r.a.join(a,e)}},215:function(e,t,n){"use strict";var A=n(58),r=n(135),a=n(0),i=n.n(a),o=n(343),c=n.n(o),l=n(1378),s=n(1479),u=n(176),d=n(137),f=n(344),m=n.n(f),p=n(345),b=n(346),g=n(347),v=n(348),E=n(349),y=n(216),w=n.n(y);m.a.registerLanguage("javascript",p.a),m.a.registerLanguage("typescript",b.a),m.a.registerLanguage("html",g.a),m.a.registerLanguage("css",v.a);t.a=function(e){var t=e.value,n=e.language,a=e.src,o=i.a.useState(t||""),f=Object(A.a)(o,2),p=f[0],b=f[1],g=i.a.useState(""),v=Object(A.a)(g,2),y=v[0],j=v[1];i.a.useEffect((function(){if(a){var e=Object(u.a)(a);b("loading ......"),j(e),r.readFile(e,(function(e,t){b(t.toString())}))}}),[a]);return i.a.createElement("div",{className:w.a.container},y&&i.a.createElement("p",null,"\u4ee3\u7801\u8def\u5f84:  ",i.a.createElement("a",{onClick:function(e){d.shell.openPath(e)}.bind(null,y)},y)),i.a.createElement(m.a,{language:n||"javascript",style:E.a},p),i.a.createElement(c.a,{text:p,onCopy:function(){return l.b.info("\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f")}},i.a.createElement(s.a,{className:w.a.copy})))}},216:function(e,t,n){e.exports={container:"style_container__1_nhW",copy:"style_copy__5-Yze"}},367:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var A=n(0),r=A.createContext(void 0),a=function(e){var t=e.children,n=e.size;return A.createElement(r.Consumer,null,(function(e){return A.createElement(r.Provider,{value:n||e},t)}))};t.b=r},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return ie}));var A=n(2),r=n.n(A),a=n(8),i=n.n(a),o=n(27),c=n.n(o),l=n(61),s=n.n(l),u=n(0),d=n(3),f=n.n(d),m=n(29),p=n(81),b=n(23),g=n.n(b),v=function e(t){return g()(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},E=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n},y=function(e){return u.createElement(p.a,null,(function(t){var n,A=t.getPrefixCls,a=t.direction,o=e.prefixCls,c=e.size,l=e.className,s=E(e,["prefixCls","size","className"]),d=A("btn-group",o),m="";switch(c){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new v(c))}var p=f()(d,(n={},i()(n,"".concat(d,"-").concat(m),m),i()(n,"".concat(d,"-rtl"),"rtl"===a),n),l);return u.createElement("div",r()({},s,{className:p}))}))},w=n(24),j=n.n(w),O=n(101),h=n.n(O),S=n(25),k=n.n(S),z=n(26),C=n.n(z),P={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},T={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},B=[],x=[];function D(e,t,n){e.addEventListener(t,n,!1)}function X(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var A in t)if(t.hasOwnProperty(A)){var r=t[A];for(var a in r)if(a in e){n.push(r[a]);break}}}"AnimationEvent"in window||(delete P.animationstart.animation,delete T.animationend.animation),"TransitionEvent"in window||(delete P.transitionstart.transition,delete T.transitionend.transition),t(P,B),t(T,x)}();var L={startEvents:B,addStartEventListener:function(e,t){0!==B.length?B.forEach((function(n){D(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==B.length&&B.forEach((function(n){X(e,n,t)}))},endEvents:x,addEndEventListener:function(e,t){0!==x.length?x.forEach((function(n){D(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==x.length&&x.forEach((function(n){X(e,n,t)}))}},W=n(37),J=n(16),N=0,R={};function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=N++,A=t;function r(){(A-=1)<=0?(e(),delete R[n]):R[n]=Object(J.a)(r)}return R[n]=Object(J.a)(r),n}Q.cancel=function(e){void 0!==e&&(J.a.cancel(R[e]),delete R[e])},Q.ids=R;var M,Z=n(21);function G(e){return!e||null===e.offsetParent}function U(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var Y=function(e){k()(n,e);var t=C()(n);function n(){var e;return g()(this,n),(e=t.apply(this,arguments)).containerRef=u.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){if(!(!t||G(t)||t.className.indexOf("-leave")>=0)){var A=e.props.insertExtraNode;e.extraNode=document.createElement("div");var r=h()(e).extraNode,a=e.context.getPrefixCls;r.className="".concat(a(""),"-click-animating-node");var i=e.getAttributeName();t.setAttribute(i,"true"),M=M||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&U(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n&&(e.csp&&e.csp.nonce&&(M.nonce=e.csp.nonce),r.style.borderColor=n,M.innerHTML="\n      [".concat(a(""),"-click-animating-without-extra-node='true']::after, .").concat(a(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),document.body.contains(M)||document.body.appendChild(M)),A&&t.appendChild(r),L.addStartEventListener(t,e.onTransitionStart),L.addEndEventListener(t,e.onTransitionEnd)}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!G(n.target)){e.resetEffect(t);var A=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,A)}),0),Q.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Q((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,A=e.props.children;if(e.csp=n,!u.isValidElement(A))return A;var r=e.containerRef;return Object(W.c)(A)&&(r=Object(W.a)(A.ref,e.containerRef)),Object(Z.a)(A,{ref:r})},e}return j()(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),M&&(M.innerHTML=""),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),L.removeStartEventListener(e,this.onTransitionStart),L.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"render",value:function(){return u.createElement(p.a,null,this.renderWave)}}]),n}(u.Component);Y.contextType=p.b;var H=n(62),I=n(65),V=n(367),q=n(31),K=n(400),F=n.n(K),_=function(){return{width:0,opacity:0,transform:"scale(0)"}},$=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},ee=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?u.createElement("span",{className:"".concat(t,"-loading-icon")},u.createElement(F.a,null)):u.createElement(q.b,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:_,onAppearActive:$,onEnterStart:_,onEnterActive:$,onLeaveStart:$,onLeaveActive:_},(function(e,n){var A=e.className,r=e.style;return u.createElement("span",{className:"".concat(t,"-loading-icon"),style:r,ref:n},u.createElement(F.a,{className:f()(A)}))}))},te=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n},ne=/^[\u4e00-\u9fa5]{2}$/,Ae=ne.test.bind(ne);function re(e){return"text"===e||"link"===e}function ae(e,t){var n=!1,A=[];return u.Children.forEach(e,(function(e){var t=s()(e),r="string"===t||"number"===t;if(n&&r){var a=A.length-1,i=A[a];A[a]="".concat(i).concat(e)}else A.push(e);n=r})),u.Children.map(A,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&Ae(e.props.children)?Object(Z.a)(e,{children:e.props.children.split("").join(n)}):"string"===typeof e?(Ae(e)&&(e=e.split("").join(n)),u.createElement("span",null,e)):e}}(e,t)}))}Object(H.a)("default","primary","ghost","dashed","link","text"),Object(H.a)("circle","round"),Object(H.a)("submit","button","reset");function ie(e){return"danger"===e?{danger:!0}:{type:e}}var oe=function(e,t){var n,A,a=e.loading,o=e.prefixCls,l=e.type,d=e.danger,b=e.shape,g=e.size,v=e.className,E=e.children,y=e.icon,w=e.ghost,j=e.block,O=te(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block"]),h=u.useContext(V.b),S=u.useState(!!a),k=c()(S,2),z=k[0],C=k[1],P=u.useState(!1),T=c()(P,2),B=T[0],x=T[1],D=u.useContext(p.b),X=D.getPrefixCls,L=D.autoInsertSpaceInButton,W=D.direction,J=t||u.createRef(),N=u.useRef(),R=function(){return 1===u.Children.count(E)&&!y&&!re(l)};A="object"===s()(a)&&a.delay?a.delay||!0:!!a,u.useEffect((function(){clearTimeout(N.current),"number"===typeof A?N.current=window.setTimeout((function(){C(A)}),A):C(A)}),[A]),u.useEffect((function(){if(J&&J.current&&!1!==L){var e=J.current.textContent;R()&&Ae(e)?B||x(!0):B&&x(!1)}}),[J]);var Q=function(t){var n=e.onClick;z||n&&n(t)};Object(I.a)(!("string"===typeof y&&y.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y,"` at https://ant.design/components/icon")),Object(I.a)(!(w&&re(l)),"Button","`link` or `text` button can't be a `ghost` button.");var M=X("btn",o),Z=!1!==L,G="";switch(g||h){case"large":G="lg";break;case"small":G="sm"}var U=z?"loading":y,H=f()(M,(n={},i()(n,"".concat(M,"-").concat(l),l),i()(n,"".concat(M,"-").concat(b),b),i()(n,"".concat(M,"-").concat(G),G),i()(n,"".concat(M,"-icon-only"),!E&&0!==E&&U),i()(n,"".concat(M,"-background-ghost"),w&&!re(l)),i()(n,"".concat(M,"-loading"),z),i()(n,"".concat(M,"-two-chinese-chars"),B&&Z),i()(n,"".concat(M,"-block"),j),i()(n,"".concat(M,"-dangerous"),!!d),i()(n,"".concat(M,"-rtl"),"rtl"===W),n),v),q=y&&!z?y:u.createElement(ee,{existIcon:!!y,prefixCls:M,loading:!!z}),K=E||0===E?ae(E,R()&&Z):null,F=Object(m.a)(O,["htmlType","loading","navigate"]);if(void 0!==F.href)return u.createElement("a",r()({},F,{className:H,onClick:Q,ref:J}),q,K);var _=O,$=_.htmlType,ne=te(_,["htmlType"]),ie=u.createElement("button",r()({},Object(m.a)(ne,["loading"]),{type:$,className:H,onClick:Q,ref:J}),q,K);return re(l)?ie:u.createElement(Y,null,ie)},ce=u.forwardRef(oe);ce.displayName="Button",ce.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},ce.Group=y,ce.__ANT_BUTTON=!0;t.b=ce},409:function(e,t,n){"use strict";var A=n(389);t.a=A.b},851:function(e,t,n){e.exports={"case-simulation":"style_case-simulation__2Jz9K"}},852:function(e,t){e.exports="data:image/png;base64,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"}}]);