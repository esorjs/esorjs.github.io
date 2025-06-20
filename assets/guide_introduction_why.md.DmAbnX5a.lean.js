import{Z as o,A as k,c as d,j as l}from"./chunks/app.Dbi3JLp4.js";import{_ as c,C as E,c as g,o as u,ag as h,G as y}from"./chunks/framework.Bw-5EFTY.js";o("auto-complete",n=>{const{placeholder:i="Search...",items:a=["apple","banana","cherry","orange"]}=n,e=k(""),t=()=>{const s=e().toLowerCase();return s===""?a:a.filter(p=>p.toLowerCase().includes(s))};return l`
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder=${i}
        oninput=${s=>e(s.target.value)}
      />
      <ul class="search-results">
        ${()=>t().map(s=>l`<li class="result-item">${s}</li>`)}
      </ul>
    </div>

    <style>
      ${d}
    </style>
  `});const C=JSON.parse('{"title":"Why Esor?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction/why.md","filePath":"guide/introduction/why.md"}'),F={name:"guide/introduction/why.md"};function m(n,i,a,e,t,r){const s=E("auto-complete");return u(),g("div",null,[i[0]||(i[0]=h("",18)),y(s),i[1]||(i[1]=h("",21))])}const q=c(F,[["render",m]]);export{C as __pageData,q as default};
