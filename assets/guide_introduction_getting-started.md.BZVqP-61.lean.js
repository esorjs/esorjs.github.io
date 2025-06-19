import{Z as n,A as l,c as h,j as p}from"./chunks/app.B-PDXqBi.js";import{_ as k,C as e,c as E,o as r,ag as a,G as d}from"./chunks/framework.Bw-5EFTY.js";n("hello-world",()=>{const i=l("World");return p`
    <div class="container">
      <h1>Hello ${i}!</h1>
      <input value=${i} oninput=${s=>i(s.target.value)} />
    </div>

    <style>
      ${h}
    </style>
  `});const B=JSON.parse('{"title":"Quick Start Guide","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction/getting-started.md","filePath":"guide/introduction/getting-started.md"}'),g={name:"guide/introduction/getting-started.md"};function o(i,s,y,c,F,u){const t=e("hello-world");return r(),E("div",null,[s[0]||(s[0]=a("",9)),d(t),s[1]||(s[1]=a("",2))])}const b=k(g,[["render",o]]);export{B as __pageData,b as default};
