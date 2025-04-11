var G=Object.defineProperty,$=e=>{throw TypeError(e)},Y=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>G(e,"name",{value:t,configurable:!0}),w=(e,t,n)=>Y(e,typeof t!="symbol"?t+"":t,n),U=(e,t,n)=>t.has(e)||$("Cannot "+n),z=(e,t,n)=>(U(e,t,"read from private field"),n?n.call(e):t.get(e)),D=(e,t,n)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,r)=>(U(e,t,"write to private field"),t.set(e,n),n),p=null,x=0,A=new Set,V=o(e=>{let t=e,n=[],r=o(l=>{if(l===void 0)return p&&!n.includes(p)&&(n.push(p),p.subs&&p.subs.add(r)),t;let s=typeof l=="function"?l(t):l;if(!Object.is(s,t))if(t=s,x>0)for(let i=0;i<n.length;i++)A.add(n[i]);else{let i=n.slice();for(let c=0;c<i.length;c++)i[c]()}return t},"getterSetter");return r.subs=n,r},"signal"),N=o(e=>{let t=new Set,n=!1,r=o(()=>{if(n)return;n=!0;let l=p;p=r;try{e()}finally{p=l,n=!1}},"reactive");return r.subs=t,r(),()=>{t.forEach(l=>{let s=l.subs.indexOf(r);s!==-1&&l.subs.splice(s,1)}),t.clear()}},"effect"),ie=o(e=>{let t=V(e());return N(()=>t(e())),()=>t()},"computed");o(e=>{x++;try{return e()}finally{if(x--,x===0){let t=Array.from(A);A.clear(),t.forEach(n=>n())}}},"batch");function q(e,t,n=null){let r=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n&&n.dispatchEvent(r),r}o(q,"emit");function Z(e=null){let t=e;return n=>n!==void 0?t=n:t}o(Z,"ref");var ee=o(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml");function L(e){return e&&(e.__nodeGroups=!0),e}o(L,"markNode");function E(e){return k(e,L)}o(E,"markedFragment");function k(e,t=null,n=null){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let l of e)l&&(l=typeof t=="function"?t(l,r):l,Array.isArray(l)?r.appendChild(k(l,t)):r.appendChild(l));return n&&r.childNodes.length&&n.appendChild(r),r}o(k,"createFragment");function P(e,t){if(!e||!t||!t.parentNode)return;let n=t.parentNode,r=o(a=>{for(let u of a)!u||u.parentNode!==n||(u._cleanup&&typeof u._cleanup=="function"&&u._cleanup(),n.removeChild(u))},"removeNodes"),l=o((a,u)=>a.length!==u.length||a.some((h,m)=>!h.isEqualNode(u[m])),"nodesChanged"),s=t.__nodeGroups||[],i=new Map(s.map(a=>[a.key,a])),c=e.map((a,u)=>{var m;let h=Array.isArray(a)?a.filter(Boolean):[a];return{key:((m=h.find(b=>{var j;return((j=b==null?void 0:b.getAttribute)==null?void 0:j.call(b,"key"))!=null}))==null?void 0:m.getAttribute("key"))||`__key_${u}`,nodes:h}}),v=new Map(c.map(a=>[a.key,a]));for(let a of s)!v.has(a.key)&&r(a.nodes);let f=t;for(let a of c){let u=i.get(a.key);if(u)if(l(u.nodes,a.nodes))r(u.nodes),n.insertBefore(E(a.nodes),f.nextSibling);else{let h=f.nextSibling;if(u.nodes[0]!==h){let m=document.createDocumentFragment();for(let b of u.nodes)m.appendChild(b);n.insertBefore(m,h)}a.nodes=u.nodes}else n.insertBefore(E(a.nodes),f.nextSibling);f=a.nodes[a.nodes.length-1]||f}t.__nodeGroups=c}o(P,"reconcile");var M=new WeakMap,g="\uFEFF";function C(e){let t=document.createElement("template");return t.innerHTML=e,t}o(C,"createTemplate");var S=o((e,t,n)=>{if(t)if(e.removeAttribute(t),t==="ref")typeof n=="function"?n(e):n&&(n.current=e);else if(t[0]=="o"&&t[1]=="n"&&typeof n=="function"){let r=t.slice(2).toLowerCase();e.addEventListener(r,n),e._cleanup=()=>e.removeEventListener(r,n)}else t==="style"&&typeof n=="object"?N(()=>Object.assign(e.style,n)):typeof n=="function"?N(()=>O(e,t,n())):O(e,t,n);else X(e,n)},"render");function O(e,t,n){t==="value"||t==="checked"?e[t]=n:n===!1||n===null||n===void 0?e.removeAttribute(t):e.setAttribute(t,n)}o(O,"setAttribute");function X(e,t){let n=o(r=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))P(r,e);else{let l=document.createTextNode(ee(typeof r=="string"?r:String(r??"")));L(l),I(e,[l])}},"updateContent");typeof t=="function"?N(()=>n(t())):n(t)}o(X,"setContent");function I(e,t){let n=e.parentNode,r=e.nextSibling;for(;r&&r.__nodeGroups;)r._cleanup&&r._cleanup(),n.removeChild(r),r=e.nextSibling;t!=null&&t.length&&J(E(t),n,e.nextSibling)}o(I,"replaceNodes");function J(e,t,n=null){!e||!t||(n&&n.parentNode===t?t.insertBefore(e,n):t.appendChild(e))}o(J,"insertFragment");function K(e,t){let n=[],r=document.createTreeWalker(e.content,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);for(;r.nextNode();)n.push(r.currentNode);let l=0;for(let s=0;s<n.length;s++){let i=n[s];if(i.nodeType===Node.ELEMENT_NODE&&i.attributes.length)for(let c of Array.from(i.attributes))c.value===g&&S(i,c.name,t[l++]);else if(i.nodeType===Node.TEXT_NODE&&i.nodeValue.includes(g))if(i.nodeValue===g){let c=document.createComment("");i.parentNode.replaceChild(c,i),S(c,null,t[l++])}else{let c=C(i.nodeValue.replaceAll(g,"<!>")),v=Array.from(c.content.childNodes);for(let f=0;f<v.length;f++){let a=v[f];a.nodeType===Node.COMMENT_NODE&&S(a,null,t[l++])}i.parentNode.replaceChild(c.content,i)}}}o(K,"processTemplate");function W(e,t=null){let n=C(e);return typeof t=="function"&&t(n),[...n.content.childNodes]}o(W,"templateToNodes");function F(e,...t){if(e.length===1)return W(e[0]);if(!t.length)return W(e.join(""));let n=e.join(g),r=C(n);return K(r,t),[...r.content.childNodes]}o(F,"build");function te(e,...t){return M.has(e)?F(M.get(e),...t):(M.set(e,e),F(e,...t))}o(te,"html");function _(e,t,n="error"){let r=n==="warn"?console.warn:console.error,l=t instanceof Error?t:new Error(String(t));return r(`[Esor Error] ${e}:`,l.message),l}o(_,"handleError");var d=null,ne=o(e=>d=e,"createLifecycle"),y=o((e,t)=>{if(!d){_("lifecycle","Hook called outside component setup");return}d._lifecycles[e]||(d._lifecycles[e]=[]),d._lifecycles[e].push(t)},"addHook"),T=o(e=>{var t;if((t=d==null?void 0:d._lifecycles)!=null&&t[e])for(let n of d._lifecycles[e])queueMicrotask(()=>n.call(d),"lifecycle.runHook")},"runHook");o(e=>{let t=e();return typeof t=="function"?y("destroy",t):()=>{}},"onEffect");o(e=>y("beforeMount",e),"beforeMount");var se=o(e=>y("mount",e),"onMount");o(e=>y("beforeUpdate",e),"beforeUpdate");o(e=>y("update",e),"onUpdate");o(e=>y("destroy",e),"onDestroy");var re=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/;function H(e){if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(re.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e}o(H,"parseAttributeValue");function Q(e){for(let n of e.attributes){let{name:r,value:l}=n;r.startsWith("on")||r.startsWith("ref")||(e.props[r]=V(H(l)))}let t=new MutationObserver(n=>{for(let r of n){let l=r.attributeName;if(!l||l.startsWith("on")||l.startsWith("ref"))continue;let s=e.props[l];s&&s(H(e.getAttribute(l)))}});t.observe(e,{attributes:!0}),e._cleanup.push(()=>t.disconnect())}o(Q,"initPropsAndObserve");function R(e){e&&(e.emit=(t,n)=>q(t,n,e))}o(R,"initDispatch");var oe=/^[a-z][a-z0-9-]*$/,le="open",ae=o((e,t={})=>{var n,r,l;return l=class extends HTMLElement{constructor(){super(),D(this,n,this.attachShadow({mode:t.mode||le})),D(this,r,!1),w(this,"props",Object.create(null)),w(this,"_lifecycles",{beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]}),w(this,"_cleanup",[]),ne(this),R(this),Q(this);let s=e==null?void 0:e.call(this,this.props);k(s||[s],null,z(this,n)),T("beforeMount")}connectedCallback(){z(this,r)||(B(this,r,!0),T("mount"))}disconnectedCallback(){T("destroy"),this._cleanup.forEach(s=>s()),this._cleanup=[],B(this,r,!1)}},n=new WeakMap,r=new WeakMap,l},"BaseComponent"),ue=o((e,t,n={})=>{if(!(typeof customElements>"u")){if(!oe.test(e))return _("component",`Invalid tag name: ${e}`,"error");if(customElements.get(e))return _("component",`${e} already registered`,"warn");customElements.define(e,ae(t,n))}},"component");const ce=`.title {
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
`;export{ie as D,se as K,te as U,Z as X,V as b,ce as c,ue as s};
