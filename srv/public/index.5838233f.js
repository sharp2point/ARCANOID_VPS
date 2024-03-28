var e=globalThis,t={},i={},n=e.parcelRequire6b9f;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire6b9f=n),(0,n.register)("2d68U",function(e,t){var i=n("2ozqO");e.exports=i("5ZJPe").then(()=>n("h4W9d"))}),n("dRo73").register(new URL("",import.meta.url).toString(),JSON.parse('["ZxUgd","index.5838233f.js","5ZJPe","indexdb.27c97675.js"]'));class r extends HTMLElement{root;notifyPlace;constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=function(){let e=`
        <div class="notify-place"></div>
    `,t=`
        <style>
            :host{
                width:100vw;
                height:100vh;
                position:absolute;
                top:0;
                left:0;
                display:flex;
                align-items:center;
                justify-content:center;
                background: rgba(100,100,100,0.9);
            }
            .notify-place{
                display:flex;
                align-items:center;
                justify-content:center;
                width:300px;
                height:300px;
                background:rgba(150,150,150,0.0);
                border: 0px solid rgba(50,50,50,0.5);
            }
            .notify-win{
                width:100wv;
                height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                background-position: center center;
                background-repeat: no-repeat;
            }
        </style>
    `;return`${e}${t}`}(),this.setAttribute("class","notify-container"),this.notifyPlace=this.root.querySelector(".notify-place"),this.style.visibility="hidden"}set setNotify(e){this.notifyPlace.replaceChildren(e),e.addEventListener("click",async()=>{if(e.saved){let{saveDataToUserStore:t}=await n("2d68U");t("userStore",e.data),this.show=!1}})}set show(e){e?this.style.visibility="visible":this.style.visibility="hidden"}}customElements.get("nice2jm-notify-container")||customElements.define("nice2jm-notify-container",r);