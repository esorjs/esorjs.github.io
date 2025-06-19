import{Z as t,A as k,c as p,j as l}from"./chunks/app.B-PDXqBi.js";import{_ as e,C as r,c as E,o as d,ag as n,G as g}from"./chunks/framework.Bw-5EFTY.js";t("happy-app",()=>{const i=k(!0);return l`
    <div style="margin:16px 0">
      <h2>Are you happy?</h2>
      <p style="font-size: 50px">${()=>i()?"😀":"😥"}</p>
      <answer-button no=${()=>i(!1)} yes=${()=>i(!0)}></answer-button>
    </div>

    <style>
      ${p}
    </style>
  `});t("answer-button",i=>{let{yes:s,no:a}=i;return l`
    <div style="margin-top:8px">
      <button onclick=${a}>NO</button>
      <button onclick=${s}>YES</button>
    </div>

    <style>
      ${p}
    </style>
  `});const B=JSON.parse('{"title":"Componentes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/components.md","filePath":"guide/essentials/components.md"}'),F={name:"guide/essentials/components.md"};function o(i,s,a,y,c,u){const h=r("happy-app");return d(),E("div",null,[s[0]||(s[0]=n("",20)),g(h),s[1]||(s[1]=n("",2))])}const b=e(F,[["render",o]]);export{B as __pageData,b as default};
