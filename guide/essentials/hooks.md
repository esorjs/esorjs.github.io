# Hooks de Esor

## Hooks de Estado y Reactividad

### signal(initialValue)

Hook fundamental para crear estados reactivos.

```javascript
import { signal } from "esor";

// Uso básico
const count = signal(0);

// Leer valor
console.log(count);

// Establecer nuevo valor
count(1);

// Actualizar basado en valor previo
count(count + 1); //correcto

count((prev) => prev + 1); //incorrecto
```

::: warning
Para actualizar el signal se debe pasar el getter: js`count(count() + 1)`, o directamente el valor js`count(1)`, esto se mostrará como un String:
js`count((prev) => prev + 1); ` a diferencia de otros.

:::

### computed(fn)

Crea una señal computada que se actualiza automáticamente cuando sus dependencias cambian.

```javascript
import { signal, computed } from "esor";

const count = signal(0);
const doubled = computed(() => count * 2);

// o simplemente hacer:
const doubled = () => count * 2;

// doubled() se actualizará automáticamente cuando count cambie
```

## Hooks de Efectos

### onEffect(fn)

Ejecuta efectos secundarios que se sincronizan con los cambios de estado.

```javascript
import { onEffect } from "esor";

onEffect(() => {
  // Este código se ejecuta cuando las dependencias cambian

  // Opcional: retornar función de limpieza
  return () => {
    // Cleanup
  };
});
```

## Hooks de Memorización

### memo(fn, deps)

Memoriza un valor calculado y solo lo recalcula cuando las dependencias cambian.

```javascript
import { memo } from "esor";

const memoizedValue = memo(() => computeExpensiveValue(dep), [dep]);
```

## Hooks de Referencias

### ref()

Crea una referencia mutable que persiste entre renderizados.

```javascript
import { ref } from "esor";

const ref = ref();
// Acceder al valor actual
console.log(ref.current);
```

## Hooks de Eventos

### emit(name, detail)

Hook para emitir eventos personalizados.

```javascript
import { emit } from "esor";

const event = emit("custom-event", {
  data: "some data",
});
```

## Hooks de Utilidad

### batch(fn)

Agrupa múltiples actualizaciones de estado en una sola actualización.

```javascript
import { batch } from "esor";

batch(() => {
  setCount(count + 1);
  setName("John");
  // Solo provocará una actualización
});
```
