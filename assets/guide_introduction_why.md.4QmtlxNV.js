import{r as s,d as n,c as o,G as r}from"./chunks/app.Bdf5eF46.js";import{_ as l,C as h,c as p,o as d,ag as i,G as c}from"./chunks/framework.DPDPlp3K.js";s("my-counter",()=>{const e=n(0);return r`
    <div class="container">
      <h1>Count: ${e}</h1>
      <button onclick=${()=>e(e()+1)}>+</button>
      <button onclick=${()=>e(e()-1)}>-</button>

      <style>
        ${o}
      </style>
    </div>
  `});const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction/why.md","filePath":"guide/introduction/why.md"}'),k={name:"guide/introduction/why.md"};function u(e,a,m,f,g,b){const t=h("my-counter");return d(),p("div",null,[a[0]||(a[0]=i(`<h2 id="why-esor" tabindex="-1">Why Esor? <a class="header-anchor" href="#why-esor" aria-label="Permalink to &quot;Why Esor?&quot;">​</a></h2><h2 id="esor-framework" tabindex="-1">Esor Framework <a class="header-anchor" href="#esor-framework" aria-label="Permalink to &quot;Esor Framework&quot;">​</a></h2><p>Esor is a JavaScript framework for creating interactive web applications that combines the power of native Web Components with a modern reactive system based on signals. Unlike other frameworks, Esor focuses on providing a minimalistic but complete solution, with a bundle of only ~5KB and zero dependencies.</p><h2 id="the-motivation" tabindex="-1">The Motivation <a class="header-anchor" href="#the-motivation" aria-label="Permalink to &quot;The Motivation&quot;">​</a></h2><p>My journey to create Esor began with a quest for simplicity and performance in modern web development. While mainstream frameworks offer robust solutions, I noticed a gap: the need for a lightweight framework that leveraged the native power of modern browsers without sacrificing the development experience.</p><h2 id="the-birth-of-esor" tabindex="-1">The Birth of Esor <a class="header-anchor" href="#the-birth-of-esor" aria-label="Permalink to &quot;The Birth of Esor&quot;">​</a></h2><p>The decision to create Esor arose from several common challenges in web development today:</p><h3 id="unnecessary-complexity" tabindex="-1">Unnecessary Complexity. <a class="header-anchor" href="#unnecessary-complexity" aria-label="Permalink to &quot;Unnecessary Complexity.&quot;">​</a></h3><p>Modern frameworks often include functionality that is rarely used, increasing bundle size and complexity. Esor was born with a minimalist philosophy: include only the essentials, allowing you to add what you need.</p><h3 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h3><p>While many frameworks require significant hydration time and use Virtual DOM, Esor leverages native Web Components and a granular reactivity system to deliver fast and accurate DOM updates.</p><h3 id="web-standards" tabindex="-1">Web Standards <a class="header-anchor" href="#web-standards" aria-label="Permalink to &quot;Web Standards&quot;">​</a></h3><p>Instead of creating proprietary abstractions, Esor builds on established web standards:</p><ul><li>Custom Elements for components</li><li>Shadow DOM for encapsulation</li><li>Template literals for defining templates</li></ul><h3 id="development-experience" tabindex="-1">Development Experience <a class="header-anchor" href="#development-experience" aria-label="Permalink to &quot;Development Experience&quot;">​</a></h3><p>I wanted to create an intuitive API that felt familiar to <code>React</code> and <code>SolidJS</code> developers, but took advantage of modern browser capabilities:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-counter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> signal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &lt;h1&gt;Count: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &lt;button onclick=\${</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> count</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">count</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>The component is shown below:</p>`,18)),c(t),a[1]||(a[1]=i('<h2 id="key-advantages" tabindex="-1">Key Advantages <a class="header-anchor" href="#key-advantages" aria-label="Permalink to &quot;Key Advantages&quot;">​</a></h2><h3 id="_1-zero-config" tabindex="-1">1. Zero Config <a class="header-anchor" href="#_1-zero-config" aria-label="Permalink to &quot;1. Zero Config&quot;">​</a></h3><p>Esor works directly in the browser without the need for compilation or complex configuration.</p><h3 id="_2-minimal-bundle-size" tabindex="-1">2. Minimal Bundle Size <a class="header-anchor" href="#_2-minimal-bundle-size" aria-label="Permalink to &quot;2. Minimal Bundle Size&quot;">​</a></h3><p>With only <code>~3KB gzipped</code>, Esor offers a complete solution without the weight of larger frameworks.</p><h3 id="_3-optimal-performance" tabindex="-1">3. Optimal Performance <a class="header-anchor" href="#_3-optimal-performance" aria-label="Permalink to &quot;3. Optimal Performance&quot;">​</a></h3><ul><li>No Virtual DOM</li><li>Granular updates with signals</li><li>Shadow DOM for better encapsulation</li><li>Efficient renconcile system</li></ul><h3 id="developer-experience" tabindex="-1">Developer Experience <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Developer Experience&quot;">​</a></h3><ul><li>Familiar and modern syntax</li><li>Integrated development tools</li><li>Comprehensive documentation</li></ul><h3 id="micro-frontends" tabindex="-1">Micro-frontends <a class="header-anchor" href="#micro-frontends" aria-label="Permalink to &quot;Micro-frontends&quot;">​</a></h3><p>Its Web Components-based nature makes it perfect for creating stand-alone elements that can be integrated into any application.</p><h3 id="high-performance-applications" tabindex="-1">High Performance Applications <a class="header-anchor" href="#high-performance-applications" aria-label="Permalink to &quot;High Performance Applications&quot;">​</a></h3><p>Ideal for applications that require frequent and efficient DOM updates.</p><h3 id="reusable-components" tabindex="-1">Reusable Components <a class="header-anchor" href="#reusable-components" aria-label="Permalink to &quot;Reusable Components&quot;">​</a></h3><p>Perfect for creating component libraries that can be used in any framework or application.</p><h3 id="looking-to-the-future" tabindex="-1">Looking to the Future <a class="header-anchor" href="#looking-to-the-future" aria-label="Permalink to &quot;Looking to the Future&quot;">​</a></h3><p>Esor is constantly evolving, but maintains its core principles:</p><ul><li>Keep it simple</li><li>Prioritize performance</li><li>Adhere to web standards</li><li>Improve the developer experience</li></ul><p>The vision is clear: to provide a tool that allows developers to build modern and efficient web interfaces, without the unnecessary complexity of heavier solutions.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Esor is not intended to replace established frameworks, but to offer a lightweight and efficient alternative for projects that value simplicity, performance and web standards. It is the result of a desire to simplify modern web development without sacrificing the capabilities developers need.</p>',21))])}const v=l(k,[["render",u]]);export{F as __pageData,v as default};
