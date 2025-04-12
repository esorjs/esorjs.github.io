var B=Object.defineProperty,D=e=>{throw TypeError(e)},R=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>B(e,"name",{value:t,configurable:!0}),C=(e,t,n)=>R(e,typeof t!="symbol"?t+"":t,n),G=(e,t,n)=>t.has(e)||D("Cannot "+n),H=(e,t,n)=>(G(e,t,"read from private field"),n?n.call(e):t.get(e)),L=(e,t,n)=>t.has(e)?D("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),z=(e,t,n,r)=>(G(e,t,"write to private field"),t.set(e,n),n),p=null,E=0,T=new Set,$=o(e=>{let t=e,n=[],r=o(l=>{if(l===void 0)return p&&!n.includes(p)&&(n.push(p),p.subs&&p.subs.add(r)),t;let a=typeof l=="function"?l(t):l;if(!Object.is(a,t))if(t=a,E>0)for(let s=0;s<n.length;s++)T.add(n[s]);else{let s=n.slice();for(let c=0;c<s.length;c++)s[c]()}return t},"getterSetter");return r.subs=n,r},"signal"),_=o(e=>{let t=new Set,n=!1,r=o(()=>{if(n)return;n=!0;let l=p;p=r;try{e()}finally{p=l,n=!1}},"reactive");return r.subs=t,r(),()=>{t.forEach(l=>{let a=l.subs.indexOf(r);a!==-1&&l.subs.splice(a,1)}),t.clear()}},"effect"),le=o(e=>{let t=$(e());return _(()=>t(e())),()=>t()},"computed");o(e=>{E++;try{return e()}finally{if(E--,E===0){let t=Array.from(T);T.clear(),t.forEach(n=>n())}}},"batch");function U(e,t,n=null){let r=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n&&n.dispatchEvent(r),r}o(U,"emit");function Q(e=null){let t=e;return n=>n!==void 0?t=n:t}o(Q,"ref");var Y=o(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml");function m(e,t=null){let n=document.createDocumentFragment();if(!(e!=null&&e.length))return n;let r=!1,l=null;t&&typeof t=="object"&&(r=!!t.mark,l=t.parent||null);for(let a of e)a&&(r&&a&&(a.__nodeGroups=!0),Array.isArray(a)?n.appendChild(m(a,t)):n.appendChild(a));return l&&n.childNodes.length&&l.appendChild(n),n}o(m,"createFragment");function V(e,t){if(!e||!t||!t.parentNode)return;let n=t.parentNode,r=o(i=>{for(let u of i)!u||u.parentNode!==n||(u._cleanup&&typeof u._cleanup=="function"&&u._cleanup(),n.removeChild(u))},"removeNodes"),l=o((i,u)=>i.length!==u.length||i.some((b,x)=>!b.isEqualNode(u[x])),"nodesChanged"),a=t.__nodeGroups||[],s=new Map(a.map(i=>[i.key,i])),c=e.map((i,u)=>{var x;let b=Array.isArray(i)?i.filter(Boolean):[i];return{key:((x=b.find(y=>{var F;return((F=y==null?void 0:y.getAttribute)==null?void 0:F.call(y,"key"))!=null}))==null?void 0:x.getAttribute("key"))||`__key_${u}`,nodes:b}}),v=new Map(c.map(i=>[i.key,i]));for(let i of a)!v.has(i.key)&&r(i.nodes);let d=t;for(let i of c){let u=s.get(i.key);if(u)if(l(u.nodes,i.nodes))r(u.nodes),n.insertBefore(m(i.nodes,{mark:!0}),d.nextSibling);else{let b=d.nextSibling;u.nodes[0]!==b&&n.insertBefore(m(u.nodes),b),i.nodes=u.nodes}else n.insertBefore(m(i.nodes,{mark:!0}),d.nextSibling);d=i.nodes[i.nodes.length-1]||d}t.__nodeGroups=c}o(V,"reconcile");var w=new WeakMap,g="\uFEFF",M=o((e,t,n)=>{if(t)if(e.removeAttribute(t),t==="ref")typeof n=="function"?n(e):n&&(n.current=e);else if(t[0]=="o"&&t[1]=="n"&&typeof n=="function"){let r=t.slice(2).toLowerCase();e.addEventListener(r,n),e._cleanup=()=>e.removeEventListener(r,n)}else t==="style"&&typeof n=="object"?_(()=>Object.assign(e.style,n)):typeof n=="function"?_(()=>A(e,t,n())):A(e,t,n);else P(e,n)},"render");function A(e,t,n){t==="value"||t==="checked"?e[t]=n:n===!1||n===null||n===void 0?e.removeAttribute(t):e.setAttribute(t,n)}o(A,"setAttribute");function q(e,t){let n=e.parentNode,r=e.nextSibling;for(;r&&r.__nodeGroups;)r._cleanup&&r._cleanup(),n.removeChild(r),r=e.nextSibling;t!=null&&t.length&&X(m(t,{mark:!0}),n,e.nextSibling)}o(q,"replaceNodes");function P(e,t){let n=o(r=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))V(r,e);else{let l=document.createTextNode(Y(typeof r=="string"?r:String(r??"")));q(e,[l])}},"updateContent");typeof t=="function"?_(()=>n(t())):n(t)}o(P,"setContent");function X(e,t,n=null){!e||!t||(n&&n.parentNode===t?t.insertBefore(e,n):t.appendChild(e))}o(X,"insertFragment");function k(e){let t=document.createElement("template");return t.innerHTML=e,t}o(k,"createTemplate");function I(e,t){let n=[],r=document.createTreeWalker(e.content,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);for(;r.nextNode();)n.push(r.currentNode);let l=0;for(let a=0;a<n.length;a++){let s=n[a];if(s.nodeType===Node.ELEMENT_NODE&&s.attributes.length)for(let c of Array.from(s.attributes))c.value===g&&M(s,c.name,t[l++]);else if(s.nodeType===Node.TEXT_NODE&&s.nodeValue.includes(g))if(s.nodeValue===g){let c=document.createComment("");s.parentNode.replaceChild(c,s),M(c,null,t[l++])}else{let c=k(s.nodeValue.replaceAll(g,"<!>")),v=Array.from(c.content.childNodes);for(let d=0;d<v.length;d++){let i=v[d];i.nodeType===Node.COMMENT_NODE&&M(i,null,t[l++])}s.parentNode.replaceChild(c.content,s)}}}o(I,"processTemplate");function O(e,t=null){let n=k(e);return typeof t=="function"&&t(n),[...n.content.childNodes]}o(O,"templateToNodes");function W(e,...t){if(e.length===1)return O(e[0]);if(!t.length)return O(e.join(""));let n=e.join(g),r=k(n);return I(r,t),[...r.content.childNodes]}o(W,"build");function Z(e,...t){return w.has(e)?W(w.get(e),...t):(w.set(e,e),W(e,...t))}o(Z,"html");function N(e,t,n="error"){let r=n==="warn"?console.warn:console.error,l=t instanceof Error?t:new Error(String(t));return r(`[Esor Error] ${e}:`,l.message),l}o(N,"handleError");var f=null,ee=o(e=>f=e,"createLifecycle"),h=o((e,t)=>{if(!f){N("lifecycle","Hook called outside component setup");return}f._lifecycles[e]||(f._lifecycles[e]=[]),f._lifecycles[e].push(t)},"addHook"),S=o(e=>{var t;if((t=f==null?void 0:f._lifecycles)!=null&&t[e])for(let n of f._lifecycles[e])queueMicrotask(()=>n.call(f),"lifecycle.runHook")},"runHook");o(e=>{let t=e();return typeof t=="function"?h("destroy",t):()=>{}},"onEffect");o(e=>h("beforeMount",e),"beforeMount");var ie=o(e=>h("mount",e),"onMount");o(e=>h("beforeUpdate",e),"beforeUpdate");o(e=>h("update",e),"onUpdate");o(e=>h("destroy",e),"onDestroy");var te=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/;function j(e){if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(te.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e}o(j,"parseAttributeValue");function J(e){for(let n of e.attributes){let{name:r,value:l}=n;r.startsWith("on")||r.startsWith("ref")||(e.props[r]=$(j(l)))}let t=new MutationObserver(n=>{for(let r of n){let l=r.attributeName;if(!l||l.startsWith("on")||l.startsWith("ref"))continue;let a=e.props[l];a&&a(j(e.getAttribute(l)))}});t.observe(e,{attributes:!0}),e._cleanup.push(()=>t.disconnect())}o(J,"initPropsAndObserve");function K(e){e&&(e.emit=(t,n)=>U(t,n,e))}o(K,"initDispatch");var ne=/^[a-z][a-z0-9-]*$/,re="open",oe=o((e,t={})=>{var n,r,l;return l=class extends HTMLElement{constructor(){super(),L(this,n,this.attachShadow({mode:t.mode||re})),L(this,r,!1),C(this,"props",Object.create(null)),C(this,"_lifecycles",{beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]}),C(this,"_cleanup",[]),ee(this),K(this),J(this);let a=e==null?void 0:e.call(this,this.props);m(a||[a],{parent:H(this,n)}),S("beforeMount")}connectedCallback(){H(this,r)||(z(this,r,!0),S("mount"))}disconnectedCallback(){S("destroy"),this._cleanup.forEach(a=>a()),this._cleanup=[],z(this,r,!1)}},n=new WeakMap,r=new WeakMap,l},"BaseComponent"),ae=o((e,t,n={})=>{if(!(typeof customElements>"u")){if(!ne.test(e))return N("component",`Invalid tag name: ${e}`,"error");if(customElements.get(e))return N("component",`${e} already registered`,"warn");customElements.define(e,oe(t,n))}},"component");const se=`.title {
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
`;export{ie as K,Z as L,le as O,Q as R,se as c,ae as n,$ as y};
