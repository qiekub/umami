(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/97x":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("vJKn"),c=a.n(n),s=a("rg98"),r=a("q1tI"),l=a("20a2"),i=a("jeBt");function o(){var e=Object(l.useRouter)().basePath;return Object(r.useCallback)(function(){var t=Object(s.a)(c.a.mark((function t(a,n,s){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.d)("".concat(e).concat(a),n,s));case 1:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),[])}},"/vxL":function(e,t,a){e.exports={list:"ProfileSettings_list__3x9ld"}},"1fNg":function(e,t,a){e.exports={container:"NoData_container__6sW_H"}},"3uMc":function(e,t,a){e.exports={container:"MenuLayout_container__1x3Sb",menu:"MenuLayout_menu__2KwAG",content:"MenuLayout_content__2bQ0C"}},"9vU2":function(e,t,a){e.exports={menu:"NavMenu_menu__2CwIk",option:"NavMenu_option__A3zuK",selected:"NavMenu_selected__2JKVl"}},EBW8:function(e,t,a){e.exports={col:"WebsiteSettings_col__1S92p",buttons:"WebsiteSettings_buttons__MV1cu"}},F4it:function(e,t,a){e.exports={menu:"TimezoneSetting_menu__2MXLs",button:"TimezoneSetting_button__1qvuC"}},GF10:function(e,t,a){e.exports={placeholder:"EmptyPlaceholder_placeholder__3cc74",icon:"EmptyPlaceholder_icon__2JUKU",msg:"EmptyPlaceholder_msg__2xIqd"}},I8PS:function(e,t,a){e.exports={toast:"Toast_toast__13aHw",message:"Toast_message__2wGam",close:"Toast_close__2nHeF"}},IA1E:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("vJKn"),c=a.n(n),s=a("rg98"),r=a("q1tI"),l=a("/MKj"),i=a("j6IE"),o=a("20a2"),j=a("jeBt");function u(){var e=Object(o.useRouter)(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.user})),n=Object(r.useState)(!a),u=n[0],b=n[1],d=Object(r.useState)(a),O=d[0],f=d[1];function x(){return(x=Object(s.a)(c.a.mark((function a(){var n,s,r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return b(!0),a.next=3,Object(j.b)("".concat(e.basePath,"/api/auth/verify"));case 3:if(n=a.sent,s=n.ok,r=n.data,s){a.next=8;break}return a.abrupt("return",e.push("/login"));case 8:return a.next=10,t(Object(i.b)(r));case 10:f(O),b(!1);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!u&&O||function(){x.apply(this,arguments)}()}),[]),{user:O,loading:u}}},IY3P:function(e,t,a){e.exports={buttons:"AccountSettings_buttons__otTH8"}},TY48:function(e,t,a){"use strict";var n=a("nKUr"),c=(a("q1tI"),a("atwx")),s=a("y/Pd"),r=a("GF10"),l=a.n(r);t.a=function(e){var t=e.msg,a=e.children;return Object(n.jsxs)("div",{className:l.a.placeholder,children:[Object(n.jsx)(c.a,{className:l.a.icon,icon:Object(n.jsx)(s.a,{}),size:"xlarge"}),Object(n.jsx)("h2",{className:l.a.msg,children:t}),a]})}},ZzUg:function(e,t,a){"use strict";var n=a("nKUr"),c=(a("q1tI"),a("TSYQ")),s=a.n(c),r=a("kriW"),l=a("1fNg"),i=a.n(l);t.a=function(e){var t=e.className;return Object(n.jsx)("div",{className:s()(i.a.container,t),children:Object(n.jsx)(r.a,{id:"message.no-data-available",defaultMessage:"No data available."})})}},eWqP:function(e,t,a){e.exports={button:"DateRangeSetting_button__1unZO"}},j6IE:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a("i7Pf"),c=Object(n.b)({name:"user",initialState:null,reducers:{updateUser:function(e,t){return t.payload}}}),s=c.actions.updateUser;t.a=c.reducer},npB8:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return gt}));var n=a("nKUr"),c=a("q1tI"),s=a("80PL"),r=a("20a2"),l=a("CUtM"),i=a("sgb8"),o=a("kriW"),j=a("TSYQ"),u=a.n(j),b=a("pjx/"),d=a("cpVT"),O=a("ZzUg"),f=a("sDD2"),x=a.n(f);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h,v=function(e){var t=e.columns,a=e.rows,c=e.empty,s=e.className,r=e.bodyClassName,l=e.rowKey,i=e.showHeader,o=void 0===i||i,j=e.children;return c&&0===a.length?c:Object(n.jsxs)("div",{className:u()(x.a.table,s),children:[o&&Object(n.jsx)("div",{className:u()(x.a.header,"row"),children:t.map((function(e){var t=e.key,a=e.label,c=e.className,s=e.style,r=e.header;return Object(n.jsx)("div",{className:u()(x.a.head,c,null===r||void 0===r?void 0:r.className),style:m(m({},s),null===r||void 0===r?void 0:r.style),children:a},t)}))}),Object(n.jsxs)("div",{className:u()(x.a.body,r),children:[0===a.length&&Object(n.jsx)(O.a,{}),!j&&a.map((function(e,a){var c=l?l(e):a;return Object(n.jsx)(g,{columns:t,row:e},c)})),j]})]})},g=function(e){var t=e.columns,a=e.row;return Object(n.jsx)("div",{className:u()(x.a.row,"row"),children:t.map((function(e,t){var c=e.key,s=e.render,r=e.className,l=e.style,i=e.cell;return Object(n.jsx)("div",{className:u()(x.a.cell,r,null===i||void 0===i?void 0:i.className),style:m(m({},l),null===i||void 0===i?void 0:i.style),children:s?s(a):a[c]},"".concat(c,"-").concat(t))}))})},w=a("4qaV"),y=a("tfvX"),_=a("Rnrp"),M=a("vJKn"),P=a.n(M),C=a("rg98"),S=a("KYPV"),k=a("PhFv"),N=a("atwx");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D=function(e){return c.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),h||(h=c.createElement("path",{d:"M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"})))},z=a("ri9q"),L=a.n(z);var q=function(e){var t=e.name,a=e.value,s=e.label,r=e.onChange,l=Object(c.useRef)(),i=function(){return l.current.click()};return Object(n.jsxs)("div",{className:L.a.container,children:[Object(n.jsx)("div",{className:L.a.checkbox,onClick:i,children:a&&Object(n.jsx)(N.a,{icon:Object(n.jsx)(D,{}),size:"small"})}),Object(n.jsx)("label",{className:L.a.label,htmlFor:t,onClick:i,children:s}),Object(n.jsx)("input",{ref:l,className:L.a.input,type:"checkbox",name:t,defaultChecked:a,onChange:r})]})},R=a("YSmr"),T=a("/97x");function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={name:"",domain:"",public:!1},A=function(e){var t=e.name,a=e.domain,c={};return t||(c.name=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"})),a?R.h.test(a)||(c.domain=Object(n.jsx)(o.a,{id:"label.invalid-domain",defaultMessage:"Invalid domain"})):c.domain=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"}),c};function V(e){var t=e.values,a=e.onSave,s=e.onClose,r=Object(T.a)(),l=Object(c.useState)(),i=l[0],j=l[1],u=function(){var e=Object(C.a)(P.a.mark((function e(t){var c,s,l;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("/api/website",t);case 2:c=e.sent,s=c.ok,l=c.data,s?a():j(l||Object(n.jsx)(o.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(k.e,{children:Object(n.jsx)(S.d,{initialValues:F(F(F({},U),t),{},{enable_share_url:!(null===t||void 0===t||!t.share_id)}),validate:A,onSubmit:u,children:function(){return Object(n.jsxs)(S.c,{children:[Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"name",children:Object(n.jsx)(o.a,{id:"label.name",defaultMessage:"Name"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"name",type:"text"}),Object(n.jsx)(k.b,{name:"name"})]})]}),Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"domain",children:Object(n.jsx)(o.a,{id:"label.domain",defaultMessage:"Domain"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"domain",type:"text",placeholder:"example.com"}),Object(n.jsx)(k.b,{name:"domain"})]})]}),Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{}),Object(n.jsx)(S.b,{name:"enable_share_url",children:function(e){var t=e.field;return Object(n.jsx)(q,F(F({},t),{},{label:Object(n.jsx)(o.a,{id:"label.enable-share-url",defaultMessage:"Enable share URL"})}))}})]}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{type:"submit",variant:"action",children:Object(n.jsx)(o.a,{id:"label.save",defaultMessage:"Save"})}),Object(n.jsx)(w.a,{onClick:s,children:Object(n.jsx)(o.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(n.jsx)(k.c,{children:i})]})}})})}var B=a("jeBt");function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W="DELETE",Y=function(e){var t=e.confirmation,a={};return t!==W&&(a.confirmation=t?Object(n.jsx)(o.a,{id:"label.invalid",defaultMessage:"Invalid"}):Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"})),a};function J(e){var t=e.values,a=e.onSave,s=e.onClose,l=function(){var e=Object(r.useRouter)().basePath;return Object(c.useCallback)(function(){var t=Object(C.a)(P.a.mark((function t(a,n,c){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(B.a)("".concat(e).concat(a),n,c));case 1:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),[])}(),i=Object(c.useState)(),j=i[0],u=i[1],b=function(){var e=Object(C.a)(P.a.mark((function e(t){var c,s,r,i,j;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.type,s=t.id,e.next=3,l("/api/".concat(c,"/").concat(s));case 3:r=e.sent,i=r.ok,j=r.data,i?a():u(j||Object(n.jsx)(o.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(k.e,{children:Object(n.jsx)(S.d,{initialValues:H({confirmation:""},t),validate:Y,onSubmit:b,children:function(e){return Object(n.jsxs)(S.c,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{id:"message.confirm-delete",defaultMessage:"Are your sure you want to delete {target}?",values:{target:Object(n.jsx)("b",{children:t.name})}})}),Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{id:"message.delete-warning",defaultMessage:"All associated data will be deleted as well."})}),Object(n.jsx)("p",{children:Object(n.jsx)(o.a,{id:"message.type-delete",defaultMessage:"Type {delete} in the box below to confirm.",values:{delete:Object(n.jsx)("b",{children:W})}})}),Object(n.jsx)(k.d,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"confirmation",type:"text"}),Object(n.jsx)(k.b,{name:"confirmation"})]})}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{type:"submit",variant:"danger",disabled:e.values.confirmation!==W,children:Object(n.jsx)(o.a,{id:"label.delete",defaultMessage:"Delete"})}),Object(n.jsx)(w.a,{onClick:s,children:Object(n.jsx)(o.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(n.jsx)(k.c,{children:j})]})}})})}var G=a("dhJC");function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=Object(n.jsx)(o.a,{id:"label.copy-to-clipboard",defaultMessage:"Copy to clipboard"});var $=function(e){var t=e.element,a=Object(G.a)(e,["element"]),s=Object(c.useState)(X),r=s[0],l=s[1];return Object(n.jsx)(w.a,Q(Q({},a),{},{onClick:function(){null!==t&&void 0!==t&&t.current&&(t.current.select(),document.execCommand("copy"),l(Object(n.jsx)(o.a,{id:"message.copied",defaultMessage:"Copied!"})),window.getSelection().removeAllRanges())},children:r}))};function ee(e){var t=e.values,a=e.onClose,s=Object(c.useRef)(),l=Object(r.useRouter)().basePath;return Object(n.jsxs)(k.e,{children:[Object(n.jsx)("p",{children:Object(n.jsx)(o.a,{id:"message.track-stats",defaultMessage:"To track stats for {target}, place the following code in the {head} section of your website.",values:{head:"<head>",target:Object(n.jsx)("b",{children:t.name})}})}),Object(n.jsx)(k.d,{children:Object(n.jsx)("textarea",{ref:s,rows:3,cols:60,spellCheck:!1,defaultValue:'<script async defer data-website-id="'.concat(t.website_uuid,'" src="').concat(document.location.origin).concat(l,'/umami.js"><\/script>'),readOnly:!0})}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)($,{type:"submit",variant:"action",element:s}),Object(n.jsx)(w.a,{onClick:a,children:Object(n.jsx)(o.a,{id:"label.cancel",defaultMessage:"Cancel"})})]})]})}function te(e){var t=e.values,a=e.onClose,s=Object(c.useRef)(),l=Object(r.useRouter)().basePath,i=t.name,j=t.share_id;return Object(n.jsxs)(k.e,{children:[Object(n.jsx)("p",{children:Object(n.jsx)(o.a,{id:"message.share-url",defaultMessage:"This is the publicly shared URL for {target}.",values:{target:Object(n.jsx)("b",{children:t.name})}})}),Object(n.jsx)(k.d,{children:Object(n.jsx)("textarea",{ref:s,rows:3,cols:60,spellCheck:!1,defaultValue:"".concat(document.location.origin).concat(l,"/share/").concat(j,"/").concat(encodeURIComponent(i)),readOnly:!0})}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)($,{type:"submit",variant:"action",element:s}),Object(n.jsx)(w.a,{onClick:a,children:Object(n.jsx)(o.a,{id:"label.cancel",defaultMessage:"Cancel"})})]})]})}var ae=a("TY48"),ne=a("TOCn"),ce=a("i8i4"),se=a.n(ce),re=a("wEEd"),le=a("I8PS"),ie=a.n(le),oe=a("InOs");var je,ue=function(e){var t=e.message,a=e.timeout,s=void 0===a?3e3:a,r=e.onClose,l=Object(re.c)({opacity:1,transform:"translate3d(0,0px,0)",from:{opacity:0,transform:"translate3d(0,-40px,0)"}});return Object(c.useEffect)((function(){setTimeout(r,s)}),[]),se.a.createPortal(Object(n.jsxs)(re.a.div,{className:ie.a.toast,style:l,onClick:r,children:[Object(n.jsx)("div",{className:ie.a.message,children:t}),Object(n.jsx)(N.a,{className:ie.a.close,icon:Object(n.jsx)(oe.a,{}),size:"small"})]}),document.getElementById("__modals"))},be=a("ZJFB");function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Oe,fe=function(e){return c.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),je||(je=c.createElement("path",{d:"M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z"})))};function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var pe,me=function(e){return c.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e),Oe||(Oe=c.createElement("path",{d:"M432 80h-82.4l-34-56.7A48 48 0 00274.4 0H173.6a48 48 0 00-41.2 23.3L98.4 80H16A16 16 0 000 96v16a16 16 0 0016 16h16l21.2 339a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"})))};function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ve,ge=function(e){return c.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},e),pe||(pe=c.createElement("path",{d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"})))};function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ye,_e=function(e){return c.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},e),ve||(ve=c.createElement("path",{d:"M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z"})))};function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Pe=function(e){return c.createElement("svg",Me({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),ye||(ye=c.createElement("path",{d:"M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 004.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 00-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 01-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 014.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"})))},Ce=a("0Kmt"),Se=a("EBW8"),ke=a.n(Se);function Ne(){var e=Object(c.useState)(),t=e[0],a=e[1],s=Object(c.useState)(),r=s[0],l=s[1],i=Object(c.useState)(),j=i[0],d=i[1],O=Object(c.useState)(),f=O[0],x=O[1],p=Object(c.useState)(),m=p[0],h=p[1],g=Object(c.useState)(0),M=g[0],P=g[1],C=Object(c.useState)(),S=C[0],k=C[1],N=Object(Ce.a)("/api/websites",{},[M]).data,E=[{key:"name",label:Object(n.jsx)(o.a,{id:"label.name",defaultMessage:"Name"}),className:"col-6 col-xl-4",render:function(e){var t=e.website_id,a=e.name,c=e.domain;return Object(n.jsxs)(b.a,{href:"/website/[...id]",as:"/website/".concat(t,"/").concat(a),children:[Object(n.jsx)(be.a,{domain:c}),a]})}},{key:"domain",label:Object(n.jsx)(o.a,{id:"label.domain",defaultMessage:"Domain"}),className:"col-6 col-xl-4"},{key:"action",className:u()(ke.a.buttons,"col-12 col-xl-4 pt-2 pt-xl-0"),render:function(e){return Object(n.jsxs)(ne.a,{align:"right",children:[e.share_id&&Object(n.jsx)(w.a,{icon:Object(n.jsx)(Pe,{}),size:"small",tooltip:Object(n.jsx)(o.a,{id:"message.get-share-url",defaultMessage:"Get share URL"}),tooltipId:"button-share-".concat(e.website_id),onClick:function(){return h(e)}}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(_e,{}),size:"small",tooltip:Object(n.jsx)(o.a,{id:"message.get-tracking-code",defaultMessage:"Get tracking code"}),tooltipId:"button-code-".concat(e.website_id),onClick:function(){return x(e)}}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(fe,{}),size:"small",onClick:function(){return a(e)},children:Object(n.jsx)(o.a,{id:"label.edit",defaultMessage:"Edit"})}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(me,{}),size:"small",onClick:function(){return l(e)},children:Object(n.jsx)(o.a,{id:"label.delete",defaultMessage:"Delete"})})]})}}];function D(){P((function(e){return e+1})),k(Object(n.jsx)(o.a,{id:"message.save-success",defaultMessage:"Saved successfully."})),z()}function z(){d(null),a(null),l(null),x(null),h(null)}if(!N)return null;var L=Object(n.jsx)(ae.a,{msg:Object(n.jsx)(o.a,{id:"message.no-websites-configured",defaultMessage:"You don't have any websites configured."}),children:Object(n.jsx)(w.a,{icon:Object(n.jsx)(ge,{}),size:"medium",onClick:function(){return d(!0)},children:Object(n.jsx)(o.a,{id:"label.add-website",defaultMessage:"Add website"})})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{id:"label.websites",defaultMessage:"Websites"})}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(ge,{}),size:"small",onClick:function(){return d(!0)},children:Object(n.jsx)(o.a,{id:"label.add-website",defaultMessage:"Add website"})})]}),Object(n.jsx)(v,{columns:E,rows:N,empty:L}),t&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.edit-website",defaultMessage:"Edit website"}),children:Object(n.jsx)(V,{values:t,onSave:D,onClose:z})}),j&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.add-website",defaultMessage:"Add website"}),children:Object(n.jsx)(V,{onSave:D,onClose:z})}),r&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.delete-website",defaultMessage:"Delete website"}),children:Object(n.jsx)(J,{values:{type:"website",id:r.website_id,name:r.name},onSave:D,onClose:z})}),f&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.tracking-code",defaultMessage:"Tracking code"}),children:Object(n.jsx)(ee,{values:f,onClose:z})}),m&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.share-url",defaultMessage:"Share URL"}),children:Object(n.jsx)(te,{values:m,onClose:z})}),S&&Object(n.jsx)(ue,{message:S,onClose:function(){return k(null)}})]})}var Ee=a("YFqc"),De=a.n(Ee);function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var qe,Re={username:"",password:""},Te=function(e){var t=e.user_id,a=e.username,c=e.password,s={};return a||(s.username=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"})),t||c||(s.password=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"})),s};function Ie(e){var t=e.values,a=e.onSave,s=e.onClose,r=Object(T.a)(),l=Object(c.useState)(),i=l[0],j=l[1],u=function(){var e=Object(C.a)(P.a.mark((function e(t){var c,s,l;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("/api/account",t);case 2:c=e.sent,s=c.ok,l=c.data,s?a():j(l||Object(n.jsx)(o.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(k.e,{children:Object(n.jsx)(S.d,{initialValues:Le(Le({},Re),t),validate:Te,onSubmit:u,children:function(){return Object(n.jsxs)(S.c,{children:[Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"username",children:Object(n.jsx)(o.a,{id:"label.username",defaultMessage:"Username"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"username",type:"text"}),Object(n.jsx)(k.b,{name:"username"})]})]}),Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"password",children:Object(n.jsx)(o.a,{id:"label.password",defaultMessage:"Password"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"password",type:"password"}),Object(n.jsx)(k.b,{name:"password"})]})]}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{type:"submit",variant:"action",children:Object(n.jsx)(o.a,{id:"label.save",defaultMessage:"Save"})}),Object(n.jsx)(w.a,{onClick:s,children:Object(n.jsx)(o.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(n.jsx)(k.c,{children:i})]})}})})}function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Ue=function(e){return c.createElement("svg",Fe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),qe||(qe=c.createElement("path",{d:"M497.6 0L334.4.17a14.4 14.4 0 00-14.4 14.4v33.31a14.4 14.4 0 0014.69 14.4l73.63-2.72 2.06 2.06-278.86 278.87a12 12 0 000 17l23 23a12 12 0 0017 0l278.86-278.87 2.06 2.06-2.72 73.63a14.4 14.4 0 0014.4 14.69h33.31a14.4 14.4 0 0014.4-14.4L512 14.4A14.4 14.4 0 00497.6 0zM432 288h-16a16 16 0 00-16 16v154a6 6 0 01-6 6H54a6 6 0 01-6-6V118a6 6 0 016-6h154a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V304a16 16 0 00-16-16z"})))},Ae=a("IY3P"),Ve=a.n(Ae);function Be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Be(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function He(){var e=Object(c.useState)(),t=e[0],a=e[1],s=Object(c.useState)(),r=s[0],l=s[1],i=Object(c.useState)(),j=i[0],b=i[1],d=Object(c.useState)(0),O=d[0],f=d[1],x=Object(c.useState)(),p=x[0],m=x[1],h=Object(Ce.a)("/api/accounts",{},[O]).data,g=[{key:"username",label:Object(n.jsx)(o.a,{id:"label.username",defaultMessage:"Username"}),className:"col-4 col-md-3"},{key:"is_admin",label:Object(n.jsx)(o.a,{id:"label.administrator",defaultMessage:"Administrator"}),className:"col-4 col-md-3",render:function(e){return e.is_admin?Object(n.jsx)(N.a,{icon:Object(n.jsx)(D,{}),size:"medium"}):null}},{key:"dashboard",label:Object(n.jsx)(o.a,{id:"label.dashboard",defaultMessage:"Dashboard"}),className:"col-4 col-md-3",render:function(e){return Object(n.jsx)(De.a,{href:"/dashboard/".concat(e.user_id,"/").concat(e.username),children:Object(n.jsx)("a",{children:Object(n.jsx)(N.a,{icon:Object(n.jsx)(Ue,{})})})})}},{key:"actions",className:u()(Ve.a.buttons,"col-12 col-md-3 pt-2 pt-md-0"),render:function(e){return"admin"!==e.username?Object(n.jsxs)(ne.a,{align:"right",children:[Object(n.jsx)(w.a,{icon:Object(n.jsx)(fe,{}),size:"small",onClick:function(){return l(e)},children:Object(n.jsx)(o.a,{id:"label.edit",defaultMessage:"Edit"})}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(me,{}),size:"small",onClick:function(){return b(e)},children:Object(n.jsx)(o.a,{id:"label.delete",defaultMessage:"Delete"})})]}):null}}];function M(){f((function(e){return e+1})),m(Object(n.jsx)(o.a,{id:"message.save-success",defaultMessage:"Saved successfully."})),P()}function P(){l(null),a(null),b(null)}return h?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{id:"label.accounts",defaultMessage:"Accounts"})}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(ge,{}),size:"small",onClick:function(){return a(!0)},children:Object(n.jsx)(o.a,{id:"label.add-account",defaultMessage:"Add account"})})]}),Object(n.jsx)(v,{columns:g,rows:h}),r&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.edit-account",defaultMessage:"Edit account"}),children:Object(n.jsx)(Ie,{values:Ke(Ke({},r),{},{password:""}),onSave:M,onClose:P})}),t&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.add-account",defaultMessage:"Add account"}),children:Object(n.jsx)(Ie,{onSave:M,onClose:P})}),j&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.delete-account",defaultMessage:"Delete account"}),children:Object(n.jsx)(J,{values:{type:"account",id:j.user_id,name:j.username},onSave:M,onClose:P})}),p&&Object(n.jsx)(ue,{message:p,onClose:function(){return m(null)}})]}):null}var We=a("/MKj");function Ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ye(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ge={current_password:"",new_password:"",confirm_password:""},Ze=function(e){var t=e.current_password,a=e.new_password,c=e.confirm_password,s={};return t||(s.current_password=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"})),a||(s.new_password=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"})),c?a!==c&&(s.confirm_password=Object(n.jsx)(o.a,{id:"label.passwords-dont-match",defaultMessage:"Passwords don't match"})):s.confirm_password=Object(n.jsx)(o.a,{id:"label.required",defaultMessage:"Required"}),s};function Qe(e){var t=e.values,a=e.onSave,s=e.onClose,r=Object(T.a)(),l=Object(c.useState)(),i=l[0],j=l[1],u=function(){var e=Object(C.a)(P.a.mark((function e(t){var c,s,l;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("/api/account/password",t);case 2:c=e.sent,s=c.ok,l=c.data,s?a():j(l||Object(n.jsx)(o.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(k.e,{children:Object(n.jsx)(S.d,{initialValues:Je(Je({},Ge),t),validate:Ze,onSubmit:u,children:function(){return Object(n.jsxs)(S.c,{children:[Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"current_password",children:Object(n.jsx)(o.a,{id:"label.current-password",defaultMessage:"Current password"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"current_password",type:"password"}),Object(n.jsx)(k.b,{name:"current_password"})]})]}),Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"new_password",children:Object(n.jsx)(o.a,{id:"label.new-password",defaultMessage:"New password"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"new_password",type:"password"}),Object(n.jsx)(k.b,{name:"new_password"})]})]}),Object(n.jsxs)(k.d,{children:[Object(n.jsx)("label",{htmlFor:"confirm_password",children:Object(n.jsx)(o.a,{id:"label.confirm-password",defaultMessage:"Confirm password"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.b,{name:"confirm_password",type:"password"}),Object(n.jsx)(k.b,{name:"confirm_password"})]})]}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{type:"submit",variant:"action",children:Object(n.jsx)(o.a,{id:"label.save",defaultMessage:"Save"})}),Object(n.jsx)(w.a,{onClick:s,children:Object(n.jsx)(o.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(n.jsx)(k.c,{children:i})]})}})})}var Xe=a("xvhg"),$e=a("/2DS"),et=a("dB/W"),tt=a("TdLA"),at=a("rIuf"),nt=a("F4it"),ct=a.n(nt);function st(){var e=Object(tt.a)(),t=Object(Xe.a)(e,2),a=t[0],c=t[1],s=Object($e.listTimeZones)().map((function(e){return{label:e,value:e}}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(et.a,{menuClassName:ct.a.menu,value:a,options:s,onChange:c}),Object(n.jsx)(w.a,{className:ct.a.button,size:"small",onClick:function(){c(Object(at.f)())},children:Object(n.jsx)(o.a,{id:"label.reset",defaultMessage:"Reset"})})]})}var rt=a("1ETy"),lt=a("/vxL"),it=a.n(lt),ot=a("NC3K"),jt=a("G8Ct"),ut=a("eWqP"),bt=a.n(ut),dt=a("nsFc");function Ot(){var e=Object(dt.a)(),t=Object(Xe.a)(e,1)[0],a=Object(jt.a)(),c=Object(Xe.a)(a,2),s=c[0],r=c[1],l=s.startDate,i=s.endDate,j=s.value;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ot.a,{value:j,startDate:l,endDate:i,onChange:r}),Object(n.jsx)(w.a,{className:bt.a.button,size:"small",onClick:function(){r(Object(at.d)(R.d,t))},children:Object(n.jsx)(o.a,{id:"label.reset",defaultMessage:"Reset"})})]})}function ft(){var e=Object(We.c)((function(e){return e.user})),t=Object(c.useState)(!1),a=t[0],s=t[1],r=Object(c.useState)(),l=r[0],i=r[1],j=e.user_id;return function(e){var t=Object(c.useCallback)((function(t){27===t.keyCode&&e(t)}),[]);Object(c.useEffect)((function(){return document.addEventListener("keydown",t,!1),function(){document.removeEventListener("keydown",t,!1)}}),[t])}((function(){s(!1)})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{id:"label.profile",defaultMessage:"Profile"})}),Object(n.jsx)(w.a,{icon:Object(n.jsx)(rt.a,{}),size:"small",onClick:function(){return s(!0)},children:Object(n.jsx)(o.a,{id:"label.change-password",defaultMessage:"Change password"})})]}),Object(n.jsxs)("dl",{className:it.a.list,children:[Object(n.jsx)("dt",{children:Object(n.jsx)(o.a,{id:"label.username",defaultMessage:"Username"})}),Object(n.jsx)("dd",{children:e.username}),Object(n.jsx)("dt",{children:Object(n.jsx)(o.a,{id:"label.timezone",defaultMessage:"Timezone"})}),Object(n.jsx)("dd",{children:Object(n.jsx)(st,{})}),Object(n.jsx)("dt",{children:Object(n.jsx)(o.a,{id:"label.default-date-range",defaultMessage:"Default date range"})}),Object(n.jsx)("dd",{children:Object(n.jsx)(Ot,{})})]}),a&&Object(n.jsx)(_.a,{title:Object(n.jsx)(o.a,{id:"label.change-password",defaultMessage:"Change password"}),children:Object(n.jsx)(Qe,{values:{user_id:j},onSave:function(){s(!1),i(Object(n.jsx)(o.a,{id:"message.save-success",defaultMessage:"Saved successfully."}))},onClose:function(){return s(!1)}})}),l&&Object(n.jsx)(ue,{message:l,onClose:function(){return i(null)}})]})}var xt="/settings",pt="/settings/accounts",mt="/settings/profile";function ht(){var e=Object(We.c)((function(e){return e.user})),t=Object(c.useState)(xt),a=t[0],s=t[1],j=Object(r.useRouter)().pathname,u=[{label:Object(n.jsx)(o.a,{id:"label.websites",defaultMessage:"Websites"}),value:xt},{label:Object(n.jsx)(o.a,{id:"label.accounts",defaultMessage:"Accounts"}),value:pt,hidden:!(null!==e&&void 0!==e&&e.is_admin)},{label:Object(n.jsx)(o.a,{id:"label.profile",defaultMessage:"Profile"}),value:mt}];return Object(n.jsx)(l.a,{children:Object(n.jsxs)(i.a,{menu:u,selectedOption:a,onMenuSelect:s,children:[j===xt&&Object(n.jsx)(Ne,{}),j===pt&&Object(n.jsx)(He,{}),j===mt&&Object(n.jsx)(ft,{})]})})}var vt=a("IA1E");function gt(){return Object(vt.a)().loading?null:Object(n.jsx)(s.a,{children:Object(n.jsx)(ht,{})})}},ri9q:function(e,t,a){e.exports={container:"Checkbox_container__1dOe_",checkbox:"Checkbox_checkbox__3qC3v",label:"Checkbox_label__1kCah",input:"Checkbox_input__N2Ada"}},sDD2:function(e,t,a){e.exports={table:"Table_table__vsxXR",header:"Table_header__3V2m6",head:"Table_head__2ZAzU",body:"Table_body__1_740",row:"Table_row__1JZFU",cell:"Table_cell__3iCEB"}},sgb8:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("nKUr"),c=(a("q1tI"),a("20a2")),s=a("TSYQ"),r=a.n(s),l=a("cpVT"),i=a("9vU2"),o=a.n(i);var j=function(e){var t=e.options,a=void 0===t?[]:t,s=e.className,i=e.onSelect,j=void 0===i?function(){}:i,u=Object(c.useRouter)();return Object(n.jsx)("div",{className:r()(o.a.menu,s),children:a.filter((function(e){return!e.hidden})).map((function(e){var t=e.label,a=e.value,c=e.className,s=e.render;return s?s(e):Object(n.jsx)("div",{className:r()(o.a.option,c,Object(l.a)({},o.a.selected,u.asPath===a)),onClick:function(e){return j(a,e)},children:t},a)}))})},u=a("3uMc"),b=a.n(u);function d(e){var t=e.menu,a=e.selectedOption,s=e.className,l=e.menuClassName,i=e.contentClassName,o=e.children,u=e.replace,d=void 0!==u&&u,O=Object(c.useRouter)();return Object(n.jsxs)("div",{className:r()(b.a.container,s,"row"),children:[Object(n.jsx)(j,{options:t,selectedOption:a,className:r()(b.a.menu,l,"col-12 col-lg-2"),onSelect:function(e){d?O.replace(e):O.push(e)}}),Object(n.jsx)("div",{className:r()(b.a.content,i,"col-12 col-lg-10"),children:o})]})}}}]);