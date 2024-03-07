class t extends HTMLElement{root;UI={exitButton:null};onExitEvent;constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=function(){let t=`
        <button class="exit-button button"></button>
    `,e=`
        <style>
            :host{  
                display:flex;
                width: 50px;
                min-height:80px;
                border: 1px solid rgba(100, 100, 100, 0.5);
                padding:1rem;
            }
            button{
                margin:5px;
                width:100%;
                height:30px;
                background:transparent;
                border:none;
                background-image:url("public/icons/logout.png");
                background-position: center center;
                background-size:30px 30px;
                background-repeat:no-repeat;
                cursor:pointer;
            }
        </style>
    `;return`${t}${e}`}(),this.setAttribute("class","play-control"),this.UI.exitButton=this.root.querySelector(".exit-button")}connectedCallback(){this.UI.exitButton.addEventListener("click",()=>{this.onExitEvent&&this.onExitEvent()})}set exitEvent(t){this.onExitEvent=t}set show(t){t?this.style.visibility="visible":this.style.visibility="hidden"}}customElements.get("nice2jm-play-control")||customElements.define("nice2jm-play-control",t);