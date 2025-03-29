# Reactivity

## Declare state

### signal(initialValue)

#### Declare state

```javascript
import { component, html, signal } from "esor";

component("my-component", () => {
  const name = signal("Juan Cristobal");
  return html`<h1>Hello ${name}!</h1>`;
});
```

#### Update state

```javascript
import { component, html, signal } from "esor";

component("my-component", () => {
  const name = signal("Juan Cristobal");
  name("Xiomara"); // Actualiza el valor
  return html`<h1>Hello ${name}!</h1>`;
});
```

#### Computed state

```javascript
import { component, html, signal } from "esor";

component("my-component", () => {
  const count = signal(10);
  const doubleCount1 = () => count() * 2; // funcion flecha
  const doubleCount2 = computed(() => count() * 2); //usando computed

  return html`
    <div>
      <div>${doubleCount1()}</div>
      <div>${doubleCount2()}</div>
    </div>
  `;
});
```
