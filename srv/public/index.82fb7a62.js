class t extends HTMLElement{_root=null;_init=!1;_timer=null;_score=null;constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._init||(this.shadowRoot.innerHTML=function(){let t=`
        <p class="scoreboard-score scoreboard-view"><img src="./public/icons/score.png"><span>0000</span></p>
        <p class="scoreboard-time scoreboard-view"><img src="./public/icons/timer.png"><span>0000</span></p>
    `,e=`
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
    `;return`${t}${e}`}(),this.setAttribute("class","scoreboard"),this.style.visibility="hidden",this._timer=this.shadowRoot.querySelector(".scoreboard-time span"),this._score=this.shadowRoot.querySelector(".scoreboard-score span"),this._init=!0)}attributeChangedCallback(t,e,s){}set score(t){this._score.innerHTML=`${t}`.padStart(4,"0")}set timer(t){this._timer.innerHTML=`${t}`.padStart(4,"0")}set show(t){t?this.style.visibility="visible":this.style.visibility="hidden"}}customElements.define("nice2jm-scoreboard",t);