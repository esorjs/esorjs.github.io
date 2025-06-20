var T=Object.defineProperty,A=e=>{throw TypeError(e)},j=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>T(e,"name",{value:t,configurable:!0}),k=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n),w=(e,t,n)=>t.has(e)||A("Cannot "+n),N=(e,t,n)=>(w(e,t,"read from private field"),n?n.call(e):t.get(e)),C=(e,t,n)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),z=(e,t,n)=>(w(e,t,"access private method"),n),b=null,y=0,L=s(e=>{let t=e,n=new Set;return(...a)=>{if(a.length===0)return b&&n.add(b),t;let c=a[0];if(t!==c&&(t=c,y===0))for(let i of n)i();return t}},"signal"),h=s(e=>{let t=s(()=>{b=t,e(),b=null},"execute");return t(),t},"effect"),U=s(e=>{let t=L(void 0);return h(()=>t(e())),t},"computed");s(e=>{y++;let t=e();return--y,t},"batch");function M(e,t){var c;let n=new Map;for(let i of e.children)i._key!==void 0&&n.set(i._key,i);let a=[];for(let i of t){let o=i._key,r=n.get(o),l=document.createElement("div");E(l,i);let u=l.firstElementChild;r&&u?(x(r,u),a.push(r),n.delete(o)):u&&(u._key=o,a.push(u))}for(let i of n.values())(c=i._cleanup)==null||c.call(i),e.removeChild(i);for(let i=0;i<a.length;i++){let o=a[i],r=e.children[i];r!==o&&e.insertBefore(o,r||null)}}s(M,"reconcileArray");function x(e,t){var n;if(e.nodeType===Node.ELEMENT_NODE&&t.nodeType===Node.ELEMENT_NODE){if(e.tagName!==t.tagName){e.replaceWith(t.cloneNode(!0));return}let a=new Map;for(let{name:r,value:l}of e.attributes)a.set(r,l);for(let{name:r,value:l}of t.attributes)r==="value"||r==="checked"?e[r]!==l&&(e[r]=l):e.getAttribute(r)!==l&&e.setAttribute(r,l),a.delete(r);for(let r of a.keys())e.removeAttribute(r);let c=Array.from(e.childNodes),i=Array.from(t.childNodes),o=Math.max(c.length,i.length);for(let r=0;r<o;r++){let l=c[r],u=i[r];l?u?x(l,u):((n=l._cleanup)==null||n.call(l),e.removeChild(l)):e.appendChild(u.cloneNode(!0))}}else e.nodeType===Node.TEXT_NODE&&t.nodeType===Node.TEXT_NODE?e.textContent!==t.textContent&&(e.textContent=t.textContent):e.replaceWith(t.cloneNode(!0))}s(x,"patchNode");var m="\uFEFF",_=new WeakMap,X=s((e,...t)=>{let n=_.get(e);if(!n){let r=document.createElement("template");r.innerHTML=e.join(m);let l=e.findIndex(u=>u.trim().endsWith("key="));n={template:r,keyAttrIndex:l},_.set(e,n)}let{template:a,keyAttrIndex:c}=n,i,o=[...t];return c!==-1&&(i=t[c],o.splice(c,1)),{template:a,values:o,_isTemplate:!0,_key:i}},"html"),g=s((e,t)=>{var n;if(Array.isArray(t)&&t.length>0&&((n=t[0])==null?void 0:n._key)!==void 0){M(e,t);return}for(;e.firstChild;)e.removeChild(e.firstChild);t==null||t===!1||(t._isTemplate?E(e,t):Array.isArray(t)?t.forEach(a=>{let c=document.createDocumentFragment();g(c,a),e.appendChild(c)}):t instanceof Node?e.appendChild(t):e.appendChild(document.createTextNode(String(t))))},"renderValue"),E=s((e,{template:t,values:n})=>{let a=t.content.cloneNode(!0),c=0,i=s(o=>{if(o.nodeType===Node.TEXT_NODE&&o.nodeValue.includes(m)){let r=o.nodeValue.split(m),l=document.createDocumentFragment();for(let u=0;u<r.length;u++){if(u>0){let d=n[c++];if(typeof d=="function"){let p=document.createElement("span");l.appendChild(p),h(()=>g(p,d()))}else g(l,d)}r[u]&&l.appendChild(document.createTextNode(r[u]))}o.parentNode.replaceChild(l,o)}else o.nodeType===Node.ELEMENT_NODE&&([...o.attributes].filter(r=>r.name!=="key"&&r.value===m).forEach(r=>{var u;let l=n[c++];if(o.removeAttribute(r.name),r.name==="ref")typeof l=="function"?l(o):l.current=o;else if(r.name==="style"&&typeof l=="object"&&l!==null)typeof l=="function"?h(()=>Object.assign(o.style,l())):Object.assign(o.style,l);else if(typeof l=="function"&&((u=o.tagName)!=null&&u.includes("-")))o._functionProps||(o._functionProps={}),o._functionProps[r.name]=l;else if(r.name.startsWith("on")){let d=r.name.slice(2).toLowerCase();typeof l=="function"&&(o.addEventListener(d,l),o._cleanup=()=>o.removeEventListener(d,l))}else{let d=s(p=>{["value","checked","selected"].includes(r.name)?o[r.name]=p:p==null||p===!1?o.removeAttribute(r.name):o.setAttribute(r.name,p===!0?"":p)},"setAttribute");typeof l=="function"?h(()=>d(l())):d(l)}}),o.hasAttribute("key")&&o.removeAttribute("key"),[...o.childNodes].forEach(i))},"processNode");[...a.childNodes].forEach(i),e.appendChild(a)},"renderTemplate"),f=null,O=["beforeMount","mount","beforeUpdate","update","destroy"],D=s(e=>{f=e,e._lifecycles=Object.fromEntries(O.map(t=>[t,[]])),e.runHook=t=>{var a;let n=(a=e._lifecycles)==null?void 0:a[t];n!=null&&n.length&&n.forEach(c=>queueMicrotask(()=>c.call(e)))}},"createLifecycle"),S=s((e,t)=>{if(!(f!=null&&f._lifecycles))throw new Error(`[Esor] Hook called outside ctx setup for "${e}"`);f._lifecycles[e].push(t)},"addHook"),W={};O.forEach(e=>{let t=e.startsWith("before")?e:`on${e[0].toUpperCase()}${e.slice(1)}`;W[t]=n=>S(e,n)});s(e=>{let t=e();return typeof t=="function"&&S("destroy",t),()=>{}},"onEffect");s(()=>(!f&&console.warn("getCurrentContext called outside of component lifecycle"),f),"getCurrentContext");var{onMount:q}=W,H=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/,P=s(e=>{if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(H.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e},"parseAttributeValue"),F=s(e=>{var t;e._functionProps&&Object.assign(e.props,e._functionProps);for(let{name:n,value:a}of e.attributes)n.startsWith("on")||n.startsWith("ref")||a==="function"&&((t=e._functionProps)!=null&&t[n])||(e.props[n]=P(a))},"initializeProps"),v=s(()=>v.cache||(v.cache=[...document.querySelectorAll("head style, head link[rel=stylesheet]")]),"s"),V=/^[a-z][a-z0-9]*-[a-z0-9-]*$/,$=s((e,t={})=>{var n,a,c,i;return i=class extends HTMLElement{constructor(){super(),C(this,a),C(this,n,this.attachShadow({mode:t.shadowMode||"open"})),k(this,"props",Object.create(null)),k(this,"_cleanup",[]),z(this,a,c).call(this),this.runHook("beforeMount")}connectedCallback(){this.runHook("mount")}disconnectedCallback(){this._cleanup.forEach(o=>o()),this._cleanup=[],this.runHook("destroy")}},n=new WeakMap,a=new WeakSet,c=s(function(){D(this),F(this),t.gobalStyles&&v().forEach(r=>N(this,n).appendChild(r.cloneNode(!0)));let o=e==null?void 0:e.call(this,this.props);E(N(this,n),o)},"#initializeComponent"),i},"BaseComponent"),B=s((e,t,n={})=>{typeof customElements<"u"&&V.test(e)&&!customElements.get(e)&&customElements.define(e,$(t,n))},"component");function I(e=null){let t=e;return(...n)=>n.length===0?t:t=n[0]}s(I,"ref");function G(e,t,n=null){let a=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n==null||n.dispatchEvent(a),a}s(G,"emit");const J=`.title {
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
  color: rgb(16, 172, 71);
  font-size: 20px;
  border: 1px solid black;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  outline: none;
  width: auto;
}

button {
  color: rgb(115, 41, 41);
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

.search-container {
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.search-container input {
  width: 300px;
}

.search-results {
  margin-top: 10px;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
}

.result-item {
  padding: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #a62e2e;
  }

  color: rosybrown;
}
`;export{L as A,U as D,q as G,B as Z,J as c,I as e,X as j};
