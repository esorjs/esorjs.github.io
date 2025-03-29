## Hooks de Ciclo de Vida

### beforeMount, onMount, beforeUpdate, onUpdate, onDestroy

Hooks para manejar el ciclo de vida del componente.

```javascript
import { beforeMount, onMount, beforeUpdate, onUpdate, onDestroy } from "esor";

// Se ejecuta antes de montar el componente
beforeMount(() => {
  console.log("Antes de montar");
});

// Se ejecuta después de montar el componente
onMount(() => {
  console.log("Componente montado");
});

// Se ejecuta antes de actualizar
beforeUpdate(() => {
  console.log("Antes de actualizar");
});

// Se ejecuta después de actualizar
onUpdate(() => {
  console.log("Componente actualizado");
});

// Se ejecuta cuando el componente se destruye
onDestroy(() => {
  console.log("Componente destruido");
});
```

### Example Ciclo de Vida

```javascript
import { component, html, onMount, onDestroy } from "esor";

component("lifecycle-demo", () => {
  onMount(() => {
    console.log("Componente montado");
  });

  onDestroy(() => {
    console.log("Componente destruido");
  });

  return html`<div>Demo del ciclo de vida</div>`;
});
```
