"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("prop-types"),a=require("@material-ui/core/TextField"),t=require("@material-ui/core/Popover"),o=require("@material-ui/core/styles"),n=require("@material-ui/core/Button"),l=require("@material-ui/core/Tooltip"),i=require("@material-ui/core/Box"),d=require("@material-ui/core/Divider"),u=require("@material-ui/core/FormControl"),c=require("@material-ui/core/FormHelperText"),s=require("@material-ui/core/InputLabel"),p=require("@material-ui/core/Input"),h=require("@material-ui/core/InputAdornment"),g=require("@material-ui/core/Slider");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function b(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var t=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,t.get?t:{enumerable:!0,get:function(){return e[a]}})}})),r.default=e,Object.freeze(r)}var m=f(e),v=b(e),x=f(r),y=f(a),w=f(t),k=f(n),C=f(l),E=f(i),O=f(d),N=f(u),S=f(c),P=f(s),R=f(p),M=f(h),W=f(g);function j(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function q(){return(q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function A(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function T(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?A(Object(a),!0).forEach((function(r){j(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function D(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var z,F,L={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},I=(e,r)=>{var a="00000000".concat((16777215&e).toString(16).toUpperCase()).substr(-6);if(!Number.isNaN(r)&&void 0!==r){var t=r.toString(16).toUpperCase();1===t.length&&(t="0".concat(t)),a+=t}return a},B=e=>[(16711680&e)>>16,(65280&e)>>8,255&e],G=e=>{var r=e.map((e=>{var r=e||0;return r<0&&(r=0),r>255&&(r=255),r}));return r[3]<<24|r[0]<<16|r[1]<<8|r[2]},H=e=>{if(!e||e.length<3||e.length>4)return{error:"not valid size"};var r=e.map(((e,r)=>"string"==typeof e?"%"!==e[e.length-1]?Math.round(Number(e)*(3===r?255:1)):Math.round(Number(e.substring(0,e.length-1))/100*255):Math.round(3===r?255*e:e)));return{format:"rgb",value:G(r),rgb:r,alpha:r[3]}},V=e=>{var r,a=Number("0x".concat(e.substring(1)));if(!Number.isInteger(a)||Number.isNaN(a))return{error:"Not an hex value"};var t=[];if(7===e.length||9===e.length){var o=9===e.length?8:0;t[0]=a>>16+o&255,t[1]=a>>8+o&255,t[2]=a>>o&255,9===e.length&&(r=255&a,t[3]=r,a=G(t))}else{if(4!==e.length&&5!==e.length)return{error:"Wrong format"};var n=5===e.length?4:0;t[0]=a>>8+n&15,t[1]=a>>4+n&15,t[2]=a>>n&15,t[0]|=t[0]<<4,t[1]|=t[1]<<4,t[2]|=t[2]<<4,5===e.length&&(r=15&a,r|=r<<4,t[3]=r),a=G(t)}return{format:"hex",value:a,rgb:t,alpha:r}},X=e=>{var r=e;return"string"==typeof r&&(r.indexOf("deg")>-1?r=r.substr(0,r.length-3):r.indexOf("rad")>-1?r=Math.round(r.substr(0,r.length-3)*(180/Math.PI)):r.indexOf("turn")>-1&&(r=Math.round(360*r.substr(0,r.length-4))),r=parseFloat(r,10)),Number.isNaN(r)&&(r=0),r>=360&&(r%=360),r<0&&(r=0),r},Y=e=>{var r=e;return"string"==typeof r&&(r=parseFloat(r.indexOf("%")>-1?r.substring(0,r.length-1):r,10)),Number.isNaN(r)?r=0:r>100?r=100:r<0&&(r=0),r},_=e=>{if(!e||e.length<3||e.length>4)return{error:"Not a valid size"};var r,a=e,t=X(a[0]),o=Y(a[1]),n=Y(a[2]);a[0]=t,a[1]=o,a[2]=n,n/=100;var l=(o/=100)*(1-Math.abs(2*n-1)),i=l*(1-Math.abs(t/60%2-1)),d=n-l/2;0===o?(r=[n,n,n],d=0):r=t>=0&&t<60?[l,i,0]:t>=60&&t<120?[i,l,0]:t>=120&&t<180?[0,l,i]:t>=180&&t<240?[0,i,l]:t>=240&&t<300?[i,0,l]:[l,0,i],r[0]=Math.round(255*(r[0]+d)),r[1]=Math.round(255*(r[1]+d)),r[2]=Math.round(255*(r[2]+d));var u=a[3];return void 0!==u&&("string"==typeof u&&(u=u.indexOf("%")>-1?parseFloat(u.substring(0,u.length-1),10)/100:parseFloat(u,10)),u=Math.floor(255*u),r[3]=u),{format:"hsl",value:G(r),rgb:r,hsl:a,alpha:u}},U=e=>{if(!e||e.length<3||e.length>4)return{error:"Not a valid size"};var r,a=X(e[0]),t=Y(e[1]),o=Y(e[2]);if(o*=2.55,0===t)r=[o=Math.round(o),o,o];else{a/=360,t/=100;var n=Math.floor(6*a),l=6*a-n,i=Math.round(o*(1-t)),d=Math.round(o*(1-t*l)),u=Math.round(o*(1-t*(1-l)));o=Math.round(o),r=0===(n%=6)?[o,u,i]:1===n?[d,o,i]:2===n?[i,o,u]:3===n?[i,d,o]:4===n?[u,i,o]:[o,i,d]}var c=e[3];return void 0!==c&&("string"==typeof c&&(c=c.indexOf("%")>-1?parseFloat(c.substring(0,c.length-1),10)/100:parseFloat(c,10)),c=Math.floor(255*c),r[3]=c),{format:"hsl",value:G(r),rgb:r,hsv:e,alpha:c}},K=e=>{var r=e[0]/255,a=e[1]/255,t=e[2]/255,o=Math.min(r,a,t),n=Math.max(r,a,t);return{cmax:n,cmin:o,delta:n-o,r:r,g:a,b:t}},J=e=>{var{cmin:r,cmax:a,delta:t,r:o,g:n,b:l}=K(e),i=0,d=0,u=(r+a)/2;0!==t&&(d=t/(1-Math.abs(2*u-1)),d=Math.round(+(100*d).toFixed(1)),i=a===o?(n-l)/t%6:a===n?(l-o)/t+2:(o-n)/t+4,(i=Math.round(60*i))<0&&(i+=360));var c=[i,d,u=Math.round(u+100*u)];return 4===e.length&&(c[3]=e[3]/255),c},Q=e=>{var{cmax:r,delta:a,r:t,g:o,b:n}=K(e);if(0===a)return[0,0,Math.round(100*r)];var l,i=r,d=a/r,u=(r-t)/a,c=(r-o)/a,s=(r-n)/a;return(l=(l=t===r?s-c:o===r?2+u-s:4+c-u)/6%1)<0&&(l+=1),[l=Math.round(360*l),d=Math.round(100*d),i=Math.round(100*i)]},Z=e=>{var r=e.substring(e.indexOf("(")+1,e.indexOf(")"));return r.indexOf(",")>-1?r.split(","):r.indexOf(" ")>-1?r.split(" ").filter((e=>e.length>0&&"/"!==e)):void 0},$=["plain","hex","rgb","hsl","hsv"],ee=[e=>({format:"plain",value:L[e[0]]}),e=>V(e[0]),e=>H(e),e=>_(e),e=>U(e)],re=[e=>({format:"plain",value:L[e]}),e=>V(e),e=>H(Z(e)),e=>_(Z(e))],ae=[e=>void 0!==L[e],e=>e.startsWith("#"),e=>e.startsWith("rgb(")||e.startsWith("rgba("),e=>e.startsWith("hsl(")||e.startsWith("hsla(")],te=function(e,r){var a,t,o,n,l,i,d,u=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s={raw:e},p=r||"unknown";if("transparent"===e)s.name=e,p="plain",t=0;else if("string"==typeof e){var h=e.trim().toLocaleLowerCase(),g=ae.findIndex((e=>e(h)));g>-1&&(({value:a,format:p,rgb:o,hsl:n,alpha:t,error:i}=re[g](h)),"plain"===p&&(s.name=e),p&&(s.css={backgroundColor:e}))}else if(Number.isInteger(e))a=e,p="number";else if(Array.isArray(e)&&p){var f=$.findIndex((e=>e===p));f>-1?({value:a,format:p,rgb:o,hsl:n,hsv:l,alpha:t,error:i}=ee[f](e)):i="unkown format"}else e&&"r"in e&&"g"in e&&"b"in e?(o=[e.r,e.g,e.b],e.a&&o.push(e.a),({value:a,format:p,rgb:o,alpha:t,error:i}=H(o))):e&&"h"in e&&"s"in e&&"l"in e?(n=[e.h,e.s,e.l],e.a&&n.push(e.a),({value:a,format:p,rgb:o,hsl:n,alpha:t,error:i}=_(n))):e&&"h"in e&&"s"in e&&"v"in e&&(l=[e.h,e.s,e.v],e.a&&l.push(e.a),({value:a,format:p,rgb:o,hsv:l,alpha:t,error:i}=U(l)));void 0===a&&(a=0,t=0===t?t:void 0,s.css={backgroundImage:"\n        linear-gradient(45deg, #ccc 25%, transparent 25%), \n        linear-gradient(135deg, #ccc 25%, transparent 25%),\n        linear-gradient(45deg, transparent 75%, #ccc 75%),\n        linear-gradient(135deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px",backgroundColor:"white"},"transparent"!==e&&(p="unknown",s.name="none")),i&&(s.error=i),s.value=a,s.alpha=Number.isNaN(t)||void 0===t?1:t/255,s.format=p,u||1===s.alpha?1===s.alpha&&-16777216===s.value&&(d=255):d=Math.floor(255*s.alpha);var b=I(a,d);return s.hex=b,o=o||B(a),s.rgb=o,s.hsv=l||Q(o),s.hsl=n||J(o),s.css||(s.css={backgroundColor:"#".concat(b)}),s.name||(s.name=c&&Object.keys(L).find((e=>L[e]===a))||"color-".concat(b)),s},oe=(e,r,a)=>{var t;return"hex"===r&&(t="#".concat(I(e.value,a||1===e.alpha?void 0:Math.floor(255*e.alpha)))),t},ne=function(e,r,a,t){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n=e,l=!1;return e&&e.format&&e.name?n.error&&a&&(n.error=a(n.error)):(n=e,a&&"string"==typeof n&&(z&&t===F||(F=t,z={},Object.keys(L).forEach((e=>{z[a(e)]=e}))),l=(n=z[n]||n)!==e),(n=te(n,null,r,!o)).name&&a&&(n.translated=a(n.name),l&&n.translated&&(n.name=n.translated),n.error&&(n.error=a(n.error)))),n},le=r.oneOfType([r.shape({css:r.shape({}),value:r.number,hex:r.string,raw:r.oneOfType([r.string,r.array,r.number,r.shape]),name:r.string,alpha:r.number,rgb:r.arrayOf(r.number),hsv:r.arrayOf(r.number),hsl:r.arrayOf(r.number)}),r.string,r.number]),ie=r.objectOf(r.string),de=r.arrayOf(r.string),ue={use:()=>({i18n:{language:"us"},t:e=>e})},ce=e=>(e&&(ue.use=e),ue.use()),se=o.makeStyles({root:{backgroundImage:e=>e.colorError||e.alpha<1?"\n    linear-gradient(45deg, #ccc 25%, transparent 25%), \n    linear-gradient(135deg, #ccc 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #ccc 75%),\n    linear-gradient(135deg, transparent 75%, #ccc 75%)":"none",backgroundSize:"8px 8px",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px",backgroundColor:e=>e.backgroundColor||"#fff",boxShadow:"0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",borderColor:e=>e.borderColor||"#767676",borderStyle:"solid",borderWidth:e=>e.borderWidth||0,borderRadius:4,padding:0,width:e=>e.width,minWidth:e=>e.minWidth,height:e=>e.height,"& div":{content:'" "',background:e=>e.colorError?"repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent ".concat(e.width/2+2,"px,\n      #f44336 ").concat(e.width/2+2,"px,\n      #f44336 ").concat(e.width/2+4,"px\n    )"):"none",backgroundColor:e=>e.colorError?"transparent":e.backgroundColor||"#fff",width:e=>e.width,minWidth:e=>e.minWidth,height:e=>e.height,border:e=>e.colorError?"2px solid #f44336":"".concat(e.borderWidth||0,"px solid ").concat(e.borderColor||"#767676"),borderRadius:4,padding:0},"&:active":{boxShadow:"none"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0, 123, 255, 0.5)"}},tooltip:{width:"min-content"}}),pe=e=>{var{color:r,size:a,borderWidth:t,borderColor:o,forwardRef:n,tooltip:l,disableAlpha:i,className:d}=e,u=D(e,["color","size","borderWidth","borderColor","forwardRef","tooltip","disableAlpha","className"]),{t:c,i18n:s}=ce(),p=ne(r,i,c,s.language),h=c(l),g=p.css,f=p.hsl[2]-10;f<30&&(f=p.hsl[2]+50);var b=p.alpha,v=se(T({width:a,minWidth:a,height:a,hoverColor:p,borderColor:o,borderWidth:t,alpha:b,colorError:!!p.error},g)),x=m.default.createElement(k.default,q({"data-testid":"colorbutton",className:"".concat(v.root," ").concat(null!=d?d:""),ref:n,variant:"contained","aria-label":p.name},u),m.default.createElement("div",null));return l?m.default.createElement(C.default,{title:h},m.default.createElement("div",{className:v.tooltip},x)):x};pe.propTypes={color:le.isRequired,size:x.default.number,disableAlpha:x.default.bool,borderWidth:x.default.number,borderColor:x.default.string,tooltip:x.default.string,forwardRef:x.default.shape({current:x.default.elementType})},pe.defaultProps={size:24,borderWidth:0,borderColor:void 0,forwardRef:void 0,tooltip:void 0,disableAlpha:!1};var he="undefined"!=typeof window?v.useLayoutEffect:v.useEffect;function ge(e){var r=v.useRef(e);return he((()=>{r.current=e})),v.useCallback((function(){return(0,r.current)(...arguments)}),[])}var fe=o.makeStyles({root:{position:"absolute",width:"inherit",height:"inherit",background:e=>"".concat(e.cssRgb," none repeat scroll 0% 0%"),margin:0},gradientPosition:{position:"absolute",width:"100%",height:"100%"},hsvGradientS:{background:"rgba(0, 0, 0, 0) linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)) repeat scroll 0% 0%"},hsvGradientV:{background:"rgba(0, 0, 0, 0) linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)) repeat scroll 0% 0%"},hsvGradientCursor:{position:"absolute",top:0,left:0,borderColor:"#f0f0f0",borderWidth:1,borderStyle:"solid",boxShadow:"rgba(0, 0, 0, 0.37) 0px 1px 4px 0px",transition:"box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",borderRadius:4,cursor:e=>!e.pressed&&"pointer",zIndex:100,transform:"translate(-4px, -4px)","&:hover":{boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"},"&:focus":{outline:"none !important",boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"},"&:focus > div":{}},hsvGradientCursorC:{width:8,height:8,borderRadius:4,boxShadow:"white 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"}}),be=e=>{var{className:r,color:a,onChange:t}=e,o=D(e,["className","color","onChange"]),n=m.default.useRef(a),[l,i]=m.default.useState(!1),[d,u]=m.default.useState(!1);m.default.useEffect((()=>{n.current=a}));var c,s,p,h,g,f,b,v=m.default.useRef(),x=m.default.useRef(),y={x:0,y:0},w=(c=a.hsv[0],s=c/360,p=255,h=Math.floor(6*s),g=6*s-h,f=Math.round(p*(1-g)),b=Math.round(p*g),p=Math.round(p),0==(h%=6)?[p,b,0]:1===h?[f,p,0]:2===h?[0,p,b]:3===h?[0,f,p]:4===h?[b,0,p]:[p,0,f]),k="rgb(".concat(w[0],",").concat(w[1],",").concat(w[2],")"),C=fe(T(T({},o),{},{cssRgb:k})),E=(e,r)=>{y=e,x.current.style.top="".concat(e.y,"px"),x.current.style.left="".concat(e.x,"px"),r&&x.current.focus()},O=e=>{if(e){var{hsv:r}=a;y={x:Math.round(r[1]/100*(e.clientWidth-1)),y:Math.round((1-r[2]/100)*(e.clientHeight-1))},E(y)}};O(v.current),v.current&&(v.current.style.background="".concat(k," none repeat scroll 0% 0%"));var N=(e,r)=>{var{x:a,y:o}=e,l=r.getBoundingClientRect(),i={x:a-l.left,y:o-l.top};i.x<0&&(i.x=0),i.y<0&&(i.y=0),i.x>=r.clientWidth&&(i.x=r.clientWidth-1),i.y>=r.clientHeight&&(i.y=r.clientHeight-1),E(i,!0);var d=i.x/(r.clientWidth-1)*100,u=100*(1-i.y/(r.clientHeight-1)),c=n.current;t([c.hsv[0],d,u])};m.default.useEffect((()=>{var e=v.current;O(e);var r=e=>{i(!0),u(!0),e.preventDefault()},a=r=>{var a={x:r.pageX-window.scrollX,y:r.pageY-window.scrollY};N(a,e),u(!1),r.preventDefault()},t=r=>{if(d&&r.buttons){var a={x:r.pageX-window.scrollX,y:r.pageY-window.scrollY};N(a,e),r.preventDefault()}},o=r=>{var a={x:r.touches[0].pageX-window.scrollX,y:r.touches[0].pageY-window.scrollY};N(a,e),r.preventDefault()};return e.addEventListener("mousedown",r),e.addEventListener("mouseup",a),e.addEventListener("mousemove",t),e.addEventListener("touchdown",r),e.addEventListener("touchup",a),e.addEventListener("touchmove",o),()=>{e.removeEventListener("mousedown",r),e.removeEventListener("mouseup",a),e.removeEventListener("mousemove",t),e.removeEventListener("touchdown",r),e.removeEventListener("touchup",a),e.removeEventListener("touchmove",o)}}),[]);var S=ge((e=>{if(l){var{x:r,y:a}=y;switch(e.key){case"ArrowRight":r+=1;break;case"ArrowLeft":r-=1;break;case"ArrowDown":a+=1;break;case"ArrowUp":a-=1;break;case"Tab":return void i(!1);default:return}e.preventDefault();var t=v.current.getBoundingClientRect();N({x:r+t.left,y:a+t.top},v.current)}})),P=ge((e=>{i(!0),e.preventDefault()})),R=ge((e=>{i(!1),e.preventDefault()}));return m.default.createElement("div",{className:r},m.default.createElement("div",q({className:C.root},o,{ref:v,"data-testid":"hsvgradient-color"}),m.default.createElement("div",{className:"muicc-hsvgradient-s ".concat(C.hsvGradientS," ").concat(C.gradientPosition)},m.default.createElement("div",{className:"muicc-hsvgradient-v ".concat(C.hsvGradientV," ").concat(C.gradientPosition)},m.default.createElement("div",{ref:x,tabIndex:"0",role:"slider","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a.hsv[1],pressed:"".concat(d),"data-testid":"hsvgradient-cursor",className:"muicc-hsvgradient-cursor ".concat(C.hsvGradientCursor),onKeyDown:S,onFocus:P,onBlur:R},m.default.createElement("div",{className:"muicc-hsvgradient-cursor-c ".concat(C.hsvGradientCursorC)}))))))};be.propTypes={color:le.isRequired,className:x.default.string.isRequired,onChange:x.default.func.isRequired};var me=e=>{var{Element:r,defaultValue:a}=e,t=D(e,["Element","defaultValue"]),[o,n]=m.default.useState(a);return m.default.createElement(r,T(T({},t),{},{value:o,onChange:n}))},ve=e=>{var r=r=>{var{defaultValue:a,value:t,onChange:o}=r,n=D(r,["defaultValue","value","onChange"]);return o||"none"!==t?m.default.createElement(e,T({value:t||a,onChange:o||(()=>{})},n)):m.default.createElement(me,T({Element:e,defaultValue:a},n))};return r.propTypes=T(T({},e.propTypes),{},{defaultValue:e.propTypes.value,onChange:x.default.func}),r.defaultProps=T(T({},e.defaultProps),{},{defaultValue:void 0,onChange:void 0}),r},xe=o.makeStyles({root:{display:"flex",flexDirection:"row"},colorinputRaw:{paddingRight:4},formControl:{width:100}}),ye=e=>{var r,a,{value:t,format:o,onChange:n,disableAlpha:l,enableErrorDisplay:i,forwardRef:d,disablePlainColor:u}=e,c=D(e,["value","format","onChange","disableAlpha","enableErrorDisplay","forwardRef","disablePlainColor"]),s=xe(),{t:p,i18n:h}=ce(),g=ne(t,l,p,h.language,u),f=e=>{if("plain"===o)n(e.target.value);else if("hex"===o)n("#".concat(e.target.value));else{var r=e.target.id,t=Number(e.target.value),l={};Object.keys(a).forEach((e=>{var o=a[e].value;e===r&&((o=t)<a[e].min&&(o=a[e].min),o>a[e].max&&(o=a[e].max)),l[e]=o})),n(l)}},b=(e,r,a,t,o)=>m.default.createElement(m.default.Fragment,null,m.default.createElement(P.default,{htmlFor:e,className:"muicc-colorinput-label","data-testid":"colorinput-label"},r),m.default.createElement(R.default,q({id:e,name:e,className:"muicc-colorinput-input",label:r,value:a,placeholder:r,inputProps:{"aria-label":"color-".concat(r),"data-testid":"colorinput-input"},onChange:f,startAdornment:o&&t&&m.default.createElement(M.default,{position:"start"},t)},c)));if("plain"===o)r=b("color-plain","Color",g.raw);else{a=function(e,r,a){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,o=ne(e,a,t),n={};if("rgb"===r)n.r={value:o.rgb[0],format:"integer",min:0,max:255,name:t("R")},n.g={value:o.rgb[1],format:"integer",min:0,max:255,name:t("G")},n.b={value:o.rgb[2],format:"integer",min:0,max:255,name:t("B")};else if("hsv"===r)n.h={value:o.hsv[0],format:"integer",min:0,max:360,name:t("H"),unit:"°"},n.s={value:o.hsv[1],format:"integer",min:0,max:100,name:t("S"),unit:"%"},n.v={value:o.hsv[2],format:"integer",min:0,max:100,name:t("V"),unit:"%"};else if("hsl"===r)n.h={value:o.hsl[0],format:"integer",min:0,max:360,name:t("H"),unit:"°"},n.s={value:o.hsl[1],format:"integer",min:0,max:100,name:t("S"),unit:"%"},n.l={value:o.hsl[2],format:"integer",min:0,max:100,name:t("L"),unit:"%"};else if("hex"===r){var{hex:l}=o;o.raw&&"string"==typeof o.raw&&o.raw.startsWith("#")&&(l=o.raw.substring(1)),n.hex={value:l,format:"hex",name:t("HEX"),unit:"#"}}else n.value=t(o.value),n.format="unknown";return n}(g,o,l,p);var v=Object.keys(a);r=m.default.createElement("div",{ref:d,className:s.root},v.map((e=>m.default.createElement(N.default,{key:e,className:"muicc-colorinput-raw ".concat(s.colorinputRaw),error:!!g.error},b(e,a[e].name,a[e].value,a[e].unit,1===v.length)))))}return m.default.createElement(N.default,{className:s.formControl,error:!!g.error,"data-testid":"colorinput"},r,i&&g.error&&m.default.createElement(S.default,{id:"component-error-text"},g.error))};ye.propTypes={value:le,format:x.default.string,onChange:x.default.func.isRequired,disableAlpha:x.default.bool,enableErrorDisplay:x.default.bool,forwardRef:x.default.shape({current:x.default.elementType}),disablePlainColor:x.default.bool},ye.defaultProps={value:"none",format:"plain",forwardRef:void 0,disableAlpha:!1,enableErrorDisplay:!0,disablePlainColor:!1};var we=ve(ye),ke=o.makeStyles({root:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:"8px 0 0 8px"},paletteButton:{margin:"0 8px 8px 0",padding:0}}),Ce=e=>{var{size:r,borderWidth:a,palette:t,onSelect:o,disableAlpha:n}=e,l=ke(),{t:i}=ce();return m.default.createElement("div",{className:l.root},Object.keys(t).map((e=>m.default.createElement(pe,{size:r,key:"".concat(e),color:t[e],className:"muicc-palette-button ".concat(l.paletteButton),borderWidth:a,tooltip:e,disableAlpha:n,onClick:()=>(e=>{var r=i(e);o&&o(r,t[e])})(e)}))))};Ce.propTypes={borderWidth:x.default.number,size:x.default.number,palette:ie.isRequired,forwardRef:x.default.shape({current:x.default.elementType}),onSelect:x.default.func,disableAlpha:x.default.bool},Ce.defaultProps={borderWidth:0,size:24,forwardRef:void 0,onSelect:void 0,disableAlpha:!1};var Ee=o.makeStyles((()=>({root:{width:"100%",height:16,padding:0},rail:{height:16,opacity:1,background:"rgba(0, 0, 0, 0) linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100% ) repeat scroll 0% 0%",borderRadius:0},track:{height:16,opacity:0,borderRadius:4,backgroundColor:"transparent"},thumb:{width:16,height:16,marginTop:0,marginLeft:-8,backgroundColor:"#f0f0f0",boxShadow:"rgba(0, 0, 0, 0.37) 0px 1px 4px 0px","&:focus":{boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"}}})));function Oe(e){var r=Ee();return m.default.createElement(W.default,q({},e,{classes:{root:r.root,rail:r.rail,track:r.track,thumb:r.thumb}}))}var Ne=o.makeStyles({root:{color:"#666",width:"100%",height:16,padding:0,background:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundColor:"white",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px"},rail:{height:16,opacity:1,background:e=>"rgba(0, 0, 0, 0) linear-gradient(to right, ".concat(e.color,"00 0%, ").concat(e.color," 100%) repeat scroll 0% 0%"),borderRadius:0},track:{height:16,opacity:0,borderRadius:4},thumb:{width:16,height:16,marginTop:0,marginLeft:-8,backgroundColor:"#f0f0f0",boxShadow:"rgba(0, 0, 0, 0.37) 0px 1px 4px 0px","&:focus":{boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"}}});function Se(e){var{color:r}=e,a=D(e,["color"]),t=Ne({color:r});return m.default.createElement(W.default,q({},a,{classes:{root:t.root,rail:t.rail,track:t.track,thumb:t.thumb}}))}Se.propTypes={color:le.isRequired};var Pe=o.makeStyles((e=>({root:{backgroundColor:e.palette.background.paper,position:"relative",width:"min-content",height:"min-content",padding:"0px"},container:{justifyContent:"space-around",overflow:"hidden",width:e=>e.boxWidth,padding:0},colorboxHsvGradient:{width:e=>"calc(".concat(e.boxWidth,"px - 16px)"),height:"calc(128px - 16px)",margin:8},colorboxSliders:{width:e=>e.boxWidth,padding:"8px 8px 4px 8px"},colorboxInputs:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:"8px 4px 8px 8px",justifyContent:"space-between"},colorboxInput:{},colorboxColorBg:{width:48,height:48,background:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px",backgroundColor:"white",borderRadius:4},colorboxColor:{width:48,height:48,background:e=>e.colorError?"repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent 29px,\n      #f44336 29px,\n      #f44336 32px\n    )":"none",backgroundColor:e=>e.colorError?"transparent":e.backgroundColor,borderRadius:4,border:e=>e.colorError?"2px solid #f44336":"none"},colorboxControls:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:8,"&> button":{marginLeft:"auto"}},colorboxError:{color:"#f44336",lineHeight:"36.5px"}}))),Re=e=>{var r,{value:a,palette:t,inputFormats:o,deferred:n,onChange:l,disableAlpha:i}=e,d=D(e,["value","palette","inputFormats","deferred","onChange","disableAlpha"]),{t:u,i18n:c}=ce(),s=ne(a,i,u,c.language),p=l;n&&([s,p]=m.default.useState(s),r=l);var{hsv:h}=s,{alpha:g}=s;g=void 0===g?100:Math.floor(100*g);var f=oe(s,"hex",!0),{backgroundColor:b}=s.css,v=Pe({boxWidth:320,backgroundColor:b,colorError:!!s.error}),x=e=>{var r=te(e);p(r)};return m.default.createElement(E.default,q({p:2,className:v.root},d),m.default.createElement(E.default,{className:v.container},m.default.createElement(be,{className:"muicc-colorbox-hsvgradient ".concat(v.colorboxHsvGradient),color:s,onChange:e=>{var r=te(e,"hsv");p(r)}}),m.default.createElement("div",{className:"muicc-colorbox-sliders ".concat(v.colorboxSliders)},m.default.createElement(Oe,{"data-testid":"hueslider","aria-label":"color slider",value:h[0],min:0,max:360,onChange:(e,r)=>{var a=te([r,s.hsv[1],s.hsv[2]],"hsv");p(a)}}),!i&&m.default.createElement(Se,{"data-testid":"alphaslider",color:f,valueLabelDisplay:"auto","aria-label":"alpha slider",value:g,min:0,max:100,onChange:(e,r)=>{var a=r/100,t=te([s.rgb[0],s.rgb[1],s.rgb[2],a],"rgb");p(t)}})),o.length>0&&m.default.createElement("div",{className:"muicc-colorbox-inputs  ".concat(v.colorboxInputs)},m.default.createElement("div",{className:"muicc-colorbox-colorBg ".concat(v.colorboxColorBg)},m.default.createElement("div",{className:"muicc-colorbox-color ".concat(v.colorboxColor)})),o.map((e=>m.default.createElement(we,{key:e,value:s,format:e,disableAlpha:!0,enableErrorDisplay:!1,className:"muicc-colorbox-input ".concat(v.colorboxInput),onChange:x})))),t&&m.default.createElement(m.default.Fragment,null,m.default.createElement(O.default,null),m.default.createElement(Ce,{size:26.65,palette:t,onSelect:(e,r)=>{var a=te(r);a.name=e,p(a)},disableAlpha:i})),m.default.createElement("div",{className:"muicc-colorbox-controls ".concat(v.colorboxControls)},s.error&&m.default.createElement("span",{className:"muicc-colorbox-error ".concat(v.colorboxError),"data-testid":"colorbox-error"},u(s.error)),n&&m.default.createElement(k.default,{onClick:()=>{r(s)}},u("Set")))))};Re.propTypes={value:le,deferred:x.default.bool,palette:ie,inputFormats:de,onChange:x.default.func.isRequired,disableAlpha:x.default.bool},Re.defaultProps={value:void 0,deferred:!1,palette:void 0,inputFormats:["hex","rgb"],disableAlpha:!1};var Me=ve(Re),We=o.makeStyles({root:{display:"flex",flexDirection:"row",width:"max-content"},colorpickerButton:{margin:6}}),je=o.createGenerateClassName({seed:"ColorPicker"}),qe=r=>{var{value:a,disableTextfield:t,deferred:n,palette:l,inputFormats:i,openAtStart:d,onChange:u,onOpen:c,doPopup:s,disableAlpha:p,hideTextfield:h,disablePlainColor:g}=r,f=We(),b=e.useRef(null),[v,x]=e.useState(!1),{t:k,i18n:C}=ce(),E=ne(a,p,k,C.language,g),O=((e,r)=>{var a=r?"color-".concat(e.hex):e.name;return a.startsWith("color-")?a="string"==typeof e.raw&&e.raw.startsWith("#")?e.raw:oe(e,"hex"):"none"===a&&(a=e.raw),a})(E,g);e.useEffect((()=>{d&&x(!0)}),[d]);var N=()=>{var e=Boolean(b.current);x(e),c&&c(e)},S=()=>{x(!1),c&&c(!1)},P=m.default.createElement(Me,{value:E,style:{position:"relative"},deferred:n,palette:l,inputFormats:i,disableAlpha:p,onChange:e=>{u(e),n&&S()}});P=s?s(P):m.default.createElement(w.default,{id:"color-popover",open:v,anchorEl:b.current,onClose:S,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},P);var R=null;return h||(R=t?m.default.createElement("div",{role:"button","data-testid":"colorpicker-noinput",onClick:N},E.raw):m.default.createElement(y.default,{color:"primary",value:O,onChange:e=>{u(e.target.value)},"data-testid":"colorpicker-input"})),m.default.createElement(o.StylesProvider,{generateClassName:je},m.default.createElement("div",{ref:b,className:f.root},m.default.createElement(pe,{"data-testid":"colorpicker-button",className:"muicc-colorpicker-button ".concat(f.colorpickerButton),color:E,onClick:N}),R,P))};qe.propTypes={value:le,disableTextfield:x.default.bool,deferred:x.default.bool,palette:ie,inputFormats:de,onChange:x.default.func.isRequired,onOpen:x.default.func,openAtStart:x.default.bool,doPopup:x.default.func,disableAlpha:x.default.bool,hideTextfield:x.default.bool,disablePlainColor:x.default.bool},qe.defaultProps={value:"none",disableTextfield:!1,deferred:!1,palette:void 0,inputFormats:["hex","rgb"],onOpen:void 0,openAtStart:!1,doPopup:void 0,disableAlpha:!1,hideTextfield:!1,disablePlainColor:!1};var Ae=ve(qe);exports.ColorBox=Me,exports.ColorButton=pe,exports.ColorInput=we,exports.ColorPalette=Ce,exports.ColorPicker=Ae,exports.createColor=te,exports.useTranslate=ce;
//# sourceMappingURL=index.js.map
