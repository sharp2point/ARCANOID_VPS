var e=globalThis.parcelRequire6b9f;(0,e.register)("04PYF",function(t,a){Object.defineProperty(t.exports,"CanvasPool",{get:()=>o,set:void 0,enumerable:!0,configurable:!0});var n=e("fZkkQ"),s=e("he538");let o=new class{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){let a=(0,n.DOMAdapter).get().createCanvas();a.width=e,a.height=t;let s=a.getContext("2d");return{canvas:a,context:s}}getOptimalCanvasAndContext(e,t,a=1){e=Math.ceil(e*a-1e-6),t=Math.ceil(t*a-1e-6),e=(0,s.nextPow2)(e),t=(0,s.nextPow2)(t);let n=(e<<17)+(t<<1);this._canvasPool[n]||(this._canvasPool[n]=[]);let o=this._canvasPool[n].pop();return o||(o=this._createCanvasAndContext(e,t)),o}returnCanvasAndContext(e){let{width:t,height:a}=e.canvas;this._canvasPool[(t<<17)+(a<<1)].push(e)}clear(){this._canvasPool={}}}});