import{n,y as k,c as t,L as p}from"./chunks/app.CKdIyf5Y.js";import{_ as e,C as r,c as E,o as d,ag as a,G as F}from"./chunks/framework.DPDPlp3K.js";n("happy-app",()=>{const i=k(!0);return p`
    <div class="container" style="margin:16px 0">
      <h2>Are you happy?</h2>
      <p style="font-size: 50px">${()=>i()?"😀":"😥"}</p>
      <answer-button onno=${()=>i(!1)} onyes=${()=>i(!0)}></answer-button>
    </div>

    <style>
      ${t}
    </style>
  `});n("answer-button",function(){return p`
    <div style="margin-top:8px">
      <button onclick=${()=>this.emit("no")}>NO</button>
      <button onclick=${()=>this.emit("yes")}>YES</button>
    </div>

    <style>
      ${t}
    </style>
  `});const m=JSON.parse('{"title":"Componentes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/components.md","filePath":"guide/essentials/components.md"}'),g={name:"guide/essentials/components.md"};function o(i,s,h,y,c,u){const l=r("happy-app");return d(),E("div",null,[s[0]||(s[0]=a("",20)),F(l),s[1]||(s[1]=a("",2))])}const b=e(g,[["render",o]]);export{m as __pageData,b as default};
