import{r as p,d as k,c as e,G as E}from"./chunks/app.CxStahrp.js";import{_ as r,C as a,c as d,o,ag as n,G as t,w as g}from"./chunks/framework.DPDPlp3K.js";p("hello-world",()=>{const i=k("Mundo");return E`
    <div class="container">
      <h1>Hola ${i}!</h1>
      <input value=${i} oninput=${s=>i(s.target.value)} />
    </div>

    <style>
      ${e}
    </style>
  `});const _=JSON.parse('{"title":"Guía de Inicio Rápido","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction/getting-started.md","filePath":"guide/introduction/getting-started.md"}'),c={name:"guide/introduction/getting-started.md"};function y(i,s,F,u,m,C){const l=a("hello-world"),h=a("ClientOnly");return o(),d("div",null,[s[0]||(s[0]=n("",9)),t(h,null,{default:g(()=>[t(l)]),_:1}),s[1]||(s[1]=n("",2))])}const A=r(c,[["render",y]]);export{_ as __pageData,A as default};
