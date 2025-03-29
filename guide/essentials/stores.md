## Hooks de Store

### store(initialState, options)

Crea un store global con estado persistente opcional.

```javascript
import { store } from "esor";

const [state, store] = store(
  {
    count: 0,
  },
  {
    persist: "app-state", // opcional, para persistencia
  }
);

// Usar el store
store.setState((prev) => ({ ...prev, count: prev.count + 1 }));

// Suscribirse a cambios
store.subscribe((newState) => {
  console.log("State updated:", newState);
});
```
