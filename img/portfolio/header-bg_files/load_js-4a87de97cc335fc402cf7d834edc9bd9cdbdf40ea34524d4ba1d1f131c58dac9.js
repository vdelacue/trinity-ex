!function(){var e=function(e){var n={exports:{}};return e.call(n.exports,n,n.exports),n.exports},l=function(){function o(e,n){var o=[],t=!0,r=!1,i=undefined;try{for(var d,a=e[Symbol.iterator]();!(t=(d=a.next()).done)&&(o.push(d.value),!n||o.length!==n);t=!0);}catch(u){r=!0,i=u}finally{try{!t&&a["return"]&&a["return"]()}finally{if(r)throw i}}return o}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return o(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(e){if(Array.isArray(e)){for(var n=0,o=Array(e.length);n<e.length;n++)o[n]=e[n];return o}return Array.from(e)},s=function(e){return e&&e.__esModule?e:{"default":e}},w=e(function(e,n){"use strict";function o(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&e()})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o});e(function(){"use strict";function u(){}function f(e,n,o){var t=document.querySelector('script[src="'+e+'"]');t?o(null,t):(t=document.createElement("script"),Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),null===t.getAttribute("defer")&&t.setAttribute("defer",""),t.src=e,t.crossorigin="anonymous",t.onload=function(){o(null,t)},t.onerror=function(){o(new Error("load error: "+e))},document.head.appendChild(t))}function d(e,n,o,t){var r=o||{},i=t||u;if("function"==typeof o&&(i=o,r={}),c[e]){var d=c[e][n];if(d)try{f(d,r,i)}catch(a){i(a)}else i(new Error("invalid js version: "+JSON.stringify(n)))}else i(new Error("invalid js name: "+JSON.stringify(e)))}function n(e){function o(){if(0!==i.length){var e=i.pop(),n=l(e,3);d(n[0],n[1],n[2],function(e,n){e?t(e):(r.push(n),o())})}else t(null,r)}var t=e||u,r=[],i=[];Object.keys(a).forEach(function(e){var n=document.querySelector(e);if(n){var o=(0,a[e])(n).filter(function(e){var n=l(e,3)[2];return!(window.Shopify.modules&&"nomodule"in n)&&!(!window.Shopify.modules&&"module"===n.type)});i=i.concat(o)}}),o()}var e=s(w);window.Shopify=window.Shopify||{};var o="https://cdn.shopify.com/shopifycloud",c={"model-viewer":{.6:o+"/model-viewer/v0.6/model-viewer.js"},"model-viewer-legacy":{.6:o+"/model-viewer/v0.6/model-viewer-legacy.js"}},a={"model-viewer[data-shopify-loadjs]":function i(e){var n=e.getAttribute("data-shopify-loadjs");return[["model-viewer",n,{type:"module"}],["model-viewer-legacy",n,{nomodule:""}]]}},t=window.Shopify&&window.Shopify.loadJS&&window.Shopify.loadJS.q,r=window.Shopify&&window.Shopify.detectLoadJS&&window.Shopify.detectLoadJS.q;(0,e["default"])(function(){t&&Array.isArray(t)&&t.forEach(function(e){d.apply(undefined,y(e))}),r&&Array.isArray(r)&&r.forEach(function(e){n.apply(undefined,y(e))}),window.Shopify.loadJS=d,(window.Shopify.detectLoadJS=n)(function(e){if(e)throw e})})})}("undefined"!=typeof global?global:"undefined"!=typeof window&&window);