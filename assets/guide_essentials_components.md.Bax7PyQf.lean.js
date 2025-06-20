import{Z as n,A as k,c as t,j as p}from"./chunks/app.Dbi3JLp4.js";import{_ as e,C as r,c as E,o as d,ag as a,G as g}from"./chunks/framework.Bw-5EFTY.js";n("happy-app",()=>{const i=k(!0);return p`
    <div style="margin:16px 0">
      <h2>Are you happy?</h2>
      <p style="font-size: 50px">${()=>i()?"😀":"😥"}</p>
      <answer-button no=${()=>i(!1)} yes=${()=>i(!0)}></answer-button>
    </div>

    <style>
      ${t}
    </style>
  `});n("answer-button",({yes:i,no:s})=>p`
    <div style="margin-top:8px">
      <button onclick=${s}>NO</button>
      <button onclick=${i}>YES</button>
    </div>

    <style>
      ${t}
    </style>
  `);const B=JSON.parse('{"title":"Componentes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/components.md","filePath":"guide/essentials/components.md"}'),F={name:"guide/essentials/components.md"};function o(i,s,h,y,c,u){const l=r("happy-app");return d(),E("div",null,[s[0]||(s[0]=a("",20)),g(l),s[1]||(s[1]=a("",2))])}const b=e(F,[["render",o]]);export{B as __pageData,b as default};
