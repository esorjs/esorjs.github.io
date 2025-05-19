var T=Object.defineProperty,j=e=>{throw TypeError(e)},X=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t)=>T(e,"name",{value:t,configurable:!0}),S=(e,t,n)=>X(e,typeof t!="symbol"?t+"":t,n),N=(e,t,n)=>t.has(e)||j("Cannot "+n),_=(e,t,n)=>(N(e,t,"read from private field"),n?n.call(e):t.get(e)),v=(e,t,n)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Y=(e,t,n,r)=>(N(e,t,"write to private field"),t.set(e,n),n),x=(e,t,n)=>(N(e,t,"access private method"),n);function z(e,t,n="error"){let r=n==="warn"?console.warn:console.error,o=t instanceof Error?t:new Error(String(t));return r(`[Esor Error] ${e}:`,o.message),o}i(z,"handleError");var b=null,H=["beforeMount","mount","beforeUpdate","update","destroy"],Q=i(e=>{b=e,e._lifecycles=Object.fromEntries(H.map(t=>[t,[]])),e.runHook=t=>{var r;let n=(r=e._lifecycles)==null?void 0:r[t];if(n!=null&&n.length)for(let o=0;o<n.length;o++)queueMicrotask(()=>n[o].call(e))}},"createLifecycle"),W=i((e,t)=>{if(!b||!b._lifecycles){z("lifecycle",`Hook called outside ctx setup for "${e}"`);return}b._lifecycles[e].push(t)},"addHook"),O={};H.forEach(e=>{let t=e.startsWith("before")?e:`on${e.charAt(0).toUpperCase()+e.slice(1)}`;O[t]=n=>W(e,n)});var{onMount:re}=O;i(e=>{let t=e();return typeof t=="function"&&W("destroy",t),()=>{}},"onEffect");var f=null,E=0,C=new Set,V=i(e=>{let t=e,n=[],r=i(o=>{var s;if(o===void 0)return f&&!n.includes(f)&&(n.push(f),(s=f.subs)==null||s.add(r)),t;let l=typeof o=="function"?o(t):o;return Object.is(l,t)||(t=l,E>0?n.forEach(c=>C.add(c)):n.slice().forEach(c=>c())),t},"getterSetter");return r.subs=n,r},"signal"),g=i(e=>{let t=new Set,n=!1,r=i(()=>{if(n)return;n=!0;let o=f;f=r;try{e()}finally{f=o,n=!1}},"reactive");return r.subs=t,r(),()=>{t.forEach(o=>{let l=o.subs.indexOf(r);l>-1&&o.subs.splice(l,1)}),t.clear()}},"effect"),oe=i(e=>{let t=V(e());return g(()=>t(e())),()=>t()},"computed");i(e=>{E++;try{return e()}finally{if(--E===0){let t=Array.from(C);C.clear();for(let n=0;n<t.length;n++)t[n]()}}},"batch");var Z=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/;function F(e){if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(Z.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e}i(F,"parseAttributeValue");function L(e){for(let t of e.attributes){let{name:n,value:r}=t;n.startsWith("on")||n.startsWith("ref")||(e.props[n]=V(F(r)))}}i(L,"initializeProps");function $(e,t,n=null){let r=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n==null||n.dispatchEvent(r),r}i($,"emit");function B(e){e&&(e.emit=(t,n)=>$(t,n,e))}i(B,"initDispatch");function p(e,{mark:t=!1,parent:n=null}={}){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let o of e)o&&(t&&(o._marker=!0),r.appendChild(Array.isArray(o)?p(o,{mark:t}):o));return n&&r.childNodes.length&&n.appendChild(r),r}i(p,"createFragment");function q(e){return Object.keys(e).reduce((t,n)=>e[n]?t+n+" ":t,"").trim()}i(q,"joinTruthy");var I=/^[a-z][a-z0-9]*-[a-z0-9-]*$/,ee=i((e,t={})=>{var n,r,o,l,s,c;return c=class extends HTMLElement{constructor(){super(),v(this,o),v(this,n,this.attachShadow({mode:t.shadowMode||"open"})),v(this,r,!1),S(this,"props",Object.create(null)),S(this,"_cleanup",[]),x(this,o,l).call(this),this.runHook("beforeMount")}connectedCallback(){x(this,o,s).call(this,!0)&&this.runHook("mount")}disconnectedCallback(){this.runHook("destroy"),this._cleanup.forEach(a=>a()),this._cleanup=[],x(this,o,s).call(this,!1)}},n=new WeakMap,r=new WeakMap,o=new WeakSet,l=i(function(){Q(this),B(this),L(this);let a=e==null?void 0:e.call(this,this.props),u=typeof a=="function"?a():a;p(u||[u],{parent:_(this,n)})},"#initializeComponent"),s=i(function(a){return _(this,r)===a?!1:(Y(this,r,a),!0)},"#setMounted"),c},"BaseComponent"),le=i((e,t,n={})=>{typeof customElements<"u"&&I.test(e)&&!customElements.get(e)&&customElements.define(e,ee(t,n))},"component"),te=i(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml");function D(e,t){if(!(t!=null&&t.parentNode))return;let n=t.parentNode,r=t._marker||[];if(!(e!=null&&e.length)){for(let a of r)a.nodes.forEach(u=>{var d;return(d=u==null?void 0:u.parentNode)==null?void 0:d.removeChild(u)});t._marker=[];return}let o=new Map(r.map(a=>[a.key,a])),l=e.map((a,u)=>{var d;return a=Array.isArray(a)?a.filter(Boolean):[a],{key:((d=a.find(h=>{var A;return(A=h==null?void 0:h.getAttribute)==null?void 0:A.call(h,"key")}))==null?void 0:d.getAttribute("key"))||`__index_${u}`,nodes:a}}),s=new Map(l.map(a=>[a.key,a]));for(let a of r)s.has(a.key)||a.nodes.forEach(u=>{var d;return(d=u==null?void 0:u.parentNode)==null?void 0:d.removeChild(u)});let c=t;for(let a of l){let u=o.get(a.key);u?(w(u.nodes,a.nodes,n),u.nodes[0]!==c.nextSibling&&n.insertBefore(p(u.nodes),c.nextSibling),a.nodes=u.nodes):n.insertBefore(p(a.nodes,{mark:!0}),c.nextSibling),c=a.nodes[a.nodes.length-1]||c}t._marker=l}i(D,"reconcile");function w(e,t,n){var r;for(let o=0;o<Math.max(e.length,t.length);o++){let l=e[o],s=t[o];!l&&s?n.appendChild(s):l&&!s?((r=l._cleanup)==null||r.call(l),n.removeChild(l)):l&&s&&(l.nodeType!==s.nodeType||l.tagName!==s.tagName?n.replaceChild(s,l):l.nodeType===3?l.nodeValue!==s.nodeValue&&(l.nodeValue=s.nodeValue):l.nodeType===1&&(P(l,s),w([...l.childNodes],[...s.childNodes],l)))}}i(w,"patchNodes");function P(e,t){let n={},r=new Set;for(let{name:o,value:l}of e.attributes)n[o]=l;for(let{name:o,value:l}of t.attributes)n[o]!==l&&e.setAttribute(o,l),r.add(o);for(let o in n)r.has(o)||e.removeAttribute(o)}i(P,"patchAttributes");var M=new WeakMap,m="\uFEFF",k=i((e,t,n)=>{if(t)if(e.removeAttribute(t),t==="ref")typeof n=="function"?n(e):n&&(n.current=e);else if(t[0]=="o"&&t[1]=="n"&&typeof n=="function"){let r=t.slice(2).toLowerCase();e.addEventListener(r,n),e._cleanup=()=>e.removeEventListener(r,n)}else g(t==="style"&&typeof n=="object"?()=>Object.assign(e.style,n):()=>U(e,t,typeof n=="function"?n():n));else J(e,n)},"render");function U(e,t,n){t==="value"||t==="checked"?e[t]=n:n===!1||n===null||n===void 0?e.removeAttribute(t):e.setAttribute(t,typeof n=="object"?q(n):n)}i(U,"setAttribute");function G(e,t){var o;let n=e.parentNode,r=e.nextSibling;for(;r&&r._marker;)(o=r._cleanup)==null||o.call(r),n.removeChild(r),r=e.nextSibling;t!=null&&t.length&&K(p(t,{mark:!0}),n,e.nextSibling)}i(G,"replaceNodes");function J(e,t){let n=i(r=>{if((r===!0||r===!1)&&(r=""),Array.isArray(r))D(r,e);else{let o=r==null?"":String(r),l=document.createTextNode(te(o));G(e,[l])}},"updateContent");typeof t=="function"?g(()=>n(t())):n(t)}i(J,"setContent");function K(e,t,n=null){!e||!t||(n&&n.parentNode===t?t.insertBefore(e,n):t.appendChild(e))}i(K,"insertFragment");function R(e,t){let n=[],r=document.createTreeWalker(e.content,5);for(;r.nextNode();)n.push(r.currentNode);let o=0;for(let l=0;l<n.length;l++){let s=n[l];if(s.nodeType===1&&s.attributes.length)for(let c of Array.from(s.attributes))c.value===m&&k(s,c.name,t[o++]);else if(s.nodeType===3&&s.nodeValue.includes(m))if(s.nodeValue===m){let c=document.createComment("");s.parentNode.replaceChild(c,s),k(c,null,t[o++])}else{let c=y(s.nodeValue.replaceAll(m,"<!>")),a=Array.from(c.content.childNodes);for(let u=0;u<a.length;u++){let d=a[u];d.nodeType===8&&k(d,null,t[o++])}s.parentNode.replaceChild(c.content,s)}}}i(R,"processTemplate");var y=i((e,t)=>{let n=document.createElement("template");return n.innerHTML=e,(t==null?void 0:t.as)==="nodes"?[...n.content.childNodes]:n},"createNodes"),ae=i((e,...t)=>{let n=M.get(e)||(M.set(e,e),e);if(!t.length)return n.length===1?y(n[0],{as:"nodes"}):y(n.join(""),{as:"nodes"});let r=y(n.join(m));return R(r,t),[...r.content.childNodes]},"html");function ne(e=null){let t=e;return n=>n!==void 0?t=n:t}i(ne,"ref");const ie=`.title {
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
`;export{oe as U,ae as X,re as Y,ie as c,ne as d,V as h,le as s};
