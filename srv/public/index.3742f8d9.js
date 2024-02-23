!function(e,t,i,r,s){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n="function"==typeof o[r]&&o[r],p=n.cache||{},h="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,i){if(!p[t]){if(!e[t]){var s="function"==typeof o[r]&&o[r];if(!i&&s)return s(t,!0);if(n)return n(t,!0);if(h&&"string"==typeof t)return h(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}g.resolve=function(i){var r=e[t][1][i];return null!=r?r:i},g.cache={};var c=p[t]=new a.Module(t);e[t][0].call(c.exports,g,c,c.exports,this)}return p[t].exports;function g(e){var t=g.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=p,a.parent=n,a.register=function(t,i){e[t]=[function(e,t){t.exports=i},{}]},Object.defineProperty(a,"root",{get:function(){return o[r]}}),o[r]=a;for(var d=0;d<t.length;d++)a(t[d]);if(i){var c=a(i);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({cn3V0:[function(e,t,i){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);class r extends HTMLElement{_root=null;_init=!1;_timer=null;_score=null;constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._init||(this.shadowRoot.innerHTML=function(){let e=`
        <p class="progress-score progress-view"><img src="./public/icons/score.png"><span>0000</span></p>
        <p class="progress-time progress-view"><img src="./public/icons/timer.png"><span>0000</span></p>
    `,t=`
            <style>
                :host{
                    display:flex;
                    flex-direction:column;
                    align-items: center;
                    justify-content:end;
                    height:250px;
                    width: 100%;
                }
                .progress-view {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    width: 80%;
                    margin-top:-0.7rem;
                    border-radius:0.5rem;
                    padding:0.5rem;
                    border:1px solid rgb(100,100,100);
                    background: rgba(50,40,60,0.5);
                }

                .progress-view img {
                    width: 40px;
                    height: 40px;
                }

                .progress-view span {
                    font: bold 3rem "Impact";
                    text-shadow: 2px 2px 2px rgb(100,60,10),3px 3px 10px rgb(10,10,10);
                }

                .progress-score {
                    color: rgb(150, 80, 50);
                }

                .progress-time {
                    color: rgb(120, 80, 30);
                }
            </style>    
    `,i=`
        <style>
            @media screen and (max-height: 860px ){
                :host{
                    height: 200px;
                }
            }
            @media screen and (max-height: 710px) {                
                :host {
                     height: 150px;
                }
                .progress-view{
                    width: 60%;
                }
                .progress-view img{
                    width: 35px;
                    height: 35px;
                }
                .progress-view span {
                    font: bold 2.5rem "Impact";
                }
            }
            @media screen and (max-height: 650px) {
                :host{
                     height: 130px;
                }
                .progress-view{
                    width: 50%;
                }
                .progress-view img{
                    width: 30px;
                    height: 30px;
                }
                .progress-view span {
                    font: bold 2.1rem "Impact";
                }
            }
            @media screen and (max-height: 610px) {
                :host{
                     height: 120px;
                }
                .progress-view{
                    width: 50%;
                }
                .progress-view img{
                    width: 25px;
                    height: 25px;
                }
                .progress-view span {
                    font: bold 1.8rem "Impact";
                }
            }
            @media screen and (max-height: 560px) {
                :host{
                    height: 100px;
                }
                .progress-view img{
                    width: 25px;
                    height: 25px;
                }
                .progress-view span {
                    font: bold 1.5rem "Impact";
                }
            }
            @media screen and (max-height: 500px) {
                :host {
                    height: 80px;
                    flex-direction: row;
                    gap:1rem;
                }
                .progress-view{
                    width: 40%;
                }
                .progress-view img{
                    width: 30px;
                    height: 30px;
                }
                .progress-view span {
                    font: bold 2rem "Impact";
                }
            }
            @media screen and (max-height: 400px) {
                :host {
                    height: 55px;
                    align-items: start;
                    justify-content:center;
                }
                .progress-view{
                    margin-top:0;
                }
            }
            @media screen and (max-height: 350px) {
                :host {
                     height: 40px;
                     width: 95%;
                }
                .progress-view img{
                    width: 20px;
                    height: 20px;
                }
                .progress-view span {
                    font: bold 1.25rem "Impact";
                }
            }
            @media screen and (max-height: 320px) {
                :host {
                    height: 35px;
                }
            }
            @media screen and (max-height: 255px) {
                :host {
                visibility: hidden;
                display: none;
                }
            }
        </style>
    `;return`${e}${t}${i}`}(),this.setAttribute("class","progress"),this._timer=this.shadowRoot.querySelector(".progress-time span"),this._score=this.shadowRoot.querySelector(".progress-score span"),this._init=!0)}attributeChangedCallback(e,t,i){}set score(e){this._score.innerHTML=`${e}`.padStart(4,"0")}set timer(e){this._timer.innerHTML=`${e}`.padStart(4,"0")}set show(e){e?this.style.visibility="visible":this.style.visibility="hidden"}}i.default=r,customElements.define("nice2jm-progressboard",r)},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},["cn3V0"],"cn3V0","parcelRequire6b9f");