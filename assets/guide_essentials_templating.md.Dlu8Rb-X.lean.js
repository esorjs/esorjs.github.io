import{o as e,c as r,L as n,g as y,J as C,$ as B}from"./chunks/app.BoDcaR0x.js";import{_ as m,C as h,c as q,o as A,ag as p,G as k}from"./chunks/framework.DPDPlp3K.js";e("various-styles",()=>n`
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
      ${r}
    </style>
  `);e("colors-loops",()=>n`
     <div class="container">
      <ul>
        ${["red","blue","green","yellow"].map(s=>n`<li key=${s}>${s}</li>`)}
      </ul>
    </div>

    <style>
      ${r}
    </style>
  `);e("emoji-list",()=>{const i=y(["🎁","📦","🚚","💪","🐽","🐸","🐻","🪱","🪳"]);return n`
    <div class="container">
      <h2>Emoji List</h2>
      <ul>
        ${()=>i().map(a=>n`<li key=${a}>${a}</li>`)}
      </ul>
      <br />
      <button onclick=${()=>{const a=[...i()];a.unshift(a.pop()),i(a)}}>Cycle Emoji</button>
    </div>

    <style>
      ${r}
    </style>
  `});e("my-refs",function(){let i={current:null};const s=()=>{var t;return(t=i.current)==null?void 0:t.focus()};let a;const g=t=>a=t,o=()=>{a&&a.focus()};let F=B();C(()=>F().placeholder=new Date);const d=()=>F().focus();let E;return n`
    <div class="container">
      <div>
        <input
          ref=${t=>E=t}
          placeholder="Click to refresh hourly...."
        />
        <button onclick=${()=>E.value=new Date}>Update</button>
      </div>

      <div>
        <input ref=${F} placeholder="Write something..." />
        <button onclick=${d}>Focus Input</button>
        <input ref=${i} placeholder="Write something..." />
        <button onclick=${s}>Focus Input</button>
      </div>

      <div>
        <input ref=${g} placeholder="Write something..." />
        <button onclick=${o}>Focus Input</button>
      </div>

      <style>
        ${r}
      </style>
    </div>
  `});const l=["red","orange","green"];e("template-conditional",()=>{const i=y(0);return n`
    <div class="container">
      Light is:
      <h3 style=${()=>"color: "+l[i()]}>
        ${()=>l[i()]}
      </h3>

      <p>
        You must
        ${()=>l[i()]==="red"&&n`<span>STOP</span>`}
        ${()=>l[i()]==="orange"&&n`<span>SLOW DOWN</span>`}
        ${()=>l[i()]==="green"&&n`<span>GO</span>`}
      </p>

      <button onclick=${()=>i((i()+1)%l.length)}>Next light</button>
    </div>

    <style>
      ${r}
    </style>
  `});const f=JSON.parse('{"title":"Templating","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/templating.md","filePath":"guide/essentials/templating.md"}'),v={name:"guide/essentials/templating.md"};function b(i,s,a,g,o,F){const d=h("various-styles"),E=h("colors-loops"),t=h("emoji-list"),c=h("my-refs"),u=h("template-conditional");return A(),q("div",null,[s[0]||(s[0]=p("",9)),k(d),s[1]||(s[1]=p("",6)),k(E),s[2]||(s[2]=p("",4)),k(t),s[3]||(s[3]=p("",12)),k(c),s[4]||(s[4]=p("",4)),k(u)])}const I=m(v,[["render",b]]);export{f as __pageData,I as default};
