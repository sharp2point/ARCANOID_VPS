!function(e,t,o,r,i){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n="function"==typeof s[r]&&s[r],c=n.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,o){if(!c[t]){if(!e[t]){var i="function"==typeof s[r]&&s[r];if(!o&&i)return i(t,!0);if(n)return n(t,!0);if(a&&"string"==typeof t)return a(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}f.resolve=function(o){var r=e[t][1][o];return null!=r?r:o},f.cache={};var u=c[t]=new l.Module(t);e[t][0].call(u.exports,f,u,u.exports,this)}return c[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=c,l.parent=n,l.register=function(t,o){e[t]=[function(e,t){t.exports=o},{}]},Object.defineProperty(l,"root",{get:function(){return s[r]}}),s[r]=l;for(var d=0;d<t.length;d++)l(t[d]);if(o){var u=l(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({"9UFmW":[function(e,t,o){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(o);class r extends HTMLElement{_root=null;_init=!1;_timer=null;_score=null;constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._init||(this.shadowRoot.innerHTML=function(){let e=`
        <p class="scoreboard-score scoreboard-view"><img src="./public/icons/score.png"><span>0000</span></p>
        <p class="scoreboard-time scoreboard-view"><img src="./public/icons/timer.png"><span>0000</span></p>
    `,t=`
            <style>
                :host{
                    position: absolute;
                    top: 0;
                    left: calc(100vw / 2 - 125px);
                    width: 100vw;
                    max-width: 250px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: start;
                    border: 1px solid rgba(100, 100, 100, 0.5);
                    background: rgba(0, 0, 0, 0);
                }
                .scoreboard-view {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: start;
                    gap:0.25rem;
                    width: 50%;
                }

                .scoreboard-view img {
                    width: 30px;
                    height: 30px;
                }

                .scoreboard-view span {
                    font: bold 2.5rem "Impact";
                }

                .scoreboard-score {
                    color: rgb(130, 100, 50);
                    padding: 5px;
                }

                .scoreboard-time {
                    color: rgb(130, 100, 50);
                    padding: 5px;
                }
            </style>    
    `;return`${e}${t}`}(),this.setAttribute("class","scoreboard"),this.style.visibility="hidden",this._timer=this.shadowRoot.querySelector(".scoreboard-time span"),this._score=this.shadowRoot.querySelector(".scoreboard-score span"),this._init=!0)}attributeChangedCallback(e,t,o){}set score(e){this._score.innerHTML=`${e}`.padStart(4,"0")}set timer(e){this._timer.innerHTML=`${e}`.padStart(4,"0")}set show(e){e?this.style.visibility="visible":this.style.visibility="hidden"}}o.default=r,customElements.define("nice2jm-scoreboard",r)},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},["9UFmW"],"9UFmW","parcelRequire6b9f");