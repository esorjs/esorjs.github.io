# Introducción

## ¿Qué es Esor?

Esor es un framework web moderno y minimalista basado en Web Components, diseñado para crear interfaces de usuario interactivas y de alto rendimiento. Combina la potencia de los estándares web nativos con un sistema reactivo elegante, ofreciendo una experiencia de desarrollo fluida y productiva.

```javascript
import { component, html, signal } from "esor";

component("hello-world", () => {
  return html`<h1>¡Hola, mundo!</h1>`;
});
```

::: warning
Esor is in version: `beta`, use it wisely, it is not yet ready for production.
:::

## ¿Por qué Esor?

### 🚀 Rendimiento Excepcional

Esor utiliza Web Components nativos y un sistema de reactividad grano de fino, lo que resulta en aplicaciones rápidas y eficientes con un bundle size mínimo.

### 💡 Intuitivo y Familiar

Si conoces HTML, CSS y JavaScript, te sentirás como en casa. Esor adopta patrones familiares y los mejora con características modernas:

```javascript
import { component, html, signal, effect } from "esor";

component("user-profile", () => {
  const user = signal({ name: "Ana" });

  effect(() => {
    console.log("Nombre actual:", user().name);
  });

  return html`
    <div class="profile">
      <h2>${() => user().name}</h2>
      <button onclick=${() => user({ name: "Juan" })}>Cambiar Nombre</button>
    </div>
  `;
});
```

### 🔧 Flexible y Extensible

- Utiliza herramientas y estándares web modernos
- Se integra perfectamente con otras bibliotecas
- Funciona con tus herramientas de desarrollo favoritas

### 📦 Todo lo Necesario, Nada Más

- Sistema de componentes basado en estándares
- Reactividad granular con signals
- Sistema de templates potente y eficiente
- Hooks intuitivos para gestión de estado y efectos
- Cero dependencias

## Características Principales

### 🔌 Web Components Nativos

Componentes reusables basados en estándares web.

### ⚡ Reactividad Granular

Sistema de signals para actualizaciones precisas y eficientes.

### 📝 Templates Expresivos

Sintaxis declarativa y potente para definir interfaces.

### 🎯 Developer Experience

APIs intuitivas y herramientas de desarrollo modernas.

## Comparación con Otros Frameworks

| Característica       | Esor           | Lit            | React       |
| -------------------- | -------------- | -------------- | ----------- |
| Base                 | Web Components | Web Components | Virtual DOM |
| Reactividad          | Signals        | Properties     | Hooks       |
| Bundle Size          | ~3KB           | ~5KB           | ~40KB       |
| Curva de Aprendizaje | Baja           | Media          | Media       |
| Ecosistema           | En crecimiento | Maduro         | Muy grande  |

## ¿Para Quién es Esor?

Esor es ideal para:

- 🎯 Desarrolladores que valoran la simplicidad y el rendimiento
- 🔧 Proyectos que necesitan componentes web reutilizables
- 🚀 Aplicaciones que requieren alto rendimiento
- 📚 Equipos que prefieren estándares web modernos

## Próximos Pasos

- [Guía de Inicio Rápido](./getting-started)
- [Tutorial Básico](./tutorial)
- [Documentación de la API](./api)
- [Ejemplos](./examples)

::: tip CONSEJO
Esor está diseñado para ser adoptado gradualmente. Puedes empezar con un solo componente en tu aplicación existente e ir creciendo desde ahí.
:::

::: warning NOTA
Esor requiere navegadores modernos que soporten Web Components. Consulta la [tabla de compatibilidad](https://caniuse.com/?search=web%20components) para más detalles.
:::
