(self.webpackChunkstrapicms=self.webpackChunkstrapicms||[]).push([[1452],{1107:(b,T,e)=>{var a=e(84856),f=e(52593),d=f(a);b.exports=d},92403:(b,T,e)=>{var a=e(1107),f=e(47727);function d(s,u){var x=-1,g=f(s)?Array(s.length):[];return a(s,function(h,M,C){g[++x]=u(h,M,C)}),g}b.exports=d},16429:(b,T,e)=>{var a=e(36393),f=e(82393),d=e(90040),s=e(92403),u=e(63135),x=e(20435),g=e(9998),h=e(51339),M=e(26126);function C(O,p,c){p.length?p=a(p,function(y){return M(y)?function(j){return f(j,y.length===1?y[0]:y)}:y}):p=[h];var m=-1;p=a(p,x(d));var P=s(O,function(y,j,L){var w=a(p,function(D){return D(y)});return{criteria:w,index:++m,value:y}});return u(P,function(y,j){return g(y,j,c)})}b.exports=C},58200:(b,T,e)=>{var a=e(31507),f=e(55164);function d(s,u){return a(s,u,function(x,g){return f(s,g)})}b.exports=d},63135:b=>{function T(e,a){var f=e.length;for(e.sort(a);f--;)e[f]=e[f].value;return e}b.exports=T},17654:(b,T,e)=>{var a=e(85194);function f(d,s){if(d!==s){var u=d!==void 0,x=d===null,g=d===d,h=a(d),M=s!==void 0,C=s===null,O=s===s,p=a(s);if(!C&&!p&&!h&&d>s||h&&M&&O&&!C&&!p||x&&M&&O||!u&&O||!g)return 1;if(!x&&!h&&!p&&d<s||p&&u&&g&&!x&&!h||C&&u&&g||!M&&g||!O)return-1}return 0}b.exports=f},9998:(b,T,e)=>{var a=e(17654);function f(d,s,u){for(var x=-1,g=d.criteria,h=s.criteria,M=g.length,C=u.length;++x<M;){var O=a(g[x],h[x]);if(O){if(x>=C)return O;var p=u[x];return O*(p=="desc"?-1:1)}}return d.index-s.index}b.exports=f},52593:(b,T,e)=>{var a=e(47727);function f(d,s){return function(u,x){if(u==null)return u;if(!a(u))return d(u,x);for(var g=u.length,h=s?g:-1,M=Object(u);(s?h--:++h<g)&&x(M[h],h,M)!==!1;);return u}}b.exports=f},25003:(b,T,e)=>{var a=e(62186),f=e(3243);function d(s,u,x,g,h,M){return f(s)&&f(u)&&(M.set(u,s),a(s,u,void 0,d,M),M.delete(u)),s}b.exports=d},75719:(b,T,e)=>{var a=e(51751),f=e(52431),d=e(25003),s=e(2897),u=f(function(x){return x.push(void 0,d),a(s,void 0,x)});b.exports=u},2897:(b,T,e)=>{var a=e(62186),f=e(48205),d=f(function(s,u,x,g){a(s,u,x,g)});b.exports=d},47184:(b,T,e)=>{var a=e(58200),f=e(16065),d=f(function(s,u){return s==null?{}:a(s,u)});b.exports=d},8243:(b,T,e)=>{var a=e(93367),f=e(16429),d=e(52431),s=e(65145),u=d(function(x,g){if(x==null)return[];var h=g.length;return h>1&&s(x,g[0],g[1])?g=[]:h>2&&s(g[0],g[1],g[2])&&(g=[g[0]]),f(x,a(g,1),[])});b.exports=u},42982:(b,T,e)=>{var a=e(83470);function f(d,s){return d==null?!0:a(d,s)}b.exports=f},9217:(b,T,e)=>{"use strict";e.d(T,{Z:()=>gt});var a=e(60832),f=e(27279),d=e(12439),s=e(80174),u=e(74372),x=e(58471),g=e(89651),h=e(20466),M=e(20381);function C(t,l){return Object.keys(t).reduce(function(n,r){return n[r]=(0,u.pi)({timeZone:l},t[r]),n},{})}function O(t,l){var n=Object.keys((0,u.pi)((0,u.pi)({},t),l));return n.reduce(function(r,i){return r[i]=(0,u.pi)((0,u.pi)({},t[i]||{}),l[i]||{}),r},{})}function p(t,l){if(!l)return t;var n=g.C.formats;return(0,u.pi)((0,u.pi)((0,u.pi)({},n),t),{date:O(C(n.date,l),C(t.date||{},l)),time:O(C(n.time,l),C(t.time||{},l))})}var c=function(t,l,n,r,i){var o=t.locale,v=t.formats,E=t.messages,S=t.defaultLocale,N=t.defaultFormats,R=t.fallbackOnEmptyString,W=t.onError,K=t.timeZone,it=t.defaultRichTextElements;n===void 0&&(n={id:""});var st=n.id,Z=n.defaultMessage;(0,x.kG)(!!st,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var k=String(st),I=E&&Object.prototype.hasOwnProperty.call(E,k)&&E[k];if(Array.isArray(I)&&I.length===1&&I[0].type===M.wD.literal)return I[0].value;if(!r&&I&&typeof I=="string"&&!it)return I.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=(0,u.pi)((0,u.pi)({},it),r||{}),v=p(v,K),N=p(N,K),!I){if(R===!1&&I==="")return I;if((!Z||o&&o.toLowerCase()!==S.toLowerCase())&&W(new h.$6(n,o)),Z)try{var X=l.getMessageFormat(Z,S,N,i);return X.format(r)}catch(Y){return W(new h.X9('Error formatting default message for: "'.concat(k,'", rendering default message verbatim'),o,n,Y)),typeof Z=="string"?Z:k}return k}try{var X=l.getMessageFormat(I,o,v,(0,u.pi)({formatters:l},i||{}));return X.format(r)}catch(Y){W(new h.X9('Error formatting message: "'.concat(k,'", using ').concat(Z?"default message":"id"," as fallback."),o,n,Y))}if(Z)try{var X=l.getMessageFormat(Z,S,N,i);return X.format(r)}catch(Y){W(new h.X9('Error formatting the default message for: "'.concat(k,'", rendering message verbatim'),o,n,Y))}return typeof I=="string"?I:typeof Z=="string"?Z:k},m=e(26054),P=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function y(t,l,n){var r=t.locale,i=t.formats,o=t.onError;n===void 0&&(n={});var v=n.format,E=v&&(0,m.TB)(i,"number",v,o)||{},S=(0,m.L6)(n,P,E);return l(r,S)}function j(t,l,n,r){r===void 0&&(r={});try{return y(t,l,r).format(n)}catch(i){t.onError(new h.Qe("Error formatting number.",t.locale,i))}return String(n)}function L(t,l,n,r){r===void 0&&(r={});try{return y(t,l,r).formatToParts(n)}catch(i){t.onError(new h.Qe("Error formatting number.",t.locale,i))}return[]}var w=e(35993),D=["numeric","style"];function A(t,l,n){var r=t.locale,i=t.formats,o=t.onError;n===void 0&&(n={});var v=n.format,E=!!v&&(0,m.TB)(i,"relative",v,o)||{},S=(0,m.L6)(n,D,E);return l(r,S)}function F(t,l,n,r,i){i===void 0&&(i={}),r||(r="second");var o=Intl.RelativeTimeFormat;o||t.onError(new w.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,w.jK.MISSING_INTL_API));try{return A(t,l,i).format(n,r)}catch(v){t.onError(new h.Qe("Error formatting relative time.",t.locale,v))}return String(n)}var B=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function U(t,l,n,r){var i=t.locale,o=t.formats,v=t.onError,E=t.timeZone;r===void 0&&(r={});var S=r.format,N=(0,u.pi)((0,u.pi)({},E&&{timeZone:E}),S&&(0,m.TB)(o,l,S,v)),R=(0,m.L6)(r,B,N);return l==="time"&&!R.hour&&!R.minute&&!R.second&&!R.timeStyle&&!R.dateStyle&&(R=(0,u.pi)((0,u.pi)({},R),{hour:"numeric",minute:"numeric"})),n(i,R)}function z(t,l){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],v=o===void 0?{}:o,E=typeof i=="string"?new Date(i||0):i;try{return U(t,"date",l,v).format(E)}catch(S){t.onError(new h.Qe("Error formatting date.",t.locale,S))}return String(E)}function Q(t,l){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],v=o===void 0?{}:o,E=typeof i=="string"?new Date(i||0):i;try{return U(t,"time",l,v).format(E)}catch(S){t.onError(new h.Qe("Error formatting time.",t.locale,S))}return String(E)}function tt(t,l){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],v=n[2],E=v===void 0?{}:v,S=t.timeZone,N=t.locale,R=t.onError,W=(0,m.L6)(E,B,S?{timeZone:S}:{});try{return l(N,W).formatRange(i,o)}catch(K){R(new h.Qe("Error formatting date time range.",t.locale,K))}return String(i)}function G(t,l){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],v=o===void 0?{}:o,E=typeof i=="string"?new Date(i||0):i;try{return U(t,"date",l,v).formatToParts(E)}catch(S){t.onError(new h.Qe("Error formatting date.",t.locale,S))}return[]}function J(t,l){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],v=o===void 0?{}:o,E=typeof i=="string"?new Date(i||0):i;try{return U(t,"time",l,v).formatToParts(E)}catch(S){t.onError(new h.Qe("Error formatting time.",t.locale,S))}return[]}var _=["type"];function $(t,l,n,r){var i=t.locale,o=t.onError;r===void 0&&(r={}),Intl.PluralRules||o(new w.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,w.jK.MISSING_INTL_API));var v=(0,m.L6)(r,_);try{return l(i,v).select(n)}catch(E){o(new h.Qe("Error formatting plural.",i,E))}return"other"}var V=["type","style"],q=Date.now();function H(t){return"".concat(q,"_").concat(t,"_").concat(q)}function lt(t,l,n,r){r===void 0&&(r={});var i=rt(t,l,n,r).reduce(function(o,v){var E=v.value;return typeof E!="string"?o.push(E):typeof o[o.length-1]=="string"?o[o.length-1]+=E:o.push(E),o},[]);return i.length===1?i[0]:i.length===0?"":i}function rt(t,l,n,r){var i=t.locale,o=t.onError;r===void 0&&(r={});var v=Intl.ListFormat;v||o(new w.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,w.jK.MISSING_INTL_API));var E=(0,m.L6)(r,V);try{var S={},N=n.map(function(R,W){if(typeof R=="object"){var K=H(W);return S[K]=R,K}return String(R)});return l(i,E).formatToParts(N).map(function(R){return R.type==="literal"?R:(0,u.pi)((0,u.pi)({},R),{value:S[R.value]||R.value})})}catch(R){o(new h.Qe("Error formatting list.",i,R))}return n}var ut=["style","type","fallback","languageDisplay"];function ct(t,l,n,r){var i=t.locale,o=t.onError,v=Intl.DisplayNames;v||o(new w.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,w.jK.MISSING_INTL_API));var E=(0,m.L6)(r,ut);try{return l(i,E).of(n)}catch(S){o(new h.Qe("Error formatting display name.",i,S))}}function ft(t){var l=t?t[Object.keys(t)[0]]:void 0;return typeof l=="string"}function mt(t){t.onWarn&&t.defaultRichTextElements&&ft(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function dt(t,l){var n=(0,m.ax)(l),r=(0,u.pi)((0,u.pi)({},m.Z0),t),i=r.locale,o=r.defaultLocale,v=r.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&v?v(new h.gb('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&v&&v(new h.gb('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(v&&v(new h.OV('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),mt(r),(0,u.pi)((0,u.pi)({},r),{formatters:n,formatNumber:j.bind(null,r,n.getNumberFormat),formatNumberToParts:L.bind(null,r,n.getNumberFormat),formatRelativeTime:F.bind(null,r,n.getRelativeTimeFormat),formatDate:z.bind(null,r,n.getDateTimeFormat),formatDateToParts:G.bind(null,r,n.getDateTimeFormat),formatTime:Q.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:tt.bind(null,r,n.getDateTimeFormat),formatTimeToParts:J.bind(null,r,n.getDateTimeFormat),formatPlural:$.bind(null,r,n.getPluralRules),formatMessage:c.bind(null,r,n),$t:c.bind(null,r,n),formatList:lt.bind(null,r,n.getListFormat),formatListToParts:rt.bind(null,r,n.getListFormat),formatDisplayName:ct.bind(null,r,n.getDisplayNames)})}var pt=e(97340);function et(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function nt(t){return t&&Object.keys(t).reduce(function(l,n){var r=t[n];return l[n]=(0,pt.Gt)(r)?(0,s.dt)(r):r,l},{})}var at=function(t,l,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var v=nt(r),E=c.apply(void 0,(0,a.ev)([t,l,n,v],i,!1));return Array.isArray(E)?f.Children.toArray(E):E},ot=function(t,l){var n=t.defaultRichTextElements,r=(0,a._T)(t,["defaultRichTextElements"]),i=nt(n),o=dt((0,a.pi)((0,a.pi)((0,a.pi)({},s.Z0),r),{defaultRichTextElements:i}),l),v={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:i};return(0,a.pi)((0,a.pi)({},o),{formatMessage:at.bind(null,v,o.formatters),$t:at.bind(null,v,o.formatters)})},vt=function(t){(0,a.ZT)(l,t);function l(){var n=t!==null&&t.apply(this,arguments)||this;return n.cache=(0,m.Sn)(),n.state={cache:n.cache,intl:ot(et(n.props),n.cache),prevConfig:et(n.props)},n}return l.getDerivedStateFromProps=function(n,r){var i=r.prevConfig,o=r.cache,v=et(n);return(0,s.wU)(i,v)?null:{intl:ot(v,o),prevConfig:v}},l.prototype.render=function(){return(0,s.lq)(this.state.intl),f.createElement(d.zt,{value:this.state.intl},this.props.children)},l.displayName="IntlProvider",l.defaultProps=s.Z0,l}(f.PureComponent);const gt=vt},57150:(b,T,e)=>{"use strict";e.d(T,{P1:()=>M});var a="NOT_FOUND";function f(O){var p;return{get:function(m){return p&&O(p.key,m)?p.value:a},put:function(m,P){p={key:m,value:P}},getEntries:function(){return p?[p]:[]},clear:function(){p=void 0}}}function d(O,p){var c=[];function m(L){var w=c.findIndex(function(A){return p(L,A.key)});if(w>-1){var D=c[w];return w>0&&(c.splice(w,1),c.unshift(D)),D.value}return a}function P(L,w){m(L)===a&&(c.unshift({key:L,value:w}),c.length>O&&c.pop())}function y(){return c}function j(){c=[]}return{get:m,put:P,getEntries:y,clear:j}}var s=function(p,c){return p===c};function u(O){return function(c,m){if(c===null||m===null||c.length!==m.length)return!1;for(var P=c.length,y=0;y<P;y++)if(!O(c[y],m[y]))return!1;return!0}}function x(O,p){var c=typeof p=="object"?p:{equalityCheck:p},m=c.equalityCheck,P=m===void 0?s:m,y=c.maxSize,j=y===void 0?1:y,L=c.resultEqualityCheck,w=u(P),D=j===1?f(w):d(j,w);function A(){var F=D.get(arguments);if(F===a){if(F=O.apply(null,arguments),L){var B=D.getEntries(),U=B.find(function(z){return L(z.value,F)});U&&(F=U.value)}D.put(arguments,F)}return F}return A.clearCache=function(){return D.clear()},A}function g(O){var p=Array.isArray(O[0])?O[0]:O;if(!p.every(function(m){return typeof m=="function"})){var c=p.map(function(m){return typeof m=="function"?"function "+(m.name||"unnamed")+"()":typeof m}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+c+"]")}return p}function h(O){for(var p=arguments.length,c=new Array(p>1?p-1:0),m=1;m<p;m++)c[m-1]=arguments[m];var P=function(){for(var j=arguments.length,L=new Array(j),w=0;w<j;w++)L[w]=arguments[w];var D=0,A,F={memoizeOptions:void 0},B=L.pop();if(typeof B=="object"&&(F=B,B=L.pop()),typeof B!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof B+"]");var U=F,z=U.memoizeOptions,Q=z===void 0?c:z,tt=Array.isArray(Q)?Q:[Q],G=g(L),J=O.apply(void 0,[function(){return D++,B.apply(null,arguments)}].concat(tt)),_=O(function(){for(var V=[],q=G.length,H=0;H<q;H++)V.push(G[H].apply(null,arguments));return A=J.apply(null,V),A});return Object.assign(_,{resultFunc:B,memoizedResultFunc:J,dependencies:G,lastResult:function(){return A},recomputations:function(){return D},resetRecomputations:function(){return D=0}}),_};return P}var M=h(x),C=function(p,c){if(c===void 0&&(c=M),typeof p!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof p));var m=Object.keys(p),P=c(m.map(function(y){return p[y]}),function(){for(var y=arguments.length,j=new Array(y),L=0;L<y;L++)j[L]=arguments[L];return j.reduce(function(w,D,A){return w[m[A]]=D,w},{})});return P}},35750:(b,T,e)=>{"use strict";e.d(T,{D:()=>d});var a=e(74081),f=e(68263);const d=({children:s})=>(0,a.jsx)(f.x,{paddingLeft:10,paddingRight:10,children:s})},42925:(b,T,e)=>{"use strict";e.d(T,{A:()=>p,T:()=>C});var a=e(74081),f=e(27279),d=e(72450);const s=c=>{const m=(0,f.useRef)(null),[P,y]=(0,f.useState)(!0),j=([L])=>{y(L.isIntersecting)};return(0,f.useEffect)(()=>{const L=m.current,w=new IntersectionObserver(j,c);return L&&w.observe(m.current),()=>{L&&w.disconnect()}},[m,c]),[m,P]};var u=e(66705);const x=(c,m)=>{const P=(0,u.W)(m);(0,f.useLayoutEffect)(()=>{const y=new ResizeObserver(P);return Array.isArray(c)?c.forEach(j=>{j.current&&y.observe(j.current)}):c.current&&y.observe(c.current),()=>{y.disconnect()}},[c,P])};var g=e(68263),h=e(33110),M=e(19915);const C=c=>{const m=(0,f.useRef)(null),[P,y]=(0,f.useState)(null),[j,L]=s({root:null,rootMargin:"0px",threshold:0});return x(j,()=>{j.current&&y(j.current.getBoundingClientRect())}),(0,f.useEffect)(()=>{m.current&&y(m.current.getBoundingClientRect())},[m]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:P?.height},ref:j,children:L&&(0,a.jsx)(p,{ref:m,...c})}),!L&&(0,a.jsx)(p,{...c,sticky:!0,width:P?.width})]})};C.displayName="HeaderLayout";const O=(0,d.ZP)(g.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,p=f.forwardRef(({navigationAction:c,primaryAction:m,secondaryAction:P,subtitle:y,title:j,sticky:L,width:w,...D},A)=>{const F=typeof y=="string";return L?(0,a.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:w,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(h.k,{justifyContent:"space-between",children:[(0,a.jsxs)(h.k,{children:[c&&(0,a.jsx)(g.x,{paddingRight:3,children:c}),(0,a.jsxs)(g.x,{children:[(0,a.jsx)(M.Z,{variant:"beta",as:"h1",...D,children:j}),F?(0,a.jsx)(M.Z,{variant:"pi",textColor:"neutral600",children:y}):y]}),P?(0,a.jsx)(g.x,{paddingLeft:4,children:P}):null]}),(0,a.jsx)(h.k,{children:m?(0,a.jsx)(g.x,{paddingLeft:2,children:m}):void 0})]})}):(0,a.jsxs)(g.x,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,a.jsx)(g.x,{paddingBottom:2,children:c}):null,(0,a.jsxs)(h.k,{justifyContent:"space-between",children:[(0,a.jsxs)(h.k,{minWidth:0,children:[(0,a.jsx)(M.Z,{as:"h1",variant:"alpha",...D,children:j}),P?(0,a.jsx)(g.x,{paddingLeft:4,children:P}):null]}),m]}),F?(0,a.jsx)(M.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:y}):y]})})},65e3:(b,T,e)=>{"use strict";e.d(T,{o:()=>u});var a=e(74081),f=e(72450),d=e(68263);const s=(0,f.ZP)(d.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:x="main-content-title",...g})=>(0,a.jsx)(s,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...g})},89750:(b,T,e)=>{"use strict";e.d(T,{z:()=>u});var a=e(74081),f=e(72450),d=e(68263);const s=(0,f.ZP)(d.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:x})=>x.spaces[3]};
    top: ${({theme:x})=>x.spaces[3]};
  }
`,u=({children:x})=>(0,a.jsx)(s,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:x})},33653:(b,T,e)=>{"use strict";e.d(T,{$:()=>s});const a={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},f={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var d=e(12376);const s={colors:a.color,shadows:f.shadow,...d.x}},64270:(b,T,e)=>{"use strict";e.d(T,{Z:()=>d});var a=e(74081);const f=s=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,a.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),d=f},91396:(b,T,e)=>{"use strict";e.d(T,{Z:()=>d});var a=e(74081);const f=s=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,a.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),d=f},35969:(b,T,e)=>{"use strict";e.d(T,{Z:()=>d});var a=e(74081);const f=s=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...s,children:(0,a.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),d=f},32443:(b,T,e)=>{"use strict";e.d(T,{Z:()=>d});var a=e(74081);const f=s=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,a.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),d=f}}]);