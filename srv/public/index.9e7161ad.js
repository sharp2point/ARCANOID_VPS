!function(e,t,n,i,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[i]&&o[i],h=s.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!h[t]){if(!e[t]){var r="function"==typeof o[i]&&o[i];if(!n&&r)return r(t,!0);if(s)return s(t,!0);if(d&&"string"==typeof t)return d(t);var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}c.resolve=function(n){var i=e[t][1][n];return null!=i?i:n},c.cache={};var f=h[t]=new a.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return h[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=h,a.parent=s,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return o[i]}}),o[i]=a;for(var l=0;l<t.length;l++)a(t[l]);if(n){var f=a(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define(function(){return f})}}({elvBm:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);class i extends HTMLElement{_root=null;_header="Глава первая";_descript="Путь в тысячу вёрст начинается с первого шага.";constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._root.innerHTML=function(e,t){let n=`
        <h2>${e}</h2>
        <p>${t}</p>
    `,i=`
        <style>
            :host{
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items: center;
                gap:0rem;
                width: 100%;
                max-width: 250px;
                height:250px;
            }
            h2 {
                font: 2rem "Arial";
                letter-spacing: 0.1rem;
                color: rgb(130, 100, 50)
            }
            p {
                font: 1.1rem "Arial";
                font-style: italic;
                text-align: center;
                color: rgb(200, 200, 200)
            }
        </style>
    `,r=`
        <style>
            @media screen and (max-height: 760px) {
                :host {
                    height: 220px;
                }
            }
            @media screen and (max-height: 680px) {
                :host {
                    height: 190px;
                }
            }
            @media screen and (max-height: 605px) {
                :host {
                    height: 160px;
                }
            }
            @media screen and (max-height: 550px) {
                :host {
                    height: 150px;
                }
            }
            @media screen and (max-height: 500px) {
                :host {
                    height: 110px;
                }
                h2{
                    font-size: 1.9rem;
                    line-height:1.1rem;
                    margin-bottom:-0.05rem;
                }
                p{
                    font-size: 1rem;
                }
            }
            @media screen and (max-height: 400px) {
                :host {
                    height: 90px;
                }
            }
            @media screen and (max-height: 350px) {
                :host {
                    height: 70px;
                }
                h2{
                    font-size: 1.5rem;
                }
                p{
                    font-size: 0.9rem;
                }
            }
            @media screen and (max-height: 320px) {
                :host {
                    height: 50px;
                }
                h2{
                    font-size: 1.8rem;
                }
                p{
                    visibility: hidden;
                    display: none;
                }
            }
            @media screen and (max-height: 255px) {
                :host {
                    visibility: hidden;
                    display: none;
                }
            }
        </style>
    `;return`${n}${i}${r}`}(this._header,this._descript),this.setAttribute("class","content")}}n.default=i,customElements.define("nice2jm-descript",i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},["elvBm"],"elvBm","parcelRequire6b9f");