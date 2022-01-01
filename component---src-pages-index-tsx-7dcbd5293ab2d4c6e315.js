/*! For license information please see component---src-pages-index-tsx-7dcbd5293ab2d4c6e315.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0cfB":function(e,t,n){"use strict";e.exports=n("7B0+")},"10Zl":function(e,t,n){e.exports={header:"header-module--header--2Q3RK",logo:"header-module--logo--3gu8x",spin:"header-module--spin--1xYqr",title:"header-module--title--2iLmX",githubContainer:"header-module--githubContainer--1VQcl",githubLogo:"header-module--githubLogo--ShHbe"}},"67co":function(e,t,n){e.exports={clearLink:"dataLoader-module--clearLink--jpfao",errorMessage:"dataLoader-module--errorMessage--31bie"}},"6Aug":function(e,t,n){e.exports={nullState:"nullState-module--nullState--3TyrL",callout:"nullState-module--callout--1Lax5",showHelpButton:"nullState-module--showHelpButton--1yX1C",dragSection:"nullState-module--dragSection--DcgtF",howToGetAPair:"nullState-module--howToGetAPair--27gEc",shown:"nullState-module--shown--2LdsQ"}},"7B0+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n("q1tI"))&&"object"==typeof r&&"default"in r?r.default:r;function o(e){return o.warnAboutHMRDisabled&&(o.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),a.Children.only(e.children)}o.warnAboutHMRDisabled=!1;var i=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return a.createElement(o,null,a.createElement(e,t))}}:function(e){return e}};i.shouldWrapWithAppContainer=!1;t.AppContainer=o,t.hot=i,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){s.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(d,"canUseDOM",u),d}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var s=e[c],f=t[c];if(!1===(a=n?n.call(r,s,f,c):void 0)||void 0===a&&s!==f)return!1}return!0}},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),l=n("TJpk"),u=n.n(l),c=n("Wbzz"),s=n("0cfB"),f=n("10Zl"),d=n.n(f),T=function(e){var t,n=e.className,r=e.loading,o=e.children,l=i()(d.a.header,n),u=i()(d.a.logo,((t={})[d.a.spin]=r,t));return a.a.createElement("header",{className:l},a.a.createElement("div",{className:u}),a.a.createElement("div",{className:d.a.title},"sprite tile viewer"),o,a.a.createElement("a",{className:d.a.githubContainer,href:"https://github.com/city41/neospriteviewer"},a.a.createElement("div",{className:d.a.githubLogo})))},p=n("T3/A"),m=n.n(p),E=Math.floor(256/7),h=new Array(7).fill(1,0,15).map((function(e,t){var n=(t+1)*E;return[.6*n,.9*n,n,255]})),v=new Array(8).fill(1,0,15).map((function(e,t){var n=32*(t+1);return[n,.9*n,.6*n,255]}));h.unshift([0,0,0,0]);var A=m()(h,v).reduce((function(e,t){return e.concat(t)}),[]),g=n("jCuw"),y=n.n(g);function S(e,t){for(var n=[],r=0;r<8;++r){for(var a=[],o=0;o<8;++o){var i=e[t+(8*r+o)];a.push(i)}n.push(a)}return n}var b=[[0,0],[8,0],[0,8],[8,8]];var C=function(e){var t=e.className,n=e.data,o=e.index,l=e.onLoad,u=Object(r.useRef)(null);if(!n)return null;Object(r.useEffect)((function(){if(u&&u.current){var e=u.current.getContext("2d");if(e)u.current.width=16,u.current.height=16,!function(e,t){e.forEach((function(e,n){var r=t.createImageData(8,8);!function(e,t){for(var n=0;n<8;++n)for(var r=0;r<8;++r)for(var a=4*(8*n+r),o=t[n][r],i=0;i<4;++i)e.data[a+i]=o[i]}(r,e),t.putImageData(r,b[n][0],b[n][1])}))}(function(e){return[S(e,128),S(e,0),S(e,192),S(e,64)]}(function(e,t){for(var n=64*(t+1),r=[],a=64*t;a<n;a+=2)for(var o=e.c1Data[a],i=e.c1Data[a+1],l=e.c2Data[a],u=e.c2Data[a+1],c=0;c<8;++c){var s=0;s|=o>>c&1,s|=(i>>c&1)<<1,s|=(l>>c&1)<<2,s|=(u>>c&1)<<3,r.push(A[s])}return r}(n,o)),e),l&&l(),setTimeout((function(){u&&u.current&&(u.current.className=i()(y.a.tile,t,y.a.rendered))}),100)}}),[]);var c=i()(y.a.tile,t);return a.a.createElement("canvas",{className:c,ref:u})},w=C;w=a.a.memo(C);var M=function(e){var t=e.className,n=e.data,o=e.index,l=e.onLoad;if(!n)return null;var u=Object(r.useRef)(null);Object(r.useEffect)((function(){if(u&&u.current){u.current.width=8,u.current.height=8;var e=u.current.getContext("2d");if(e){var r=function(e,t){for(var n=32*t,r=[[],[],[],[],[],[],[],[]],a=0;a<8;++a){var o=e.sData[n++],i=o>>4&15,l=A[15&o],u=A[i];r[a][4]=l,r[a][5]=u}for(var c=0;c<8;++c){var s=e.sData[n++],f=s>>4&15,d=A[15&s],T=A[f];r[c][6]=d,r[c][7]=T}for(var p=0;p<8;++p){var m=e.sData[n++],E=m>>4&15,h=A[15&m],v=A[E];r[p][0]=h,r[p][1]=v}for(var g=0;g<8;++g){var y=e.sData[n++],S=y>>4&15,b=A[15&y],C=A[S];r[g][2]=b,r[g][3]=C}return r}(n,o);setTimeout((function(){!function(e,t){var n=t.createImageData(8,8);!function(e,t){for(var n=0;n<8;++n)for(var r=0;r<8;++r)for(var a=4*(8*n+r),o=t[n][r],i=0;i<4;++i)e.data[a+i]=o[i]}(n,e),t.putImageData(n,0,0)}(r,e),l&&l(),setTimeout((function(){u&&u.current&&(u.current.className=i()(y.a.tile,t,y.a.rendered))}),100)}),1)}}}),[]);var c=i()(y.a.tile,t);return a.a.createElement("canvas",{className:c,ref:u})},R=M;R=a.a.memo(M);var _=n("KQm4");function O(e,t){for(var n=[],r=0;r<8;++r){for(var a=[],o=0;o<8;++o){var i=e[t+(8*r+o)];a.push(i)}n.push(a)}return n}var N=[[0,0],[0,8],[8,0],[8,8]];function P(e,t){var n,r=function(e,t){for(var n=64*(t+1),r=[],a=64*t;a<n;a+=2)for(var o=e.c1Data[a],i=e.c1Data[a+1],l=e.c2Data[a],u=e.c2Data[a+1],c=0;c<8;++c){var s=0;s|=o>>c&1,s|=(i>>c&1)<<1,s|=(l>>c&1)<<2,s|=(u>>c&1)<<3,r.push(s)}return r}(e,t);return function(e){var t=[[]];return e.forEach((function(e,n){for(var r=N[n][0],a=N[n][1],o=r;o<r+8;++o)for(var i=a;i<a+8;++i)t[o]=t[o]||[],t[o][i]=e[o-r][i-a]})),t}([O(n=r,128),O(n,0),O(n,192),O(n,64)])}var I=n("qNSc"),L=n.n(I);function G(e){if(e>=5&&e<=10)return"white";var t,n=A[e];return 0===n[3]?t=[0,0,0,255]:(t=n.map((function(e){return 255-e})))[3]=1,"rgba("+t.join(",")+")"}var x=function(e){var t,n=e.className,r=e.data,o=e.index,l=e.onPrev,u=e.onNext,c=e.onClose;if(!r||o<0)return null;var s=i()(L.a.detailedTile,n,((t={})[L.a.cTile]="C"===r.fileType,t[L.a.sTile]="S"===r.fileType,t)),f=function(e){return e.map((function(e){var t=e.map((function(e){return a.a.createElement("div",{className:L.a.cell,style:{backgroundColor:(t=e,"rgba("+Object(_.a)(A[t]).join(",")+")"),color:G(e)}},e);var t}));return a.a.createElement("div",{className:L.a.row},t)}))}(function(e,t){return"C"===e.fileType?P(e,t):function(e,t){for(var n=32*t,r=[[],[],[],[],[],[],[],[]],a=0;a<8;++a){var o=e.sData[n++],i=o>>4&15,l=15&o;r[a][4]=l,r[a][5]=i}for(var u=0;u<8;++u){var c=e.sData[n++],s=c>>4&15,f=15&c;r[u][6]=f,r[u][7]=s}for(var d=0;d<8;++d){var T=e.sData[n++],p=T>>4&15,m=15&T;r[d][0]=m,r[d][1]=p}for(var E=0;E<8;++E){var h=e.sData[n++],v=h>>4&15,A=15&h;r[E][2]=A,r[E][3]=v}return r}(e,t)}(r,o)),d=i()(L.a.closeButton,"button");return a.a.createElement("div",{className:s},a.a.createElement("div",{className:L.a.cellContainer},f),a.a.createElement("div",{className:L.a.closeContainer},a.a.createElement("h2",null,"tile index 0x",o.toString(16).toUpperCase()," (",o,")"),a.a.createElement("button",{className:"button",onClick:l},"prev"),a.a.createElement("button",{className:"button",onClick:u},"next"),a.a.createElement("button",{className:d,onClick:c},"close")))},j=x;j=a.a.memo(x);var H=n("67co"),k=n.n(H);function D(e){var t=/.*[cC](\d).*/g.exec(e);return t?parseInt(t[1],10):null}function B(e){var t=D(e.name);return!!(t&&1&t)}function U(e){return 2===e.length&&Array.from(e).every((function(e){return!!D(e.name)}))}function F(e){return 1===e.length&&(t=e[0].name,!(!(n=/.*[sS](\d).*/g.exec(t))||!parseInt(n[1],10)));var t,n}function q(e,t){return e.length%t==0}Object(s.setConfig)({pureSFC:!0});var Y=function(e){e.className;var t=e.onLoad,n=e.statusMessage,o=Object(r.useState)(null),i=o[0],l=o[1],u=Object(r.useState)(1),c=u[0],s=u[1];return a.a.createElement("div",null,a.a.createElement("input",{type:"file",onChange:function(e){l(null);var n=e.target.files,r=e.target,a=function(e){t(e?Object.assign({},e,{filename:e.filename+c}):e),s((function(e){return e+1})),r.value=""};if(!n||0===n.length)return a(null);if(!U(n)&&!F(n))return l("Please choose a pair of C ROM files or an S ROM file");if(U(n)){if(!function(e){var t=D(e[0].name),n=D(e[1].name);if(!t||!n)return!1;var r=Math.min(t,n);return Math.max(t,n)-r==1&&!!(1&r)}(n))return l("Please choose a proper pair, click the help below");var o=new FileReader;o.onload=function(e){var t=new FileReader;t.onload=function(e){var r=new Uint8Array(B(n[0])?o.result:t.result),i=new Uint8Array(B(n[1])?o.result:t.result);q(r,64)&&q(i,64)?a({fileType:"C",c1Data:r,c2Data:i,filename:n[0].name}):l("Invalid files, not multiples of 64 bytes")},t.readAsArrayBuffer(n[1])},o.readAsArrayBuffer(n[0])}else{var i=new FileReader;i.onload=function(e){var t=new Uint8Array(i.result);q(t,32)?a({fileType:"S",sData:t,filename:n[0].name}):l("Invalid file, not multiple of 32 bytes")},i.readAsArrayBuffer(n[0])}},multiple:!0}),a.a.createElement("span",{className:k.a.errorMessage},i||n))},W=n("6Aug"),X=n.n(W),z=function(e){var t,n=e.className,o=Object(r.useState)(!1),l=o[0],u=o[1],c=i()(X.a.nullState,n),s=i()(X.a.howToGetAPair,((t={})[X.a.shown]=l,t)),f=i()("button",X.a.showHelpButton);return a.a.createElement("div",{className:c},a.a.createElement("div",{className:X.a.callout},a.a.createElement("h1",null,"View the sprite tiles of a Neo Geo game"),a.a.createElement("p",null,"choose an S ROM file or a C ROM pair from a game's romset in the file chooser above"),!l&&a.a.createElement("button",{className:f,onClick:function(){return u(!0)}},"help")),a.a.createElement("div",{className:s},a.a.createElement("h2",null,"Where to get these files"),a.a.createElement("p",null,"Neo Geo ROMs are usually bundled in a zip file. Unzip a game and you'll find a bunch of files. You are interested in S files or C files."),a.a.createElement("h2",null,"How to get an S ROM file"),a.a.createElement("ul",null,a.a.createElement("li",null,"Unzip a Neo Geo game"),a.a.createElement("li",null,"There will usually be one S file, such as ",a.a.createElement("code",null,"201-s1.s1")," in Metal Slug or ",a.a.createElement("code",null,"019-s1.rom")," in League Bowling"),a.a.createElement("li",null,"Choose that file in the file dialog above")),a.a.createElement("h2",null,"How to get a C ROM file pair"),a.a.createElement("ul",null,a.a.createElement("li",null,"Unzip a Neo Geo game"),a.a.createElement("li",null,"There will be at least two C ROM files, such as ",a.a.createElement("code",null,"019-c1.rom")," and ",a.a.createElement("code",null,"019-c2.rom")," for League Bowling, or ",a.a.createElement("code",null,"RBFF1_C1.rom")," and ",a.a.createElement("code",null,"RBFF1_C2.rom")," for Real Bout Fatal Fury."),a.a.createElement("li",null,"Choose those two files in the file dialog above")),a.a.createElement("p",null,"Bigger games will have more C ROM file pairs. Real Bout Fatal Fury has C1, C2, C3, C4, C5, C6, C7 and C8 ROMs. You can grab any pair, as long as they go together. C1 and C2 go together, C3 and C4 go together, and so on."),a.a.createElement("h2",null,"What is the difference between C and S?"),a.a.createElement("p",null,'The data inside C ROMs is for the main sprites of the game: the characters, backgrounds, bullets, etc. The data inside the S ROMs is for the fix layer. This layer is drawn above all sprites and it never scrolls. So S data is for things like the current score, number of lives, etc. The "HUD" if you will.'),a.a.createElement("h2",null,"Why are the colors so weird?"),a.a.createElement("p",null,"The sprites are stored separate from the color palettes. There's no good way to get the color data from a ROM without running the game. So an alternating blue/yellow palette was chosen as it allows the different colors to stand out."),a.a.createElement("p",null,"For more info on tiles and palettes,"," ",a.a.createElement("a",{href:"https://mattgreer.dev/blog/extracting-neo-geo-emulator-graphics-data-to-create-animated-gifs/#lets-talk-about-the-neo-geo"},"this blog post I wrote")," ","goes into more detail.")))},Q=(n("f2vg"),n("vGFT")),K=n.n(Q);function V(e){return"toLocaleString"in new Number(e)?e.toLocaleString():e.toString()}Object(s.setConfig)({pureSFC:!0});var J="https://city41.github.io/neospriteviewer/fool.png";t.default=function(){var e,t=Object(r.useState)(null),n=t[0],o=t[1],l=Object(r.useState)(!1),s=l[0],f=l[1],d=Object(r.useState)(-1),p=d[0],m=d[1],E=function(e){if(!e)return{tileIndices:null,numTiles:0,totalTiles:0};var t=null;t="C"===e.fileType?e.c1Data.length/64:e.sData.length/32;var n=window.chrome&&"S"===e.fileType?256:1024,r=Math.min(t,n);return{tileIndices:new Array(r).fill(1,0,r).map((function(e,t){return t+0})),numTiles:r,totalTiles:t}}(n),h=E.tileIndices,v=E.numTiles,A=E.totalTiles,g=n&&"C"===n.fileType?w:R,y=i()(K.a.tile,((e={})[K.a.cTile]=n&&"C"===n.fileType,e[K.a.sTile]=n&&"S"===n.fileType,e));return a.a.createElement(c.a,{query:"2981219951",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.title},{name:"keywords",content:e.site.siteMetadata.keywords},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:e.site.siteMetadata.twitterHandle},{name:"twitter:title",content:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description},{name:"twitter:image",content:J},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:type",content:"website"},{name:"og:url",content:"https://city41.github.io/neospriteviewer"},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:image",content:J},{name:"og:title",content:e.site.siteMetadata.title}]},a.a.createElement("html",{lang:"en"})),a.a.createElement("div",{className:K.a.root},a.a.createElement(T,{className:K.a.header,loading:!!h&&!s},a.a.createElement(Y,{onLoad:function(e){f(!1),o(e)},data:e,statusMessage:v<A?"there are "+V(A)+" tiles in total, but only showing first "+V(v):null})),a.a.createElement("div",{className:K.a.tilesContainer},!h&&a.a.createElement(z,null),(h||[]).map((function(e,t,r){var o,l,u=i()(K.a.tileContainer,((o={})[K.a.tileSelected]=t===p,o));return a.a.createElement("div",{className:u,onClick:function(){return m(e)}},a.a.createElement(g,{key:(null!==(l=null==n?void 0:n.filename)&&void 0!==l?l:"X")+"-"+e,className:y,data:n,index:e,onLoad:t===r.length-1?function(){return f(!0)}:void 0}),a.a.createElement("div",{className:K.a.tileIndex},e))}))),p>-1&&a.a.createElement(j,{onPrev:function(){return m(Math.max(0,p-1))},onNext:function(){return m(Math.min(v-1,p+1))},onClose:function(){return m(-1)},className:K.a.detailedTile,data:n,index:p}),a.a.createElement("div",{className:K.a.fool})))}})}},"T3/A":function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var r=Object.prototype.toString,a=Math.max;var o,i,l=(o=function(e){if(!e||!e.length)return[];var t=0;return e=function(e,t){for(var n=-1,r=e?e.length:0,a=0,o=[];++n<r;){var i=e[n];t(i,n,e)&&(o[a++]=i)}return o}(e,(function(e){if(function(e){return!!e&&"object"==typeof e}(n=e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?r.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}(n))return t=a(e.length,t),!0;var n})),function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(t,(function(t){return function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}(e,(n=t,function(e){return null==e?void 0:e[n]}));var n}))},i=a(void 0===i?o.length-1:i,0),function(){for(var e=arguments,t=-1,r=a(e.length-i,0),l=Array(r);++t<r;)l[t]=e[i+t];t=-1;for(var u=Array(i+1);++t<i;)u[t]=e[t];return u[i]=l,n(o,this,u)});e.exports=l},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),u=f(n("bmMU")),c=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,h,v=(0,l.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),A=(m=v,h=E=function(e){function t(){return T(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),l=(0,c.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,u,c,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(l=u;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=f)return!1;var d=t instanceof Date,T=n instanceof Date;if(d!=T)return!1;if(d&&T)return t.getTime()==n.getTime();var p=t instanceof RegExp,m=n instanceof RegExp;if(p!=m)return!1;if(p&&m)return t.toString()==n.toString();var E=a(t);if((u=E.length)!==a(n).length)return!1;for(l=u;0!=l--;)if(!o.call(n,E[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=u;0!=l--;)if(!("_owner"===(c=E[l])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},f2vg:function(e,t,n){},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jCuw:function(e,t,n){e.exports={tile:"tile-module--tile--3HS9P",rendered:"tile-module--rendered--2lZM1"}},qNSc:function(e,t,n){e.exports={detailedTile:"detailedTile-module--detailedTile--3y6vP",cTile:"detailedTile-module--cTile--3iGe6",sTile:"detailedTile-module--sTile--J09xW",cellContainer:"detailedTile-module--cellContainer--3eukf",row:"detailedTile-module--row--1Rztv",cell:"detailedTile-module--cell--n8_dT",closeContainer:"detailedTile-module--closeContainer--16HeK",closeButton:"detailedTile-module--closeButton--2U2MY"}},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("YVoz")),l=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var c,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,l.TAG_NAMES.TITLE),n=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var c=o[u],s=(0,i.default)({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),v=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:e.cancelAnimationFrame||v,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,d=e.title,T=e.titleAttributes;M(l.TAG_NAMES.BODY,r),M(l.TAG_NAMES.HTML,a),w(d,T);var p={baseTag:R(l.TAG_NAMES.BASE,n),linkTags:R(l.TAG_NAMES.LINK,o),metaTags:R(l.TAG_NAMES.META,i),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,u),scriptTags:R(l.TAG_NAMES.SCRIPT,s),styleTags:R(l.TAG_NAMES.STYLE,f)},m={},E={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=p[e].oldTags)})),t&&t(),c(e,m,E)},C=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=C(e)),M(l.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var f=o.indexOf(c);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},_=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},N=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=O(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=_(n),o=C(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&g(S),e.defer?S=A((function(){b(e,(function(){S=null}))})):(b(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,d=void 0===f?"":f,T=e.titleAttributes;return{base:N(l.TAG_NAMES.BASE,t,r),bodyAttributes:N(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(l.ATTRIBUTE_NAMES.HTML,a,r),link:N(l.TAG_NAMES.LINK,o,r),meta:N(l.TAG_NAMES.META,i,r),noscript:N(l.TAG_NAMES.NOSCRIPT,u,r),script:N(l.TAG_NAMES.SCRIPT,c,r),style:N(l.TAG_NAMES.STYLE,s,r),title:N(l.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=y}).call(this,n("yLpj"))},vGFT:function(e,t,n){e.exports={root:"index-module--root--OnpaA",header:"index-module--header--2Vq0q",spinner:"index-module--spinner--2CrOq",tilesContainer:"index-module--tilesContainer--3rnbq",tileContainer:"index-module--tileContainer--12Ugs",tile:"index-module--tile--d2rEI",tileSelected:"index-module--tileSelected--csJh2",tileIndex:"index-module--tileIndex--20Bbb",cTile:"index-module--cTile--1YyuF",sTile:"index-module--sTile--3Xyqq",fool:"index-module--fool--218QX",detailedTile:"index-module--detailedTile--1vXtq"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7dcbd5293ab2d4c6e315.js.map