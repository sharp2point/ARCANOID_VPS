class e extends HTMLElement{_root=null;constructor(){super(),this._root=this.attachShadow({mode:"open"})}connectedCallback(){this._root.innerHTML=function(){let e=`
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
    `;return`${e}${t}`}(),this.setAttribute("class","copyright")}}customElements.define("nice2jm-copyright",e);