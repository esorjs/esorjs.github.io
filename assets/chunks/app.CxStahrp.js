var z=Object.defineProperty,H=e=>{throw TypeError(e)},te=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>z(e,"name",{value:t,configurable:!0}),C=(e,t,n)=>te(e,typeof t!="symbol"?t+"":t,n),ne=(e,t,n)=>t.has(e)||H("Cannot "+n),re=(e,t,n)=>(ne(e,t,"read from private field"),n?n.call(e):t.get(e)),oe=(e,t,n)=>t.has(e)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),f=null,le=0,W=[],L=o(e=>{let t=e,n=new Set;return o(r=>{if(r===void 0)return f&&n.add(f),t;let l=typeof r=="function"?r(t):r;if(!Object.is(l,t)){t=l;for(let u of n)u()}return t},"getterSetter")},"signal"),B=o(e=>{let t=!1,n=o(()=>{if(t)return;t=!0;let r=f;f=n;try{e()}finally{f=r,t=!1}},"reactive");return n(),()=>W.splice(W.indexOf(n),1)},"effect"),ye=o(e=>{let t=L();return B(()=>t(e())),()=>t()},"computed");o(e=>{let t=f;f={id:le++};try{return e()}finally{f=t}},"batch");function G(e,t,n=null){let r=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n&&n.dispatchEvent(r),r}o(G,"emit");function ie(e=null){let t=e;return n=>n!==void 0?t=n:t}o(ie,"ref");function T(e){return e&&(e.__nodeGroups=!0),e}o(T,"markNode");function x(e){return k(e,T)}o(x,"markedFragment");function k(e,t=null,n=null){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let l of e)l&&(l=typeof t=="function"?t(l,r):l,Array.isArray(l)?r.appendChild(k(l,t)):r.appendChild(l));return n&&r.childNodes.length&&n.appendChild(r),r}o(k,"createFragment");function y(e,t,n="error"){let r=n==="warn"?console.warn:console.error,l=t instanceof Error?t:new Error(String(t));return r(`[Esor Framework Error] ${e}:`,l.message),l}o(y,"handleError");function c(e,t,n){try{return e()}catch(r){return y(t,r),n}}o(c,"tryCatch");function $(e,t){!e||!t||!t.parentNode||c(()=>{let n=t.parentNode,r=o(i=>{for(let a of i)!a||a.parentNode!==n||(a._cleanup&&typeof a._cleanup=="function"&&a._cleanup(),n.removeChild(a))},"removeNodes"),l=o((i,a)=>i.length!==a.length||i.some((d,p)=>!d.isEqualNode(a[p])),"nodesChanged"),u=t.__nodeGroups||[],Z=new Map(u.map(i=>[i.key,i])),A=e.map((i,a)=>{var p;let d=Array.isArray(i)?i.filter(Boolean):[i];return{key:((p=d.find(m=>{var j;return((j=m==null?void 0:m.getAttribute)==null?void 0:j.call(m,"key"))!=null}))==null?void 0:p.getAttribute("key"))||`__key_${a}`,nodes:d}}),ee=new Map(A.map(i=>[i.key,i]));for(let i of u)!ee.has(i.key)&&r(i.nodes);let h=t;for(let i of A){let a=Z.get(i.key);if(a)if(l(a.nodes,i.nodes))r(a.nodes),n.insertBefore(x(i.nodes),h.nextSibling);else{let d=h.nextSibling;if(a.nodes[0]!==d){let p=document.createDocumentFragment();for(let m of a.nodes)p.appendChild(m);n.insertBefore(p,d)}i.nodes=a.nodes}else n.insertBefore(x(i.nodes),h.nextSibling);h=i.nodes[i.nodes.length-1]||h}t.__nodeGroups=A},"list.reconcile")}o($,"reconcile");var N=new WeakMap,g="\uFEFF\uFEFF";function D(e,t,n=null){!e||!t||(n&&n.parentNode===t?t.insertBefore(e,n):t.appendChild(e))}o(D,"insertFragment");function U(e,t){typeof t=="function"?t(e):t&&typeof t=="object"&&"current"in t?t.current=e:t!=null&&(t=e)}o(U,"setRef");function V(e,t,n){let r=t.slice(2).toLowerCase();e.addEventListener(r,n),e._cleanup=()=>e.removeEventListener(r,n)}o(V,"setEvent");function q(e,t){Object.assign(e.style,t)}o(q,"setStyle");function S(e,t,n){t==="value"||t==="checked"?e[t]=n:n===!1||n===null||n===void 0?e.removeAttribute(t):e.setAttribute(t,n)}o(S,"setAttribute");function _(e,t){if(!e||typeof t!="function")return;let n=e._cleanup;n&&n();let r=B(t);return e._cleanup=r,r}o(_,"setEffect");function P(e,t){let n=e.parentNode,r=e.nextSibling;for(;r&&r.__nodeGroups;)r._cleanup&&r._cleanup(),n.removeChild(r),r=e.nextSibling;t!=null&&t.length&&D(x(t),n,e.nextSibling)}o(P,"replaceNodes");function J(e,t){let n=o(r=>{c(()=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))$(r,e);else{let l=document.createTextNode(String(r??""));T(l),P(e,[l])}},"html.updateContent")},"updateContent");typeof t=="function"?_(e,()=>n(t())):n(t)}o(J,"setContent");var w=o((e,t,n)=>{t?(e.removeAttribute(t),t==="ref"?U(e,n):t[0]=="o"&&t[1]=="n"?V(e,t,n):t==="className"?e.setAttribute("class",n):t==="style"&&typeof n=="object"?_(e,()=>q(e,n)):typeof n=="function"?_(e,()=>S(e,t,n())):S(e,t,n)):J(e,n)},"render");function I(e,t,n){let r=Array.from(e.attributes);for(let l of r)l.value===g&&w(e,l.name,t[n++]);return n}o(I,"processAttributes");function K(e,t,n){if(e.nodeValue===g){let r=document.createComment("");e.replaceWith(r),w(r,null,t[n++])}else{let r=F(e.nodeValue.replaceAll(g,"<!>"));for(let l of Array.from(r.content.childNodes))l.nodeType===8&&w(l,null,t[n++]);e.replaceWith(r.content)}return n}o(K,"processTextNode");function F(e){let t=document.createElement("template");return t.innerHTML=e,t}o(F,"createTemplate");function v(e,t=null){return c(()=>{let n=F(e);return typeof t=="function"&&t(n),[...n.content.childNodes]},"html.templateToNodes",[])}o(v,"templateToNodes");function R(e){let t=[],n=document.createTreeWalker(e.content,5),r;for(;r=n.nextNode();)t.push(r);return t}o(R,"collectNodes");function M(e,...t){return c(()=>e.length===1?v(e[0]):t.length?v(e.join(g),n=>{let r=R(n),l=0;for(let u of r)u.nodeType===1&&u.attributes.length?l=I(u,t,l):u.nodeType===3&&u.nodeValue.includes(g)&&(l=K(u,t,l));return r}):v(e.join("")),"html.build",[])}o(M,"build");function ae(e,...t){return N.has(e)?M(N.get(e),...t):(N.set(e,e),M(e,...t))}o(ae,"html");var s=null,ue=o(e=>s=e,"createLifecycle"),b=o((e,t)=>{if(!s){y("lifecycle","Hook called outside component setup");return}s._lifecycles[e]||(s._lifecycles[e]=[]),s._lifecycles[e].push(t)},"addHook"),E=o(e=>{var t;if((t=s==null?void 0:s._lifecycles)!=null&&t[e])for(let n of s._lifecycles[e])queueMicrotask(()=>c(()=>n.call(s),"lifecycle.runHook"))},"runHook");o(e=>{let t=e();return typeof t=="function"?b("destroy",t):()=>{}},"onEffect");o(e=>b("beforeMount",e),"beforeMount");o(e=>b("mount",e),"onMount");o(e=>b("beforeUpdate",e),"beforeUpdate");o(e=>b("update",e),"onUpdate");o(e=>b("destroy",e),"onDestroy");var se=o(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml"),ce={true:!0,false:!1,null:null,undefined:void 0,nan:NaN,infinity:1/0,"-infinity":-1/0};function O(e){if(typeof e!="string")return e;let t=e.trim(),n=t.toLowerCase();return ce[n]??(/^[\d.]+$/.test(t)?parseFloat(t):t[0]==="{"||t[0]==="["?Q(t):t)}o(O,"parseValue");function Q(e){try{return JSON.parse(e)}catch{}}o(Q,"parseJson");var X=o(e=>e.startsWith("ref")||e.startsWith("on"),"shouldSkipAttribute"),fe=o(e=>{let t=e.attributes;for(let n=0;n<t.length;n++){let{name:r,value:l}=t[n];X(r)||(e.props[r]=L(O(se(l))))}},"initAttributes"),de=o(e=>{let t=new MutationObserver(n=>{for(let r of n){let l=r.attributeName;if(!l||X(l))continue;let u=e.props[l];u&&u(O(e.getAttribute(l)||""))}});t.observe(e,{attributes:!0}),e._cleanup.push(()=>t.disconnect())},"observeAttributes"),pe=o(e=>{c(()=>{fe(e),de(e)},"props.initPropsAndObserve")},"initPropsAndObserve");function Y(e){e&&(e.emit=(t,n)=>G(t,n,e))}o(Y,"initDispatch");var me=/^[a-z][a-z0-9-]*$/,be="open",he=o((e,{mode:t}={})=>{var n,r;return r=class extends HTMLElement{constructor(){super(),oe(this,n,this.attachShadow({mode:t||be})),C(this,"props",Object.create(null)),C(this,"_lifecycles",{beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]}),C(this,"_cleanup",[]),c(()=>{ue(this),Y(this),pe(this);let l=e==null?void 0:e.call(this,this.props);k(l||[],null,re(this,n)),E("beforeMount")},"component.init")}connectedCallback(){E("mount")}disconnectedCallback(){E("destroy");for(let l=this._cleanup.length-1;l>=0;l--)c(this._cleanup[l],"component.cleanup");this._cleanup.length=0}},n=new WeakMap,r},"BaseComponent"),ge=o((e,t,n={})=>{if(typeof customElements<"u"){if(!me.test(e))return y("component",`Invalid tag name: ${e}`,"error");if(customElements.get(e))return y("component",`${e} ya registrado`,"warn");customElements.define(e,he(t,n))}},"component");const ve=`.title {
  color: red;
}

.container {
  text-align: center;
  margin-top: 50px;
  border: 1px solid black;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  border-color: brown;
}

h2 {
  color: red;
}

h3 {
  color: red;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 20px;
}

input {
  color: green;
  font-size: 20px;
  border: 1px solid black;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  outline: none;
  width: auto;
}

button {
  color: rgb(120, 124, 120);
  font-size: 20px;
  border: 1px solid black;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  outline: none;
}`;export{ae as G,ve as c,L as d,ge as r,ye as w};
