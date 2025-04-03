import{o as h,g as e,c as p,L as k,T as o}from"./chunks/app.ClaAdPT1.js";import{_ as E,C as t,c as g,o as c,ag as n,G as l}from"./chunks/framework.DPDPlp3K.js";h("my-name",()=>{const s=e("Juan Cristobal");return s("Xiomara"),k`
    <div class="container">
      <h3>Hello ${s}!</h3>
    </div>

    <style>
      ${p}
    </style>
  `});h("doubled-computed",()=>{const s=e(10),i=()=>s()*2,a=o(()=>s()*2);return k`
    <div class="container">
      <div>doubleCount1: <span style="color:red">${i()} </span></div>
      <div>
        doubleCount2: <span style="color:purple">${a()} </span>
      </div>
    </div>

    <style>
      ${p}
    </style>
  `});const b=JSON.parse('{"title":"Reactivity","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/reactivity.md","filePath":"guide/essentials/reactivity.md"}'),F={name:"guide/essentials/reactivity.md"};function y(s,i,a,u,C,m){const r=t("my-name"),d=t("doubled-computed");return c(),g("div",null,[i[0]||(i[0]=n("",9)),l(r),i[1]||(i[1]=n("",3)),l(d)])}const D=E(F,[["render",y]]);export{b as __pageData,D as default};
