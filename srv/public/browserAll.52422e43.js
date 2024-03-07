function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r=globalThis.parcelRequire6b9f,i=r.register;i("pf7tt",function(t,i){e(t.exports,"BatchGeometry",()=>l);var n=r("135eB"),s=r("iKCKR"),o=r("2ngBw");let a=new Float32Array(1),u=new Uint32Array(1);class l extends o.Geometry{constructor(){let e=new n.Buffer({data:a,label:"attribute-batch-buffer",usage:s.BufferUsage.VERTEX|s.BufferUsage.COPY_DST,shrinkToFit:!1});super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:24,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:24,offset:8,location:3},aColor:{buffer:e,format:"unorm8x4",stride:24,offset:16,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:24,offset:20,location:2}},indexBuffer:new n.Buffer({data:u,label:"index-batch-buffer",usage:s.BufferUsage.INDEX|s.BufferUsage.COPY_DST,shrinkToFit:!1})})}}}),i("135eB",function(i,n){e(i.exports,"Buffer",()=>u);var s=r("03hcD"),o=r("aggPd"),a=r("iKCKR");class u extends t(s){constructor(e){let{data:t,size:r}=e,{usage:i,label:n,shrinkToFit:s}=e;super(),this.uid=(0,o.uid)("buffer"),this._resourceType="buffer",this._resourceId=(0,o.uid)("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,t instanceof Array&&(t=new Float32Array(t)),this._data=t,r=r??t?.byteLength;let a=!!t;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:n},this.shrinkToFit=s??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get static(){return!!(this.descriptor.usage&a.BufferUsage.STATIC)}set static(e){e?this.descriptor.usage|=a.BufferUsage.STATIC:this.descriptor.usage&=~a.BufferUsage.STATIC}setDataWithSize(e,t,r){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){r&&this.emit("update",this);return}let i=this._data;if(this._data=e,i.length!==e.length){!this.shrinkToFit&&e.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=(0,o.uid)("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.emit("destroy",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}}),i("iKCKR",function(t,r){e(t.exports,"BufferUsage",()=>n);var i,n=((i=n||{})[i.MAP_READ=1]="MAP_READ",i[i.MAP_WRITE=2]="MAP_WRITE",i[i.COPY_SRC=4]="COPY_SRC",i[i.COPY_DST=8]="COPY_DST",i[i.INDEX=16]="INDEX",i[i.VERTEX=32]="VERTEX",i[i.UNIFORM=64]="UNIFORM",i[i.STORAGE=128]="STORAGE",i[i.INDIRECT=256]="INDIRECT",i[i.QUERY_RESOLVE=512]="QUERY_RESOLVE",i[i.STATIC=1024]="STATIC",i)}),i("2ngBw",function(i,n){e(i.exports,"Geometry",()=>f);var s=r("03hcD"),o=r("jTAtI"),a=r("aggPd"),u=r("135eB"),l=r("ghIB0"),h=r("82xcb");class f extends t(s){constructor(e){let{attributes:t,indexBuffer:r,topology:i}=e;for(let r in super(),this.uid=(0,a.uid)("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new o.Bounds,this._boundsDirty=!0,this.attributes=t,this.buffers=[],this.instanceCount=e.instanceCount||1,t){var n;let e=t[r]=(((n=t[r])instanceof u.Buffer||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=(0,l.ensureIsBuffer)(n.buffer,!1),n);-1===this.buffers.indexOf(e.buffer)&&(this.buffers.push(e.buffer),e.buffer.on("update",this.onBufferUpdate,this),e.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=(0,l.ensureIsBuffer)(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(let e in this.attributes){let t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,(0,h.getGeometryBounds)(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}}),i("ghIB0",function(t,i){e(t.exports,"ensureIsBuffer",()=>o);var n=r("135eB"),s=r("iKCKR");function o(e,t){if(!(e instanceof n.Buffer)){let r=t?s.BufferUsage.INDEX:s.BufferUsage.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),r=s.BufferUsage.INDEX|s.BufferUsage.COPY_DST):(e=new Float32Array(e),r=s.BufferUsage.VERTEX|s.BufferUsage.COPY_DST)),e=new n.Buffer({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:r})}return e}}),i("82xcb",function(t,r){e(t.exports,"getGeometryBounds",()=>i);function i(e,t,r){let i=e.getAttribute(t);if(!i)return r.minX=0,r.minY=0,r.maxX=0,r.maxY=0,r;let n=i.buffer.data,s=1/0,o=1/0,a=-1/0,u=-1/0,l=n.BYTES_PER_ELEMENT,h=(i.offset||0)/l,f=(i.stride||8)/l;for(let e=h;e<n.length;e+=f){let t=n[e],r=n[e+1];t>a&&(a=t),r>u&&(u=r),t<s&&(s=t),r<o&&(o=r)}return r.minX=s,r.minY=o,r.maxX=a,r.maxY=u,r}}),i("9bUUm",function(t,r){e(t.exports,"BindGroup",()=>i);class i{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(let r in e){let i=e[r];this.setResource(i,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;let e=[],t=0;for(let r in this.resources)e[t++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,t){let r=this.resources[t];e!==r&&(r&&e.off?.("change",this.onResourceChange,this),e.on?.("change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){let t=this.resources;for(let r in t)t[r]._touched=e}destroy(){let e=this.resources;for(let t in e){let r=e[t];r.off?.("change",this.onResourceChange,this)}this.resources=null}onResourceChange(){this._dirty=!0,this._updateKey()}}}),i("eLF74",function(t,r){e(t.exports,"MAX_TEXTURES",()=>i);let i=16}),i("2B1Ep",function(t,i){e(t.exports,"Batcher",()=>d);var n=r("aggPd"),s=r("8Z1cq"),o=r("QD5Eh"),a=r("a8J9X"),u=r("1fqaH"),l=r("eLF74");class h{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let f=0,c=class e{constructor(t={}){this.uid=(0,n.uid)("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0;let{vertexSize:r,indexSize:i}=t={...e.defaultOptions,...t};this.attributeBuffer=new s.ViewableBuffer(r*this._vertexSize*4),this.indexBuffer=new Uint16Array(i)}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e.indexStart=this.indexSize,e.location=this.attributeSize,e.batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this._vertexSize}checkAndUpdateTexture(e,t){let r=e.batch.textures.ids[t._source.uid];return(!!r||0===r)&&(e.textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}break(e){let t=this._elements,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new u.BatchTextureArray;if(r.clear(),!t[this.elementStart])return;let i=t[this.elementStart],n=(0,a.getAdjustedBlendModeBlend)(i.blendMode,i.texture._source);4*this.attributeSize>this.attributeBuffer.size&&this._resizeAttributeBuffer(4*this.attributeSize),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);let s=this.attributeBuffer.float32View,o=this.attributeBuffer.uint32View,c=this.indexBuffer,d=this._batchIndexSize,p=this._batchIndexStart,m="startBatch",x=this._batchPool[this._batchPoolIndex++]||new h;for(let i=this.elementStart;i<this.elementSize;++i){let g=t[i];t[i]=null;let b=g.texture._source,v=(0,a.getAdjustedBlendModeBlend)(g.blendMode,b),_=n!==v;if(b._batchTick===f&&!_){g.textureId=b._textureBindLocation,d+=g.indexSize,g.packAttributes(s,o,g.location,g.textureId),g.packIndex(c,g.indexStart,g.location/this._vertexSize),g.batch=x;continue}b._batchTick=f,(r.count>=l.MAX_TEXTURES||_)&&(this._finishBatch(x,p,d-p,r,n,e,m),m="renderBatch",p=d,n=v,(r=this._textureBatchPool[this._textureBatchPoolIndex++]||new u.BatchTextureArray).clear(),x=this._batchPool[this._batchPoolIndex++]||new h,++f),g.textureId=b._textureBindLocation=r.count,r.ids[b.uid]=r.count,r.textures[r.count++]=b,g.batch=x,d+=g.indexSize,g.packAttributes(s,o,g.location,g.textureId),g.packIndex(c,g.indexStart,g.location/this._vertexSize)}r.count>0&&(this._finishBatch(x,p,d-p,r,n,e,m),p=d,++f),this.elementStart=this.elementSize,this._batchIndexStart=p,this._batchIndexSize=d}_finishBatch(e,t,r,i,n,s,o){e.gpuBindGroup=null,e.action=o,e.batcher=this,e.textures=i,e.blendMode=n,e.start=t,e.size=r,++f,s.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){4*e<=this.attributeBuffer.size||this._resizeAttributeBuffer(4*e)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){let t=Math.max(e,2*this.attributeBuffer.size),r=new s.ViewableBuffer(t);(0,o.fastCopy)(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){let t=this.indexBuffer,r=Math.max(e,1.5*t.length);r+=r%2;let i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let e=0;e<t.length;e++)i[e]=t[e];else(0,o.fastCopy)(t.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let e=0;e<this.batches.length;e++)this.batches[e].destroy();this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};c.defaultOptions={vertexSize:4,indexSize:6};let d=c}),i("8Z1cq",function(t,r){e(t.exports,"ViewableBuffer",()=>i);class i{constructor(e){"number"==typeof e?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw Error(`${e} isn't a valid view type`)}}}}),i("QD5Eh",function(t,r){e(t.exports,"fastCopy",()=>i);function i(e,t){let r=e.byteLength/8|0,i=new Float64Array(e,0,r);new Float64Array(t,0,r).set(i);let n=e.byteLength-8*r;if(n>0){let i=new Uint8Array(e,8*r,n);new Uint8Array(t,8*r,n).set(i)}}}),i("a8J9X",function(t,i){e(t.exports,"getAdjustedBlendModeBlend",()=>s);var n=r("apb0P");function s(e,t){return"no-premultiply-alpha"===t.alphaMode&&n.BLEND_TO_NPM[e]||e}}),i("apb0P",function(t,r){e(t.exports,"BLEND_TO_NPM",()=>i),e(t.exports,"STENCIL_MODES",()=>s);let i={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var n,s=((n=s||{})[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n)}),i("1fqaH",function(t,r){e(t.exports,"BatchTextureArray",()=>i);class i{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}}),i("hmii1",function(t,i){e(t.exports,"mixColors",()=>o);var n=r("hW5b2");let s=16777215+(16777215<<32);function o(e,t){return e+(t<<32)!==s?16777215===e?t:16777215===t?e:(0,n.mixHexColors)(e,t,.5):16777215}}),i("hW5b2",function(t,r){e(t.exports,"mixHexColors",()=>i);function i(e,t,r){let i=e>>16&255,n=e>>8&255,s=255&e;return(i+((t>>16&255)-i)*r<<16)+(n+((t>>8&255)-n)*r<<8)+(s+((255&t)-s)*r)}}),i("eeMzm",function(t,r){e(t.exports,"State",()=>s);let i={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},n=class e{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(1&this.data)}set blend(e){!!(1&this.data)!==e&&(this.data^=1)}get offsets(){return!!(2&this.data)}set offsets(e){!!(2&this.data)!==e&&(this.data^=2)}set cullMode(e){if("none"===e){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace="front"===e}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(4&this.data)}set culling(e){!!(4&this.data)!==e&&(this.data^=4)}get depthTest(){return!!(8&this.data)}set depthTest(e){!!(8&this.data)!==e&&(this.data^=8)}get depthMask(){return!!(32&this.data)}set depthMask(e){!!(32&this.data)!==e&&(this.data^=32)}get clockwiseFrontFace(){return!!(16&this.data)}set clockwiseFrontFace(e){!!(16&this.data)!==e&&(this.data^=16)}get blendMode(){return this._blendMode}set blendMode(e){this.blend="none"!==e,this._blendMode=e,this._blendModeId=i[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){let t=new e;return t.depthTest=!1,t.blend=!0,t}};n.default2d=n.for2d();let s=n}),i("lCwdn",function(t,r){e(t.exports,"color32BitToUniform",()=>i);function i(e,t,r){let i=(e>>24&255)/255;t[r++]=(255&e)/255*i,t[r++]=(e>>8&255)/255*i,t[r++]=(e>>16&255)/255*i,t[r++]=i}}),i("1p972",function(t,i){e(t.exports,"UniformGroup",()=>u);var n=r("aggPd"),s=r("4yjoR"),o=r("Wlp4t");let a=class e{constructor(t,r){this._touched=0,this.uid=(0,n.uid)("uniform"),this._resourceType="uniformGroup",this._resourceId=(0,n.uid)("resource"),this.isUniformGroup=!0,this._dirtyId=0,r={...e.defaultOptions,...r},this.uniformStructures=t;let i={};for(let e in t){let r=t[e];r.name=e,r.size=r.size??1,r.value??(r.value=(0,o.getDefaultUniformValue)(r.type,r.size)),i[e]=r.value}this.uniforms=i,this._dirtyId=1,this.ubo=r.ubo,this.isStatic=r.isStatic,this._signature=(0,s.createIdFromString)(Object.keys(i).map(e=>`${e}-${t[e].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};a.defaultOptions={ubo:!1,isStatic:!1};let u=a}),i("4yjoR",function(t,r){e(t.exports,"createIdFromString",()=>s);let i=Object.create(null),n=Object.create(null);function s(e,t){let r=n[e];return void 0===r&&(void 0===i[t]&&(i[t]=1),n[e]=r=i[t]++),r}}),i("Wlp4t",function(t,r){e(t.exports,"getDefaultUniformValue",()=>i);function i(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}}),i("e4dtB",function(t,r){e(t.exports,"BatchableSprite",()=>i);class i{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.groupBlendMode}packAttributes(e,t,r,i){let n=this.renderable,s=this.texture,o=n.groupTransform,a=o.a,u=o.b,l=o.c,h=o.d,f=o.tx,c=o.ty,d=this.bounds,p=d.maxX,m=d.minX,x=d.maxY,g=d.minY,b=s.uvs,v=n.groupColorAlpha,_=i<<16|65535&this.roundPixels;e[r+0]=a*m+l*g+f,e[r+1]=h*g+u*m+c,e[r+2]=b.x0,e[r+3]=b.y0,t[r+4]=v,t[r+5]=_,e[r+6]=a*p+l*g+f,e[r+7]=h*g+u*p+c,e[r+8]=b.x1,e[r+9]=b.y1,t[r+10]=v,t[r+11]=_,e[r+12]=a*p+l*x+f,e[r+13]=h*x+u*p+c,e[r+14]=b.x2,e[r+15]=b.y2,t[r+16]=v,t[r+17]=_,e[r+18]=a*m+l*x+f,e[r+19]=h*x+u*m+c,e[r+20]=b.x3,e[r+21]=b.y3,t[r+22]=v,t[r+23]=_}packIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}}),i("2S2W1",function(t,i){e(t.exports,"TexturePool",()=>u);var n=r("he538"),s=r("ivmL9"),o=r("fnmLg");let a=0,u=new class{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){let i=new s.TextureSource({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new o.Texture({source:i,label:`texturePool_${a++}`})}getOptimalTexture(e,t,r=1,i){let s=Math.ceil(e*r-1e-6),o=Math.ceil(t*r-1e-6),a=((s=(0,n.nextPow2)(s))<<17)+((o=(0,n.nextPow2)(o))<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let u=this._texturePool[a].pop();return u||(u=this.createTexture(s,o,i)),u.source._resolution=r,u.source.width=s/r,u.source.height=o/r,u.source.pixelWidth=s,u.source.pixelHeight=o,u.frame.x=0,u.frame.y=0,u.frame.width=e,u.frame.height=t,u.updateUvs(),this._poolKeyHash[u.uid]=a,u}getSameSizeTexture(e,t=!1){let r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){let t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=!1!==e)for(let e in this._texturePool){let t=this._texturePool[e];if(t)for(let e=0;e<t.length;e++)t[e].destroy(!0)}this._texturePool={}}}}),i("6hK4C",function(t,i){e(t.exports,"compileHighShaderGpuProgram",()=>l),e(t.exports,"compileHighShaderGlProgram",()=>h);var n=r("8V82Q"),s=r("hTpBE"),o=r("97tav"),a=r("mV4aD"),u=r("cmRZ7");function l({bits:e,name:t}){let r=(0,o.compileHighShader)({template:{fragment:a.fragmentGPUTemplate,vertex:a.vertexGPUTemplate},bits:[u.globalUniformsBit,...e]});return(0,s.GpuProgram).from({name:t,vertex:{source:r.vertex,entryPoint:"main"},fragment:{source:r.fragment,entryPoint:"main"}})}function h({bits:e,name:t}){return new n.GlProgram({name:t,...(0,o.compileHighShaderGl)({template:{vertex:a.vertexGlTemplate,fragment:a.fragmentGlTemplate},bits:[u.globalUniformsBitGl,...e]})})}}),i("8V82Q",function(t,i){e(t.exports,"GlProgram",()=>d);var n=r("4yjoR"),s=r("1WD0c"),o=r("d4IiR"),a=r("iUbXA"),u=r("icOf5"),l=r("lIpsC");let h={stripVersion:r("9Bgxm").stripVersion,ensurePrecision:a.ensurePrecision,addProgramDefines:o.addProgramDefines,setProgramName:l.setProgramName,insertVersion:u.insertVersion},f=Object.create(null),c=class e{constructor(t){let r=-1!==(t={...e.defaultOptions,...t}).fragment.indexOf("#version 300 es"),i={stripVersion:r,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:(0,s.getMaxFragmentPrecision)()},setProgramName:{name:t.name},addProgramDefines:r,insertVersion:r},o=t.fragment,a=t.vertex;Object.keys(h).forEach(e=>{let t=i[e];o=h[e](o,t,!0),a=h[e](a,t,!1)}),this.fragment=o,this.vertex=a,this._key=(0,n.createIdFromString)(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){let r=`${t.vertex}:${t.fragment}`;return f[r]||(f[r]=new e(t)),f[r]}};c.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let d=c}),i("1WD0c",function(t,i){let n;e(t.exports,"getMaxFragmentPrecision",()=>o);var s=r("2W33O");function o(){if(!n){n="mediump";let e=(0,s.getTestContext)();e&&e.getShaderPrecisionFormat&&(n=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return n}}),i("2W33O",function(t,i){let n;e(t.exports,"getTestContext",()=>o);var s=r("fZkkQ");function o(){return(!n||n?.isContextLost())&&(n=(0,s.DOMAdapter).get().createCanvas().getContext("webgl",{})),n}}),i("d4IiR",function(t,r){e(t.exports,"addProgramDefines",()=>i);function i(e,t,r){return t?e:r?(e=e.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it's WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${e}
        `):`
        
        #ifdef GL_ES // This checks if it's WebGL1
        #define in attribute
        #define out varying
        #endif
        ${e}
        `}}),i("iUbXA",function(t,r){e(t.exports,"ensurePrecision",()=>i);function i(e,t,r){let i=r?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if("precision"!==e.substring(0,9)){let n=r?t.requestedFragmentPrecision:t.requestedVertexPrecision;return"highp"===n&&"highp"!==i&&(n="mediump"),`precision ${n} float;
${e}`}return"highp"!==i&&"precision highp"===e.substring(0,15)?e.replace("precision highp","precision mediump"):e}}),i("icOf5",function(t,r){e(t.exports,"insertVersion",()=>i);function i(e,t){return t?`#version 300 es
${e}`:e}}),i("lIpsC",function(t,r){e(t.exports,"setProgramName",()=>s);let i={},n={};function s(e,{name:t="pixi-program"},r=!0){t=t.replace(/\s+/g,"-")+(r?"-fragment":"-vertex");let s=r?i:n;if(s[t]?(s[t]++,t+=`-${s[t]}`):s[t]=1,-1!==e.indexOf("#define SHADER_NAME"))return e;let o=`#define SHADER_NAME ${t}`;return`${o}
${e}`}}),i("9Bgxm",function(t,r){e(t.exports,"stripVersion",()=>i);function i(e,t){return t?e.replace("#version 300 es",""):e}}),i("hTpBE",function(t,i){e(t.exports,"GpuProgram",()=>f);var n=r("4yjoR"),s=r("laIfw"),o=r("iK8Ga"),a=r("5qNAa"),u=r("kSDfm"),l=r("fXPBB");let h=Object.create(null);class f{constructor(e){this._layoutKey=0;let{fragment:t,vertex:r,layout:i,gpuLayout:n,name:s}=e;if(this.name=s,this.fragment=t,this.vertex=r,t.source===r.source){let e=(0,o.extractStructAndGroups)(t.source);this.structsAndGroups=e}else{let e=(0,o.extractStructAndGroups)(r.source),i=(0,o.extractStructAndGroups)(t.source);this.structsAndGroups=(0,l.removeStructAndGroupDuplicates)(e,i)}this.layout=i??(0,u.generateLayoutHash)(this.structsAndGroups),this.gpuLayout=n??(0,a.generateGpuLayoutGroups)(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){let{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=(0,n.createIdFromString)(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=(0,s.extractAttributesFromGpuProgram)(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){let t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return h[t]||(h[t]=new f(e)),h[t]}}}),i("laIfw",function(t,i){e(t.exports,"extractAttributesFromGpuProgram",()=>o);var n=r("beUFL");let s={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function o({source:e,entryPoint:t}){let r={},i=e.indexOf(`fn ${t}`);if(-1!==i){let t=e.indexOf("->",i);if(-1!==t){let o;let a=e.substring(i,t),u=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;for(;null!==(o=u.exec(a));){let e=s[o[3]]??"float32";r[o[2]]={location:parseInt(o[1],10),format:e,stride:(0,n.getAttributeInfoFromFormat)(e).stride,offset:0,instance:!1,start:0}}}}return r}}),i("beUFL",function(t,r){e(t.exports,"getAttributeInfoFromFormat",()=>n);let i={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function n(e){return i[e]??i.float32}}),i("iK8Ga",function(t,r){e(t.exports,"extractStructAndGroups",()=>i);function i(e){let t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,n=/:\s*(\w+)/,s=/(\w+)\s*:\s*([\w\<\>]+)/g,o=/struct\s+(\w+)/,a=e.match(/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g)?.map(e=>({group:parseInt(e.match(t)[1],10),binding:parseInt(e.match(r)[1],10),name:e.match(i)[2],isUniform:"<uniform>"===e.match(i)[1],type:e.match(n)[1]}));if(!a)return{groups:[],structs:[]};let u=e.match(/struct\s+(\w+)\s*{([^}]+)}/g)?.map(e=>{let t=e.match(o)[1],r=e.match(s).reduce((e,t)=>{let[r,i]=t.split(":");return e[r.trim()]=i.trim(),e},{});return r?{name:t,members:r}:null}).filter(({name:e})=>a.some(t=>t.type===e))??[];return{groups:a,structs:u}}}),i("5qNAa",function(t,i){e(t.exports,"generateGpuLayoutGroups",()=>s);var n=r("9cE2n");function s({groups:e}){let t=[];for(let r=0;r<e.length;r++){let i=e[r];t[i.group]||(t[i.group]=[]),i.isUniform?t[i.group].push({binding:i.binding,visibility:n.ShaderStage.VERTEX|n.ShaderStage.FRAGMENT,buffer:{type:"uniform"}}):"sampler"===i.type?t[i.group].push({binding:i.binding,visibility:n.ShaderStage.FRAGMENT,sampler:{type:"filtering"}}):"texture_2d"===i.type&&t[i.group].push({binding:i.binding,visibility:n.ShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}}),i("9cE2n",function(t,r){e(t.exports,"ShaderStage",()=>n);var i,n=((i=n||{})[i.VERTEX=1]="VERTEX",i[i.FRAGMENT=2]="FRAGMENT",i[i.COMPUTE=4]="COMPUTE",i)}),i("kSDfm",function(t,r){e(t.exports,"generateLayoutHash",()=>i);function i({groups:e}){let t=[];for(let r=0;r<e.length;r++){let i=e[r];t[i.group]||(t[i.group]={}),t[i.group][i.name]=i.binding}return t}}),i("fXPBB",function(t,r){e(t.exports,"removeStructAndGroupDuplicates",()=>i);function i(e,t){let r=new Set,i=new Set;return{structs:[...e.structs,...t.structs].filter(e=>!r.has(e.name)&&(r.add(e.name),!0)),groups:[...e.groups,...t.groups].filter(e=>{let t=`${e.name}-${e.binding}`;return!i.has(t)&&(i.add(t),!0)})}}}),i("97tav",function(t,i){e(t.exports,"compileHighShader",()=>c),e(t.exports,"compileHighShaderGl",()=>d);var n=r("iaf0z"),s=r("laZoo"),o=r("j58fn"),a=r("8B3hw"),u=r("kPipj");let l=Object.create(null),h=new Map,f=0;function c({template:e,bits:t}){let r=p(e,t);if(l[r])return l[r];let{vertex:i,fragment:n}=function(e,t){let r=t.map(e=>e.vertex).filter(e=>!!e),i=t.map(e=>e.fragment).filter(e=>!!e),n=(0,o.compileInputs)(r,e.vertex,!0);return{vertex:n=(0,a.compileOutputs)(r,n),fragment:(0,o.compileInputs)(i,e.fragment,!0)}}(e,t);return l[r]=m(i,n,t),l[r]}function d({template:e,bits:t}){let r=p(e,t);return l[r]||(l[r]=m(e.vertex,e.fragment,t)),l[r]}function p(e,t){return t.map(e=>(h.has(e)||h.set(e,f++),h.get(e))).sort((e,t)=>e-t).join("-")+e.vertex+e.fragment}function m(e,t,r){let i=(0,s.compileHooks)(e),o=(0,s.compileHooks)(t);return r.forEach(e=>{(0,n.addBits)(e.vertex,i,e.name),(0,n.addBits)(e.fragment,o,e.name)}),{vertex:(0,u.injectBits)(e,i),fragment:(0,u.injectBits)(t,o)}}}),i("iaf0z",function(t,i){e(t.exports,"addBits",()=>s);var n=r("jak2I");function s(e,t,r){if(e)for(let i in e){let s=t[i.toLocaleLowerCase()];if(s){let t=e[i];"header"===i&&(t=t.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),r&&s.push(`//----${r}----//`),s.push(t)}else(0,n.warn)(`${i} placement hook does not exist in shader`)}}}),i("laZoo",function(t,r){e(t.exports,"compileHooks",()=>n);let i=/\{\{(.*?)\}\}/g;function n(e){let t={};return(e.match(i)?.map(e=>e.replace(/[{()}]/g,""))??[]).forEach(e=>{t[e]=[]}),t}}),i("j58fn",function(t,r){function i(e,t){let r;let i=/@in\s+([^;]+);/g;for(;null!==(r=i.exec(e));)t.push(r[1])}function n(e,t,r=!1){let n=[];i(t,n),e.forEach(e=>{e.header&&i(e.header,n)}),r&&n.sort();let s=n.map((e,t)=>`       @location(${t}) ${e},`).join("\n");return t.replace(/@in\s+[^;]+;\s*/g,"").replace("{{in}}",`
${s}
`)}e(t.exports,"compileInputs",()=>n)}),i("8B3hw",function(t,r){function i(e,t){let r;let i=/@out\s+([^;]+);/g;for(;null!==(r=i.exec(e));)t.push(r[1])}function n(e,t){let r=[];i(t,r),e.forEach(e=>{e.header&&i(e.header,r)});let n=0,s=r.sort().map(e=>e.indexOf("builtin")>-1?e:`@location(${n++}) ${e}`).join(",\n"),o=r.sort().map(e=>`       var ${e.replace(/@.*?\s+/g,"")};`).join("\n"),a=`return VSOutput(
                ${r.sort().map(e=>` ${function(e){let t=/\b(\w+)\s*:/g.exec(e);return t?t[1]:""}(e)}`).join(",\n")});`,u=t.replace(/@out\s+[^;]+;\s*/g,"");return(u=(u=u.replace("{{struct}}",`
${s}
`)).replace("{{start}}",`
${o}
`)).replace("{{return}}",`
${a}
`)}e(t.exports,"compileOutputs",()=>n)}),i("kPipj",function(t,r){e(t.exports,"injectBits",()=>i);function i(e,t){let r=e;for(let e in t){let i=t[e];r=i.join("\n").length?r.replace(`{{${e}}}`,`//-----${e} START-----//
${i.join("\n")}
//----${e} FINISH----//`):r.replace(`{{${e}}}`,"")}return r}}),i("mV4aD",function(t,r){e(t.exports,"vertexGPUTemplate",()=>i),e(t.exports,"fragmentGPUTemplate",()=>n),e(t.exports,"vertexGlTemplate",()=>s),e(t.exports,"fragmentGlTemplate",()=>o);let i=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);
        vUV = aUV;

        {{main}}

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,n=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,s=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;

        {{start}}
        
        vColor = vec4(1.);
        vUV = aUV;

        {{main}}

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,o=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`}),i("cmRZ7",function(t,r){e(t.exports,"globalUniformsBit",()=>i),e(t.exports,"globalUniformsBitGl",()=>n);let i={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},n={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}}}),i("hOce1",function(t,r){e(t.exports,"colorBit",()=>i),e(t.exports,"colorBitGl",()=>n);let i={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},n={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}}}),i("2pHo3",function(t,r){e(t.exports,"generateTextureBatchBit",()=>n),e(t.exports,"generateTextureBatchBitGl",()=>o);let i={};function n(e){return i[e]||(i[e]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${function(e){let t=[];{let e=0;for(let r=0;r<16;r++)t.push(`@group(1) @binding(${e++}) var textureSource${r+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${r+1}: sampler;`)}return t.join("\n")}(0)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${function(e){let t=[];t.push("switch vTextureId {");for(let e=0;e<16;e++)15===e?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");return t.push("}"),t.join("\n")}(16)}
            `}}),i[e]}let s={};function o(e){return s[e]||(s[e]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uTextures[${e}];
              
            `,main:`
    
                ${function(e){let t=[];for(let e=0;e<16;e++)e>0&&t.push("else"),e<15&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join("\n")}(0)}
            `}}),s[e]}}),i("g2wNI",function(t,r){e(t.exports,"roundPixelsBit",()=>i),e(t.exports,"roundPixelsBitGl",()=>n);let i={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}},n={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}}}),i("a3LAq",function(i,n){e(i.exports,"Shader",()=>f);var s=r("03hcD"),o=r("8V82Q"),a=r("9bUUm"),u=r("hTpBE"),l=r("jYmNI"),h=r("1p972");class f extends t(s){constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:i,resources:n,compatibleRenderers:s,groupMap:o}=e;this.gpuProgram=t,this.glProgram=r,void 0===s&&(s=0,t&&(s|=l.RendererType.WEBGPU),r&&(s|=l.RendererType.WEBGL)),this.compatibleRenderers=s;let u={};if(n||i||(n={}),n&&i)throw Error("[Shader] Cannot have both resources and groups");if(t||!i||o){if(!t&&i&&o)for(let e in o)for(let t in o[e]){let r=o[e][t];u[r]={group:e,binding:t,name:r}}else if(t&&i&&!o){let e=t.structsAndGroups.groups;o={},e.forEach(e=>{o[e.group]=o[e.group]||{},o[e.group][e.binding]=e.name,u[e.name]=e})}else if(n){if(t){let e=t.structsAndGroups.groups;o={},e.forEach(e=>{o[e.group]=o[e.group]||{},o[e.group][e.binding]=e.name,u[e.name]=e})}else{o={},i={99:new a.BindGroup},this._ownedBindGroups.push(i[99]);let e=0;for(let t in n)u[t]={group:99,binding:e,name:t},o[99]=o[99]||{},o[99][e]=t,e++}for(let e in i={},n){let t=n[e];t.source||t._resourceType||(t=new h.UniformGroup(t));let r=u[e];r&&(i[r.group]||(i[r.group]=new a.BindGroup,this._ownedBindGroups.push(i[r.group])),i[r.group].setResource(t,r.binding))}}}else throw Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");this.groups=i,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(i,u)}addResource(e,t,r){var i,n;(i=this._uniformBindMap)[t]||(i[t]={}),(n=this._uniformBindMap[t])[r]||(n[r]=e),this.groups[t]||(this.groups[t]=new a.BindGroup,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){let r={};for(let i in t){let n=t[i];Object.defineProperty(r,n.name,{get:()=>e[n.group].getResource(n.binding),set(t){e[n.group].setResource(t,n.binding)}})}return r}destroy(e=!1){this.emit("destroy",this),e&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(e=>{e.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){let t,r;let{gpu:i,gl:n,...s}=e;return i&&(t=(0,u.GpuProgram).from(i)),n&&(r=(0,o.GlProgram).from(n)),new f({gpuProgram:t,glProgram:r,...s})}}}),i("jYmNI",function(t,r){e(t.exports,"RendererType",()=>n);var i,n=((i=n||{})[i.WEBGL=1]="WEBGL",i[i.WEBGPU=2]="WEBGPU",i[i.BOTH=3]="BOTH",i)}),i("jiAbK",function(t,r){e(t.exports,"localUniformBit",()=>i),e(t.exports,"localUniformBitGroup2",()=>n),e(t.exports,"localUniformBitGl",()=>s);let i={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},n={...i,vertex:{...i.vertex,header:i.vertex.header.replace("group(1)","group(2)")}},s={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}}});