var e=globalThis,t={},r={},n=e.parcelRequire6b9f;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire6b9f=n),n.register;var i=n("4zFVs");class o extends i.default{init$={title:"ARCANOID 3D"}}o.template=(0,i.html)` 
    <canvas class="init-screen-canvas"></canvas>
    <pre-loader></pre-loader>
    <play-button class="hide"></play-button>
`,o.rootStyles=(0,i.css)`
    init-screen{
        color: rgba(200,100,100,0.5);
        position: absolute;
        top:0;
        left:0;
        background: rgb(5, 4, 29);
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:5rem;
        pointer-events: none;
    }
    .init-screen-canvas{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    pre-loader{
        
    }
    play-button{
        pointer-events: auto;
        cursor: pointer;        
    }
`,o.reg("init-screen");