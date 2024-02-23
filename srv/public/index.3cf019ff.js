!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[r]&&i[r],l=s.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,n){if(!l[t]){if(!e[t]){var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);if(s)return s(t,!0);if(u&&"string"==typeof t)return u(t);var f=Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}d.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},d.cache={};var a=l[t]=new c.Module(t);e[t][0].call(a.exports,d,a,a.exports,this)}return l[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=s,c.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return i[r]}}),i[r]=c;for(var f=0;f<t.length;f++)c(t[f]);if(n){var a=c(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define(function(){return a})}}({cZ1p2:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);class r extends HTMLElement{_root=null;constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._root.innerHTML=function(){let e=`
        <a href="mailto:sharppoint@yandex.ru"></a>
        <span class="study">&copy;NICE2JM</span>
        <span class="year">2024\u{433}.</span>
    `,t=`
        <style>
            :host{
                display:flex;
                flex-direction:row;
                align-items: end;
                justify-content: space-between;
                width:75%;
            }
            a{
                display:block ;
                width: 2rem;
                height: 2rem;
                background-size: cover;
                background-image: url("../public/icons/email.webp");
                pointer-events: all;
                cursor: pointer;
            }
            span.study{
                font-weight: 900;
                font-size: 1.3rem;
                text-align: center;
                line-height: 1.5rem;
                color: rgb(230,100,100);
            }
            span.study::first-letter{
                color: rgb(200, 200, 200);
            }
            span.year {
                font-size: 1.3rem;
                color: rgb(200, 200, 200);
            }
        </style>
    `;return`${e}${t}`}(),this.setAttribute("class","copyright")}}n.default=r,customElements.define("nice2jm-copyright",r)},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},["cZ1p2"],"cZ1p2","parcelRequire6b9f");