# Guía de Inicio Rápido

## Instalación

### NPM

```bash
npm install esor
```

### CDN

```html
<script type="module">
  import {
    component,
    html,
    signal,
  } from "https://unpkg.com/esor/dist/esor.min.js";
</script>
```

## Uso Básico

```javascript
import { component, html, signal } from "esor";

// Crear un componente
component("hello-world", () => {
  // Estado local
  const name = signal("Mundo");

  return html`
    <div>
      <h1>Hola ${name}!</h1>
      <input value=${name} oninput=${(e) => name(e.target.value)} />
    </div>
  `;
});
```

## Uso en el Proyecto

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="./components/hello-world.js"></script>
  </head>
  <body>
    <hello-world></hello-world>
  </body>
</html>
```
