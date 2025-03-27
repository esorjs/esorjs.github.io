# Ejemplos

## Counter App

```javascript
import { component, html, signal } from "esor";

component("counter-app", () => {
  const count = signal(0);

  return html`
    <div>
      <h1>Count: ${count}</h1>
      <button onclick=${() => count(count() + 1)}>+</button>
      <button onclick=${() => count(count() - 1)}>-</button>
    </div>
  `;
});
```

## Todo List

```javascript
import { component, html, signal } from "esor";

component("todo-list", () => {
  const todos = signal([]);
  const input = signal("");

  const addTodo = () => {
    if (input()) {
      todos([...todos(), { id: Date.now(), text: input() }]);
      input("");
    }
  };

  const removeTodo = (id) => {
    todos(todos().filter((todo) => todo.id !== id));
  };

  return html`
    <div>
      <input
        value=${input}
        oninput=${(e) => input(e.target.value)}
        onkeyup=${(e) => e.key === "Enter" && addTodo()}
      />
      <button onclick=${addTodo}>Add Todo</button>

      <ul>
        ${() =>
          todos().map(
            (todo) => html`
              <li key=${todo.id}>
                ${todo.text}
                <button onclick=${() => removeTodo(todo.id)}>❌</button>
              </li>
            `
          )}
      </ul>
    </div>
  `;
});
```

## Fetch Data

```javascript
import { component, html, signal, onEffect } from "esor";

component("user-list", () => {
  const users = signal([]);
  const loading = signal(true);
  const error = signal(null);

  onEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        users(data);
        loading(false);
      })
      .catch((err) => {
        error(err.message);
        loading(false);
      });
  });

  return html`
    <div>
      ${() => (loading() ? html`<p>Loading...</p>` : null)} ${() =>
        error() ? html`<p>Error: ${error()}</p>` : null}

      <ul>
        ${() =>
          users().map(
            (user) => html`
              <li key=${user.id}>
                <h3>${user.name}</h3>
                <p>${user.email}</p>
              </li>
            `
          )}
      </ul>
    </div>
  `;
});
```
