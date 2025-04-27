var T=Object.defineProperty,j=e=>{throw TypeError(e)},J=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>T(e,"name",{value:t,configurable:!0}),A=(e,t,n)=>J(e,typeof t!="symbol"?t+"":t,n),z=(e,t,n)=>t.has(e)||j("Cannot "+n),w=(e,t,n)=>(z(e,t,"read from private field"),n?n.call(e):t.get(e)),S=(e,t,n)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_=(e,t,n,r)=>(z(e,t,"write to private field"),t.set(e,n),n),f=null,y=0,N=new Set,H=a(e=>{let t=e,n=[],r=a(o=>{if(o===void 0)return f&&!n.includes(f)&&(n.push(f),f.subs&&f.subs.add(r)),t;let l=typeof o=="function"?o(t):o;if(!Object.is(l,t))if(t=l,y>0)for(let i=0;i<n.length;i++)N.add(n[i]);else{let i=n.slice();for(let d=0;d<i.length;d++)i[d]()}return t},"getterSetter");return r.subs=n,r},"signal"),x=a(e=>{let t=new Set,n=!1,r=a(()=>{if(n)return;n=!0;let o=f;f=r;try{e()}finally{f=o,n=!1}},"reactive");return r.subs=t,r(),()=>{t.forEach(o=>{let l=o.subs.indexOf(r);l!==-1&&o.subs.splice(l,1)}),t.clear()}},"effect"),ee=a(e=>{let t=H(e());return x(()=>t(e())),()=>t()},"computed");a(e=>{y++;try{return e()}finally{if(y--,y===0){let t=Array.from(N);N.clear(),t.forEach(n=>n())}}},"batch");function V(e,t,n=null){let r=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n==null||n.dispatchEvent(r),r}a(V,"emit");function K(e=null){let t=e;return n=>n!==void 0?t=n:t}a(K,"ref");var Q=a(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml");function p(e,{mark:t=!1,parent:n=null}={}){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let o of e)o&&(t&&(o._marker=!0),r.appendChild(Array.isArray(o)?p(o,{mark:t}):o));return n&&r.childNodes.length&&n.appendChild(r),r}a(p,"createFragment");function O(e){return Object.keys(e).reduce((t,n)=>e[n]?t+n+" ":t,"").trim()}a(O,"joinTruthy");function W(e,t){if(!(t!=null&&t.parentNode))return;let n=t.parentNode,r=t._marker||[];if(!(e!=null&&e.length)){for(let s of r)s.nodes.forEach(u=>{var c;return(c=u==null?void 0:u.parentNode)==null?void 0:c.removeChild(u)});t._marker=[];return}let o=new Map(r.map(s=>[s.key,s])),l=e.map((s,u)=>{var c;return s=Array.isArray(s)?s.filter(Boolean):[s],{key:((c=s.find(m=>{var E;return(E=m==null?void 0:m.getAttribute)==null?void 0:E.call(m,"key")}))==null?void 0:c.getAttribute("key"))||`__index_${u}`,nodes:s}}),i=new Map(l.map(s=>[s.key,s]));for(let s of r)i.has(s.key)||s.nodes.forEach(u=>{var c;return(c=u==null?void 0:u.parentNode)==null?void 0:c.removeChild(u)});let d=t;for(let s of l){let u=o.get(s.key);u?(C(u.nodes,s.nodes,n),u.nodes[0]!==d.nextSibling&&n.insertBefore(p(u.nodes),d.nextSibling),s.nodes=u.nodes):n.insertBefore(p(s.nodes,{mark:!0}),d.nextSibling),d=s.nodes[s.nodes.length-1]||d}t._marker=l}a(W,"reconcile");function C(e,t,n){var r;for(let o=0;o<Math.max(e.length,t.length);o++){let l=e[o],i=t[o];!l&&i?n.appendChild(i):l&&!i?((r=l._cleanup)==null||r.call(l),n.removeChild(l)):l&&i&&(l.nodeType!==i.nodeType||l.tagName!==i.tagName?n.replaceChild(i,l):l.nodeType===3?l.nodeValue!==i.nodeValue&&(l.nodeValue=i.nodeValue):l.nodeType===1&&(F(l,i),C([...l.childNodes],[...i.childNodes],l)))}}a(C,"patchNodes");function F(e,t){let n=new Set;for(let{name:r,value:o}of t.attributes)e.getAttribute(r)!==o&&e.setAttribute(r,o),n.add(r);for(let{name:r}of e.attributes)n.has(r)||e.removeAttribute(r)}a(F,"patchAttributes");var M=new WeakMap,b="\uFEFF",k=a((e,t,n)=>{if(t)if(e.removeAttribute(t),t==="ref")typeof n=="function"?n(e):n&&(n.current=e);else if(t[0]=="o"&&t[1]=="n"&&typeof n=="function"){let r=t.slice(2).toLowerCase();e.addEventListener(r,n),e._cleanup=()=>e.removeEventListener(r,n)}else x(t==="style"&&typeof n=="object"?()=>Object.assign(e.style,n):()=>L(e,t,typeof n=="function"?n():n));else U(e,n)},"render");function L(e,t,n){t==="value"||t==="checked"?e[t]=n:n===!1||n===null||n===void 0?e.removeAttribute(t):e.setAttribute(t,typeof n=="object"?O(n):n)}a(L,"setAttribute");function B(e,t){var o;let n=e.parentNode,r=e.nextSibling;for(;r&&r._marker;)(o=r._cleanup)==null||o.call(r),n.removeChild(r),r=e.nextSibling;t!=null&&t.length&&$(p(t,{mark:!0}),n,e.nextSibling)}a(B,"replaceNodes");function U(e,t){let n=a(r=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))W(r,e);else{let o=document.createTextNode(Q(typeof r=="string"?r:String(r??"")));B(e,[o])}},"updateContent");typeof t=="function"?x(()=>n(t())):n(t)}a(U,"setContent");function $(e,t,n=null){!e||!t||(n&&n.parentNode===t?t.insertBefore(e,n):t.appendChild(e))}a($,"insertFragment");function D(e,t){let n=[],r=document.createTreeWalker(e.content,5);for(;r.nextNode();)n.push(r.currentNode);let o=0;for(let l=0;l<n.length;l++){let i=n[l];if(i.nodeType===1&&i.attributes.length)for(let d of Array.from(i.attributes))d.value===b&&k(i,d.name,t[o++]);else if(i.nodeType===3&&i.nodeValue.includes(b))if(i.nodeValue===b){let d=document.createComment("");i.parentNode.replaceChild(d,i),k(d,null,t[o++])}else{let d=g(i.nodeValue.replaceAll(b,"<!>")),s=Array.from(d.content.childNodes);for(let u=0;u<s.length;u++){let c=s[u];c.nodeType===8&&k(c,null,t[o++])}i.parentNode.replaceChild(d.content,i)}}}a(D,"processTemplate");var g=a((e,t)=>{let n=document.createElement("template");return n.innerHTML=e,(t==null?void 0:t.as)==="nodes"?[...n.content.childNodes]:n},"createNodes"),te=a((e,...t)=>{let n=M.get(e)||(M.set(e,e),e);if(!t.length)return n.length===1?g(n[0],{as:"nodes"}):g(n.join(""),{as:"nodes"});let r=g(n.join(b));return D(r,t),[...r.content.childNodes]},"html");function G(e,t,n="error"){let r=n==="warn"?console.warn:console.error,o=t instanceof Error?t:new Error(String(t));return r(`[Esor Error] ${e}:`,o.message),o}a(G,"handleError");var v=null,R=a(e=>{v=e,e._lifecycles={beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]},e.runHook=t=>{var r;let n=(r=e._lifecycles)==null?void 0:r[t];if(!(!n||!n.length))for(let o=0;o<n.length;o++)queueMicrotask(()=>n[o].call(e))}},"createLifecycle"),h=a((e,t)=>{if(!v||!v._lifecycles){G("lifecycle",`Hook called outside ctx setup for "${e}"`);return}v._lifecycles[e].push(t)},"addHook");a(e=>h("beforeMount",e),"beforeMount");var ne=a(e=>h("mount",e),"onMount");a(e=>h("beforeUpdate",e),"beforeUpdate");a(e=>h("update",e),"onUpdate");a(e=>h("destroy",e),"onDestroy");a(e=>{let t=e();return typeof t=="function"&&h("destroy",t),()=>{}},"onEffect");var Z=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/;function q(e){if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(Z.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e}a(q,"parseAttributeValue");function P(e){for(let t of e.attributes){let{name:n,value:r}=t;n.startsWith("on")||n.startsWith("ref")||(e.props[n]=H(q(r)))}}a(P,"initializeProps");function I(e){e&&(e.emit=(t,n)=>V(t,n,e))}a(I,"initDispatch");var X=/^[a-z][a-z0-9]*-[a-z0-9-]*$/,Y=a((e,t={})=>{var n,r,o;return o=class extends HTMLElement{constructor(){super(),S(this,n,this.attachShadow({mode:t.shadowMode||"open"})),S(this,r,!1),A(this,"props",Object.create(null)),A(this,"_cleanup",[]),R(this),I(this),P(this);let l=e==null?void 0:e.call(this,this.props),i=typeof l=="function"?l():l;p(i||[i],{parent:w(this,n)}),this.runHook("beforeMount")}connectedCallback(){w(this,r)||(_(this,r,!0),this.runHook("mount"))}disconnectedCallback(){this.runHook("destroy"),this._cleanup.forEach(l=>l()),this._cleanup=[],_(this,r,!1)}},n=new WeakMap,r=new WeakMap,o},"BaseComponent"),re=a((e,t,n={})=>{typeof customElements<"u"&&X.test(e)&&!customElements.get(e)&&customElements.define(e,Y(t,n))},"component");const oe=`.title {
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
`;export{K as L,re as Q,ee as T,ne as W,oe as c,te as j,H as m};
