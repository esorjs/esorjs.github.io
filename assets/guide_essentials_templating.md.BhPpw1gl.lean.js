import{r as p,c as k,G as n,d as E}from"./chunks/app.CxStahrp.js";import{_ as d,C as l,c as g,o,ag as t,G as h}from"./chunks/framework.DPDPlp3K.js";p("various-styles",()=>n`
    <div class="container">
      <h1 class="title">I am text</h1>
      <button style=${{fontSize:"3rem",color:"brown",margin:"18px"}}>
        I am a button
      </button>

      <input
        style="color: green; font-size: 2rem; font-weight: bold; width: 100%;margin: 8px"
        value="I am an input"
      />
    </div>

    <style>
      ${k}
    </style>
  `);p("colors-loops",()=>n`
    <link href="./app.css" rel="stylesheet" />
    <div class="container">
      <ul>
        ${["red","blue","green","yellow"].map(s=>n`<li key=${s}>${s}</li>`)}
      </ul>
    </div>

    <style>
      ${k}
    </style>
  `);p("emoji-list",()=>{const a=E(["🎁","📦","🚚","💪","🐽","🐸","🐻","🪱","🪳"]);return n`
    <div class="container">
      <h2>Emoji List</h2>
      <ul>
        ${()=>a().map(i=>n`<li key=${i}>${i}</li>`)}
      </ul>
      <button onclick=${()=>{const i=[...a()];i.unshift(i.pop()),a(i)}}>Cycle Emoji</button>
    </div>

    <style>
      ${k}
    </style>
  `});const A=JSON.parse('{"title":"Templating","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/templating.md","filePath":"guide/essentials/templating.md"}'),y={name:"guide/essentials/templating.md"};function c(a,s,i,C,u,B){const e=l("various-styles"),r=l("colors-loops"),F=l("emoji-list");return o(),g("div",null,[s[0]||(s[0]=t("",9)),h(e),s[1]||(s[1]=t("",6)),h(r),s[2]||(s[2]=t("",5)),h(F),s[3]||(s[3]=t("",14))])}const v=d(y,[["render",c]]);export{A as __pageData,v as default};
