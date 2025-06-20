import{Z as e,A as n,c as l,j as r}from"./chunks/app.Dbi3JLp4.js";import{_ as h,C as o,c as p,o as d,ag as t,G as k}from"./chunks/framework.Bw-5EFTY.js";e("my-counter",()=>{const s=n(0);return r`
    <div class="container">
      <h1>Count: ${s}</h1>
      <button onclick=${()=>s(s()+1)}>+</button>
      <button onclick=${()=>s(s()-1)}>-</button>

      <style>
        ${l}
      </style>
    </div>
  `});const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction.md","filePath":"guide/introduction.md"}'),c={name:"guide/introduction.md"};function g(s,i,u,E,m,F){const a=o("my-counter");return d(),p("div",null,[i[0]||(i[0]=t("",12)),k(a),i[1]||(i[1]=t("",22))])}const v=h(c,[["render",g]]);export{f as __pageData,v as default};
