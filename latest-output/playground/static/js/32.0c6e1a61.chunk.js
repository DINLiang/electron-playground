(this["webpackJsonpelectron-playground"]=this["webpackJsonpelectron-playground"]||[]).push([[32],{1405:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(74),o=n(161),i=n(162),a=n(163),c=n(164),u=n(0),s=n.n(u),l=n(409),f=n(431),d=n.n(f),v=n(608),h=n(607),b=n(469),p=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).onMessage=function(e){var t=i.state.messages,n=[].concat(Object(r.a)(t),[e.data]);i.setState({messages:n})},i.openPage=function(){var e=i.state.childWindow;null===e||void 0===e||e.close();var t=window.open("".concat(window.location.pathname,"#demo/communication-part3/client"));i.setState({childWindow:t})},i.sendToChild=function(e){var t=i.state.childWindow;null===t||void 0===t||t.postMessage(e,"*")},i.state={messages:[],childWindow:null},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.onMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.onMessage)}},{key:"render",value:function(){var e=this.state,t=e.messages,n=e.childWindow;return s.a.createElement("div",{className:d.a.container},s.a.createElement("h2",null,"\u7236\u7a97\u53e3"),n?s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{title:"\u5b50\u7a97\u53e3\u53d1\u9001\u8fc7\u6765\u7684\u6570\u636e",messages:t}),s.a.createElement(v.a,{article:b.c,buttonText:"\u53d1\u9001\u4fe1\u606f\u7ed9\u5b50\u7a97\u53e3",onSend:this.sendToChild})):s.a.createElement(l.a,{type:"primary",onClick:this.openPage},"\u6253\u5f00\u5b50\u7a97\u53e3"))}}]),n}(u.Component)},161:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},162:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(420);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(170),o=n(437),i=n(453);function a(e){return function(){var t,n=Object(r.a)(e);if(Object(o.a)()){var a=Object(r.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(i.a)(this,t)}}},170:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},200:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=t||{},i=n.defaultValue,a=n.value,c=n.onChange,u=n.postState,s=o(r.useState((function(){return void 0!==a?a:void 0!==i?"function"===typeof i?i():i:"function"===typeof e?e():e})),2),l=s[0],f=s[1],d=void 0!==a?a:l;u&&(d=u(d));var v=r.useRef(!0);return r.useEffect((function(){v.current?v.current=!1:void 0===a&&f(a)}),[a]),[d,function(e){f(e),d!==e&&c&&c(e,d)}]}},339:function(e,t,n){"use strict";var r=n(1),o=n(11),i=n(12),a=n(13),c=n(15),u=n(0),s=n(52),l=n(50),f=n(36),d=n(37),v=n(51),h=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,o=t[0].target,i=o.getBoundingClientRect(),a=i.width,c=i.height,u=o.offsetWidth,s=o.offsetHeight,l=Math.floor(a),f=Math.floor(c);if(e.state.width!==l||e.state.height!==f||e.state.offsetWidth!==u||e.state.offsetHeight!==s){var d={width:l,height:f,offsetWidth:u,offsetHeight:s};e.setState(d),n&&Promise.resolve().then((function(){n(Object(r.a)(Object(r.a)({},d),{},{offsetWidth:u,offsetHeight:s}))}))}},e.setChildNode=function(t){e.childNode=t},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=Object(s.a)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new v.a(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=Object(l.a)(e);if(t.length>1)Object(f.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return Object(f.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(u.isValidElement(n)&&Object(d.c)(n)){var r=n.ref;t[0]=u.cloneElement(n,{ref:Object(d.a)(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!u.isValidElement(e)||"key"in e&&null!==e.key?e:u.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(u.Component);h.displayName="ResizeObserver",t.a=h},400:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(457))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},420:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},431:function(e,t,n){e.exports={container:"style_container__3RGw6",footer:"style_footer__3wsvK","message-box":"style_message-box__2daBP","box-title":"style_box-title__motE1","box-content":"style_box-content__18lLW"}},437:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},453:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var o=n(200);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},454:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(455))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},455:function(e,t,n){"use strict";var r=n(34),o=n(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(456)),c=r(n(59)),u=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};u.displayName="CloseCircleFilled";var s=i.forwardRef(u);t.default=s},456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"}},457:function(e,t,n){"use strict";var r=n(34),o=n(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(458)),c=r(n(59)),u=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};u.displayName="LoadingOutlined";var s=i.forwardRef(u);t.default=s},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},469:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(58),o=n(0),i=["\u5e86\u5386\u56db\u5e74\u6625","\u6ed5\u5b50\u4eac\u8c2a\u5b88\u5df4\u9675\u90e1","\u8d8a\u660e\u5e74","\u653f\u901a\u4eba\u548c","\u767e\u5e9f\u5177\u5174","\u4e43\u91cd\u4fee\u5cb3\u9633\u697c","\u589e\u5176\u65e7\u5236","\u523b\u5510\u8d24\u4eca\u4eba\u8bd7\u8d4b\u4e8e\u5176\u4e0a","\u5c5e\u4e88\u4f5c\u6587\u4ee5\u8bb0\u4e4b","\u4e88\u89c2\u592b\u5df4\u9675\u80dc\u72b6","\u5728\u6d1e\u5ead\u4e00\u6e56","\u8854\u8fdc\u5c71","\u541e\u957f\u6c5f","\u6d69\u6d69\u6c64\u6c64","\u6a2a\u65e0\u9645\u6daf","\u671d\u6656\u5915\u9634","\u6c14\u8c61\u4e07\u5343","\u6b64\u5219\u5cb3\u9633\u697c\u4e4b\u5927\u89c2\u4e5f","\u524d\u4eba\u4e4b\u8ff0\u5907\u77e3","\u7136\u5219\u5317\u901a\u5deb\u5ce1","\u5357\u6781\u6f47\u6e58","\u8fc1\u5ba2\u9a9a\u4eba","\u591a\u4f1a\u4e8e\u6b64","\u89c8\u7269\u4e4b\u60c5","\u5f97\u65e0\u5f02\u4e4e","\u82e5\u592b\u972a\u96e8\u970f\u970f","\u8fde\u6708\u4e0d\u5f00","\u9634\u98ce\u6012\u53f7","\u6d4a\u6d6a\u6392\u7a7a","\u65e5\u661f\u9690\u66dc","\u5c71\u5cb3\u6f5c\u5f62","\u5546\u65c5\u4e0d\u884c","\u6a2f\u503e\u696b\u6467","\u8584\u66ae\u51a5\u51a5","\u864e\u5578\u733f\u557c","\u767b\u65af\u697c\u4e5f","\u5219\u6709\u53bb\u56fd\u6000\u4e61","\u5fe7\u8c17\u754f\u8ba5","\u6ee1\u76ee\u8427\u7136","\u611f\u6781\u800c\u60b2\u8005\u77e3","\u81f3\u82e5\u6625\u548c\u666f\u660e","\u6ce2\u6f9c\u4e0d\u60ca","\u4e0a\u4e0b\u5929\u5149","\u4e00\u78a7\u4e07\u9877","\u6c99\u9e25\u7fd4\u96c6","\u9526\u9cde\u6e38\u6cf3","\u5cb8\u82b7\u6c40\u5170","\u90c1\u90c1\u9752\u9752","\u800c\u6216\u957f\u70df\u4e00\u7a7a","\u7693\u6708\u5343\u91cc","\u6d6e\u5149\u8dc3\u91d1","\u9759\u5f71\u6c89\u74a7","\u6e14\u6b4c\u4e92\u7b54","\u6b64\u4e50\u4f55\u6781","\u767b\u65af\u697c\u4e5f","\u5219\u6709\u5fc3\u65f7\u795e\u6021","\u5ba0\u8fb1\u7686\u5fd8","\u628a\u9152\u4e34\u98ce","\u5176\u559c\u6d0b\u6d0b\u8005\u77e3","\u55df\u592b","\u4e88\u5c1d\u6c42\u53e4\u4ec1\u4eba\u4e4b\u5fc3","\u6216\u5f02\u4e8c\u8005\u4e4b\u4e3a","\u4f55\u54c9","\u4e0d\u4ee5\u7269\u559c","\u4e0d\u4ee5\u5df1\u60b2","\u5c45\u5e99\u5802\u4e4b\u9ad8","\u5219\u5fe7\u5176\u6c11","\u5904\u6c5f\u6e56\u4e4b\u8fdc","\u5219\u5fe7\u5176\u541b","\u662f\u8fdb\u4ea6\u5fe7","\u9000\u4ea6\u5fe7","\u7136\u5219\u4f55\u65f6\u800c\u4e50\u8036","\u5176\u5fc5\u66f0","\u5148\u5929\u4e0b\u4e4b\u5fe7\u800c\u5fe7","\u540e\u5929\u4e0b\u4e4b\u4e50\u800c\u4e50","\u6b24","\u566b","\u5fae\u65af\u4eba","\u543e\u8c01\u4e0e\u5f52","\u65f6\u516d\u5e74\u4e5d\u6708\u5341\u4e94\u65e5"],a=["\u8c6b\u7ae0\u6545\u90e1","\u6d2a\u90fd\u65b0\u5e9c","\u661f\u5206\u7ffc\u8f78","\u5730\u63a5\u8861\u5e90","\u895f\u4e09\u6c5f\u800c\u5e26\u4e94\u6e56","\u63a7\u86ee\u8346\u800c\u5f15\u74ef\u8d8a","\u7269\u534e\u5929\u5b9d","\u9f99\u5149\u5c04\u725b\u6597\u4e4b\u589f","\u4eba\u6770\u5730\u7075","\u5f90\u5b7a\u4e0b\u9648\u8543\u4e4b\u69bb","\u96c4\u5dde\u96fe\u5217","\u4fca\u91c7\u661f\u9a70","\u53f0\u968d\u6795\u5937\u590f\u4e4b\u4ea4","\u5bbe\u4e3b\u5c3d\u4e1c\u5357\u4e4b\u7f8e","\u90fd\u7763\u960e\u516c\u4e4b\u96c5\u671b","\u68e8\u621f\u9065\u4e34","\u5b87\u6587\u65b0\u5dde\u4e4b\u61ff\u8303","\u895c\u5e37\u6682\u9a7b","\u5341\u65ec\u4f11\u5047","\u80dc\u53cb\u5982\u4e91","\u5343\u91cc\u9022\u8fce","\u9ad8\u670b\u6ee1\u5ea7","\u817e\u86df\u8d77\u51e4","\u5b5f\u5b66\u58eb\u4e4b\u8bcd\u5b97","\u7d2b\u7535\u9752\u971c","\u738b\u5c06\u519b\u4e4b\u6b66\u5e93","\u5bb6\u541b\u4f5c\u5bb0","\u8def\u51fa\u540d\u533a","\u7ae5\u5b50\u4f55\u77e5","\u8eac\u9022\u80dc\u996f","\u65f6\u7ef4\u4e5d\u6708","\u5e8f\u5c5e\u4e09\u79cb","\u6f66\u6c34\u5c3d\u800c\u5bd2\u6f6d\u6e05","\u70df\u5149\u51dd\u800c\u66ae\u5c71\u7d2b","\u4fe8\u9a96\ud873\udd02\u4e8e\u4e0a\u8def","\u8bbf\u98ce\u666f\u4e8e\u5d07\u963f","\u4e34\u5e1d\u5b50\u4e4b\u957f\u6d32","\u5f97\u5929\u4eba\u4e4b\u65e7\u9986","\u5c42\u5ce6\u8038\u7fe0","\u4e0a\u51fa\u91cd\u9704","\u98de\u9601\u6d41\u4e39","\u4e0b\u4e34\u65e0\u5730","\u9e64\u6c40\u51eb\u6e1a","\u7a77\u5c9b\u5c7f\u4e4b\u8426\u56de","\u6842\u6bbf\u5170\u5bab","\u5373\u5188\u5ce6\u4e4b\u4f53\u52bf","\u62ab\u7ee3\u95fc","\u4fef\u96d5\u750d","\u5c71\u539f\u65f7\u5176\u76c8\u89c6","\u5ddd\u6cfd\u7ea1\u5176\u9a87\u77a9","\u95fe\u960e\u6251\u5730","\u949f\u9e23\u9f0e\u98df\u4e4b\u5bb6","\u8238\u8230\u5f25\u6d25","\u9752\u96c0\u9ec4\u9f99\u4e4b\u8233","\u4e91\u9500\u96e8\u9701","\u5f69\u5f7b\u533a\u660e","\u843d\u971e\u4e0e\u5b64\u9e5c\u9f50\u98de","\u79cb\u6c34\u5171\u957f\u5929\u4e00\u8272","\u6e14\u821f\u5531\u665a","\u54cd\u7a77\u5f6d\u8821\u4e4b\u6ee8","\u96c1\u9635\u60ca\u5bd2","\u58f0\u65ad\u8861\u9633\u4e4b\u6d66","\u9065\u895f\u752b\u7545","\u9038\u5174\u9044\u98de","\u723d\u7c41\u53d1\u800c\u6e05\u98ce\u751f","\u7ea4\u6b4c\u51dd\u800c\u767d\u4e91\u904f","\u7762\u56ed\u7eff\u7af9","\u6c14\u51cc\u5f6d\u6cfd\u4e4b\u6a3d","\u90ba\u6c34\u6731\u534e","\u5149\u7167\u4e34\u5ddd\u4e4b\u7b14","\u56db\u7f8e\u5177","\u4e8c\u96be\u5e76","\u7a77\u7747\u7704\u4e8e\u4e2d\u5929","\u6781\u5a31\u6e38\u4e8e\u6687\u65e5","\u5929\u9ad8\u5730\u8fe5","\u89c9\u5b87\u5b99\u4e4b\u65e0\u7a77","\u5174\u5c3d\u60b2\u6765","\u8bc6\u76c8\u865a\u4e4b\u6709\u6570","\u671b\u957f\u5b89\u4e8e\u65e5\u4e0b","\u76ee\u5434\u4f1a\u4e8e\u4e91\u95f4","\u5730\u52bf\u6781\u800c\u5357\u6e9f\u6df1","\u5929\u67f1\u9ad8\u800c\u5317\u8fb0\u8fdc","\u5173\u5c71\u96be\u8d8a","\u8c01\u60b2\u5931\u8def\u4e4b\u4eba","\u840d\u6c34\u76f8\u9022","\u5c3d\u662f\u4ed6\u4e61\u4e4b\u5ba2","\u6000\u5e1d\u960d\u800c\u4e0d\u89c1","\u5949\u5ba3\u5ba4\u4ee5\u4f55\u5e74","\u55df\u4e4e\uff01\u65f6\u8fd0\u4e0d\u9f50","\u547d\u9014\u591a\u821b","\u51af\u5510\u6613\u8001","\u674e\u5e7f\u96be\u5c01","\u5c48\u8d3e\u8c0a\u4e8e\u957f\u6c99","\u975e\u65e0\u5723\u4e3b","\u7a9c\u6881\u9e3f\u4e8e\u6d77\u66f2","\u5c82\u4e4f\u660e\u65f6","\u6240\u8d56\u541b\u5b50\u89c1\u673a","\u8fbe\u4eba\u77e5\u547d","\u8001\u5f53\u76ca\u58ee","\u5b81\u79fb\u767d\u9996\u4e4b\u5fc3","\u7a77\u4e14\u76ca\u575a","\u4e0d\u5760\u9752\u4e91\u4e4b\u5fd7","\u914c\u8d2a\u6cc9\u800c\u89c9\u723d","\u5904\u6db8\u8f99\u4ee5\u72b9\u6b22","\u5317\u6d77\u867d\u8d4a","\u6276\u6447\u53ef\u63a5","\u4e1c\u9685\u5df2\u901d","\u6851\u6986\u975e\u665a","\u5b5f\u5c1d\u9ad8\u6d01","\u7a7a\u4f59\u62a5\u56fd\u4e4b\u60c5","\u962e\u7c4d\u7316\u72c2","\u5c82\u6548\u7a77\u9014\u4e4b\u54ed","\u52c3","\u4e09\u5c3a\u5fae\u547d","\u4e00\u4ecb\u4e66\u751f","\u65e0\u8def\u8bf7\u7f28","\u7b49\u7ec8\u519b\u4e4b\u5f31\u51a0","\u6709\u6000\u6295\u7b14","\u6155\u5b97\u60ab\u4e4b\u957f\u98ce","\u820d\u7c2a\u7b0f\u4e8e\u767e\u9f84","\u5949\u6668\u660f\u4e8e\u4e07\u91cc","\u975e\u8c22\u5bb6\u4e4b\u5b9d\u6811","\u63a5\u5b5f\u6c0f\u4e4b\u82b3\u90bb","\u4ed6\u65e5\u8d8b\u5ead","\u53e8\u966a\u9ca4\u5bf9","\u4eca\u5179\u6367\u8882","\u559c\u6258\u9f99\u95e8","\u6768\u610f\u4e0d\u9022","\u629a\u51cc\u4e91\u800c\u81ea\u60dc","\u949f\u671f\u65e2\u9047","\u594f\u6d41\u6c34\u4ee5\u4f55\u60ed","\u545c\u4e4e\uff01\u80dc\u5730\u4e0d\u5e38","\u76db\u7b75\u96be\u518d","\u5170\u4ead\u5df2\u77e3","\u6893\u6cfd\u4e18\u589f","\u4e34\u522b\u8d60\u8a00","\u5e78\u627f\u6069\u4e8e\u4f1f\u996f","\u767b\u9ad8\u4f5c\u8d4b","\u662f\u6240\u671b\u4e8e\u7fa4\u516c","\u6562\u7aed\u9119\u6000","\u606d\u758f\u77ed\u5f15","\u4e00\u8a00\u5747\u8d4b","\u56db\u97f5\u4ff1\u6210","\u8bf7\u6d12\u6f58\u6c5f","\u5404\u503e\u9646\u6d77\u4e91\u5c14","\u6ed5\u738b\u9ad8\u9601\u4e34\u6c5f\u6e1a","\u4f69\u7389\u9e23\u9e3e\u7f62\u6b4c\u821e","\u753b\u680b\u671d\u98de\u5357\u6d66\u4e91","\u73e0\u5e18\u66ae\u5377\u897f\u5c71\u96e8","\u95f2\u4e91\u6f6d\u5f71\u65e5\u60a0\u60a0","\u7269\u6362\u661f\u79fb\u51e0\u5ea6\u79cb","\u9601\u4e2d\u5e1d\u5b50\u4eca\u4f55\u5728","\u69db\u5916\u957f\u6c5f\u7a7a\u81ea\u6d41"];function c(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),i=n[0],a=n[1],c=Object(o.useState)(e[0]||""),u=Object(r.a)(c,2),s=u[0],l=u[1];return{text:s,nextLine:function(){i+1>e.length?l(""):(a(i+1),l(e[i+1]))}}}},607:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(431),a=n.n(i);t.a=function(e){var t=e.title,n=e.messages,i=void 0===n?[]:n,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&c.current.scrollTo({top:c.current.scrollHeight,behavior:"smooth"})}),[i.length]),o.a.createElement("div",{className:a.a["message-box"]},t&&o.a.createElement("div",{className:a.a["box-title"]},t),o.a.createElement("div",{ref:c,className:a.a["box-content"]},i.map((function(e,t){return o.a.createElement("p",{key:t},e)}))))}},608:function(e,t,n){"use strict";var r=n(58),o=n(0),i=n.n(o),a=n(1475),c=n(409),u=n(431),s=n.n(u),l=n(469);t.a=function(e){var t=e.buttonText,n=void 0===t?"\u53d1\u9001":t,u=e.onSend,f=e.article,d=void 0===f?[]:f,v=Object(o.useState)(""),h=Object(r.a)(v,2),b=h[0],p=h[1],m=Object(l.a)(d),y=m.text,O=m.nextLine,g=function(){u(b||y),p(""),O()};return i.a.createElement("footer",{className:s.a.footer},i.a.createElement(a.a,{placeholder:y,onPressEnter:g,onChange:function(e){return p(e.target.value)},value:b}),i.a.createElement(c.a,{type:"primary",onClick:g},n))}}}]);