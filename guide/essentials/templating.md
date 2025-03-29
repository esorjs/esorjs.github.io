# Templating

#### Minimal template

```javascript
import { component, html, signal } from "esor";

component("my-component", () => {
  return html`<h1>Hello World!</h1>`;
});
```

#### Styling

Cómo aplicar estilos en línea, a través de objetos o etiquetas `<style></style>` o `<link/> ` dentro del template.

```javascript
import { component, html, signal } from "esor";

component("my-component", () => {
  return html`
    <div class="container">
      <link href="./app.css" rel="stylesheet" />

      <h1 class="title">I am text</h1>
      <button style=${{ fontSize: "10rem", color: "brown" }}>
        I am a button
      </button>

      <input
        style="color: green; font-size: 2rem; font-weight: bold; width: 100%;"
        value="I am an input"
      />
    </div>

    <style>
      .title {
        color: red;
      }
    </style>
  `;
});
```

#### Loop

Iterar sobre arrays para generar listas dinámicas, usando expresiones que mapean los elementos a nodos del DOM.

```javascript
import { component, html, signal } from "esor";

component("my-component", () => {
  return html`
    const colors = ["red", "blue", "green", "yellow"]; // Define the colors array

    return html`
        <ul>
            ${colors.map((color) => html`<li key=${color}>${color}</li>`)}
        </ul>
    `;
});
```

#### Loop Reactive

Uso de señales para crear listas reactivas que se actualizan automáticamente al cambiar el estado.

```javascript
import { component, html, signal } from "esor";

component("emoji-list", () => {
  const items = signal(["🎁", "📦", "🚚", "💪", "🐽", "🐸", "🐻", "🪱", "🪳"]);

  const cycle = () => {
    const newItems = [...items()];
    newItems.unshift(newItems.pop());
    items(newItems);
  };

  return html`
    <h2>Emoji List</h2>
    <ul>
      ${() => items().map((item) => html`<li key=${item}>${item}</li>`)} // envolver
      en funcion flecha para mostrar los cambios
    </ul>
    <button onclick=${cycle}>Cycle Emoji</button>
  `;
});
```

#### Events

Gestión de eventos (por ejemplo, clicks) para actualizar el estado y reaccionar a la interacción del usuario.

```javascript
import { component, html, signal } from "esor";

component("counter-app", () => {
  const count = signal(0);

  return html`
    <div>
      <h2>Contador: ${count}</h2>
      <button onclick=${() => count(count() + 1)}>Incrementar</button>
    </div>
  `;
});
```

#### Dom Ref

Varias aproximaciones para manejar referencias a elementos del DOM:

```javascript
import { component, html, onMount } from "esor";

component("counter-app", () => {
  const inputRef = { current: null };
  onMount(() => inputRef.current?.focus());
  return html` <input ref=${inputRef} placeholder="Escribe algo..." /> `;
});
```

con asignacion

````javascript
import { component, html, onMount } from "esor";

component("counter-app", () => {
    let inputRef;
    onMount(() => inputRef.focus());
    return html`
        <input ref=${(el) => (inputRef = el)} placeholder="Escribe algo..." />
    `;
});

```

con metodo ref

```javascript
import { component, html, onMount } from "esor";

component("my-component", () => {
  const inputElement = ref();
  onMount(() => inputElement().focus());
  return html`<input ref=${inputElement} placeholder="Escribe algo..." />`;
});
````

#### Conditional

Renderizado condicional para mostrar diferentes contenidos en función del estado.

```javascript
import { component, html, signal } from "esor";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

component("my-component", () => {
  const lightIndex = signal(0);
  const nextLight = () =>
    lightIndex((lightIndex() + 1) % TRAFFIC_LIGHTS.length);

  return html`
    <button onclick=${nextLight}>Next light</button>
    <p>Light is: ${() => TRAFFIC_LIGHTS[lightIndex()]}</p>
    <p>
      You must ${() =>
        TRAFFIC_LIGHTS[lightIndex()] === "red" && html`<span>STOP</span>`} ${() =>
        TRAFFIC_LIGHTS[lightIndex()] === "orange" &&
        html`<span>SLOW DOWN</span>`} ${() =>
        TRAFFIC_LIGHTS[lightIndex()] === "green" && html`<span>GO</span>`}
    </p>
  `;
});
```
