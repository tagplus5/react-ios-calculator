(this["webpackJsonpreact-ios-calculator"]=this["webpackJsonpreact-ios-calculator"]||[]).push([[0],{10:function(e,t,l){},11:function(e,t,l){"use strict";l.r(t);var n=l(1),a=l.n(n),c=l(4),u=l.n(c),r=l(2),i=l(0),o=function(e){var t=e.value;return Object(i.jsx)("div",{id:"display",className:"flex",children:Object(i.jsx)("input",{type:"text",tabIndex:"-1",value:t,onChange:function(){}})})},b=function(e){var t=e.value,l=e.type,n=e.buttonStyle,a=e.label,c=e.onClick;return Object(i.jsx)("button",{name:t,className:n,onClick:function(){c(t,l)},children:a})},s=function(e){var t=e.actionToPerform,l=e.allClear,n=[{label:l?"AC":"C",value:l?"AC":"C"},{label:"\xb1",value:"+/-"},{label:"%",value:"%"}],a=function(e,l){t(e,l)};return Object(i.jsxs)("div",{id:"keypad",className:"flex row jc-sp-around",children:[Object(i.jsxs)("div",{className:"grid",children:[n.map((function(e){return Object(i.jsx)(b,{label:e.label,value:e.value,buttonStyle:"fx-key",onClick:a,type:"fx"},e.label)})),[7,8,9,4,5,6,1,2,3].map((function(e){return Object(i.jsx)(b,{label:e,value:e,buttonStyle:"numeric-key",onClick:a,type:"numeric"},e)})),[{label:"0",value:"0",type:"numeric",buttonStyle:"numeric-key special"},{label:"\xb7",value:".",type:"fx",buttonStyle:"numeric-key"}].map((function(e){return Object(i.jsx)(b,{label:e.label,value:e.value,buttonStyle:e.buttonStyle,onClick:a,type:e.type},e.label)}))]}),Object(i.jsx)("div",{className:"flex column jc-sp-btw",children:[{label:"\xf7",value:"/"},{label:"\xd7",value:"x"},{label:"-",value:"-"},{label:"+",value:"+"},{label:"=",value:"="}].map((function(e){return Object(i.jsx)(b,{label:e.label,value:e.value,buttonStyle:"op-key",onClick:a,type:"operator"},e.label)}))})]})},j=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),l=t[0],a=t[1],c=Object(n.useState)("0"),u=Object(r.a)(c,2),b=u[0],j=u[1],v=Object(n.useState)(null),f=Object(r.a)(v,2),d=f[0],p=f[1],x=Object(n.useState)(!1),m=Object(r.a)(x,2),y=m[0],O=m[1],k="0"===b,S=Object(n.useCallback)((function(){"0"!==b&&(b.length>1?j("0"):j(b.substring(0,b.length-1)))}),[b]),C=function(e){"AC"===e?(a(null),j("0"),p(null),O(!1)):"C"===e?j("0"):"+/-"===e?j(String(-parseFloat(b))):"%"===e?j(String(parseFloat(b)/100)):"."===e&&(y?j("0."):b.includes(".")||j(b+"."),O(!1))},h=Object(n.useCallback)((function(e){"Backspace"===e.key&&(e.preventDefault(),S())}),[S]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",h),function(){return document.removeEventListener("keydown",h)}}),[h,b]),Object(i.jsx)("div",{id:"calculator-view",className:"flex column jc-center ai-center",children:Object(i.jsxs)("div",{id:"viewport",className:"flex column jc-sp-between ai-center",children:[Object(i.jsx)(o,{value:b}),Object(i.jsx)(s,{actionToPerform:function(e,t){"fx"===t?C(e):"numeric"===t?function(e){y?(j(String(e)),O(!1)):j("0"===b?String(e):b+e)}(e):"operator"===t&&function(e){var t=parseFloat(b);if(null===l)a(t);else if(d){var n=function(e,t,l){return"+"===e?t+l:"-"===e?t-l:"x"===e?t*l:"/"===e?t/l:"="===e?l:void 0}(d,l,t);a(n),j(String(n))}O(!0),p(e)}(e)},allClear:k})]})})},v=(l(10),function(){return Object(i.jsx)(j,{})});u.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.dacf4681.chunk.js.map