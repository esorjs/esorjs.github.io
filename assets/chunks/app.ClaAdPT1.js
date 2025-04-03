var j=Object.defineProperty,z=e=>{throw TypeError(e)},I=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>j(e,"name",{value:t,configurable:!0}),A=(e,t,n)=>I(e,typeof t!="symbol"?t+"":t,n),J=(e,t,n)=>t.has(e)||z("Cannot "+n),K=(e,t,n)=>(J(e,t,"read from private field"),n?n.call(e):t.get(e)),Z=(e,t,n)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),m=null,Q=0,D=o(e=>{let t=e,n=new Set;return o(r=>{if(r===void 0)return m&&n.add(m),t;let l=typeof r=="function"?r(t):r;return Object.is(l,t)||(t=l,n.forEach(c=>c())),t},"getterSetter")},"signal"),_=o(e=>{let t=!1,n=o(()=>{if(t)return;t=!0;let r=m;m=n;try{e()}finally{m=r,t=!1}},"reactive");return n(),()=>subs.delete(n)},"effect"),se=o(e=>{let t=D();return _(()=>t(e())),()=>t()},"computed");o(e=>{let t=m;m={id:Q++};try{return e()}finally{m=t}},"batch");function B(e,t,n=null){let r=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n&&n.dispatchEvent(r),r}o(B,"emit");function R(e=null){let t=e;return n=>n!==void 0?t=n:t}o(R,"ref");function H(e){return e&&(e.__nodeGroups=!0),e}o(H,"markNode");function E(e){return k(e,H)}o(E,"markedFragment");function k(e,t=null,n=null){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let l of e)l&&(l=typeof t=="function"?t(l,r):l,Array.isArray(l)?r.appendChild(k(l,t)):r.appendChild(l));return n&&r.childNodes.length&&n.appendChild(r),r}o(k,"createFragment");function x(e,t,n="error"){let r=n==="warn"?console.warn:console.error,l=t instanceof Error?t:new Error(String(t));return r(`[Esor Framework Error] ${e}:`,l.message),l}o(x,"handleError");function f(e,t,n){try{return e()}catch(r){return x(t,r),n}}o(f,"tryCatch");function G(e,t){!e||!t||!t.parentNode||f(()=>{let n=t.parentNode,r=o(i=>{for(let a of i)!a||a.parentNode!==n||(a._cleanup&&typeof a._cleanup=="function"&&a._cleanup(),n.removeChild(a))},"removeNodes"),l=o((i,a)=>i.length!==a.length||i.some((b,h)=>!b.isEqualNode(a[h])),"nodesChanged"),c=t.__nodeGroups||[],u=new Map(c.map(i=>[i.key,i])),s=e.map((i,a)=>{var h;let b=Array.isArray(i)?i.filter(Boolean):[i];return{key:((h=b.find(y=>{var W;return((W=y==null?void 0:y.getAttribute)==null?void 0:W.call(y,"key"))!=null}))==null?void 0:h.getAttribute("key"))||`__key_${a}`,nodes:b}}),N=new Map(s.map(i=>[i.key,i]));for(let i of c)!N.has(i.key)&&r(i.nodes);let p=t;for(let i of s){let a=u.get(i.key);if(a)if(l(a.nodes,i.nodes))r(a.nodes),n.insertBefore(E(i.nodes),p.nextSibling);else{let b=p.nextSibling;if(a.nodes[0]!==b){let h=document.createDocumentFragment();for(let y of a.nodes)h.appendChild(y);n.insertBefore(h,b)}i.nodes=a.nodes}else n.insertBefore(E(i.nodes),p.nextSibling);p=i.nodes[i.nodes.length-1]||p}t.__nodeGroups=s},"list.reconcile")}o(G,"reconcile");var T=new WeakMap,v="\uFEFF\uFEFF";function C(e){let t=document.createElement("template");return t.innerHTML=e,t}o(C,"createTemplate");var S=o((e,t,n)=>{if(t)if(e.removeAttribute(t),t==="ref")typeof n=="function"?n(e):n&&(n.current=e);else if(t[0]=="o"&&t[1]=="n"&&typeof n=="function"){let r=t.slice(2).toLowerCase();e.addEventListener(r,n),e._cleanup=()=>e.removeEventListener(r,n)}else t==="style"&&typeof n=="object"?_(()=>Object.assign(e.style,n)):typeof n=="function"?_(()=>w(e,t,n())):w(e,t,n);else $(e,n)},"render");function w(e,t,n){t==="value"||t==="checked"?e[t]=n:n===!1||n===null?e.removeAttribute(t):e.setAttribute(t,n)}o(w,"setAttribute");function $(e,t){let n=o(r=>{f(()=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))G(r,e);else{let l=document.createTextNode(String(r??""));H(l),U(e,[l])}},"html.updateContent")},"updateContent");typeof t=="function"?_(()=>n(t())):n(t)}o($,"setContent");function U(e,t){let n=e.parentNode,r=e.nextSibling;for(;r&&r.__nodeGroups;)r._cleanup&&r._cleanup(),n.removeChild(r),r=e.nextSibling;t!=null&&t.length&&V(E(t),n,e.nextSibling)}o(U,"replaceNodes");function V(e,t,n=null){!e||!t||(n&&n.parentNode===t?t.insertBefore(e,n):t.appendChild(e))}o(V,"insertFragment");function q(e,t){let n=[],r=document.createTreeWalker(e.content,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);for(;r.nextNode();)n.push(r.currentNode);let l=0;for(let c=0;c<n.length;c++){let u=n[c];if(u.nodeType===Node.ELEMENT_NODE&&u.attributes.length)for(let s of Array.from(u.attributes))s.value===v&&S(u,s.name,t[l++]);else if(u.nodeType===Node.TEXT_NODE&&u.nodeValue.includes(v))if(u.nodeValue===v){let s=document.createComment("");u.parentNode.replaceChild(s,u),S(s,null,t[l++])}else{let s=C(u.nodeValue.replaceAll(v,"<!>")),N=Array.from(s.content.childNodes);for(let p=0;p<N.length;p++){let i=N[p];i.nodeType===Node.COMMENT_NODE&&S(i,null,t[l++])}u.parentNode.replaceChild(s.content,u)}}}o(q,"processTemplate");function F(e,t=null){return f(()=>{let n=C(e);return typeof t=="function"&&t(n),[...n.content.childNodes]},"html.templateToNodes",[])}o(F,"templateToNodes");function O(e,...t){return f(()=>{if(e.length===1)return F(e[0]);if(!t.length)return F(e.join(""));let n=e.join(v),r=C(n);return q(r,t),[...r.content.childNodes]},"html.build",[])}o(O,"build");function Y(e,...t){return T.has(e)?O(T.get(e),...t):(T.set(e,e),O(e,...t))}o(Y,"html");var d=null,ee=o(e=>d=e,"createLifecycle"),g=o((e,t)=>{if(!d){x("lifecycle","Hook called outside component setup");return}d._lifecycles[e]||(d._lifecycles[e]=[]),d._lifecycles[e].push(t)},"addHook"),M=o(e=>{var t;if((t=d==null?void 0:d._lifecycles)!=null&&t[e])for(let n of d._lifecycles[e])queueMicrotask(()=>f(()=>n.call(d),"lifecycle.runHook"))},"runHook");o(e=>{let t=e();return typeof t=="function"?g("destroy",t):()=>{}},"onEffect");o(e=>g("beforeMount",e),"beforeMount");o(e=>g("mount",e),"onMount");o(e=>g("beforeUpdate",e),"beforeUpdate");o(e=>g("update",e),"onUpdate");o(e=>g("destroy",e),"onDestroy");var te=o(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml"),ne=[[/(true|false)/,e=>e[0]==="true"],[/^[\d.]+$/,parseFloat],[/^[{[]/,JSON.parse]];function L(e){if(typeof e!="string")return e;let t=e.trim();for(let[n,r]of ne)if(n.test(t)){try{return r(t)}catch{}break}return t}o(L,"parseValue");var P=o(e=>e.startsWith("ref")||e.startsWith("on"),"shouldSkipAttribute"),re=o(e=>{let t=e.attributes;for(let n=0;n<t.length;n++){let{name:r,value:l}=t[n];P(r)||(e.props[r]=D(L(te(l))))}},"initAttributes"),oe=o(e=>{let t=new MutationObserver(n=>{for(let r of n){let l=r.attributeName;if(!l||P(l))continue;let c=e.props[l];c&&c(L(e.getAttribute(l)||""))}});t.observe(e,{attributes:!0}),e._cleanup.push(()=>t.disconnect())},"observeAttributes"),le=o(e=>{f(()=>{re(e),oe(e)},"props.initPropsAndObserve")},"initPropsAndObserve");function X(e){e&&(e.emit=(t,n)=>B(t,n,e))}o(X,"initDispatch");var ie=/^[a-z][a-z0-9-]*$/,ae="open",ue=o((e,{mode:t}={})=>{var n,r;return r=class extends HTMLElement{constructor(){super(),Z(this,n,this.attachShadow({mode:t||ae})),A(this,"props",Object.create(null)),A(this,"_lifecycles",{beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]}),A(this,"_cleanup",[]),f(()=>{ee(this),X(this),le(this);let l=e==null?void 0:e.call(this,this.props);k(l||[],null,K(this,n)),M("beforeMount")},"component.init")}connectedCallback(){M("mount")}disconnectedCallback(){M("destroy");for(let l=this._cleanup.length-1;l>=0;l--)f(this._cleanup[l],"component.cleanup");this._cleanup.length=0}},n=new WeakMap,r},"BaseComponent"),ce=o((e,t,n={})=>{if(typeof customElements<"u"){if(!ie.test(e))return x("component",`Invalid tag name: ${e}`,"error");if(customElements.get(e))return x("component",`${e} ya registrado`,"warn");customElements.define(e,ue(t,n))}},"component");const de=`.title {
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
`;export{Y as L,se as T,de as c,D as g,ce as o};
