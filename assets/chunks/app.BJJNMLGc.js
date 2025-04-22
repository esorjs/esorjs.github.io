var F=Object.defineProperty,j=e=>{throw TypeError(e)},Z=(e,n,t)=>n in e?F(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,o=(e,n)=>F(e,"name",{value:n,configurable:!0}),O=(e,n,t)=>Z(e,typeof n!="symbol"?n+"":n,t),L=(e,n,t)=>n.has(e)||j("Cannot "+t),H=(e,n,t)=>(L(e,n,"read from private field"),t?t.call(e):n.get(e)),W=(e,n,t)=>n.has(e)?j("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),z=(e,n,t,r)=>(L(e,n,"write to private field"),n.set(e,t),t),d=null,x=0,S=new Set,B=o(e=>{let n=e,t=[],r=o(l=>{if(l===void 0)return d&&!t.includes(d)&&(t.push(d),d.subs&&d.subs.add(r)),n;let s=typeof l=="function"?l(n):l;if(!Object.is(s,n))if(n=s,x>0)for(let a=0;a<t.length;a++)S.add(t[a]);else{let a=t.slice();for(let c=0;c<a.length;c++)a[c]()}return n},"getterSetter");return r.subs=t,r},"signal"),k=o(e=>{let n=new Set,t=!1,r=o(()=>{if(t)return;t=!0;let l=d;d=r;try{e()}finally{d=l,t=!1}},"reactive");return r.subs=n,r(),()=>{n.forEach(l=>{let s=l.subs.indexOf(r);s!==-1&&l.subs.splice(s,1)}),n.clear()}},"effect"),oe=o(e=>{let n=B(e());return k(()=>n(e())),()=>n()},"computed");o(e=>{x++;try{return e()}finally{if(x--,x===0){let n=Array.from(S);S.clear(),n.forEach(t=>t())}}},"batch");function D(e,n,t=null){let r=new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0});return t&&t.dispatchEvent(r),r}o(D,"emit");function I(e=null){let n=e;return t=>t!==void 0?n=t:n}o(I,"ref");var K=o(e=>e==null?"":String(e).replace(/[&<>'"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[n]),"sanitizeHtml");function h(e,{mark:n=!1,parent:t=null}={}){let r=document.createDocumentFragment();if(!(e!=null&&e.length))return r;for(let l of e)l&&(n&&l&&(l.__nodeGroups=!0),Array.isArray(l)?r.appendChild(h(l,{mark:n})):r.appendChild(l));return t&&r.childNodes.length&&t.appendChild(r),r}o(h,"createFragment");function G(e,n){if(!e||!n||!n.parentNode)return;let t=n.parentNode,r=o(i=>{for(let u of i)!u||u.parentNode!==t||(u._cleanup&&typeof u._cleanup=="function"&&u._cleanup(),t.removeChild(u))},"removeNodes"),l=o((i,u)=>i.length!==u.length||i.some((p,v)=>!p.isEqualNode(u[v])),"nodesChanged"),s=n.__nodeGroups||[],a=new Map(s.map(i=>[i.key,i])),c=e.map((i,u)=>{var v;let p=Array.isArray(i)?i.filter(Boolean):[i];return{key:((v=p.find(b=>{var A;return((A=b==null?void 0:b.getAttribute)==null?void 0:A.call(b,"key"))!=null}))==null?void 0:v.getAttribute("key"))||`__key_${u}`,nodes:p}}),g=new Map(c.map(i=>[i.key,i]));for(let i of s)!g.has(i.key)&&r(i.nodes);let f=n;for(let i of c){let u=a.get(i.key);if(u)if(l(u.nodes,i.nodes))r(u.nodes),t.insertBefore(h(i.nodes,{mark:!0}),f.nextSibling);else{let p=f.nextSibling;u.nodes[0]!==p&&t.insertBefore(h(u.nodes),p),i.nodes=u.nodes}else t.insertBefore(h(i.nodes,{mark:!0}),f.nextSibling);f=i.nodes[i.nodes.length-1]||f}n.__nodeGroups=c}o(G,"reconcile");var _=new WeakMap,y="\uFEFF",C=o((e,n,t)=>{if(n)if(e.removeAttribute(n),n==="ref")typeof t=="function"?t(e):t&&(t.current=e);else if(n[0]=="o"&&n[1]=="n"&&typeof t=="function"){let r=n.slice(2).toLowerCase();e.addEventListener(r,t),e._cleanup=()=>e.removeEventListener(r,t)}else n==="style"&&typeof t=="object"?k(()=>Object.assign(e.style,t)):typeof t=="function"?k(()=>T(e,n,t())):T(e,n,t);else U(e,t)},"render");function T(e,n,t){n==="value"||n==="checked"?e[n]=t:t===!1||t===null||t===void 0?e.removeAttribute(n):e.setAttribute(n,t)}o(T,"setAttribute");function $(e,n){let t=e.parentNode,r=e.nextSibling;for(;r&&r.__nodeGroups;)r._cleanup&&r._cleanup(),t.removeChild(r),r=e.nextSibling;n!=null&&n.length&&V(h(n,{mark:!0}),t,e.nextSibling)}o($,"replaceNodes");function U(e,n){let t=o(r=>{if(typeof r=="boolean"&&(r=""),Array.isArray(r))G(r,e);else{let l=document.createTextNode(K(typeof r=="string"?r:String(r??"")));$(e,[l])}},"updateContent");typeof n=="function"?k(()=>t(n())):t(n)}o(U,"setContent");function V(e,n,t=null){!e||!n||(t&&t.parentNode===n?n.insertBefore(e,t):n.appendChild(e))}o(V,"insertFragment");function N(e){let n=document.createElement("template");return n.innerHTML=e,n}o(N,"createTemplate");function q(e,n){let t=[],r=document.createTreeWalker(e.content,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);for(;r.nextNode();)t.push(r.currentNode);let l=0;for(let s=0;s<t.length;s++){let a=t[s];if(a.nodeType===Node.ELEMENT_NODE&&a.attributes.length)for(let c of Array.from(a.attributes))c.value===y&&C(a,c.name,n[l++]);else if(a.nodeType===Node.TEXT_NODE&&a.nodeValue.includes(y))if(a.nodeValue===y){let c=document.createComment("");a.parentNode.replaceChild(c,a),C(c,null,n[l++])}else{let c=N(a.nodeValue.replaceAll(y,"<!>")),g=Array.from(c.content.childNodes);for(let f=0;f<g.length;f++){let i=g[f];i.nodeType===Node.COMMENT_NODE&&C(i,null,n[l++])}a.parentNode.replaceChild(c.content,a)}}}o(q,"processTemplate");function M(e,n=null){let t=N(e);return typeof n=="function"&&n(t),[...t.content.childNodes]}o(M,"templateToNodes");function w(e,...n){if(e.length===1)return M(e[0]);if(!n.length)return M(e.join(""));let t=e.join(y),r=N(t);return q(r,n),[...r.content.childNodes]}o(w,"build");function Q(e,...n){return _.has(e)?w(_.get(e),...n):(_.set(e,e),w(e,...n))}o(Q,"html");function X(e,n,t="error"){let r=t==="warn"?console.warn:console.error,l=n instanceof Error?n:new Error(String(n));return r(`[Esor Error] ${e}:`,l.message),l}o(X,"handleError");var E=null,Y=o(e=>{E=e,e._lifecycles={beforeMount:[],mount:[],beforeUpdate:[],update:[],destroy:[]},e.runHook=n=>{var r;let t=(r=e._lifecycles)==null?void 0:r[n];if(!(!t||!t.length))for(let l=0;l<t.length;l++)queueMicrotask(()=>t[l].call(e))}},"createLifecycle"),m=o((e,n)=>{if(!E||!E._lifecycles){X("lifecycle",`Hook called outside ctx setup for "${e}"`);return}E._lifecycles[e].push(n)},"addHook");o(e=>m("beforeMount",e),"beforeMount");var le=o(e=>m("mount",e),"onMount");o(e=>m("beforeUpdate",e),"beforeUpdate");o(e=>m("update",e),"onUpdate");o(e=>m("destroy",e),"onDestroy");o(e=>{let n=e();return typeof n=="function"&&m("destroy",n),()=>{}},"onEffect");var ee=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/;function J(e){if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(ee.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e}o(J,"parseAttributeValue");function P(e){for(let n of e.attributes){let{name:t,value:r}=n;t.startsWith("on")||t.startsWith("ref")||(e.props[t]=B(J(r)))}}o(P,"initializeProps");function R(e){e&&(e.emit=(n,t)=>D(n,t,e))}o(R,"initDispatch");var ne=/^[a-z][a-z0-9-]*$/,te="open",re=o((e,n={})=>{var t,r,l;return l=class extends HTMLElement{constructor(){super(),W(this,t,this.attachShadow({mode:n.mode||te})),W(this,r,!1),O(this,"props",Object.create(null)),O(this,"_cleanup",[]),Y(this),R(this),P(this);let s=e==null?void 0:e.call(this,this.props),a=typeof s=="function"?s():s;h(a||[a],{parent:H(this,t)}),this.runHook("beforeMount")}connectedCallback(){H(this,r)||(z(this,r,!0),this.runHook("mount"))}disconnectedCallback(){this.runHook("destroy"),this._cleanup.forEach(s=>s()),this._cleanup=[],z(this,r,!1)}},t=new WeakMap,r=new WeakMap,l},"BaseComponent"),ie=o((e,n,t={})=>{typeof customElements<"u"&&ne.test(e)&&!customElements.get(e)&&customElements.define(e,re(n,t))},"component");const ae=`.title {
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
`;export{Q as G,le as J,I as W,ae as c,ie as e,oe as k,B as y};
