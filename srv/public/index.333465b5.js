!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],l=u.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,n){if(!l[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(u)return u(t,!0);if(f&&"string"==typeof t)return f(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}a.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},a.cache={};var d=l[t]=new c.Module(t);e[t][0].call(d.exports,a,d,d.exports,this)}return l[t].exports;function a(e){var t=a.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=u,c.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return i[o]}}),i[o]=c;for(var s=0;s<t.length;s++)c(t[s]);if(n){var d=c(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({lTKqC:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);class o extends HTMLElement{_root=null;constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._root.innerHTML=function(){let e=`
        <img data-button="fullscreen" src="./public/icons/fullscreen.png">
        <img data-button="teach" src="./public/icons/education.png">
        <img data-button="lang" src="./public/icons/russian.png">
    `,t=`
        <style>
            :host{
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width:100%;
                max-width: 250px;
                height:40px;
            }
            img{
                width: 40px;
                height: 40px;
                margin:5px;
                pointer-events: all;
                cursor: pointer;
            }
        </style>
    `;return`${e}${t}`}(),this.setAttribute("class","up-menu")}}n.default=o,customElements.define("nice2jm-upmenu",o)},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],XTfsy:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["lTKqC"],"lTKqC","parcelRequire6b9f");