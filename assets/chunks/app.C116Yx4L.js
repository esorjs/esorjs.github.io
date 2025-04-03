var z=Object.defineProperty,H=e=>{throw TypeError(e)},ne=(e,n,t)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,o=(e,n)=>z(e,"name",{value:n,configurable:!0}),C=(e,n,t)=>ne(e,typeof n!="symbol"?n+"":n,t),te=(e,n,t)=>n.has(e)||H("Cannot "+t),re=(e,n,t)=>(te(e,n,"read from private field"),t?t.call(e):n.get(e)),oe=(e,n,t)=>n.has(e)?H("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),f=null,le=0,W=[],L=o(e=>{let n=e,t=new Set;return o(r=>{if(r===void 0)return f&&t.add(f),n;let l=typeof r=="function"?r(n):r;if(!Object.is(l,n)){n=l;for(let u of t)u()}return n},"getterSetter")},"signal"),B=o(e=>{let n=!1,t=o(()=>{if(n)return;n=!0;let r=f;f=t;try{e()}finally{f=r,n=!1}},"reactive");return t(),()=>W.splice(W.indexOf(t),1)},"effect"),ye=o(e=>{let n=L();return B(()=>n(e())),()=>n()},"computed");o(e=>{let n=f;f={id:le++};try{return e()}finally{f=n}},"batch");function G(e,n,t=null){let r=new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0});return t&&t.dispatchEvent(r),r}o(G,"emit");function ie(e=null){let n=e;return t=>t!==void 0?n=t:n}o(ie,"ref");function T(e){return e&&(e.__nodeGroups=!0),e}o(T,"markNode");function x(e){return k(e,T)}o(x,"markedFragment");function k(e,n=null,t=null){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let l of e)l&&(l=typeof n=="function"?n(l,r):l,Array.isArray(l)?r.appendChild(k(l,n)):r.appendChild(l));return t&&r.childNodes.length&&t.appendChild(r),r}o(k,"createFragment");function y(e,n,t="error"){let r=t==="warn"?console.warn:console.error,l=n instanceof Error?n:new Error(String(n));return r(`[Esor Framework Error] ${e}:`,l.message),l}o(y,"handleError");function c(e,n,t){try{return e()}catch(r){return y(n,r),t}}o(c,"tryCatch");function $(e,n){!e||!n||!n.parentNode||c(()=>{let t=n.parentNode,r=o(i=>{for(let a of i)!a||a.parentNode!==t||(a._cleanup&&typeof a._cleanup=="function"&&a._cleanup(),t.removeChild(a))},"removeNodes"),l=o((i,a)=>i.length!==a.length||i.some((d,p)=>!d.isEqualNode(a[p])),"nodesChanged"),u=n.__nodeGroups||[],Z=new Map(u.map(i=>[i.key,i])),A=e.map((i,a)=>{var p;let d=Array.isArray(i)?i.filter(Boolean):[i];return{key:((p=d.find(m=>{var j;return((j=m==null?void 0:m.getAttribute)==null?void 0:j.call(m,"key"))!=null}))==null?void 0:p.getAttribute("key"))||`__key_${a}`,nodes:d}}),ee=new Map(A.map(i=>[i.key,i]));for(let i of u)!ee.has(i.key)&&r(i.nodes);let h=n;for(let i of A){let a=Z.get(i.key);if(a)if(l(a.nodes,i.nodes))r(a.nodes),t.insertBefore(x(i.nodes),h.nextSibling);else{let d=h.nextSibling;if(a.nodes[0]!==d){let p=document.createDocumentFragment();for(let m of a.nodes)p.appendChild(m);t.insertBefore(p,d)}i.nodes=a.nodes}else t.insertBefore(x(i.nodes),h.nextSibling);h=i.nodes[i.nodes.length-1]||h}n.__nodeGroups=A},"list.reconcile")}o($,"reconcile");var N=new WeakMap,g="\uFEFF\uFEFF";function D(e,n,t=null){!e||!n||(t&&t.parentNode===n?n.insertBefore(e,t):n.appendChild(e))}o(D,"insertFragment");function U(e,n){typeof n=="function"?n(e):n&&typeof n=="object"&&"current"in n?n.current=e:n!=null&&(n=e)}o(U,"setRef");function V(e,n,t){let r=n.slice(2).toLowerCase();e.addEventListener(r,t),e._cleanup=()=>e.removeEventListener(r,t)}o(V,"setEvent");function q(e,n){Object.assign(e.style,n)}o(q,"setStyle");function S(e,n,t){n==="value"||n==="checked"?e[n]=t:t===!1||t===null||t===void 0?e.removeAttribute(n):e.setAttribute(n,t)}o(S,"setAttribute");function _(e,n){if(!e||typeof n!="function")return;let t=e._cleanup;t&&t();let r=B(n);return e._cleanup=r,r}o(_,"setEffect");function P(e,n){let t=e.parentNode,r=e.nextSibling;for(;r&&r.__nodeGroups;)r._cleanup&&r._cleanup(),t.removeChild(r),r=e.nextSibling;n!=null&&n.length&&D(x(n),t,e.nextSibling)}o(P,"replaceNodes");function J(e,n){let t=o(r=>{c(()=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))$(r,e);else{let l=document.createTextNode(String(r??""));T(l),P(e,[l])}},"html.updateContent")},"updateContent");typeof n=="function"?_(e,()=>t(n())):t(n)}o(J,"setContent");var w=o((e,n,t)=>{n?(e.removeAttribute(n),n==="ref"?U(e,t):n[0]=="o"&&n[1]=="n"?V(e,n,t):n==="className"?e.setAttribute("class",t):n==="style"&&typeof t=="object"?_(e,()=>q(e,t)):typeof t=="function"?_(e,()=>S(e,n,t())):S(e,n,t)):J(e,t)},"render");function I(e,n,t){let r=Array.from(e.attributes);for(let l of r)l.value===g&&w(e,l.name,n[t++]);return t}o(I,"processAttributes");function K(e,n,t){if(e.nodeValue===g){let r=document.createComment("");e.replaceWith(r),w(r,null,n[t++])}else{let r=F(e.nodeValue.replaceAll(g,"<!>"));for(let l of Array.from(r.content.childNodes))l.nodeType===8&&w(l,null,n[t++]);e.replaceWith(r.content)}return t}o(K,"processTextNode");function F(e){let n=document.createElement("template");return n.innerHTML=e,n}o(F,"createTemplate");function v(e,n=null){return c(()=>{let t=F(e);return typeof n=="function"&&n(t),[...t.content.childNodes]},"html.templateToNodes",[])}o(v,"templateToNodes");function R(e){let n=[],t=document.createTreeWalker(e.content,5),r;for(;r=t.nextNode();)n.push(r);return n}o(R,"collectNodes");function M(e,...n){return c(()=>e.length===1?v(e[0]):n.length?v(e.join(g),t=>{let r=R(t),l=0;for(let u of r)u.nodeType===1&&u.attributes.length?l=I(u,n,l):u.nodeType===3&&u.nodeValue.includes(g)&&(l=K(u,n,l));return r}):v(e.join("")),"html.build",[])}o(M,"build");function ae(e,...n){return N.has(e)?M(N.get(e),...n):(N.set(e,e),M(e,...n))}o(ae,"html");var s=null,ue=o(e=>s=e,"createLifecycle"),b=o((e,n)=>{if(!s){y("lifecycle","Hook called outside component setup");return}s._lifecycles[e]||(s._lifecycles[e]=[]),s._lifecycles[e].push(n)},"addHook"),E=o(e=>{var n;if((n=s==null?void 0:s._lifecycles)!=null&&n[e])for(let t of s._lifecycles[e])queueMicrotask(()=>c(()=>t.call(s),"lifecycle.runHook"))},"runHook");o(e=>{let n=e();return typeof n=="function"?b("destroy",n):()=>{}},"onEffect");o(e=>b("beforeMount",e),"beforeMount");o(e=>b("mount",e),"onMount");o(e=>b("beforeUpdate",e),"beforeUpdate");o(e=>b("update",e),"onUpdate");o(e=>b("destroy",e),"onDestroy");var se=o(e=>e==null?"":String(e).replace(/[&<>'"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[n]),"sanitizeHtml"),ce={true:!0,false:!1,null:null,undefined:void 0,nan:NaN,infinity:1/0,"-infinity":-1/0};function O(e){if(typeof e!="string")return e;let n=e.trim(),t=n.toLowerCase();return ce[t]??(/^[\d.]+$/.test(n)?parseFloat(n):n[0]==="{"||n[0]==="["?Q(n):n)}o(O,"parseValue");function Q(e){try{return JSON.parse(e)}catch{}}o(Q,"parseJson");var X=o(e=>e.startsWith("ref")||e.startsWith("on"),"shouldSkipAttribute"),fe=o(e=>{let n=e.attributes;for(let t=0;t<n.length;t++){let{name:r,value:l}=n[t];X(r)||(e.props[r]=L(O(se(l))))}},"initAttributes"),de=o(e=>{let n=new MutationObserver(t=>{for(let r of t){let l=r.attributeName;if(!l||X(l))continue;let u=e.props[l];u&&u(O(e.getAttribute(l)||""))}});n.observe(e,{attributes:!0}),e._cleanup.push(()=>n.disconnect())},"observeAttributes"),pe=o(e=>{c(()=>{fe(e),de(e)},"props.initPropsAndObserve")},"initPropsAndObserve");function Y(e){e&&(e.emit=(n,t)=>G(n,t,e))}o(Y,"initDispatch");var me=/^[a-z][a-z0-9-]*$/,be="open",he=o((e,{mode:n}={})=>{var t,r;return r=class extends HTMLElement{constructor(){super(),oe(this,t,this.attachShadow({mode:n||be})),C(this,"props",Object.create(null)),C(this,"_lifecycles",{beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]}),C(this,"_cleanup",[]),c(()=>{ue(this),Y(this),pe(this);let l=e==null?void 0:e.call(this,this.props);k(l||[],null,re(this,t)),E("beforeMount")},"component.init")}connectedCallback(){E("mount")}disconnectedCallback(){E("destroy");for(let l=this._cleanup.length-1;l>=0;l--)c(this._cleanup[l],"component.cleanup");this._cleanup.length=0}},t=new WeakMap,r},"BaseComponent"),ge=o((e,n,t={})=>{if(typeof customElements<"u"){if(!me.test(e))return y("component",`Invalid tag name: ${e}`,"error");if(customElements.get(e))return y("component",`${e} ya registrado`,"warn");customElements.define(e,he(n,t))}},"component");const ve=`.title {
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
  border-color: rgb(198, 9, 9);
  cursor: pointer;
  outline: none;
  &:hover {
    color: rgb(0, 0, 0);
  }
}
`;export{ae as G,ve as c,L as d,ge as r,ye as w};
