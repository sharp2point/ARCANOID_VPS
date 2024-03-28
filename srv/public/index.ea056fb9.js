class t extends HTMLElement{root;ui={switcher:null};name;label;_state;constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.name=this.getAttribute("name"),this.label=this.dataset.label,this.root.innerHTML=function(t,e){let i=`
        <span>${e}</span>       
        <input type="checkbox" name="switch" class="switch"/>
        <label for="switch"></label>
    `,s=`
        <style>
            :host{
                padding:0.5rem;
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:space-between;
                gap:1rem;
                width:95%;
            }
            input[type=checkbox]{
                width:0;
                height:0;
                visibility:hidden;
            }
            label{
                cursor:pointer;
                width:50px;
                height:26px;
                background:rgba(100,100,100,0.5);
                display:block;
                border-radius:25px;
                position:relative;
            }
            label::after{
                content:"";
                position:absolute;
                top:3px;
                left:3px;
                width:20px;
                height:20px;
                background: rgba(200,200,200,1);
                border-radius:50%;
                transition:0.3s;
            }
            input:checked + label{
                background:rgba(200,100,30,1);
            }

            input:checked + label:after {
                left: calc(100% - 3px);
                transform: translateX(-100%);
            }

            label:active:after {
                width: 30px;
            }
        </style>
    `;return`${i}${s}`}(this.name,this.label),this.ui.switcher=this.root.querySelector(".switch")}connectedCallback(){this.ui.switcher.addEventListener("click",()=>{this.ui.switcher.checked?this._state=!0:this._state=!1})}get state(){return this._state}}customElements.get("nice2jm-checkbox")||customElements.define("nice2jm-checkbox",t);