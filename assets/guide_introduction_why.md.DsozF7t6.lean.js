import{r as l,d as t,c as d,G as c}from"./chunks/app.CxStahrp.js";import{_ as p,C as i,c as h,o as u,ag as s,G as n,w as m}from"./chunks/framework.DPDPlp3K.js";l("my-counter",()=>{const a=t(0);return c`
    <div class="container">
      <h1>Count: ${a}</h1>
      <button onclick=${()=>a(a()+1)}>+</button>
      <button onclick=${()=>a(a()-1)}>-</button>

      <style>
        ${d}
      </style>
    </div>
  `});const v=JSON.parse('{"title":"¿Por qué Esor?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction/why.md","filePath":"guide/introduction/why.md"}'),k={name:"guide/introduction/why.md"};function b(a,e,E,f,g,F){const r=i("my-counter"),o=i("ClientOnly");return u(),h("div",null,[e[0]||(e[0]=s("",18)),n(o,null,{default:m(()=>[n(r)]),_:1}),e[1]||(e[1]=s("",21))])}const C=p(k,[["render",b]]);export{v as __pageData,C as default};
