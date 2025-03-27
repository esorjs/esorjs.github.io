# Tutorial Básico

## Creando tu Primer Componente

### component(name, setup)

Crea un nuevo componente web personalizado.

- **name:** Nombre del tag HTML del componente (debe cumplir con el formato: `lowercase-words`).
- **setup:** Función que se ejecuta al inicializar el componente; recibe las propiedades y debe retornar una vista (usando `html`).

```javascript
component("my-component", (props) => {
  // Definición del componente
  return html`...`,
});

// Factory Class HTMLElement
// –––––––––––––––––––––––––
//    |
//    v
component("my-component", (props) => {
//               ^             ^
//         HTML tag name    properties
//         –––––––––––––    ––––––––––
//
//  (Component definition here ... )
//
// return view
  return html`...`,
});
```

### 1. Estructura Básica

Importa la API principal y define un componente sencillo:

```javascript
import { component, html } from "esor";

component("my-component", () => {
  return html` <div>Mi primer componente</div> `;
});
```

### 2. Añadiendo Estado

Utiliza signal para crear estado reactivo. Cada vez que se actualiza la señal, la vista se re-renderiza automáticamente:

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

### 3. Usando Props

Las propiedades del componente se reciben en el parámetro props o se pueden desestructurar. Estas propiedades provienen de los atributos definidos en el HTML.

Ejemplo:

```javascript
import { component, html } from "esor";

component("user-card", (props) => {
  return html`
    <div class="card">
      <h3>${props.name}</h3>
      <p>${props.email}</p>
    </div>
  `;
});
```

//o con destructuracion:

```javascript
component("user-card", (props) => {
  const { name, email } = props;
  return html`
    <div class="card">
      <h3>${name}</h3>
      <p>${email}</p>
    </div>
  `;
});
```

También puedes desestructurar directamente:

```javascript
component("user-card", ({ name, email }) => {
  return html`
    <div class="card">
      <h2>My User Card</h2>
      <p>${name}</p>
      <p>${email}</p>
    </div>
  `;
});
```

O utilizando el contexto this:

```javascript
component("user-card", function () {
  return html`
    <div class="card">
      <h2>My User Card</h2>
      <p>${this.props.name}</p>
      <p>${this.props.email}</p>
    </div>
  `;
});
```

Uso:
<user-card name="Juan" email="juanonexample.com"></user-card>

### 4. Manejo de Eventos

Los eventos se manejan directamente en el template mediante atributos que comienzan con on. En el ejemplo, se crea una lista de tareas (todos) con un input para agregarlas.

```javascript
import { component, html, signal } from "esor";

component("todo-list", () => {
  const todos = signal([]);
  const input = signal("");

  const addTodo = () => {
    if (input()) {
      todos([...todos(), input()]);
      input("");
    }
  };

  return html`
    <div>
      <input value=${input} oninput=${(e) => input(e.target.value)} />
      <button onclick=${addTodo}>Añadir</button>
      <ul>
        ${() => todos().map((todo) => html`<li>${todo}</li>`)}
      </ul>
    </div>
  `;
});
```

::::info
**Consejo:**
Siempre envuelve las lecturas de señales en funciones
`${() => input()}` para asegurar que el sistema reaccione a los cambios.
::::
