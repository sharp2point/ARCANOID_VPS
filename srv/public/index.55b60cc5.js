const e="Настройки",t="Имя",i={ru:"язык",en:"lang"},n={ru:"fx",en:"fx"},s={ru:"музыка",en:"musiс"};class u extends HTMLElement{root;ui={nikTextInput:null,fxCheckBox:null,langCheckBox:null,musicCheckBox:null,saveButton:null,info:null};soundEvent;isSound=!1;isSaved=!1;_data;get data(){return this._data}get saved(){return this.isSaved}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=function(){let u=n.ru,r=s.ru,a=i.ru,l=`
        <form class="menu">
            <h1>${e}</h1>
            <label for="nik" class="name-label">${t}</label>
            <input type="text" name="nik" id="nik" required minlength="3" maxlength="20" pattern="w+$"/>
            <span class="validate-info">*\u{442}\u{43E}\u{43B}\u{44C}\u{43A}\u{43E} \u{431}\u{443}\u{43A}\u{432}\u{44B} \u{438} \u{446}\u{438}\u{444}\u{440}\u{44B}.</span>
            <!--nice2jm-checkbox class="fx-check" name="fx" data-label=${u}></nice2jm-checkbox>
            <nice2jm-checkbox class="music-check" name="music" data-label=${r}></nice2jm-checkbox>
            <nice2jm-checkbox class="lang-check" name="lang" data-label=${a}></nice2jm-checkbox-->
            <button class="save-button">\u{421}\u{43E}\u{445}\u{440}\u{430}\u{43D}\u{438}\u{442}\u{44C}</button>
        </form>
    `,o=`
        <style>
            :host{
                width: 100vw;
                min-height: 100vh;
                border-radius: 1rem;
                background: rgba(50,50,50,0.8);
                position:absolute;
                display:flex;
                justify-content:center;
                align-items:center;
                top:0;
                left:0;
            }
            .sound-check{
                
            }
            .menu{
                display:flex;
                flex-direction:column;
                justify-content:start;
                align-items:start;
                border-radius: 1rem;
                box-shadow: 0 0 5px 3px rgba(0,0,0,0.8);
                background: rgba(250,250,250,0.8);
                font: 200 1.2rem Arial;
                color: rgb(100,100,100);
                padding:1rem;
            }
            h1{
                font-size:1.7rem;
                color: rgb(50,50,50);
                align-self:center;
            }
            .name-label{

            }
            input[type=text]{
                font-size:1.5rem;
                padding:0.25rem;
                margin:0.5rem;
                line-height:1.8rem;
                border-radius:0.5rem;
            }
            input:invalid{
                border:2px solid rgb(100,30,30);
            }
            input:invalid:focus{
                border:2px solid rgb(100,30,30);
            }
            .validate-info{
                color:rgb(50,50,50);
                visibility:hidden;
            }
            .save-button{
                width:100px;
                height:40px;
                border-radius:0.5rem;
                align-self:end;
                margin-top:1rem;
            }
            .border{
                width:100%;
                margin-top:0.5rem;
                border-top:1px solid rgba(30,30,30,0.5);
            }
        </style>
    `;return`${l}${o}`}(),this.setAttribute("class","player-settings"),this.ui.nikTextInput=this.root.querySelector("#nik"),this.ui.fxCheckBox=this.root.querySelector(".fx-check"),this.ui.musicCheckBox=this.root.querySelector(".music-check"),this.ui.langCheckBox=this.root.querySelector(".lang-check"),this.ui.saveButton=this.root.querySelector(".save-button"),this.ui.info=this.root.querySelector(".validate-info")}connectedCallback(){let e=!1;this.ui.nikTextInput.addEventListener("input",e=>{/[\p{L}\p{N}]$/gu.test(e.target.value)?(this.ui.info.style.color="rgb(50,50,50)",this.ui.info.style.visibility="hidden"):(this.ui.info.style.color="rgb(200,30,30)",this.ui.info.style.visibility="visible",e.target.value=this.clearLastSymbolInput(e.target.value))}),this.ui.nikTextInput.addEventListener("paste",e=>{e.preventDefault()}),this.ui.saveButton.addEventListener("click",t=>{t.preventDefault(),e||(this.ui.nikTextInput.value,e=!0,this._data={name:this.ui.nikTextInput.value,level:0},setTimeout(()=>{e=!1},1e3),this.isSaved=!0)})}setSoundEvent(e){this.soundEvent=e}clearLastSymbolInput(e){return e.slice(0,e.length-1)}nameValidator(e){e.length}}customElements.get("nice2jm-player-settings")||customElements.define("nice2jm-player-settings",u);